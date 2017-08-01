function pascalCase(str) {
  str = str
      .replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
      .replace(/[-_\s]+(.)?/g, function(match, c) {
      return c ? c.toUpperCase() : '';
    });
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function syncEvent(node, eventName, newEventHandler) {
  const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventNameLc];

  // Remove old listener so they don't double up.
  if (oldEventHandler) {
    node.removeEventListener(eventNameLc, oldEventHandler);
  }

  // Bind new listener.
  if (newEventHandler) {
    node.addEventListener(eventNameLc, eventStore[eventNameLc] = function handler(e) {
      newEventHandler.call(this, e);
    });
  }
}

export default function (opts) {
  const { React, ReactDOM } = opts;
  if (!React || !ReactDOM) {
    throw new Error('React and ReactDOM must be dependencies, globally on your `window` object or passed via opts.');
  }

  return (tagName) => {
    const ReactComponent = createReactComponent(React, ReactDOM, tagName);
    ReactComponent.propTypes = createPropTypes();

    return ReactComponent;
  }
}

function createReactComponent(React, ReactDOM, tagName, attrs) {
  const displayName = pascalCase(tagName);

  return class ReactComponent extends React.Component {
    static get displayName() {
      return displayName;
    }
    shouldComponentUpdate() {
      return false;
    }
    componentDidMount() {
      this.componentWillReceiveProps(this.props);
    }
    componentWillReceiveProps(props) {
      const node = ReactDOM.findDOMNode(this);
      Object.keys(props).forEach(name => {
        if (['children', 'style'].indexOf(name) !== -1) {
          return;
        }

        if (name.indexOf('ion') === 0 && name[3] === name[3].toUpperCase()) {
          syncEvent(node, name, props[name]);
        } else {
          node[name] = props[name];
        }
      });
    }
    componentWillUpdate() {
      console.log(ReactDOM.findDOMNode(this));
    }
    componentDidUpdate() {
      console.log(ReactDOM.findDOMNode(this));
    }
    render() {
      const actualProps = Object.keys(this.props)
        .filter(propName => !['children', 'style', 'classname', 'class'].includes(propName.toLowerCase()))
        .reduce((all, propName) => {
          switch(typeof this.props[propName]) {
          case 'boolean':
          case 'string':
          case 'number':
            all[propName] = this.props[propName];
            return all;
          default:
            return all;
          }
        }, {});

      return React.createElement(tagName, {
        ...actualProps,
        style: this.props.style,
        class: this.props.className,
      }, this.props.children);
    }
  }
}

function createPropTypes() {
  return {};
}

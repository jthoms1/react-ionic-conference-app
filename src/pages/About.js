import React, { Component } from 'react';
import './About.scss';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonNavbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonDatetime,
  IonSelect,
  IonOption
} from '../ionic-components';

export default class About extends Component {
  presentPopover() {

  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonNavbar>
            <IonButtons slot="start">
              <IonButton menuToggle>
                <IonIcon slot="icon-only" name="menu"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>About</IonTitle>
            <IonButtons slot="end">
              <IonButton icon-only onClick={() => this.presentPopover()}>
                <IonIcon slot="icon-only" name="more"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonNavbar>
        </IonHeader>

        <IonContent>
          <div className="about-header">
            <img src="assets/img/ionic-logo-white.svg" alt="ionic logo" />
          </div>
          <div className="about-info">
            <h4>Ionic Conference</h4>

            <IonList no-lines>
              <IonItem>
                <IonIcon name="calendar" slot="start"></IonIcon>
                <IonLabel>Date</IonLabel>
                <IonDatetime displayFormat="MMM DD, YYYY" max="2056" data={this.props.conferenceDate}></IonDatetime>
              </IonItem>

              <IonItem>
                <IonIcon name="pin" slot="start"></IonIcon>
                <IonLabel>Location</IonLabel>
                <IonSelect>
                  <IonOption value="madison" selected>Madison, WI</IonOption>
                  <IonOption value="austin">Austin, TX</IonOption>
                  <IonOption value="chicago">Chicago, IL</IonOption>
                  <IonOption value="seattle">Seattle, WA</IonOption>
                </IonSelect>
              </IonItem>
            </IonList>

            <p>
              The Ionic Conference is a one-day conference featuring talks from the
              Ionic team. It is focused on Ionic applications being built with
              Ionic 2. This includes migrating apps from Ionic 1 to Ionic 2,
              Angular concepts, Webpack, Sass, and many other technologies used
              in Ionic 2. Tickets are completely sold out, and we’re expecting
              more than 1000 developers – making this the largest Ionic
              conference ever!
            </p>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

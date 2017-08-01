import React from 'react';

import {
  IonMenu,
  IonToolbar,
  IonButton,
  IonListHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonList,
  IonItem,
} from '../ionic-components';

export default ({appPages, loggedOutPages, loggedInPages, isAuthenticated, history}) => {

  function renderlistItems(list) {
    return list
      .filter(route => !!route.path)
      .map((p) => (
        <IonButton key={p.title} path={p.path}>
          <IonIcon slot="start" name={p.icon}></IonIcon>
          {p.title}
        </IonButton>
      ));
  }

  return (
    <IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>,
      <IonContent className="outer-content">
        <IonList>
          <IonListHeader>
            Navigate
          </IonListHeader>
          { renderlistItems(appPages) }
        </IonList>
        <IonList>
          <IonListHeader>
            Account
          </IonListHeader>
          { isAuthenticated ?
            renderlistItems(loggedOutPages) :
            renderlistItems(loggedInPages) }
        </IonList>
        <IonList>
          <IonListHeader>
            Tutorial
          </IonListHeader>
          <IonItem menuClose onClick={() => {}}>
            <IonIcon slot="start" name="hammer"></IonIcon>
            Show Tutorial
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
}

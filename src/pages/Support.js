import React, { Component } from 'react';
import './Form.scss'

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
  IonTextarea
} from '../ionic-components';

export default class Support extends Component {
  submit() {}
  render() {
    return (
      <IonPage className="page-user">
        <IonHeader>
          <IonNavbar>
            <IonButtons slot="start">
              <IonButton menuToggle>
                <IonIcon slot="icon-only" name="menu"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Support</IonTitle>
          </IonNavbar>
        </IonHeader>

        <IonContent>
          <div className="logo">
            <img src="/assets/img/appicon.svg" alt="Ionic Logo"/>
          </div>
          <form onSubmit={() => this.submit()}>
            <IonList no-lines>
              <IonItem>
                <IonLabel stacked color="primary">Enter your support message below</IonLabel>
                <IonTextarea name="supportQuestion" rows="6" required></IonTextarea>
              </IonItem>
            </IonList>
            <div>
              <IonButton block type="submit">Submit</IonButton>
            </div>
          </form>
        </IonContent>
      </IonPage>
    );
  }
}

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
  IonInput
} from '../ionic-components';

export default class Signup extends Component {
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
            <IonTitle>Signup</IonTitle>
          </IonNavbar>
        </IonHeader>

        <IonContent>
          <div className="logo">
            <img src="/assets/img/appicon.svg" alt="Ionic Logo"/>
          </div>
          <form ref={(signUpForm => this.signupForm = signUpForm)} novalidate>
            <IonList no-lines>
              <IonItem>
                <IonLabel stacked color="primary">Username</IonLabel>
                <IonInput value={this.username} name="username" type="text" required>
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel stacked color="primary">Password</IonLabel>
                <IonInput value={this.password} name="password" type="password" required>
                </IonInput>
              </IonItem>
            </IonList>
            <div>
              <IonButton onClick={() => this.onSignup()} type="submit" block>Create</IonButton>
            </div>
          </form>
        </IonContent>
      </IonPage>
    );
  }
}

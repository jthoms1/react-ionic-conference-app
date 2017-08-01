import React, { Component } from 'react';
import UserAccount from '../containers/UserAccount';
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
  IonInput,
  IonRow,
  IonCol
} from '../ionic-components';

export default class Login extends Component {
  render() {
    return (
      <IonPage className="page-user">
        <IonHeader>
          <IonNavbar>
            <IonButtons slot="start">
              <IonButton IonButton menuToggle>
                <IonIcon slot="icon-only" name="menu"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonNavbar>
        </IonHeader>

        <IonContent>
          <div className="logo">
            <img src="assets/img/appicon.svg" alt="Ionic logo"/>
          </div>

          <UserAccount>
            {({logInUser, signUpUser}) => (
            <form noValidate>
              <IonList no-lines>
                <IonItem>
                  <IonLabel stacked color="primary">Username</IonLabel>
                  <IonInput
                    ref={(input) => (this.usernameInput = input)}
                    name="username"
                    type="text"
                    spellcheck="false"
                    autocapitalize="off"
                    required>
                  </IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel stacked color="primary">Password</IonLabel>
                  <IonInput name="password" type="password" required></IonInput>
                </IonItem>
              </IonList>

              <IonRow responsive-sm>
                <IonCol>
                  <IonButton onClick={() => logInUser(this.usernameInput.value)} type="submit" block>
                    Login
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton onClick={() => signUpUser(this.usernameInput.value)} color="light" block>
                    Signup
                  </IonButton>
                </IonCol>
              </IonRow>
            </form>
            )}
          </UserAccount>

        </IonContent>
      </IonPage>
    );
  }
}

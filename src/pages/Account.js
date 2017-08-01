import React, { Component } from 'react';
import UserAccount from '../containers/UserAccount';
import './Account.scss';

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
} from '../ionic-components';

export default class Account extends Component {
  updatePicture(){}
  changeUsername(){}
  changePassword(){}
  support(){}
  render() {
    return (
      <IonPage className="page-account">
        <IonHeader>
          <IonNavbar>
            <IonButtons slot="start">
              <IonButton menuToggle>
                <IonIcon slot="icon-only" name="menu"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Account</IonTitle>
          </IonNavbar>
        </IonHeader>

        <IonContent className="outer-content">
          <UserAccount>
            {({user, logOutUser}) => (
            <div>
              <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar"/>
              <h2>{user.userName}</h2>

              <IonList inset>
                <IonItem href="#" onClick={() => this.updatePicture()}>Update Picture</IonItem>
                <IonItem href="#" onClick={() => this.changeUsername()}>Change Username</IonItem>
                <IonItem href="#" onClick={() => this.changePassword()}>Change Password</IonItem>
                <IonItem href="#" onClick={() => this.support()}>Support</IonItem>
                <IonItem href="#" onClick={() => logOutUser(logOutUser)}>Logout</IonItem>
              </IonList>
            </div>
            )}
          </UserAccount>
        </IonContent>
      </IonPage>
    );
  }
}

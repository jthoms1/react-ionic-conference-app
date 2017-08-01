import React from 'react';
import SessionDetail from '../containers/SessionDetail';
import './SpeakerList.scss';

import {
  IonPage,
  IonContent,
  IonHeader,
  IonNavbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
} from '../ionic-components';


export default ({ match, history }) => (
  <SessionDetail>
    {({ speakers }) => {
      const speaker = speakers.find(s => s.id === parseInt(match.params.speakerId, 10));
      return (
        <IonPage className="speaker-page-list">
          <IonHeader>
            <IonNavbar>
              <IonButtons slot="start">
                <IonButton href="#" onClick={() => history.goBack()} color="primary">
                  <IonIcon slot="icon-only" name="arrow-back"></IonIcon>Back
                </IonButton>
              </IonButtons>
              <IonTitle>{speaker.name}</IonTitle>
            </IonNavbar>
          </IonHeader>

          <IonContent padding className="speaker-detail">
            <div>
              <img src={speaker.profilePic} alt={speaker.name}/>
              <br/>
              <IonButton icon-only clear small color="twitter">
                <IonIcon name="logo-twitter"></IonIcon>
              </IonButton>
              <IonButton icon-only clear small color="github">
                <IonIcon name="logo-github"></IonIcon>
              </IonButton>
              <IonButton icon-only clear small color="instagram">
                <IonIcon name="logo-instagram"></IonIcon>
              </IonButton>
            </div>

            <p>{speaker.about}</p>
          </IonContent>
        </IonPage>
      );
    }}
  </SessionDetail>
);

import React from 'react';
import { dateFormat } from '../utils/dateformat';
import SessionDetail from '../containers/SessionDetail';

import {
  IonPage,
  IonContent,
  IonHeader,
  IonNavbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle
} from '../ionic-components';

function formatTime(dateString, formatString) {
  return dateFormat(new Date(dateString), formatString);
}

export default ({ match, location, history }) => {
  return (
    <SessionDetail>
      {({ sessions, speakers }) => {
        const session = sessions.find(s => s.id === parseInt(match.params.sessionId, 10));
        const sessionSpeakers = speakers.filter(s => session.speakerIds.includes(s.id));
        return (
          <IonPage>
            <IonHeader>
              <IonNavbar>
                <IonButtons slot="start">
                  <IonButton href="#" onClick={() => history.goBack()} color="primary">
                    <IonIcon slot="icon-only" name="arrow-back"></IonIcon>Back
                  </IonButton>
                </IonButtons>
                <IonTitle>{session.name}</IonTitle>
              </IonNavbar>
            </IonHeader>
            <IonContent padding>
              <div>
                <h1>{session.name}</h1>
                { sessionSpeakers.map(speaker => (
                  <h4 key={speaker.name}>
                    {speaker.name}
                  </h4>
                ))}
                <p>
                  {formatTime(session.dateTimeStart, "h:MM tt")} &mdash;&nbsp;
                  {formatTime(session.dateTimeEnd, "h:MM tt")}
                </p>
                <p>{session.location}</p>
                <p>{session.description}</p>
              </div>
            </IonContent>
          </IonPage>
        );
      }}
    </SessionDetail>
  );
}

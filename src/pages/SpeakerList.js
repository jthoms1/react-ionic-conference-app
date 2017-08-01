import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionDetail from '../containers/SessionDetail';

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
  IonCard,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol
} from '../ionic-components';

function openSpeakerShare(speaker) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Share ' + speaker.name,
    buttons: [
      {
        text: 'Copy Link',
        handler: () => {
          console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
          if ( window['cordova'] && window['cordova'].plugins.clipboard) {
            window['cordova'].plugins.clipboard.copy(
              'https://twitter.com/' + speaker.twitter
            );
          }
        }
      },
      {
        text: 'Share via ...'
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  });

  actionSheet.present();
}

function openContact(speaker) {
  let mode = this.config.get('mode');

  let actionSheet = this.actionSheetCtrl.create({
    title: 'Contact ' + speaker.name,
    buttons: [
      {
        text: `Email ( ${speaker.email} )`,
        icon: mode !== 'ios' ? 'mail' : null,
        handler: () => {
          window.open('mailto:' + speaker.email);
        }
      },
      {
        text: `Call ( ${speaker.phone} )`,
        icon: mode !== 'ios' ? 'call' : null,
        handler: () => {
          window.open('tel:' + speaker.phone);
        }
      }
    ]
  });

  actionSheet.present();
}

const SpeakerItem = withRouter(({speaker, speakerSessions, history}) => (
  <IonCard className="speaker-card">
    <IonCard-header>
      <IonItem
        detail-none
        href="#"
        onClick={() => history.push(`/speakers/${speaker.id}`)}
      >
        <IonAvatar slot="start">
          <img src={speaker.profilePic} alt="Speaker profile pic"/>
        </IonAvatar>
        {speaker.name}
      </IonItem>
    </IonCard-header>

    <IonCard-content className="outer-content">
      <IonList>
        { speakerSessions.map(session => (
          <IonItem
            href="#"
            key={session.name}
            onClick={() => history.push(`/sessions/${session.id}`)}
          >
            <h3>{session.name}</h3>
          </IonItem>
        ))}
        <IonItem href="#" onClick={() => history.push(`/speakers/${speaker.id}`)}>
          <h3>About {speaker.name}</h3>
        </IonItem>
      </IonList>
    </IonCard-content>

    <IonGrid>
    <IonRow no-padding>
      <IonCol col-12 col-lg-auto text-center text-lg-left>
        <IonButton
          clear
          small
          color="primary"
          onClick={() => window.open(`https://www.twitter.com/${speaker.twitter}`, '_blank')}
        >
          <IonIcon slot="start" name="logo-twitter"></IonIcon>
          Tweet
        </IonButton>
      </IonCol>
      <IonCol col-12 col-lg-auto text-center>
        <IonButton clear small color="primary" onClick={() => openSpeakerShare(speaker)}>
          <IonIcon slot="start" name='share-alt'></IonIcon>
          Share
        </IonButton>
      </IonCol>
      <IonCol col-12 col-lg-auto text-center text-lg-right>
        <IonButton clear small color="primary" onClick={() => openContact(speaker)}>
          <IonIcon slot="start" name='chatboxes'></IonIcon>
          Contact
        </IonButton>
      </IonCol>
    </IonRow>
    </IonGrid>
  </IonCard>
));

export default () => (
  <IonPage>
    <IonHeader>
      <IonNavbar>
        <IonButtons slot="start">
          <IonButton menuToggle>
            <IonIcon name="menu"></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>Speakers</IonTitle>
      </IonNavbar>
    </IonHeader>
    <IonContent className="outer-content speaker-list">
      <IonList>
        <IonGrid fixed>
          <IonRow align-items-stretch>
            <IonCol col-12 col-md-6 align-self-stretch align-self-center approxItemHeight="457px">
              <SessionDetail>
                {({ sessions, speakers }) => {
                  return speakers.map((speaker) => {
                    const speakerSessions = sessions.filter(session => session.speakerIds.includes(speaker.id));
                    return <SpeakerItem key={speaker.id} speaker={speaker} speakerSessions={speakerSessions} />;
                  });
                }}
              </SessionDetail>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonList>
    </IonContent>
  </IonPage>
);

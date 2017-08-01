import React from 'react';
import SessionContainer from '../containers/Session';
import SessionList from '../components/SessionList';
import './Schedule.scss';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonNavbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonToolbar,
  IonSearchbar,
  IonRefresher,
  IonRefresherContent,
  IonFixed,
  IonFab,
  IonFabList,
  IonFabButton,
  IonSegment,
  IonSegmentButton
} from '../ionic-components';


const SchedulePage = () => (
  <SessionContainer>
    {({ filteredSessions, filterFavorites, addFavoriteSession,
      removeFavoriteSession, searchSessionsByName, updateFavoriteFilter }) => (
      <IonPage className="page-schedule">
        <IonHeader md-height="96px" ios-height="96px">
          <IonNavbar no-border-bottom>
            <IonButtons slot="start">
              <IonButton menuToggle>
                <IonIcon slot="icon-only" name="menu"></IonIcon>
              </IonButton>
            </IonButtons>
            <IonSegment
              value={filterFavorites}
              things={{red: true}}
              ionChange={(e) => updateFavoriteFilter(e.target.value)}
            >
              <IonSegmentButton value={false}>
                All
              </IonSegmentButton>
              <IonSegmentButton value={true}>
                Favorites
              </IonSegmentButton>
            </IonSegment>

            <IonButtons slot="end">
              <IonButton icon-only onClick={() => this.presentFilter()}>
                <IonIcon slot="icon-only" name="options-outline"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonNavbar>

          <IonToolbar no-border-top>
            <IonSearchbar
              color="primary"
              ionInput={(e) => searchSessionsByName(e.value)}
              placeholder="Search"
            >
            </IonSearchbar>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonRefresher ionRefresh={(e) => this.doRefresh(e)}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

          <SessionList
            sessions={filteredSessions}
            addFavoriteSession={addFavoriteSession}
            removeFavoriteSession={removeFavoriteSession}
            filterFavorites={filterFavorites}
          />
        </IonContent>
        <IonFixed>
          <IonFab bottom right>
            <IonFabButton>
              <IonIcon name="share"></IonIcon>
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton color="vimeo" onClick={() => this.openSocial('Vimeo')}>
                <IonIcon name="logo-vimeo"></IonIcon>
              </IonFabButton>
              <IonFabButton color="google" onClick={() => this.openSocial('Google+')}>
                <IonIcon name="logo-googleplus"></IonIcon>
              </IonFabButton>
              <IonFabButton color="twitter" onClick={() => this.openSocial('Twitter')}>
                <IonIcon name="logo-twitter"></IonIcon>
              </IonFabButton>
              <IonFabButton color="facebook" onClick={() => this.openSocial('Facebook')}>
                <IonIcon name="logo-facebook"></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
        </IonFixed>
      </IonPage>
    )}
  </SessionContainer>
);

export default SchedulePage;

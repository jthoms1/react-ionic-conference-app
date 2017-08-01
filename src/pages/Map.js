import React from 'react';
import LocationContainer from '../containers/Location';
import Map from '../components/Map';
import './Map.scss';

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

const MapPage = () => (
  <IonPage className="page-map">
    <IonHeader>
      <IonNavbar>
        <IonButtons slot="start">
          <IonButton menuToggle>
            <IonIcon slot="icon-only" name="menu"></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>Map</IonTitle>
      </IonNavbar>
    </IonHeader>

    <IonContent className="map-page">
      <LocationContainer>
        {({locations}) => (
          <Map locations={locations} />
        )}
      </LocationContainer>
    </IonContent>
  </IonPage>
)

export default MapPage;

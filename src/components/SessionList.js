import React from 'react';
import { dateFormat } from '../utils/dateformat';
import { withRouter } from 'react-router-dom';

import {
  IonList,
  IonItem,
  IonListHeader,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '../ionic-components';

function formatTime(dateString, formatString) {
  return dateFormat(new Date(dateString), formatString);
}

function groupByStartTime(sessions) {
  return sessions
    .sort((a, b) => (
      new Date(b.dateTimeStart) - new Date(a.dateTimeStart)
    ))
    .reduce((groups, session) => {
      let starterHour = new Date(session.dateTimeStart);
      starterHour.setMinutes(0);
      starterHour.setSeconds(0);
      starterHour = starterHour.toJSON();

      const foundGroup = groups.find(group => group.startTime === starterHour);
      if (foundGroup) {
        foundGroup.sessions.push(session);
      } else {
        groups.push({
          startTime: starterHour,
          sessions: [session]
        });
      }
      return groups;
  }, []);
}

export default withRouter(({sessions, addFavoriteSession, removeFavoriteSession, filterFavorites, history}) => {

  if (sessions.length === 0) {
    return (
      <IonList>
        <IonListHeader>
          No Sessions Found
        </IonListHeader>
      </IonList>
    );
  }

  const groups = groupByStartTime(sessions);

  return (
    <IonList>
      { groups.map((group, index) => (
        <IonItemGroup key={`group-${index}`}>
          <IonItemDivider sticky>
            <IonLabel>
              {formatTime(group.startTime, "h:MM tt")}
            </IonLabel>
          </IonItemDivider>
          { group.sessions.map((session, sessionIndex) => (
            <IonItemSliding key={`group-${index}-${sessionIndex}`} track={session.tracks[0].toLowerCase()}>
              <IonItem href={`/sessions/${session.id}`} onClick={() => history.push(`/sessions/${session.id}`)}>
                <IonLabel>
                  <h3>{session.name}</h3>
                  <p>
                    {formatTime(session.dateTimeStart, "h:MM tt")} &mdash;&nbsp;
                    {formatTime(session.dateTimeEnd, "h:MM tt")}:&nbsp;
                    {session.location}
                  </p>
                </IonLabel>
              </IonItem>
              <IonItemOptions>
                { filterFavorites ?
                  <IonItemOption color="danger" onClick={() => removeFavoriteSession(session.id)}>
                    Remove
                  </IonItemOption>
                  :
                  <IonItemOption color="favorite" onClick={() => addFavoriteSession(session.id)}>
                    Favorite
                  </IonItemOption>
                }
              </IonItemOptions>
            </IonItemSliding>
          )) }
        </IonItemGroup>
      )) }
    </IonList>
  );
});

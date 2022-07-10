import {
  IonApp,
  IonBadge,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { calendar, map, personCircle } from "ionicons/icons";
import React, { useRef } from "react";

const CoreTab: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="main-content"></IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={calendar} />
          <IonLabel>Schedule</IonLabel>
          <IonBadge>6</IonBadge>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={personCircle} />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={map} />
          <IonLabel>Map</IonLabel>
        </IonTabButton>
      </IonTabBar>
      <IonRouterOutlet />
    </IonTabs>
  );
};

export default CoreTab;

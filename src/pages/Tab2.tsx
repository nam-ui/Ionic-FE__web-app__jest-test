import {
  IonApp,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import CoreTab from "../components/core/tab/CoreTab";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonContent fullscreen>
      <ExploreContainer name="Tab 2 page" />
      <h1>Pages to page</h1>
    </IonContent>
  );
};

export default React.memo(Tab2);

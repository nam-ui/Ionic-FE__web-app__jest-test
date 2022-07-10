import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
  isPlatform,
} from "@ionic/react";
import React, { useEffect, useRef } from "react";

const CoreMenu: React.FC = () => {
  // const isDesktop = isPlatform("desktop");
  // const refIonMenu = useRef<HTMLIonMenuElement>(null);
  // refIonMenu.current?.open(isDesktop);

  return (
    <IonMenu side="start" contentId="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default CoreMenu;
function ionViewWillEnter() {
  throw new Error("Function not implemented.");
}

import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  backspaceOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import { useIonRouter } from "@ionic/react";

const Settings: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text={"Back"} icon={backspaceOutline} />
          </IonButtons>
          {/* <IonMenuButton slot="start"></IonMenuButton> */}
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={searchOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page Setting" />
      </IonContent>
    </IonPage>
  );
};

export default Settings;

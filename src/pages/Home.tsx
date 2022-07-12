import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  backspaceOutline,
  notificationsOutline,
  searchOutline,
} from "ionicons/icons";
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import { InputPhone } from "../components/_custom_component/InputPhone";
import { _optionLacation } from "../components/_custom_component/InputPhone/_mork";
const Home: React.FC = () => {
  const [inputPhone, setInputPhone] = React.useState("");
  const changeInputPhone = (value: any) => {
    setInputPhone(value);
  };
  const [inputChoce, setInputChoce] = React.useState<interface_option>({
    srcImageTitle: "https://cdn-icons-png.flaticon.com/512/206/206632.png",
    title: "vietnam",
    code: "mk",
    value: "84",
  });
  const changeChoice = (value: any) => {
    setInputChoce(value);
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          {/* <IonMenuButton slot="start"></IonMenuButton> */}
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={backspaceOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={searchOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <InputPhone
          changeValue={changeInputPhone}
          value={inputPhone}
          changeChoice={changeChoice}
          choice={inputChoce}
          option={_optionLacation}
        ></InputPhone>
      </IonContent>
    </IonPage>
  );
};

interface interface_option {
  title: string;
  value: string;
  srcImageTitle: string;
  code: string;
}
export default Home;

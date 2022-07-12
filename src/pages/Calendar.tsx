import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonMenuButton,
  IonPage,
  IonRow,
  IonSearchbar,
  IonText, IonToolbar
} from "@ionic/react";
import {
  backspaceOutline,
  cartOutline,
  filterOutline,
  homeOutline
} from "ionicons/icons";
const Calendar: React.FC = () => {
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start"></IonMenuButton>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={cartOutline}></IonIcon>
              <div className="count-products-cart">1</div>
            </IonButton>
            <IonButton>
              <IonIcon icon={filterOutline} />
            </IonButton>
            <IonButton>
              <IonIcon icon={homeOutline} />
            </IonButton>
          </IonButtons>
          <IonSearchbar placeholder="Tìm kiếm sản phẩm"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardTitle>
            <IonText>Danh mục sản phẩm</IonText>
          </IonCardTitle>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton size="large">
                    <IonIcon icon={backspaceOutline} />
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton size="large">
                    <IonIcon icon={backspaceOutline} />
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton size="large">
                    <IonIcon icon={backspaceOutline} />
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton size="large">
                    <IonIcon icon={backspaceOutline} />
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;

import { IonContent, IonImg, IonPage, IonText } from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";
import "../theme/introduction.css";
const Introduction: React.FC = (props) => {
  return (
    <IonPage id="main-content">
      <IonContent
        slot="fixed"
        fullscreen
        className="ion-padding"
        id="content-introduction"
      >
        <div className="fullscreen-relative">
          <div className="flex-box-column fullscreen-absolute">
            <Link to="/login">
              <IonImg src="https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg"></IonImg>
            </Link>
            <Link
              to="/login"
              className="end-item absolute-end absolute-end-left"
            >
              <IonText className="ion-text-center" slot="end">
                <h1>hqsoft.com.vn</h1>
              </IonText>
            </Link>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Introduction;

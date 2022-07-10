import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import { person, call } from "ionicons/icons";
import Tab1 from "../../../pages/Tab1";
const TabRootPage: React.FC = () => {
  return (
    <IonTabs>
      {/* --- Router Page --- */}
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/account" />
        <Route path="/tabs/contact" component={Tab1} exact={true} />
      </IonRouterOutlet>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="account" href="/tabs/account">
          <IonIcon icon={person} />
        </IonTabButton>
        <IonTabButton tab="contact" href="/tabs/contact">
          <IonIcon icon={call} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRootPage;

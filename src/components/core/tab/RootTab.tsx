import {
  AnimationBuilder,
  createAnimation,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import {
  calendarOutline,
  homeOutline,
  notificationsOutline,
  settingsOutline
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router";
import Calendar from "../../../pages/Calendar";
import Home from "../../../pages/Home";
import Notifications from "../../../pages/Notifications";
import Settings from "../../../pages/Settings";
const TabRootPage: React.FC = () => {
  const animationBuilder: AnimationBuilder = (baseEl, opts) => {
    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)
      .fromTo("opacity", 0, 1)
      .duration(250);
    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .fromTo("opacity", 1, 0)
      .duration(250);
    const animation = createAnimation()
      .addAnimation(enteringAnimation)
      .addAnimation(leavingAnimation);
    return animation;
  };
  return (
    <IonTabs>
      {/* --- Router Page --- */}
      <IonRouterOutlet animation={animationBuilder}>
        <Redirect exact path="/tabs" to="/tabs/home"></Redirect>
        <Route path="/tabs/home" exact={true} component={Home} />
        <Route path="/tabs/calendar" exact={true} component={Calendar}></Route>
        <Route
          path="/tabs/notifications"
          component={Notifications}
          exact={true}
        />
        <Route path="/tabs/settings" component={Settings} exact={true} />
      </IonRouterOutlet>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={homeOutline} />
        </IonTabButton>
        <IonTabButton tab="calendar" href="/tabs/calendar">
          <IonIcon icon={calendarOutline} />
        </IonTabButton>
        <IonTabButton tab="notifications" href="/tabs/notifications">
          <IonIcon icon={notificationsOutline} />
        </IonTabButton>
        <IonTabButton tab="settings" href="/tabs/settings">
          <IonIcon icon={settingsOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default TabRootPage;

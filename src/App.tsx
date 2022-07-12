import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, Switch } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "./theme/app.css";
import "./theme/variables.css";
// Option CSS swiper slide
import "@ionic/react/css/ionic-swiper.css";
import "../node_modules/swiper/modules/autoplay/autoplay.min.css";
import "../node_modules/swiper/modules/keyboard/keyboard.min.css";
import "../node_modules/swiper/modules/pagination/pagination.min.css";
import "../node_modules/swiper/modules/scrollbar/scrollbar.min.css";
import "../node_modules/swiper/modules/zoom/zoom.min.css";
import "../node_modules/swiper/swiper.min.css";

/* Theme variables */
import { backspaceOutline } from "ionicons/icons";
import AuthProvider from "./Auth";
import CoreMenu from "./components/core/menu/CoreMenu";
import RootTab from "./components/core/tab/RootTab";
import Introduction from "./pages/Introduction";
import Login from "./pages/Login";
import Register from "./pages/Register";
setupIonicReact({
  backButtonText: "Back",
  backButtonIcon: backspaceOutline,
  backButtonDefaultHref: "/",
});

const App: React.FC = () => {
  return (
    <AuthProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main-content">
            <CoreMenu />
            <IonRouterOutlet id="main-content">
              <Switch>
                <Route path="/introduction" component={Introduction} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/" component={RootTab} />
                <Redirect from="/" to={"/tabs/home"} />
              </Switch>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AuthProvider>
  );
};

export default App;

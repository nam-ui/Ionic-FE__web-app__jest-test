import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from "@ionic/react";
import { eyeOff, eyeOffOutline, fingerPrintOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import { IconButton, InputAdornment } from "@mui/material";
interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}
const Login: React.FC = (props) => {
  const [value, setValue] = useState<any>();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const submit = async () => {
    try {
    } catch (e) {}
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <IonPage id="main-content">
      <IonContent fullscreen className="ion-padding" id="content-introduction">
        <Link to="/introduction">
          <IonImg src="https://img.freepik.com/free-vector/shining-circle-purple-lighting-isolated-dark-background_1441-2396.jpg"></IonImg>
        </Link>
        <div className="form-content">
          <div>
            <IonText color="secondary" className="ion-text-center">
              <strong>Đăng nhập</strong>
            </IonText>
            <IonButton className="round">
              <IonIcon slot="icon-only" icon={fingerPrintOutline} />
            </IonButton>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
            <br />
            <br />
            <br /> <br />
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <IonIcon name={eyeOffOutline} />
                    ) : (
                      <IonIcon name={eyeOff} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <IonButton expand="full" type="submit">
              Log in
            </IonButton>
          </form>
        </div>
        <Link to="/register">
          <IonText color="secondary" className="ion-text-center">
            <strong>Already have an account?</strong>
          </IonText>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Login;

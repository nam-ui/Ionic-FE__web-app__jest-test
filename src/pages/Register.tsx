import { IonContent, IonLabel, IonPage, IonText } from "@ionic/react";
import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
const Register: React.FC = (props) => {
  return (
    <IonPage id="main-content">
      <IonContent fullscreen className="ion-padding">
        <Link to="/introduction">
          <IonText className="ion-text-center">
            <h1 className="fw-800">NOTELY</h1>
          </IonText>
        </Link>
        <IonText className="ion-text-center">
          <h1 className="fw-800">Create a free account</h1>
        </IonText>
        <IonText className="ion-text-center">
          <h3>
            Join Notely for free. Create and share unlimited notes with your
            friends.
          </h3>
        </IonText>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <IonLabel>email</IonLabel>
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <br />
              <IonLabel>password</IonLabel>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <br />
              <IonLabel>verifying password</IonLabel>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <br />
              <button type="submit" disabled={isSubmitting}>
                Send
              </button>
            </form>
          )}
        </Formik>
        <Link to="/login">
          <IonText color="secondary" className="ion-text-center">
            <strong>Already a member? Log in</strong>
          </IonText>
        </Link>
      </IonContent>
    </IonPage>
  );
};

export default Register;

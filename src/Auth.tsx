import React from "react";
// import { Redirect, Route, useLocation } from "react-router";
// import { NavLink } from "react-router-dom";

// interface AuthContextType {
//   user: any;
//   //   signin: (user: string, callback: VoidFunction) => void;
//   //   signout: (callback: VoidFunction) => void;
// }
// let AuthContext = React.createContext<AuthContextType>(null!);
// export default function AuthProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   let [user, setUser] = React.useState<any>(null);
//   let value = { user };
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// function useAuth() {
//   return React.useContext(AuthContext);
// }
// export function RequireAuth({ children }: { children: JSX.Element }) {
//   let auth = useAuth();
//   let location = useLocation();

//   if (!auth.user) {
//     return <NavLink to="/login" replace />;
//   }

//   return children;
// }

// function PrivateRoute({ children, ...rest }) {
//   let auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

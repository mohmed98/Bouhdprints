import { useState } from "react";
import { projectAuth } from "../firebase/config";

const useAuth = ({ email, password }) => {
  const [isValid, setIsValid] = useState(false);
  if (email) {
    setIsValid(true);
  }
  return { isValid };
};

export default useAuth;

// export function signIn({ email, password }) {
//   // console.log(email);
//   // console.log(password);
//   // const user, errorCode, errorMessage;
//   projectAuth
//     .signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
//   // return { user, errorCode, errorMessage };
// }
// export function signUp({ email, password }) {
//   // console.log(email);
//   // console.log(password);

//   projectAuth
//     .createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode);
//       console.log(errorMessage);
//     });
//   // return { user, errorCode, errorMessage };
// }

// export default { signIn, signUp };

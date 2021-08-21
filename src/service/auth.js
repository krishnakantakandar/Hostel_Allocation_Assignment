import React from "react";
import firebase from "../configs/Firebase-config";

export const auth = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((response) => {
      console.log("data ===>", response.user);

      return response.user;
    })

    .catch((err) => {
      return err;
    });
};

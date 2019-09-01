import React, { Component } from "react";
import firebase from "../firebase_keys";
export default class Home extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            firebase
              .auth()
              .signInAnonymously()
              .then(user => console.log(user))
              .catch(function(error) {
                console.log(error);
              });
          }}
        >
          login
        </button>
        <button
          onClick={() => {
            firebase
              .auth()
              .signOut()
              .then(function() {
                console.log("deslogado");
              })
              .catch(function(error) {
                console.log(error);
              });
          }}
        >
          logOut
        </button>
      </div>
    );
  }
}

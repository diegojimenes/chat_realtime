import React, { Component } from 'react'
import {connect} from 'react-redux'
import firebase from "../firebase_keys";
class Login extends Component {
    
    render() {
        console.log(this.props)
        return(
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

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Login)
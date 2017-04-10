
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';


class App extends Component {

    state = { isLoggedIn: null }

    componentWillMount () {
        firebase.initializeApp ({
            apiKey: "AIzaSyC1n5i_3w2krdY8oFdcGfTucMjCAdM82eQ",
            authDomain: "authreact-2d157.firebaseapp.com",
            databaseURL: "https://authreact-2d157.firebaseio.com",
            storageBucket: "authreact-2d157.appspot.com",
            messagingSenderId: "265664894120"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true });
            } 
            else {
                this.setState({ isLoggedIn: false });
            }
        });
    }

    renderContent() {

        switch(this.state.isLoggedIn) {
            case true:
                return <LogoutForm />
            case false:
                return <LoginForm />
            default:
                return <Spinner spinnerSize='large' />
        }
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
}

export default App;
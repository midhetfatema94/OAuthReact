
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount () {
        firebase.initializeApp ({
            apiKey: "AIzaSyC1n5i_3w2krdY8oFdcGfTucMjCAdM82eQ",
            authDomain: "authreact-2d157.firebaseapp.com",
            databaseURL: "https://authreact-2d157.firebaseio.com",
            storageBucket: "authreact-2d157.appspot.com",
            messagingSenderId: "265664894120"
        });
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    };
}

export default App;
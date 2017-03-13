import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
    apiKey: 'AIzaSyDs4mNFzoVLa1xT1c0IY8go91EuX7TxG4w',
    authDomain: 'auth-b9b43.firebaseapp.com',
    databaseURL: 'https://auth-b9b43.firebaseio.com',
    storageBucket: 'auth-b9b43.appspot.com',
    messagingSenderId: '1041162122242'
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
    apiKey: 'AIzaSyDs4mNFzoVLa1xT1c0IY8go91EuX7TxG4w',
    authDomain: 'auth-b9b43.firebaseapp.com',
    databaseURL: 'https://auth-b9b43.firebaseio.com',
    storageBucket: 'auth-b9b43.appspot.com',
    messagingSenderId: '1041162122242'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;

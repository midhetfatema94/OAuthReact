import React, { Component } from 'react';
import { Button, Card, CardSection, Spinner } from './common';
import firebase from 'firebase';
import { Text } from 'react-native';

class LogoutForm extends Component {
    
    state = { error: '', loading: false };
    
    clickedLogout () {
        
        this.setState({ loading: true, error: '' })

        firebase.auth().signOut()
        .then(() => {
             this.setState({ error: '', loading: false })
        })
        .catch(() => {
            this.setState({ error: 'Logout Failed.', loading: false});
        });

        console.log('log out')
    }

    renderButton () {
        
        if (this.state.loading) {
            return <Spinner spinnerSize='small' />
        }
        return (
            <Button onPress={this.clickedLogout.bind(this)}>
                Logout
            </Button>
        )
    }

    render () {
        return (
            <Card>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                
                <CardSection>
                    {this.renderButton()}
                </ CardSection>
            </ Card>
        );
    }
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LogoutForm;
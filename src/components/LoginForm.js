import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';
import { Text } from 'react-native';

class LoginForm extends Component {
    
    state = { email: '', password: '', error: '', loading: false };
    
    clickedLogin () {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true })

        // console.log('button has been pressed')

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailure.bind(this));
        });

    }

    renderButton () {
        
        if (this.state.loading) {
            return <Spinner spinnerSize='small' />
        }
        return (
            <Button onPress={this.clickedLogin.bind(this)}>
                Login
            </Button>
        )
    }

    onLoginFailure() {

        this.setState({ error: "Authentication Failed.", loading: false })
    }

    onLoginSuccess () {
        
        this.setState({
            error: '',
            email: '',
            password: '',
            loading: false
        });
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label = "Email"
                        value= {this.state.email}
                        onChangeText = {email => this.setState({ email })}
                        placeholder= "user@gmail.com"
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                        label = "Password"
                        value= {this.state.password}
                        onChangeText = {password => this.setState({ password })}
                        placeholder= "******"
                        isPassword
                    />
                </CardSection>

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

export default LoginForm;
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { Button, SocialIcon, Divider } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
// import { Facebook } from 'expo';



import styles from "./styles"
import VATCamera from "../../components/VATCamera"

class HomeTest extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }
    onSuccess({ exists, user}) {
        if (exists) Actions.Main()
        else Actions.CompleteProfile({ user })
    }

    onError(error) {
        alert(error.message);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image style={styles.image} source={require('../../../../assets/images/logo.png')}/>
                    <Text style={styles.title}>Everythings is recliamble</Text>
                </View>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        );
    }
}


export default connect(null, { })(HomeTest);

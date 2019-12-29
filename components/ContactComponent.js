import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';


class ContactComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: 'DISHES'
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    };


    render() {

        return (
            < Card title='Contact Information' >
                <Text style={{ marginTop: 10 }} >121, Clear Water Bay Road</Text>
                <Text style={{ marginTop: 10 }} >Clear Water Bay, Kowloon</Text>
                <Text style={{ marginTop: 10 }} >HONG KONG</Text>
                <Text style={{ marginTop: 10 }} >Tel: +852 1234 5678</Text>
                <Text style={{ marginTop: 10 }} >Fax: +852 8765 4321</Text>
                <Text style={{ marginTop: 10 }} >Email:confusion@food.net</Text>
            </Card >
        );
    }

}

export default ContactComponent;
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface FooterProps { }

const Footer = (props: FooterProps) => {
    return (
        <View style={styles.container}>
            <Text>Footer</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: 'green',
        justifyContent: 'center'
    }
});

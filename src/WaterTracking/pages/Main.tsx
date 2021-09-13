import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Content from '../components/Content.component';
import Footer from '../components/Footer.component';
import Header from '../components/Header.component';

interface MainProps { }

const Main = (props: MainProps) => {
    return (
        <View style={styles.container}>
            <Header />
            <Content />
            <Footer />
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

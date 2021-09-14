import React from 'react';
import { View, StyleSheet } from 'react-native';
import Content from '../components/Content.component';
import Footer from '../components/Footer.component';
import Header from '../components/Header.component';
import SwipeDetector from '../components/SwipeDetector.component';

interface MainProps { }

const Main = (props: MainProps) => {
    return (
        <View style={styles.container}>
            <SwipeDetector>
                <Header />
                <Content />
                <Footer />
            </SwipeDetector>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

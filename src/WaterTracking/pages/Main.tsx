import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface MainProps { }

const Main = (props: MainProps) => {
    return (
        <View style={styles.container}>
            <Text>Main</Text>
        </View>
    );
};

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});

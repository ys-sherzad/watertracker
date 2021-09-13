import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ContentProps { }

const Content = (props: ContentProps) => {
    return (
        <View style={styles.container}>
            <Text>Content</Text>
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
});

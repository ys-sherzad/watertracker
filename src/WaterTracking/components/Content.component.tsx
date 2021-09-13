import React from 'react';
import { View, StyleSheet } from 'react-native';
import { constants } from '../../common/strings';
import Text from '../../common/Text.component';

interface ContentProps { }

const Content = (props: ContentProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.humanGraphContainer}>
                <Text>Graph</Text>
            </View>


            <View style={styles.bottomContainer}>
                <Text style={styles.note}>{constants.nice_work}</Text>
            </View>
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    humanGraphContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    bottomContainer: {
        paddingVertical: 18
    },
    note: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600'
    }
});

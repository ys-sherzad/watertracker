import React from 'react';
import { View, StyleSheet } from 'react-native';
import { constants } from '../../common/strings';
import Text from '../../common/Text.component';
import Figure from '../../../assets/human-figure.svg';

interface ContentProps { }

const Content = (props: ContentProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.humanGraphContainer}>
                <View style={{
                    width: 250,
                    backgroundColor: 'purple',
                    overflow: 'hidden',
                    marginLeft: 93,
                }}>
                    <View style={{
                        aspectRatio: 157 / 344,
                        height: 354,
                        width: 157,
                        backgroundColor: 'yellow',
                    }}>
                        <Figure
                            height='100%'
                            width='100%'
                            preserveAspectRatio='xMinYMin slice'
                        />
                        <View style={{
                            position: 'absolute',
                            zIndex: 0,
                            backgroundColor: 'blue',
                            height: 348,
                            width: 151,
                            top: 3,
                            transform: [{
                                translateY: 354
                            }]
                        }} />
                    </View>
                </View>
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
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
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

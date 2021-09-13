import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { constants } from '../../common/strings';
import Text from '../../common/Text.component';
import Figure from '../../../assets/human-figure.svg';
import { Theme } from '../../utils';
import Button from '../../common/Button.component';
import { Edit2 } from 'react-native-feather';
import UpdateTarget from './UpdateTarget.modal';

const FIGURE_CONTAINER_WIDTH = 220;
const FIGURE_HEIGHT = 354;
const FIGURE_WIDTH = 157;
const ASPECT_RATIO = FIGURE_WIDTH / FIGURE_HEIGHT;
const OVERLAY_HEIGHT = 348;
const OVERLAY_WIDTH = 151;

const FIGURE_LEFT_OFFSET = FIGURE_CONTAINER_WIDTH - FIGURE_WIDTH;

interface ContentProps { };

const Content = (props: ContentProps) => {
    const [visible, setVisible] = useState(false);

    const dismissModal = () => setVisible(false);

    return (
        <View style={styles.container}>
            <View style={styles.humanGraphContainer}>
                <View style={{
                    width: FIGURE_CONTAINER_WIDTH,
                    marginLeft: FIGURE_LEFT_OFFSET,
                    overflow: 'hidden',
                }}>
                    <View style={{
                        aspectRatio: ASPECT_RATIO,
                        height: FIGURE_HEIGHT,
                        width: FIGURE_WIDTH,
                    }}>
                        <Figure
                            height='100%'
                            width='100%'
                            preserveAspectRatio='xMinYMin slice'
                        />
                        <View style={styles.overlay} />
                    </View>

                    <Button
                        onPress={() => setVisible(true)}
                        style={styles.targetBtn}
                    >
                        <Text style={styles.target}>3.5 L</Text>
                        <Edit2 width={12} height={12} color={Theme.icon} />
                    </Button>
                </View>
            </View>


            <View style={styles.bottomContainer}>
                <Text style={styles.note}>{constants.nice_work}</Text>
            </View>

            <UpdateTarget
                visible={visible}
                onDismiss={dismissModal}
            />
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
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        paddingBottom: 28
    },
    note: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600'
    },
    overlay: {
        position: 'absolute',
        zIndex: -1,
        backgroundColor: Theme.secondary,
        height: OVERLAY_HEIGHT,
        width: OVERLAY_WIDTH,
        top: 4,
        transform: [{
            translateY: 100
        }]
    },
    targetBtn: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        top: -7,
        right: 0
    },
    target: {
        fontSize: 16,
        marginRight: 5
    }
});

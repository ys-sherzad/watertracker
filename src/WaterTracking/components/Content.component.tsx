import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { constants } from '../../common/strings';
import Text from '../../common/Text.component';
import Figure from '../../../assets/human-figure.svg';
import { Helpers, Theme } from '../../utils';
import Button from '../../common/Button.component';
import { Edit2 } from 'react-native-feather';
import UpdateTarget from './UpdateTarget.modal';
import { useStore } from '../../provider/StoreContext';
import { setWaterTarget } from '../../store/actions';

const FIGURE_CONTAINER_WIDTH = 220;
const FIGURE_HEIGHT = 354;
const FIGURE_WIDTH = 157;
const ASPECT_RATIO = FIGURE_WIDTH / FIGURE_HEIGHT;
const OVERLAY_HEIGHT = 348;
const OVERLAY_WIDTH = 151;

const FIGURE_LEFT_OFFSET = FIGURE_CONTAINER_WIDTH - FIGURE_WIDTH;

interface ContentProps { };

const Content = ({ }: ContentProps) => {

    const { store, dispatch } = useStore();

    const [visible, setVisible] = useState(false);
    const [offsetY, setOffsetY] = useState(OVERLAY_HEIGHT);


    useEffect(() => {
        const { totalWaterDrunk, target } = store;

        // calculate graph background offset for y-axis
        const offsetY = (totalWaterDrunk * OVERLAY_HEIGHT) / target;

        setOffsetY(OVERLAY_HEIGHT - offsetY);
    }, [store.totalWaterDrunk]);


    const dismissModal = () => setVisible(false);

    /**
     * Update target in store
     * @param value string
     */
    const updateTargetValue = (value: string) => {
        dispatch(setWaterTarget(Number(value)));
        dismissModal();
    };

    return (
        <View style={styles.flexOne}>
            <View style={styles.graphOuterContainer}>
                <View style={styles.graphInnerContainer}>
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
                        <View style={[styles.overlay, {
                            transform: [{
                                translateY: offsetY
                            }]
                        }]} />
                    </View>

                    <Button
                        onPress={() => setVisible(true)}
                        style={styles.targetBtn}
                    >
                        <Text style={styles.target}>{Helpers.mililiterToLiter(store.target)} L</Text>
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
                onUpdate={updateTargetValue}
            />
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    graphOuterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    graphInnerContainer: {
        width: FIGURE_CONTAINER_WIDTH,
        marginLeft: FIGURE_LEFT_OFFSET,
        overflow: 'hidden',
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

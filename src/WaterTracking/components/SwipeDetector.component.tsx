import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Directions,
    FlingGestureHandler,
    FlingGestureHandlerEventPayload,
    HandlerStateChangeEvent,
    State
} from 'react-native-gesture-handler';
import { useStore } from '../../provider/StoreContext';
import { selectWaterValue } from '../../store/actions';

interface SwipeDetectorProps {
    children: React.ReactNode;
}

type GestureEvent =
    HandlerStateChangeEvent<FlingGestureHandlerEventPayload>;

enum SwipeDirection {
    LEFT,
    RIGHT
}

const SwipeDetector = ({
    children
}: SwipeDetectorProps) => {
    const { store, dispatch } = useStore();

    const changeSelectedValue = (direction: SwipeDirection) => {
        const { selectedValueIndex } = store;
        if (direction === SwipeDirection.LEFT) {
            if (selectedValueIndex !== 2) {
                dispatch(selectWaterValue(selectedValueIndex + 1));
            } else {
                dispatch(selectWaterValue(0));
            }
        }

        if (direction === SwipeDirection.RIGHT) {
            if (selectedValueIndex !== 0) {
                dispatch(selectWaterValue(selectedValueIndex - 1));
            } else {
                dispatch(selectWaterValue(2));
            }
        }
    };

    const handleRightSwipe = ({ nativeEvent }: GestureEvent) => {
        if (nativeEvent.state === State.END) {
            console.log('SWIPED RIGHT');
            changeSelectedValue(SwipeDirection.RIGHT);
        }
    };

    const handleLeftSwipe = ({ nativeEvent }: GestureEvent) => {
        if (nativeEvent.state === State.END) {
            console.log('SWIPED LEFT');
            changeSelectedValue(SwipeDirection.LEFT);
        }
    };

    return (
        <FlingGestureHandler
            direction={Directions.RIGHT}
            onHandlerStateChange={handleRightSwipe}
        >
            <FlingGestureHandler
                direction={Directions.LEFT}
                onHandlerStateChange={handleLeftSwipe}
            >
                <View style={styles.container}>
                    {children}
                </View>
            </FlingGestureHandler>
        </FlingGestureHandler>
    );
};

export default SwipeDetector;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

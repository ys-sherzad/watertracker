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
    LEFT = '+',
    RIGHT = '-'
}

const operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b
};


const SwipeDetector = ({
    children
}: SwipeDetectorProps) => {
    const { store, dispatch } = useStore();

    const changeSelectedValue = (operator: SwipeDirection) => {
        const { selectedValueIndex } = store;

        let nextIndex = operations[operator](selectedValueIndex, 1);

        if (nextIndex > 2) {
            nextIndex = 2;
        }
        if (nextIndex < 0) {
            nextIndex = 0;
        }

        dispatch(selectWaterValue(nextIndex));
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

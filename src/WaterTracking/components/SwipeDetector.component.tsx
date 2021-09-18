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
        const { selectedIndex } = store;

        const nextIndex = operations[operator](selectedIndex, 1);

        if (nextIndex > 2 || nextIndex < 0) {
            return;
        }
        dispatch(selectWaterValue({ selectedIndex: nextIndex }));
    };

    const handleSwipe = ({ nativeEvent }: GestureEvent, direction: SwipeDirection) => {
        if (nativeEvent.state === State.END) {
            changeSelectedValue(direction);
        }
    };

    return (
        <FlingGestureHandler
            direction={Directions.RIGHT}
            onHandlerStateChange={(e) => handleSwipe(e, SwipeDirection.RIGHT)}
        >
            <FlingGestureHandler
                direction={Directions.LEFT}
                onHandlerStateChange={(e) => handleSwipe(e, SwipeDirection.LEFT)}
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

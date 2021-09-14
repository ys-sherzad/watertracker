import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Directions, FlingGestureHandler, State } from 'react-native-gesture-handler';

interface SwipeDetectorProps {
    children: React.ReactNode;
}

const SwipeDetector = ({
    children
}: SwipeDetectorProps) => {
    return (
        <FlingGestureHandler
            direction={Directions.RIGHT}
            onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {
                    console.log('SWIPED RIGHT');
                }
            }}
        >
            <FlingGestureHandler
                direction={Directions.LEFT}
                onHandlerStateChange={({ nativeEvent }) => {
                    if (nativeEvent.state === State.ACTIVE) {
                        console.log('SWIPED LEFT');
                    }
                }}
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

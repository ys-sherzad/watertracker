import React from 'react';
import { View } from 'react-native';

interface SpacerProps {
    size: number;
    horizontal?: boolean;
}

const Spacer = ({
    size,
    horizontal = false
}: SpacerProps) => {
    if (horizontal) {
        return (
            <View style={{ width: size }} />
        );
    }
    return (
        <View style={{ height: size }} />
    );
};

export default Spacer;

import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

interface Props extends TextProps {
    children: React.ReactNode;
};

const Text = (props: Props) => {
    return (
        <RNText
            style={[styles.defaultTextStyle, props.style]}
        >
            {props.children}
        </RNText>
    );
};

export default Text;

const styles = StyleSheet.create({
    defaultTextStyle: {
        color: '#fff'
    }
});

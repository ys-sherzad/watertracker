import React from 'react';
import {
    View,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableOpacityProps,
    TouchableNativeFeedbackProps
} from 'react-native';
import { PlatformUtils } from '../utils';

interface CommonProps {
    children: React.ReactNode;
    withoutFeedback?: boolean;
}

type TouchableProps = TouchableNativeFeedbackProps | TouchableOpacityProps;

type ButtonProps = CommonProps & TouchableProps;

const Button = (props: ButtonProps) => {

    const RenderButtonAndroid = (
        <TouchableNativeFeedback
            useForeground={true}
            background={
                PlatformUtils.isAndroidVersion21AndAbove ?
                    TouchableNativeFeedback.Ripple('rgba(255, 255, 255, .2)', true) :
                    TouchableNativeFeedback.SelectableBackground()
            }
            {...props}
        >
            <View style={[props.style, { overflow: 'hidden' }]}>
                {props.children}
            </View>
        </TouchableNativeFeedback>
    );

    const RenderButtonIOS = (
        <TouchableOpacity {...props}>
            {props.children}
        </TouchableOpacity>
    );

    if (PlatformUtils.isAndroid) {
        return RenderButtonAndroid;
    }

    return RenderButtonIOS;

};

export default Button;


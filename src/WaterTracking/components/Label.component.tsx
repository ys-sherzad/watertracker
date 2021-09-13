import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../common/Text.component';

interface LabelProps {
    value: number;
    description: string;
}

const Label = ({
    value,
    description
}: LabelProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.desc}>{description}</Text>
        </View>
    );
};

export default Label;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow'
    },
    value: {
        textAlign: 'center'
    },
    desc: {
        textAlign: 'center'
    }

});

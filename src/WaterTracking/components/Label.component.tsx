import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../common/Text.component';

interface LabelProps {
    value: number;
    description: string;
    unit?: string;
}

const Label = ({
    value,
    description,
    unit
}: LabelProps) => {
    return (
        <View>
            <Text style={styles.value}>{value} {unit ?? ''}</Text>
            <Text style={styles.desc}>{description.toUpperCase()}</Text>
        </View>
    );
};

export default Label;

const styles = StyleSheet.create({
    value: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '700'
    },
    desc: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 5
    }

});

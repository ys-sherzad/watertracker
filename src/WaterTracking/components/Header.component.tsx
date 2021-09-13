import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { constants } from '../../common/strings';
import Label from './Label.component';

interface HeaderProps { }

const Header = (props: HeaderProps) => {
    return (
        <View style={styles.container}>
            <Label value={2.4} description={constants.total_water_drunk} />
            <Label value={15} description={constants.achieved_goal_days} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'purple'
    }
});

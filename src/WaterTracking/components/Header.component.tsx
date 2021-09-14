import React from 'react';
import { View, StyleSheet } from 'react-native';
import { constants } from '../../common/strings';
import { useStore } from '../../provider/StoreContext';
import { Helpers } from '../../utils';
import Label from './Label.component';

interface HeaderProps { }

const Header = (props: HeaderProps) => {
    const { store } = useStore();
    return (
        <View style={styles.container}>
            <Label
                unit='L'
                value={Helpers.mililiterToLiter(store.totalWaterDrunk)}
                description={constants.total_water_drunk}
            />
            <Label
                value={15}
                description={constants.achieved_goal_days}
            />
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
        paddingHorizontal: 20
    }
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../common/Text.component';
import { PlusCircle, MinusCircle } from 'react-native-feather';
import { Theme } from '../../utils';
import Spacer from '../../common/Spacer.component';
import Button from '../../common/Button.component';
import { useStore } from '../../provider/StoreContext';
import { decrement, increment, selectWaterValue } from '../../store/actions';
import { levels } from '../../store/data';

const ICON_SIZE = 55;

const Footer = () => {
    const { store, dispatch } = useStore();

    const renderLevels = () => (
        <View style={styles.levelsContainer}>
            {levels.map((value, index) => {
                const hasSpacer = levels.length - 1 !== index;
                const isSelected = index === store.selectedValueIndex;
                return (
                    <React.Fragment key={value}>
                        <Button
                            style={{ padding: 8, borderRadius: 5 }}
                            onPress={() => dispatch(selectWaterValue(index))}
                        >
                            <Text style={[styles.level, !isSelected && { color: Theme.inactive }]}>
                                {levels[index]} ml
                            </Text>
                        </Button>

                        {hasSpacer && <Spacer size={30} horizontal />}
                    </React.Fragment>
                );
            })}
        </View>
    );

    const renderActionButtons = () => (
        <View style={styles.btnsContainer}>
            <Button onPress={() => dispatch(decrement())} style={styles.btn}>
                <MinusCircle width={ICON_SIZE} height={ICON_SIZE} color={Theme.icon} />
            </Button>
            <Spacer size={20} horizontal />
            <Button onPress={() => dispatch(increment())} style={styles.btn}>
                <PlusCircle width={ICON_SIZE} height={ICON_SIZE} color={Theme.icon} />
            </Button>
        </View>
    );

    return (
        <View style={styles.container}>
            {renderLevels()}
            {renderActionButtons()}
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        height: 150,
    },
    levelsContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    level: {
        fontSize: 20,
        fontWeight: '700'
    },
    btn: {
        borderRadius: 99
    }
});

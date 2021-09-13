import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../common/Text.component';
import { PlusCircle, MinusCircle } from 'react-native-feather';
import { Theme } from '../../utils';
import Spacer from '../../common/Spacer.component';

interface FooterProps { }

const levels = [150, 250, 350];

const ICON_SIZE = 55;

const Footer = (props: FooterProps) => {

    const renderLevels = () => (
        <View style={styles.levelsContainer}>
            {levels.map((level, index) => {
                const hasSpacer = levels.length - 1 !== index;
                return (
                    <>
                        <Text style={styles.level}>
                            {level} ml
                        </Text>

                        {hasSpacer && <Spacer size={30} horizontal />}
                    </>
                );
            })}
        </View>
    );

    const renderButtonActions = () => (
        <View style={styles.btnsContainer}>
            <MinusCircle width={ICON_SIZE} height={ICON_SIZE} color={Theme.icon} />
            <Spacer size={20} horizontal />
            <PlusCircle width={ICON_SIZE} height={ICON_SIZE} color={Theme.icon} />
        </View>
    );

    return (
        <View style={styles.container}>
            {renderLevels()}
            {renderButtonActions()}
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        height: 140,
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
    }
});

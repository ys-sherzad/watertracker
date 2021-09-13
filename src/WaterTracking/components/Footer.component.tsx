import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../../common/Text.component';
import { PlusCircle, MinusCircle } from 'react-native-feather';
import { Theme } from '../../utils';
import Spacer from '../../common/Spacer.component';
import Button from '../../common/Button.component';

interface FooterProps { }

const levels = [150, 250, 350];

const ICON_SIZE = 55;

const Footer = (props: FooterProps) => {

    const renderLevels = () => (
        <View style={styles.levelsContainer}>
            {levels.map((level, index) => {
                const hasSpacer = levels.length - 1 !== index;
                return (
                    <React.Fragment key={level}>
                        <Button style={{ padding: 8 }} onPress={() => console.log(level)}>
                            <Text style={styles.level}>
                                {level} ml
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
            <Button onPress={() => console.log('DECREMENT!')}>
                <MinusCircle width={ICON_SIZE} height={ICON_SIZE} color={Theme.icon} />
            </Button>
            <Spacer size={20} horizontal />
            <Button onPress={() => console.log('INCREMENT!')}>
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
    }
});

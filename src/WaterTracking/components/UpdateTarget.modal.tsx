import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../common/Button.component';
import Spacer from '../../common/Spacer.component';
import { constants } from '../../common/strings';
import Text from '../../common/Text.component';
import { Theme } from '../../utils';
import { X } from 'react-native-feather';

interface UpdateTargetProps {
    visible: boolean;
    onDismiss: () => void;
}

const UpdateTarget = ({
    visible,
    onDismiss
}: UpdateTargetProps) => {

    const [newTarget, setNewTarget] = useState('');

    return (
        <Modal
            isVisible={visible}
            animationIn="fadeIn"
            animationOut="fadeOut"
            onBackdropPress={onDismiss}
            onBackButtonPress={onDismiss}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
        // deviceHeight={height}
        // deviceWidth={width}
        >
            <View style={styles.container}>
                <Text style={styles.title}>{constants.update_target_water}</Text>

                <Spacer size={30} />

                <Text style={styles.desc}>{constants.enter_new_target}</Text>

                <Spacer size={30} />

                <TextInput
                    value={newTarget}
                    placeholder='ml'
                    onChangeText={(text) => setNewTarget(text)}
                    keyboardType='numeric'
                    style={styles.input}
                />

                <Spacer size={12} />

                <Button
                    onPress={() => console.log('PRESSED')}
                    style={styles.updateBtn}>
                    <Text style={styles.update}>{constants.update.toUpperCase()}</Text>
                </Button>

                <Button
                    onPress={onDismiss}
                    style={styles.dismissBtn}
                >
                    <X width={16} height={16} color={Theme.primary} strokeWidth={3} />
                </Button>
            </View>
        </Modal>
    );
};

export default UpdateTarget;

const styles = StyleSheet.create({
    container: {
        width: 260,
        paddingHorizontal: 30,
        paddingVertical: 36,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 10,
    },
    title: {
        color: Theme.primary,
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center'
    },
    desc: {
        color: Theme.primary,
        fontSize: 14,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#53BFEF',
        padding: 8,
        borderRadius: 8
    },
    updateBtn: {
        backgroundColor: Theme.primary,
        borderRadius: 8,
        paddingVertical: 8,
    },
    update: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    dismissBtn: {
        position: 'absolute',
        top: 2,
        right: 2,
        padding: 5
    }
});

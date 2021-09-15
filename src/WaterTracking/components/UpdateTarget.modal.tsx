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
    onUpdate: (text: string) => void;
}

const UpdateTarget = ({
    visible,
    onDismiss,
    onUpdate
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

                <View style={styles.inputContainer}>
                    <TextInput
                        value={newTarget}
                        onChangeText={(text) => setNewTarget(text)}
                        keyboardType='numeric'
                        style={styles.input}
                    />
                    <Text style={styles.ml}>ml</Text>
                </View>

                <Spacer size={12} />

                <Button
                    onPress={() => onUpdate(newTarget)}
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
    inputContainer: {
        width: 210,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Theme.primary,
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        padding: 8,
        color: Theme.primary
    },
    updateBtn: {
        width: 210,
        alignSelf: 'center',
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
        padding: 5,
        borderRadius: 99
    },
    ml: {
        color: Theme.primary,
        fontSize: 16,
        paddingHorizontal: 14
    },

});

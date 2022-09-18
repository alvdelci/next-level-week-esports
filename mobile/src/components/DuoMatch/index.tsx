import React, { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';
import { Activity, CheckCircle } from 'phosphor-react-native';
import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string;
    onclose: () => void;
}

export function DuoMatch({ discord, onclose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false);

    async function handleCopyDiscordUserToClipboard() {
        setIsCopping(true);
        await Clipboard.setStringAsync(discord);

        Alert.alert("Discord copiado!", "Usuário copiado para área de transferência!");
        setIsCopping(false);
    }

    return (
        <Modal
            animationType='fade'
            transparent
            statusBarTranslucent
            {...rest}
        >
            <View style={styles.container}>

                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onclose}
                    >
                        <MaterialIcons
                            name="close"
                            size={20}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />

                    <Heading
                        title="Let's play"
                        subtitle='Agora é só começar a jogar!'
                        style={{ alignItems: 'center', marginTop: 24 }}
                    />

                    <Text style={styles.label}>Adicione no Discord</Text>

                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordUserToClipboard}
                        disabled={isCopping}
                    >
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
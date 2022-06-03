import React from 'react'
import {
    Modal, Text, View,
} from 'react-native'
import SportymaLogo from '../../assets/logo/sportyma.svg'
import { ErrorModalContainerStyle } from './_styles'

const ErrorModal = () => (
    <View style={ErrorModalContainerStyle.ErrorModalContainer}>
        <Modal
            animationType="slide"
            transparent
            visible
        >
            <View style={ErrorModalContainerStyle.ErrorModalContainer}>
                <View style={ErrorModalContainerStyle.ErrorModalModalContainer}>
                    <SportymaLogo width={140} />
                    <Text style={ErrorModalContainerStyle.ErrorModalTextTitle}>Une erreur est survenue lors du chargement de l'application.</Text>
                    <Text style={ErrorModalContainerStyle.ErrorModalTextSubTitle}>Si le problème persiste, veuillez contacter le support technique de Sportyma.</Text>
                </View>
            </View>
        </Modal>
    </View>
)

export default ErrorModal

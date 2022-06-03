import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import * as Progress from 'react-native-progress'
import { useSelector } from 'react-redux'
import ExpandMoreIcon from '../../assets/icons/common/expand-more.svg'
import ExpandLessIcon from '../../assets/icons/common/expand-less.svg'
import { UserProfileCompletionHeaderStyle } from './_styles'
import { computePercentage } from '../utils'
import { defaultPalette } from '../../theme/palettes'

function UserProfileCompletionHeader({ open, setOpen }) {
    const stepsCompleted = useSelector((state) => state.userProfile.stepsCompleted)
    const stepsTotal = useSelector((state) => state.userProfile.stepsTotal)
    return (
        <View style={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderContainer}>
            <Progress.Circle
                size={70}
                borderWidth={1}
                progress={computePercentage(stepsCompleted, stepsTotal)}
                showsText
                thickness={8}
                formatText={() => `${stepsCompleted}/${stepsTotal}`}
                textStyle={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderProgressCircleText}
                color={defaultPalette.secondary}
                unfilledColor="rgba(252, 252, 252, 0.3)"
                borderColor="none"
            />
            <View style={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderTextContainer}>
                <Text style={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderMainTitle}>
                    {`Profil complété à ${computePercentage(stepsCompleted, stepsTotal) * 100}%`}
                </Text>
                <Text style={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderDescription}>
                    Complétez votre profil et gagnez une carte de joueur personnalisée.
                </Text>
                <TouchableOpacity
                    onPress={() => setOpen(!open)}
                    style={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderButtonContainer}
                >
                    {!open ? <ExpandMoreIcon height={20} width={20} /> : <ExpandLessIcon height={20} width={20} />}
                    <Text style={UserProfileCompletionHeaderStyle.UserProfileCompletionHeaderButtonText}>
                        {open ? 'Fermer' : 'Compléter'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserProfileCompletionHeader

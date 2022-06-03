import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector, useDispatch } from 'react-redux'
import UserProfileCompletionHeader from './UserProfileCompletionHeader'
import UserProfileCompletionCardList from './UserProfileCompletionCardList'
import ErrorModal from '../Common/ErrorModal'
import { UserProfileCompletionStyle } from './_styles'
import { defaultPalette } from '../../theme/palettes'
import { getUserProfile } from '../../api/userProfile'
import { setUserProfileInformations } from '../../redux/actions'

function UserProfileCompletion() {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)
    const userProfile = useSelector((state) => state.userProfile)

    useEffect(() => {
        (async () => {
            if (userProfile && userProfile.steps && userProfile.steps.length === 0) {
                try {
                    const res = await getUserProfile()
                    dispatch(setUserProfileInformations(res))
                } catch (e) {
                    setError(true)
                }
            }
        })()
    })

    return (
        <View style={UserProfileCompletionStyle.UserProfileCompletionContainer}>
            {error && <ErrorModal />}
            {!error
                && (
                    <LinearGradient
                        colors={[defaultPalette.blue02, defaultPalette.primary]}
                        start={{ x: 0, y: 0.25 }}
                        end={{ x: 1, y: 0.1 }}
                        style={UserProfileCompletionStyle.UserProfileCompletionLinearGradient}
                    >
                        <UserProfileCompletionHeader open={open} setOpen={setOpen} />
                        {open && <UserProfileCompletionCardList />}
                    </LinearGradient>
                )}
        </View>
    )
}

export default UserProfileCompletion

import Config from 'react-native-config'

/**
 * @description get user profile with api call
 */
export const getUserProfile = async () => {
    const url = `${Config.HTTPS}${Config.USER_PROFILE_API_URL}`
    try {
        const response = await fetch(url)
        const responseJSON = await response.json()
        return responseJSON.user.profile_completion
    } catch (e) {
        console.log(`[api-userProfile-getUserProfile] Error getting user profile ${e.message}`) // use real Logger here
        throw new Error(`Error getting user profile ${e.message}`)
    }
}

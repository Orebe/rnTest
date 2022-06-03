export const SET_USER_PROFILE_STEPS = 'SET_USER_PROFILE_STEPS'
export const SET_STEPS_TOTAL = 'SET_STEPS_TOTAL'
export const SET_STEPS_COMPLETED = 'SET_STEPS_COMPLETED'
export const SET_STEPS_STATE_CHANGED = 'SET_STEPS_STATE_CHANGED'

export const setUserProfileInformations = (userProfileInformations) => (dispatch) => {
    dispatch({
        type: SET_USER_PROFILE_STEPS,
        payload: userProfileInformations.steps,
    })
    dispatch({
        type: SET_STEPS_TOTAL,
        payload: userProfileInformations.steps_total,
    })
    dispatch({
        type: SET_STEPS_COMPLETED,
        payload: userProfileInformations.steps_completed,
    })
}

export const setStepsStateChanged = (item, index) => (dispatch, getState) => {
    const { userProfile } = getState()
    const newArray = userProfile.steps.map((a) => ({ ...a }))
    newArray.splice(index, 1)
    const result = [
        ...newArray.slice(0, index),
        item,
        ...newArray.slice(index),
    ]
    dispatch({
        type: SET_STEPS_STATE_CHANGED,
        payload: result,
    })
    dispatch({
        type: SET_STEPS_COMPLETED,
        payload: userProfile.stepsCompleted + 1,
    })
}

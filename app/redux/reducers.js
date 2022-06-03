import {
    SET_USER_PROFILE_STEPS,
    SET_STEPS_TOTAL,
    SET_STEPS_COMPLETED,
    SET_STEPS_STATE_CHANGED,
} from './actions'

const userProfileInitialState = {
    stepsCompleted: 0,
    stepsTotal: 0,
    steps: [],
}

const userReducer = (state = userProfileInitialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE_STEPS:
            return {
                ...state,
                steps: action.payload,
            }
        case SET_STEPS_TOTAL:
            return {
                ...state,
                stepsTotal: action.payload,
            }
        case SET_STEPS_COMPLETED:
            return {
                ...state,
                stepsCompleted: action.payload,
            }
        case SET_STEPS_STATE_CHANGED:
            return {
                ...state,
                steps: action.payload,
            }
        default:
            return state
    }
}

export default userReducer

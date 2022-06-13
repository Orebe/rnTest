import React from 'react'
import { ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import UserProfileCompletionCardItem from './UserProfileCompletionCardItem'

function UserProfileCompletionCardList() {
    const steps = useSelector((state) => state.userProfile.steps)
    return (
        <ScrollView>
            {steps.map((item, index) => (
                <UserProfileCompletionCardItem key={item.icon_type} item={item} index={index} />
            ))}
        </ScrollView>
    )
}

export default UserProfileCompletionCardList

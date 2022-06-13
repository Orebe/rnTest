import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import UserIcon from '../../assets/icons/userProfile/user.svg'
import ListIcon from '../../assets/icons/userProfile/list.svg'
import PhotoCameraIcon from '../../assets/icons/userProfile/photo-camera.svg'
import PlayIcon from '../../assets/icons/userProfile/play.svg'
import SoccerFieldIcon from '../../assets/icons/userProfile/soccer-field.svg'
import ForwardIcon from '../../assets/icons/common/forward.svg'
import CheckCircleIcon from '../../assets/icons/common/check-circle.svg'
import { UserProfileCompletionCardItemStyle } from './_styles'
import { defaultPalette } from '../../theme/palettes'
import { setStepsStateChanged } from '../../redux/actions'
import { iconTypeEnum } from '../../enum/iconTypeEnum'

function UserProfileCompletionCardItem({ item, index }) {
    const dispatch = useDispatch()

    /**
     * @description
     * @param {Object} item
     * @returns
     */
    const getIconItemByIconTypeEnum = (item) => {
        const color = item && item.completed ? defaultPalette.grey02 : defaultPalette.primary
        switch (true) {
            case iconTypeEnum.IconProfile === item.icon_type:
                return <UserIcon height={24} width={24} fill={color} />
            case iconTypeEnum.IconPlay === item.icon_type:
                return <PlayIcon height={24} width={24} fill={color} />
            case iconTypeEnum.IconVenue === item.icon_type:
                return <SoccerFieldIcon height={24} width={24} fill={color} />
            case iconTypeEnum.IconRows === item.icon_type:
                return <ListIcon height={24} width={24} fill={color} />
            case iconTypeEnum.IconCamera === item.icon_type:
                return <PhotoCameraIcon height={24} width={24} fill={color} />
            default:
                break
        }
        return null
    }

    /**
     * @description handle when press for steps state change
     * @return {void}
     */
    const handleStepsStateChange = () => {
        const obj = { ...item }
        obj.completed = true
        dispatch(setStepsStateChanged(obj, index))
    }

    return (
        <View style={UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemContainer}>
            <View style={UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardContainer}>
                <TouchableOpacity
                    disabled={item && item.completed}
                    style={UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardTouchable}
                    onPress={handleStepsStateChange}
                >
                    <View
                        style={
                            item && item.completed
                                ? UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardIconContainerDisabled
                                : UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardIconContainerActivated
                        }
                    >
                        {getIconItemByIconTypeEnum(item)}
                        {item && item.completed && (
                            <CheckCircleIcon
                                height={20}
                                width={20}
                                style={
                                    UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardIconCheckCircle
                                }
                            />
                        )}
                    </View>
                    <View style={UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardTextContainer}>
                        {item && item.title && (
                            <Text
                                style={
                                    item && item.completed
                                        ? UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardTextTitleDisabled
                                        : UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardTextTitleActivated
                                }
                            >
                                {item.title}
                            </Text>
                        )}
                        {item && item.subtitle && (
                            <Text
                                style={
                                    item && item.completed
                                        ? UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardTextSubTitleDisabled
                                        : UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardTextSubTitleActivated
                                }
                            >
                                {item.subtitle}
                            </Text>
                        )}
                    </View>
                    {item && !item.completed && (
                        <ForwardIcon
                            height={20}
                            width={20}
                            style={UserProfileCompletionCardItemStyle.UserProfileCompletionCardItemCardForwardIcon}
                            fill={defaultPalette.primary}
                            backgroundColor={defaultPalette.white}
                        />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserProfileCompletionCardItem

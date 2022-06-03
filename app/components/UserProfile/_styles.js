import { StyleSheet } from 'react-native'
import { defaultPalette } from '../../theme/palettes'
import { themeFont } from '../../theme/fonts'

export const UserProfileCompletionStyle = StyleSheet.create({
    UserProfileCompletionContainer: {
        flex: 1,
        marginTop: '10%',
    },
    UserProfileCompletionLinearGradient: {
        padding: '5%',
        borderRadius: 10,
    },
})

export const UserProfileCompletionHeaderStyle = StyleSheet.create({
    UserProfileCompletionHeaderContainer: {
        flexDirection: 'row',
    },
    UserProfileCompletionHeaderTextContainer: {
        padding: '2%',
        flex: 1,
        alignItems: 'flex-start',
    },
    UserProfileCompletionHeaderMainTitle: {
        color: defaultPalette.white,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: themeFont.medium,
        lineHeight: 20.8,
    },
    UserProfileCompletionHeaderDescription: {
        color: defaultPalette.white,
        marginTop: 3,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.light,
        lineHeight: 19.6,
    },
    UserProfileCompletionHeaderButtonContainer: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
    },
    UserProfileCompletionHeaderButtonText: {
        color: defaultPalette.white,
        flex: 1,
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.regular,
        textDecorationLine: 'underline',
        lineHeight: 21,
    },
    UserProfileCompletionHeaderProgressCircleText: {
        color: defaultPalette.white,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: themeFont.medium,
        lineHeight: 20.8,
    },
})

export const UserProfileCompletionCardItemStyle = StyleSheet.create({
    UserProfileCompletionCardItemContainer: {
        marginTop: '5%',
    },
    UserProfileCompletionCardItemCardContainer: {
        backgroundColor: defaultPalette.white,
        height: 80,
        borderRadius: 10,
    },
    UserProfileCompletionCardItemCardTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        padding: '2%',
    },
    UserProfileCompletionCardItemCardIconContainerActivated: {
        backgroundColor: defaultPalette.blue03,
        borderRadius: 50,
        padding: '4%',
        marginLeft: '5%',
    },
    UserProfileCompletionCardItemCardIconContainerDisabled: {
        backgroundColor: defaultPalette.grey05,
        borderRadius: 50,
        padding: '4%',
        marginLeft: '5%',
    },
    UserProfileCompletionCardItemCardIconCheckCircle: {
        position: 'absolute',
        right: -5,
    },
    UserProfileCompletionCardItemCardTextContainer: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: '3%',
    },
    UserProfileCompletionCardItemCardTextTitleActivated: {
        color: defaultPalette.black,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.regular,
        lineHeight: 19.6,
    },
    UserProfileCompletionCardItemCardTextTitleDisabled: {
        color: defaultPalette.grey01,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.regular,
        lineHeight: 19.6,
    },
    UserProfileCompletionCardItemCardTextSubTitleActivated: {
        color: defaultPalette.grey01,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.regular,
        lineHeight: 19.6,
    },
    UserProfileCompletionCardItemCardTextSubTitleDisabled: {
        color: defaultPalette.grey02,
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.regular,
        lineHeight: 19.6,
    },
    UserProfileCompletionCardItemCardForwardIcon: {
        marginRight: '5%',
    },
})

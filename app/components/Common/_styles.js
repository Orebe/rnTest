import { StyleSheet } from 'react-native'
import { defaultPalette } from '../../theme/palettes'
import { themeFont } from '../../theme/fonts'

export const ErrorModalContainerStyle = StyleSheet.create({
    ErrorModalContainer: {
        flex: 1,
        marginTop: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ErrorModalModalContainer: {
        margin: '5%',
        backgroundColor: defaultPalette.white,
        borderRadius: 20,
        padding: '6%',
        alignItems: 'center',
        shadowColor: defaultPalette.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    ErrorModalTextTitle: {
        textAlign: 'center',
        marginTop: '3%',
        color: defaultPalette.black,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: themeFont.medium,
        lineHeight: 20.8,
    },
    ErrorModalTextSubTitle: {
        textAlign: 'center',
        color: defaultPalette.grey01,
        marginTop: '3%',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: themeFont.light,
        lineHeight: 19.6,
    },
})

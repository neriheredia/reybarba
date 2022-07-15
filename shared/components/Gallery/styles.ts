import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { moderateScale } from '../../helpers/scaling';

export const styles = StyleSheet.create({
    wrapper: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#8A8A8E',
        borderRadius: 10
    },
    description: {
        color: colors.darkGray,
        fontSize: moderateScale(11),
    },
    images: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: 10
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    margin: {
        marginBottom: moderateScale(7)
    },
    imageMargin: {
        margin: moderateScale(20)
    },
    scrollContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    wrap: {
        flexWrap: 'wrap',
        width: '100%',
    },
    noWrap: {
        flexWrap: 'nowrap'
    },
    wrapperScroll: {
        flex: 1,
        width: '100%',
        paddingHorizontal: moderateScale(20)
    },
    start: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    deleteButton: {
        position: 'absolute',
    },
    circleButton: {
        backgroundColor: "rgba(8,8,8,.7)",
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        borderRadius: 50
    },
    centerIcon: {
        position: 'relative',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    playPosition: {
        position: 'absolute',
    }
})
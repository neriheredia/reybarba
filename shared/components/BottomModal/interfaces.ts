import { ReactChild } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface BottomModalProps {
    closeMessage: Function,
    show: boolean,
    acceptButton?: boolean,
    acceptButtonLabel?: string,
    cancelButtom?: boolean,
    cancelButtonLabel?: string,
    wrapperButtonStyles?: object,
    gifStyles?: object,
    onAccept?: any,
    children: ReactChild,
    gif?: string,
    image?: ImageSourcePropType
}
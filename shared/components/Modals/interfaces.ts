import { AnimationObject } from "lottie-react-native";
import { ImageSourcePropType } from "react-native";
export interface ModalNnotificationsProps {
    title: string,
    mainTitle?: string,
    description?: string,
    setOpenModal: (a:boolean) => void,
    openModal: boolean,
    buttons?: boolean,
    onPressAcept?: () => void,
    onPressCancel?: () => void,
    icon?: ImageSourcePropType,
    noIcon?: boolean,
    gif?: string | AnimationObject | { uri: string; } | false
    closedButton?: boolean,
    button1Name?: string,
    button2Name?: string
}
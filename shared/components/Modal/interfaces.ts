import { ReactChild } from "react";

export interface ModalNotificationsProps {
    children: ReactChild,
    setOpenModal: (a:boolean) => void,
    openModal: boolean,
    type: 'center' | 'bottom',
    onClose?: Function
}
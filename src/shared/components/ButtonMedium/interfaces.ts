export interface ButtonMediumProps {
    title: "Aceptar" | "Omitir" | "Cancelar" | "Confirmar" | "Rechazar" | "Enviar" | string,
    onPress?: () => void,
    color?: string,
    disabled?: boolean,
    transparent?: boolean
}
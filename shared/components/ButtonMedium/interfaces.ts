export interface ButtonMediumProps {
    title: "Aceptar" | "Omitir" | "Cancelar" | "Confirmar" | "Rechazar" | "Enviar",
    onPress?: () => void,
    color?: "blue" | "gray" | "red",
    disabled?: boolean
}
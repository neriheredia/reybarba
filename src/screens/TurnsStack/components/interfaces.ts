import { ImageSourcePropType } from 'react-native';
export interface RenderItemBarbersProps {
    item: ItemProps,
    setBarberSelected: Function,
    barberSelected:string
}

export interface ItemProps {
    name:string,
    image: ImageSourcePropType,
    id:string,
}

export interface ListBarberProps {
    setBarberSelected: Function,
    barberSelected:string
}

export interface RenderItemChip extends DataListProps {
    item: string
}

export interface DataListProps {
    setDataSelected: Function
    dataSelected: number | string,
    data: string[]
}

export interface Service {
    name:string,
    image: ImageSourcePropType,
    id: string,
    description: string,
    price: number
}

export interface RenderItemServiceProps {
    item: Service,
    serviceSelected: Service,
    setServiceSelected: Function
}

export interface ListServiceProps{
    data: Service[],
    serviceSelected: Service,
    setServiceSelected: Function
    
}
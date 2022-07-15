import { IPublication } from '../../interfaces/Interfaces';

export interface itemProps {
    id: number,
    name: string,
    date: number,
    ranking: number,
    average: number,
    kms: string,
    salePrice: string,
    publicPrice: string,
    rePrice: string,
    image: any,
    image2: any,
    image3: any,
    image4?: any,
    liked: boolean,
    reserved: boolean,
    sold: boolean,
    description?: string ,
    price?: string,
    status?: string
}


interface BelowProps {
    branchModel?: boolean,
    kmVehicle?: boolean,
    description?: boolean,
    price?: boolean,
    status?: boolean
}
interface optionsProps {
    prices?: boolean,
    valoration?: boolean,
    favoriteButton?: boolean,
    reservationButton?: boolean,
    shareButton?: boolean,
    offersButton?: boolean,
    kmVehicle?: boolean,
    branchModel?: boolean,
    belowSection?: boolean,
    belowOptions?: BelowProps
}
export interface ListItemProps {
    item: IPublication,
    showMessage?: Function,
    onAccept?: Function
    options?: optionsProps,
    setFeatureNotAvaiable?: Function,
    publications: IPublication[],
    setPublications: Function
}

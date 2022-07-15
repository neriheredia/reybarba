
interface itemProps {
    name: string,
    date: number,
    ranking: number,
    average: number,
    kms: string,
    salePrice: string,
    publicPrice: string,
    rePrice: string,
    image: any,
    reserved: boolean,
    liked: boolean,
    sold: boolean
}

export interface ListItemProps {
    item: itemProps,
    showMessage?: Function
}

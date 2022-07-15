
// En este archivo se van a definir todas las interfaces de las entidades que vienen desde el back

export interface UserBriefSchema  {
    email: string;
}

export interface OtherPricesSchema  {
    sale_price: number;
    pick_up_price: number;
}

export interface StatusBriefSchema {
    code: string;
    name: string;
}


export interface ConfortSchema {
    ob_board_computer: boolean,
    electric_crystals: boolean,
    airbag: boolean,
    mp3: boolean,
    bluetooth: boolean,
    radio: boolean,
    air_conditioning: boolean,
    parking_sensor: boolean
}

export interface PublicationSchema {
    _id: string,
    user: string, 
    status: string, 
    article_type: string, 
    metadata: string, 
    pictures: string[], 
    price: number, 
    title: string,
    primary_description: string, 
    secondary_description: string, 
    user_brief: UserBriefSchema, 
    other_prices: OtherPricesSchema, 
    status_brief: StatusBriefSchema,
    liked: boolean,
    likes: number
    valuation: number,
    published_at: Date,
}


export interface VehicleSchema {
    _id: string,
    publication: string, // Id de la publicacion a la que pertenece
    brand: string,
    model: string,
    version: string,
    year: number,
    mileage: number,
    color: string,
    plate: string,
    price: number, // Precio de publicacion
    sale_price: number, // Precio de venta
    pick_up_price: number, // Precio de retoma
    confort: ConfortSchema,
    createdAt: Date,
    updatedAt: Date,
}
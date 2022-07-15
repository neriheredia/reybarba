import { StoreState } from "../../configs/store";
import { MessageProps } from "../../reducers/app";
import { homeViewTypes } from "./types";
import { ImageSourcePropType } from 'react-native';
import { Action } from 'redux';
import { initialStateAuthProps } from '../../reducers/auth';
import { initialStateRegisterProps } from "../../reducers/register";

export interface NavigationProps {
    showAppIntro: boolean
}

export interface AppProps extends NavigationProps {
    doneAppIntro: Function,
    store: StoreState,
    cleanMessage: Function,
    message: MessageProps,
    showLoader: boolean,
    currentHomeView: homeViewTypes,
    featureNotAvaiable: boolean, 
    setFeatureNotAvaiable: Function,
    persistor: any
}

export interface HomeProps {
    currentHomeView?: homeViewTypes,
    homeAction?: any,
    setHomeAction?: Function,
    onPress: Function,
    setCurrentHomeView?: Function,
    setFeatureNotAvaiable: Function,
    getPublicationsRequest: Function,
    clearPublicationInProgress: Function,
    publications: IPublication[],
    fetchingGet: boolean,
    error: boolean
}

interface HeaderProps {
    currentHomeView?: homeViewTypes,
    setCurrentHomeView?: Function
}

export interface PrimaryButtonProps {
    title: string,
    color?: string,
    onPress?: () => void,
}
export interface AuthProps {
    setShowLoader: Function
    showLoader: boolean,
    loginRequest: Function,
    registerRequest: Function,
    auth: initialStateAuthProps,
    cleanErrorLogin: Function
}

export interface RegisterProps {
    setShowLoader: Function
    showLoader: boolean,
    registerRequest: Function,
    register: initialStateRegisterProps,
    auth: initialStateAuthProps,
    loginRequest: Function,
    registeredUser: User
}

export interface AuthActionPost {
    username: string,
    password: string
}


export interface IPublication {
    _id: string,
    articleType: string,
    metadata: string,
    pictures: ImageSourcePropType[],
    publicationPrice: number, // Precio de publicacion
    pickUpPrice: number, // Precio de retoma
    salePrice: number, // Precio de venta
    primaryDescription: string,
    secondaryDescription: string,
    statusId: string, // Id del status
    statusCode: string,
    statusName: string,
    title: string,
    userId: string,
    valuation: number,
    userAlias: string,
    liked: boolean,
    publishedAt: Date
}

export interface IVehicle {
    _id: string,
    publicationId: string, // Id de la publicacion a la que pertenece
    brand: string,
    model: string,
    version: string,
    year: number,
    mileage: number
    color: string,
    plate: string,
    publicationPrice: number, // Precio de publicacion
    pickUpPrice: number, // Precio de retoma
    salePrice: number, // Precio de venta
    createdAt: Date,
    updatedAt: Date,
    confort: IConfort

    // name: string,
    // date: number,
    // ranking: number,
    // average: number,
    // kms: string,
    // publicPrice: string,
    // rePrice: string,
    // image: any,
    // image2: any,
    // image3: any,
    // image4?: any,
    // liked: boolean,
    // reserved: boolean,
    // sold: boolean,
}

export interface IConfort {
    obBoardComputer: boolean;
    electricCrystals: boolean;
    airbag: boolean;
    mp3: boolean;
    bluetooth: boolean;
    radio: boolean;
    airConditioning: boolean;
    parkingSensor: boolean;
}

export interface IVehiclePost {
    brand: string,
    model: string,
    version: string,
    year: number,
    mileage: number
    color: string,
    plate: string,
    publicationPrice: number, // Precio de publicacion
    pickUpPrice: number, // Precio de retoma
    salePrice: number, // Precio de venta
    confort: IConfort
}
export interface IPublicationToPost {
    article: IVehiclePost,
    pictures: []
}
export interface RegisterActionPost {
    name: string,
    last_name: string,
    company: string,
    profile: string,
    password: string,
    email: string,
    phone: string
}

export interface User {
    _id:           string;
    company:       string;
    profile:       string;
    name:          string;
    last_name:     string;
    picture?:      string;
    gender?:        string;
    legal_id:      string;
    email:         string;
    date_of_birth: Date;
    phone:         string;
    createdAt:     Date;
    updatedAt:     Date;
    __v:           number;
}

export interface EditUser {
    _id:           string;
    company:       string;
    profile:       string;
    name:          string;
    last_name?:    string;
    password?:     string;
    legal_id:      string;
    email:         string;
    picture?:      string;
    gender?:       string;
    date_of_birth?: Date;
    phone:         string;
    address?:      string;
    updatedAt?:     Date;
    __v?:          number;
}
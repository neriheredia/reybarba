import { ReactChild } from "react";
import { ImageSourcePropType } from 'react-native';
import { DocumentPickerResponse } from 'react-native-document-picker'
import { PhotoFile, VideoFile } from "react-native-vision-camera";

export interface UploadFileProps {
    imagesAndVideos: (ImageSourcePropType | VideoFile | PhotoFile)[],
    setImagesAndVideos: (img: any) => void ,
    wrap?: boolean,
    disable?: boolean,
    postPublicationsImages?: Function,
    imagesPosted: [],
    setImagesPosted: Function,
    deletePublicationsImage: Function,
    errorUpload: boolean
}
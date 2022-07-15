import { PhotoFile, VideoFile } from 'react-native-vision-camera';
import { ImageSourcePropType } from 'react-native';

export type homeViewTypes = "Tinder" | "Tiktok" | "List";
export type headerThemes = "light" | "dark";
export type mediaType = (VideoFile | PhotoFile)[] | null ;
export type mediaStep5Type = (VideoFile | PhotoFile | ImageSourcePropType)[] | null ;
import React, { useEffect, useState, memo } from 'react';
import { Image, Pressable, View, Text, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import DocumentPicker, {
    DocumentPickerResponse,
    isInProgress,
  } from 'react-native-document-picker'
import { UploadFileProps } from './interface';
import Icon from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/Feather';
import { VideoFile, PhotoFile } from 'react-native-vision-camera';
import Video from 'react-native-video';

const Gallery = ({ imagesAndVideos, setImagesAndVideos, wrap = true, disable = false, postPublicationsImages, imagesPosted, setImagesPosted, deletePublicationsImage, errorUpload }: UploadFileProps) => {

    const [result, setResult] = useState<DocumentPickerResponse>();
    const [selected, setSelected] = useState<number | null>(null);
    const [images, setImages] = useState<(ImageSourcePropType | PhotoFile)[]>([]);
    const [videos, setVideos] = useState<VideoFile[]>([]);
    
    const handleError = (err: unknown) => {
        if (DocumentPicker.isCancel(err)) {
          console.log('cancelled')
        } else if (isInProgress(err)) {
          console.log('multiple pickers were opened, only the last will be considered')
        } else {
          throw err
        }
    }

    const pickImageFromGallery = async () => {
        try {
            DocumentPicker.pickSingle().then((value) => {
                const data = new FormData();
                data.append("file",{
                    uri: value.uri,
                    type: value.type,
                    name: value.name
                })
                postPublicationsImages && postPublicationsImages(data, value.name)
                setResult(value)
            }).catch(handleError)
        } catch (e) {
          handleError(e)
        }
    }

        
    const handleOnLongPress = (index: number) => {
        setSelected(index);
    }

    const handleDeleteElement = async (index: number, name: string) => {
      if (imagesAndVideos) {
        const auxMedia = imagesAndVideos? imagesAndVideos.filter((elem, i) => i !== index): [];
        if (imagesPosted.length > 0) {
          const auxPostedImages = imagesPosted.filter(elem => elem.name !== name);
          const imageToDelete = imagesPosted.find(elem => elem.name === name);
          const imageToDeleteUri = imageToDelete.uri.split('/');
          const imageToDeleteName = imageToDeleteUri[imageToDeleteUri.length - 1];

          await deletePublicationsImage(imageToDeleteName);
          if (!errorUpload) {
            setImagesAndVideos(auxMedia);
            setSelected(null);
            setImagesPosted(auxPostedImages); 
          }
        }
      }
    };

    useEffect(() => {
        if(result && Object.keys(result).length > 0) {
            if (result.type === 'video/mp4') {
                const uri = (result.uri + '.mp4').replace('content', 'file');
                const arrayAux = [...imagesAndVideos, { uri, duration: 1,  name: result.name }]
                setImagesAndVideos(arrayAux);
            } else {
                const uri = result.uri
                const arrayAux = [...imagesAndVideos, { uri, name: result.name }]
                setImagesAndVideos(arrayAux);
            }
        }
    }, [result])


    useEffect(() => {
        const auxVideos: VideoFile[] = imagesAndVideos.filter( elem => (elem as VideoFile).duration !== undefined)
        const auxImages:(ImageSourcePropType | PhotoFile)[] = imagesAndVideos.filter( elem => (elem as VideoFile).duration === undefined)

        const formatted = auxImages.map(img => { 
            if ((img as PhotoFile).path !== undefined ) {
                return ({ uri: { uri: "file://" + img.path }, name:img.name }); // Si es tipo PhotoFile que retorne { uri: path }
            } else {
                console.log("ACA")
                return ({ uri: img, name: img.name }) // Si es ImageSourcePropType que no haga nada
            }
        })

        setImages(formatted);
        setVideos(auxVideos);

    }, [imagesAndVideos])

    return (
        <ScrollView style={styles.wrapperScroll} contentContainerStyle={[styles.scrollContent, wrap ? styles.wrap : styles.noWrap ]} horizontal={!wrap}>
            { !disable &&
                <Pressable onPress={pickImageFromGallery}>
                    <View style={[styles.wrapper, styles.imageMargin]}>
                        <View style={styles.centerContent}>
                            <Icon name='plus' color='#8A8A8E' size={25} style={[styles.margin, { marginTop: 5}]}/>
                            <Text style={styles.description}>Agregar una foto</Text>
                        </View>
                    </View>
                </Pressable>
            }
            { images && images.length > 0 ? 
                images.map((img, index) => {
                    return (
                        <Pressable key={index} onLongPress={() => handleOnLongPress(index)} style={styles.centerIcon}>
                            <View style={[styles.imageMargin]}>
                                <Image source={img.uri} style={styles.images}/>  
                            </View>
                            { typeof selected === 'number' && selected === index &&
                                <Pressable onPress={(e) => handleDeleteElement(index, img.name)} style={styles.deleteButton}>
                                    <Icon1 name='trash-2' color='white' size={20} style={[styles.circleButton]}/>
                                </Pressable>
                            }
                        </Pressable>
                    )
                })
            : null
            }
            { videos && videos.length > 0 ? 
                videos.map((video, index) => {
                    return (
                        <Pressable key={index} onLongPress={() => handleOnLongPress(index)} style={styles.centerIcon}>
                            <View style={[styles.imageMargin, styles.centerIcon]}>
                                <Image source={{ uri: video.path}} style={styles.images}/>  
                                <Icon name='playcircleo' color='white' size={20} style={[styles.playPosition]}/>
                            </View>
                            { typeof selected === 'number' && selected === index &&
                                <Pressable onPress={(e) => handleDeleteElement(index, video.name)} style={styles.deleteButton}>
                                    <Icon1 name='trash-2' color='white' size={20} style={[styles.circleButton]}/>
                                </Pressable>
                            }
                        </Pressable>
                    )
                })
            : null
            }
        </ScrollView>  
    )   
}
export default memo(Gallery);
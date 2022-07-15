import { IPublication, IPublicationToPost, IVehicle } from '../interfaces/Interfaces';
import { imagesHarcoded } from '../../screens/Home/components/ListView/cars';
import { PublicationSchema, VehicleSchema, ConfortSchema } from '../interfaces/schemas';


export const formatPublicationsFromBack = (publications: PublicationSchema[]) => {
    // Formatea un array de PublicationSchema (publicaciones que vienen del back) 
    // a un array de IPublication (que son las que manejamos en la app)

    if (!publications) { return []}

    const publicationsFormatted: IPublication[] = publications.map(item => {
        return {
            _id: item._id,
            articleType: item.article_type,
            metadata: item.metadata,
            //TODO !!poner item.pictures
            pictures: item.pictures,
            publicationPrice: item.price,
            pickUpPrice: item.other_prices?.pick_up_price,
            salePrice: item.other_prices?.sale_price,
            primaryDescription: item.primary_description,
            secondaryDescription: item.secondary_description,
            statusId: item.status,
            statusCode: item.status_brief?.code, 
            statusName: item.status_brief?.name,
            title: item.title,
            userId: item.user,
            userAlias: item.user_brief?.email,
            valuation: item.valuation,
            publishedAt: item.published_at,
            liked: false
        }
    })
    return publicationsFormatted;
}


export const formatVehicleFromBack = (vehicle: VehicleSchema) => {
    if (!vehicle) { return null }

    const vehiclesAux: IVehicle = {
        _id: vehicle._id,
        publicationId: vehicle.publication,
        brand: vehicle.brand,
        model: vehicle.model,
        version: vehicle.version,
        year: vehicle.year,
        mileage: vehicle.mileage,
        color: vehicle.color,
        plate: vehicle.plate,
        publicationPrice: vehicle.price,
        pickUpPrice: vehicle.pick_up_price,
        salePrice: vehicle.sale_price,
        createdAt: vehicle.createdAt,
        updatedAt: vehicle.updatedAt,
        confort: {
            obBoardComputer: vehicle.confort.ob_board_computer,
            electricCrystals: vehicle.confort.electric_crystals,
            mp3: vehicle.confort.mp3,
            bluetooth: vehicle.confort.bluetooth,
            airbag: vehicle.confort.airbag,
            radio: vehicle.confort.radio,
            airConditioning: vehicle.confort.air_conditioning,
            parkingSensor: vehicle.confort.parking_sensor,
        }
    }

    return vehiclesAux;
}

export const formatPublicationToPost = (publication: IPublicationToPost) => {

    const confortFormatted:ConfortSchema = {
        ob_board_computer: publication.article.confort.obBoardComputer,
        electric_crystals: publication.article.confort.electricCrystals,
        airbag: publication.article.confort.airbag,
        mp3: publication.article.confort.mp3,
        bluetooth: publication.article.confort.bluetooth,
        radio: publication.article.confort.radio,
        air_conditioning: publication.article.confort.airbag,
        parking_sensor: publication.article.confort.parkingSensor
    }
    
    const publicationFormatted = {
        article: {
            brand: publication.article.brand,
            model: publication.article.model,
            version: publication.article.version,
            year: publication.article.year,
            mileage: publication.article.mileage,
            color: publication.article.color,
            plate: publication.article.plate,
            price: publication.article.publicationPrice,
            pick_up_price: publication.article.publicationPrice,
            // pick_up_price: publication.article.pickUpPrice,
            // sale_price: publication.article.salePrice,
            sale_price: publication.article.publicationPrice,
            confort: confortFormatted
        },
        pictures: publication.pictures.map( img => img.uri)
    }
    
    return publicationFormatted;
}
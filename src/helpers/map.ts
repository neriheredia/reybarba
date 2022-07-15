export const makePositionObject = (latitude = -33.4488897, longitude = -70.6692655, latitudeDelta = 0.03, longitudeDelta = 0.03) => {
    return {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta,
    };
};
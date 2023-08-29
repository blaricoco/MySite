
export function get_location() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const concatenatedString = latitude.toString() + ", " + longitude.toString();
                resolve(concatenatedString);
            },
            (error) => {
                reject(error);
            }
        );
    });
}

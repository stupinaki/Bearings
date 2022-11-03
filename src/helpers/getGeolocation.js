
export function getGeolocation() {
    const geolocation = navigator.geolocation;
    if (geolocation) {
        geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log({latitude, longitude})
        },
        error => {
            console.log(error.message)
        });
    } else {
       console.log("Your browser are not allowed the navigator.geolocation..")
    }
}
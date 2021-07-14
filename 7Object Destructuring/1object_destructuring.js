/*
* Unpack values from an object easily
*/
const vehicle = { type: "car", brand: "hyundai", price: 60000 };

function showVehicleInformation(vehicle) {
    const { type, brand, price } = vehicle; // destructure
    console.log(`Vehicle Type: ${type}\nBrand: ${brand}\nPrice: ${price}`)
}

showVehicleInformation(vehicle)

function showVehicleInformation2({ type, brand, price }) { // destructure directly in the passed parameter
    console.log(`Vehicle Type: ${type}\nBrand: ${brand}\nPrice: ${price}`)
}

showVehicleInformation(vehicle)
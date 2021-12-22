export interface Beer {
    price: string,
    name: string,
    rating: {
        average: Number,
        reviews: Number
    },
    image: string,
    id: Number
}
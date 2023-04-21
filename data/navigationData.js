import { FemaleAvatarOne, MaleAvatarOne } from "../assets/images";

export const passengerList = [
    {
        name: "Sera Smith",
        rating: 4.9,
        review: 125,
        image: FemaleAvatarOne,
        distance: 4500,
        time: "120",
        price: {
            amount: 2500,
            currency: "USD",
            symbol: "$"

        },
        from: {
            time: Date.now(),
            destination: '20 Kado street, Ikeja Lagos '
        },
        to: {
            time: Date.now(),
            destination: '20 Kado street, Ikeja Lagos '
        },
        id: 1
    },

    {
        name: "Mems Duyil",
        rating: 3.2,
        review: 125,
        image: MaleAvatarOne,
        distance: 3500,
        time: "60",
        price: {
            amount: 2500,
            currency: "USD",
            symbol: "$"

        },
        from: {
            time: Date.now(),
            destination: '20 Kado street, Ikeja Lagos '
        },
        to: {
            time: Date.now(),
            destination: '20 Kado street, Ikeja Lagos '
        },
        id: 1
    }
]

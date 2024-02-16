
import React, { createContext, useState } from 'react'
import image1 from "../assets/img/item-03.jpg"
import image2 from "../assets/img/item-04.jpg"
import image3 from "../assets/img/item-12.jpg"
import image4 from "../assets/img/item-13.jpg"
import image5 from "../assets/img/item-10.jpg"
import image6 from "../assets/img/item-11.jpg"
import image7 from "../assets/img/item-16.jpg"
export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [test, setTest] = useState([
        {
            id1: 1,
            id: "men red Boxy T-Shirt with Roll Sleeve Detail",
            price: 20.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4,
            color: "Red",
            genre: "Men",
            quantite:1,
            total:1,
            state:"old"
        },


        {
            id1: 2,
            id: "women black Boxy1 T-Shirt with Roll Sleeve",
            price: 20.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image5,
            image2: image6,
            image3: image3,
            image4: image4,
            color: "Black",
            genre: "Women",
            quantite:1,
            total:1,
            state:"new"
        },
        {
            id1: 3,
            id: "kids gray Boxy2 T-Shirt with Roll Sleeve",
            price: 5.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image2,
            image2: image3,
            image3: image4,
            image4: image5,
            color: "Gray",
            genre: "Kids",
            quantite:1,
            total:1,
            state:"new"
        },
        {
            id1: 1,
            id: "men red Boxy T-Shirt with Roll Sleeve Detail",
            price: 20.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4,
            color: "Red",
            genre: "Men",
            quantite:1,
            total:1,
            state:"old"
        },
        {
            id1: 4,
            id: "women black Boxy3 T-Shirt with Roll Sleeve",
            price: 30.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image7,
            image2: image4,
            image3: image6,
            image4: image5,
            color: "Black",
            genre: "Women",
            quantite:1,
            total:1,
            state:"new"
        },
        {
            id1: 1,
            id: "men red Boxy T-Shirt with Roll Sleeve Detail",
            price: 20.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image1,
            image2: image2,
            image3: image3,
            image4: image4,
            color: "Red",
            genre: "Men",
            quantite:1,
            total:1,
            state:"old"
        },
        {
            id1: 5,
            id: "men gray Boxy4 T-Shirt with Roll Sleeve",
            price: 10.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image6,
            image4: image5,
            image2: image4,
            image3: image3,
            color: "Gray",
            genre: "Men",
            quantite:1,
            total:1,
            state:"old"
        },
        {
            id1: 6,
            id: "kids black Boxy5 T-Shirt with Roll Sleeve",
            price: 10.00,
            miniDescription: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....",
            description: "Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim.Nunc eget risus at ipsum blandit ornare vel sed velit.Proin gravida arcu nisl, a dignissim mauris placerat.",
            brand: "MyVendor",
            Categories:["boxy", "shirt", "Sleevless"],
            image1: image4,
            image2: image3,
            image3: image6,
            image4: image5,
            color: "Black",
            genre: "Kids",
            quantite:1,
            total:1,
            state:"new"
        },
    ])
    const [addToCart, setAddToCart] = useState([])
    let [quantite, setQuantité] = useState(1)
    // const [cart, setCart] = useState([])
    return (
        <>
            <MyContext.Provider value={[test, setTest, addToCart, setAddToCart, quantite, setQuantité]} >
                {children}
            </MyContext.Provider>
        </>
    )
}

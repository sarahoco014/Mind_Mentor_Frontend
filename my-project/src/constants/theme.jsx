import { Dimensions } from "react-native";



const {width, height} = Dimensions.get('screen');

export const COLORS = {
    primary: '#F8B8D0', //orchidpink
    title: '#333333', // jet

    mintgreen: '#BFE5E1', // Soft blue-green colors are often associated with 
    verdigris: '#4AA7A9', // calmness, relaxation, and tranquility
    
    orchidpink: '#F8B8D0',
    
    jet: '#333333', // Using cool grays for text and backgrounds provides a 
    whitesmoke: '#F5F5F5', // clean and readable interface, which is essential for accessibility.
    
    darkorange: '#FF8C00', //A warm accent color like orange can be used for important buttons and 
                        // notifications to grab users' attention without being overly stimulating.
    babypowder: '#F8F7F2' // White can be used for spacing and to ensure content remains clear and legible


};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height

}

const FONT = {
    regular: "MontserratRegular",
    medium: "KarlaRegular",
    bold: "MontserratSemiBold",
  };
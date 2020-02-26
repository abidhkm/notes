export const themes: Ithemes = {
    light: {
        colors: {
            primary: "#ff5f08",//orange,
            secondary: "#747474", //dark grey,
            teraitary: "#d7d7d7", //grey,
            quaternary: "ffffff" //white
        },
        font: {
            primary: "raleway"
        }
    },
    dark: {
        colors: {
            primary: "red",//orange,
            secondary: "orange", //dark grey,
            teraitary: "blue", //grey,
            quaternary: "black" //white
        },
        font: {
            primary: "uni-sans"
        }
    }
}

interface Itheme {
    colors: {
        primary: string,
        secondary: string,
        teraitary: string,
        quaternary: string,
    },
    font: {
        primary: string,
    }
}
export interface Ithemes {
    light: Itheme,
    dark: Itheme,
}
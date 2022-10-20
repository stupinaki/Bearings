import {breakpoints, screenSize} from "../../consts/breakpoints";

export default {
    breakPoint(state) {
        const width = state.viewportWidth;
        if(width <= breakpoints.extraSmall) {
            // console.log("extraSmall меньше 450")
            return screenSize.Mobile;
        }
        if(width <= breakpoints.small) {
            // console.log("small меньше 600")
            return screenSize.Tablet;
        }
        if(width <= breakpoints.large) {
            // console.log("large меньше 900")
            return screenSize.Laptop;
        }
        if(width <= breakpoints.extraLarge) {
            // console.log("Desktop, меньше 1200")
            return screenSize.Desktop;
        }
        if(width > breakpoints.extraLarge) {
            // console.log("BigDesktop, больше 1200")
        }
    }
}


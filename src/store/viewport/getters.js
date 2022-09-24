import {breakpoints, screenSize} from "../../consts/breakpoints";

export default {
    breakPoint(state) {
        const width = state.viewportWidth;
        if(width <= breakpoints.extraSmall) {
            return screenSize.Mobile;
        }
        if(width <= breakpoints.small) {
            return screenSize.Tablet;
        }
        if(width <= breakpoints.large) {
            return screenSize.Laptop;
        }
        return screenSize.Desktop;
    }
}


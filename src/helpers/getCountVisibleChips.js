import {breakpoints} from "../consts/breakpoints";

export function getCountVisibleChips(viewportWidth) {
    if(viewportWidth <= breakpoints.large && viewportWidth >= breakpoints.small) {
        return 2;
    }
    return 1;
}

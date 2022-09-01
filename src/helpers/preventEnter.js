export function preventEnter(e) {
    if(e.keyCode === 13) {
        console.log("что-то нажал enter в input")
        e.preventDefault();
    }
}
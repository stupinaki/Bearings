export function preventEnter(e) {
    if(e.keyCode === 13) {
        e.preventDefault();
    }
}
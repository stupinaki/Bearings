export default {
    fileInDropZone(state) {
        state.isFileInDropZone = true;
    },
    fileOutOfDropZone(state) {
        state.isFileInDropZone = false;
    },
    toggleLoading(state) {
        state.isLoading = !state.isLoading;
    },
}
export default {
    turnOnHighlight({commit}){
        commit("fileInDropZone");
    },
    turnOffHighlight({commit}){
        commit("fileOutOfDropZone");
    },
    initToggleLoading({commit}) {
        commit("toggleLoading");
    },
}
export default {
    orderedProducts(state, getters) {
        if (state.isOrderDesc) {
            return getters.productsInRange.sort((a, b) => a.price - b.price)
        }
        return getters.productsInRange.sort((a, b) => b.price - a.price);
    },
    productsInRange(state) {
        const [min, max] = state.rangeFilter;
        return state.products.filter(product => product.count >= min && product.count <= max)
    }
}
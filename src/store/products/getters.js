export default {
    orderedProducts(state, getters) {
        if (state.isOrderDesc) {
            return getters.productsInRange.sort((a, b) => a.priceForOne - b.priceForOne)
        }
        return getters.productsInRange.sort((a, b) => b.priceForOne - a.priceForOne);
    },
    productsInRange(state) {
        const [min, max] = state.rangeFilter;
        return state.products.filter(product => product.availability >= min && product.availability <= max)
    }
}
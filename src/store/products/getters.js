export default {
    //продукты отсортированные по возрастанию/убыванию
    orderedProducts(state, getters) {
        if (state.isOrderDesc) {
            return getters.productsInRange.sort((a, b) => a.price - b.price)
        }
        return getters.productsInRange.sort((a, b) => b.price - a.price);
    },
    //продукты отфильтрованные по количеству
    productsInRange(state, getters) {
        const [min, max] = state.rangeFilter;
        return getters.productsInCity.filter(product => product.count >= min && product.count <= max)
    },
    //продукты отсортированные по городам
    productsInCity(state) {
        if(state.cityId) {
            return state.products.filter(product => product.id_city === state.cityId);
        }
        return state.products;
    },
    //продукты отфильтрованные по поисковому запросу
    getProducts() {

    }
}

export default {
    citiesNameAndId(state) {
        return state.cities.map(c => {
            return {
                title: c.name,
                value: c.id
            }
        })
    }
}

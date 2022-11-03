
export default {
    allCities(dispatch, commit, getters, rootGetters) {
         return rootGetters['cities/citiesNameAndId'];
    },
    allCompanies(dispatch, commit, getters, rootGetters) {
        return rootGetters['companies/companiesNameAndId'];
    }
}
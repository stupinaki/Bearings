
export default {
    companiesNameAndId(state) {
        return state.companies.map(c => {
            return {
                title: c.name,
                value: c.id_org
            }
        })
    }
}
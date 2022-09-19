
export function getCitiesOptions(cities) {
    return cities.map(c => ({title: c.name, value: c.id}))
}
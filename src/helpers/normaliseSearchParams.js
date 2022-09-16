export function normaliseSearchParams(searchParams) {
    const obj = {};

    for(let param in searchParams) {
        if(searchParams[param] && !Array.isArray(searchParams[param])) {
            obj[param] = searchParams[param];
        }
        if(searchParams[param] && Array.isArray(searchParams[param])) {
            obj[param] = searchParams[param].map(v => v.value) || [];
        }
    }
    return obj;
}

export function timeoutPromise(data, timeout) {
    return new Promise((resolve, reject) => {
        if(Array.isArray(data) && data.length) {
            setTimeout(() => resolve(data), timeout);
        } else {
            setTimeout(() => reject("Получены кривые данные.."), timeout);
        }
    })
}

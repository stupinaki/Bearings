export function timeoutPromise(data, timeout) {
    return new Promise(resolve => {
        setTimeout(() => resolve(data), timeout)
    })
}
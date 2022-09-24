
export function timeoutPromise(data, timeout, isThrowError) {
    return new Promise((resolve) => {
        if (isThrowError) {
            throw new Error("Error!");
        }
        setTimeout(() => resolve(data), timeout)
    })
}

export function throttle(func, ms){
    let isThrottling = false;
    let lastArgs = null;
    let lastThis = null;

    function wrapper(){
        if(isThrottling){
            lastArgs = arguments;
            lastThis = this;
            return;
        }
        func.apply(this, arguments);
        isThrottling = true;

        setTimeout(() => {
            isThrottling = false;
            if(lastArgs){
                wrapper.apply(lastArgs, lastThis);
                lastArgs = null;
                lastThis = null;
            }
        }, ms)
    }
    return wrapper;
}

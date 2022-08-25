export function throttle(func, ms){
    let isThrottling = false;
    let lastArgs;
    let lastThis;

    function wrapper(){
        if(isThrottling){
            lastArgs = arguments;
            lastThis = this;
            return;
        }
        func.applay(this, arguments);
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

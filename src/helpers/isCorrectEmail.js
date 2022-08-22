export function isCorrectEmail(string) {
    const rule = new RegExp(/(\w|\.|-|_)+@[a-z]+\.[a-z]+/gm);
    return rule.test(string);
}
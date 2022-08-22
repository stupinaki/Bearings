export function isCorrectPhone(phone) {
    const rule = new RegExp(/^(8|\+7)[\- ]?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7}$/g);
    return rule.test(phone);
}
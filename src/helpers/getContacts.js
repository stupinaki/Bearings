export function getMailto(email) {
    if(email){
        return "mailto:" + email;
    }
    return "Адрес электронной почты отсутствует";
}

export function getPhone(phone) {
    const correctPhone = phone.match(/\d+/g).join('');
    if(correctPhone) {
        return "tel:" + correctPhone;
    }
    return "Номер отсутствует";
}


export function allNumbers (numbersStr) {
    const numbersArr = numbersStr.split(",");
    return numbersArr.map(number => {
        return  {
            tel: getPhone(number),
            number: number
        }
    })
}
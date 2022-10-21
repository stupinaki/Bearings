import {ourContacts} from "./ourContacts.js";

export const types = {
    customer: "customer",
    company: "company",
}

export const questionCardValue = [
    {
        id: 1,
        type: "customer",
        question: "Где найти маркировку подшипников?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 2,
        type: "customer",
        question: "Моего города нет в списке городов. Что я делаю?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 4,
        type: "customer",
        question: "Я не знаю, какой подшипник мне нужен. Что делать?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 5,
        type: "customer",
        question: "Как измерить размеры подшипника?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 6,
        type: "company",
        question: "Как разместить свою компанию на сайте?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 7,
        type: "company",
        question: "Как это работает?",
        answer: "Вы присылаете нам заявку на размещение ассортимента и регистрации компании.\n" +
                "Мы узнаем детали и регистрируем компанию и ассортимент подшипников.\n" +
                "Через некоторые время данные становятся доступными для поиска."
    },
    {
        id: 8,
        type: "company",
        question: "Как начать продавать при помощи сайта?",
        answer: `Вы можете позвонить по телефону ${ourContacts.phone} или обратитесь по адресу ` +
                `электронной почты ${ourContacts.email} и мы с вами свяжемся.`
    },
    {
        id: 9,
        type: "company",
        question: "Какие данные необходимы для размещения?",
        answer: "1) Карточка предприятия с контактными данными для покупателей.\n" +
            "2) Краткое описание компании (до 250 символов).\n" +
            "3) Эмблема компании в формате jpeg.\n" +
            "Прайс в Excel формате (структуру файла можно уточнить связавшись с нами).\n"
    },
]

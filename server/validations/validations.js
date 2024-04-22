import { body } from "express-validator";

export const registerValidation = [
   body('phoneNumber', 'Неправильно вказаний номер!').isLength({min:10}),
    body('password', 'Пароль має бути мінімум 5 символів!').isLength({min:5}),
    body('firstName', 'Ім`я має бути мінімум 3 симоли!').isLength({min:3}),
    body('secondName', 'Прізвище має бути мінімум 3 симоли!').isLength({min:3}),
    body('avatarUrl', 'Неправильне посилання на фото!').optional().isURL(),
];

export const loginValidation = [
    body('phoneNumber', 'Неправильно вказаний номер!').isLength({min:10}),
    body('password', 'Пароль має бути мінімум 5 символів!').isLength({min:5}),
];

export const postCreateValidation = [
     body('title', 'Введіть заголовок статті!').isLength({min:3}).isString(),
     body('text', 'Введіть текст статті!').isLength({min:10}).isString(),
     body('tags', 'Неправильний формат тегів!').optional().isString(),
     body('imageUrl', 'Невірно вказано посилання!').optional().isString(),
 ];
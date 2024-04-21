import { body } from "express-validator";

export const registerValidation = [
    body('email',  'Неправильний формат пошти!').isEmail(),
    body('password', 'Пароль має бути мінімум 5 символів!').isLength({min:5}),
    body('firstName', 'Ім`я має бути мінімум 3 симоли!').isLength({min:3}),
    body('secondName', 'Прізвище має бути мінімум 3 симоли!').isLength({min:3}),
    body('avatarUrl', 'Неправильне посилання на фото!').optional().isURL(),
];
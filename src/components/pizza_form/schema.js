import * as yup from 'yup';

export default yup.object().shape({
    size: yup.string().required('Required'),
    sauce: yup.string().required('Required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    quantity: yup
        .number()
        .min(1, 'Minimum order must be 1')
        .max(10, 'Maximum of 10 per order'),
})
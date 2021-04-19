import React, { useState, useEffect } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import schema from './components/validation/schema'
import PizzaForm from './components/pizza-form/pizza-form.component'

import ConfirmationPage from './components/confirmation/confirmation.component'
import * as yup from 'yup'
import HomePage from './components/homepage/homepage.component'

const initialFormValues = {
    size: 'medium',
    sauce: 'originalRed',
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatos: false,
    blackOlives: false,
    roastedGarlic: false,
    artichokeHearts: false,
    threeCheese: false,
    pineapple: false,
    extraCheese: false,
    substitute: false,
    specialInstructions: 'hello',
    quantity: 1,
    total: 0,
}
const initialFormErrors = {
    size: '',
    sauce: '',
    toppings: '',
    substitute: '',
    specialInstructions: '',
    quantity: '',
}
const initialOrders = []
const initialDisabled = true

const App = () => {
    const [orders, setOrder] = useState(initialOrders)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const inputChange = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0],
                })
            })
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
    }, [formValues])

    return (
        <>
            <h1>Lambda Eats</h1>
            <p>You can remove this code and create your own header</p>

            <Switch>
                <Route path={'/order'}>
                    <ConfirmationPage />
                </Route>
                <Route path={'/pizza'}>
                    <PizzaForm
                        orders={orders}
                        values={formValues}
                        change={inputChange}
                        disabled={disabled}
                        errors={formErrors}
                    />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </>
    )
}

export default withRouter(App)

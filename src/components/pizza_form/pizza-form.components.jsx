import React from 'react';
import './pizza-form.css';

export default function PizzaForm(props){
    const { values, change, disabled, errors, order } = props

    const onSubmit = (event) => {
        event.preventDefault()
        const orderId = orders.length
        const order = {
            orderId: orderId,
            size: values.size,
            sauce: values.sauce,
            toppings: values.toppings,
            substitue: values,substitute,
            total: values.total,
        }
        orders.push(order)
        this.props.history.push('/order/' + orderId)
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target
        const correctValue = type === 'checkbox' ? checked: value
        values.total = 0
        if (values.size === 'small') {
            values.total = 5
        } else if (values.size === 'medium') {
            values.total = 6
        } else if (values.size === 'large') {
            values.total = 7
        } else if(values.size === 'xl') {
            values.total = 8
        } else {
            values.total = 0
        }
        if (values.substitue === true) {
            values.total += 1
        }
        values.total = values.total * values.quantity
        change(name, correctValue)
    }

    return (
        <div className = 'container'>
            <form onSubmit={onSubmit}>
                <div>
                    <h2>Build Your Own Pizza</h2>
                </div>
                <div>
                    <h3>Size</h3>
                    <div className="errors">{errors.size}</div>
                    <select name='size' onChange={onChange}>
                        <option value="">Select</option>
                        <option value="small">Small(+$5)</option>
                        <option value="medium">Medium(+$6)</option>
                        <option value="large">Large(+$7)</option>
                        <option value="xl">XL(+$8)</option>
                    </select>
                </div>
                <div>
                    <h3>Instructions</h3>
                    <textarea
                        onChange={onChange}
                        name="instructions"
                        id="instructions"
                        cols="5"
                        rows="5"
                        placeholder="Anything else you'd like to add?"></textarea>
                </div>
                <div>
                    <h3>Toppings</h3>
                    <div className="errors">{errors.toppings}></div>
                    <div>
                        <input
                            onChange={onChange}
                            type='checkbox'
                            id='pepperoni'
                            name='pepperoni'
                            value='pepperoni'
                            checked={values.pepperoni}
                        />
                        <label for='pepperoni'>Pepperoni</label>
                        <input
                            onChange={onChange}
                            type='checkbox'
                            id='sausage'
                            name='sausage'
                            value='sausage'
                            checked={values.sausage}
                        />
                        <label for="sausage">Sausage</label>
                        <input
                            onChange={onChange}
                            type="checkbox"
                            id="threeCheese"
                            name="threeCheese"
                            value="threeCheese"
                            checked={values.threeCheese}
                        />
                        <label for="threeCheese">Three Cheese</label>
                        <input
                            onChange={onChange}
                            type="checkbox"
                            id="pineapple"
                            name="pineapple"
                            value="pineapple"
                            checked={values.pineapple}
                        />
                        <label for="pineapple">Pineapple</label>
                        <input
                            onChange={onChange}
                            type="checkbox"
                            id="extraCheese"
                            name="extraCheese"
                            value="extraCheese"
                            checked={values.extraCheese}
                        />
                        <label for="extraCheese">Extra Cheese</label>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="errors">{errors.quantity}</div>
                    <input
                        onChange={onChange}
                        type="number"
                        min="1"
                        max="10"
                        name="quantity"
                        id="quantity"
                        step="1"
                        value={values.quantity}
                    />
                    <button disabled={disabled} id="submitBtn">
                        Add to Order ${values.total}
                    </button>
                </div>
            </form>
        </div>
    )
}
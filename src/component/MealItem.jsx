import { useContext } from 'react'
import {egyptianPoundFormatter} from '../util/formatting.js'
import Button from '../UI/Button.jsx'
import CartContext from '../store/cartContext.jsx'
export default function MealItem({meal, ...props}) {
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart () {
        cartCtx.addItem(meal);
    }

    return (
        <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{egyptianPoundFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add to Cart</Button>
            </p>
        </article>
      </li>
    )
}
import { useContext } from 'react'

import logoImg from '../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../store/cartContext.jsx'


export default function Header() {
    const cartCtx = useContext(CartContext);
    const totalItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <header id='main-header'>
            <div id="title">
                <img src={logoImg} alt="LogoImg" />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalItems})</Button>
            </nav>
        </header>
    )
}


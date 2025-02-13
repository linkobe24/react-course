import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

import './index.css'

const pizzaData = [
    {
        name: 'Focaccia',
        ingredients: 'Bread with italian olive oil and rosemary',
        price: 6,
        photoName: './pizzas/focaccia.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Margherita',
        ingredients: 'Tomato and mozarella',
        price: 10,
        photoName: 'pizzas/margherita.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Spinaci',
        ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
        price: 12,
        photoName: 'pizzas/spinaci.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: 'pizzas/funghi.jpg',
        soldOut: false,
    },
    {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: 'pizzas/salamino.jpg',
        soldOut: true,
    },
    {
        name: 'Pizza Prosciutto',
        ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
        price: 18,
        photoName: 'pizzas/prosciutto.jpg',
        soldOut: false,
    },
]

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' }
    const style = {}

    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData
    const numPizzas = pizzas.length
    const pizzaComponetList = pizzas.map((pizza) => {
        return (
            <Pizza
                key={pizza.name}
                className="pizza"
                {...pizza}
            />
        )
    })

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {(numPizzas > 0 && (
                <>
                    <p>
                        Authentic Italian cusine. 6 creative dishes to choose
                        from . All from our stone oven, all oganic, all
                        delicios.
                    </p>
                    <ul className="pizzas">{pizzaComponetList}</ul>
                </>
            )) || (
                <p>We're still working on our menu. Please come back later.</p>
            )}
        </main>
    )
}

function Pizza(props) {
    return (
        <li className={`pizza ${props.soldOut ? 'sold-out' : null} `}>
            <img
                src={props.photoName}
                alt={props.name}
            />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredients}</p>
                <span>{props.soldOut ? 'SOLD OUT' : `$${props.price}`}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour

    // if (hour >= openHour && hour <= closeHour) alert("We're currently open")
    // else
    //     alert("Sorry, we're close")

    return (
        <footer className="footer">
            {(isOpen && <Order closeHour={closeHour} />) || (
                <p>
                    We're happy to welcome you between {openHour}:00 -{' '}
                    {closeHour}:00
                </p>
            )}
        </footer>
    )
}

function Order(props) {
    return (
        <div className="order">
            <p>
                We're open until {props.closeHour}:00. Come visit us or order
                online.
            </p>
            <button className="btn">Order</button>
        </div>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

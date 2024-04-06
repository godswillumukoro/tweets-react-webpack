import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from './components/Footer'

const App = () => {
    const [count, setCount] = useState({
        count1: 0,
        count2: 0
    })
    const incrementCount1 = () => {
        setCount({...count, count1: count.count1 + 1})
    }

    const incrementCount2 = () => {
        setCount({...count, count2: count.count2 + 1})
    }

    const [randomNumbers, setRandomNumbers] = useState([0])
    const generateRandomNumber = () => {
        setRandomNumbers([...randomNumbers, Math.random() * 1000])
    }

    const price = 4
    const products = ["tetly", "dangote sugar", "dano milk", "nasco cornflakes", "cway bottle water", "coco pops"]
    const renderList = () => {
        if (products.length === 0) {
            return <h3>No products avaialable.</h3>
        } else {
            return products.map((product) => {
                return <h3>{product}</h3>
            })
        }
    }

    return (
    <>
        <Navbar />
        {/* <div>
            <h1>{count.count1}</h1>
            <button className="btn btn-primary" onClick={incrementCount1}>Add +</button>
        </div>

        <div>
            <h1>{count.count2}</h1>
            <button className="btn btn-primary" onClick={incrementCount2}>Add +</button>
        </div>

        <div>
            {randomNumbers.map(number => {return <h1>{number}</h1> })}
            <button className="btn btn-primary" onClick={() => generateRandomNumber(99)}>Add +</button>
        </div> */}
    </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
import React from "react";
import ReactDOM from 'react-dom'
import Tweets from "./components/Tweets"

const App = () => {
    return (
        <>
            <h1>Tweeter</h1>
            <Tweets />
        </>

    )

}

ReactDOM.render(<App />, document.getElementById("root"))
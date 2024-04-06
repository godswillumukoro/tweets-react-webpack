import {tweetsData} from '../api/tweetsData'
import Tweet from "./Tweet";
import React, {useState} from "react";


const Tweets = () => {
    const [tweets, setTweets] = useState(tweetsData)

    const handleDownVote = (id) => {
        const newState = [...tweets]
        const index = tweets.findIndex(element => element.id === id)

        if(newState[index].likes > 0) {
            newState[index].likes -= 1
            setTweets(newState)
        }

        console.log("downvoted...");
    }

    const handleUpvote = (id) => {
        const newState = [...tweets]
        const index = tweets.findIndex(element => element.id === id)
        newState[index].likes += 1

        setTweets(newState)

        console.log("upvoted!");
    }

    const renderTweets = () => {
        return tweetsData.map(element => {
            return <Tweet upVote={handleUpvote} downVote={handleDownVote} data={element} />
        })
    }

    return <div>{renderTweets()}</div>
}

export default Tweets
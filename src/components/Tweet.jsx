import React, {useState} from "react";

const Tweet = (props) => {
    console.log(props)


    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.data.name}</h3>
                <h6 className="card-subtitle mb-4 text-muted">{props.data.handle}</h6>
                <p className="card-text">{props.data.tweet}</p>
                <a href="" class="card-link">{props.data.phone}</a>
                <a href="" class="card-link">{props.data.email}</a>

                <div className="mt-4">
                    <button className="card-link btn btn-danger" onClick={() => props.downVote(props.data.id)}>
                        <i className="fas fa-arrow-down"></i>
                    </button>
                    <button className="card-link btn btn-primary" onClick={() => props.upVote(props.data.id)}>
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <span className="card-link">{props.data.likes}</span>
                </div>
            </div>
        </div>
    )
}

export default Tweet
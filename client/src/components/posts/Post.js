import React from 'react'

const Post = (props) => {

    return (
        <div>
            <div>{props.post.text}</div>
            <div>User: {props.post.user}</div>
            <div>Date: {props.post.posted}</div>
            <div>Tags: {props.post.tags}</div>

        </div>
    )
}
export default Post
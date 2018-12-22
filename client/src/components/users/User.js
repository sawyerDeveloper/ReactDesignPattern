import React from 'react'

const User = (props) => {

    return (
        <div>
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
            <div>{props.user.gender}</div>
        </div>
    )
}
export default User
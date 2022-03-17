import React from "react"
import {connect} from "react-redux"

const Models = ({models}) => {
    return (<ul>
        {models.map(model => {
            return <li> {model.name}</li>
        })}
    </ul>)
}
export default connect(state=>state)(Models)


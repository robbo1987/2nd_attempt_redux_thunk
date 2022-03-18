import React from "react"
import {connect} from "react-redux"


const Brands = ({brands}) => {
    return (<ul>
        {brands.map(brand => {
            return <li> {brand.name}</li>
        })}
    </ul>)
}
export default connect(state=>state)(Brands)


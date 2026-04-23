/*import { Component } from "react";


export default class Students extends Component{
    render(){
        const {name,marks} = this.props
        return(<>
            <h1>hello,{name}</h1>
            <h3>marks,{marks}</h3>
            <hr/>
            </>
        )
    }
}*/

export default function Students (props){
    const {name,marks} = props
    return(
        <>
            <h1>hello,{name}</h1>
            <h3>marks,{marks}</h3>
            <hr/>
            </>
    )
}
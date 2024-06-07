import React, {Component} from "react"

class welcome extends Component{
    render(){
        return(
            <div>
                <h1>WelcomeWelcome to the Demo React </h1>
                <h2>Hello {this.props.name} </h2>
            </div>
        )
    }
}
export default welcome;
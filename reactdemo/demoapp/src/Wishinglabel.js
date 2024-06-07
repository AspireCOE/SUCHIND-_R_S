import React, { Component } from 'react'

export class Wishinglabel extends Component{
    constructor(props){
        super(props)

        this.state={
            visitor:0
        }
    }
    changeCount(event){
        this.setState({
            visitor:this.state.visitor + 1
        })
    }
    render(){
        return(
            <div> 
            <br/>
            Wishinglabel 
            <label onMouseOver= {(event)=> this.changeCount(event)}>
                visitor's Count : {this.state.visitor} </label>
            </div>
        )
    }
}
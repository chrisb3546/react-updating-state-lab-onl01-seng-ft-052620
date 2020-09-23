// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component{

    state ={
        timesClicked: 0
    }

    incrementButton = () => {
        let newCount = this.state.timesClicked + 1
        this.setState({
            timesClicked: newCount
        })



    }

    render(){
        return(
            <button onClick = {this.incrementButton}>{this.state.timesClicked}</button>
        )

    }
}
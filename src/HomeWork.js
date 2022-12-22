import React from "react";

class HomeWork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        a1: 0
        }
    }
    btnHandler = () => {
        let val = this.state.a1;
        val++;
        this.setState({ a1: val });
    }
render() { 

        return (
            <div>
                <button onClick ={this.btnHandler}>CLICK</button>
                <h1>{this.state.a1}</h1>
                </div>
     )   
}
}




export default HomeWork;

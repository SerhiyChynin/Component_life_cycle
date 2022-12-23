import React from "react";

class HomeWork extends React.Component {
    constructor(props, arg) { 
        let s2 = 201; 
        let p1 = 88;
        super();
        this.state = {
            a1: 0, 
            p1: 88
        }
        let q = this.state.s1 = [
            p1, ' ', s2, ' '
    ]
        let w = this.state.s2 = [
             s2
    ]
        console.log(props, s2);
    }

    btnHandler = () => {
        let val = this.state.a1;
        val++;
        this.setState({ a1: val });
    }
render() { 

        return (
            <div>
                <button onClick={this.btnHandler}>CLICK</button>
                <h1>{this.state.p1}</h1>
                <h2>{this.state.a1}</h2>
                <div>
                    <h3>{this.state.s1} </h3>
                    <h3>{this.state.s2} </h3>
                </div>
            </div>
            
     )   
}
}




export default HomeWork;

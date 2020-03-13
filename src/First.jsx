import React, { Component } from 'react';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: "",
            name: "**",
            Date: "MM/YY"
        }
    }

    changeName = (event) => {
    //   const regex = /[A-Za-z]/g
    //   if(regex.test(event.target.value))
      this.setState({
            name: event.target.value.toUpperCase()
        })
        
       
    }
    changeNum=(event)=>{
        
        this.setState({
            num: event.target.value
        })
        
    }
    changeDate=(event)=>{
        if(event.target.value.substring(0,2)<=12){
        this.setState({
            Date:event.target.value.substring(0,2) +"/"+event.target.value.substring(2,4)
        })}else if(event.target.value.substring(0,2)>12){
            this.setState({
                Date:"0"+event.target.value.substring(0,1)+"/"+event.target.value.substring(1,3)
            })
        }
    }
    render() {
        console.log(this.state.name)
        return (
            <div className="total">
                <div className="Creditt">
                    <p className="number">{this.state.num.padEnd(19,"*")}</p>
                    <p className="name">{(this.state.name.match(/^[A-Za-z\D]+$/g)||this.state.name=="")?this.state.name.padEnd(16,"*"):alert("please add a valid name ") }</p>
                    <p className="validity">{this.state.Date.padEnd(4,"M")}</p>
                </div>
                <div className="holders">
                <input className="nc" type="text" placeholder="num-card" onChange={this.changeNum} maxLength="20" ></input>
                    <input className="nuc" type="text" placeholder ="name" onChange={this.changeName}maxLength="16" ></input>
                  
                    <input className="dc" type="text" placeholder="Date" onChange={this.changeDate} maxLength="4" ></input>
                </div>

            </div>
        )
    }
}

export default Cart;
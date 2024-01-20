import { Component } from "react";
//Not used, just here for practice
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            digit1:"",
            digit2:"",
            sum:"",
        }
    }


    
    digit1Change= (event) =>{
        this.setState({
            digit1: event.target.value,
        })
    }

    digit2Change= (event) =>{
        this.setState({
            digit2: event.target.value,
        })
    }

    //const Addition = () => {
    //    const[]
    //}

    Calculate=()=>{
        this.setState({
            sum: parseInt(this.state.digit1,10) + parseFloat(this.state.digit2,10)
        })
        console.log(this.state.sum)
    }


    render() {
        return (
            <div>
                <form>
                    <label>
                    <input 
                        onChange={this.digit1Change}
                        type="digit" 
                        value={this.state.digit1}
                        
                    />
                    <input 
                        onChange={this.digit2Change}
                        type="digit" 
                        value={this.state.digit2}
                        
                    />
                    </label>
                    <button type="button" value="Add" onClick={this.Calculate}>Add Values</button>
                </form>
                
                <h3>{String(this.state.sum)}</h3>
            </div>
        );
    }
}

export default Form;
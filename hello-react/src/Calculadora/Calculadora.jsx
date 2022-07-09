import React from "react";
import './Calculadora.css';

class Calculadora extends React.Component{

    constructor(props){
        super(props);
        this.state = {valor1:'', valor2:'', resultado:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        let resultado = parseInt(this.state.valor1) + parseInt(this.state.valor1);
        this.setState({resultado:resultado});
    }

    limpar(event){
        this.setState({valor1:'', valor2:'', resultado:''});
    }

    render(){
        return(
            <div>
                <h1>Calculadora</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Primeiro valor<br/>
                        <input type="text" onChange={this.handleChange} name="valor1" value={this.state.valor1} /><br/><br/>
                    </label>
                    <label>
                        Segundo valor<br/>
                        <input type="text" onChange={this.handleChange} name="valor2" value={this.state.valor2}/><br /><br />
                    </label>
                    <input type="submit" value="Calcular"/>
                    <input type="button" value="Limpar" onClick={this.limpar}/>
                </form>

                <p>
                    {this.state.resultado}
                </p>
            </div>
        );
    }
}

export default Calculadora;
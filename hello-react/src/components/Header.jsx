import React from "react";
import './Header.css'
import  {IconName} from "react-icons/io"


class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="align">
            <div className="Header">
                    <h1>Seja Bem vindo(a), {this.props.nome}</h1>
            </div>
            </div>
            
        );
    }
}


export default Header;
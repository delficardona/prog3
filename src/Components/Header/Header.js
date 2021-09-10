import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''

        }
    }

preventSubmit(event){
        event.preventDefault();
        console.log('Evitando el envío')
    }

controlarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => console.log(this.state.valor))
        
    }

    render(){
        return(
            <React.Fragment>
                <header>
                    <section>
                    <h1> <a href="/">LD Movies</a></h1>
                       
                        <i className="fas fa-th"></i>
                        <i className="fas fa-align-justify"></i>
                        <form action="" onSubmit={(event)=>this.preventSubmit(event)}>
                            <input type="text" name="search" id="" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placehoder='Buscar'/>
                            <button type="submit"> Enviar <i className="fas fa-search"></i></button>
                        </form>
                    </section> 
                </header>
            </React.Fragment>

        );
    }
}



export default Header;
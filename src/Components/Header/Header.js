import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            filterBy: ''

        }
    }

preventSubmit(event){
        event.preventDefault();
        console.log('Evitando el envío')
    }

controlarCambios(event){
        this.setState({
            filterBy: event.target.value
        }, () => this.props.filtrarMovies(this.state.filterBy))
        
    }

    render(){
        return(
            <React.Fragment>
                <header>
                    <section className="header">
                        <img src="./images/logo.png" alt="logo"></img>
                        <h1> LD MOVIES</h1>
                        <form action="" onSubmit={(event)=>this.preventSubmit(event)}>
                            <input type="text" name="search" id="" placeholder="Buscar Pelicula" onChange={(e)=>this.controlarCambios(e)} value={this.state.filterBy} />
                           
                        </form>
                    </section> 
                </header>
            </React.Fragment>

        );
    }
}



export default Header;
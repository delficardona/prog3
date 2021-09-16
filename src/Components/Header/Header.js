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
                        <img className="logo" src="./images/logo2.png" alt="logo"></img>
                         <form action="" class="uk-search uk-search-default" onSubmit={(event)=>this.preventSubmit(event)}>
                            <span class="uk-search-icon-flip" uk-search-icon></span>
                            <input class="uk-search-input" type="search" name="search" id="" placeholder="Buscar Pelicula" onChange={(e)=>this.controlarCambios(e)} value={this.state.filterBy} />
                           
                        </form> 

                    </section> 
                </header>
            </React.Fragment>

        );
    }
}



export default Header;
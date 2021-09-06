import React, {Component} from 'react'
import Card from './Components/Card/Card'

class Main extends Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                <button type="button">Cargar más tarjetas</button>
                <section className="card-container">
                </section>
            </React.Fragment>
        );
    }
}

export default Main;
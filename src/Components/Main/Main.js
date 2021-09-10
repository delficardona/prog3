import React, {Component} from 'react';
import Card from '../Card/Card'
import './main.css'


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {


        }
    }

    render(){
        return(
            <React.Fragment>
            <section className="main">
                 <button type="button">Cargar más tarjetas</button>
                    <article className="card-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </article>
            </section>
            </React.Fragment>

        );
    }
}

export default Main;
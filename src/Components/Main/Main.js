import React, {Component} from 'react';
import Card from '../Card/Card'


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <React.Fragment>
                 <button type="button">Cargar más tarjetas</button>
                    <section className="card-container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </section>
            </React.Fragment>

        );
    }
}

export default Main;
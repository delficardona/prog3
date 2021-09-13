import React, {Component} from 'react';
import './card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            texto:'ver mas',
            show: false,
        }
    }

    verMas () {
       if (this.state.show){
           this.setState ({
            texto:'ver mas',
            show: false,
           })
        } else {
            this.setState ({
            texto:'ocultar',
            show: true,
           })
       }
    }

    preventAndShow (prevent){
        prevent.preventDefault ();
        this.verMas();
    }

    render(){
        console.log(this.props)
        return(
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close" onClick={()=> this.state.deleteCard(this.state.dataMovies.id)}></i>
                </section>
                <main>
               <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovies.poster_path}`} alt="pelicula"/> 
                    <section className="aditional-info">
                        <p> {this.props.dataMovies.title} </p>
                        <p> {this.props.dataMovies.overview} </p>
                    </section>
                    <a href="">Ver más</a>
                </main>
                </article>
        );
    }
}


export default Card; 
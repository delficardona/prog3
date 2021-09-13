import React, {Component} from 'react';
import './card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            texto:'ver mas',
            viewMore: false,
        }
    }

    viewMore () {
       if (this.state.viewMore){
           this.setState ({
            texto:'ver mas',
            viewMore: false,
           })
        } else {
            this.setState ({
            texto:'ocultar',
            viewMore: true,
           })
       }
    }

    preventAndShow (prevent){
        prevent.preventDefault ();
        this.viewMore();
    }

    render(){
        console.log(this.props)
        return(
            <article className="card">
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
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`} > Fecha de estreno: {this.props.dataMovies.release_date}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`} > Popularidad: {this.props.dataMovies.popularity}</p>
                    <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`} > Idioma: {this.props.dataMovies.original_language}</p>
                    <p className='more' onClick={ () => this.viewMore()}>{this.state.texto}</p>
                </main>
                </article>
        );
    }
}


export default Card; 
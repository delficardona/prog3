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


    render(){
        console.log(this.props)
        return(
            <article className="card">
                <section className="navigation">
                    <i className="far fa-window-close" style= {{color: this.state.color}} onClick={()=> this.props.deleteCard(this.props.dataMovies.id)}></i>
                </section>
                <main>
               <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovies.poster_path}`} alt="pelicula"/> 
                    <section className="aditional-info">
                        <p className='title'> {this.props.dataMovies.title} </p>
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
import React, {Component} from 'react';
import Card from '../Card/Card'
import Header from '../Header/Header'
import './main.css'


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            moviesIniciales: [],
            popular: null,
            upcoming: null,
            pagina: 1,
            isLoaded: false,
        }
    }

    componentDidMount(){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=a7861c4f6175fa7e9d7361d67809cb5a&language=en-US&page= " + this.state.pagina ;

        fetch(url)
        .then( response => response.json() )
        .then( data => {
            console.log(data);
            this.setState({
                moviesIniciales: data.results,
                popular: data.results,
                upcoming: data.results,
                isLoaded: true,

            })
        })
        .catch( error => console.log(error))
    }

    deleteCard(moviesABorrar){
        let moviesQueQuedan = this.state.moviesIniciales.filter( movie => movie.id !== moviesABorrar );
        this.setState({
            movies: moviesQueQuedan,

        })
    }

    render(){
        return(
            <React.Fragment>
            <Header/>
            <main className="main">
            <button type="button">Cargar más tarjetas</button>
            <section className="card-container">

            { this.state.isLoaded === false ? <p> Cargando...</p> : 
                        this.state.moviesIniciales.map (movie => <Card dataMovies={movie}
                        deleteCard={(id)=> this.deleteCard(id)}key={movie.id}/>)   
            }
            
            </section>
            </main>
            </React.Fragment>

        );
    }
}

export default Main;
import React, {Component} from 'react';
import Card from '../Card/Card'
import Header from '../Header/Header'
import './main.css'


class Main extends Component{
    constructor(){
        super()
        this.state = {
            movies: [],
            moviesIniciales: [],
            pagina: 1,
            isLoaded: false,
            orientacion: false,
            texto: 'fa-align-justify',
        }
    }

    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=a7861c4f6175fa7e9d7361d67809cb5a&language=en-US&page= ' + this.state.pagina;

        fetch(url)
        .then( response => response.json() )
        .then( data => {
            console.log(data)
            this.setState({
                movies: data.results,
                moviesIniciales: data.results,
                isLoaded: true,
                pagina:this.state.pagina + 1,
                

            })
        })
        .catch( error => console.log(error))
    }

    addCards(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=a7861c4f6175fa7e9d7361d67809cb5a&language=en-US&page= ' + this.state.pagina;

        fetch(url)
        .then( response => response.json() )
        .then( data => {
            console.log(data);
            this.setState({
                movies: this.state.movies.concat(data.results),
                moviesIniciales: this.state.moviesIniciales.concat(data.results),
                pagina: this.state.pagina + 1,
            })
        })
        .catch( error => console.log(error))
    }

    deleteCard(moviesABorrar){
        let moviesQueQuedan = this.state.movies.filter( movie => movie.id !== moviesABorrar );
        this.setState({
            movies: moviesQueQuedan,
        })
    }

    filtrarMovies(textoAFiltrar){
        let moviesFiltradas = this.state.moviesIniciales.filter (movie=> 
        movie.title.toLowerCase().includes(textoAFiltrar.toLowerCase()));

        this.setState({
            movies: moviesFiltradas,
        })
    }

    orientacion(){
        if (this.state.orientacion) {
            this.setState({
                orientacion: false,
                texto: 'fa-align-justify'
            })
            
        }else{
            this.setState({
                orientacion: true,
                texto: 'fa-th'
            })
            
        }
    }

    render(){
        return(
            <React.Fragment>
            <Header filtrarMovies={(textoAFiltrar)=> this.filtrarMovies(textoAFiltrar)}/>
            <main className="main">
            <button className="cargarMas" type="button" onClick={() => this.addCards()}>Cargar más tarjetas</button>
            <section className="card-container">

            { this.state.isLoaded === false ? <p> Cargando...</p> : 
                        this.state.movies.map (movie => <Card dataMovies={movie}
                        deleteCard={(moviesABorrar)=> this.deleteCard(moviesABorrar)}key={movie.id}/>)   
            }

            </section>
            </main>
            </React.Fragment>

        );
    }
}

export default Main;
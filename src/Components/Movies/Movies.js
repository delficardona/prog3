import React, {Component} from 'react';
import Card from '../Card/Card'

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            popular: null,
            upcoming: null,
            pagina: 1,

        }
    }
    componentDidMount(){
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=a7861c4f6175fa7e9d7361d67809cb5a&language=en-US&page= " + this.state.pagina ;

        fetch(url)
        .then( response => response.json() )
        .then( data => {
            console.log(data);
            this.setState({
                popular: data.results,
                upcoming: data.results,

            })
        })
        .catch( error => console.log(error))


    }

    deleteCard(moviesABorrar){
        let moviesQueQuedan = this.state.movies.filter( movie => movie.id !== moviesABorrar );

        this.setState({
            personajes: moviesQueQuedan
        })
    }

    render(){
        return(
            <section>
                {
                this.state.movies.map((movie, idx)=> 
                    <Card key={movie.title + idx} 
                        dataMovies={movie} 
                        remove={(moviesABorrar)=>this.deleteCard(moviesABorrar)}
                    />)
                }
            </section>

        );
    }
}


export default Movies; 
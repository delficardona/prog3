import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>LD Movies</h1>
        <Header />
      </header>

      <main className='main'>
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
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

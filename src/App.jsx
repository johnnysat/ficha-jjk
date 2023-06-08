import { React } from 'react'
import './App.css'

import Header from './components/header/header'
import Main from './components/main/main'
import Card from './components/card/card'



function App() {
  return (
    <div className="bodyBox">
    <Header />
      <section className="container">
      <Main />
      <Card />
      </section>
    </div>
  )
}

export default App

import React from 'react'
import Sidebar from './containers/Sidebar'
import EstiloGlobal from './styles'
import Sobre from './containers/Sobre'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <Sobre />
        <section>Projetos</section>
      </main>
    </>
  )
}

export default App

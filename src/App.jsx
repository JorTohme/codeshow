import React, { useState } from 'react'
import './App.css'

// Custom Hooks
import useChange from './Hooks/useChange'

// Components
import Menu from './Components/Menu/Menu.jsx'
import Result from './Components/Result/Result.jsx'

function App () {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJS] = useState('')

  const { handleHTML, handleCSS, handleJS } = useChange(setHtml, setCss, setJS)

  return (
    <div className='App'>
      <div className='container'>

        <Menu />

        <div className='box html'>
          <textarea name='html' id='html' cols='30' rows='10' onKeyUp={handleHTML}/>
        </div>
        <div className='box css'>
          <textarea name='css' id='css' cols='30' rows='10' onKeyUp={handleCSS}/>
        </div>
        <div className='box js'>
          <textarea name='js' id='js' cols='30' rows='10' onKeyUp={handleJS}/>
        </div>
        <div className='box show-result'>
          <Result html={html} css={css} js={js} />
        </div>
      </div>
    </div>
  )
}

export default App

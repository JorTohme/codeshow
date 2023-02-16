import React, { useState, useEffect } from 'react'
import './App.css'

import Editor from '@monaco-editor/react'

// Custom Hooks
import useChange from './Hooks/useChange'

// Components
import Menu from './Components/Menu/Menu.jsx'
import Result from './Components/Result/Result.jsx'

function App () {
  // Get data from LocalStorage
  let htmlStored = ''
  let cssStored = ''
  let jsStored = ''

  if (localStorage.getItem('data')) {
    const data = JSON.parse(localStorage.getItem('data'))
    htmlStored = data.html
    cssStored = data.css
    jsStored = data.js
  } // If there is no data in LocalStorage, the value is empty

  const [html, setHtml] = useState(htmlStored)
  const [css, setCss] = useState(cssStored)
  const [js, setJS] = useState(jsStored)

  const { handleHTML, handleCSS, handleJS } = useChange(setHtml, setCss, setJS)

  const [distribution, setDistribution] = useState('distribution-1')

  // Change distribution
  const handleDistribution = (e) => {
    setDistribution(e.target.value)
  }

  // Save data in LocalStorage
  useEffect(() => {
    const data = { html, css, js }
    localStorage.setItem('data', JSON.stringify(data))
  }, [html, css, js])

  return (
    <div className='App'>
      <Menu handleDistribution={handleDistribution}/>
      <div className={`container ${distribution}`} >
        <div className='box html'>
          <Editor
            defaultLanguage="html"
            onChange={handleHTML}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='html'
            value={html}
          />
        </div>
        <div className='box css'>
          <Editor
            defaultLanguage="css"
            onChange={handleCSS}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='css'
            value={css}
          />
        </div>
        <div className='box js'>
          <Editor
            defaultLanguage="javascript"
            onChange={handleJS}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='js'
            value={js}
          />
        </div>
        <div className='box result'>
          <Result html={html} css={css} js={js} />
        </div>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'

import Editor from '@monaco-editor/react'

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
          <Editor
            height='100%'
            defaultLanguage="html"
            onChange={handleHTML}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='html'
          />
        </div>
        <div className='box css'>
          <Editor
            height='100%'
            defaultLanguage="css"
            onChange={handleCSS}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='css'
          />
        </div>
        <div className='box js'>
          <Editor
            height='100%'
            width='100%'
            defaultLanguage="javascript"
            onChange={handleJS}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='js'
          />
        </div>
        <div className='box show-result'>
          <Result html={html} css={css} js={js} />
        </div>
      </div>
    </div>
  )
}

export default App

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

  const [distribution, setDistribution] = useState('distribution-1')

  const handleDistribution = (e) => {
    setDistribution(e.target.value)
  }

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
          />
        </div>
        <div className='box css'>
          <Editor
            defaultLanguage="css"
            onChange={handleCSS}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='css'
          />
        </div>
        <div className='box js'>
          <Editor
            defaultLanguage="javascript"
            onChange={handleJS}
            theme='vs-dark'
            options={{ fontSize: 20, minimap: { enabled: false } } }
            id='js'
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

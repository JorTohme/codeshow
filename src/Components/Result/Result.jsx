import React from 'react'
import './Result.css'

function Result ({ html, css, js }) {
  const htmlCode = html
  const cssCode = css
  const jsCode = js

  const preStyles = `
    html {
      box-sizing: border-box;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
    
    body {
      padding: 0;
      margin: 0;
      max-width: 100%;
      max-height: 100%;
      overflow: hidden;
    }
  `
  return (
    <div className='Result'>
      <iframe
        srcDoc={
        '<head><style>' +
        preStyles + cssCode +
        '</style>' +
        '<script>' + jsCode +
        '</script></head>' +
        '<body>' + htmlCode + '</body>'
        }
        title='result'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
      />
    </div>
  )
}

export default Result

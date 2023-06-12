import React from 'react'
import PropTypes from 'prop-types'
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
        '</head>' +
        '<body>' + htmlCode +
        '<script>' + jsCode + '</script>' +
        '</body>'
        }
        title='result'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
      />
    </div>
  )
}

Result.propTypes = {
  html: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  js: PropTypes.string.isRequired
}
export default Result

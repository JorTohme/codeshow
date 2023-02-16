import React from 'react'
import propTypes from 'prop-types'
import './Menu.css'

function Menu ({ handleDistribution }) {
  return (
    <div className='menu'>
      <div>
        <img src='/logo.svg' alt='' width={60}/>
        <h1>codeshow</h1>
      </div>

      <div className='distribution-container'>
        <p>Distribution</p>
        <div className='distribution-selectors'>
          <div className='distribution-selector'>
            <label htmlFor='distribution-1'><img src='/dist-1.svg' alt='' width={30} /></label>
            <input type='radio' name='distribution' id='distribution-1' value='distribution-1' onChange={handleDistribution} defaultChecked />
          </div>
          <div className='distribution-selector'>
            <label htmlFor='distribution-2'><img src='/dist-2.svg' alt='' width={30} /></label>
            <input type='radio' name='distribution' id='distribution-2' value='distribution-2' onChange={handleDistribution} />
          </div>
          <div className='distribution-selector'>
            <label htmlFor='distribution-3'><img src='/dist-3.svg' alt='' width={30} /></label>
            <input type='radio' name='distribution' id='distribution-3' value='distribution-3' onChange={handleDistribution} />
          </div>
          <div className='distribution-selector'>
            <label htmlFor='distribution-4'><img src='/dist-4.svg' alt='' width={30} /></label>
            <input type='radio' name='distribution' id='distribution-4' value='distribution-4' onChange={handleDistribution} />
          </div>
        </div>
      </div>
    </div>
  )
}

Menu.propTypes = {
  handleDistribution: propTypes.func.isRequired
}

export default Menu

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faGithub  } from '@fortawesome/fontawesome-free-brands'

export default () => (
  <footer>
    <a 
      href='http://marksreactportfolio.herokuapp.com/' 
      title='Medium Article'
      className={'small-button medium'}
    >
      <FontAwesomeIcon icon={faReact} size='3x' color='#fff' />
    </a>
    <a 
      href='https://github.com/vizionRekognition/vizionRekognition' 
      title='Github repo'
      className={'small-button github'}
    >
      <FontAwesomeIcon icon={faGithub} size='3x' color='#fff' />
    </a>
  </footer>
)
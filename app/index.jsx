import styles   from 'styles/styles.scss'
import ReactDOM from 'react-dom'
import React    from 'react'
import App      from './app'

/*
  Initialize View
*/ 

ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.getElementById('container')
)
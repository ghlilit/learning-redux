import React from 'react'
import App from './App'
import {Provider} from 'react-redux'
import {Route, BrowserRouter} from 'react-router-dom'

 const Root = ({store}) => {
  return (
    <Provider store = {store} >
        <BrowserRouter> 
            <Route path = '/' component = {App} />
        </BrowserRouter>
    </Provider>
  )
}

export default Root;
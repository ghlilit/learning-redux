import React from 'react'
import store from '../store'

const FilterLink = ({filter, children, visibilityFilter}) => {
  return (
    <>
    {visibilityFilter === filter
    ? <span> {children} </span> 
    :   <a
        href = '#'
        onClick = {e => {
            e.preventDefault()
            store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            })
        }}>
        {children}
        </a>}
    </>
  )
}

export default FilterLink
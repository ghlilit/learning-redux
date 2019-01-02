import React from 'react'

export default function ({message, onRetry}) {
  return (
    <div>
      <p>{message}</p>
      <button onClick = {onRetry}>Retry</button>
    </div>
  )
}

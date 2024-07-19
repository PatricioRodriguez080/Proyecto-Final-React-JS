import React, { useState } from 'react'

export const useCount = (inicial, min, max) => {
  if (inicial < min || inicial > max) inicial = min

  const [count, setCount] = useState(inicial)

  const incrementar = () => {
    if(count < max) setCount(prev => prev + 1)
  }

  const decrementar = () => {
    if(count > min) setCount(prev => prev - 1)
  }

  return { count, incrementar, decrementar }
}

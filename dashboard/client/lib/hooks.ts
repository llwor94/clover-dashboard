import { MouseEvent, useState } from 'react'

export const useHover = () => {
  const [hoverState, setState] = useState(false)

  const toggleState = (val: boolean) => (_: MouseEvent<HTMLDivElement>) => setState(val)

  return {
    hoverState,
    toggleState
  }
}

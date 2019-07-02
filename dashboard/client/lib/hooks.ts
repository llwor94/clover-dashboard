import { MouseEvent, useState } from 'react'

export const useHover = () => {
  const [state, setState] = useState({ hovered: false })

  const toggleState = (s?: boolean) => (e: MouseEvent<HTMLDivElement>) => {
    e.persist()
    return typeof s === 'boolean'
      ? setState(() => ({ hovered: s }))
      : setState(c => ({ hovered: !c.hovered }))
  }

  return {
    hovered: state.hovered,
    toggleState
  }
}

export const useModal = () => {
  const [state, setState] = useState({ cursorX: 0, cursorY: 0, open: false })

  const toggleModal = () => (e: MouseEvent<HTMLDivElement>) => {
    e.persist()
    setState(c => ({ cursorY: e.clientY, cursorX: e.clientX, open: !c.open }))
  }

  return {
    state,
    toggleModal
  }
}

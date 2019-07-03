import { Dispatch, MouseEvent, useState } from 'react'

type UseHover = () => { hovered: boolean; toggleHoverState: ToggleHoverState }
type ToggleHoverState = (s?: boolean) => (e: MouseEvent<HTMLDivElement>) => void

interface ModalState {
  cursorX: number
  cursorY: number
  open: boolean
}

type UseModal = () => {
  modalState: ModalState
  setModalState: Dispatch<ModalState>
  toggleModalState: ToggleModalState
}
type ToggleModalState = (e: MouseEvent<HTMLDivElement>) => void

export const useHover: UseHover = () => {
  const [{ hovered }, setState] = useState({ hovered: false })

  const toggleHoverState: ToggleHoverState = s => e => {
    e.persist()
    typeof s === 'boolean'
      ? setState(() => ({ hovered: s }))
      : setState(c => ({ hovered: !c.hovered }))
  }

  return {
    hovered,
    toggleHoverState
  }
}

export const useModal: UseModal = () => {
  const [modalState, setModalState] = useState({ cursorX: 0, cursorY: 0, open: false })

  const toggleModalState: ToggleModalState = e => {
    e.persist()
    setModalState(c => ({ cursorX: e.clientX, cursorY: e.clientY, open: !c.open }))
  }

  return {
    modalState,
    setModalState,
    toggleModalState
  }
}

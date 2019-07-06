import { Dispatch, MouseEvent, useState } from 'react'

type UseToggle = (s?: boolean) => { state: boolean; toggleState: ToggleState }
type ToggleState = (s?: boolean) => (e: MouseEvent<HTMLDivElement>) => void

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

export const useToggle: UseToggle = s => {
  const [state, setState] = useState(typeof s === 'boolean' ? s : false)

  const toggleState: ToggleState = s => e => {
    e.persist()
    const ret = typeof s === 'boolean' ? s : (c: any) => c
    setState(ret)
  }

  return {
    state,
    toggleState
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

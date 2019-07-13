import { UIAction, UIState } from '../../typings'

export const COLLAPSE_SUBMENU = 'COLLAPSE_SUBMENU'

export const initialUIState: UIState = {
  submenu: true
}

export const uiReducer = (state = initialUIState, action: UIAction) => {
  switch (action.type) {
    case COLLAPSE_SUBMENU:
      return { ...state, submenu: !state.submenu }
    default:
      return state
  }

  return state
}

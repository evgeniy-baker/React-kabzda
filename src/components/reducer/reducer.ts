export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
// const TOGGLE_SELECT = "TOGGLE-SELECT"

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED :
            const stateCopy = {...state, collapsed: !state.collapsed}
            return stateCopy
        // case TOGGLE_SELECT :
        //     return !state
        default:
            return state
    }
}
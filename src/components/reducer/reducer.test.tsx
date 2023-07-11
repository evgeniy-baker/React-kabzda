import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //exception
    expect(newState.collapsed).toBe(false)
})
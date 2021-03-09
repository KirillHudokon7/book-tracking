import {
  SWITCH_MODE, IModeState, SwitchModeActionTypes
} from '../actionTypes/mode';

export const initialState: IModeState = {
  value: 'light',
};

export const modeReducer = (state = initialState, action: SwitchModeActionTypes): IModeState => {
  switch(action.type) {
    case SWITCH_MODE:
      const { mode } = action.payload;

      return {
        value: mode,
      };
    default:
      return state;
  }
}

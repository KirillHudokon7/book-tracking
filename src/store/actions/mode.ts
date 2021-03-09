import { SWITCH_MODE, IModeData } from '../actionTypes/mode';

export const switchMode = ({ mode }: IModeData) => (dispatch) => {
    dispatch({ type: SWITCH_MODE, payload: { mode } });
};

export interface IModeData {
  mode: string;
}

export interface IModeState {
  value: string;
}

export const SWITCH_MODE = 'SWITCH_MODE';

interface SwitchModeAction {
  type: typeof SWITCH_MODE;
  payload: IModeData;
}

export type SwitchModeActionTypes = SwitchModeAction;

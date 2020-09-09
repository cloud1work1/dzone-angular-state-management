import { Store } from '@ngrx/store';
import { ActionEx, CustomerActionTypes } from './customer-action';

export const initialStates = [];

export function CustomerReducer(states= initialStates, action: ActionEx) {
    switch (action.type) {
        case CustomerActionTypes.Add:
            return [...states, action.payload];
        case CustomerActionTypes.Remove:
            return [
                ...states.slice(0, action.payload),
                ...states.slice(action.payload + 1)
            ];
        default:
            return states;
    }
}

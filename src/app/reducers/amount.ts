import { AmountChangeAction, AMOUNTCHANGE } from './../actions/amount';
import { ActionReducer, Action } from '@ngrx/store';

import * as amount from '../actions/amount';

export interface State {
    amount: number;
}

export const initialState: State = {
    amount: 1
};

export function reducer(state: number = 1, action: AmountChangeAction) {
    switch (action.type) {
        case amount.AMOUNTCHANGE:
            return action.payload;
        default:
            return state;
    }
}

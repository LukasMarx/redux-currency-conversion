import { Currency } from './../models/currency';
import {
    CurrenciesUpdatedAction,
    CURRENCIESUPDATED
} from './../actions/currency';

import * as currency from '../actions/currency';

export function reducer(state = [], action: CurrenciesUpdatedAction) {
    switch (action.type) {
        case currency.CURRENCIESUPDATED:
            return action.payload;
        default:
            return state;
    }
}

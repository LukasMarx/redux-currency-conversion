import { CurrenciesUpdateAction } from './actions/currency';
import { Currency } from './models/currency';
import { AmountChangeAction } from './actions/amount';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
    public amount$: Observable<number>;
    public currencyRates$: Observable<Currency[]>;

    constructor(public store: Store<fromRoot.State>) {
        this.amount$ = store.select(fromRoot.getAmountState);
        this.currencyRates$ = store.select(fromRoot.getCurrnecyRates);
    }

    // Dispatch the Action
    ngOnInit() {
        this.store.dispatch(new CurrenciesUpdateAction());
    }

    onAmountChange(amount: string) {
        const number = parseFloat(amount);
        if (!isNaN(number)) this.store.dispatch(new AmountChangeAction(number));
    }
}

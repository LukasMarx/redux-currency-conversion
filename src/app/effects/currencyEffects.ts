import { CurrenciesUpdatedAction } from "./../actions/currency";
import { CurrencyService } from "./../services/currency.service";
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as currency from "../actions/currency";
import { switchMap, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class CurrencyEffects {
  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(currency.CURRENCIESUPDATE),
    switchMap(() =>
      this.currencyService
        .getRates()
        .pipe(map(data => new CurrenciesUpdatedAction(data)))
    )
  );

  constructor(
    private currencyService: CurrencyService,
    private actions$: Actions
  ) {}
}

import { CurrencyService } from './services/currency.service';
import { CurrencyEffects } from './effects/currencyEffects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
            maxAge: 5
        }),
        EffectsModule.forRoot([CurrencyEffects])
    ],
    providers: [CurrencyService],
    bootstrap: [AppComponent]
})
export class AppModule {}

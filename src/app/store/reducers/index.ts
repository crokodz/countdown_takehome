
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store'
import * as fromProducts from './product.reducer'
import { localStorageSync } from 'ngrx-store-localstorage'

export interface State {
    productsState: fromProducts.State
}

export const reducers: ActionReducerMap<State> = {
    productsState: fromProducts.productReducer
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer]
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: [
            'productsState'
        ],
        rehydrate: true,
        removeOnUndefined: false,
        storage: sessionStorage
    })(reducer)
}


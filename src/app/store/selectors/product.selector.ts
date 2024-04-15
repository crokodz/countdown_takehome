import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from '../reducers/product.reducer'
import { Product } from '../../models/product';

// Get complete state of the favorites products in application
export const getAppProductState = createFeatureSelector<fromProducts.State>('productsState');

// get All favorites products
export const selectProducts = createSelector(
    getAppProductState,
    fromProducts.getProductList
);

export const filterProducts = createSelector(
    getAppProductState,
    fromProducts.getProductList
);

export const isProductsLoaded = createSelector(
    getAppProductState,
    fromProducts.isProductsLoaded
)

export const selectProductsError = createSelector(
    getAppProductState,
    fromProducts.getProductsError
);

export const selectProductByName = (keyword: string) => createSelector(
    selectProducts, (products: Product[]) => products.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
);

export const sortProductByName = () => createSelector(
    // should be done in service level
    selectProducts, (products: Product[]) => products.map( a => a)
);
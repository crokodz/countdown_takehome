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

// get One favorite product by ID
// export const selectProductById = createSelector(
//     selectProducts,
//     (products: Product[], props: { id: number }) =>
//         products.find(product => product.id === props.id)
// );

export const selectProductById = (index: number) => createSelector(
    selectProducts, (products: Product[]) => (products.find(product => product.id === index))
);
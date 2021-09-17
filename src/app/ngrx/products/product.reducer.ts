import {Product} from "../../model/product.model";
import {ProductActions, ProductActionsType} from "./product.actions";
import {Action} from "@ngrx/store";

/*La Structure du state pour la gestion des produits*/
export enum ProductStateEnum {
  Loading = "Loading",
  LOADED = "LOADED",
  ERROR = "ERROR",
  INITIAL = "INITIAL",
}

export interface ProductState {
  products: Product[],
  errorMessage: string,
  dataState: ProductStateEnum
}

/*Etat Initial Du State*/
const initState: ProductState = {products: [], dataState: ProductStateEnum.INITIAL, errorMessage: ""}

/* Reducer function Pure */
export function productReducer(state = initState, action: Action): ProductState {
  switch (action.type) {
    case ProductActionsType.GetAllProducts:
      return {...state, dataState: ProductStateEnum.Loading}
    case ProductActionsType.GetAllProductsSuccess:
      return {...state, dataState: ProductStateEnum.LOADED, products: (<ProductActions>action).payload}
    case ProductActionsType.GetAllProductsError:
      return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload}
    case ProductActionsType.GetSelectedProducts:
      return {...state, dataState: ProductStateEnum.Loading}
    case ProductActionsType.GetSelectedProductsSuccess:
      return {...state, dataState: ProductStateEnum.LOADED, products: (<ProductActions>action).payload}
    case ProductActionsType.GetSelectedProductsError:
      return {...state, dataState: ProductStateEnum.ERROR, errorMessage: (<ProductActions>action).payload}
    default:
      return {...state};
  }
}

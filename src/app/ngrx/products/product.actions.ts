import {Action} from "@ngrx/store";
import {Product} from "../../model/product.model";

/* Action Enum*/
export enum ProductActionsType {
  /*Get All Products*/
  GetAllProductsSuccess = "[Products] Get All products Success",
  GetAllProducts = "[Products] Get All Product ",
  GetAllProductsError = "[Products] Get All products Error",
  /*Get Selected Product */
  GetSelectedProductsSuccess = "[Products] Get Selected products Success",
  GetSelectedProducts = "[Products] Get Selected Product ",
  GetSelectedProductsError = "[Products] Get Selected products Error",
}

/*Define All Action (Get All Products) (type,Payload)*/
export class GetAllProductsAction implements Action {
  type: ProductActionsType = ProductActionsType.GetAllProducts;

  constructor(public payload: any) {
  }
}

export class GetAllProductsSuccessAction implements Action {
  type: ProductActionsType = ProductActionsType.GetAllProductsSuccess;

  constructor(public payload: Product[]) {
  }
}

export class GetAllProductsErrorAction implements Action {
  type: ProductActionsType = ProductActionsType.GetAllProductsError;

  constructor(public payload: string) {
  }
}


/*Define All Action (Get Selected Products) (type,Payload)*/
export class GetSelectedProductsAction implements Action {
  type: ProductActionsType = ProductActionsType.GetSelectedProducts;

  constructor(public payload: any) {
  }
}

export class GetSelectedProductsSuccessAction implements Action {
  type: ProductActionsType = ProductActionsType.GetSelectedProductsSuccess;

  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductsErrorAction implements Action {
  type: ProductActionsType = ProductActionsType.GetSelectedProductsError;

  constructor(public payload: string) {
  }
}

export type ProductActions =
  GetAllProductsAction
  | GetAllProductsSuccessAction
  | GetAllProductsErrorAction
  | GetSelectedProductsAction
  | GetSelectedProductsSuccessAction
  | GetSelectedProductsErrorAction;

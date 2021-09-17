import {Injectable} from "@angular/core";
import {ProductService} from "../../services/product.service";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import {
  GetAllProductsErrorAction,
  GetAllProductsSuccessAction, GetSelectedProductsErrorAction, GetSelectedProductsSuccessAction,
  ProductActionsType
} from "./product.actions";
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private effectActions: Actions) {
  }

  getAllProductSuccessEffects: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionsType.GetAllProducts),
      mergeMap((action) => {
        return this.productService.getProducts().pipe(
          map((products) => new GetAllProductsSuccessAction(products)),
          catchError((error) => of(new GetAllProductsErrorAction(error.message))
          )
        )
      })
    )
  );

  getSelectedProductSuccessEffects: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductActionsType.GetSelectedProducts),
      mergeMap((action) => {
        return this.productService.getSelectedProducts().pipe(
          map((products) => new GetSelectedProductsSuccessAction(products)),
          catchError((error) => of(new GetSelectedProductsErrorAction(error.message))
          )
        )
      })
    )
  );
}

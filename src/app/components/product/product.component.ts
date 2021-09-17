import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductState, ProductStateEnum} from "../../ngrx/products/product.reducer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productState$: Observable<ProductState> | null = null;
  readonly dataStateEnum = ProductStateEnum;

  constructor(
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.productState$ = this.store.pipe(
      map((state) => {
        return state.productsState
      })
    )
  }

}

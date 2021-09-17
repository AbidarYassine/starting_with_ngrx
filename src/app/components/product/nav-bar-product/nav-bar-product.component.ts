import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ProductState} from "../../../ngrx/products/product.reducer";
import {GetAllProductsAction, GetSelectedProductsAction} from "../../../ngrx/products/product.actions";

@Component({
  selector: 'app-nav-bar-product',
  templateUrl: './nav-bar-product.component.html',
  styleUrls: ['./nav-bar-product.component.css']
})
export class NavBarProductComponent implements OnInit {

  constructor(
    private store: Store<ProductState>
  ) {
  }

  ngOnInit(): void {
  }


  public getAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
  }

  getSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }
}

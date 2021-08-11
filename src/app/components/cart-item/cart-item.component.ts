import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
  // constructor() {
  //   this.item = {
  //     id: 1,
  //     name: 'Sea Food',
  //     price: 12000,
  //     image: 'assets/images/foods/seafood-dishes.png',
  //     quantity: 1,
  //   };
  // }

  ngOnInit() {}

}

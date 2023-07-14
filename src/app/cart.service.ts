import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // 购物车
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  /** 把商品添加到购物车
   * addToCart() 方法会将产品附加到 items 数组中。
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /** 返回购物车商品
   * getItems() 方法会收集用户加到购物车中的商品，并返回每个商品及其数量。
   */
  getItems() {
    return this.items;
  }

  /** 清除购物车商品
   * clearCart() 方法返回一个空数组。
   */
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductServiceService) {
    this.getAllProduct();
  }

  ngOnInit() {
  }

  getAllProduct() {
    this.products = this.productService.getProduct();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    alert('delete successfully');
  }
}

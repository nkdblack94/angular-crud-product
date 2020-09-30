import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  subscription: Subscription; //xu ly routing
  id: number; //don tham so tu routing
  product: IProduct = {//don du lieu
    id: 0,
    name: '',
    description: ''
  };

  constructor(private productService: ProductServiceService,
              private router: Router,
              private activeRoute: ActivatedRoute) {
    this.subscription = this
      .activeRoute
      .paramMap
      .subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get('id');
        this.product = this.findProductById(this.id);
      });
  }

  ngOnInit(): void {
  }

  findProductById(id: number): IProduct {
    return this.productService.getProductById(id);
  }

  updateProduct(id: number, product: IProduct) {
    this.productService.editProduct(id, product);
  }
}

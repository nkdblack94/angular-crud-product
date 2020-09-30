import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private productService: ProductServiceService,
              private router: Router) {
  }

  ngOnInit() {
  }

  createProduct() {
     this.productService.createProduct(this.product);
     this.router.navigate(['/']);
  }
}

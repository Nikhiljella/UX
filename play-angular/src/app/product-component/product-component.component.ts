import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'prod-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  pageTitle: string = 'Product List View';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter = '';
  filteredProducts: IProduct[] = [];
  get listFilter(): string
  {
    return this._listFilter;
  }
  set listFilter(value: string)
  {
    this._listFilter = value;
    console.log('in setter:',value)
    this.filteredProducts = this.getPoductsList(this._listFilter);
  }
  products: IProduct[] = [
                      {
                        "productId": 1,
                        "productName": "Leaf Rake",
                        "productCode": "GDN-0011",
                        "releaseDate": "March 19, 2021",
                        "description": "Leaf rake with 48-inch wooden handle.",
                        "price": 19.95,
                        "starRating": 3.2,
                        "imageUrl": "assets/images/leaf_rake.png"
                      },
                      {
                        "productId": 2,
                        "productName": "Garden Cart",
                        "productCode": "GDN-0023",
                        "releaseDate": "March 18, 2021",
                        "description": "15 gallon capacity rolling garden cart",
                        "price": 32.99,
                        "starRating": 4.2,
                        "imageUrl": "assets/images/garden_cart.png"
                      }
                      ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getPoductsList(value: string): IProduct[]
  {
    return this.products.filter((product: IProduct) => product.productName.includes(value));
  }
}

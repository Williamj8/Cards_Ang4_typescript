import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./Product-list.Component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Credit Cards';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    // Filtering a list
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
        // Added condtions to display nothing when empty input and 
        //  Convert to lowercase if user types in Uppercase so it can match data.
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    // Set default value for filter
    constructor(private _productService: ProductService) {
     //   this.listFilter = 'Gold Card' ;

    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'This card customer ' + message;
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProduct()
        .subscribe(products => {this.products = products,
            this.filteredProducts = this.products;
        },
           error => this.errorMessage = <any>error );
         

    }
}
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Gold Card",
            "productCode": "GDN-0011",
            "releaseDate": "July 19, 2021",
            "description": "Gold card with Membership",
            "price": 1000.99,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/248765/CreditCard.png"
        },
        {
            "productId": 2,
            "productName": "Blue Card",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2022",
            "description": "Blue card with corp membership",
            "price": 2500.99,
            "starRating": 4.5,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/13200/Anonymous-smartcard.png"
        },

    ];
    // Set default value for filter
    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'Gold Card' ;

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
        console.log('In OnInit');
    }
}
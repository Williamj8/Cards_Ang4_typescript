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
            "releaseDate": "July 09, 2021",
            "description": "Gold card with Membership",
            "price": 1000.99,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/248765/CreditCard.png"
        },
        {
            "productId": 2,
            "productName": "Blue Card",
            "productCode": "GDN-0023",
            "releaseDate": "March 21, 2022",
            "description": "Blue card with corp membership",
            "price": 2500.99,
            "starRating": 4.5,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/13200/Anonymous-smartcard.png"
        },
        {
            "productId": 3,
            "productName": "Black Card",
            "productCode": "GDN-0038",
            "releaseDate": "Aug 18, 2028",
            "description": "Black card with Membership",
            "price": 8000.88,
            "starRating": 5.0,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/241542/bw-creditcard.png"
        },
        {
            "productId": 4,
            "productName": "Platinum Card",
            "productCode": "GDN-0078",
            "releaseDate": "Sep 19, 2025",
            "description": "Platinum card with Membership",
            "price": 5000.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/268431/bluecreditcard.png"
        },
        {
            "productId": 5,
            "productName": "Brown Card",
            "productCode": "GDN-0051",
            "releaseDate": "June 05, 2020",
            "description": "Brown card with Membership",
            "price": 1000.99,
            "starRating": 2.6,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/217648/credit_card_path.png"
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
import {IAmazonProductClient,createClient,ICredentials} from 'amazon-product-api'
import { Injectable } from '@angular/core';


interface SearchQuery{
    director: String;
    actor: String;    
    searchIndex: String
    audienceRating: String;
    responseGroup: String;
}

@Injectable()
export class ProductApi {
    credentials: ICredentials;
    client : IAmazonProductClient;
    searchQuery: SearchQuery;
    constructor(amazonClient: IAmazonProductClient){        
        this.client = createClient(this.credentials);
        this.searchQuery = {
            director: 'Quentin Tarantino',
            actor: 'Samuel L. Jackson',
            searchIndex: 'DVD',
            audienceRating: 'R',
            responseGroup: 'ItemAttributes,Offers,Images'
        };
    }

}

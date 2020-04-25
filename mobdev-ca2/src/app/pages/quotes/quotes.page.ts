// main logic for 'quotes'
// Code from 23/4 class

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
    quotes: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data: ', data); // line added for debugging
        });
    }
    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }
}

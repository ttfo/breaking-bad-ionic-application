// main logic for 'quotes'
// Code from 23/4 class

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakingBadService } from '../../services/breakingbad.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
    quotes: Observable<any>;
    constructor(private router: Router, private api: BreakingBadService) { }

    ngOnInit() {
        this.loadBBQuotes();
    }

    loadBBQuotes() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data: ', data); // line added for debugging
        });
    }

    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }

    onSearchChange(e) {
        let authorNameQuery = e.detail.value;

        if (authorNameQuery == '') {
            this.loadBBQuotes();
            return;
        }

        this.quotes.subscribe(data => {
            this.quotes = this.api.findBBQuote(authorNameQuery);
        }, err => {
            this.loadBBQuotes();
            return;
        });

    }

}

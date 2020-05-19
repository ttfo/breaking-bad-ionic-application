// main logic for 'character details'
// Code from 23/4 class

import { BreakingBadService } from './../../services/breakingbad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
  quote: any;
  quoteId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: BreakingBadService) {}
  ngOnInit() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getQuote(this.quoteId).subscribe(res => {
      this.quote = res[0];
    })
    }
}

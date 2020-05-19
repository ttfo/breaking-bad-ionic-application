import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakingBadService } from '../../services/breakingbad.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
    deaths: Observable<any>;
    constructor(private router: Router, private api: BreakingBadService) { }


    ngOnInit() {
        this.loadBBDeaths();
    }

    loadBBDeaths() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data: ', data); // line added for debugging
        });
    }

    openDetails(death) {
        let deathId = death.death_id;
        this.router.navigateByUrl(`/tabs/deaths/${deathId}`);
    }

    onSearchChange(e) {
        let killerNameQuery = e.detail.value;

        if (killerNameQuery == '') {
            this.loadBBDeaths();
            return;
        }

        this.deaths.subscribe(data => {
            this.deaths = this.api.findBBQuote(killerNameQuery);
        }, err => {
            this.loadBBDeaths();
            return;
        });

    }    

    /**killers: Observable<any>;
    deathCount: any;
    
    ngOnInit() {
        this.loadInitKilling();
    }

    loadInitKilling() {
        this.deathCount = this.api.getDeathCount('Walter+White');
        this.deathCount.subscribe(data => {
            console.log('my data: ', data); // line added for debugging
            console.log('killer: ', data[0].name);
        });        
    }

    onSearchChange(e) {
        let killerNameQuery = e.detail.value;

        if (killerNameQuery == '') {
            return;
        }

        this.deathCount.subscribe(data => {
            this.deathCount = this.api.getDeathCount(killerNameQuery);
            console.log('deathCount: ', this.deathCount);
            console.log('my data: ', data); // line added for debugging
        }, err => {
            this.loadInitKilling();
            return;
        });

    }**/

}

// main logic for 'characters'
// Code from 23/4 class

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakingBadService } from '../../services/breakingbad.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    
    characters: Observable<any>;
    offset = 0;

    constructor(private router: Router, private api: BreakingBadService) { }
    
    ngOnInit() {
        this.loadBBCharacters();
    }

    loadBBCharacters(loadMore = false, event?) {

        if (loadMore) {
            this.offset += 25;
        }

        this.characters = this.api.getCharacters(this.offset);
        this.characters.subscribe(data => {
            console.log('my data: ', data); // line added for debugging

            if (event) {
                event.target.complete();
            }

        });
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

    onSearchChange(e) {
        let value = e.detail.value;
        
        if (value == '') {
            this.offset = 0;
            this.loadBBCharacters();
            return;
        }

        // @TODO
        this.api.findBBCharacter(value).subscribe(res => {
            this.characters = this.api.getCharacters();
        }, err => {
            this.characters = null;
        });
        
    }

}

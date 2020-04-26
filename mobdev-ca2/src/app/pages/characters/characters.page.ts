// main logic for 'characters'
// Starter code from 23/4 class

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BreakingBadService } from '../../services/breakingbad.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    constructor(private router: Router, private api: BreakingBadService) { }

    characters: Observable<any>;
    offset = 0;
    @ViewChild(IonInfiniteScroll, { static: false }) infinite: IonInfiniteScroll; // REF https://stackoverflow.com/questions/56473899/error-ts2554-expected-2-arguments-but-got-1-with-viewchild

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

            if (this.offset == 125) {
                this.infinite.disabled = true;
            }

        });
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

    onSearchChange(e) {
        let characterNameQuery = e.detail.value;
        //let characterNameQuery = value.name;

        if (characterNameQuery == '') {
            this.offset = 0;
            this.loadBBCharacters();
            return;
        }

        // @TODO
        // this.api.findBBCharacter(characterNameQuery).subscribe(res => {
        //     console.log('res: ', res);
        //     let myCharacter = res[0];
        //     //res = res.toString;
        //     console.log('myCharacter: ', myCharacter);
        //     let charName = myCharacter.name;
        //     console.log('charName: ', charName);
        //     //const selectName = res.name();
        //     //return charName;
        //     //this.characters = res[10];
        //     this.characters = res[];
        //     console.log('this.characters: ', this.characters);
        // }
        this.characters.subscribe(data => {
            this.characters = this.api.findBBCharacter(characterNameQuery);
        }, err => {
            this.loadBBCharacters();
            return;
        });

    }

}

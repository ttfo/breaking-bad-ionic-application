// main logic for 'characters'
// Code from 23/4 class

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    characters: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my data: ', data); // line added for debugging
        });
    }
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
}

// Initial code from 14/4 class
// 25/4 - Added getters for characters, quotes and deaths 
// API doc @ https://breakingbadapi.com/Documentation

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BreakingBadService {

    baseUrl = 'https://www.breakingbadapi.com/api'; // creating a baseUrl REF: https://www.youtube.com/watch?v=Nc1RqvDY-B8&feature=youtu.be

    constructor(private http: HttpClient) { }

    // GETTERS WITH RELATIVE PATH (to reduce API calls to breakingbadapi.com)
    // as seen in class on 23/4
    // E.G. ABSOLUTE PATH https://8100-e5c9240f-5df6-468c-991f-f95232936183.ws-eu01.gitpod.io/assets/characters.json
    // RELATIVE PATH ../assets/characters.json

    getEpisodes() {
        return this.http.get(`../assets/episodes.json`)
    }
    getEpisode(id) {
        return this.http.get(`${this.baseUrl}/episodes/${id}`)
    }
    getCharacters(offset = 0) {
        //return this.http.get(`../assets/characters.json?offset=${offset}&limit=25`)
        return this.http.get(`../assets/characters.json?offset=${offset}&limit=25`)
        //   .pipe(
        //       map(result => {
        //           return result['results'];
        //       })
        //   )
    }
    getCharacter(id) {
        let character = this.http.get(`${this.baseUrl}/characters/${id}`);
        return character;
    }
    getCharacterByName(charName){
        return this.http.get(`${this.baseUrl}/characters?name=${charName}`)
    }
    getQuotes() {
        return this.http.get(`../assets/quotes.json`)
    }
    getQuote(id) {
        return this.http.get(`${this.baseUrl}/quotes/${id}`)
    }
    getQuoteByAuthor(charName){
        return this.http.get(`${this.baseUrl}/quote?author=${charName}`)
    }    
    //   getDeaths() {
    //       return this.http.get(`../assets/deaths.json`)
    //   }
    getDeathCount(killer) {
        return this.http.get(`${this.baseUrl}/death-count?name=${killer}`)
    }

    // OTHER METHODS

    // @TODO
    //   findBBCharacter(search) {
    //       return this.http.get(`${this.baseUrl}/characters/${search}`).pipe(
    //           map(character => {
    //               character['charIndex'] = character['id'];
    //               return character;
    //           })
    //       )
    //   }

    findBBCharacter(charNameQuery) {
        console.log('search: ', charNameQuery);
        return this.getCharacterByName(charNameQuery);
    }

    findBBQuote(charNameQuery) {
        console.log('search: ', charNameQuery);
        return this.getQuoteByAuthor(charNameQuery);
    }

    // GETTERS
    // With breakingbadapi endpoints 
    /*getEpisodes() {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
    }
    getEpisode(id) {
        return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
    }
    getCharacters() {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/`)
    }
    getCharacter(id) {
        return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
    }    
    getQuotes() {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }
    getQuote(id) {
        return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
    }  
    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
    }
    getDeath(name) {
        return this.http.get(`https://breakingbadapi.com/api/deaths/${name}`)
    }*/

}

// Initial code from 14/4 class
// 25/4 - Added getters for characters, quotes and deaths 
// API doc @ https://breakingbadapi.com/Documentation

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // GETTERS
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

  // GETTERS WITH LOCAL URL (to reduce API calls to breakingbadapi.com)
  // as seen in class on 23/4
  // E.G. https://8100-e5c9240f-5df6-468c-991f-f95232936183.ws-eu01.gitpod.io/assets/characters.json

  getEpisodes() {
      return this.http.get(`https://8100-e5c9240f-5df6-468c-991f-f95232936183.ws-eu01.gitpod.io/assets/episodes.json`)
  }
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
  }
  getCharacters() {
      return this.http.get(`https://8100-e5c9240f-5df6-468c-991f-f95232936183.ws-eu01.gitpod.io/assets/characters.json`)
  }
  getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }    
  getQuotes() {
      return this.http.get(`https://8100-e5c9240f-5df6-468c-991f-f95232936183.ws-eu01.gitpod.io/assets/quotes.json`)
  }
  getQuote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
  }  
  getDeaths() {
      return this.http.get(`https://8100-e5c9240f-5df6-468c-991f-f95232936183.ws-eu01.gitpod.io/assets/deaths.json`)
  }
  getDeath(name) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${name}`)
  }

  // OTHER METHODS

  // Code below for findQuote from 23/4 class recording
  /*findQuote(search) {
      return this.http.get(`https://breakingbadapi.com/api/quote?author=${search}`).pipe(
          map( quote => {
              return quote;
          })
      )
  }*/

}

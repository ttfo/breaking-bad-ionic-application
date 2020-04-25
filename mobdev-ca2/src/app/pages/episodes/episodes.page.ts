// main logic for 'episodes'
// Code from 14/4 class

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
    selector: 'app-episodes',
    templateUrl: './episodes.page.html',
    styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
    episodes: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.episodes = this.api.getEpisodes();
        this.episodes.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    openDetails(episode) {
        let episodeId = episode.episode_id;
        this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
    }
}

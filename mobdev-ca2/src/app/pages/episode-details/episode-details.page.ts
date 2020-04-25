// main logic for 'episodes details'
// Code from 14/4 class

import { BreakingBadService } from './../../services/breakingbad.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
  episode: any;
  episodeId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: BreakingBadService) {}
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
    })
    }
}

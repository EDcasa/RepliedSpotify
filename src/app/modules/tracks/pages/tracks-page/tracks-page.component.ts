import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservers$:Array<Subscription> = [];
  constructor(
    private _trackService:TrackService
  ) { }

  ngOnInit(): void {
    const observer$ = this._trackService.dataTracksTrending$.subscribe(response =>{
      console.log(response);
      this.tracksTrending = response;
    })
    const observer2$ = this._trackService.dataTracksRandom$.subscribe(response =>{
      console.log(response);
      this.tracksRandom = [...this.tracksRandom, ...response];
    })
    this.listObservers$.push(observer$);
    this.listObservers$.push(observer2$);
  }


  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
  }
}

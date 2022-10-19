import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {

  mockCover:TrackModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    _id: ''
  }

  listObservers$:Array<Subscription> = []
  constructor(private _multimediaService:MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe((response:TrackModel)=>{

    })

    this.listObservers$.push(observer1$);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.listObservers$.forEach(u=>u.unsubscribe())
  }

}

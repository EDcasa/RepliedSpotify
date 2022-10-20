import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  mockCover:TrackModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    _id: ''
  }

  listObservers$:Array<Subscription> = []
  constructor(
    private _multimediaService:MultimediaService
  ) { }

  //primero en ejecutarse
  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe((response:TrackModel)=>{
      console.log("Recibiendo cancion...", response);
      
    })

    this.listObservers$.push(observer1$);
  }

  //antes de destruirse el componente
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.listObservers$.forEach(u=>u.unsubscribe())
  }

}

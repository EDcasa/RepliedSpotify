import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  //$ for observables
  //of observabe from array
  dataTracksTrending$:Observable<TrackModel[]> = of([]);
  dataTracksRandom$:Observable<any> = of([]);

  constructor() { 
    const {data} = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer)=>{
      const trackExample:TrackModel ={
        name: 'C Santa',
        album: 'C Santa ',
        cover: 'Test',
        url: 'https://',
        _id: '9'
      }
      setTimeout(()=>{
        observer.next([trackExample])
      }, 3500)
      
    })
  }


}

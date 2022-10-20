import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  //emite eventos
  callback: EventEmitter<any> = new EventEmitter<any>()
  constructor() { 
    
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading$ = new Subject<boolean>();

  constructor() { }

  show(): void{
    console.log('show')
    this.isLoading$.next(true)
  }

  hide(): void{
    console.log('hide')
    this.isLoading$.next(false)
  }
}

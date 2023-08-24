import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-spinner',
  template: `
    <div *ngIf="isLoading" class="overlay">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLoading: boolean = false

  constructor(private readonly spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.ListentoLoading()
  }

  ListentoLoading(){
    this.spinnerService.isLoading$.pipe(delay(0)).subscribe(
        (loading) => {
          console.log(loading)
          this.isLoading=loading
        }
      )
  }

}

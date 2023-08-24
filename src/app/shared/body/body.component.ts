import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  title: string = 'My contenido desde ls logica';

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {

  @Input('prodata') proCollection;
  constructor() { }

  ngOnInit(): void {
  }

}

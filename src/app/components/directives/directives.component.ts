import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size:number = 20;
  color:string = 'blue';


  constructor() { }

  ngOnInit(): void {
  }

}

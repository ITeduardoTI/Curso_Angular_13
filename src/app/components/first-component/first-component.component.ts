import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Eduardo";
  age: number = 20;
  job: string = "Web Developer";
  hobby = ['Assistir Youtube', 'Jogar na Steam'];
  car = {
    name: "Fiat",
    year: 2019
  }

  constructor() { }

  ngOnInit(): void {
  }

}

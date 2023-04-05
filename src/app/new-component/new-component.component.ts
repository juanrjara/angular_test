import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  newPerson1: Person = {
    name: 'Juan',
    age: 30,
    id: 1
  };

  constructor() { }

  ngOnInit(): void {

    this.newPerson1.name += ' Andrés';
    
  }

}

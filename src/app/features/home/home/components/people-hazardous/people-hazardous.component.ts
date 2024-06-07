import { Component } from '@angular/core';

@Component({
  selector: 'app-people-hazardous',
  templateUrl: './people-hazardous.component.html',
  styleUrls: ['./people-hazardous.component.css']
})
export class PeopleHazardousComponent {

  users: Array<any>= [
    { name: 'Mohammad Yousef Ali', position: 'HSE Manage', time: '01:44', image: '2'},
    { name: 'Saleem Mohammad Sami', position: 'Safety Supervision', time: '01:20', image: '3'},
    { name: 'Sami Hamad Ali', position: 'Operator', time: '00:45', image: '1'},
    { name: 'Osama Omar Ibrahem', position: 'Maintenance Engineer', time: '00:35', image: '5'},
  ]
}

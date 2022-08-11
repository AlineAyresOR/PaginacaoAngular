import { Component, OnInit } from '@angular/core';
import { People } from './people';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {


  constructor(private peopleService:PeopleService) { }

  public people?: People;
  public idPeople: number =1;

  ngOnInit(): void {

    this.buscarPeopleByid();
    
  }

  public buscarPeopleByid(){
    this.peopleService.listarTodos(this.idPeople)
    .subscribe (
      resultado => {
      this.people= resultado;
      console.log(this.people);
    }, erro => {
      console.log(erro)}
     
   
    );

  }

  nextPage(){
    this.idPeople++;
    this.buscarPeopleByid();
  }

  prevPage(){
    this.idPeople--;
    this.buscarPeopleByid();
  }
}

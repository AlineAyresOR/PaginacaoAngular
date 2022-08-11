import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './people';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  [x: string]: any;

  constructor(private http: HttpClient) { }



   readonly Apiurl = 'https://swapi.dev/api/people/';
  
  
    listarTodos(idPeople:number):Observable<any>{
       return this.http.get<People>(`${this.Apiurl}`+idPeople);
    }

}






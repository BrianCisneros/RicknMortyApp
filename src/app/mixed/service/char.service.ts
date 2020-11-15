import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { char } from '../interface/char.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http: HttpClient) { }

  searchChar(query = '', page = 1){
    return this.http.get<char[]>(
      `${environment.baseAPIURL}/?name=${query}&page=${page}`
    );
  }
  getDet(id: number){
    return this.http.get<char[]>(
      `${environment.baseAPIURL}/${id}`
    );
  }
}

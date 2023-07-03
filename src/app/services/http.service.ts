import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TextResp } from '../models/TextResp';
import { AuthToken } from 'src/models/AuthToken';
import { User } from 'src/models/User';
import { Item } from 'src/models/Items';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(loginRequestModel: User) {
    return this.http.post<any>('http://localhost:3800/login', loginRequestModel);
  }

  refreshToken(access_token: AuthToken) {
    let headers = new HttpHeaders();
    return this.http.post<any>('http://localhost:3800/refresh-token', access_token, {headers: headers});
  }

  getWorks(){
    return this.http.get<TextResp>('http://localhost:3800/works');
  }

  register(user: User){
    return this.http.post<any>('http://localhost:3800/register', user);
  }

  createItem(item: Item){
    return this.http.post<any>('http://localhost:3800/createItem', item);
  }

  getItems(){
    return this.http.get<any>('http://localhost:3800/getItems');
  }

  getItemDetails(){

  }

  updateItem(){

  }

  deleteItem(itemId: Item){
    
    return this.http.post<any>('http://localhost:3800/deleteItem', itemId);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TextResp } from '../models/TextResp';
import { AuthToken } from 'src/models/AuthToken';
import { User } from 'src/models/User';
import { Item } from 'src/models/Item';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  login(loginRequestModel: User) {
    return this.http.post<any>('http://localhost:3800/login', loginRequestModel);
  }
  
  register(user: User){
    return this.http.post<any>('http://localhost:3800/register', user);
  }
  
  refreshToken(access_token: AuthToken) {
    let headers = new HttpHeaders();
    return this.http.post<any>('http://localhost:3800/refresh-token', access_token, {headers: headers});
  }

  getWorks(){
    return this.http.get<TextResp>('http://localhost:3800/works');
  }


  createItem(item: Item){
    return this.http.post<any>('http://localhost:3800/createItem', item);
  }

  getItems(){
    return this.http.get<any>('http://localhost:3800/getItems');
  }

  getItemDetails(itemId: string){
    return this.http.post<any>('http://localhost:3800/getItemDetails', itemId);
  }

  updateItem(itemId: string, updatedItem: Item){
    return this.http.post<any>('http://localhost:3800/updateItem', itemId + updatedItem);
  }

  deleteItem(itemId: string){    
    return this.http.post<any>('http://localhost:3800/deleteItem', itemId);
  }
}

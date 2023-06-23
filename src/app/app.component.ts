import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'warehouse-app';

  text:string | undefined;

  constructor(private httpService: HttpService){
    this.httpService.getWorks().subscribe(res=>{
      this.text = res.text;
      console.log(res);
    })
  }

  ngOnInit(): void {

  }
}

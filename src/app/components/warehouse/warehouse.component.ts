import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  constructor(private httpService: HttpService) { 
    this.httpService.getWorks().subscribe(res=>{
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

}

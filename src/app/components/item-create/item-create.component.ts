import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {
  newItem: Item = { name: '', quantity: 0 };

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  createItem() {
    this.httpService.createItem(this.newItem).subscribe((response) => {
      console.log('Item created successfully:', response);
      // Reset the form after successful creation
      this.newItem = { name: '', quantity: 0 };
    }, (error) => {
      console.error('Error creating item:', error);
    });
  }

}

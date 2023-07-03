import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Item } from 'model/item.js';

@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.httpService.getItems().subscribe((response) => {
      this.items = response;
    }, (error) => {
      console.error('Error retrieving items:', error);
    });
  }

  // deleteItem(itemId: string) {
  //   this.httpService.deleteItem(itemId).subscribe((response) => {
  //     console.log('Item deleted successfully:', response);
  //     // Refresh the list after successful deletion
  //     this.loadItems();
  //   }, (error) => {
  //     console.error('Error deleting item:', error);
  //   });
  // }
}
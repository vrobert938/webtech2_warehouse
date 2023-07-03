import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: 'item-list.component.html',
  styleUrls: ['item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  //items: Item[] = [];
  items: Item[] = [{name:"item1",quantity:2},{name:"item2",quantity:1},{name:"item3",quantity:12}];
  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private router: Router){ }

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

  navigateToUpdateItemPage(){
    this.router.navigate(['updateItem']);
  }

  deleteItem(itemId: string) {
    // this.httpService.deleteItem(itemId).subscribe((response) => {
    //   console.log('Item deleted successfully:', response);
    //   // Refresh the list after successful deletion
    //   this.loadItems();
    // }, (error) => {
    //   console.error('Error deleting item:', error);
    // });
  }
}
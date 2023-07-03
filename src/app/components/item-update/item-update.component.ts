import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {
  itemId: string;
  updatedItem: Item = { name: '', quantity: 0 };

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    this.getItemDetails();
  }

  getItemDetails() {
    this.httpService.getItemDetails(this.itemId).subscribe((response) => {
      this.updatedItem = response;
    }, (error) => {
      console.error('Error retrieving item details:', error);
    });
  }

  updateItem() {
    this.httpService.updateItem(this.itemId, this.updatedItem).subscribe((response) => {
      console.log('Item updated successfully:', response);
    }, (error) => {
      console.error('Error updating item:', error);
    });
  }
}

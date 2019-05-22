import { Component, OnInit } from '@angular/core';
import { MerchantService } from '../../services/merchant/merchant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ MerchantService ],
})
export class HomePageComponent implements OnInit {
  public merchantCollection: Array<any>;
  public categoriesCollectionSlug: Array<any> = [];
  public categoriesCollection: Array<any> = [];

  constructor(
    private merchantService: MerchantService,
  ) { }
  private getMerchantList = () => {
    this.merchantService.readAllItems()
      .then(apiResponse => {
        this.merchantCollection = apiResponse.data;
        this.getMerchantCategories(apiResponse.data);
      });
  }
  private getMerchantCategories = (data: any) => {
    data.map((item: any) => {
      console.log(item.category.slug);
      if (this.categoriesCollectionSlug.indexOf(item.category.slug) === -1) {
        this.categoriesCollectionSlug.push(item.category.slug);
        this.categoriesCollection.push(item.category);
      }
    });
    console.log(this.categoriesCollection);
  }

  public sortMerchant = (slug: string) => {
    console.log({slug});
  }
  ngOnInit() {
    this.getMerchantList();
  }

}

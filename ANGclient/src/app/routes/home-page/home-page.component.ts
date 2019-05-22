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
  public filteredCategory: Array<any> = [];
  public activeCategory: string;

  constructor(
    private merchantService: MerchantService,
  ) {}
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
  }
  public filterCategory = (slug: string) => {
    this.filteredCategory = this.merchantCollection.filter(el => el.category.slug === slug);
    this.activeCategory = slug;
  }

  public sortMerchant = (slug: string) => {
    console.log({slug});
  }
  ngOnInit() {
    this.getMerchantList();
  }

}

import { Component } from "@angular/core";
import { CategoryService } from "src/app/services/category.service";
import { ICategory } from "src/app/types/category";



@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
  providers: [CategoryService]
})
export class CategoryComponent{

  error: any = null;
  selectedCategory: ICategory | null = null;
  categories: ICategory[] = [];
  
  constructor(private categoryService: CategoryService){}

  ngOnInit(){
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    },
    error => {
      this.error = error
    })
  }

  changeSelectedCategory($event: any, category?: ICategory){
    if(category){
      this.selectedCategory = category;

    } else {
      this.selectedCategory = null;
    }
  }


}







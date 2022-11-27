import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [
    new Recipe('Groshe', 'pershesh groeshesh', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps8127_HSC143552C08_01_2b.jpg')
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

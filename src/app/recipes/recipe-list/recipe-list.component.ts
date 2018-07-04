import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://media3.s-nbcnews.com/j/newscms/2018_04/1313413/ryan-scott-today-180126-tease3_00f85f93c6167a851cdecfaffbb797a5.today-inline-large.jpg'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/gallery-1503418862-chicken-thighs-delish.jpg')
    
  ];
  constructor() { }

  ngOnInit() {
  }

}

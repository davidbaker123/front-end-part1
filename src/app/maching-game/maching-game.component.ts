import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-maching-game',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './maching-game.component.html',
  styleUrl: './maching-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MachingGameComponent { 
category?: Category;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.category = this.categoriesService.get(id);
  }
}






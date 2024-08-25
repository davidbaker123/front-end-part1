import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-mixed-letters-game',
  standalone: true,
  imports: [
    CommonModule,RouterLink,RouterModule,MatToolbarModule,
  ],
  templateUrl: './mixed-letters-game.component.html',
  styleUrl: './mixed-letters-game.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MixedLettersGameComponent {
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




 





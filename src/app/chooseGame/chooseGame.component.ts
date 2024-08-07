import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from '../services/categories.service';
import { Router } from '@angular/router';
import { GameProfile } from '../../shared/model/gameProfile';
import { Category } from '../../shared/model/category';
import { CategoryDialogComponent } from '../categoryDialog/categoryDialog.component';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { GameProfileService } from '../services/gamesInformation.service';

@Component({
  selector: 'app-choose-game',
  standalone: true,
  templateUrl: './chooseGame.component.html',
  styleUrls: ['./chooseGame.component.css'],
  imports: [MatCardModule,NgFor],
})
export class ChooseGameComponent implements OnInit {
  games: GameProfile[] = [];

  constructor(
    private gameProfileService: GameProfileService,
    private dialog: MatDialog,
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.games = this.gameProfileService.getGames();
  }

  openCategoryDialog(game: GameProfile): void {
    const dialogRef = this.dialog.open(CategoryDialogComponent, {
      data: { game }
    });

    dialogRef.afterClosed().subscribe((result: Category) => {
      if (result) {
        this.router.navigate([game.urlAddress.replace(':id', result.id.toString())]);
      }
    });
  }
}
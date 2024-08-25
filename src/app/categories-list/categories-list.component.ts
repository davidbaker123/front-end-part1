import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { categories } from '../../shared/data/categories';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Category } from '../../shared/model/category';
import { CategoriesService } from '../services/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [
    CommonModule, MatTableModule, MatIconModule, MatButtonModule, RouterModule
  ],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'numOfWords', 'lastUpdateDate', 'actions'];
  dataSource : Category[] = [];

  constructor(private categoriesService : CategoriesService, private dialogService : MatDialog) {}

  ngOnInit(): void {
    this.dataSource = this.categoriesService.list();
  }

  deleteCategory(id : number, name: string) {
    let dialogRef = this.dialogService.open(DeleteCategoryDialogComponent, {data: name});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoriesService.delete(id);
        this.dataSource = this.categoriesService.list();
      }});
  }
}

// קומפוננטה חדשה
// loading-update-form:

// export class LoadingUpdateFormComponent {
//   @Input() progressValue = 0;
// }
// we need to add to imports:[MatProgressBarMoudle]

// Html Component:
// <mat-progress-bar class="custom-progress-bar" mode="determinate" [value]="progressValue"></mat-progress-bar>

// ts componenet הראשית לקישוריות
// משתנים:
// progressValue = 0;
// isSubmitting = false;

// הוספת פונקציה להגדרת הטעינה
// incrementProgress(){
//   const interval = setInterval(()=>{
//     if(this.progressValue < 100){
//       this.progressValue +=25;
//     }else {
//       clearInterval(interval);
//       this.isSubmitting = false;
//     }
//   }, 200);
// }

// הוספת אינדיקציה על כתפור השמירה
// OnSubmitRegistion(){
//   console.log('Form submitted!');
//   this.isSubmitting = true;
//   if(this.id){
//     this.personService.update(this.currentPerson);
//   }else{
//     this.personService.add(this.currentPerson);
//   }
//   this.incrementProgress();
// }

// הוספת Imports:
// MatProgressBarMoudle,LodingUpdateFormComponent

// הוספת האלנמט לHTML
//  <app-loding-update-form> *ngif="isSubmintting" [progressValue]="progressValue"></app-loding-update-form>



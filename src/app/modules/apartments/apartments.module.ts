import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ApartmentsComponent } from './apartments.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ApartmentsRoutingModule } from './apartments-routing.module';

@NgModule({
  declarations: [
    ApartmentsComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatRadioModule,
    ApartmentsRoutingModule
  ]
})
export class ApartmentsModule { }

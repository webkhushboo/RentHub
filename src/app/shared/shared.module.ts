import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from '@app/modules/auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
  ]
})
export class SharedModule { }

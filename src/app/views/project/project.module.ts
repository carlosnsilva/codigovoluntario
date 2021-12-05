import { NgModule } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './project-page/project-page.component';
import { AddProjectPageComponent } from './add-project-page/add-project-page.component';
import { ProjectCardComponent } from './project-card/project-card.component';

import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule} from '../../app-routing.module';


@NgModule({
  declarations: [
    AddProjectPageComponent,
    ProjectCardComponent,
    ProjectPageComponent
  ],
  exports: [
    AddProjectPageComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTooltipModule,
    AppRoutingModule,
    NgbRatingModule
  ]
})
export class ProjectModule { }

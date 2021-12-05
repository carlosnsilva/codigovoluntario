import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectPageComponent } from './views/project/add-project-page/add-project-page.component';
import { ProjectCardComponent } from './views/project/project-card/project-card.component';
import { ProjectPageComponent } from './views/project/project-page/project-page.component';
import { LoginComponent } from './views/user/login/login.component';
import { SignUpComponent } from './views/user/sign-up/sign-up.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'list-projects', component: ProjectCardComponent},
  { path: 'add-project',  component: AddProjectPageComponent},
  { path: 'sign-up',  component: SignUpComponent},
  { path: 'project-page/:id',  component: ProjectPageComponent},
  { path: 'list-projects/project-page/:id',  component: ProjectPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

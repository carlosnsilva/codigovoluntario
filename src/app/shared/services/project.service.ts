import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  // URL_PROJECTS = 'http://localhost:8080/projects/';
  URL_PROJECTS = "https://depsegames.herokuapp.com/projects";

  constructor(private httpClient: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URL_PROJECTS);
  }

  getProject(id: number): Observable<Project> {
    return this.httpClient.get<Project>(`${this.URL_PROJECTS}${id}`);
  }

  addProject(project: Project): Observable<Project>{
    return this.httpClient.post<Project>(this.URL_PROJECTS, project);
  }

  updateProject(project: Project): Observable<Project>{
    return this.httpClient.put<Project>(`${this.URL_PROJECTS}${project.id}`, project);
  }

  deleteProject(id: number): Observable<any> {
    return this.httpClient.delete<Project>(`${this.URL_PROJECTS}${id}`);
  }

}

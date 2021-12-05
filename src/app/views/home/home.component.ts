import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/models/Project';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from '../../shared/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource: MatTableDataSource<Project>;
  showColumns = ['id', 'nome', 'descricao', 'tecnologias'];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      projects => this.dataSource = new MatTableDataSource(projects)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}

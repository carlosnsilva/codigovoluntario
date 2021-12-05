import { Component, OnInit } from '@angular/core';
import { Project } from '../../../shared/models/Project';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../shared/services/project.service';
import { MessageService } from '../../../shared/services/message.service';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.css']
})
export class AddProjectPageComponent implements OnInit {

  constructor(private projectService: ProjectService,
              private fb: FormBuilder,
              private messageService: MessageService,
              private route: ActivatedRoute) {}

  projectNew: Project;
  form: FormGroup;
  id: string;

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [""],
      url: [""],
      descricao: [""],
      tecnologias: [""]
    });
  }

  insertProject(): void {
    if (this.id) {
      this.projectNew = this.form.value;
      this.projectService.updateProject(this.projectNew).subscribe(
        project => console.log(project)
      );
      this.messageService.success('Projeto alterado com sucesso!');
      this.form.reset();
    } else {
      this.projectNew = this.form.value;
      this.projectService.addProject(this.projectNew).subscribe(
        project => console.log(project)
      );
      this.messageService.success('Projeto adicionado com sucesso!');
      this.form.reset();
    }
  }

}

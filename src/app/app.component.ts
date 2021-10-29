import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tarefa = "";
  public tasks = ['task1', 'task 2'];

  addTarefa(){
    this.tasks.push(this.tarefa)
  }

  removeTarefa(task){
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}

import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Todo } from './../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TodosComponent{
  titleTodo: string = "It's a TODO";

  todoList: Todo[] = [] as Todo[];

  @ViewChild('InputTodo') inputTodo: ElementRef;

  toggleDone(index: number){
    this.todoList[index].isComplete = !this.todoList[index].isComplete
  }

  toRemove(index: number){
    if(!this.todoList[index].isComplete)
      this.todoList = this.todoList.filter((v, i) => i !== index)
  }

  toAddTodo(){
    this.todoList.push({
      name: this.inputTodo.nativeElement.value || "First Todo",
      isComplete: true
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
  ];

  updateBtn = false;
  addBtn = true;
  idd: any ="";
  title = "";
  desc = "";

  
  c = 100;

  displayedColumns: string[] = ['Id', 'Title', 'Desc', 'Action'];
  dataSource = new MatTableDataSource(this.todos);
  
  constructor() { }

  ngOnInit(): void {
  }


  addTodo(todoTitle: string, todoDesc: string) {

   
   
    this.c = this.c + 1;
    let todo = {
      id: this.c,
      todoTitle: todoTitle,
      todoDesc: todoDesc
    }
   
    this.todos.push(todo);
    this.title = "";
    this.desc = "";

    this.dataSource = new MatTableDataSource(this.todos);

    console.log(this.todos)

   
  }


  
  deleteTodo(id: number) {
    let newArray = this.todos.filter(data => data.id != id);
    this.todos = newArray;
    this.dataSource = new MatTableDataSource(newArray);
    console.log("filtered", newArray)
  }


  EditTodo(form?:boolean, title?:string, desc?:string, id?: number) {
    let newArray: Todo[] = [];
    if(!form) {
      
      newArray = this.todos.filter(data => data.id === id);
      this.idd = newArray[0].id;
      this.title = newArray[0].todoTitle;
      this.desc = newArray[0].todoDesc;
     

      if(newArray) {



        this.addBtn = false;
        this.updateBtn = true;
  
      }
      console.log(newArray)
      return;
    } 
   

    console.log(form)
    console.log(title, desc);
   

    

  }
  updateTodo(add:boolean,title:string,desc:string){
    console.log(title)
    let index:number;
    index = this.todos.findIndex(data => data.id === this.idd);
    console.log(index)

    // console.log(newArray)
     this.todos[index] = {
      id: this.idd,
      todoTitle: title,
      todoDesc: desc
    }
    this.dataSource = new MatTableDataSource(this.todos);
    console.log(this.todos)
    this.title = "";
    this.desc = "";

    // console.log(this.idd)
    this.addBtn = true;
    this.updateBtn = false;
  }
}


export interface Todo {
  id: number;
  todoTitle: string;
  todoDesc: string;
}
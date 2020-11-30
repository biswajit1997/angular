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

  title = "";
  desc = "";

  
  c = 100;

  displayedColumns: string[] = ['Id', 'Title', 'Desc', 'Action'];
  dataSource = new MatTableDataSource(this.todos);
  constructor() { }

  ngOnInit(): void {
  }



  addTodo(todoTitle: string, todoDesc: string) {

    console.log(todoTitle + "   " + todoDesc)
    this.c = this.c + 1;
    let todo = {
      id: this.c,
      todoTitle: todoTitle,
      todoDesc: todoDesc
    }

    this.todos.push(todo)
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


  updateTodo(form?:boolean, title?:string, desc?:string, id?: number) {
    let newArray: Todo[] = [];
    if(!form) {
      console.log(id)
      newArray = this.todos.filter(data => data.id === id);
  
      this.title = newArray[0].todoTitle;
      this.desc = newArray[0].todoDesc;
      // console.log("newArray[0].todoTitle", newArray[0].todoTitle)

      if(newArray) {
      //     newArray[0].todoTitle = title;
      //     console.log("newArray[0].todoTitle", newArray[0].todoTitle)
      //     console.log("tttt")
        

      //     console.log("ddd")
      //     newArray[0].todoDesc = desc;
        

        
      //   // this.todos = newArray;
      //   // this.dataSource = new MatTableDataSource(newArray);


        this.addBtn = false;
        this.updateBtn = true;
  
      }
      console.log(newArray)
      return;
    } 
   

    console.log(form)
    console.log(title, desc);




          //  newArray[0].todoTitle = title;
          // console.log("newArray[0].todoTitle", newArray[0].todoTitle)
          // console.log("tttt")
        

          // console.log("ddd")
          // newArray[0].todoDesc = desc;
        

        
        // this.todos = newArray;
        // this.dataSource = new MatTableDataSource(newArray);

    this.addBtn = true;
    this.updateBtn = false;
    
    // this.todos = newArray;
    // this.dataSource = new MatTableDataSource(newArray);
    // console.log("filtered", newArray)
  }
}


export interface Todo {
  id: number;
  todoTitle: string;
  todoDesc: string;
}
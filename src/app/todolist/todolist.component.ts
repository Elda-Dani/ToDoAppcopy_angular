import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.fetchData()
  }


fetchData=()=>{
  this.myApi.viewTodo().subscribe(
    (data)=>{
      this.todoData=data
    }
  )
}

todoData:any =[
  
]

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkItemComponent } from '../work-item/work-item.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-list',
  standalone: true,
  imports: [CommonModule, WorkItemComponent, FormsModule],
  templateUrl: './work-list.component.html',
  styleUrl: './work-list.component.css'
})
export class WorkListComponent {
  toDoList: string[] = [];
  workItem: string = "";


  onSave(){
    this.toDoList.push(this.workItem);
    this.workItem = "";
  }

  onDelete(event: string){
    const index = this.toDoList.findIndex(item => item === event);
    this.toDoList.splice(index,1)
  }
}

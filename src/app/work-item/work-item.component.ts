import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-item.component.html',
  styleUrl: './work-item.component.css'
})
export class WorkItemComponent {
  @Input() workItem: string | undefined = undefined;
  @Output() delete:  EventEmitter<string> = new EventEmitter(); 
  isItemDone : boolean = false;
  
  onDone(){
   this.isItemDone = true;
  }
 
  onDelete(){
   this.delete.emit(this.workItem)
  }
}

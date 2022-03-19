import { Component, OnInit ,Input,Output,EventEmitter,ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css',],
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent implements OnInit {
  @Input() childmessage:string;
  constructor() { 
    this.childmessage="";
  }
  @Output() messageEvent=new EventEmitter<string>();
  ngOnInit(): void {
  }
  sendmessage(){
    this.messageEvent.emit("Hello from child");
  }
  message="Message From Child Component";
}

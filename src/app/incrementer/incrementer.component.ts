import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {

  constructor() { }

  @Input() inputNum: number;
  @Output() incremented: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
  }

  increment() : void {
    var incremented = ++this.inputNum;
    this.incremented.emit(incremented);
  }

}

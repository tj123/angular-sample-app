import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hehe',
  templateUrl: './hehe.component.html',
  styleUrls: ['./hehe.component.css']
})
export class HeheComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  kaka(){

    alert('kaka');

  }

}

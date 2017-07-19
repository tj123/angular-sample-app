import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {


    console.log('initelelel');


    console.log(this);


  }

  dir(): void {
    alert('dir comp哦那你你是谁');
  }

  title = 'app works!';

  color :string ='这是 component 的 color';

}

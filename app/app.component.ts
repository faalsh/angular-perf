import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div *ngFor="let n of nums; let i = index">
  	<label>abc{{i}}</label>
  </div>

  `,
})
export class AppComponent  { 
	nums:number[] = Array(10000)
}
	
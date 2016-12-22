import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <input type="button" value="Start" (click)="onStart()" />
  <input type="button" value="Low in tree" />
  <input type="button" value="High in tree" />
  <input type="button" value="Reset" (click)="onReset()"/>
  <div *ngFor="let n of nums; let i = index">
  	<label>abc{{i}}</label>
  </div>

  `,
})
export class AppComponent {
  	nums:number[] = Array(0)

  	onStart(){
  		console.time("render")
  		this.nums = Array(10000)
  	}

  	onReset(){
  		this.nums = Array(0)
  	}

  	ngAfterViewChecked() {
        console.timeEnd("render")
    }

}

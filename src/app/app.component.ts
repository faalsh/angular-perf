import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div [style.width]="getWidth()">
    <input type="button" value="Small change" (click)="onSmallChange()" />
    <input type="button" value="Reset" (click)="onResetSmall()" />
    <div>{{title}}</div>
    <input type="button" value="Start" (click)="onStart()" />
    <input type="button" value="Low in tree" />
    <input type="button" value="High in tree" (click)="onHigh()"/>
    <input type="button" value="Reset" (click)="onReset()"/>
    <div *ngFor="let n of nums; let i = index">
    	<label>abc{{i}}</label>
    </div>
   </div>
  `,
})
export class AppComponent {
  	nums:number[] = Array(0)
    title:string = "initial"
    width:string = "100%"

    getWidth(){
      return this.width
    }

    onSmallChange(){
      console.time("render")
      this.title = "new text"
    }

    onResetSmall(){
      this.title = "initial"
    }

    onHigh(){
      console.time("render")
      this.width = "50%"
      // this.nums[10] = "fahad"
    }

  	onStart(){
  		console.time("render")
  		this.nums = Array(10000)
  	}

  	onReset(){
  		this.nums = Array(0)
      this.width = "100%"
  	}

  	ngAfterViewChecked() {
        console.timeEnd("render")
    }


}

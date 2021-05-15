import { Component, OnInit } from "@angular/core";

@Component({
  // decorator
  selector: "warning-alert",
  templateUrl: "./warning-alert.component.html",
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class WarningAlert implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      alert('Warning component initialized');
    }, 2000);
  }
}

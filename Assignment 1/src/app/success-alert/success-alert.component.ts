import { Component, OnInit } from "@angular/core";

@Component({
  // decorator
  selector: "success-alert",
  templateUrl: "./success-alert.component.html",
  styles: [
    `
      p {
        color: green;
      }
    `,
  ],
})
export class SuccessAlert implements OnInit {
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      alert("Success component initialized");
    }, 3000);
  }
}

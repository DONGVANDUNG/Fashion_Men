import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-user-cart",
  templateUrl: "./app-user-cart.component.html",
  styleUrls: ["./app-user-cart.component.less"],
})
export class AppUserCartComponent {

  isToggleAuth :boolean = false;
  sidebarLoginVisible :boolean = false;
  sidebarRegisterVisible :boolean = false;

  openBlockAuth(){
    this.isToggleAuth = true;
  }
  closeBlockAuth(){
    this.isToggleAuth = false;
  }
}

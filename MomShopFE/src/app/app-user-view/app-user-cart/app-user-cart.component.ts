import { Component, EventEmitter, Output } from "@angular/core";
import { MenuItem} from 'primeng/api';

@Component({
  selector: "app-user-cart",
  templateUrl: "./app-user-cart.component.html",
  styleUrls: ["./app-user-cart.component.less"],
})
export class AppUserCartComponent {

  isToggleAuth :boolean = false;
  sidebarLoginVisible :boolean = false;
  sidebarRegisterVisible :boolean = false;
  items: MenuItem[] | undefined;
  activeIndex: number = 0;
  
  openBlockAuth(){
    this.isToggleAuth = true;
  }
  closeBlockAuth(){
    this.isToggleAuth = false;
  }
  ngOnInit() {
    this.items = [
        {
            label: 'Personal',
        },
        {
            label: 'Seat',
        },
        {
            label: 'Payment',
        },
        {
            label: 'Confirmation',
        }
    ];
}
}

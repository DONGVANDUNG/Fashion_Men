import { Component, EventEmitter, Output } from "@angular/core";
import { MenuItem } from 'primeng/api';

@Component({
  selector: "app-user-cart",
  templateUrl: "./app-user-cart.component.html",
  styleUrls: ["./app-user-cart.component.less"],
})
export class AppUserCartComponent {

  isToggleAuth: boolean = false;
  sidebarLoginVisible: boolean = false;
  sidebarRegisterVisible: boolean = false;
  items: MenuItem[] | undefined;
  isFavourite :boolean = false;
  activeIndex: number = 0;
  activeItem: MenuItem | undefined;
  isTabFavourite:boolean = true;
  products = [
    {src:'assets/layout/images/Banner-Web_1.jpg'},
    {src:'assets/layout/images/Banner-Web-2.jpg'},
    {src:'assets/layout/images/Banner-Web-3.jpg'},
    {src:'assets/layout/images/Banner-Web-4.jpg'},
   ]
   
   responsiveOptions;
   constructor(){
    this.responsiveOptions = [
      {
        breakpoint: '226px',
        numVisible: 4,
        numScroll: 4
      },
       {
           breakpoint: '226px',
           numVisible: 3,
           numScroll: 3
       },
       {
           breakpoint: '226px',
           numVisible: 2,
           numScroll: 2
       },
       {
           breakpoint: '226px',
           numVisible: 1,
           numScroll: 1
       }
   ];
   }
  openBlockAuth() {
    this.isToggleAuth = true;
  }
  closeBlockAuth() {
    this.isToggleAuth = false;
  }
  ngOnInit() {
    this.items = [
      { label: 'Có thể bạn sẽ thích',tabindex:"1"},
      { label: 'Sản phẩm bạn đã xem',tabindex:"2"},
  ];
  this.activeItem = this.items[0];
  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    if(event.tabindex == "1"){
          this.isTabFavourite = true;
    }
    if(event.tabindex == "2"){
      this.isTabFavourite = false;
    }
}
  deleteProductOutCart() {

  }
  addOrDeleteFavourite(){
    this.isFavourite = !this.isFavourite;
    location.reload();
  }

}

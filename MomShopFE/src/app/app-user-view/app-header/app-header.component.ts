import { Component, EventEmitter, HostListener, Output, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SlideMenu } from "primeng/slidemenu";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.less"],
})
export class AppHeaderComponent {
  // isAccount: boolean = false;
  // @Output() modalSaves: EventEmitter<any> = new EventEmitter<any>();
  // @Output() backHome: EventEmitter<any> = new EventEmitter<any>();
  // //@HostListener('window:beforeunload', ['$event'])
  // // beforeunloadHandler(event: Event) {
  // //   // Xóa dữ liệu trong LocalStorage
  // //   localStorage.clear();
  // // }

  // accountUser;
  // constructor(private router: Router, private toastr: ToastrService) {
  //   this.accountUser = JSON.parse(localStorage.getItem('user'));
  //   if (this.accountUser) {
  //     this.isAccount = true;
  //   }
  //   else {
  //     this.isAccount = false;
  //   }
  // }
  // routerToCart() {
  //   this.modalSaves.emit(null);
  // }
  // backToHome() {
  //   this.backHome.emit(null);
  // }
  // logout() {
  //   //location.reload();
  //   this.toastr.success("Đăng xuất thành công", "Thông báo", { timeOut: 2000 });
  //   localStorage.clear();
  //   this.router.navigateByUrl('login');
  // }
  @ViewChild('menuBrand') menuBrand: SlideMenu;
  @ViewChild('menuProduct') menuProduct: SlideMenu;
  @ViewChild('menuAccessory') menuAccessory: SlideMenu;
  @ViewChild('menuBrandCollection') menuCollection: SlideMenu;
  @ViewChild('menuShop') menuShop: SlideMenu;
  @ViewChild('menuOutLetStore') menuOutLetStore: SlideMenu;
  listItemNavBrand = [
    { label: '' },
    { label: 'Tin tức Fashion Men' },
    { label: 'Ưu đãi thương hiệu' },
    { label: 'Ưu đãi liên kết' },
    { label: 'Báo chí nói về chúng tôi' },
    { label: 'Đôi cánh yêu thương' },
    { label: 'Tuyển dụng' },
  ];
  listItemNavProduct = [
    { label: '' },
    { label: 'Tin tức Fashion Men' },
    { label: 'Ưu đãi thương hiệu' },
    { label: 'Ưu đãi liên kết' },
    { label: 'Báo chí nói về chúng tôi' },
    { label: 'Đôi cánh yêu thương' },
    { label: 'Tuyển dụng' },
  ];
  listItemNavAccessory = [
    { label: '' },
    { label: 'Giày' },
    { label: 'Cặp da' },
    { label: 'Ví' },
    { label: 'Dây lưng' },
    { label: 'Cà vạt' },
  ];
  listItemNavCollection = [
    { label: '' },
    { label: 'Tin tức Fashion Men' },
    { label: 'Ưu đãi thương hiệu' },
    { label: 'Ưu đãi liên kết' },
    { label: 'Báo chí nói về chúng tôi' },
    { label: 'Đôi cánh yêu thương' },
    { label: 'Tuyển dụng' },
  ];
  listItemNavShop = [
    { label: '' },
    { label: 'Online Store' },
    { label: 'Hệ thống cửa hàng' },
  ];
  listItemNavOutLetStore = [
    { label: '' },
    { label: 'Áo sơ mi' },
    { label: 'Áo polo' },
    { label: 'T-Shirt' },
    { label: 'Tank Top' },
    { label: 'Quần Jeans' },
    { label: 'Quần Short' },
  ];
  isToggleAuth :boolean = false;
  isToggleBrand :boolean = false;
  isToggleProduct :boolean = false;
  isToggleAccessory :boolean = false;
  isToggleCollection :boolean = false;
  isToggleShop :boolean = false;
  isToggleOutLetStore :boolean = false;
  sidebarLoginVisible :boolean = false;
  sidebarRegisterVisible :boolean = false;
  isVisiableBlockSearch :boolean = false;

  products = [
    {src:'assets/layout/images/Banner-Web_1.jpg'},
    {src:'assets/layout/images/Banner-Web-2.jpg'},
    {src:'assets/layout/images/Banner-Web-3.jpg'},
    {src:'assets/layout/images/Banner-Web-4.jpg'},
   ]
   
   responsiveOptions;
 
   constructor() { 
     this.responsiveOptions = [
            {
              breakpoint: '1166px',
              numVisible: 4,
              numScroll: 4
            },
             {
                 breakpoint: '1166px',
                 numVisible: 3,
                 numScroll: 3
             },
             {
                 breakpoint: '1166px',
                 numVisible: 2,
                 numScroll: 2
             },
             {
                 breakpoint: '1166px',
                 numVisible: 1,
                 numScroll: 1
             }
         ];
   }
  openMenu(optionVisiable) {
    this.isToggleBrand  = false;
    this.isToggleProduct  = false;
    this.isToggleAccessory  = false;
    this.isToggleCollection  = false;
    this.isToggleShop  = false;
    this.isToggleOutLetStore  = false;
    if(optionVisiable == 1){
      this.isToggleBrand  = true;
      this.menuBrand?.toggle(event);
    }
    if(optionVisiable == 2){
      this.isToggleProduct  = true;
      this.menuProduct?.toggle(event);
    }
    if(optionVisiable == 3){
      this.isToggleAccessory  = true;
      this.menuAccessory?.toggle(event);
    }
    if(optionVisiable == 4){
      this.isToggleCollection  = true;
      this.menuCollection?.toggle(event);
    }
    if(optionVisiable == 5){
      this.isToggleShop  = true;
      this.menuShop?.toggle(event);
    }
    if(optionVisiable == 6){
      this.isToggleOutLetStore  = true;
      this.menuOutLetStore?.toggle(event);
    }
  }

  closeMenu(optionVisiable) {
    if(optionVisiable == 1){
      this.isToggleBrand  = false;
      this.menuBrand?.hide();
    }
    if(optionVisiable == 2){
      this.isToggleProduct  = false;
      this.menuProduct?.hide();
    }
    if(optionVisiable == 3){
      this.isToggleAccessory  = false;
      this.menuAccessory?.hide();
    }
    if(optionVisiable == 4){
      this.isToggleCollection  = false;
      this.menuCollection?.hide();
    }
    if(optionVisiable == 5){
      this.isToggleShop  = false;
      this.menuShop?.hide();
    }
    if(optionVisiable == 6){
      this.isToggleOutLetStore  = false;
      this.menuOutLetStore?.hide();
    }
  }
  openBlockAuth(){
    this.isToggleAuth = true;
  }
  closeBlockAuth(){
    this.isToggleAuth = false;
  }
}

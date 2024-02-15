import { Component } from '@angular/core';
import { Cat } from 'src/app/model/cat';
import { List } from 'src/app/model/list';
import { Data } from 'src/app/view/data';
import { Listproduct } from 'src/app/view/listproduct';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  prolist !: List[];
  pro!: Listproduct;
  datanow!: Date;
  cat1!: Cat[];
totalprice:number=0;


buy( itemPrice:number,Count:any){
this.totalprice= +Count*itemPrice;

}





  constructor() {

    this.pro = new Listproduct(1, 'ayman', 'https://picsum.photos/2000/1200', 'aykaka', 3, 5000, ['n1', 'n2', 'n3']);

    this.prolist = [{ id: 1, name: 'p1', price: 100, quantity: 1, imgurl: 'https://picsum.photos/2000/1100', categoryId: 1 },
    { id: 2, name: 'p2', price: 110, quantity: 2, imgurl: 'https://picsum.photos/2000/1200', categoryId: 2 },
    { id: 3, name: 'p3', price: 120, quantity: 0, imgurl: 'https://picsum.photos/2000/1300', categoryId: 3 },
    { id: 4, name: 'p4', price: 130, quantity: 4, imgurl: 'https://picsum.photos/2000/1400', categoryId: 4 },
    { id: 5, name: 'p5', price: 140, quantity: 5, imgurl: 'https://picsum.photos/2000/1500', categoryId: 5 },
    { id: 6, name: 'p6', price: 150, quantity: 6, imgurl: 'https://picsum.photos/2000/1600', categoryId: 6 },]

    this.datanow = new Date();

    this.cat1 = [{ id: 1, name: 'c1' },
    { id: 2, name: 'c2' },
    { id: 3, name: 'c3' },
    { id: 4, name: 'c4' },]


  }







}

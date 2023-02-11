import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-single-district',
  templateUrl: './single-district.component.html',
  styleUrls: ['./single-district.component.css']
})
export class SingleDistrictComponent {
  single:any
  constructor(private x:HeroService){}

   
  ngOnInit(){ 
    let District:any=localStorage.getItem('District');
    console.log(District);
    let ar=this.x.getData();
    this.single=ar.filter(e=>e.District===District);

    

    console.log(this.single[0]);


  }

   
}

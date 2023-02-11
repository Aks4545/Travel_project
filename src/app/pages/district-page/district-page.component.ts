import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-district-page',
  templateUrl: './district-page.component.html',
  styleUrls: ['./district-page.component.css']
})
export class DistrictPageComponent {
  constructor(private  d: HeroService,private router:Router) {}
  database= this.d.getData();

  gotohere(District:any ){
    localStorage.setItem('District',District)
    this.router.navigate(['/single'])
  }


}

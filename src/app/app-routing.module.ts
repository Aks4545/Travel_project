import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DistrictPageComponent } from './pages/district-page/district-page.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { SingleDistrictComponent } from './pages/single-district/single-district.component';



const routes: Routes = [
  {
  path:'',  
  component:HomeComponent
  },
  {
    path:'home',  
    component:HomeComponent
    },

 {
    path:'signup',
    component:SignupPageComponent
  },
  {
      path:'contacts',component:ContactsComponent
      },
  {
    path:'district',
    component:DistrictPageComponent

  },
  {
    path:'single',
    component:SingleDistrictComponent

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

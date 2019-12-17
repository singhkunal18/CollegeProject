import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CollectorComponent } from './collector/collector.component';
import { DonationComponent } from './donation/donation.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'gcollection', component: CollectorComponent },
  { path: 'idonation', component:DonationComponent},
  { path:'', redirectTo:'home', pathMatch: 'full' },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

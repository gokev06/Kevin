import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

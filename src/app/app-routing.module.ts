import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsIndexComponent } from './components/posts-index/posts-index.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './components/post-details/post-details.component'

const routes: Routes = [
  { path: '', component: PostsIndexComponent },
  { path: 'posts', component: PostsIndexComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

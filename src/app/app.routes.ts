import { Routes } from '@angular/router';
import { IndexComponent } from './producto/index/index.component';
import { ViewComponent } from './producto/view/view.component';
import { CreateComponent } from './producto/create/create.component';
import { EditComponent } from './producto/edit/edit.component';

export const routes: Routes = [
    {path:'', redirectTo:'producto/index', pathMatch:'full'},
    {path:'producto/index', component: IndexComponent},
    {path:'producto/:productoId/view', component: ViewComponent},
    {path:'producto/create', component: CreateComponent},
    {path:'producto/:productoId/edit', component: EditComponent},
];

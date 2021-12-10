import { DevenirAmbassadeurComponent } from './sreens/devenir-ambassadeur/devenir-ambassadeur.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './sreens/home/home.component'
import { CGUComponent } from './sreens/cgu/cgu.component'
import { FAQComponent } from './sreens/faq/faq.component'
import { CommentCaMarcheComponent } from './sreens/comment-ca-marche/comment-ca-marche.component'

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'cgu',
        component: CGUComponent,
    },
    {
        path: 'faq',
        component: FAQComponent,
    },
    {
        path: 'comment-ça-marche',
        component: CommentCaMarcheComponent,
    },
    {
        path: 'devenir-ambassadeur',
        component: DevenirAmbassadeurComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

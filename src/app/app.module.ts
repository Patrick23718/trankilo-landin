import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

// Modules
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'

// Components
import { AppComponent } from './app.component'
import { HomeComponent } from './sreens/home/home.component'
import { CGUComponent } from './sreens/cgu/cgu.component'
import { FAQComponent } from './sreens/faq/faq.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component';
import { CommentCaMarcheComponent } from './sreens/comment-ca-marche/comment-ca-marche.component';
import { DevenirAmbassadeurComponent } from './sreens/devenir-ambassadeur/devenir-ambassadeur.component'

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [AppComponent, HomeComponent, CGUComponent, FAQComponent, HeaderComponent, FooterComponent, CommentCaMarcheComponent, DevenirAmbassadeurComponent],
    imports: [MatMenuModule, MatIconModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

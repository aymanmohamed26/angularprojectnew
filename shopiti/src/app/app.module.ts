import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SaidebarComponent } from './shared/saidebar/saidebar.component';
import { HomeComponent } from './component/Mainterminal/home/home.component';
import { bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill, bootstrapList } from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { cssAdd } from '@ng-icons/css.gg';
import { LightboxDirective } from './directives/lightbox.directive';
import { UsdToEgpPipe } from './usd-to-egp.pipe';
import { FormsModule, NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SaidebarComponent,
    HomeComponent,
    LightboxDirective,
    UsdToEgpPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapCart4, bootstrapTrash3, bootstrapInfoCircleFill,bootstrapList,cssAdd}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

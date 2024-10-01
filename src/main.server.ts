import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { LoginComponent } from './app/auth/components/login/login.component';


const bootstrap = () => bootstrapApplication(LoginComponent, config);

export default bootstrap;

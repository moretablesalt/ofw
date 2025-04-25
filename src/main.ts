import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    const loader = document.getElementById('splash-screen');
    if (loader) {
      setTimeout(() => loader.remove(), 700);
    }
  })
  .catch((err) => console.error(err));

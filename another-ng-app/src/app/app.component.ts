import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [ HomeComponent, HeaderComponent],
  template: `
    <app-header/>
    <main>
      <app-home/>
    </main>
  `,
  styles: [
    `
      main {
        padding: 10px 
      }
    `
  ],
})
export class AppComponent {
  title = 'another-ng-app';
}

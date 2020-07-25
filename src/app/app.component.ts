import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icons: Icons = {
    brandRecognition: '../assets/img/icon-brand-recognition.svg',
    detailedRecords: '../assets/img/icon-detailed-records.svg',
    fullyCustomizable: '../assets/img/icon-fully-customizable.svg'
  };
  title = 'PruebaFrontend2';
}
interface Icons {
  brandRecognition: string;
  detailedRecords: string;
  fullyCustomizable: string;
}

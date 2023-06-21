import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @ViewChild('services') myServices!: ElementRef;
  @ViewChild('contact') myContact!: ElementRef;
  @ViewChild('about') myAbout!: ElementRef;

  removeClass() {
    this.myAbout.nativeElement.classList.remove('active');
    this.myContact.nativeElement.classList.remove('active');
    this.myServices.nativeElement.classList.remove('active');
  }

  checkClass(ele: string) {
    this.removeClass();
    if (ele == 'service') {
      this.myServices.nativeElement.classList.add('active');
    } else if (ele == 'about') {
      this.myAbout.nativeElement.classList.add('active');
    } else if (ele == 'contact') {
      this.myContact.nativeElement.classList.add('active');
    }
  }
}

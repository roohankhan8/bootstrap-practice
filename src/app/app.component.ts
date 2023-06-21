import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('300ms', style({ opacity: 1 }))
      ])
    ]),
    trigger('slideUpAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('2000ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'bootstrap-practice';
  
}

import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Italy', background: "url('../../assets/pexels-leeloo-thefirst-5227440.jpg')", cols: 1, rows: 1 },
          { title: 'Hawai', background: "url('../../assets/pexels-matheus-bertelli-7163689.jpg')", cols: 1, rows: 1 },
          { title: 'Maldives', background: "url('../../assets/pexels-rachel-claire-4825701.jpg')", cols: 1, rows: 1 },
          { title: 'Pakistan', background: "url('../../assets/pexels-suzukii-xingfu-872831.jpg')", cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Italy', background: "url('../../assets/pexels-leeloo-thefirst-5227440.jpg')", cols: 2, rows: 1 },
        { title: 'Hawai', background: "url('../../assets/pexels-matheus-bertelli-7163689.jpg')", cols: 1, rows: 1 },
        { title: 'Maldives', background: "url('../../assets/pexels-rachel-claire-4825701.jpg')", cols: 1, rows: 2 },
        { title: 'Pakistan', background: "url('../../assets/pexels-suzukii-xingfu-872831.jpg')", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}

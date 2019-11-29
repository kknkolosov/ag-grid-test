import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  loading: boolean;
  constructor(private router: Router) {
    this.loading = true;
  }
  title = 'ag-grid';

  ngAfterViewInit() {
    this.router.events
    .subscribe((event) => {
        if (event instanceof NavigationStart) {
            this.loading = true;
        } else if (
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel
            ) {
            this.loading = false;
        }
    });
  }
}

// export const apiKey: IConfigState = {
// 	isLoading: false,
// 	set: {
// 		apiAdminTimeout: 1000,
// 		apiRetry: 1,
// 		apiTimeout: 15,
// 		apiPort: "81",
// 		apiUri: "",
// 		build: "Local",
// 		errorCode: "None",
// 		errorTest: false,
// 		gridPageCache: 10,
// 		gridPageSize: 1000,
// 		loginpage: "Login.aspx",
// 		maxGridPageCache: 15,
// 		maxGridPageSize: 5000,
// 		minGridPageCache: 3,
// 		minGridPageSize: 100,
// 		xtoken: "",
// 		pivotTimeout: 30
// 	}
// };

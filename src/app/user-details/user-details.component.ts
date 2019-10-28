import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXLogger } from 'ngx-logger';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public username: string;
  public user$: Observable<User>;
  
  constructor(private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private logger: NGXLogger,
    private githubService: GithubService) {
    this.route.params.subscribe(params => {
      this.username = params.username;
    });
  }

  ngOnInit() {
    this.spinner.show();
    this.user$ = this.githubService.getUserInfos(this.username);
  }

}

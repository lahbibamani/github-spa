import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXLogger } from 'ngx-logger';
import { GithubService } from '../services/github.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository.model';
import { RepositoryDetailsComponent } from '../repository-details/repository-details.component';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {

  @ViewChild(RepositoryDetailsComponent, { static: false }) detailsChild: RepositoryDetailsComponent;

  @Input() private username: string;
  public repos$: Observable<Repository[]>;
  public searchText: string = '';
  public params = { page: 1, perPage: 5 };

  constructor(
    private logger: NGXLogger,
    private githubService: GithubService) {
    
  }

  ngOnInit() {
    this.repos$ = this.githubService.getRepositoriesByUser(this.username, this.params.perPage, this.params.page);
  }

  didChangePage() {
    this.repos$ = this.githubService.getRepositoriesByUser(this.username, this.params.perPage, this.params.page);
  }

  setSelectedRepo(repo) {
    this.detailsChild.setRepo(repo);
  }

}

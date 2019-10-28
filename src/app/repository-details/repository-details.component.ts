import { Component, OnInit, Input } from '@angular/core';
import { Repository } from '../models/repository.model';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss']
})
export class RepositoryDetailsComponent implements OnInit {

  @Input() public repository : Repository = {};

  constructor() { }

  ngOnInit() {
  }

  setRepo(repo: Repository) {
    console.log(repo);
    this.repository = repo;
  }

}

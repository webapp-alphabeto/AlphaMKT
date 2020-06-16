import { Component, OnInit, Input } from '@angular/core';
import { NewClient } from '../../../interfaces/NewClient';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() client: NewClient;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IHouse} from '../../../model/IHouse';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})

export class SlideShowComponent implements OnInit {
  @Input()
  house: IHouse;

  constructor() {
  }

  ngOnInit() {
  }

}
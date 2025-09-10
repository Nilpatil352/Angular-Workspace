import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  name?: string | null;
  orderId?: string | null;
  dateStr = new Date().toLocaleString();

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');
  }

  goBack(): void {
    this.location.back();
  }
}

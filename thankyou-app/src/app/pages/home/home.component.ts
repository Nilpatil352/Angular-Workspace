import { Component, OnInit } from '@angular/core';
import { ImageService, Picsum } from '../../shared/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Picsum[] = [];
  loading = true;
  error = '';

  constructor(private imagesSvc: ImageService) {}

  ngOnInit(): void {
    this.imagesSvc.list(12).subscribe({
      next: (data) => { this.images = data; this.loading = false; },
      error: () => { this.error = 'Unable to load images right now.'; this.loading = false; }
    });
  }

  imgSrc(p: Picsum, w = 600, h = 400) {
    // Use Picsum’s CDN sizing for consistent thumbnails
    return `https://picsum.photos/id/${p.id}/${w}/${h}`;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Picsum {
  id: string;
  author: string;
  download_url: string;
  width: number;
  height: number;
}

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private http: HttpClient) {}
  // CORS-friendly, quick demo API
  list(limit = 8) {
    return this.http.get<Picsum[]>(`https://picsum.photos/v2/list?limit=${limit}`);
  }
}

import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";

import { forkJoin } from "rxjs/internal/observable/forkJoin";

import { map } from "rxjs/operators";

@Injectable()
export class PictureService {
  constructor(private apiService: ApiService) {}

  public getImage(id: number) {
    return this.apiService.getData(`photos/${id}`).pipe(map(data => data));
  }

  public getImageAndThumbnails(id: number, nextId: number, previousId: number) {
    const currentPhoto = this.apiService.getData(`photos/${id}`);
    const nextPhoto = this.apiService.getData(`photos/${nextId}`);
    const previousPhoto = this.apiService.getData(`photos/${previousId}`);

    return forkJoin([currentPhoto, nextPhoto, previousPhoto]).pipe(
      map(data => data)
    );
  }
}

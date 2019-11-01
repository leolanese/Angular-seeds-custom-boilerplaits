import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";

import { forkJoin } from "rxjs/internal/observable/forkJoin";

import { map } from "rxjs/operators";

@Injectable()
export class BridgeService {
  constructor(private apiService: ApiService) {}

  public getImage(id: number) {
    return this.apiService.get(`photos/${id}`).pipe(map(data => data));
  }

  public getImageAndThumbnails(id: number, nextId: number, previousId: number) {
    debugger
    const currentPhoto = this.apiService.get(`photos/${id}`);
    const nextPhoto = this.apiService.get(`photos/${nextId}`);
    const previousPhoto = this.apiService.get(`photos/${previousId}`);

    return forkJoin([currentPhoto, nextPhoto, previousPhoto]).pipe(
      map(data => data)
    );
  }
}

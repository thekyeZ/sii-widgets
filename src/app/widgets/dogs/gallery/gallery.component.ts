import { Component, OnInit } from '@angular/core';
import { CatGallery } from '../interfaces/cat';
import { CatGalleryService } from './cat-gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  breedsGallery!: CatGallery[];
  constructor(private galleryService: CatGalleryService) { }

  ngOnInit() {
    this.newCatpic();
  }

  newCatpic() {
    this.galleryService.getCatGallery().subscribe(galleryArray => {
      this.breedsGallery = galleryArray;
    });
  }
}


import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Image } from '../models/image.type';
import { FormsModule } from '@angular/forms';
// import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // message = signal('Message from home');
  // keyboardEvent(event: KeyboardEvent) {
  //   console.log(`User typed key ${event.key}`);
  // }
  // countValue = signal(0);
  // increment() {
  //   this.countValue.update((val) => val + 1);
  // }
  // decrement() {
  //   this.countValue.update((val) => val - 1);
  // }
  // reset() {
  //   this.countValue.set(0);
  // }

  private initialImages = [
    {
      id: 1,
      name: 'Image 1',
      imageUrl: 'https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP',
      selected: false,
      count: 0,
    },
    {
      id: 2,
      name: 'Image 2',
      imageUrl:
        'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg',
      selected: false,
      count: 0,
    },
    {
      id: 3,
      name: 'Image 3',
      imageUrl:
        'https://media.istockphoto.com/id/157681198/photo/dandelion-seed.jpg?s=612x612&w=0&k=20&c=TfhCtc_Y1oSpdlL7o6yo7BTfgnD0RCy6yF1SgvQO0Jk=',
      selected: false,
      count: 0,
    },
    {
      id: 4,
      name: 'Image 4',
      imageUrl:
        'https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=',
      selected: false,
      count: 0,
    },
    {
      id: 5,
      name: 'Image 5',
      imageUrl:
        'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg',
      selected: false,
      count: 0,
    },
    {
      id: 6,
      name: 'Image 6',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      selected: false,
      count: 0,
    },
  ];

  images = signal(this.initialImages);

  selectedImages = signal<number[]>([]);

  toggleSelection(item: { id: number; selected: boolean; count: number }) {
    const currentSelection = this.selectedImages();
    const images = [...this.images()];

    if (item.selected) {
      const newSelection = currentSelection.filter((id) => id !== item.id);
      this.selectedImages.set(newSelection);

      const imageToDeselect = images.find((img) => img.id === item.id);
      if (imageToDeselect) {
        imageToDeselect.selected = false;
        imageToDeselect.count = 0;
      }
    } else {
      const newSelection = [...currentSelection, item.id];
      this.selectedImages.set(newSelection);

      const imageToSelect = images.find((img) => img.id === item.id);
      if (imageToSelect) {
        imageToSelect.selected = true;
      }
    }

    this.updateCounts(images);
    this.images.set(images);
  }

  updateCounts(images: any[]) {
    const currentSelection = this.selectedImages();
    currentSelection.forEach((id, index) => {
      const selectedImage = images.find((img) => img.id === id);
      if (selectedImage) {
        selectedImage.count = index + 1;
      }
    });
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent {
  username = '';
  @Output() formData = new EventEmitter<string>();

  sendData(): void {
    this.formData.emit(this.username);
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {HouseService} from '../../../services/house.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  selectedFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private httpClient: HttpClient,
              private afStorage: AngularFireStorage,
              private houseService: HouseService) {
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.houseService.imageUrls = [];
    console.log(event.target.files);
    const files = event.target.files;
    for (const file of files) {
      const id = Math.random().toString(36).substring(2); // Create a random string
      this.ref = this.afStorage.ref(id);
      this.ref.put(file)
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
        })
        .then(downloadURL => {
          this.houseService.imageUrls.push(downloadURL);
          // this.giveURLtoCreate.emit(this.downloadURL);
          // console.log(downloadURL);
          // return downloadURL;
        })
        .catch(error => {
          // Use to signal error if something goes wrong.
          console.log(`Failed to upload file and get link - ${error}`);
        });
    }
    console.log(this.houseService.imageUrls);
  }

  onUpload() {
    const id = Math.random().toString(36).substring(2); // Create a random string
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectedFile)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
      })
      .then(downloadURL => {
        this.downloadURL = downloadURL;
        this.giveURLtoCreate.emit(this.downloadURL);
        // console.log(downloadURL);
        return downloadURL;
      })
      .catch(error => {
        // Use to signal error if something goes wrong.
        console.log(`Failed to upload file and get link - ${error}`);
      });
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';


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

  constructor(private httpClient: HttpClient, private afStorage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

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

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {HouseService} from '../../../services/house.service';
import {HouseRequest} from '../../../model/HouseRequest';
import {ImageOfHouse} from '../../../model/ImageOfHouse';
import {Observable} from 'rxjs';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import {finalize} from 'rxjs/operators';
import {HostService} from '../../../services/host.service';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  files: File[];
  ref: AngularFireStorageReference;
  percent = 0;
  index = 0;
  btn = 'Upload';
  totalFile = 0;

  constructor(private httpClient: HttpClient,
              private afStorage: AngularFireStorage,
              private hostService: HostService) {
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.files = event.target.files;
    this.totalFile = this.files.length;
    this.percent = 0;
    this.index = 0;
  }

  async onUpload() {
    try {
      this.hostService.imageUrls = [];
      this.index = 1;
      this.btn = 'Uploading';
      for (const file of this.files) {
        const id = Math.random().toString(36).substring(2); // Create a random string
        this.ref = this.afStorage.ref(id);
        // await
        const snapshot: UploadTaskSnapshot = await this.ref.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();

        this.hostService.imageUrls.push(downloadUrl);
        this.percent = Math.round(this.index / this.totalFile * 100);
        // prevent index++ when index=totalFile
        this.index = this.index === this.totalFile ? this.index : this.index + 1;
      }
    } catch (error) {
      console.log(`Failed to upload file and get link - ${error}`);
    }
    console.log(this.hostService.imageUrls);
    this.btn = 'Upload';
  }
}

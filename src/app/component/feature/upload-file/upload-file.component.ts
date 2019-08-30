import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import {HouseService} from '../../../services/house.service';
import {HouseRequest} from '../../../model/HouseRequest';
import {ImageOfHouse} from '../../../model/ImageOfHouse';
import {Observable} from 'rxjs';
import UploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  files: File[];
  ref: AngularFireStorageReference;
  uploadProgress: Observable<number>;
  task: AngularFireUploadTask;
  percent = 0;
  index = 0;
  imageUrls: string[] = [];
  totalFile: number;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private httpClient: HttpClient,
              private afStorage: AngularFireStorage,
              private houseService: HouseService) {
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
      this.houseService.imageUrls = [];
      this.index = 1;
      for (const file of this.files) {
        const id = Math.random().toString(36).substring(2); // Create a random string
        this.ref = this.afStorage.ref(id);
        // await
        const snapshot: UploadTaskSnapshot = await this.ref.put(file);
        const downloadUrl = await snapshot.ref.getDownloadURL();
        // let temp = 0;
        // temp = temp === 1 ? Math.round(snapshot.bytesTransferred / snapshot.totalBytes) - 1 :
        //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes);
        // this.percent = this.percent + temp * (100 / this.totalFile);

        // downloadUrl.then(next => {
        //   this.imageUrls.push(next);
        // });
        this.imageUrls.push(downloadUrl);
        this.percent = this.index / this.totalFile * 100;

        // no await
        // this.task = this.ref.put(file);
        // this.uploadProgress = this.task.percentageChanges();
        // let temp = 0;
        // this.task.snapshotChanges().subscribe(
        //   next => {
        //     temp = temp === 1 ? Math.round(next.bytesTransferred / next.totalBytes) - 1 :
        //       Math.round(next.bytesTransferred / next.totalBytes);
        //     this.percent = this.percent + temp * (100 / this.totalFile);
        //     this.houseService.imageUrls.push(next.downloadURL);
        //   });
        // this.task.snapshotChanges().pipe(
        //   finalize(() => {
        //     this.ref.getDownloadURL().subscribe(url =>
        //       this.imageUrls.push(url));
        //   })).subscribe();
        // -------------------
        this.index++;
      }
    } catch (error) {
      console.log(`Failed to upload file and get link - ${error}`);
    }
    console.log(this.imageUrls);
  }
}

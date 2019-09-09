import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../../services/house.service';
import {IHouse} from '../../../model/IHouse';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderHouse} from '../../../model/OrderHouse';
import {CommentService} from '../../../services/comment.service';
import {IComment} from '../../../model/IComment';
import {RateService} from '../../../services/rate.service';
import {IRate} from '../../../model/IRate';


@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  house: IHouse = {
    id: 0,
    houseName: '',
    category: '',
    address: '',
    bedroomNumber: 0,
    bathroomNumber: 0,
    price: 0,
    description: '',
    imageUrls: [],
    rate: 0,
    area: 0,
  };
  orderHouse = new OrderHouse();
  formOrder: FormGroup;

  time: Date = new Date();

  comments: IComment[] = [];
  comment: Partial<IComment> = {
    comment: '',
    house: {
      id: 0,
      houseName: '',
      category: '',
      address: '',
      bedroomNumber: 0,
      bathroomNumber: 0,
      price: 0,
      description: '',
      imageUrls: [],
      rate: 0,
      area: 0,
    }
  };
  rates: IRate[] = [];
  rate: Partial<IRate> = {
    rate: 0,
    house: {
      id: 0,
      houseName: '',
      category: '',
      address: '',
      bedroomNumber: 0,
      bathroomNumber: 0,
      price: 0,
      description: '',
      imageUrls: [],
      rate: 0,
      area: 0,
    }
  };

  rateChecked: number;

  constructor(private houseService: HouseService,
              private commentService: CommentService,
              private rateService: RateService,
              private route: ActivatedRoute,
              private router: Router) {
    this.formOrder = new FormGroup({
      checkin: new FormControl('', [Validators.required]),
      checkout: new FormControl('', [Validators.required]),
      numberGuest: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.time = new Date();
    // }, 1000);
    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.houseService.getHouseById(id)
        .subscribe(
          next => {
            this.house = next.data;
            console.log(next.data);
          },
          error => {
            console.log(error);
            this.house = null;
          });
      this.rateService.getRatesByHouseId(this.house.id).subscribe(data => {
          this.rates = data.data;
          console.log(this.rates);
          this.rateChecked = this.rateService.checkRates(this.rates);
        },
        error1 => {
          console.log(error1);
        });
      this.commentService.getCommentsByHouseId(id).subscribe(next => {
          this.comments = next.data;
          console.log(next.data);
        },
        error => {
          console.log(error);
          this.comments = null;
        });
    });
  }

  getNumberDay() {
    let numberDay;
    if (this.orderHouse.checkin && this.orderHouse.checkout) {
      const day = 86400 * 1000;
      let checkout = new Date(this.orderHouse.checkout);
      let checkin = new Date(this.orderHouse.checkin);
      numberDay = (checkout.getTime() - checkin.getTime()) / day;
    } else {
      numberDay = 1;
    }
    return numberDay;
  }


  booking() {
    if (!localStorage.getItem('currentUser')) {
      alert('Bạn cần phải dăng nhập để đặt nhà');
      this.router.navigateByUrl('/login');
    } else {
      if (this.formOrder.valid) {
        this.orderHouse.orderTime = new Date();
        this.orderHouse.cost = this.house.price * this.getNumberDay();
        this.houseService.bookingHouse(this.orderHouse, this.house.id).subscribe(
          next => {
            if (next.success) {
              alert(next.message);
              this.router.navigateByUrl('/me/orders');
            } else {
              alert(next.message);
            }

          }
        );
      }
    }
  }

  // myFilter = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };

  createComment() {
    this.comment.house = this.house;
    this.commentService.createComment(this.comment).subscribe(next => {
      console.log(this.comment);
      alert(next.message);
      this.comment = {
        comment: '',
        house: {
          id: 0,
          houseName: '',
          category: '',
          address: '',
          bedroomNumber: 0,
          bathroomNumber: 0,
          price: 0,
          description: '',
          imageUrls: [],
          rate: 0,
          area: 0,
        }
      };
    }, error => {
      console.log(error);
    });
  }

  createRate(i: number) {
    console.log(i);
    this.rate.house = this.house;
    this.rate.rate = i;
    this.rateService.createRate(this.rate).subscribe(next => {
        console.log(this.rate);
        alert(next.message);
      }
    );
  }
}

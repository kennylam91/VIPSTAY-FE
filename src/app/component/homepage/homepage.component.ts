import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {IHouse} from '../../model/IHouse';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // bestChoiceHouses: IHouse[] = [
  //   {
  //     id: 1, houseName: 'Premium Luxury', address: 'Binh Thanh, Ho Chi Minh, VietNam', bathroomNumber: 2, bedroomNumber: 2,
  //     description: 'Căn hộ penhouse 3 phòng ngủ với nội thất đẳng cấp và dịch vụ tiện nghi 5 sao! Hệ thống rạp phim tại gia siêu ' +
  //       'đỉnh, máy pha cà phê tiện lợi và ghế massage cho bạn thư giãn sau một ngày dài làm việc! Hơn thế nữa, khoảnh khắc ngắm nhìn' +
  //       ' thành phố lên đèn từ ban công hứa hẹn sẽ khiến bạn bất ngờ!\n',
  //     houseType: 'apartment', image: 'https://cdn.luxstay.com/rooms/19033/large/room_19033_97_1547110185.jpg',
  //     price: 2500000, rate: 3
  //   },
  //   {
  //     id: 2, houseName: 'Homelead_Flamingo', address: 'Phuc Yen, Vinh Phuc, VietNam', bathroomNumber: 4, bedroomNumber: 3,
  //     description: 'Villa Flamingo 02 phòng ngủ được thiết kế theo phong cách kiến trúc đương đại với các nét chấm phá tinh tế và góc cạnh. ' +
  //       'Mỗi góc nhìn tại đây đều mở ra không gian ngoài trời với cảnh quan tuyệt đẹp phía trước và khuôn viên vườn xanh mát',
  //     houseType: 'villa', image: 'https://cdn.luxstay.com/rooms/24653/large/room_24653_38_1563794487.jpg',
  //     price: 3600000, rate: 4
  //   },
  //   {
  //     id: 3, houseName: 'Tom\'s Valley', address: 'Da Lat, Lam Dong, VietNam', bathroomNumber: 1, bedroomNumber: 2,
  //     description: 'Căn hộ studio cực rộng áp mình bên sườn thung lũng, với 2 mặt kính nhìn ra không gian ngút ngàn phía dưới, ' +
  //       'thực sự là một trải nghiệm tuyệt vời',
  //     houseType: 'villa', image: 'https://cdn.luxstay.com/rooms/11978/large/1539665147_IMG-8631.JPG',
  //     price: 1000000, rate: 3.5
  //   },
  //   {
  //     id: 4, houseName: 'LUXURY APARTMENT', address: 'Lieu Giai, Ba Dinh, Ha Noi, VietNam', bathroomNumber: 2, bedroomNumber: 2,
  //     description: 'Căn hộ của chúng tôi ở tầng cao, view hồ, được trang bị đầy đủ nội thất sang trọng, diện tích 82m2, 2 phòng ngủ, ' +
  //       '2 phòng tắm, 1 không gian sinh hoạt rộng rãi và bếp tách biệt. Bacony với ánh nắng mặt trời và tầm nhìn tuyệt vời, an ninh 24/7 ' +
  //       'và đường dây nóng 24/7.',
  //     houseType: 'apartment', image: 'https://cdn.luxstay.com/rooms/23763/large/room_23763_30_1555683880.jpg',
  //     price: 1550000, rate: 4
  //   }
  //
  // ];
  bestChoiceHouses: IHouse[];
  bestSaleoffHouses = this.bestChoiceHouses;
  suggestionHouses = this.bestChoiceHouses;


  constructor(private houseService: HouseService) {

  }

  ngOnInit() {
    this.houseService.getHouses()
      .subscribe(next => {
        this.bestChoiceHouses = next;
        console.log(next);
      });
  }
}

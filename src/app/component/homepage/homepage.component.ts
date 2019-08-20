import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../house.service';
import {IHouse} from '../../model/IHouse';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  houses: IHouse[] = [
    {
      id: 1, houseName: 'Premium Luxury',
      address: 'Binh Thanh, Ho Chi Minh, VietNam', bathroomNumber: 2, bedroomNumber: 2,
      description: 'Căn hộ penhouse 3 phòng ngủ với nội thất đẳng cấp và dịch vụ tiện nghi 5 sao! Hệ thống rạp phim tại gia siêu ' +
        'đỉnh, máy pha cà phê tiện lợi và ghế massage cho bạn thư giãn sau một ngày dài làm việc! Hơn thế nữa, khoảnh khắc ngắm nhìn' +
        ' thành phố lên đèn từ ban công hứa hẹn sẽ khiến bạn bất ngờ!\n' + 'Bạn sẽ ngỡ như mình đang ở trung tâm của New York khi ' +
        'tận hưởng ban công riêng của căn hộ và ngắm nhìn thành phố khi nó lấp lánh sống động vào ban đêm. Ánh đèn bật lên trong ' +
        'các tòa nhà xung quanh một cách chậm chạp khi mặt trời lặn và thành phố như chìm trong sắc thái ấm áp của hoàng hôn màu ' +
        'hồng. Landmark81 rất gần, bạn sẽ cảm thấy như bạn có thể vươn ra và chạm vào nó. Bạn sẽ thực sự được tận hưởng một Sài Gòn' +
        ' của riêng bạn. Căn hộ được xây dựng với những tiện nghi tốt nhất trong khu vực. Với nội thất hoàn toàn mới, nơi bạn có thể ' +
        'kiểm soát khí hậu trong nhà của riêng bạn. Nhà bếp với các thiết bị tốt nhất và 3 phòng ngủ có kích thước lớn với khăn trải' +
        ' giường tốt nhất và đồ nội thất sang trọng để chiều chuộng bạn.', houseType: 'apartment',
      image: 'https://cdn.luxstay.com/rooms/19033/large/room_19033_97_1547110185.jpg', price: 2500.000, rate: 3
    }
  ];

  constructor(private houseService: HouseService) {

  }

  ngOnInit() {
    // this.houseService.getHouses()
    //   .subscribe(next => {
    //     this.houses = next;
    //   });

  }

}

import {Injectable} from '@angular/core';
import {IHouse} from './model/IHouse';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  listHouse: IHouse[] = [
    {
      id: 0,
      houseName: 'Trần Hiếu - HomeStay',
      houseType: 'Nhà siêu Vip',
      address: 'Ngõ 28,Số 39,Tăng Thiết Gíap',
      bedroomNumber: 2,
      bathroomNumber: 1,
      price: 1500000,
      description: 'Phòng riêng · 1 phòng tắm · 1 giường · 1 phòng ngủ · 2 khách (tối đa 2 khách)' +
        '\n' +
        '✔️ Mọi thứ đã đều được chuẩn bị tinh tươm cho bạn, từ giường ngủ thơm phức mùi ga gối mới tới bếp ăn đầy đủ tiện nghi\n' +
        '\n' +
        '✔️ Nơi đây sẽ khiến bạn cảm thấy ấm cúng và đầy đủ như đang ở tại chính ngôi nhà của mình vậy.\n' +
        '\n' +
        '✔️ Với một không gian nhiều màu sắc, view vô cùng đẹp khi nhìn ra khoảng không gian tuyệt vời phía xa\n' +
        '\n' +
        'Một căn homestay xa trung tâm nhưng Xóm lại mang trong mình một khung cảnh khá lãng mạn và đầy cỏ cây hoa lá. Chúng tôi luôn muốn mang đến cho bạn những điều tuyệt vời nhất khi đến với Xóm. Xóm gây ấn tượng mạnh với tất cả những ai từng đặt chân đến đây. Với một không gian nhiều màu sắc, view vô cùng đẹp khi nhìn ra khoảng không gian tuyệt vời phía xa. Bạn sẽ tha hồ sống ảo khi đến ở đây, tất cả đều được sắp xếp để mang lại cho bạn những trải nghiệm tuyệt vời.\n' +
        '\n' +
        'Nhân viên của chúng tôi chắc chắn là những người thân thiện và vô cùng mến khách. Luôn dành cho bạn nhiều lời hỏi han, những nụ cười tươi vào mỗi sáng hay bất cứ khi nào bạn gặp họ. Nơi này thích hợp cho những người thích sự bình yên, nhè nhẹ để tận hưởng cái mát se lạnh của Đà Lạt là hết bài luôn :))\n' +
        '\n' +
        '﻿Xóm homestay như kiểu một ngôi làng cầu vồng thu bé, trên cả mong đợi nên mình háo hức chia sẻ với mọi người. Xóm homestay với 7 căn nhà 7 màu xinh xắn. Không khí trong lành. Mỗi căn nhà được trang trí có 1 nét riêng biệt. Phòng ngủ sạch sẽ, thoáng mát, đồ dùng tất cả đều dễ thương, xinh xắn chỉ cần lần đầu đến đây là bạn có thể yêu được ngôi nhà của chúng tôi rồi đó.\n' +
        '\n' +
        '✔️ Mọi thứ đã đều được chuẩn bị tinh tươm cho bạn, từ giường ngủ thơm phức mùi ga gối mới tới bếp ăn đầy đủ tiện nghi\n' +
        '\n' +
        '✔️ Nơi đây sẽ khiến bạn cảm thấy ấm cúng và đầy đủ như đang ở tại chính ngôi nhà của mình vậy.\n' +
        '\n' +
        '✔️ Với một không gian nhiều màu sắc, view vô cùng đẹp khi nhìn ra khoảng không gian tuyệt vời phía xa\n' +
        '\n' +
        'Một căn homestay xa trung tâm nhưng Xóm lại mang trong mình một khung cảnh khá lãng mạn và đầy cỏ cây hoa lá. Chúng tôi luôn muốn mang đến cho bạn những điều tuyệt vời nhất khi đến với Xóm. Xóm gây ấn tượng mạnh với tất cả những ai từng đặt chân đến đây. Với một không gian nhiều màu sắc, view vô cùng đẹp khi nhìn ra khoảng không gian tuyệt vời phía xa. Bạn sẽ tha hồ sống ảo khi đến ở đây, tất cả đều được sắp xếp để mang lại cho bạn những trải nghiệm tuyệt vời.\n' +
        '\n' +
        'Nhân viên của chúng tôi chắc chắn là những người thân thiện và vô cùng mến khách. Luôn dành cho bạn nhiều lời hỏi han, những nụ cười tươi vào mỗi sáng hay bất cứ khi nào bạn gặp họ. Nơi này thích hợp cho những người thích sự bình yên, nhè nhẹ để tận hưởng cái mát se lạnh của Đà Lạt là hết bài luôn :))\n' +
        '\n' +
        '﻿Xóm homestay như kiểu một ngôi làng cầu vồng thu bé, trên cả mong đợi nên mình háo hức chia sẻ với mọi người. Xóm homestay với 7 căn nhà 7 màu xinh xắn. Không khí trong lành. Mỗi căn nhà được trang trí có 1 nét riêng biệt. Phòng ngủ sạch sẽ, thoáng mát, đồ dùng tất cả đều dễ thương, xinh xắn chỉ cần lần đầu đến đây là bạn có thể yêu được ngôi nhà của chúng tôi rồi đó.',
      image: 'src',
      rate: 5,
      area: 25
    },
    {
      id: 1, houseName: 'Dao Dat', houseType: 'nha cap 4', address: 'Nga Tu So',
      bedroomNumber: 7, bathroomNumber: 4, price: 4500000, description: 'Nha binh thuong', image: 'src', rate: 1, area: 30
    }
  ];

  constructor() {
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.scss'
})
export class DistrictsComponent {

  districts: any[] = [
    {
      id: 1,
      title: 'Thiruvananthapuram',
      description: 'Thiruvananthapuram, the capital city of Kerala.',
      image: 'https://media.istockphoto.com/id/510698174/photo/beach-in-thiruvananthapuram.jpg?s=612x612&w=0&k=20&c=6XZx-h3IBycESwKMP5J-k-tlic741vPkGPQICM6vFuM='
    },
    {
      id: 2,
      title: 'Kollam',
      description: 'Kollam, known for its cashew industry and Ashtamudi Lake.',
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg'
    },
    {
      id: 3,
      title: 'Pathanamthitta',
      description: 'Pathanamthitta, famous for the Sabarimala temple.',
      image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2023/09/Pathanamthitta-Cover.jpg'
    },
    {
      id: 4,
      title: 'Alappuzha',
      description: 'Alappuzha, also known as Alleppey, renowned for its backwaters and houseboat cruises.',
      image: 'data:image/jpeg;base64,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'
    },
    {
      id: 5,
      title: 'Kottayam',
      description: 'Kottayam, known for its literacy rate and rubber plantations.',
      image: 'https://wallpapercave.com/wp/wp9679140.jpg'
    },
    {
      id: 6,
      title: 'Idukki',
      description: 'Idukki, famous for its hill stations and the Idukki Dam.',
      image: 'https://wallpapercave.com/wp/wp8550069.jpg'
    },
    {
      id: 7,
      title: 'Ernakulam',
      description: 'Ernakulam, the commercial capital of Kerala.',
      image: 'https://wallpapercave.com/wp/wp12449040.jpg'
    },
    {
      id: 8,
      title: 'Thrissur',
      description: 'Thrissur, known as the cultural capital of Kerala.',
      image: 'https://wallpapercave.com/wp/wp8236077.jpg'
    },
    {
      id: 9,
      title: 'Palakkad',
      description: 'Palakkad, known for its paddy fields and the Palakkad Fort.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDxGxRTbhPPp1GeijrFQULojk_we5rpl21zg&s'
    },
    {
      id: 10,
      title: 'Malappuram',
      description: 'Malappuram, known for its rich history and cultural heritage.',
      image: 'https://www.keralatourism.org/images/enchanting_kerala/large/thirunavaya_malappuram20230105140626_1260_1.jpg'
    },
    {
      id: 11,
      title: 'Kozhikode',
      description: 'Kozhikode, historically known as Calicut, famous for its cuisine and historical sites.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqww4Mfve3oRf7OaPv4s-IDL87WPu9Qo4JA&s'
    },
    {
      id: 12,
      title: 'Wayanad',
      description: 'Wayanad, renowned for its wildlife sanctuaries and spice plantations.',
      image: 'https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Ftestimage--wayanad%20(2).jpg&w=3840&q=75'
    },
    {
      id: 13,
      title: 'Kannur',
      description: 'Kannur, famous for its theyyam performances and beaches.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPDKUwYQvUkLLOU-NvwfP73AHa7qYzNVfEA&s'
    },
    {
      id: 14,
      title: 'Kasaragod',
      description: 'Kasaragod, known for its coir and handloom industries.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWX0MUGgvRtkH1CQGmFetfVbGKjQWSN_J-Q&s'
    }
  ];
}

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
      image: 'https://media.assettype.com/outlooktraveller%2F2024-04%2Fa55bd435-e042-4d86-ac84-5b55354da6cd%2Falapuzha_boats.jpg'
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-detail',
  standalone: true,
  imports: [],
  templateUrl: './district-detail.component.html',
  styleUrl: './district-detail.component.scss',
})
export class DistrictDetailComponent implements OnInit {
  district: any;

  districts: any[] = [
    {
      title: 'Thiruvananthapuram',
      zone: 'South',
      telephoneAccessCode: '+91 471',
      description:
        'Thiruvananthapuram, the capital city of Kerala, is known for its rich cultural heritage and scenic beauty. It is home to various historical landmarks, beautiful beaches, and the iconic Kovalam beach.',
      touristInformationOffices: [
        {
          name: 'District Tourism Promotion Council (DTPC), Thiruvananthapuram',
          phone: '+91 471 2315397',
          email: 'info@dtpcthiruvananthapuram.com',
          website: 'www.dtpcthiruvananthapuram.com',
        },
        {
          name: 'Kerala Tourism Information Centre, Thiruvananthapuram',
          phone: '+91 471 2321132',
          email: 'info@keralatourism.org',
          website: 'www.keralatourism.org',
        },
      ],
      gettingThere: {
        byRoad:
          'Thiruvananthapuram Central Bus Station, Enquiry Ph: 0471-2334470',
        byRail:
          'Thiruvananthapuram Central Railway Station, Enquiry Ph: 0471-2321205',
        byAir: 'Trivandrum International Airport (6 km from city)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '2,192 sq. km',
        population: '3,301,427 (2011 census)',
      },
    },
    {
      title: 'Kollam',
      zone: 'North',
      telephoneAccessCode: '+91 474',
      description:
        'One of the premier trade capitals of the Old World, Kollam is the centre of the country’s cashew trading and processing industry. Extolled by Marco Polo and Ibn Batuta in glowing terms, this was once a famous port of international spice trade. This historic town is home to the celebrated Ashtamudi Lake, making it a gateway to the breath-taking backwaters of Kerala. The eight-hour boat trip between Kollam and Alappuzha is the longest and most enchanting experience on the backwaters of Kerala. The momentous decision to introduce a new Malayalam era was convened at Kollam and hence the Malayalam calendar came to be known as kollavarsham.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2745625',
        },
        {
          name: 'DTPC Tourist Office, KSWTD, Boat Jetty',
          phone: '2745625, 2750170',
          email: 'info@dtpckollam.com',
          website: 'www.dtpckollam.com',
        },
        {
          name: 'Department of Tourism - District Office, Govt. Guest House',
          phone: '2743620',
        },
        {
          name: 'Thenmala Ecotourism Promotion Society',
          phone: '+91 475 2344800',
          website: 'www.thenmalaecotourism.com',
        },
      ],
      gettingThere: {
        byRoad: 'Kollam KSRTC, Central Bus Station, Enquiry Ph: 2752008',
        byRail: 'Kollam Junction Railway Station, Enquiry Ph: 131',
        byAir: 'Thiruvananthapuram (71 km)',
        byWater:
          'Kollam Boat Jetty, is adjacent to the Central Bus Station (3 km from the railway station)',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '2,579 sq. km',
        population: '1,204,078 (2011 census)',
      },
    },
    {
      title: 'Pathanamthitta',
      zone: 'Central',
      telephoneAccessCode: '+91 468',
      description:
        'Pathanamthitta is known for its religious landmarks and natural beauty. It is home to the famous Sabarimala temple, a major pilgrimage destination. The district is blessed with lush greenery, rivers, and forested hills.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2223615',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '22223615',
          email: 'dtpcpta@gmail.com',
        },
      ],
      gettingThere: {
        byRoad:
          'Pathanamthitta KSRTC, Central Bus Station, Enquiry Ph: 22223615',
        byRail: 'Thiruvalla Railway Station (30 km)',
        byAir: 'Cochin International Airport (142 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '900 m above sea level',
        area: '2,637 sq. km',
        population: '1,197,412 (2011 census)',
      },
    },
    {
      title: 'Alappuzha',
      zone: 'Central',
      telephoneAccessCode: '+91 477',
      description:
        "Alappuzha, also known as Alleppey, is famous for its backwaters, houseboat cruises, and vibrant snake boat races. It is often referred to as the 'Venice of the East' due to its intricate network of canals and lagoons.",
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2253308',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2253308',
          email: 'dtpcallpy@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Alappuzha KSRTC, Central Bus Station, Enquiry Ph: 2253308',
        byRail: 'Alappuzha Railway Station, Enquiry Ph: 1331',
        byAir: 'Cochin International Airport (78 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '1,414 sq. km',
        population: '2,127,789 (2011 census)',
      },
    },
    {
      title: 'Kottayam',
      zone: 'Central',
      telephoneAccessCode: '+91 481',
      description:
        'Kottayam is known for its scenic landscapes, rubber plantations, and historical significance. It has one of the highest literacy rates in India and is home to many educational institutions and cultural centers.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2562908',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2562908',
          email: 'dtpcottayam@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Kottayam KSRTC, Central Bus Station, Enquiry Ph: 2562908',
        byRail: 'Kottayam Railway Station, Enquiry Ph: 131',
        byAir: 'Cochin International Airport (90 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '3 m above sea level',
        area: '2,203 sq. km',
        population: '1,974,551 (2011 census)',
      },
    },
    {
      title: 'Idukki',
      zone: 'Central',
      telephoneAccessCode: '+91 486',
      description:
        'Idukki is known for its mountainous terrain, hill stations, and diverse wildlife. It is home to the famous Idukki Dam, one of the largest arch dams in Asia, and several wildlife sanctuaries.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2322483',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2322483',
          email: 'dtpcidukki@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Idukki KSRTC, Central Bus Station, Enquiry Ph: 2322483',
        byRail:
          'Kottayam Railway Station (114 km. Nearest railway station to Idukki.',
        byAir: 'Cochin International Airport (97 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '1,200 m above sea level',
        area: '4,479 sq. km',
        population: '1,108,974 (2011 census)',
      },
    },
    {
      title: 'Ernakulam',
      zone: 'Central',
      telephoneAccessCode: '+91 484',
      description:
        'Ernakulam, often referred to as the commercial capital of Kerala, is known for its modern infrastructure, shopping malls, and vibrant city life. It is a major financial and industrial hub and also a gateway to the picturesque backwaters of Kochi.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2353234',
        },
        {
          name: 'DTPC Tourist Office, Marine Drive',
          phone: '2353234',
          email: 'dtpcernakulam@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Ernakulam KSRTC, Central Bus Station, Enquiry Ph: 2372033',
        byRail: 'Ernakulam Junction Railway Station, Enquiry Ph: 131',
        byAir: 'Cochin International Airport (29 km)',
        byWater: 'Cochin Port',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '3,068 sq. km',
        population: '3,282,388 (2011 census)',
      },
    },
    {
      title: 'Thrissur',
      zone: 'Central',
      telephoneAccessCode: '+91 487',
      description:
        'Thrissur, also known as the cultural capital of Kerala, is famous for its cultural festivals, particularly the Thrissur Pooram festival. It is also known for its temples, churches, and mosques, as well as its vibrant cultural and religious traditions.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2422020',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2422020',
          email: 'dtpcthrissur@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Thrissur KSRTC, Central Bus Station, Enquiry Ph: 2420200',
        byRail: 'Thrissur Railway Station, Enquiry Ph: 131',
        byAir: 'Cochin International Airport (50 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '2.83 m above sea level',
        area: '3,032 sq. km',
        population: '3,110,327 (2011 census)',
      },
    },
    {
      title: 'Palakkad',
      zone: 'Central',
      telephoneAccessCode: '+91 491',
      description:
        "Palakkad, known as the 'Gateway of Kerala', is renowned for its paddy fields, palm trees, and traditional villages. It is an important agricultural hub and home to the Silent Valley National Park, a biodiversity hotspot.",
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2520098',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2520098',
          email: 'dtpcpalakkad@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Palakkad KSRTC, Central Bus Station, Enquiry Ph: 2520098',
        byRail: 'Palakkad Junction Railway Station, Enquiry Ph: 131',
        byAir: 'Coimbatore International Airport (52 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '84 m above sea level',
        area: '4,482 sq. km',
        population: '2,810,892 (2011 census)',
      },
    },
    {
      title: 'Malappuram',
      zone: 'Central',
      telephoneAccessCode: '+91 483',
      description:
        'Malappuram is known for its rich cultural heritage and historical significance. It is home to various cultural festivals, traditional sports like Vallam Kali (boat race), and the famous Kottakkunnu, a scenic hill garden.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2734977',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2734977',
          email: 'dtpcmalappuram@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Malappuram KSRTC, Central Bus Station, Enquiry Ph: 2734977',
        byRail: 'Angadipuram Railway Station (17 km)',
        byAir: 'Calicut International Airport (36 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '35 m above sea level',
        area: '3,544 sq. km',
        population: '4,112,920 (2011 census)',
      },
    },
    {
      title: 'Kozhikode',
      zone: 'North',
      telephoneAccessCode: '+91 495',
      description:
        'Kozhikode, also known as Calicut, is historically significant as the place where Vasco da Gama first landed in India. It is known for its serene beaches, historic sites, and delicious cuisine, particularly the Kozhikode biryani.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2720012',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2720012',
          email: 'dtpckozhikode@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Kozhikode KSRTC, Central Bus Station, Enquiry Ph: 2720012',
        byRail: 'Kozhikode Railway Station, Enquiry Ph: 131',
        byAir: 'Calicut International Airport (28 km)',
        byWater: 'Kozhikode Port',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '2,345 sq. km',
        population: '3,086,293 (2011 census)',
      },
    },
    {
      title: 'Wayanad',
      zone: 'North',
      telephoneAccessCode: '+91 493',
      description:
        'Wayanad is known for its lush greenery, wildlife sanctuaries, and beautiful landscapes. It is a popular hill station destination with attractions like Edakkal Caves, Soochipara Waterfalls, and Wayanad Wildlife Sanctuary.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2420089',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2420089',
          email: 'dtpcwayanad@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Wayanad KSRTC, Central Bus Station, Enquiry Ph: 2420089',
        byRail: 'Kozhikode Railway Station (73 km)',
        byAir: 'Calicut International Airport (87 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: '700 m above sea level',
        area: '2,131 sq. km',
        population: '816,558 (2011 census)',
      },
    },
    {
      title: 'Kannur',
      zone: 'North',
      telephoneAccessCode: '+91 497',
      description:
        'Kannur, historically known as Cannanore, is famous for its vibrant Theyyam performances, beautiful beaches, and historic forts. It is a city rich in cultural heritage and natural beauty.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2706336',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2706336',
          email: 'dtpckannur@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Kannur KSRTC, Central Bus Station, Enquiry Ph: 2706336',
        byRail: 'Kannur Railway Station, Enquiry Ph: 131',
        byAir: 'Kannur International Airport (25 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '2,996 sq. km',
        population: '2,523,003 (2011 census)',
      },
    },
    {
      title: 'Kasaragod',
      zone: 'North',
      telephoneAccessCode: '+91 499',
      description:
        'Kasargod, located in the northernmost part of Kerala, is known for its coir and handloom industries. It is home to the historic Bekal Fort, picturesque beaches, and various cultural festivals.',
      touristInformationOffices: [
        {
          name: 'DTPC Tourist Information Centre, KSRTC Bus Stand',
          phone: '2301214',
        },
        {
          name: 'DTPC Tourist Office, Boat Jetty',
          phone: '2301214',
          email: 'dtpckasargod@gmail.com',
        },
      ],
      gettingThere: {
        byRoad: 'Kasargod KSRTC, Central Bus Station, Enquiry Ph: 2301214',
        byRail: 'Kasargod Railway Station, Enquiry Ph: 131',
        byAir: 'Mangalore International Airport (61 km)',
        byWater: '',
      },
      geographicalInformation: {
        altitude: 'Sea level',
        area: '1,992 sq. km',
        population: '1,307,375 (2011 census)',
      },
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const districtName = this.route.snapshot.paramMap.get('title');
    if (districtName) {
      this.district = this.districts.find(
        (d) => d.title.toLowerCase() === districtName.toLowerCase()
      );
    }
  }
}

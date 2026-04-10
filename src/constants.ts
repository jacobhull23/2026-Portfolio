import { Experience, Project, Writing } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Riot Games',
    role: 'Senior Game Producer',
    period: '2021 - Present',
    description: 'Leading production efforts on high-stakes competitive titles, focusing on player experience and technical excellence.',
    achievements: [
      'Managed cross-functional teams for VALORANT live operations.',
      'Driving production strategy for 2XKO, Riot\'s upcoming fighting game.',
      'Optimized development pipelines for global scale.'
    ]
  },
  {
    id: '2',
    company: 'ZA/UM Studio',
    role: 'Game Producer',
    period: '2020 - 2021',
    description: 'Oversaw development of "Zero Parades", ensuring creative vision alignment with production milestones.',
    achievements: [
      'Facilitated collaboration between narrative and technical teams.',
      'Managed external partnerships and localization pipelines.',
      'Streamlined sprint planning for complex narrative systems.'
    ]
  },
  {
    id: '3',
    company: 'TT Games',
    role: 'Game Producer',
    period: '2016 - 2020',
    description: 'Produced major titles in the LEGO franchise, managing large-scale IP partnerships and multi-platform launches.',
    achievements: [
      'Delivered LEGO Star Wars: The Skywalker Saga, the most ambitious LEGO game to date.',
      'Managed an unannounced LEGO title involving a major IP partnership (cancelled).',
      'Coordinated with Warner Bros. and IP holders on brand alignment.'
    ]
  },
  {
    id: '4',
    company: 'KPV LAB',
    role: 'Producer',
    period: '2014 - 2016',
    description: 'Led the development of a cutting-edge data visualization and timeline platform.',
    achievements: [
      'Bridged the gap between data science and user interface design.',
      'Managed the full product lifecycle from concept to deployment.',
      'Implemented agile methodologies in a research-heavy environment.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'VALORANT',
    role: 'Producer',
    year: 'Live',
    description: 'A character-based 5v5 tactical shooter where precise gunplay meets unique agent abilities.',
    tags: ['Riot Games', 'Tactical Shooter', 'Live Ops'],
    imageUrl: 'https://assetsio.gnwcdn.com/valorant-review-exacting-infuriating-sublime-1593424502084.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp',
    studioLogoUrl: 'https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg',
    gameLogoUrl: 'https://www.pngall.com/wp-content/uploads/13/Valorant-Logo-PNG-Cutout.png',
    color: '#ff4655'
  },
  {
    id: 'p2',
    title: '2XKO',
    role: 'Producer',
    year: '2025 - Live',
    description: 'Riot Games\' upcoming 2v2 tag-team fighting game set in the League of Legends universe.',
    tags: ['Riot Games', 'Fighting Game', 'Competitive'],
    imageUrl: 'https://wiki.play2xko.com/en-us/images/2XKO_Cover.jpg?302f5',
    studioLogoUrl: 'https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg',
    gameLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2XKO_game_logo.svg/960px-2XKO_game_logo.svg.png',
    color: '#f8d44c'
  },
  {
    id: 'p3',
    title: 'Zero Parades',
    role: 'Producer',
    year: '2022 - 2025',
    description: 'An unannounced project from the creators of Disco Elysium at ZA/UM.',
    tags: ['ZA/UM', 'Narrative', 'RPG'],
    imageUrl: 'https://assetsio.gnwcdn.com/zero-parades-release-date.jpg',
    studioLogoUrl: 'https://discoelysium.wiki.gg/images/thumb/Logo-zaum-shadow.png/234px-Logo-zaum-shadow.png?17b171',
    gameLogoUrl: 'https://www.gematsu.com/wp-content/uploads/2025/09/ZERO-PARADES-For-Dead-Spies_2025_09-24-25_012.png',
    color: '#ff7e33'
  },
  {
    id: 'p-disco',
    title: 'Disco Elysium',
    role: 'Producer',
    year: '2022 - 2025',
    description: 'Post-launch support, new game modes, and technical production for the mobile version of the award-winning RPG.',
    tags: ['ZA/UM', 'RPG', 'Live Ops'],
    imageUrl: 'https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/10/disco-elysium-visual-calculus.jpg',
    studioLogoUrl: 'https://discoelysium.wiki.gg/images/thumb/Logo-zaum-shadow.png/234px-Logo-zaum-shadow.png?17b171',
    gameLogoUrl: 'https://shop.discoelysium.com/cdn/shop/t/4/assets/logo-image-file.png?v=49948319634983917661608219677',
    color: '#ff7e33'
  },
  {
    id: 'p4',
    title: 'LEGO Star Wars: The Skywalker Saga',
    role: 'Producer',
    year: '2020 - 2022',
    description: 'The biggest LEGO Star Wars game ever, featuring all nine films in the Skywalker Saga.',
    tags: ['TT Games', 'Action-Adventure', 'Open World'],
    imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt0b1227cdd53c73b3/XL_hero_Gameplay_trailer_desktop.png',
    studioLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/TT_Games.png',
    gameLogoUrl: 'https://www.jennystroom.nl/img/LEGOSWTSS.png',
    color: '#ffd500'
  },
  {
    id: 'p5',
    title: 'Unannounced LEGO Project',
    role: 'Producer',
    year: 'Cancelled',
    description: 'A major IP partnership title that pushed the boundaries of the LEGO game formula.',
    tags: ['TT Games', 'Major IP', 'Prototype'],
    imageUrl: 'https://wallpapercave.com/wp/wp10794347.jpg',
    studioLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/TT_Games.png',
    color: '#ffd500'
  },
  {
    id: 'p6',
    title: 'Timeline Platform',
    role: 'Producer',
    year: '2017 - 2020',
    description: 'A sophisticated data visualization tool for exploring historical and real-time datasets, specifically focused on literature.',
    tags: ['KPV LAB', 'Data Vis', 'Platform'],
    imageUrl: 'https://picsum.photos/seed/pencil-sketch-drawing/1920/1080',
    studioLogoUrl: 'https://kpv-lab.co.uk/static/cover2.jpg',
    color: '#115e59'
  }
];

export const WRITINGS: Writing[] = [
  {
    id: 'w1',
    title: 'The Production of Play: Managing Creative Chaos',
    publication: 'GameDev Insights',
    date: '2023',
    link: '#',
    category: 'Production'
  },
  {
    id: 'w2',
    title: 'Why Narrative Games Need Better Production Pipelines',
    publication: 'Industry Quarterly',
    date: '2021',
    link: '#',
    category: 'Analysis'
  },
  {
    id: 'w3',
    title: 'The Future of IP Partnerships in Gaming',
    publication: 'Media Trends',
    date: '2019',
    link: '#',
    category: 'Business'
  }
];

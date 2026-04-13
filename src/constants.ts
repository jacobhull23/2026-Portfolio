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
    role: 'Advanced Producer',
    focusArea: 'Personalisation & Player Expression',
    year: '2025–Present · Live',
    description: 'Led cross-functional delivery of systems enabling player identity and expression across a global player base. Balanced player motivation, engagement, and monetisation to support long-term retention and meaningful player choice.',
    tags: ['Riot Games', 'Tactical Shooter', 'Live Ops'],
    imageUrl: 'https://assetsio.gnwcdn.com/valorant-review-exacting-infuriating-sublime-1593424502084.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp',
    studioLogoUrl: 'https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg',
    gameLogoUrl: 'https://www.pngall.com/wp-content/uploads/13/Valorant-Logo-PNG-Cutout.png',
    color: '#fb5057',
    logoScale: 2.0
  },
  {
    id: 'p2',
    title: '2XKO',
    role: 'Advanced Producer',
    focusArea: 'Social, Safety & Trust Systems',
    year: '2025–Present · Live',
    description: 'Led regional delivery in Sydney, driving cross-functional development from Closed Beta through launch and into live operations. Worked closely with player communities and global teams to shape safety, reporting, and social systems at scale.',
    tags: ['Riot Games', 'Fighting Game', 'Competitive'],
    imageUrl: 'https://wiki.play2xko.com/en-us/images/2XKO_Cover.jpg?302f5',
    studioLogoUrl: 'https://www.riotgames.com/darkroom/800/87521fcaeca5867538ae7f46ac152740:2f8144e17957078916e41d2410c111c3/002-rg-2021-full-lockup-offwhite.jpg',
    gameLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2XKO_game_logo.svg/960px-2XKO_game_logo.svg.png',
    color: '#2596be',
    logoScale: 1.1
  },
  {
    id: 'p3',
    title: 'ZERO PARADES',
    role: 'Senior Producer',
    focusArea: 'Core Development',
    year: '2022–2025 · Released',
    description: 'Established production structure and delivery processes for a globally distributed team building a new isometric RPG. Worked closely with leadership to align scope, teams, and workflows during early-stage development and into full production.',
    tags: ['ZA/UM', 'Narrative', 'RPG'],
    imageUrl: 'https://assetsio.gnwcdn.com/zero-parades-release-date.jpg',
    studioLogoUrl: 'https://discoelysium.wiki.gg/images/thumb/Logo-zaum-shadow.png/234px-Logo-zaum-shadow.png?17b171',
    gameLogoUrl: 'https://www.gematsu.com/wp-content/uploads/2025/09/ZERO-PARADES-For-Dead-Spies_2025_09-24-25_012.png',
    color: '#facc15',
    logoScale: 1.1
  },
  {
    id: 'p-disco',
    title: 'Disco Elysium',
    role: 'Technical Producer',
    year: '2022–2024 · Post-Launch',
    description: 'Led technical delivery of post-launch content, including new dialogue, voice integration, and additional features. Coordinated creative and technical teams to ship updates while maintaining quality and stylistic consistency.',
    tags: ['ZA/UM', 'RPG', 'Live Ops'],
    imageUrl: 'https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/10/disco-elysium-visual-calculus.jpg',
    studioLogoUrl: 'https://discoelysium.wiki.gg/images/thumb/Logo-zaum-shadow.png/234px-Logo-zaum-shadow.png?17b171',
    gameLogoUrl: 'https://shop.discoelysium.com/cdn/shop/t/4/assets/logo-image-file.png?v=49948319634983917661608219677',
    color: '#ff6b00',
    logoScale: 1.1
  },
  {
    id: 'p4',
    title: 'LEGO Star Wars: The Skywalker Saga',
    role: 'Producer',
    focusArea: 'Multi-Team Delivery',
    year: '2020–2022 · Released',
    description: 'Coordinated delivery across multiple discipline teams on a large-scale licensed title, supporting milestone planning and execution. Managed dependencies and stakeholder alignment, including collaboration with external licensors.',
    tags: ['TT Games', 'Action-Adventure', 'Open World'],
    imageUrl: 'https://www.lego.com/cdn/cs/set/assets/blt0b1227cdd53c73b3/XL_hero_Gameplay_trailer_desktop.png',
    studioLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/TT_Games.png',
    gameLogoUrl: 'https://www.jennystroom.nl/img/LEGOSWTSS.png',
    color: '#d11013',
    logoScale: 1.2
  },
  {
    id: 'p5',
    title: 'Unannounced LEGO Project',
    role: 'Project Coordinator',
    focusArea: 'Cross-Functional Teams',
    year: '2020–2021 · Cancelled',
    description: 'Supported development across multiple teams on a large-scale licensed title, driving coordination and production planning. Worked across disciplines to maintain alignment, visibility, and delivery momentum in a complex production environment.',
    tags: ['TT Games', 'Major IP', 'Prototype'],
    imageUrl: 'https://wallpapercave.com/wp/wp10794347.jpg',
    studioLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/TT_Games.png',
    color: '#ffd500'
  },
  {
    id: 'p6',
    title: 'Timeline Platform',
    role: 'Product Manager',
    year: '2017–2020 · In Development',
    description: 'Defined product direction and led development of a data visualisation platform from concept through delivery. Worked closely with engineers to shape core features, user experience, and scalable product foundations.',
    tags: ['KPV LAB', 'Data Vis', 'Platform'],
    imageUrl: 'https://uwaterloo.ca/writing-and-communication-centre/sites/default/files/uploads/images/old_books.jpg',
    studioLogoUrl: 'https://kpv-lab.co.uk/static/cover2.jpg',
    color: '#0ea5e9'
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

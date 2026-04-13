import { Experience, Project, Writing } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Riot Games',
    role: 'Advanced Producer · Program / Delivery Lead',
    period: '2025–Present',
    description: 'Leading cross-functional delivery across globally distributed teams on live and in-development titles, including VALORANT and 2XKO.',
    achievements: [
      'Owned regional delivery for 2XKO in Sydney, driving development from Closed Beta through launch and into live operations',
      'Led player-facing systems across personalisation, social, and Trust & Safety domains, partnering with engineering, product, legal, and compliance',
      'Coordinated multi-region teams (US, APAC) to deliver platform systems, compliance features, and live service capabilities at scale'
    ]
  },
  {
    id: '2',
    company: 'ZA/UM Studio',
    role: 'Technical Producer → Senior Producer',
    period: '2022–2025',
    description: 'Joined at project inception to help shape product direction and establish scalable production systems across a globally distributed studio.',
    achievements: [
      'Designed and implemented a cross-functional operating model, aligning ~70 developers into Agile feature teams',
      'Improved delivery predictability and reduced roadmap timelines by transitioning from waterfall to cross-functional execution',
      'Managed and coached 4 producers, while partnering with leadership on scope, planning, and resource allocation'
    ]
  },
  {
    id: '3',
    company: 'TT Games (Warner Bros.)',
    role: 'Producer',
    period: '2020–2022',
    description: 'Delivered large-scale AAA titles within a multi-team production environment, working across internal teams and external licensors.',
    achievements: [
      'Coordinated cross-functional teams (LEGO, Audio, VFX, gameplay) to deliver LEGO Star Wars: The Skywalker Saga',
      'Managed dependencies, milestone planning, and stakeholder alignment across complex production pipelines',
      'Partnered with licensors (Lucasfilm, Disney, Warner Bros., LEGO) to ensure IP compliance and approval alignment'
    ]
  },
  {
    id: '4',
    company: 'KPV LAB',
    role: 'Product Manager (Lead Online Producer → Product Manager)',
    period: '2017–2020',
    description: 'Early team member shaping product direction and delivery for a data visualisation platform from concept through scale.',
    achievements: [
      'Defined product vision and core user experience, working directly with engineers on platform systems and architecture',
      'Established delivery processes and workflows in an R&D environment, enabling scalable product development',
      'Led recruitment and management of a small cross-functional team, supporting growth from early concept to funded product'
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
    focusArea: 'Post-Launch',
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
    title: 'Survival of the Fittest: How Developer Abstraction Games Evolved to Get ARK on PlayStation',
    publication: 'Push Square',
    date: 'Dec 2016',
    link: 'https://www.pushsquare.com/news/2016/12/feature_how_abstraction_games_evolved_to_get_ark_on_ps4',
    category: 'Development Story'
  },
  {
    id: 'w2',
    title: 'Shadow Warrior 2: Not Silent, Very Deadly',
    publication: 'Official PlayStation Magazine',
    date: 'Preview',
    link: '#',
    category: 'Preview'
  },
  {
    id: 'w3',
    title: 'Ni no Kuni: Wrath of the White Witch Review',
    publication: 'Push Square',
    date: 'Review',
    link: 'https://www.pushsquare.com/reviews/ps4/ni_no_kuni_wrath_of_the_white_witch_remastered',
    category: 'Review'
  }
];

import { Experience, Project, Writing } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Riot Games',
    logoUrl: '/portfolio-images/riot_games_logo.png',
    role: 'Producer II',
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
    logoUrl: '/portfolio-images/zaum_studio_logo.png',
    role: 'Senior Producer',
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
    logoUrl: '/portfolio-images/tt_games_logo.png',
    role: 'Associate Producer',
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
    logoUrl: '/portfolio-images/kpv_lab_logo.jpg',
    role: 'Product Manager',
    period: '2017–2020',
    description: 'Early team member shaping product direction and delivery for a data visualisation platform from concept through scale.',
    achievements: [
      'Defined product vision and core user experience, working directly with engineers on platform systems and architecture',
      'Established delivery processes and workflows in an R&D environment, enabling scalable product development',
      'Led recruitment and management of a small cross-functional team, supporting growth from early concept to funded product'
    ]
  },
  {
    id: '5',
    company: 'Push Square / Official PlayStation Magazine',
    logoUrl: '/portfolio-images/push_square_logo.png',
    role: 'Freelance Games Journalist',
    period: '2013–2020',
    description: 'Authored 100+ articles covering news, reviews, interviews, and studio features across leading UK PlayStation publications.',
    achievements: [
      'Covered major industry events including Gamescom, Tokyo Game Show, and E3, delivering rapid-turnaround news and features',
      'Developed strong audience awareness and editorial discipline through high-volume content production and community engagement',
      'Gained deep insight into player communities and industry trends through critical analysis and direct studio engagement'
    ],
    link: {
      text: 'View Full Article Portfolio',
      url: '/archive'
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'VALORANT',
    role: 'Producer II',
    focusArea: 'Personalisation & Player Expression',
    year: '2025–Present · Live',
    description: 'Led cross-functional delivery of systems enabling player identity and expression across a global player base. Balanced player motivation, engagement, and monetisation to support long-term retention and meaningful player choice.',
    tags: ['Riot Games', 'Tactical Shooter', 'Live Ops'],
    imageUrl: '/portfolio-images/valorant_background.jpg',
    studioLogoUrl: '/portfolio-images/riot_games_logo.png',
    gameLogoUrl: '/portfolio-images/valorant_game_logo.png',
    color: '#0f1923',
    logoScale: 2.0,
    platforms: ['PC', 'PS5', 'Xbox Series X/S'],
    videoUrl: 'https://www.youtube.com/watch?v=AnGdzz-XWcE',
    websiteUrl: 'https://playvalorant.com/en-us/',
    criticScore: 81,
    criticUrl: 'https://opencritic.com/game/9573/valorant'
  },
  {
    id: 'p2',
    title: '2XKO',
    role: 'Producer II',
    focusArea: 'Social, Safety & Trust Systems',
    year: '2025–Present · Live',
    description: 'Led regional delivery in Sydney, driving cross-functional development from Closed Beta through launch and into live operations. Worked closely with player communities and global teams to shape safety, reporting, and social systems at scale.',
    tags: ['Riot Games', 'Fighting Game', 'Competitive'],
    imageUrl: '/portfolio-images/2xko_background.jpg',
    studioLogoUrl: '/portfolio-images/riot_games_logo.png',
    gameLogoUrl: '/portfolio-images/2xko_game_logo.png',
    color: '#2596be',
    logoScale: 1.1,
    platforms: ['PC', 'PS5', 'Xbox Series X/S'],
    videoUrl: 'https://youtu.be/xyK3lFtz2H8?si=yYN9OQ65yrqHgOXQ',
    websiteUrl: 'https://2xko.riotgames.com/en-us/',
    criticScore: 80,
    criticUrl: 'https://opencritic.com/game/19487/2xko'
  },
  {
    id: 'p3',
    title: 'ZERO PARADES',
    role: 'Senior Producer',
    focusArea: 'Core Development',
    year: '2022–2025 · Released',
    description: 'Established production structure and delivery processes for a globally distributed team building a new isometric RPG. Worked closely with leadership to align scope, teams, and workflows during early-stage development and into full production.',
    tags: ['ZA/UM', 'Narrative', 'RPG'],
    imageUrl: '/portfolio-images/zero_parades_background.jpg',
    studioLogoUrl: '/portfolio-images/zaum_studio_logo.png',
    gameLogoUrl: '/portfolio-images/zero_parades_game_logo.png',
    color: '#facc15',
    logoScale: 1.1,
    platforms: ['PC', 'PS5'],
    videoUrl: 'https://www.youtube.com/watch?v=D4JVY8rR-XQ',
    websiteUrl: 'https://store.steampowered.com/app/2863680/ZERO_PARADES_For_Dead_Spies/',
    criticScore: 83,
    criticUrl: 'https://opencritic.com/game/20490/zero-parades-for-dead-spies'
  },
  {
    id: 'p-disco',
    title: 'Disco Elysium',
    role: 'Technical Producer',
    focusArea: 'Post-Launch',
    year: '2022–2024 · Post-Launch',
    description: 'Led technical delivery of post-launch content, including new dialogue, voice integration, and additional features. Coordinated creative and technical teams to ship updates while maintaining quality and stylistic consistency.',
    tags: ['ZA/UM', 'RPG', 'Live Ops'],
    imageUrl: '/portfolio-images/disco_elysium_background.jpg',
    studioLogoUrl: '/portfolio-images/zaum_studio_logo.png',
    gameLogoUrl: '/portfolio-images/disco_elysium_game_logo.png',
    color: '#ff6b00',
    logoScale: 1.1,
    platforms: ['PC', 'PS5', 'Xbox Series X/S', 'Nintendo Switch', 'Mobile'],
    videoUrl: 'https://www.youtube.com/watch?v=nk_K5DM0UTk',
    websiteUrl: 'https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/',
    criticScore: 92,
    criticUrl: 'https://opencritic.com/game/8419/disco-elysium'
  },
  {
    id: 'p4',
    title: 'LEGO Star Wars: The Skywalker Saga',
    role: 'Associate Producer',
    focusArea: 'Multi-Team Delivery',
    year: '2020–2022 · Released',
    description: 'Coordinated delivery across multiple discipline teams on a large-scale licensed title, supporting milestone planning and execution. Managed dependencies and stakeholder alignment, including collaboration with external licensors.',
    tags: ['TT Games', 'Action-Adventure', 'Open World'],
    imageUrl: '/portfolio-images/lego_star_wars_background.png',
    studioLogoUrl: '/portfolio-images/tt_games_logo.png',
    gameLogoUrl: '/portfolio-images/lego_star_wars_game_logo.png',
    color: '#d11013',
    logoScale: 1.2,
    platforms: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X/S', 'Nintendo Switch'],
    videoUrl: 'https://www.youtube.com/watch?v=n49TsZAwFEs',
    websiteUrl: 'https://store.steampowered.com/app/920210/LEGO_Star_Wars_The_Skywalker_Saga/',
    criticScore: 82,
    criticUrl: 'https://opencritic.com/game/9901/lego-star-wars-the-skywalker-saga'
  },
  {
    id: 'p5',
    title: 'Unannounced LEGO Project',
    role: 'Associate Producer',
    focusArea: 'Cross-Functional Teams',
    year: '2020–2021 · Cancelled',
    description: 'Supported development across multiple teams on a large-scale licensed title, driving coordination and production planning. Worked across disciplines to maintain alignment, visibility, and delivery momentum in a complex production environment.',
    tags: ['TT Games', 'Major IP', 'Prototype'],
    imageUrl: '/portfolio-images/unannounced_lego_project_background.jpg',
    studioLogoUrl: '/portfolio-images/tt_games_logo.png',
    color: '#ffd500'
  },
  {
    id: 'p6',
    title: 'Timeline Platform',
    role: 'Product Manager',
    year: '2017–2020 · In Development',
    description: 'Defined product direction and led development of a data visualisation platform from concept through delivery. Worked closely with engineers to shape core features, user experience, and scalable product foundations.',
    tags: ['KPV LAB', 'Data Vis', 'Platform'],
    imageUrl: '/portfolio-images/timeline_platform_background.jpg',
    studioLogoUrl: '/portfolio-images/kpv_lab_logo.jpg',
    color: '#0ea5e9'
  }
];

export const WRITINGS: Writing[] = [
  {
    id: 'w2',
    title: 'Shadow Warrior 2: Not Silent, Very Deadly',
    publication: 'Official PlayStation Magazine',
    publicationLogo: '/portfolio-images/playstation_official_magazine_logo.png',
    date: 'Preview',
    link: '/articles/shadow-warrior-2-preview',
    category: 'Preview',
    image: '/portfolio-images/shadow_warrior_2_preview.jpg'
  },
  {
    id: 'w1',
    title: 'Survival of the Fittest: How Developer Abstraction Games Evolved to Get ARK on PlayStation',
    publication: 'Push Square',
    publicationLogo: '/portfolio-images/push_square_logo.png',
    date: 'Dec 2016',
    link: 'https://www.pushsquare.com/news/2016/12/feature_how_abstraction_games_evolved_to_get_ark_on_ps4',
    category: 'Development Story',
    image: '/portfolio-images/ark_survival_evolved_feature.jpg'
  },
  {
    id: 'w3',
    title: 'Ni no Kuni: Wrath of the White Witch Review',
    publication: 'Push Square',
    publicationLogo: '/portfolio-images/push_square_logo.png',
    date: 'Review',
    link: 'https://www.pushsquare.com/reviews/ps4/ni_no_kuni_wrath_of_the_white_witch_remastered',
    category: 'Review',
    image: '/portfolio-images/ni_no_kuni_review.jpg'
  }
];

export const ARCHIVE_WRITINGS: Writing[] = [
  // Recommended
  { id: 'arc1', title: 'Ni no Kuni: Wrath of the White Witch Review', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/ni_no_kuni_wrath_of_the_white_witch_remastered', category: 'Recommended', image: '/portfolio-images/ni_no_kuni_review.jpg' },
  { id: 'arc2', title: 'Shadow Warrior 2 Preview: Not Silent, Very Deadly', publication: 'Official PlayStation Magazine', date: 'Preview', link: '/articles/shadow-warrior-2-preview', category: 'Recommended', image: '/portfolio-images/shadow_warrior_2_preview.jpg' },
  { id: 'arc3', title: 'Survival of the Fittest: How Developer Abstraction Games Evolved to Get ARK on PS4', publication: 'Push Square', date: 'Feature', link: 'https://www.pushsquare.com/news/2016/12/feature_how_abstraction_games_evolved_to_get_ark_on_ps4', category: 'Recommended', image: 'https://picsum.photos/seed/game-arc3-survivalofthefi/800/600' },
  { id: 'arc4', title: 'Beat Saber Review', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/beat_saber', category: 'Recommended', image: 'https://picsum.photos/seed/game-arc4-beatsaberreview/800/600' },
  { id: 'arc5', title: 'Why Yakuzo Zero is One of 2017\'s Best Games', publication: 'Push Square', date: 'Feature', link: 'https://www.pushsquare.com/news/2017/12/game_of_the_year_2017_8_-_yakuza_0', category: 'Recommended', image: 'https://picsum.photos/seed/game-arc5-whyyakuzozerois/800/600' },
  { id: 'arc6', title: 'Here\'s Why Developer Ninja Theory is Leaving PlayStation', publication: 'Push Square', date: 'News', link: 'https://www.pushsquare.com/news/2018/06/why_ninja_theorys_leaving_playstation', category: 'Recommended', image: 'https://picsum.photos/seed/game-arc6-here/800/600' },

  // Features
  { id: 'arc7', title: 'My Top 5 PlayStation Games of the Year for 2019', publication: 'Push Square', date: '2019', link: 'https://www.pushsquare.com/news/2019/12/game_of_the_year_jacobs_top_5_ps4_games_of_2019', category: 'Features', image: 'https://picsum.photos/seed/game-arc7-mytop5playstati/800/600' },
  { id: 'arc8', title: 'The Grand Tour Game Puts a New Spin on Episodic Gaming', publication: 'Push Square', date: '2019', link: 'https://www.pushsquare.com/news/2019/01/hands_on_the_grand_tour_game_puts_a_new_spin_on_episodic_gaming', category: 'Features', image: 'https://picsum.photos/seed/game-arc8-thegrandtourgam/800/600' },
  { id: 'arc9', title: 'My Top 5 PlayStation Games of the Year For 2017', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2018/01/game_of_the_year_2017_jacobs_personal_picks', category: 'Features', image: 'https://picsum.photos/seed/game-arc9-mytop5playstati/800/600' },
  { id: 'arc10', title: 'Looking Back at Ten Years of iPhone: The Smartphone Revolution', publication: 'The Student Newspaper', date: '2017', link: 'https://studentnewspaper.org/looking-back-at-10-years-of-iphone-the-smartphone-revolution/', category: 'Features', image: '/portfolio-images/iphone_10_years_feature.jpg' },
  { id: 'arc11', title: 'How The Last of Us Shows That Resolution Isn\'t Everything', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/11/soapbox_how_the_last_of_us_proves_that_resolution_isnt_everything', category: 'Features', image: 'https://picsum.photos/seed/game-arc11-howthelastofuss/800/600' },
  { id: 'arc12', title: 'Skyrim Still Has Plenty to Offer Five Years On', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/11/soapbox_skyrim_still_has_plenty_to_offer_five_years_on', category: 'Features', image: 'https://picsum.photos/seed/game-arc12-skyrimstillhasp/800/600' },
  { id: 'arc13', title: 'Game of the Year 2016', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/12/game_of_the_year_2016_jacobs_personal_playstation_picks', category: 'Features', image: 'https://picsum.photos/seed/game-arc13-gameoftheyear20/800/600' },
  { id: 'arc14', title: 'Sniper Elite 4: Feeling the Heat', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/sniper-elite-4-preview-feeling-the-heat', category: 'Features', image: '/portfolio-images/sniper_elite_4_preview.jpg' },
  { id: 'arc15', title: 'Battalion 1944: Bulkhead\'s Balancing Act', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/battalion-1944-bulkheads-balancing-act', category: 'Features', image: '/portfolio-images/battalion_1944_feature.jpg' },
  { id: 'arc16', title: '2016: Year of the Gun?', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/2016-year-of-the-gun', category: 'Features', image: '/portfolio-images/year_of_the_gun_feature.jpg' },
  { id: 'arc17', title: 'Summer 2016 Games Preview Round-up', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/summer-2016-games-preview-round-up', category: 'Features', image: '/portfolio-images/summer_2016_preview_roundup.jpg' },
  { id: 'arc18', title: 'A Question of Value (and Perspective)', publication: 'Bitcultures', date: '2016', link: 'http://www.bitcultures.com/a-question-of-value-and-perspective-2/', category: 'Features', image: '/portfolio-images/question_of_value_feature.jpg' },

  // Reviews
  { id: 'arc19', title: 'WRC 9 (PS5)', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps5/wrc_9', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc19-wrc9ps5/800/600' },
  { id: 'arc20', title: 'WRC 9 (PS4)', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/wrc_9', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc20-wrc9ps4/800/600' },
  { id: 'arc21', title: 'Project CARS 3', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/project_cars_3', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc21-projectcars3/800/600' },
  { id: 'arc22', title: 'Mortal Shell', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/mortal_shell', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc22-mortalshell/800/600' },
  { id: 'arc23', title: 'F1 2020', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/f1_2020', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc23-f12020/800/600' },
  { id: 'arc24', title: 'Code Vein', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/code_vein', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc24-codevein/800/600' },
  { id: 'arc25', title: 'V-Rally 4', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/v-rally_4', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc25-vrally4/800/600' },
  { id: 'arc26', title: 'Bridge Constructor Stunts', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/bridge_constructor_stunts', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc26-bridgeconstruct/800/600' },
  { id: 'arc27', title: 'Assault Gunners HD', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/assault_gunners_hd_edition', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc27-assaultgunnersh/800/600' },
  { id: 'arc28', title: 'Virtual Reality Football Club', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/vrfc', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc28-virtualrealityf/800/600' },
  { id: 'arc29', title: 'Mulaka', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/mulaka', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc29-mulaka/800/600' },
  { id: 'arc30', title: 'Lost Sphear', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/lost_sphear', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc30-lostsphear/800/600' },
  { id: 'arc31', title: 'Out of Ammo', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/out_of_ammo', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc31-outofammo/800/600' },
  { id: 'arc32', title: 'Mortal Blitz', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/mortal_blitz', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc32-mortalblitz/800/600' },
  { id: 'arc33', title: 'Star Ocean: The Last Hope – 4K and Full HD Remaster', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/star_ocean_the_last_hope', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc33-staroceanthelas/800/600' },
  { id: 'arc34', title: 'Star Ocean: Till the End of Time, PS4', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/star_ocean_till_the_end_of_time_ps2', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc34-staroceantillth/800/600' },
  { id: 'arc35', title: 'A King\'s Tale: Final Fantasy XV', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/a_kings_tale_final_fantasy_xv', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc35-aking/800/600' },
  { id: 'arc36', title: 'Tales of Berseria', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/tales_of_berseria', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc36-talesofberseria/800/600' },
  { id: 'arc37', title: 'Yesterday Origins', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/yesterday_origins', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc37-yesterdayorigin/800/600' },
  { id: 'arc38', title: 'RIVE', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/rive', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc38-rive/800/600' },
  { id: 'arc39', title: 'F1 2016', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/f1_2016', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc39-f12016/800/600' },
  { id: 'arc40', title: 'Chambara', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/chambara', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc40-chambara/800/600' },
  { id: 'arc41', title: 'Obliteracers', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/obliteracers', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc41-obliteracers/800/600' },
  { id: 'arc42', title: 'Star Ocean: Integrity and Faithlessness', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/star_ocean_integrity_and_faithlessness', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc42-staroceanintegr/800/600' },
  { id: 'arc43', title: 'Oxenfree', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/oxenfree', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc43-oxenfree/800/600' },
  { id: 'arc44', title: 'Koi', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/koi', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc44-koi/800/600' },
  { id: 'arc45', title: 'République', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/republique', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc45-rpublique/800/600' },
  { id: 'arc46', title: 'McDroid', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/mcdroid', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc46-mcdroid/800/600' },
  { id: 'arc47', title: 'Toki Tori 2+', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/toki_tori_2plus', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc47-tokitori2/800/600' },
  { id: 'arc48', title: 'The Escapists: The Walking Dead', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/the_escapists_the_walking_dead', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc48-theescapiststhe/800/600' },
  { id: 'arc49', title: 'Monument Valley', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/monument-valley-review/', category: 'Game Reviews', image: '/portfolio-images/monument_valley_review.jpg' },
  { id: 'arc50', title: 'Firewatch', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/firewatch-review/', category: 'Game Reviews', image: '/portfolio-images/firewatch_review.jpg' },
  { id: 'arc51', title: 'WRC 5', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/wrc-5-fia-world-rally-championship-review-2/', category: 'Game Reviews', image: '/portfolio-images/wrc_5_review.jpg' },
  { id: 'arc52', title: 'Uncharted: The Nathan Drake Collection', publication: 'The Student Newspaper', date: 'Review', link: 'https://studentnewspaper.org/the-uncharted-collection-review-a-look-back-at-the-much-loved-series/', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc52-unchartedthenat/800/600' },
  { id: 'arc53', title: 'Fallout 4', publication: 'The Student Newspaper', date: 'Review', link: 'https://studentnewspaper.org/fallout-4-review-some-things-never-change/', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc53-fallout4/800/600' },
  { id: 'arc54', title: 'Star Wars Battlefront', publication: 'The Student Newspaper', date: 'Review', link: 'https://studentnewspaper.org/star-wars-battlefront-a-force-to-be-reckoned-with/', category: 'Game Reviews', image: 'https://picsum.photos/seed/game-arc54-starwarsbattlef/800/600' },
  { id: 'arc55', title: 'Final Fantasy XIII', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/final-fantasy-xiii-review/', category: 'Game Reviews', image: '/portfolio-images/final_fantasy_xiii_review.jpg' },
  { id: 'arc56', title: 'Star Ocean: The Last Hope', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/star-ocean-the-last-hope-review/', category: 'Game Reviews', image: '/portfolio-images/star_ocean_the_last_hope_review.jpg' },
  { id: 'arc57', title: 'L.A. Noire', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/l-a-noire-review/', category: 'Game Reviews', image: '/portfolio-images/la_noire_review.jpg' },
  { id: 'arc58', title: 'Infinite Undiscovery', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/infinite-undiscovery-review/', category: 'Game Reviews', image: '/portfolio-images/infinite_undiscovery_review.jpg' },

  // News
  { id: 'arc59', title: 'FIFA 19 Reimagines Pulling the Trigger With an Advanced Shooting System', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/06/e3_2018_fifa_19_reimagines_pulling_the_trigger_with_an_advanced_shooting_system', category: 'News', image: 'https://picsum.photos/seed/game-arc59-fifa19reimagine/800/600' },
  { id: 'arc60', title: 'Get to Know the Actors Behind Detroit: Become Human\'s Central Characters', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/03/get_to_know_the_actors_behind_detroit_become_humans_central_characters_in_a_new_series_of_interviews', category: 'News', image: 'https://picsum.photos/seed/game-arc60-gettoknowtheact/800/600' },
  { id: 'arc61', title: 'Hajime Tabata\'s Luminous Productions is Monkeying About on More Than Games', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/03/hajime_tabatas_luminous_productions_is_monkeying_around_on_more_than_just_games', category: 'News', image: 'https://picsum.photos/seed/game-arc61-hajimetabata/800/600' },
  { id: 'arc62', title: 'Afterparty is a Drunken Adventure From the Markers of Oxenfree', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/03/afterparty_is_a_drunken_adventure_from_the_makers_of_oxenfree', category: 'News', image: 'https://picsum.photos/seed/game-arc62-afterpartyisadr/800/600' },
  { id: 'arc63', title: 'Square Enix Reflects on Final Fantasy XV in New Developer Diary', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/02/square_enix_reflects_on_final_fantasy_xv_in_new_developer_diary', category: 'News', image: 'https://picsum.photos/seed/game-arc63-squareenixrefle/800/600' },
  { id: 'arc64', title: 'Hyper Light Drifter Designer Leaves Square Enix Montréal After Game Cancellation', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/01/hyper_light_drifter_designer_leaves_square_enix_montreal_after_game_cancellation', category: 'News', image: 'https://picsum.photos/seed/game-arc64-hyperlightdrift/800/600' },
  { id: 'arc65', title: 'Deus Ex Developer Eidos Montréal Moving Towards Online Experiences', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/12/deus_ex_developer_eidos_montreal_moving_towards_online_experiences', category: 'News', image: 'https://picsum.photos/seed/game-arc65-deusexdeveloper/800/600' },
  { id: 'arc66', title: 'Beyong Good & Evil 2 Really is Happening After All', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/06/e3_2017_beyond_good_and_evil_2_really_is_happening_after_all', category: 'News', image: 'https://picsum.photos/seed/game-arc66-beyonggoodevil2/800/600' },
  { id: 'arc67', title: 'Final Fantasy XII: The Zodiac Age Limited and Collector\'s Editions Detailed', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/03/final_fantasy_xii_the_zodiac_age_limited_and_collectors_editions_detailed', category: 'News', image: 'https://picsum.photos/seed/game-arc67-finalfantasyxii/800/600' },
  { id: 'arc68', title: 'Final Fantasy XV\'S Next Three DLC Packs Get Release Dates', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/01/final_fantasy_xvs_next_three_dlc_packs_get_release_dates', category: 'News', image: 'https://picsum.photos/seed/game-arc68-finalfantasyxv/800/600' },
  { id: 'arc69', title: 'The Witcher 3: Blood and Wine Wins Best RPG at the Game Awards 2016', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/12/the_witcher_3_blood_and_wine_wins_best_rpg_at_the_game_awards_2016', category: 'News', image: 'https://picsum.photos/seed/game-arc69-thewitcher3bloo/800/600' },
  { id: 'arc70', title: 'Metal Gear Survives Without Hideo Kojima as Co-op Spin-off', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/08/gamescom_2016_metal_gear_survives_without_hideo_kojima_as_co-op_spin-off', category: 'News', image: 'https://picsum.photos/seed/game-arc70-metalgearsurviv/800/600' },
];

import { Experience, Project, Writing } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Riot Games',
    logoUrl: 'https://img.icons8.com/color/512/riot-games.png',
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
    logoUrl: 'https://images.igdb.com/igdb/image/upload/t_original/cl8yk.webp',
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
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/96/TT_Games.png',
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
    logoUrl: 'https://media.licdn.com/dms/image/v2/C4D0BAQFRhogvXq7MSA/company-logo_100_100/company-logo_100_100/0/1631373681451/kpv_lab_edinburgh_logo?e=1777507200&v=beta&t=XzcKyc4xAmNGcqZIx-OAGlBoOM9AIbnHR_aIq6a0-ro',
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
    studioLogoUrl: 'https://img.icons8.com/color/512/riot-games.png',
    gameLogoUrl: 'https://www.pngall.com/wp-content/uploads/13/Valorant-Logo-PNG-Cutout.png',
    color: '#fb5057',
    logoScale: 2.0,
    platforms: ['PC', 'PS5', 'Xbox Series X/S']
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
    studioLogoUrl: 'https://img.icons8.com/color/512/riot-games.png',
    gameLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2XKO_game_logo.svg/960px-2XKO_game_logo.svg.png',
    color: '#2596be',
    logoScale: 1.1,
    platforms: ['PC', 'PS5', 'Xbox Series X/S']
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
    logoScale: 1.1,
    platforms: ['PC', 'PS5']
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
    logoScale: 1.1,
    platforms: ['PC', 'PS5', 'Xbox Series X/S', 'Nintendo Switch', 'Mobile']
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
    studioLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Traveller%27s_Tales_Logo.png',
    gameLogoUrl: 'https://www.jennystroom.nl/img/LEGOSWTSS.png',
    color: '#d11013',
    logoScale: 1.2,
    platforms: ['PC', 'PS4', 'PS5', 'Xbox One', 'Xbox Series X/S', 'Nintendo Switch']
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
    studioLogoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Traveller%27s_Tales_Logo.png',
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

export const ARCHIVE_WRITINGS: Writing[] = [
  // Recommended
  { id: 'arc1', title: 'Ni no Kuni: Wrath of the White Witch Review', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/ni_no_kuni_wrath_of_the_white_witch_remastered', category: 'Recommended' },
  { id: 'arc2', title: 'Shadow Warrior 2 Preview: Not Silent, Very Deadly', publication: 'Official PlayStation Magazine', date: 'Preview', link: '#', category: 'Recommended' },
  { id: 'arc3', title: 'Survival of the Fittest: How Developer Abstraction Games Evolved to Get ARK on PS4', publication: 'Push Square', date: 'Feature', link: 'https://www.pushsquare.com/news/2016/12/feature_how_abstraction_games_evolved_to_get_ark_on_ps4', category: 'Recommended' },
  { id: 'arc4', title: 'Beat Saber Review', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/beat_saber', category: 'Recommended' },
  { id: 'arc5', title: 'Why Yakuzo Zero is One of 2017\'s Best Games', publication: 'Push Square', date: 'Feature', link: 'https://www.pushsquare.com/news/2017/12/game_of_the_year_2017_8_-_yakuza_0', category: 'Recommended' },
  { id: 'arc6', title: 'Here\'s Why Developer Ninja Theory is Leaving PlayStation', publication: 'Push Square', date: 'News', link: 'https://www.pushsquare.com/news/2018/06/why_ninja_theorys_leaving_playstation', category: 'Recommended' },

  // Features
  { id: 'arc7', title: 'My Top 5 PlayStation Games of the Year for 2019', publication: 'Push Square', date: '2019', link: 'https://www.pushsquare.com/news/2019/12/game_of_the_year_jacobs_top_5_ps4_games_of_2019', category: 'Features' },
  { id: 'arc8', title: 'The Grand Tour Game Puts a New Spin on Episodic Gaming', publication: 'Push Square', date: '2019', link: 'https://www.pushsquare.com/news/2019/01/hands_on_the_grand_tour_game_puts_a_new_spin_on_episodic_gaming', category: 'Features' },
  { id: 'arc9', title: 'My Top 5 PlayStation Games of the Year For 2017', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2018/01/game_of_the_year_2017_jacobs_personal_picks', category: 'Features' },
  { id: 'arc10', title: 'Looking Back at Ten Years of iPhone: The Smartphone Revolution', publication: 'The Student Newspaper', date: '2017', link: 'https://studentnewspaper.org/looking-back-at-10-years-of-iphone-the-smartphone-revolution/', category: 'Features' },
  { id: 'arc11', title: 'How The Last of Us Shows That Resolution Isn\'t Everything', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/11/soapbox_how_the_last_of_us_proves_that_resolution_isnt_everything', category: 'Features' },
  { id: 'arc12', title: 'Skyrim Still Has Plenty to Offer Five Years On', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/11/soapbox_skyrim_still_has_plenty_to_offer_five_years_on', category: 'Features' },
  { id: 'arc13', title: 'Game of the Year 2016', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/12/game_of_the_year_2016_jacobs_personal_playstation_picks', category: 'Features' },
  { id: 'arc14', title: 'Sniper Elite 4: Feeling the Heat', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/sniper-elite-4-preview-feeling-the-heat', category: 'Features' },
  { id: 'arc15', title: 'Battalion 1944: Bulkhead\'s Balancing Act', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/battalion-1944-bulkheads-balancing-act', category: 'Features' },
  { id: 'arc16', title: '2016: Year of the Gun?', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/2016-year-of-the-gun', category: 'Features' },
  { id: 'arc17', title: 'Summer 2016 Games Preview Round-up', publication: 'Jacob Hull Games', date: '2016', link: 'https://jacobhullgames.weebly.com/articles/summer-2016-games-preview-round-up', category: 'Features' },
  { id: 'arc18', title: 'A Question of Value (and Perspective)', publication: 'Bitcultures', date: '2016', link: 'http://www.bitcultures.com/a-question-of-value-and-perspective-2/', category: 'Features' },

  // Reviews
  { id: 'arc19', title: 'WRC 9 (PS5)', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps5/wrc_9', category: 'Game Reviews' },
  { id: 'arc20', title: 'WRC 9 (PS4)', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/wrc_9', category: 'Game Reviews' },
  { id: 'arc21', title: 'Project CARS 3', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/project_cars_3', category: 'Game Reviews' },
  { id: 'arc22', title: 'Mortal Shell', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/mortal_shell', category: 'Game Reviews' },
  { id: 'arc23', title: 'F1 2020', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/f1_2020', category: 'Game Reviews' },
  { id: 'arc24', title: 'Code Vein', publication: 'Push Square', date: 'Review', link: 'https://www.pushsquare.com/reviews/ps4/code_vein', category: 'Game Reviews' },
  { id: 'arc25', title: 'V-Rally 4', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/v-rally_4', category: 'Game Reviews' },
  { id: 'arc26', title: 'Bridge Constructor Stunts', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/bridge_constructor_stunts', category: 'Game Reviews' },
  { id: 'arc27', title: 'Assault Gunners HD', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/assault_gunners_hd_edition', category: 'Game Reviews' },
  { id: 'arc28', title: 'Virtual Reality Football Club', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/vrfc', category: 'Game Reviews' },
  { id: 'arc29', title: 'Mulaka', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/mulaka', category: 'Game Reviews' },
  { id: 'arc30', title: 'Lost Sphear', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/lost_sphear', category: 'Game Reviews' },
  { id: 'arc31', title: 'Out of Ammo', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/out_of_ammo', category: 'Game Reviews' },
  { id: 'arc32', title: 'Mortal Blitz', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/mortal_blitz', category: 'Game Reviews' },
  { id: 'arc33', title: 'Star Ocean: The Last Hope – 4K and Full HD Remaster', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/star_ocean_the_last_hope', category: 'Game Reviews' },
  { id: 'arc34', title: 'Star Ocean: Till the End of Time, PS4', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/star_ocean_till_the_end_of_time_ps2', category: 'Game Reviews' },
  { id: 'arc35', title: 'A King\'s Tale: Final Fantasy XV', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/a_kings_tale_final_fantasy_xv', category: 'Game Reviews' },
  { id: 'arc36', title: 'Tales of Berseria', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/tales_of_berseria', category: 'Game Reviews' },
  { id: 'arc37', title: 'Yesterday Origins', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/yesterday_origins', category: 'Game Reviews' },
  { id: 'arc38', title: 'RIVE', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/rive', category: 'Game Reviews' },
  { id: 'arc39', title: 'F1 2016', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/f1_2016', category: 'Game Reviews' },
  { id: 'arc40', title: 'Chambara', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/chambara', category: 'Game Reviews' },
  { id: 'arc41', title: 'Obliteracers', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/obliteracers', category: 'Game Reviews' },
  { id: 'arc42', title: 'Star Ocean: Integrity and Faithlessness', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/star_ocean_integrity_and_faithlessness', category: 'Game Reviews' },
  { id: 'arc43', title: 'Oxenfree', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/oxenfree', category: 'Game Reviews' },
  { id: 'arc44', title: 'Koi', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/koi', category: 'Game Reviews' },
  { id: 'arc45', title: 'République', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/republique', category: 'Game Reviews' },
  { id: 'arc46', title: 'McDroid', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/mcdroid', category: 'Game Reviews' },
  { id: 'arc47', title: 'Toki Tori 2+', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/toki_tori_2plus', category: 'Game Reviews' },
  { id: 'arc48', title: 'The Escapists: The Walking Dead', publication: 'Push Square', date: 'Review', link: 'http://www.pushsquare.com/reviews/ps4/the_escapists_the_walking_dead', category: 'Game Reviews' },
  { id: 'arc49', title: 'Monument Valley', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/monument-valley-review/', category: 'Game Reviews' },
  { id: 'arc50', title: 'Firewatch', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/firewatch-review/', category: 'Game Reviews' },
  { id: 'arc51', title: 'WRC 5', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/wrc-5-fia-world-rally-championship-review-2/', category: 'Game Reviews' },
  { id: 'arc52', title: 'Uncharted: The Nathan Drake Collection', publication: 'The Student Newspaper', date: 'Review', link: 'https://studentnewspaper.org/the-uncharted-collection-review-a-look-back-at-the-much-loved-series/', category: 'Game Reviews' },
  { id: 'arc53', title: 'Fallout 4', publication: 'The Student Newspaper', date: 'Review', link: 'https://studentnewspaper.org/fallout-4-review-some-things-never-change/', category: 'Game Reviews' },
  { id: 'arc54', title: 'Star Wars Battlefront', publication: 'The Student Newspaper', date: 'Review', link: 'https://studentnewspaper.org/star-wars-battlefront-a-force-to-be-reckoned-with/', category: 'Game Reviews' },
  { id: 'arc55', title: 'Final Fantasy XIII', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/final-fantasy-xiii-review/', category: 'Game Reviews' },
  { id: 'arc56', title: 'Star Ocean: The Last Hope', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/star-ocean-the-last-hope-review/', category: 'Game Reviews' },
  { id: 'arc57', title: 'L.A. Noire', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/l-a-noire-review/', category: 'Game Reviews' },
  { id: 'arc58', title: 'Infinite Undiscovery', publication: 'Bitcultures', date: 'Review', link: 'http://www.bitcultures.com/infinite-undiscovery-review/', category: 'Game Reviews' },

  // News
  { id: 'arc59', title: 'FIFA 19 Reimagines Pulling the Trigger With an Advanced Shooting System', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/06/e3_2018_fifa_19_reimagines_pulling_the_trigger_with_an_advanced_shooting_system', category: 'News' },
  { id: 'arc60', title: 'Get to Know the Actors Behind Detroit: Become Human\'s Central Characters', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/03/get_to_know_the_actors_behind_detroit_become_humans_central_characters_in_a_new_series_of_interviews', category: 'News' },
  { id: 'arc61', title: 'Hajime Tabata\'s Luminous Productions is Monkeying About on More Than Games', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/03/hajime_tabatas_luminous_productions_is_monkeying_around_on_more_than_just_games', category: 'News' },
  { id: 'arc62', title: 'Afterparty is a Drunken Adventure From the Markers of Oxenfree', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/03/afterparty_is_a_drunken_adventure_from_the_makers_of_oxenfree', category: 'News' },
  { id: 'arc63', title: 'Square Enix Reflects on Final Fantasy XV in New Developer Diary', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/02/square_enix_reflects_on_final_fantasy_xv_in_new_developer_diary', category: 'News' },
  { id: 'arc64', title: 'Hyper Light Drifter Designer Leaves Square Enix Montréal After Game Cancellation', publication: 'Push Square', date: '2018', link: 'http://www.pushsquare.com/news/2018/01/hyper_light_drifter_designer_leaves_square_enix_montreal_after_game_cancellation', category: 'News' },
  { id: 'arc65', title: 'Deus Ex Developer Eidos Montréal Moving Towards Online Experiences', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/12/deus_ex_developer_eidos_montreal_moving_towards_online_experiences', category: 'News' },
  { id: 'arc66', title: 'Beyong Good & Evil 2 Really is Happening After All', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/06/e3_2017_beyond_good_and_evil_2_really_is_happening_after_all', category: 'News' },
  { id: 'arc67', title: 'Final Fantasy XII: The Zodiac Age Limited and Collector\'s Editions Detailed', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/03/final_fantasy_xii_the_zodiac_age_limited_and_collectors_editions_detailed', category: 'News' },
  { id: 'arc68', title: 'Final Fantasy XV\'S Next Three DLC Packs Get Release Dates', publication: 'Push Square', date: '2017', link: 'http://www.pushsquare.com/news/2017/01/final_fantasy_xvs_next_three_dlc_packs_get_release_dates', category: 'News' },
  { id: 'arc69', title: 'The Witcher 3: Blood and Wine Wins Best RPG at the Game Awards 2016', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/12/the_witcher_3_blood_and_wine_wins_best_rpg_at_the_game_awards_2016', category: 'News' },
  { id: 'arc70', title: 'Metal Gear Survives Without Hideo Kojima as Co-op Spin-off', publication: 'Push Square', date: '2016', link: 'http://www.pushsquare.com/news/2016/08/gamescom_2016_metal_gear_survives_without_hideo_kojima_as_co-op_spin-off', category: 'News' },
];

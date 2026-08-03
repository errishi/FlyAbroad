import React, { useState, useMemo } from 'react';
import { Globe, Plus, Star, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRIMARY_COLOR = '#0B7707'; 

// Comprehensive Universities Database (10 per Country)
const UNIVERSITIES_BY_COUNTRY = {
  'Ireland': [
    { name: 'Trinity College Dublin', logo: 'TCD', rank: 81, cost: 23000, stream: 'Humanities', city: 'Dublin', desc: "Ireland's oldest university with a highly-ranked historical campus and outstanding humanities." },
    { name: 'University College Dublin', logo: 'UCD', rank: 126, cost: 21500, stream: 'Business', city: 'Dublin', desc: "Leading research-intensive institution featuring Ireland's top business school." },
    { name: 'University of Galway', logo: 'UG', rank: 258, cost: 18500, stream: 'Medicine', city: 'Galway', desc: 'Global medical device hub location with stellar medical and biomedical sciences programs.' },
    { name: 'Dublin City University', logo: 'DCU', rank: 336, cost: 17000, stream: 'STEM', city: 'Dublin', desc: 'Renowned for industrial partnerships, tech innovation, and strong graduate employment.' },
    { name: 'University of Limerick', logo: 'UL', rank: 426, cost: 16500, stream: 'STEM', city: 'Limerick', desc: 'Superb cooperative education placement program with high employment rates.' },
    { name: 'Maynooth University', logo: 'MU', rank: 801, cost: 15000, stream: 'Humanities', city: 'Maynooth', desc: 'A rapidly growing institution renowned for its strong community feel and liberal arts.' },
    { name: 'University College Cork', logo: 'UCC', rank: 292, cost: 19000, stream: 'Medicine', city: 'Cork', desc: 'World leader in sustainability, food science, and digestive medical research.' },
    { name: 'Technological University Dublin', logo: 'TUD', rank: 851, cost: 14500, stream: 'STEM', city: 'Dublin', desc: 'Hands-on practical engineering curriculum and strong technical foundations.' },
    { name: 'South East Technological University', logo: 'SETU', rank: 1201, cost: 12500, stream: 'STEM', city: 'Waterford', desc: 'Affordable tuition, friendly regional environment, and targeted applied science tracks.' },
    { name: 'Atlantic Technological University', logo: 'ATU', rank: 1301, cost: 12000, stream: 'Business', city: 'Galway', desc: 'Dynamic practical learning with beautiful wild Atlantic locations.' }
  ],
  'United Kingdom': [
    { name: 'University of Oxford', logo: 'OXF', rank: 3, cost: 44000, stream: 'Humanities', city: 'Oxford', desc: "One of the world's oldest and most prestigious institutions offering premium tutoring." },
    { name: 'University of Cambridge', logo: 'CAM', rank: 5, cost: 46000, stream: 'STEM', city: 'Cambridge', desc: 'Global bastion of scientific discoveries and mathematical Excellence.' },
    { name: 'Imperial College London', logo: 'IMP', rank: 6, cost: 41000, stream: 'STEM', city: 'London', desc: 'Exclusively focused on science, engineering, business, and world-class medicine.' },
    { name: 'University College London', logo: 'UCL', rank: 9, cost: 35000, stream: 'Humanities', city: 'London', desc: 'Multidisciplinary giant in the heart of London with pioneering global outlooks.' },
    { name: 'University of Edinburgh', logo: 'EDI', rank: 22, cost: 32000, stream: 'STEM', city: 'Edinburgh', desc: 'Historic Scottish powerhouse leading in artificial intelligence and informatics.' },
    { name: 'University of Manchester', logo: 'MAN', rank: 32, cost: 29000, stream: 'Business', city: 'Manchester', desc: 'Renowned for social impact, massive research footprint, and Nobel Laureate pedigree.' },
    { name: "King's College London", logo: 'KCL', rank: 40, cost: 34000, stream: 'Medicine', city: 'London', desc: 'Prestigious center for medicine, psychiatry, law, and international affairs.' },
    { name: 'University of Bristol', logo: 'BRI', rank: 55, cost: 28000, stream: 'STEM', city: 'Bristol', desc: 'Vibrant modern city university with highly ranked aerospace and computing fields.' },
    { name: 'University of Warwick', logo: 'WAR', rank: 67, cost: 27500, stream: 'Business', city: 'Coventry', desc: 'Warwick Business School is ranked among the finest in Europe.' },
    { name: 'University of Glasgow', logo: 'GLA', rank: 76, cost: 26000, stream: 'Medicine', city: 'Glasgow', desc: 'Beautiful gothic campus hosting pioneering medical research institutes.' }
  ],
  'Germany': [
    { name: 'Technical University of Munich', logo: 'TUM', rank: 37, cost: 4000, stream: 'STEM', city: 'Munich', desc: "Germany's premier entrepreneurial tech university with deep corporate ties." },
    { name: 'LMU Munich', logo: 'LMU', rank: 54, cost: 500, stream: 'Medicine', city: 'Munich', desc: 'World-renowned medical campus and elite research across sciences and arts.' },
    { name: 'Heidelberg University', logo: 'HEI', rank: 87, cost: 3000, stream: 'Medicine', city: 'Heidelberg', desc: 'Pristine historical center for advanced medical research and classic philosophy.' },
    { name: 'Humboldt University of Berlin', logo: 'HUB', rank: 120, cost: 600, stream: 'Humanities', city: 'Berlin', desc: 'The architectural model for modern research universities worldwide.' },
    { name: 'Karlsruhe Institute of Technology', logo: 'KIT', rank: 119, cost: 3000, stream: 'STEM', city: 'Karlsruhe', desc: 'Leading German research laboratory in energy, informatics, and material science.' },
    { name: 'RWTH Aachen University', logo: 'RWT', rank: 106, cost: 500, stream: 'STEM', city: 'Aachen', desc: 'The powerhouse of German mechanical, electrical, and manufacturing engineering.' },
    { name: 'TU Berlin', logo: 'TUB', rank: 154, cost: 600, stream: 'STEM', city: 'Berlin', desc: 'Innovative engineering programs nestled directly in the German startup capital.' },
    { name: 'University of Freiburg', logo: 'FRE', rank: 192, cost: 3000, stream: 'Humanities', city: 'Freiburg', desc: 'Brimming with intellectual heritage amidst the scenic Black Forest region.' },
    { name: 'University of Tübingen', logo: 'TUB', rank: 213, cost: 3000, stream: 'Medicine', city: 'Tübingen', desc: 'A classic university town focusing on life sciences, chemistry, and AI.' },
    { name: 'University of Hamburg', logo: 'HAM', rank: 205, cost: 700, stream: 'Business', city: 'Hamburg', desc: 'Excellent climate research, maritime trade law, and strong financial paths.' }
  ],
  'Australia': [
    { name: 'University of Melbourne', logo: 'MEL', rank: 14, cost: 33000, stream: 'STEM', city: 'Melbourne', desc: 'Ranked #1 in Australia; highly regarded globally for tech and biomedicine.' },
    { name: 'University of Sydney', logo: 'SYD', rank: 19, cost: 32000, stream: 'Business', city: 'Sydney', desc: 'Stunning sandstone campus offering top-tier MBA, commerce, and media programs.' },
    { name: 'Australian National University', rank: 34, logo: 'ANU', cost: 31000, stream: 'Humanities', city: 'Canberra', desc: "Australia's national research star focusing on foreign policy, policy, and math." },
    { name: 'University of Queensland', logo: 'UQ', rank: 43, cost: 30000, stream: 'Medicine', city: 'Brisbane', desc: 'A premier research hub leading in vaccine development and marine biology.' },
    { name: 'Monash University', logo: 'MON', rank: 42, cost: 29500, stream: 'Medicine', city: 'Melbourne', desc: 'A massive global network championing pharmacy and pharmaceutical studies.' },
    { name: 'UNSW Sydney', logo: 'UNS', rank: 19, cost: 31500, stream: 'STEM', city: 'Sydney', desc: 'Leader in clean energy, solar cell technology, and computer sciences.' },
    { name: 'University of Western Australia', logo: 'UWA', rank: 72, cost: 28000, stream: 'STEM', city: 'Perth', desc: 'Oceanic engineering, mining engineering, and biodiversity specialists.' },
    { name: 'University of Adelaide', logo: 'ADE', rank: 89, cost: 27000, stream: 'Medicine', city: 'Adelaide', desc: 'Wine science, agricultural breakthroughs, and stellar health sciences.' },
    { name: 'University of Technology Sydney', logo: 'UTS', rank: 90, cost: 26000, stream: 'STEM', city: 'Sydney', desc: 'Super modern architecture, practical computing, and dynamic industrial links.' },
    { name: 'Macquarie University', logo: 'MAC', rank: 130, cost: 25000, stream: 'Business', city: 'Sydney', desc: 'Pioneered continuous actuarial sciences and world-renowned linguistics.' }
  ],
  'United States': [
    { name: 'Massachusetts Institute of Technology', logo: 'MIT', rank: 1, cost: 58000, stream: 'STEM', city: 'Boston', desc: "The world's undisputed champion for modern technology, AI, and engineering." },
    { name: 'Harvard University', logo: 'HAR', rank: 4, cost: 59000, stream: 'Humanities', city: 'Boston', desc: 'Global benchmark of premium learning, legal education, and economic research.' },
    { name: 'Stanford University', logo: 'STA', rank: 5, cost: 57000, stream: 'STEM', city: 'Palo Alto', desc: 'The intellectual heartbeat and launchpad of Silicon Valley startup culture.' },
    { name: 'University of California, Berkeley', logo: 'BER', rank: 10, cost: 44000, stream: 'STEM', city: 'Berkeley', desc: 'The world\'s elite public university, producing unparalleled scientific breakthroughs.' },
    { name: 'Columbia University', logo: 'COL', rank: 23, cost: 62000, stream: 'Business', city: 'New York', desc: 'Ivy League education perched in Manhattan, driving wall street and media giants.' },
    { name: 'California Institute of Technology', logo: 'CAL', rank: 15, cost: 56000, stream: 'STEM', city: 'Pasadena', desc: "Intense research focus hosting NASA's jet propulsion laboratory." },
    { name: 'University of California, Los Angeles', logo: 'ULA', rank: 29, cost: 42000, stream: 'Medicine', city: 'Los Angeles', desc: 'Leading academic medicine system paired with elite cinematic and arts modules.' },
    { name: 'Yale University', logo: 'YAL', rank: 16, cost: 59500, stream: 'Humanities', city: 'New Haven', desc: 'Renowned for world-class drama, undergraduate residential houses, and law.' },
    { name: 'Princeton University', logo: 'PRI', rank: 17, cost: 54000, stream: 'STEM', city: 'Princeton', desc: 'Exquisite focus on pure undergraduate research and theoretical sciences.' },
    { name: 'Cornell University', logo: 'COR', rank: 13, cost: 57000, stream: 'STEM', city: 'Ithaca', desc: 'Ivy League leader in computer science, agricultural science, and hotel management.' }
  ],
  'Canada': [
    { name: 'University of Toronto', logo: 'TOR', rank: 21, cost: 42000, stream: 'STEM', city: 'Toronto', desc: "Canada's highest ranked university, known for machine learning and medicine." },
    { name: 'University of British Columbia', logo: 'UBC', rank: 34, cost: 38000, stream: 'STEM', city: 'Vancouver', desc: 'Stunning forest-and-ocean campus hosting elite forestry and geosciences.' },
    { name: 'McGill University', logo: 'MCG', rank: 30, cost: 35000, stream: 'Medicine', city: 'Montreal', desc: 'Historic medical trailblazers situated in Canada\'s cultural capital.' },
    { name: 'McMaster University', logo: 'MCM', rank: 189, cost: 29000, stream: 'Medicine', city: 'Hamilton', desc: 'Famed for pioneering problem-based learning models in healthcare education.' },
    { name: 'University of Alberta', logo: 'ALB', rank: 111, cost: 28000, stream: 'STEM', city: 'Edmonton', desc: 'A power research hub for artificial intelligence, mining, and geology.' },
    { name: 'Université de Montréal', logo: 'MON', rank: 141, cost: 26000, stream: 'STEM', city: 'Montreal', desc: 'World-class francophone research hub featuring MILA (AI research center).' },
    { name: 'University of Waterloo', logo: 'WAT', rank: 112, cost: 34000, stream: 'STEM', city: 'Waterloo', desc: 'World-renowned co-op program fueling North American tech giants.' },
    { name: 'Western University', logo: 'WES', rank: 114, cost: 29000, stream: 'Business', city: 'London', desc: 'Ivey Business School provides unparalleled case-study leadership paths.' },
    { name: 'University of Calgary', logo: 'CAL', rank: 182, cost: 25000, stream: 'STEM', city: 'Calgary', desc: 'Dynamic energetic hub specializing in geoscience, clean energy and tech.' },
    { name: 'University of Ottawa', logo: 'OTT', rank: 177, cost: 27000, stream: 'Humanities', city: 'Ottawa', desc: "The world's largest English-French bilingual university offering amazing government co-ops." }
  ],
  'New Zealand': [
    { name: 'University of Auckland', logo: 'AKL', rank: 68, cost: 26000, stream: 'STEM', city: 'Auckland', desc: "New Zealand's flagship research-intensive tech and engineering giant." },
    { name: 'University of Otago', logo: 'OTG', rank: 206, cost: 24000, stream: 'Medicine', city: 'Dunedin', desc: 'The absolute country leader in dental, medical, and physiological sciences.' },
    { name: 'Victoria University of Wellington', logo: 'VUW', rank: 241, cost: 21000, stream: 'Humanities', city: 'Wellington', desc: 'Strategic capital position driving policy, creative media, and civic law.' },
    { name: 'University of Canterbury', logo: 'CAN', rank: 256, cost: 22000, stream: 'STEM', city: 'Christchurch', desc: 'Renowned for civil engineering, forestry science, and Antarctic research.' },
    { name: 'Massey University', logo: 'MAS', rank: 292, cost: 19500, stream: 'STEM', city: 'Palmerston North', desc: 'Pioneers in veterinary science, agricultural engineering, and remote studies.' },
    { name: 'University of Waikato', logo: 'WAI', rank: 250, cost: 19000, stream: 'Business', city: 'Hamilton', desc: 'Renowned triple-accredited Business management school and indigenous study.' },
    { name: 'Lincoln University', logo: 'LIN', rank: 362, cost: 18000, stream: 'STEM', city: 'Lincoln', desc: 'Highly boutique focus on agriculture, land-use, ecosystem health, and viticulture.' },
    { name: 'Auckland University of Technology', logo: 'AUT', rank: 407, cost: 21500, stream: 'STEM', city: 'Auckland', desc: 'High practical employment design, modern gaming/software development hubs.' },
    { name: 'Eastern Tech Institute', logo: 'EIT', rank: 1501, cost: 14000, stream: 'Business', city: 'Napier', desc: 'Affordable paths, strong regional community links, and direct vocational training.' },
    { name: 'Southern Institute of Technology', logo: 'SIT', rank: 1600, cost: 12000, stream: 'STEM', city: 'Invercargill', desc: 'Pioneer of the Zero Fees scholarship scheme, ideal for highly budget-conscious paths.' }
  ],
  'Russia': [
    { name: 'Lomonosov Moscow State University', logo: 'MSU', rank: 87, cost: 6500, stream: 'STEM', city: 'Moscow', desc: "Russia's oldest, absolute premier center for advanced mathematics and physics." },
    { name: 'Saint Petersburg State University', logo: 'SPb', rank: 315, cost: 6000, stream: 'Humanities', city: 'St. Petersburg', desc: 'Incredible historical institution delivering world-class languages and history.' },
    { name: 'Novosibirsk State University', logo: 'NSU', rank: 321, cost: 4500, stream: 'STEM', city: 'Novosibirsk', desc: 'Located directly inside Akademgorodok scientific research city.' },
    { name: 'Bauman Moscow State Technical University', logo: 'BAU', rank: 319, cost: 5500, stream: 'STEM', city: 'Moscow', desc: 'Highly elite rocket, aerospace, robotics, and applied physics institute.' },
    { name: 'HSE University', logo: 'HSE', rank: 308, cost: 6200, stream: 'Business', city: 'Moscow', desc: 'Top tier modern Russian university specializing in social sciences, economics.' },
    { name: 'National Research Nuclear University MEPhI', logo: 'MEP', rank: 350, cost: 4800, stream: 'STEM', city: 'Moscow', desc: 'A world-class leader in nuclear physics, nanotechnologies, and cybernetics.' },
    { name: 'Moscow Institute of Physics and Technology', logo: 'MIPT', rank: 290, cost: 5800, stream: 'STEM', city: 'Dolgoprudny', desc: 'Known as the Russian MIT; legendary rigorous curriculum in physics.' },
    { name: 'Tomsk State University', logo: 'TSU', rank: 272, cost: 3800, stream: 'STEM', city: 'Tomsk', desc: "Siberia's research crown jewel driving complex ecosystem and climate research." },
    { name: 'ITMO University', logo: 'ITM', rank: 359, cost: 4200, stream: 'STEM', city: 'St. Petersburg', desc: 'The multi-time programming world champions, stellar IT and optical studies.' },
    { name: 'Peter the Great St. Petersburg Polytech', logo: 'PET', rank: 382, cost: 4000, stream: 'STEM', city: 'St. Petersburg', desc: 'Exceptional legacy in metallurgy, energy system engineering, and mechanics.' }
  ],
  'India': [
    { name: 'Indian Institute of Technology Bombay', logo: 'IITB', rank: 149, cost: 3500, stream: 'STEM', city: 'Mumbai', desc: 'Premier engineering powerhouse producing global tech founders and research leaders.' },
    { name: 'Indian Institute of Technology Delhi', logo: 'IITD', rank: 197, cost: 3400, stream: 'STEM', city: 'New Delhi', desc: 'Hub for artificial intelligence, computer science innovation, and deep-tech startups.' },
    { name: 'Indian Institute of Science Bangalore', logo: 'IISc', rank: 225, cost: 2500, stream: 'STEM', city: 'Bengaluru', desc: "India's premier pure science institute located in the Silicon Valley of Asia." },
    { name: 'Indian Institute of Technology Madras', logo: 'IITM', rank: 285, cost: 3200, stream: 'STEM', city: 'Chennai', desc: 'National leader in patent filing, deep technology innovation, and robotics.' },
    { name: 'University of Delhi', logo: 'DU', rank: 401, cost: 800, stream: 'Humanities', city: 'New Delhi', desc: 'Famed center for economic theory, literature, commerce, and political sciences.' },
    { name: 'Indian Institute of Management Ahmedabad', logo: 'IIMA', rank: 50, cost: 28000, stream: 'Business', city: 'Ahmedabad', desc: "Asia's premier business school known for rigorous case method leadership." },
    { name: 'All India Institute of Medical Sciences', logo: 'AIIMS', rank: 120, cost: 500, stream: 'Medicine', city: 'New Delhi', desc: 'Apex public medical research university delivering top clinical exposure.' },
    { name: 'Birla Institute of Technology & Science', logo: 'BITS', rank: 801, cost: 6500, stream: 'STEM', city: 'Pilani', desc: 'Top private tech institute with strong practice schools and flexible merit pathways.' },
    { name: 'Jawaharlal Nehru University', logo: 'JNU', rank: 601, cost: 400, stream: 'Humanities', city: 'New Delhi', desc: 'Renowned world center for international studies, foreign languages, and social science.' },
    { name: 'Anna University', logo: 'AU', rank: 851, cost: 1800, stream: 'STEM', city: 'Chennai', desc: 'Major engineering hub providing strong industrial training and IT partnerships.' }
  ],
  'Poland': [
    { name: 'University of Warsaw', logo: 'UW', rank: 262, cost: 4000, stream: 'Humanities', city: 'Warsaw', desc: "Poland's largest public university offering elite research in physics, law, and math." },
    { name: 'Jagiellonian University', logo: 'JU', rank: 304, cost: 4500, stream: 'Medicine', city: 'Krakow', desc: 'One of Central Europe\'s oldest universities, world-famed for medicine and law.' },
    { name: 'Warsaw University of Technology', logo: 'WUT', rank: 571, cost: 3800, stream: 'STEM', city: 'Warsaw', desc: 'The leading polytechnic in Central Europe for computer science and robotics.' },
    { name: 'AGH University of Krakow', logo: 'AGH', rank: 801, cost: 3500, stream: 'STEM', city: 'Krakow', desc: 'Top tech university focusing on energy, materials science, and mining engineering.' },
    { name: 'Adam Mickiewicz University', logo: 'AMU', rank: 730, cost: 3200, stream: 'Humanities', city: 'Poznań', desc: 'Rich tradition in foreign languages, international relations, and environmental science.' },
    { name: 'Wrocław University of Science & Technology', logo: 'WUST', rank: 901, cost: 3400, stream: 'STEM', city: 'Wrocław', desc: 'Dynamic engineering institution tied closely to international tech corporations.' },
    { name: 'Medical University of Warsaw', logo: 'MUW', rank: 850, cost: 11000, stream: 'Medicine', city: 'Warsaw', desc: 'Highly sought-after English medical program with international clinical accreditations.' },
    { name: 'SGH Warsaw School of Economics', logo: 'SGH', rank: 501, cost: 4200, stream: 'Business', city: 'Warsaw', desc: "Poland's top business and finance university driving Eastern European commerce." },
    { name: 'University of Wrocław', logo: 'UWR', rank: 950, cost: 3000, stream: 'Humanities', city: 'Wrocław', desc: 'Historical cultural center known for Nobel laureates and international exchange.' },
    { name: 'Gdańsk University of Technology', logo: 'GUT', rank: 851, cost: 3300, stream: 'STEM', city: 'Gdańsk', desc: 'Coastal engineering leader specializing in naval architecture and green tech.' }
  ],
  'Finland': [
    { name: 'University of Helsinki', logo: 'UH', rank: 115, cost: 13000, stream: 'Humanities', city: 'Helsinki', desc: "Finland's oldest institution, world-renowned for climate science and pedagogy." },
    { name: 'Aalto University', logo: 'AALTO', rank: 109, cost: 15000, stream: 'STEM', city: 'Espoo', desc: 'Pioneering fusion of technology, business, and Nordic architectural design.' },
    { name: 'Tampere University', logo: 'TAU', rank: 436, cost: 12000, stream: 'STEM', city: 'Tampere', desc: 'Leading Scandinavian center for game design, automation, and health tech.' },
    { name: 'University of Oulu', logo: 'UO', rank: 313, cost: 10000, stream: 'STEM', city: 'Oulu', desc: 'Global 6G cellular tech hub working with top telecommunications leaders.' },
    { name: 'University of Turku', logo: 'UTU', rank: 315, cost: 11000, stream: 'Medicine', city: 'Turku', desc: 'Multi-disciplinary powerhouse focusing on drug development and biotechnology.' },
    { name: 'LUT University', logo: 'LUT', rank: 351, cost: 13500, stream: 'STEM', city: 'Lappeenranta', desc: 'Specialized focus on clean energy, water tech, and sustainable business.' },
    { name: 'University of Eastern Finland', logo: 'UEF', rank: 541, cost: 9500, stream: 'Medicine', city: 'Kuopio', desc: 'Premier institution for forestry research, health sciences, and photonics.' },
    { name: 'University of Jyväskylä', logo: 'JYU', rank: 446, cost: 10500, stream: 'Humanities', city: 'Jyväskylä', desc: 'Famous for sports science, psychology, and pioneer Finnish teacher education.' },
    { name: 'Åbo Akademi University', logo: 'AAU', rank: 601, cost: 9000, stream: 'STEM', city: 'Turku', desc: 'Swedish-language research university renowned for chemical engineering.' },
    { name: 'Haaga-Helia University of Applied Sciences', logo: 'HH', rank: 1200, cost: 8500, stream: 'Business', city: 'Helsinki', desc: 'Applied business management, hospitality, and practical software engineering.' }
  ],
  'Latvia': [
    { name: 'University of Latvia', logo: 'UL', rank: 831, cost: 3800, stream: 'Humanities', city: 'Riga', desc: 'Largest national university driving Baltic research in life sciences and computer code.' },
    { name: 'Riga Technical University', logo: 'RTU', rank: 751, cost: 4200, stream: 'STEM', city: 'Riga', desc: 'Oldest technical university in the Baltic states with deep engineering tracks.' },
    { name: 'Riga Stradiņš University', logo: 'RSU', rank: 901, cost: 12000, stream: 'Medicine', city: 'Riga', desc: 'International hub for medical and dental studies with state-of-the-art labs.' },
    { name: 'Latvia University of Life Sciences', logo: 'LBTU', rank: 1201, cost: 3500, stream: 'STEM', city: 'Jelgava', desc: 'Focused on sustainable forestry, veterinary medicine, and food tech.' },
    { name: 'SSE Riga (Stockholm School of Economics)', logo: 'SSE', rank: 450, cost: 7200, stream: 'Business', city: 'Riga', desc: 'Elite business school in the Baltics producing regional financial leaders.' },
    { name: 'Transport and Telecommunication Institute', logo: 'TSI', rank: 1250, cost: 3900, stream: 'STEM', city: 'Riga', desc: 'Specialized applied research in logistics, aviation engineering, and robotics.' },
    { name: 'Daugavpils University', logo: 'DU', rank: 1301, cost: 2800, stream: 'Humanities', city: 'Daugavpils', desc: 'Regional eastern educational hub with strong biological and language studies.' },
    { name: 'Ventspils University of Applied Sciences', logo: 'VUAS', rank: 1400, cost: 3000, stream: 'STEM', city: 'Ventspils', desc: 'Specialized programs in IT, space technologies, and translation studies.' },
    { name: 'EKA University of Applied Sciences', logo: 'EKA', rank: 1500, cost: 2900, stream: 'Business', city: 'Riga', desc: 'Dynamic, modern center for creative business design and digital marketing.' },
    { name: 'Art Academy of Latvia', logo: 'AAL', rank: 1450, cost: 3200, stream: 'Humanities', city: 'Riga', desc: 'Premier institution for visual arts, design, and cultural heritage preservation.' }
  ],
  'Lithuania': [
    { name: 'Vilnius University', logo: 'VU', rank: 473, cost: 4500, stream: 'STEM', city: 'Vilnius', desc: 'Historic university renowned for quantum laser tech and medical research.' },
    { name: 'Kaunas University of Technology', logo: 'KTU', rank: 801, cost: 4100, stream: 'STEM', city: 'Kaunas', desc: 'Leader in Baltic engineering, digital hardware, and industrial design.' },
    { name: 'Vilnius Tech (VGTU)', logo: 'VGTU', rank: 851, cost: 3800, stream: 'STEM', city: 'Vilnius', desc: 'Specialized in civil engineering, architecture, and aviation management.' },
    { name: 'Vytautas Magnus University', logo: 'VMU', rank: 801, cost: 3600, stream: 'Humanities', city: 'Kaunas', desc: 'Liberal arts school known for international relations and political science.' },
    { name: 'Lithuanian University of Health Sciences', logo: 'LSMU', rank: 751, cost: 11500, stream: 'Medicine', city: 'Kaunas', desc: 'Largest Lithuanian institution for veterinary and clinical medical degrees.' },
    { name: 'ISM University of Management & Economics', logo: 'ISM', rank: 601, cost: 5800, stream: 'Business', city: 'Vilnius', desc: 'Top-tier private business school established in partnership with BI Norwegian.' },
    { name: 'Mykolas Romeris University', logo: 'MRU', rank: 1001, cost: 3200, stream: 'Humanities', city: 'Vilnius', desc: 'Social sciences hub specializing in law, public security, and psychology.' },
    { name: 'Klaipėda University', logo: 'KU', rank: 1201, cost: 3000, stream: 'STEM', city: 'Klaipėda', desc: 'Unique marine technology, coastal hydrology, and port engineering tracks.' },
    { name: 'LCC International University', logo: 'LCC', rank: 1301, cost: 4200, stream: 'Humanities', city: 'Klaipėda', desc: 'North American-style liberal arts university taught entirely in English.' },
    { name: 'Vilnius College (VIKO)', logo: 'VIKO', rank: 1400, cost: 2700, stream: 'Business', city: 'Vilnius', desc: 'Practical professional education in software development and electronics.' }
  ],
  'Greece': [
    { name: 'National & Kapodistrian University of Athens', logo: 'NKUA', rank: 447, cost: 1500, stream: 'Humanities', city: 'Athens', desc: 'Oldest university in modern Greece, world leader in classics and medicine.' },
    { name: 'National Technical University of Athens', logo: 'NTUA', rank: 347, cost: 1500, stream: 'STEM', city: 'Athens', desc: 'Greece\'s prestigious polytechnic, famous for civil engineering and math.' },
    { name: 'Aristotle University of Thessaloniki', logo: 'AUTH', rank: 530, cost: 1500, stream: 'Medicine', city: 'Thessaloniki', desc: 'Largest university in the Balkans, offering broad research programs.' },
    { name: 'University of Crete', logo: 'UOC', rank: 501, cost: 1500, stream: 'STEM', city: 'Heraklion', desc: 'Top-ranked for scientific citations, physics research, and computer science.' },
    { name: 'University of Patras', logo: 'UPATRAS', rank: 791, cost: 1500, stream: 'STEM', city: 'Patras', desc: 'Strong focus on chemical engineering, pharmaceuticals, and robotics.' },
    { name: 'Athens University of Economics and Business', logo: 'AUEB', rank: 651, cost: 2000, stream: 'Business', city: 'Athens', desc: "Greece's premier destination for economics, international trade, and MBAs." },
    { name: 'University of Ioannina', logo: 'UOI', rank: 851, cost: 1200, stream: 'Medicine', city: 'Ioannina', desc: 'Highly regarded medical school and materials science research institute.' },
    { name: 'Technical University of Crete', logo: 'TUC', rank: 901, cost: 1500, stream: 'STEM', city: 'Chania', desc: 'Specialized engineering school in environmental tech and architectural design.' },
    { name: 'University of Thessaly', logo: 'UTH', rank: 1001, cost: 1200, stream: 'STEM', city: 'Volos', desc: 'Pioneering agricultural science, veterinary, and biomedical studies.' },
    { name: 'University of the Aegean', logo: 'UAEGEAN', rank: 1201, cost: 1200, stream: 'Humanities', city: 'Mytilene', desc: 'Unique island network institution focusing on shipping, geography, and ecology.' }
  ]
};

const COUNTRIES = [
  { id: 1, name: 'Ireland', code: 'IE', description: 'Experience world-class education amidst breathtaking landscapes and a vibrant tech culture.', image: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?q=80&w=1200&auto=format&fit=crop', accent: 'Goldmine of tech multinationals like Google & Apple.' },
  { id: 2, name: 'United Kingdom', code: 'UK', description: 'Home to some of the oldest, most prestigious academic institutions on Earth.', image: 'https://wallpapers.com/images/hd/aerial-view-cambridge-university-with-blue-sky-mly3dd8rvzxvbtxa.jpg', accent: 'Exceptional academic legacy and direct career pathways.' },
  { id: 3, name: 'Germany', code: 'DE', description: 'A globally leading hub for innovation and engineering with tuition-free public options.', image: 'https://fastlagos.com/wp-content/uploads/2022/11/730.jpg', accent: 'Industry-integrated learning with minimal tuition fees.' },
  { id: 4, name: 'Australia', code: 'AU', description: 'Study in a paradise of warm beaches and modern cities with globally recognized degrees.', image: 'https://i.pinimg.com/originals/d3/77/e2/d377e2f19a8e16e6cb1c8110fd2e640b.jpg', accent: 'Generous post-study working visas and premium lifestyle.' },
  { id: 5, name: 'United States', code: 'US', description: 'The absolute frontier of innovation, offering unparalleled academic research scope.', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop', accent: 'Massive networking index and world-leading faculty teams.' },
  { id: 6, name: 'Canada', code: 'CA', description: 'Acclaimed for its safety, welcoming multiculturalism, and direct immigration paths.', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop', accent: 'Most welcoming post-grad permanent residency tracks.' },
  { id: 7, name: 'New Zealand', code: 'NZ', description: 'Safe, beautiful, peaceful country emphasizing highly supportive and hands-on teaching.', image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1200&auto=format&fit=crop', accent: 'Spectacular wilderness paired with personalized care.' },
  { id: 8, name: 'Russia', code: 'RU', description: 'Immersive historical foundations with unrivaled rigor in math, space sciences, and code.', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1200&auto=format&fit=crop', accent: 'Legendary scientific rigor at very affordable costs.' },
  { id: 9, name: 'India', code: 'IN', description: 'Rapidly growing education powerhouse with top technical and management institutes.', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop', accent: 'Unmatched innovation ecosystem and affordable quality education.' },
  { id: 10, name: 'Poland', code: 'PL', description: 'Rich academic tradition in the heart of Europe with low living costs and English degrees.', image: 'https://images.unsplash.com/photo-1617639049011-6279d46cdb21?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', accent: 'Gateway to Europe with high safety and modern study facilities.' },
  { id: 11, name: 'Finland', code: 'FI', description: 'World leader in educational quality, high technology, and pristine natural beauty.', image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?q=80&w=1200&auto=format&fit=crop', accent: 'Ranked #1 happiest nation with cutting-edge student innovation.' },
  { id: 12, name: 'Latvia', code: 'LV', description: 'Affordable European degrees, vibrant tech scenes, and stunning Baltic architecture.', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop', accent: 'Highly accessible medical & engineering programs in English.' },
  { id: 13, name: 'Lithuania', code: 'LT', description: 'Booming startup and fintech nation with ancient universities and rich culture.', image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop', accent: 'World-renowned laser technology & digital health hubs.' },
  { id: 14, name: 'Greece', code: 'GR', description: 'Study at the birthplace of Western philosophy, mathematics, and democratic thought.', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop', accent: 'Incredible historical heritage paired with low Mediterranean costs.' }
];

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shortlist, setShortlist] = useState([]);

  const handleCountrySelect = (country) => {
    if (selectedCountry.id === country.id) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCountry(country);
      setIsAnimating(false);
    }, 200); 
  };

  const toggleShortlist = (uni) => {
    setShortlist(prev => 
      prev.some(item => item.name === uni.name)
        ? prev.filter(item => item.name !== uni.name)
        : [...prev, uni]
    );
  };

  const currentUniversities = UNIVERSITIES_BY_COUNTRY[selectedCountry.name] || [];

  // Pre-compiled slider setup to create distinct react keys for duplicated tracks
  const sliderItems = useMemo(() => {
    return [
      ...currentUniversities.map((uni, index) => ({ ...uni, slideId: `orig-${index}` })),
      ...currentUniversities.map((uni, index) => ({ ...uni, slideId: `dup-${index}` }))
    ];
  }, [currentUniversities]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50">
      
      <style>{`
        @keyframes infiniteSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-slide {
          animation: infiniteSlide 25s linear infinite;
        }
        .animate-infinite-slide:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
           style={{ backgroundImage: 'radial-gradient(#0B7707 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Main Full-Width Container */}
      <main className="w-full grow relative z-10">
        
        <div className="w-full py-10 lg:py-16 flex flex-col items-center px-4 md:px-8 lg:px-16">
          
          {/* Header Section */}
          <div className="text-center w-full max-w-4xl mb-12 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#0B7707] font-semibold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full border border-emerald-200/50">
              <Globe size={13} /> Discover Your Educational Horizon
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Top Countries to Study <span className="text-[#FD661F] relative">Abroad
                <svg className="absolute -bottom-3 left-0 w-full h-2.5" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,7 Q50,0 100,7" stroke="#FD661F" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl pt-4 font-normal max-w-2xl mx-auto leading-relaxed">
              Embark on your personal academic adventure. Explore top universities across Europe, Asia, the Americas, and beyond!
            </p>
          </div>

          {/* Full-Width Featured Showcase Card */}
          <div className="relative w-full h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 bg-slate-900 ring-1 ring-slate-800">
            <img 
              key={selectedCountry.id}
              src={selectedCountry.image} 
              alt={selectedCountry.name}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isAnimating ? 'opacity-40' : 'opacity-85'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            {/* Featured card text overlay */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-14 z-10">
              <div className="flex justify-between items-start">
                <span className="text-white/60 font-mono text-3xl font-extrabold tracking-widest">{selectedCountry.code}</span>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight leading-none">
                    {selectedCountry.name}
                  </h2>
                  <p className="text-[#FD661F] font-bold text-sm md:text-base mt-2 flex items-center gap-1.5">
                    <Star size={16} className="fill-[#FD661F]" /> {selectedCountry.accent}
                  </p>
                </div>
                
                <p className={`text-slate-200 max-w-3xl text-base md:text-lg leading-relaxed drop-shadow-md transition-all duration-500 ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  {selectedCountry.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to={`/university/${selectedCountry.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group relative cursor-pointer inline-flex items-center gap-2.5 px-8 py-4 bg-[#0B7707] hover:bg-emerald-800 rounded-full text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg active:scale-95"
                  >
                    Explore Top Universities
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Thumbnails Grid Carousel */}
          <div className="w-full overflow-x-auto pb-4 pt-10 scrollbar-hide">
            <div className="flex justify-start xl:justify-between gap-5 px-2 min-w-max">
              {COUNTRIES.map((country) => {
                const isSelected = selectedCountry.id === country.id;
                return (
                  <div 
                    key={country.id}
                    onClick={() => handleCountrySelect(country)}
                    className="group flex flex-col items-center gap-3 cursor-pointer"
                  >
                    <div 
                      className={`relative w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden transition-all duration-300 ease-out shadow-md ${isSelected ? 'ring-4 ring-emerald-600 ring-offset-2 scale-110 shadow-xl' : 'hover:scale-105 hover:shadow-lg opacity-85 hover:opacity-100'}`}
                    >
                      <img src={country.image} alt={country.name} className="w-full h-full object-cover" />
                      {!isSelected && <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-transparent transition-colors duration-300" />}
                    </div>
                    <span className={`text-sm font-semibold text-center w-24 leading-tight transition-colors duration-300 ${isSelected ? 'text-slate-900 font-black' : 'text-slate-500 group-hover:text-slate-800'}`}>
                      {country.name}
                    </span>
                  </div>
                );
              })}
              
              {/* Explore More Trigger */}
              <div className="group flex flex-col items-center gap-3 cursor-pointer">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden bg-white border-2 border-dashed border-slate-300 flex items-center justify-center transition-all duration-300 hover:border-[#0B7707] hover:bg-emerald-50/50 shadow-sm hover:shadow-md">
                  <div className="flex flex-col items-center gap-1.5 text-slate-400 group-hover:text-[#0B7707] transition-colors">
                    <Plus size={24} />
                    <span className="text-xs font-bold uppercase tracking-wider">Search</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-center w-24 leading-tight text-slate-500 group-hover:text-[#0B7707] transition-colors">Explore All</span>
              </div>
            </div>
          </div>

          {/* Full-Width Infinite Universities Slider */}
          {currentUniversities.length > 0 && (
            <div className="w-full mt-14">
              <div className="flex justify-between items-end mb-6 px-2">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Top Institutions in {selectedCountry.name}
                  </h3>
                  <p className="text-slate-500 text-sm mt-0.5">Sliding elite colleges for {selectedCountry.name}. Hover to pause.</p>
                </div>
              </div>
              
              <div className="relative w-full overflow-hidden bg-white py-6 rounded-3xl border border-slate-200/60 shadow-xs">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Endless row element */}
                <div className="flex w-max animate-infinite-slide gap-6 px-4">
                  {sliderItems.map((uni) => (
                    <div 
                      key={`${selectedCountry.id}-${uni.slideId}`} 
                      className="flex flex-col justify-between bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 w-64 h-40 transition-all hover:shadow-lg hover:border-emerald-200 shrink-0 relative group"
                    >
                      <div className="flex items-start justify-between">
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Rank #{uni.rank}
                        </span>
                        <button 
                          onClick={() => toggleShortlist(uni)}
                          className="text-slate-300 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Heart size={16} className={shortlist.some(s => s.name === uni.name) ? "fill-red-500 text-red-500" : ""} />
                        </button>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-[#0B7707] transition-colors">{uni.name}</h4>
                        <div className="flex justify-between items-center mt-3 text-xs text-slate-500">
                          <span className="flex items-center gap-1"><MapPin size={12} /> {uni.city}</span>
                          <span className="font-extrabold text-[#FD661F]">${uni.cost.toLocaleString()}/yr</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
/* ================================================================
   SKYSCRAPERS — buildings.js
   Curated draft dataset + shared detailed SVG renderer
   ================================================================ */

const BUILDING_IMAGES = {
  "one-canada-square": "3552d2407c177f12434da3c6d67019e5.jpg",
  "101-collins-street": "101-Collins-Street_01.jpg",
  "taipei-101": "6575ffcb034cf027512f73dbe40bc010.jpg",
  "eureka-tower": "2a2f34a9148b27c7c06f61b88e35b278.jpg",
  "zifeng-tower": "b56b1a275d1a92e56cd0214875ea002e.jpg",
  "burj-khalifa": "68953f3c660d8b1b402e633c52951e74.jpg",
  "al-hamra-tower": "3d74201e3ec70eaf8fd08e7d5f101eba.jpg",
  "heron-tower": "5beb701c30312c60da044dd464c9de88.jpg",
  "lotte-world-tower": "4b5d042cd1635937ada95c7c45dc6139.jpg",
  "shanghai-tower": "dff7164208e3c28ec52f127764116cb8.jpg",
  "empire-state-building": "5b9be864179de4e5170d1148419f0808.jpg",
  "kingdom-centre": "5fe2b33b2434eee09e115e2c8fbf22a3.jpg",
  "the-shard": "600c15ece038f5f19ce7c3ae78c83071.jpg",
  "tokyo-skytree": "0b732ec10c5329ee9e1c3ed5eb5cad21.jpg",
  "willis-tower": "261d02455346811fe4fda49b8e70b4a1.jpg"
};

const BUILDINGS = [
  {
    "id": "one-canada-square",
    "name": "One Canada Square",
    "folder": "ONE CANADA SQUARE",
    "city": "London",
    "country": "United Kingdom",
    "address": "1 Canada Square, Canary Wharf",
    "region": "west-europe",
    "height": 235,
    "heightFt": 771,
    "floors": 50,
    "year": 1991,
    "period": "1988–1991",
    "cost": "£624 million",
    "materials": "Stainless Steel, Glass, Concrete",
    "architect": "César Pelli",
    "firm": "Adamson Associates / Frederick Gibberd Coombes",
    "use": "Office",
    "overview": "One Canada Square was the cornerstone of the Canary Wharf redevelopment and a definitive turning point in British skyscraper history. Architect César Pelli designed the tower to function as a \"lighthouse\" for London’s new financial district. Its most recognizable feature is the pyramidal roof, designed to be a visual waypoint even in London’s notorious fog. The facade, clad in patterned stainless steel, reflects the sky and provides a high-tech contrast to the traditional masonry of the historic City of London.",
    "cultural": "The tower is a physical manifestation of Thatcher-era economic deregulation. It transformed a derelict docklands area into a global financial powerhouse, symbolizing the modernization of the British economy and the shift toward a US-style skyline that prioritized corporate transparency and international prestige.",
    "construction": "The building utilizes a high-strength steel frame, which was an innovation in the UK at the time. To ensure the pyramidal cap was functional as well as aesthetic, it was equipped with a large aircraft warning light that became an iconic part of the skyline. The stainless steel cladding was \"linen-finished\" to prevent glare from blinded pilots or nearby residents while maintaining a brilliant metallic sheen.",
    "effects": "One Canada Square held the title of the UK’s tallest building for 21 years until the completion of The Shard. It successfully anchored the Canary Wharf development, proving that a secondary financial hub could compete with the City of London and permanently altering the city’s economic geography.",
    "lat": 51.5100,
    "lng": 0.0050,
    "images": [
      "3552d2407c177f12434da3c6d67019e5.jpg",
      "a5a86e356a40af183895a21e8d70a204.jpg",
      "con11.jpg",
      "f5c24a4100a5da4523a0b6484dce7a9b.jpg"
    ]
  },
  {
    "id": "101-collins-street",
    "name": "101 Collins Street",
    "folder": "101 COLLINS STREET",
    "city": "Melbourne",
    "country": "Australia",
    "address": "101 Collins Street, Melbourne",
    "region": "oceania",
    "height": 260,
    "heightFt": 853,
    "floors": 57,
    "year": 1991,
    "period": "1988–1991",
    "cost": "$400 million AUD",
    "materials": "Granite, Glass, 23-carat Gold Leaf",
    "architect": "Denton Corker Marshall",
    "firm": "Denton Corker Marshall / Johnson Burgee",
    "use": "Office",
    "overview": "101 Collins Street is an exercise in Postmodern elegance located at the prestigious end of Melbourne’s most famous street. Designed to mimic the luxury of a grand hotel rather than a standard office block, the building features an opulent lobby and a meticulously sculpted top. Its silhouette, defined by a massive spire and buttressed forms, provides a sense of verticality that made it the most coveted business address in Australia for decades.",
    "cultural": "This tower represents the marriage of Melbourne’s \"European\" heritage with late 20th-century commercial ambition. The use of gold leaf and high-end marble in the lobby was a statement of corporate wealth and architectural sophistication during Australia’s economic boom in the early 90s.",
    "construction": "The structure uses a hybrid reinforced concrete core and steel frame. The lobby was a major collaboration with New York legend Philip Johnson’s firm, ensuring the interior met international luxury standards. The exterior granite was sourced specifically to provide a sense of permanence and civic weight.",
    "effects": "It remains a benchmark for Australian commercial architecture, proving that the ground-level experience (the lobby and plaza) is just as important as the height. It successfully densified the CBD while maintaining the \"Paris end\" of Collins Street’s reputation for refinement.",
    "lat": -37.8142,
    "lng": 144.9718,
    "images": [
      "101-Collins-Street_01.jpg",
      "leasing-img1.jpg",
      "con1.jpg",
      "de153521f00834f96eb7d3f2dea686e4.jpg"
    ]
  },
  {
    "id": "taipei-101",
    "name": "Taipei 101",
    "folder": "TAIPEI 101",
    "city": "Taipei",
    "country": "Taiwan",
    "address": "No. 7, Section 5, Xinyi Rd",
    "region": "east-asia",
    "height": 508,
    "heightFt": 1667,
    "floors": 101,
    "year": 2004,
    "period": "1999–2004",
    "cost": "$1.8 billion",
    "materials": "Steel, High-performance Glass, Concrete",
    "architect": "C.Y. Lee",
    "firm": "C.Y. Lee & Partners",
    "use": "Office, Retail, Observation",
    "overview": "Taipei 101 is a masterpiece of biomimicry and cultural symbolism. Its form, composed of eight stacked modules, is inspired by a stalk of bamboo, symbolizing growth and resilience. The design also incorporates elements of traditional Chinese pagodas and \"Ruyi\" symbols for luck. At its completion, it was the first building in the world to break the half-kilometer height barrier, serving as a monument to Taiwan’s technological maturity.",
    "cultural": "The building was a declaration of Taiwan’s presence on the global stage. By integrating ancient motifs into a hyper-modern skyscraper, C.Y. Lee successfully created a design that felt distinctly Eastern in a genre of architecture long dominated by Western aesthetic standards.",
    "construction": "To survive Taiwan's frequent typhoons and earthquakes, engineers installed a 660-ton Tuned Mass Damper (TMD) between the 87th and 92nd floors. This giant golden sphere sways to counteract the building's movement. It is the only TMD in the world open to public viewing, turning a critical engineering component into a major tourist attraction.",
    "effects": "Taipei 101 held the world's tallest title until 2010 and remains a global case study in seismic engineering. Its annual New Year's Eve fireworks display is one of the most televised events in the world, cementing the building's status as a global cultural icon.",
    "lat": 25.0339,
    "lng": 121.5645,
    "images": [
      "6575ffcb034cf027512f73dbe40bc010.jpg",
      "509cd172d9c57140f3bd9827ff5b48dc.jpg",
      "con13.jpg",
      "a8b6f61c87b6d982a6ead92a684666c0.jpg"
    ]
  },
  {
    "id": "eureka-tower",
    "name": "Eureka Tower",
    "folder": "EUREKA TOWER",
    "city": "Melbourne",
    "country": "Australia",
    "address": "7 Riverside Quay, Southbank",
    "region": "oceania",
    "height": 297,
    "heightFt": 975,
    "floors": 91,
    "year": 2006,
    "period": "2002–2006",
    "cost": "$500 million AUD",
    "materials": "Concrete, 24-carat Gold Plated Glass, Aluminum",
    "architect": "Fender Katsalidis",
    "firm": "Fender Katsalidis Architects",
    "use": "Residential",
    "overview": "The Eureka Tower is one of the tallest residential buildings in the world and a literal piece of history written into the skyline. Its design is a tribute to the 1854 Eureka Stockade rebellion. The building’s gold crown represents the gold rush, the red stripe represents the blood spilled during the revolt, and the blue glass with white lines represents the flag flown by the rebels.",
    "cultural": "Few skyscrapers attempt to tell a nationalistic story so directly. Eureka Tower is a tribute to Australian democratic roots, using the luxury medium of a supertall skyscraper to commemorate a working-class struggle. It represents Melbourne’s identity as a city of both history and high-density modern living.",
    "construction": "The building utilizes a massive high-strength concrete core to maintain rigidity for its residents at nearly 300 meters. The top ten floors are clad in glass plated with 24-carat gold, which requires specialized cleaning to maintain its brilliance. It also features a complex water-tank damping system at the summit to reduce wind sway.",
    "effects": "It completely transformed the Southbank district from an industrial area into a high-end residential hub. Its \"Skydeck 88\" is a critical part of Melbourne's tourism infrastructure, offering the highest observation point in the Southern Hemisphere.",
    "lat": -37.9216,
    "lng": 145.0647,
    "images": [
      "2a2f34a9148b27c7c06f61b88e35b278.jpg",
      "40ba1cdd4ee96938445624fac69eec4e.jpg",
      "con7.jpg",
      "6466de9574a27e29a133e8bd68dca985.jpg"
    ]
  },
  {
    "id": "zifeng-tower",
    "name": "Zifeng Tower",
    "folder": "ZIFENG TOWER",
    "city": "Nanjing",
    "country": "China",
    "address": "No. 1 Zhongshan North Rd",
    "region": "east-asia",
    "height": 450,
    "heightFt": 1476,
    "floors": 89,
    "year": 2010,
    "period": "2005–2010",
    "cost": "$750 million",
    "materials": "Steel, Glass, Concrete",
    "architect": "Adrian Smith",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Mixed-use (Office, Hotel, Retail)",
    "overview": "Zifeng Tower is a vertical landmark that bridges Nanjing’s historic past with its industrial future. Architect Adrian Smith drew inspiration from the local Yangtze River and the scales of the Chinese dragon. The tower features two interlocking triangular masses that rotate as they rise, creating a dynamic sense of movement and providing varied views of the surrounding city and mountains.",
    "cultural": "Nanjing is a city of immense historical importance, and Zifeng Tower was designed to be a modern counterpart to its ancient walls. The rhythmic \"dragon scale\" facade is a subtle nod to Chinese mythology, ensuring the building feels rooted in its specific geographical and cultural location.",
    "construction": "The tower employs an advanced outrigger and belt-truss system to manage seismic and wind loads. The facade is particularly innovative; the glass panels are angled to catch the light at different times of the day, mimicking the shimmering texture of a dragon's skin or the rippling water of the Yangtze.",
    "effects": "At its completion, it was the 7th tallest building in the world. It signaled Nanjing’s emergence as a major player in China’s economic expansion and proved that supertall buildings could maintain a sense of organic, sculptural beauty.",
    "lat": 32.0617,
    "lng": 118.7773,
    "images": [
      "b56b1a275d1a92e56cd0214875ea002e.jpg",
      "caa9d730c58466d9e0d34c21da1bd81e.jpg",
      "con17.jpg",
      "fec40dfe74763fe4425b14a48fff8b76.jpg"
    ]
  },
  {
    "id": "burj-khalifa",
    "name": "Burj Khalifa",
    "folder": "BURJ KHALIFA",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "address": "1 Mohammed bin Rashid Boulevard",
    "region": "middle-east",
    "height": 828,
    "heightFt": 2717,
    "floors": 163,
    "year": 2010,
    "period": "2004–2010",
    "cost": "$1.5 billion",
    "materials": "High-performance Concrete, Steel, Glass, Aluminum",
    "architect": "Adrian Smith",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Mixed-use (Residential, Hotel, Office, Observation)",
    "overview": "The Burj Khalifa is the tallest structure ever built by human hands. It is the definitive icon of Neo-Futurism and the \"Vertical City.\" Its Y-shaped floor plan, inspired by the Hymenocallis desert flower, provides structural stability while maximizing views of the Arabian Gulf. It is a self-contained ecosystem housing luxury residences, corporate suites, and the world’s first Armani Hotel.",
    "cultural": "This tower represents Dubai’s strategic pivot from an oil-based economy to a global hub for tourism and finance. It is a monument to human ambition, proving that environmental and engineering limits are merely starting points for 21st-century architecture.",
    "construction": "The primary innovation is the Buttressed Core, a hexagonal central hub supported by three wings that provide immense torsional rigidity. High-performance concrete was pumped to a world-record height of 606 meters. The exterior features a specialized glass system designed to withstand the extreme desert heat and high-altitude winds.",
    "effects": "The Burj Khalifa remains the ultimate benchmark for the CTBUH. It catalyzed the development of Downtown Dubai and became a global symbol of the 21st-century \"Megatall\" era, proving that humanity could build nearly a kilometer into the sky.",
    "lat": 25.1972,
    "lng": 55.2744,
    "images": [
      "68953f3c660d8b1b402e633c52951e74.jpg",
      "9ac579759e09a5e4d6701ea690b53654.jpg",
      "con4.jpg",
      "8464753cd2e7f35f4bdf576a3a90e02f.jpg"
    ]
  },
  {
    "id": "al-hamra-tower",
    "name": "Al Hamra Tower",
    "folder": "AL HAMRA TOWER",
    "city": "Kuwait City",
    "country": "Kuwait",
    "address": "Al Shuhada Street, Sharq",
    "region": "middle-east",
    "height": 413,
    "heightFt": 1354,
    "floors": 80,
    "year": 2011,
    "period": "2005–2011",
    "cost": "$500 million",
    "materials": "Concrete, Jura Limestone, Glass",
    "architect": "Gary Haney",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Office, Retail",
    "overview": "Al Hamra Tower is a unique example of a skyscraper where the form is dictated by environmental defense. The building appears to be wrapped in a protective stone veil. The south-facing side is a massive, solid limestone wall designed to block the intense Kuwaiti sun, while the north-facing side is open glass to allow for views of the sea. It is one of the tallest asymmetric buildings in the world.",
    "cultural": "The tower's elegant, twisting form is inspired by the traditional robes of the region. It represents Kuwait’s modern identity—sophisticated and globally connected, yet deeply aware of its environmental and cultural heritage.",
    "construction": "It features the world's tallest stone-clad facade, using thousands of Jura limestone panels. Because of its asymmetric design, the building required complex cantilevered structural engineering. The grand lobby features a \"lamella\" structure that is as much an engineering feat as it is a piece of art.",
    "effects": "Al Hamra proved that a \"solid\" skyscraper could be just as iconic as a glass one. It set a new standard for climate-responsive design in the Middle East and became the definitive landmark of the Kuwait City skyline.",
    "lat": 29.3697,
    "lng": 47.9907,
    "images": [
      "3d74201e3ec70eaf8fd08e7d5f101eba.jpg",
      "905b000095176cb3d8e751e06ae16c02.jpg",
      "cons-322.avif",
      "al-hamra-tower-kuwait-city-a100218-ab1.jpg"
    ]
  },
  {
    "id": "heron-tower",
    "name": "Heron Tower",
    "folder": "HERON TOWER",
    "city": "London",
    "country": "United Kingdom",
    "address": "110 Bishopsgate",
    "region": "west-europe",
    "height": 230,
    "heightFt": 755,
    "floors": 46,
    "year": 2011,
    "period": "2007–2011",
    "cost": "£290 million",
    "materials": "Steel, Clear Glass, Stainless Steel",
    "architect": "Lee Polisano",
    "firm": "Kohn Pedersen Fox (KPF)",
    "use": "Office, Restaurant",
    "overview": "Heron Tower (now Salesforce Tower London) was designed with a focus on transparency and social connectivity. The concept of the \"Vertical Village\" is central to its design; the office spaces are organized around three-story atriums that encourage interaction between employees. It was one of the first buildings to challenge the traditional, closed-off nature of London’s financial district architecture.",
    "cultural": "Heron Tower represents a shift in corporate culture toward openness and sustainability. Its high-transparency facade and public-facing amenities (like the massive aquarium in the lobby) signal a desire for buildings to be part of the city’s social fabric rather than just private monoliths.",
    "construction": "The building utilizes an offset core, placing the elevators and service areas on the edge of the floor plate to create large, unobstructed office spaces. The south facade is integrated with a massive solar panel array, one of the largest in the UK, showcasing a commitment to sustainable urban density.",
    "effects": "It successfully integrated high-end dining (such as Duck & Waffle) into the top of a commercial tower, making the building a destination for the general public as well as office workers. It paved the way for the next generation of London's social skyscrapers.",
    "lat": 51.6280,
    "lng": -0.1600,
    "images": [
      "5beb701c30312c60da044dd464c9de88.jpg",
      "35d025b34c897aaa941a1ae9b069d5b3.jpg",
      "con8.jpg",
      "b5dc81d78975445c9a251ca2c94d879a.jpg"
    ]
  },
  {
    "id": "lotte-world-tower",
    "name": "Lotte World Tower",
    "folder": "LOTTE WORLD TOWER",
    "city": "Seoul",
    "country": "South Korea",
    "address": "300 Olympic-ro, Songpa-gu",
    "region": "east-asia",
    "height": 555,
    "heightFt": 1821,
    "floors": 123,
    "year": 2017,
    "period": "2010–2016",
    "cost": "$3.3 billion",
    "materials": "High-strength Concrete, Steel Diagrid, Glass",
    "architect": "James von Klemperer",
    "firm": "Kohn Pedersen Fox (KPF)",
    "use": "Mixed-use (Office, Hotel, Residential, Observation)",
    "overview": "Lotte World Tower is a modern interpretation of traditional Korean art. Its tapered, slender form is inspired by the gentle curves of Goryeo celadon ceramics and the elegant stroke of a calligraphy brush. As the tallest building in Korea, it serves as a vertical axis for the city of Seoul, blending ancient aesthetic principles with 21st-century hyper-modernity.",
    "cultural": "The tower is a monument to South Korea’s economic maturity and global cultural influence. By grounding its design in traditional \"lines,\" it provides a sense of cultural continuity in a city that has undergone rapid, often chaotic, modernization.",
    "construction": "The upper portion of the tower features a Diagrid structure, a diamond-shaped steel lattice that supports the building’s weight without the need for internal columns. This allows for completely unobstructed views from the observation deck. It is designed to survive a magnitude 9.0 earthquake and wind speeds up to 80 meters per second.",
    "effects": "Lotte World Tower redefined Seoul’s skyline and became a global symbol of Korea’s engineering prowess. It received LEED Gold certification for its sustainable energy systems, proving that a building of this scale can operate as a self-sustaining ecosystem.",
    "lat": 37.5131,
    "lng": 127.1025,
    "images": [
      "4b5d042cd1635937ada95c7c45dc6139.jpg",
      "9cf40cf8823f0173c2300fbd6b9c260c.jpg",
      "con10.jpg",
      "fc239f2687c362e03bccbba1750e959b.jpg"
    ]
  },
  {
    "id": "shanghai-tower",
    "name": "Shanghai Tower",
    "folder": "SHANGHAI TOWER",
    "city": "Shanghai",
    "country": "China",
    "address": "501 Yincheng Middle Rd",
    "region": "east-asia",
    "height": 632,
    "heightFt": 2073,
    "floors": 128,
    "year": 2015,
    "period": "2008–2015",
    "cost": "$2.4 billion",
    "materials": "Double-skin Glass, Steel, Reinforced Concrete",
    "architect": "Jun Xia",
    "firm": "Gensler",
    "use": "Mixed-use (Office, Hotel, Retail, Observation)",
    "overview": "The Shanghai Tower is the world’s tallest \"green\" building. Its defining feature is its 120-degree twist, which was not just an aesthetic choice but a functional one. The building consists of nine cylindrical buildings stacked on top of each other, all enclosed by an inner and outer glass layer that creates \"sky lobbies\" acting as social hubs and thermal buffers.",
    "cultural": "As the tallest building in China, it represents the country’s emergence as a global leader in sustainable technology. It completes the Lujiazui skyline, standing as a symbol of a transparent, globalized, and future-focused China.",
    "construction": "The 120-degree twist reduces wind loads by 24%, which saved $58 million in structural steel costs. The \"double-skin\" facade acts like a thermos, significantly reducing the energy needed for heating and cooling. It also features 270 wind turbines at the summit that provide power for the building’s external lighting.",
    "effects": "It set a new global standard for LEED Platinum skyscrapers. Its sky lobbies proved that social spaces could exist at extreme heights, redefining the \"vertical city\" as a place of community rather than just corporate isolation.",
    "lat": 31.2336,
    "lng": 121.5055,
    "images": [
      "dff7164208e3c28ec52f127764116cb8.jpg",
      "02e7b294645cb2fc951d4c126ffeecbf.jpg",
      "con12.jpg",
      "1921888844fe2f5b345c164f5d1425fd.jpg"
    ]
  },
  {
    "id": "empire-state-building",
    "name": "Empire State Building",
    "folder": "EMPIRE STATE BUILDING",
    "city": "New York City",
    "country": "United States",
    "address": "20 W 34th St, Manhattan",
    "region": "north-america",
    "height": 381,
    "heightFt": 1250,
    "floors": 102,
    "year": 1931,
    "period": "1930–1931",
    "cost": "$41 million",
    "materials": "Steel Frame, Indiana Limestone, Granite, Aluminum",
    "architect": "Shreve, Lamb & Harmon",
    "firm": "Starrett Bros. & Eken",
    "use": "Office, Observation",
    "overview": "The Empire State Building is the definitive symbol of the 20th century skyscraper. Emerging during the Great Depression, its stepped back silhouette was a direct response to the 1916 Zoning Resolution, which required buildings to set back as they rose to allow sunlight to reach the streets. Its Art Deco aesthetic, characterized by geometric rigor and vertical emphasis, remains the gold standard for high rise corporate identity.",
    "cultural": "Completed during a fierce race to the sky in Manhattan, it stood as the world’s tallest building for 40 years. It serves as a monument to American resilience and industrial might, symbolizing New York City’s status as the unofficial capital of the modern world.",
    "construction": "The speed of construction remains a legendary feat of logistics, with the frame rising at a rate of 4.5 floors per week. It utilizes a riveted steel frame clad in 200,000 cubic feet of Indiana limestone. The mooring mast at the top was originally intended for dirigibles, though it now serves as a high tech broadcast antenna.",
    "effects": "It proved that a massive supertall could be built with incredible speed and efficiency. It remains one of the most profitable and recognizable pieces of real estate on Earth, setting the template for the commercial observation deck as a primary revenue stream for skyscrapers.",
    "lat": 40.7484,
    "lng": -73.9857,
    "images": [
      "5b9be864179de4e5170d1148419f0808.jpg",
      "696e8fc408a60848032ff223db73de96.jpg",
      "con6.jpg",
      "bc44727e286043d58a1dcbd3c12624f1.jpg"
    ]
  },
  {
    "id": "kingdom-centre",
    "name": "Kingdom Centre",
    "folder": "KINGDOM CENTRE",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "address": "King Fahd Rd, Al Olaya",
    "region": "middle-east",
    "height": 302,
    "heightFt": 992,
    "floors": 41,
    "year": 2002,
    "period": "1999–2002",
    "cost": "$450 million",
    "materials": "Silver Reflective Glass, Steel, Concrete",
    "architect": "Ellerbe Becket",
    "firm": "Omrania & Associates",
    "use": "Mixed-use (Retail, Office, Hotel)",
    "overview": "The Kingdom Centre is famous for its massive parabolic opening at the top, crossed by a 65 meter glass Sky Bridge. This void was a clever architectural response to local building regulations that limited occupied floors, allowing the building to achieve iconic height and status while remaining within legal limits. Its shimmering silver skin acts as a mirror to the desert sun, changing color throughout the day.",
    "cultural": "As a landmark of Saudi Arabian modernization, it incorporates traditional Islamic geometry into a sleek, ultra modern aesthetic. It houses a women only floor, reflecting specific social norms of Saudi Arabia at the time of its completion while pushing the boundaries of regional architecture.",
    "construction": "The building is a hybrid structure with a reinforced concrete lower half and a steel framed upper half. The 300 ton Sky Bridge was lifted into place as a single pre assembled unit. Its silver glass skin manages extreme desert heat by reflecting over 90% of solar radiation, significantly reducing the energy required for cooling.",
    "effects": "It redefined Riyadh’s skyline and proved that negative space could be just as iconic as the building’s mass. It remains the most recognizable symbol of Saudi Arabia’s architectural ambition and its transition toward a globalized, diversified economy.",
    "lat": 24.7745,
    "lng": 46.6753,
    "images": [
      "5fe2b33b2434eee09e115e2c8fbf22a3.jpg",
      "c51a1b9f1d423e9616d21b72b60f0d52.jpg",
      "con9.jpg",
      "deb1e3f02f98e25a32d51a5e825d1d25.jpg"
    ]
  },
  {
    "id": "the-shard",
    "name": "The Shard",
    "folder": "THE SHARD",
    "city": "London",
    "country": "United Kingdom",
    "address": "32 London Bridge St",
    "region": "west-europe",
    "height": 310,
    "heightFt": 1016,
    "floors": 72,
    "year": 2012,
    "period": "2009–2012",
    "cost": "$600 million",
    "materials": "Extra White Glass, Steel, Concrete",
    "architect": "Renzo Piano",
    "firm": "Renzo Piano Building Workshop",
    "use": "Mixed-use (Office, Hotel, Residential)",
    "overview": "Designed by Pritzker winner Renzo Piano, The Shard is an irregular pyramidal tower envisioned as a Vertical City. Its form is inspired by London’s historic church spires and ship masts. The fractured top, where the glass shards do not touch, allows the building to breathe and dissolve into the ever changing London sky, emphasizing transparency over monolithic weight.",
    "cultural": "The Shard was a polarizing addition to London, criticized for overwhelming historic landmarks like St. Paul’s Cathedral. However, it has become a symbol of 21st century London, international and transparent, successfully revitalizing the South Bank and shifting the city’s architectural gravity.",
    "construction": "Engineers used Top Down Construction to meet the Olympic deadline, a first for a core of this height in the UK. This allowed the core to be built upward while the basement was still being excavated downward. The building is a hybrid structure, using concrete for stability in the lower floors and steel for flexibility in the upper reaches.",
    "effects": "The Shard proved that a skyscraper could be integrated into a high density transit hub at London Bridge Station. It is now the most recognizable silhouette in the UK, proving that verticality can coexist with history when executed with high quality materials and thoughtful design.",
    "lat": 51.3850,
    "lng": 0.1100,
    "images": [
      "600c15ece038f5f19ce7c3ae78c83071.jpg",
      "7f526cb76e748cc53c4eeddc371abddc.jpg",
      "con14.jpg",
      "ebd2dcdc7c2c4da5dd6ac10d906352f2.jpg"
    ]
  },
  {
    "id": "tokyo-skytree",
    "name": "Tokyo Skytree",
    "folder": "TOKYO SKYTREE",
    "city": "Tokyo",
    "country": "Japan",
    "address": "1-1-2 Oshiage, Sumida City",
    "region": "east-asia",
    "height": 634,
    "heightFt": 2080,
    "floors": 29,
    "year": 2012,
    "period": "2008–2012",
    "cost": "$800 million",
    "materials": "High Strength Steel Tubes, Reinforced Concrete Core",
    "architect": "Nikken Sekkei",
    "firm": "Nikken Sekkei, Obayashi Corp",
    "use": "Broadcasting, Observation",
    "overview": "Tokyo Skytree is the tallest free standing tower in the world. Its design utilizes a fusion of futuristic aesthetics and ancient Japanese geometry, transitioning from a triangular base representing stability to a circular top representing fluidity. It represents Neo Futurism, where high tech infrastructure meets deep historical roots to solve urban communication challenges in a high density environment.",
    "cultural": "The height of 634m represents Musashi, the ancient name of the region. The color, Skytree White, is based on Aijiro, the lightest shade of traditional indigo. It is designed to be a tower that transcends time, honoring Japan’s craftsmanship heritage while securing its digital future.",
    "construction": "Engineers utilized Shinbashira seiso (Center Column Vibration Control), mimicking the central pillar of 8th century pagodas. The concrete core is separate from the steel frame; they sway at different frequencies during earthquakes, canceling out up to 50% of the seismic energy. This fusion of ancient wisdom and modern damping technology is a landmark in seismic engineering.",
    "effects": "The Skytree successfully revitalized the Sumida district, shifting Tokyo’s tourism focus toward the east. It remains a critical piece of national infrastructure, ensuring reliable digital communication during disasters and proving that ancient architectural wisdom can solve 21st century problems.",
    "lat": 35.7101,
    "lng": 139.8107,
    "images": [
      "0b732ec10c5329ee9e1c3ed5eb5cad21.jpg",
      "34004f0ec5c994bd0abac346b6cc62ef.jpg",
      "con15.jpg",
      "bf541d384538dd9b8e5e0c60905d7080.jpg"
    ]
  },
  {
    "id": "willis-tower",
    "name": "Willis Tower",
    "folder": "WILLIS TOWER",
    "city": "Chicago",
    "country": "United States",
    "address": "233 S Wacker Dr",
    "region": "north-america",
    "height": 442,
    "heightFt": 1450,
    "floors": 108,
    "year": 1974,
    "period": "1970–1974",
    "cost": "$150 million",
    "materials": "Steel Frame, Black Aluminum, Bronze Tinted Glass",
    "architect": "Bruce Graham",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Office, Observation",
    "overview": "Formerly known as the Sears Tower, this building is the definitive monument to structural rationalism. Its form was dictated entirely by the revolutionary bundled tube structural system developed by engineer Fazlur Rahman Khan. This innovation allowed for much higher structures with less steel, creating a stepped silhouette that became an instant icon of American modernism.",
    "cultural": "The Willis Tower is the heart of Chicago’s identity as the birthplace of the skyscraper. It represents the peak of American mid century modernism and the power of Chicago as a global center of trade, engineering, and architectural innovation.",
    "construction": "Engineer Fazlur Rahman Khan grouped nine separate steel tubes into one giant square. These tubes terminate at different heights, which reduces wind sway by breaking up wind vortices and creates the iconic stepped appearance. This design allowed for larger, column free office spaces, maximizing functional efficiency for corporate tenants.",
    "effects": "The bundled tube system is the ancestor of almost every modern supertall building today, including the Burj Khalifa. It proved that engineering and aesthetics could be perfectly unified, setting a standard for structural efficiency that is still studied by architects and engineers worldwide.",
    "lat": 41.8789,
    "lng": -87.6359,
    "images": [
      "261d02455346811fe4fda49b8e70b4a1.jpg",
      "39137f5a059cf5d1ce4413484bbb1b3c.jpg",
      "con16.jpg",
      "791023e92ce389ed612641182765e513.jpg"
    ]
  }
];


function getBuildingById(id) {
  return BUILDINGS.find(b => b.id === id);
}

function getBuildingsByRegion(region) {
  return BUILDINGS.filter(b => b.region === region).sort((a, b) => b.height - a.height);
}

function getAllByHeight() {
  return [...BUILDINGS].sort((a, b) => b.height - a.height);
}

function getAllByYear() {
  return [...BUILDINGS].sort((a, b) => a.year - b.year || b.height - a.height);
}


const BUILDING_SVG_FILES = {
  "one-canada-square": "one canada.svg",
  "101-collins-street": "101 Collins Street.svg",
  "taipei-101": "taipei 101.svg",
  "eureka-tower": "Eureka Tower.svg",
  "zifeng-tower": "Zifeng Tower.svg",
  "burj-khalifa": "burj khalifa.svg",
  "al-hamra-tower": "Al Hamra Tower.svg",
  "heron-tower": "heron tower.svg",
  "lotte-world-tower": "lotte tower.svg",
  "shanghai-tower": "shanghai tower.svg",
  "empire-state-building": "empire state buildimng.svg",
  "kingdom-centre": "Kingdom Centre.svg",
  "the-shard": "The Shard.svg",
  "tokyo-skytree": "tokyo skytree.svg",
  "willis-tower": "willis tower.svg"
};

function renderBuildingSvg(id, w, h, mode) {
  const b = getBuildingById(id) || { id };
  const safeId = String(id).replace(/[^a-z0-9_-]/gi, '-');
  const file = BUILDING_SVG_FILES[id];
  if (!file) {
    return `<g class="tower tower-${safeId}"></g>`;
  }
  const href = encodeURI(file);
  let x, y, iw, ih;
  if (mode === 'height') {
    x = 0; y = 0; iw = w; ih = h;
  } else {
    const ground = h;
    const heightRatio = b.height ? Math.min(0.95, b.height / 828) : 0.5;
    ih = h * heightRatio;
    iw = ih * (w / h);
    x = (w - iw) / 2;
    y = ground - ih;
  }
  return `<g class="tower tower-${safeId}"><image href="${href}" xlink:href="${href}" x="${x}" y="${y}" width="${iw}" height="${ih}" preserveAspectRatio="xMidYMax meet"/></g>`;
}

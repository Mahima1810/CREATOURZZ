import type { Photo } from '@/lib/types';

/**
 * Photography used across the site.
 *
 * Every image is an openly licensed photograph from Wikimedia Commons, served
 * from its thumbnail endpoint. Author and licence travel with each entry so the
 * /credits page can render the attribution those licences require.
 */
export const photos = {
  heroHome: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-05.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-05.jpg',
    alt: 'Turquoise lagoon with a line of thatched overwater villas at golden hour',
    credit: { author: 'Martin Falbisoner', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-05.jpg' },
  },
  heroPackages: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Snow_peaks_of_Himalaya._IncredibleIndia.jpg/1920px-Snow_peaks_of_Himalaya._IncredibleIndia.jpg',
    alt: 'Snow-covered Himalayan peaks catching first light above a deep valley',
    credit: { author: 'Shashankk Rai', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Snow_peaks_of_Himalaya._IncredibleIndia.jpg' },
  },
  heroDestinations: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/The_Taj_Mahal_in_the_morning%2C_Agra%2C_Uttar_Pradesh%2C_India.jpg/1920px-The_Taj_Mahal_in_the_morning%2C_Agra%2C_Uttar_Pradesh%2C_India.jpg',
    alt: 'The Taj Mahal in soft morning light above its long water channel',
    credit: { author: 'Dan Searle', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:The_Taj_Mahal_in_the_morning,_Agra,_Uttar_Pradesh,_India.jpg' },
  },
  heroAbout: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Himalaya_mountain_range_with_peaks_covered_in_snow.jpg/1920px-Himalaya_mountain_range_with_peaks_covered_in_snow.jpg',
    alt: 'A wide Himalayan range under clear skies',
    credit: { author: 'Asdelhi95', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Himalaya_mountain_range_with_peaks_covered_in_snow.jpg' },
  },
  heroContact: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Alleppey_Backwaters_%2815865682269%29.jpg/1920px-Alleppey_Backwaters_%2815865682269%29.jpg',
    alt: 'Still green backwater channel fringed with coconut palms',
    credit: { author: 'Dumphasizer', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Alleppey_Backwaters_(15865682269).jpg' },
  },
  andamanHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Havelock_Island%2C_Radhanagar_Beach%2C_tropical_bliss%2C_Andaman_Islands.jpg/1920px-Havelock_Island%2C_Radhanagar_Beach%2C_tropical_bliss%2C_Andaman_Islands.jpg',
    alt: 'Two travellers walking the empty white sand of Radhanagar Beach, Havelock Island',
    credit: { author: 'Vyacheslav Argenberg', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Havelock_Island,_Radhanagar_Beach,_tropical_bliss,_Andaman_Islands.jpg' },
  },
  andaman2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Havelock_Island%2C_Radhanagar_Beach_sunset%2C_Andaman_Islands.jpg/1920px-Havelock_Island%2C_Radhanagar_Beach_sunset%2C_Andaman_Islands.jpg',
    alt: 'Dusk light settling over the shallows at Radhanagar Beach',
    credit: { author: 'Vyacheslav Argenberg', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Havelock_Island,_Radhanagar_Beach_sunset,_Andaman_Islands.jpg' },
  },
  andaman3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Andaman_Islands%2C_Neil%2C_Tropical_beach.jpg/1920px-Andaman_Islands%2C_Neil%2C_Tropical_beach.jpg',
    alt: 'A quiet tropical beach on Neil Island with shade trees at the waterline',
    credit: { author: 'Vyacheslav Argenberg', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Neil,_Tropical_beach.jpg' },
  },
  andaman4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Magnificent_Elephant_Beach%2C_Havelock_Island%2C_India.jpg/1920px-Magnificent_Elephant_Beach%2C_Havelock_Island%2C_India.jpg',
    alt: 'Shallow reef water and driftwood at Elephant Beach, Havelock Island',
    credit: { author: 'Subro89', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Magnificent_Elephant_Beach,_Havelock_Island,_India.jpg' },
  },
  andaman5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Front_View_of_Cellular_Jail%2C_Port_Blair.JPG/1920px-Front_View_of_Cellular_Jail%2C_Port_Blair.JPG',
    alt: 'The red-brick wings of the Cellular Jail in Port Blair',
    credit: { author: 'Jomesh', license: 'CC BY 3.0', page: 'https://commons.wikimedia.org/wiki/File:Front_View_of_Cellular_Jail,_Port_Blair.JPG' },
  },
  andaman6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Andaman_Islands%2C_Neil%2C_Trees_by_the_beach.jpg/1920px-Andaman_Islands%2C_Neil%2C_Trees_by_the_beach.jpg',
    alt: 'Leaning shore trees framing the sea on Neil Island',
    credit: { author: 'Vyacheslav Argenberg', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Andaman_Islands,_Neil,_Trees_by_the_beach.jpg' },
  },
  andaman7: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Snorkeling_at_Elephant_beach%2C_Havelock_Island%2CAndaman.jpg/1920px-Snorkeling_at_Elephant_beach%2C_Havelock_Island%2CAndaman.jpg',
    alt: 'Snorkellers in the shallow reef water off Elephant Beach',
    credit: { author: 'Jayashree Subramanian', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Snorkeling_at_Elephant_beach,_Havelock_Island,Andaman.jpg' },
  },
  kashmirHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Dal_Lake%27s_sunset_tour_on_a_shikara_-_Srinagar_%289966936105%29.jpg/1920px-Dal_Lake%27s_sunset_tour_on_a_shikara_-_Srinagar_%289966936105%29.jpg',
    alt: 'A shikara drifting across Dal Lake at sunset, Srinagar',
    credit: { author: 'Fulvio Spada from Torino, Italy', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Dal_Lake%27s_sunset_tour_on_a_shikara_-_Srinagar_(9966936105).jpg' },
  },
  kashmir2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Snowy_Mountain_of_Gulmarg.jpg/1920px-Snowy_Mountain_of_Gulmarg.jpg',
    alt: 'Snow-covered slopes and pine forest above Gulmarg',
    credit: { author: 'Nilmay', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Snowy_Mountain_of_Gulmarg.jpg' },
  },
  kashmir3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Betaab_Valley.jpg/1920px-Betaab_Valley.jpg',
    alt: 'The green floor of Betaab Valley ringed by steep mountains',
    credit: { author: 'Nandanupadhyay', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Betaab_Valley.jpg' },
  },
  kashmir4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Indira_Gandhi_Memorial_Tulip_Garden%2C_Srinagar.jpg/1920px-Indira_Gandhi_Memorial_Tulip_Garden%2C_Srinagar.jpg',
    alt: 'Rows of tulips in bloom below the hills at the Srinagar tulip garden',
    credit: { author: 'JyotiPN', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Indira_Gandhi_Memorial_Tulip_Garden,_Srinagar.jpg' },
  },
  kashmir5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Gulmarg_Gondola%2C_Cable_Car.JPG/1920px-Gulmarg_Gondola%2C_Cable_Car.JPG',
    alt: 'The Gulmarg gondola climbing above the snowline',
    credit: { author: 'Skywayman9', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Gulmarg_Gondola,_Cable_Car.JPG' },
  },
  kashmir6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Shikara%2C_Dal_Lake.jpg/1920px-Shikara%2C_Dal_Lake.jpg',
    alt: 'A carved wooden shikara moored on the still water of Dal Lake',
    credit: { author: 'Utsav Sabharwal Photopgrahy', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Shikara,_Dal_Lake.jpg' },
  },
  goaHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Beach_shack_at_sunset%2C_Palolem%2C_Goa.jpg/1920px-Beach_shack_at_sunset%2C_Palolem%2C_Goa.jpg',
    alt: 'A beach shack glowing at sunset on Palolem Beach, Goa',
    credit: { author: 'Niranjan Ramamurthy', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Beach_shack_at_sunset,_Palolem,_Goa.jpg' },
  },
  goa2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Palolem_Beach%2C_south_Goa.jpg/1920px-Palolem_Beach%2C_south_Goa.jpg',
    alt: 'The curved bay and palm line of Palolem Beach, south Goa',
    credit: { author: 'Mahabalaindia', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Palolem_Beach,_south_Goa.jpg' },
  },
  goa3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Basilica_of_Bom_Jesus_8_%28Old_Goa%29.jpg/1920px-Basilica_of_Bom_Jesus_8_%28Old_Goa%29.jpg',
    alt: 'The laterite facade of the Basilica of Bom Jesus in Old Goa',
    credit: { author: 'Aviatorjk', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Basilica_of_Bom_Jesus_8_(Old_Goa).jpg' },
  },
  goa4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Baga_Beach_Goa.JPG/1920px-Baga_Beach_Goa.JPG',
    alt: 'Wide sands and surf at Baga Beach, north Goa',
    credit: { author: 'Nikhilb239', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Baga_Beach_Goa.JPG' },
  },
  goa5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Dudhsagar_falls_%284266264965%29.jpg/1920px-Dudhsagar_falls_%284266264965%29.jpg',
    alt: 'Dudhsagar Falls dropping through dense forest',
    credit: { author: 'soumyajit pramanick', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Dudhsagar_falls_(4266264965).jpg' },
  },
  goa6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Rocks_on_Palolem_Beach_South_Goa.jpg/1920px-Rocks_on_Palolem_Beach_South_Goa.jpg',
    alt: 'Dark rocks and clear shallows at the end of Palolem Beach',
    credit: { author: 'Vachary', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Rocks_on_Palolem_Beach_South_Goa.jpg' },
  },
  keralaHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Tea_plantation_munnar.jpg/1920px-Tea_plantation_munnar.jpg',
    alt: 'Rolling tea gardens stepping down the hills around Munnar',
    credit: { author: 'Shino jacob koottanad', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Tea_plantation_munnar.jpg' },
  },
  kerala2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Sunset_at_Alleppey_backwaters.3.jpg/1920px-Sunset_at_Alleppey_backwaters.3.jpg',
    alt: 'A traditional houseboat moored on the Alleppey backwaters at sunset',
    credit: { author: 'Sravanbaddi', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Sunset_at_Alleppey_backwaters.3.jpg' },
  },
  kerala3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Kathakali_dance_02.jpg/1920px-Kathakali_dance_02.jpg',
    alt: 'A Kathakali performer in full costume and painted face',
    credit: { author: 'JP Vets', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Kathakali_dance_02.jpg' },
  },
  kerala4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Varkala_Beach_5.jpg/1920px-Varkala_Beach_5.jpg',
    alt: 'The red cliff edge above the sea at Varkala Beach',
    credit: { author: 'Shishirdasika', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Varkala_Beach_5.jpg' },
  },
  kerala5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Alleppey_Backwaters_%2815865677189%29.jpg/1920px-Alleppey_Backwaters_%2815865677189%29.jpg',
    alt: 'A narrow palm-lined canal in the Kerala backwaters',
    credit: { author: 'Dumphasizer', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Alleppey_Backwaters_(15865677189).jpg' },
  },
  kerala6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Tea_plantations_in_Munnar.jpg/1920px-Tea_plantations_in_Munnar.jpg',
    alt: 'Mist settling over tea plantations in Munnar',
    credit: { author: 'www.eatoutzone.com', license: 'CC BY 3.0', page: 'https://commons.wikimedia.org/wiki/File:Tea_plantations_in_Munnar.jpg' },
  },
  himachalHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Mountain_valleys_in_Manali%2C_Himachal_Pradesh%2C_India_%282015%29.jpg/1920px-Mountain_valleys_in_Manali%2C_Himachal_Pradesh%2C_India_%282015%29.jpg',
    alt: 'Pine slopes and snow ridges above the Manali valley',
    credit: { author: 'TANYASHUKLA', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Mountain_valleys_in_Manali,_Himachal_Pradesh,_India_(2015).jpg' },
  },
  himachal2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Solang_Valley_%2CManali%2C_Himachal_Pardes%2C_India.JPG/1920px-Solang_Valley_%2CManali%2C_Himachal_Pardes%2C_India.JPG',
    alt: 'The open meadow of Solang Valley below snow peaks',
    credit: { author: 'Harvinder Chandigarh', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Solang_Valley_,Manali,_Himachal_Pardes,_India.JPG' },
  },
  himachal3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Kee_monastery_Spiti_Valley.JPG/1920px-Kee_monastery_Spiti_Valley.JPG',
    alt: 'Key Monastery stacked on its hilltop above the Spiti valley',
    credit: { author: 'Ksuryawanshi', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Kee_monastery_Spiti_Valley.JPG' },
  },
  himachal4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg/1920px-Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg',
    alt: 'The Kullu valley seen from the road above Manali',
    credit: { author: 'UnpetitproleX', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Kullu_Valley_near_Manali,_Himachal_Pradesh,_India.jpg' },
  },
  himachal5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Nandaghunti_mountain.jpg/1920px-Nandaghunti_mountain.jpg',
    alt: 'A snow peak standing over a high Himalayan ridge',
    credit: { author: 'Tatocha', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Nandaghunti_mountain.jpg' },
  },
  himachal6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Deepak_Tal_Lake%2C_Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg/1920px-Deepak_Tal_Lake%2C_Leh-Manali_Highway%2C_Himachal_Pradesh%2C_India.jpg',
    alt: 'A still high-altitude lake beside the Leh-Manali highway',
    credit: { author: 'Vyacheslav Argenberg', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Deepak_Tal_Lake,_Leh-Manali_Highway,_Himachal_Pradesh,_India.jpg' },
  },
  rajasthanHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Hawa_Mahal_in_Jaipur_India.jpg/1920px-Hawa_Mahal_in_Jaipur_India.jpg',
    alt: 'The honeycomb facade of Hawa Mahal in Jaipur',
    credit: { author: 'Wander-earth', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Hawa_Mahal_in_Jaipur_India.jpg' },
  },
  rajasthan2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Gates_of_Jaisalmer_Fort_-Jaisalmer_-Rajasthan_-Seal_Sum_01.jpg/1920px-Gates_of_Jaisalmer_Fort_-Jaisalmer_-Rajasthan_-Seal_Sum_01.jpg',
    alt: 'The sandstone gates of Jaisalmer Fort',
    credit: { author: 'Seal sum', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Gates_of_Jaisalmer_Fort_-Jaisalmer_-Rajasthan_-Seal_Sum_01.jpg' },
  },
  rajasthan3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Mehrangarh_Fort_2%2C_Jodhpur%2C_Rajasthan%2C_India.jpg/1920px-Mehrangarh_Fort_2%2C_Jodhpur%2C_Rajasthan%2C_India.jpg',
    alt: 'Mehrangarh Fort rising above the blue city of Jodhpur',
    credit: { author: 'Yann (talk)', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Mehrangarh_Fort_2,_Jodhpur,_Rajasthan,_India.jpg' },
  },
  rajasthan4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Lake_Palace%2C_Lake_Pichola%2C_Udaipur.jpg/1920px-Lake_Palace%2C_Lake_Pichola%2C_Udaipur.jpg',
    alt: 'The white Lake Palace set in the middle of Lake Pichola, Udaipur',
    credit: { author: 'Clément Bardot', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Lake_Palace,_Lake_Pichola,_Udaipur.jpg' },
  },
  rajasthan5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Tourist_on_a_camel_safari_in_Jaisalmer.JPG/1920px-Tourist_on_a_camel_safari_in_Jaisalmer.JPG',
    alt: 'A camel safari crossing the dunes outside Jaisalmer',
    credit: { author: 'Rudolph.A.furtado', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Tourist_on_a_camel_safari_in_Jaisalmer.JPG' },
  },
  rajasthan6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/City_Palace_Udaipur_Rajasthan_India.JPG/1920px-City_Palace_Udaipur_Rajasthan_India.JPG',
    alt: 'The City Palace complex along the Udaipur waterfront',
    credit: { author: 'Hirumon', license: 'CC BY 3.0', page: 'https://commons.wikimedia.org/wiki/File:City_Palace_Udaipur_Rajasthan_India.JPG' },
  },
  baliHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/Tegallalang_Rice_Terraces_Bali_1.jpg/1920px-Tegallalang_Rice_Terraces_Bali_1.jpg',
    alt: 'Stepped green rice terraces at Tegallalang, Bali',
    credit: { author: 'Philip Nalangan', license: 'CC BY 4.0', page: 'https://commons.wikimedia.org/wiki/File:Tegallalang_Rice_Terraces_Bali_1.jpg' },
  },
  bali2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Pura_Ulun_Danu_Bratan_3.JPG/1920px-Pura_Ulun_Danu_Bratan_3.JPG',
    alt: 'The lakeside temple Pura Ulun Danu Bratan under cloud',
    credit: { author: 'Manuae', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Pura_Ulun_Danu_Bratan_3.JPG' },
  },
  bali3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Sunset_at_Uluwatu_Temple.jpg/1920px-Sunset_at_Uluwatu_Temple.jpg',
    alt: 'Sunset behind the cliff temple at Uluwatu',
    credit: { author: 'Bruce Cowan', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Sunset_at_Uluwatu_Temple.jpg' },
  },
  bali4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Sunset%2C_Kuta%2C_Bali%2C_Indonesia%2C_20220825_1748_0871.jpg/1920px-Sunset%2C_Kuta%2C_Bali%2C_Indonesia%2C_20220825_1748_0871.jpg',
    alt: 'Surf and sunset light on the beach at Kuta, Bali',
    credit: { author: 'Jakub Hałun', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Sunset,_Kuta,_Bali,_Indonesia,_20220825_1748_0871.jpg' },
  },
  bali5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Tegallalang_Rice_Terraces.jpg/1920px-Tegallalang_Rice_Terraces.jpg',
    alt: 'Palms and terraced paddy fields in the Ubud hills',
    credit: { author: 'EverettSlane', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Tegallalang_Rice_Terraces.jpg' },
  },
  bali6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Kuta_Bali_Indonesia_Pura-Luhur-Uluwatu-04.jpg/1920px-Kuta_Bali_Indonesia_Pura-Luhur-Uluwatu-04.jpg',
    alt: 'The clifftop approach to Pura Luhur Uluwatu',
    credit: { author: 'CEphoto, Uwe Aranas', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Kuta_Bali_Indonesia_Pura-Luhur-Uluwatu-04.jpg' },
  },
  maldivesHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-04.jpg',
    alt: 'Overwater villas on stilts above a pale turquoise lagoon',
    credit: { author: 'Martin Falbisoner', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-04.jpg' },
  },
  maldives2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Maldives-Vakarufalhi.JPG/1920px-Maldives-Vakarufalhi.JPG',
    alt: 'An atoll island ringed by reef seen from the air',
    credit: { author: 'Civvi', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Maldives-Vakarufalhi.JPG' },
  },
  maldives3: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-01.jpg/1920px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-01.jpg',
    alt: 'A timber jetty running out to overwater villas',
    credit: { author: 'Martin Falbisoner', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Diamonds_Thudufushi_Beach_and_Water_Villas,_May_2017_-01.jpg' },
  },
  maldives4: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Mandatory_jetty_shot%2C_Madhiriguraidhoo%2C_Lhaviyani_Atoll%2C_Maldives_%2811742406995%29.jpg/1920px-Mandatory_jetty_shot%2C_Madhiriguraidhoo%2C_Lhaviyani_Atoll%2C_Maldives_%2811742406995%29.jpg',
    alt: 'A jetty reaching into flat turquoise water off a Maldivian island',
    credit: { author: 'Romain Pontida', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Mandatory_jetty_shot,_Madhiriguraidhoo,_Lhaviyani_Atoll,_Maldives_(11742406995).jpg' },
  },
  maldives5: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Baa_atoll_islands.JPG/1920px-Baa_atoll_islands.JPG',
    alt: 'Scattered reef islands of the Baa atoll from above',
    credit: { author: 'Frédéric Ducarme', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Baa_atoll_islands.JPG' },
  },
  maldives6: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Sunset_behind_the_clouds%2C_Madhiriguraidhoo%2C_Lhaviyani_Atoll%2C_Maldives_%2811742804384%29.jpg/1920px-Sunset_behind_the_clouds%2C_Madhiriguraidhoo%2C_Lhaviyani_Atoll%2C_Maldives_%2811742804384%29.jpg',
    alt: 'Sunset behind low cloud over a Maldivian lagoon',
    credit: { author: 'Romain Pontida', license: 'CC BY-SA 2.0', page: 'https://commons.wikimedia.org/wiki/File:Sunset_behind_the_clouds,_Madhiriguraidhoo,_Lhaviyani_Atoll,_Maldives_(11742804384).jpg' },
  },
  amerFort: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/20191218_Amber_Fort_seen_from_Jaigarh_Fort_1617_9427.jpg/1920px-20191218_Amber_Fort_seen_from_Jaigarh_Fort_1617_9427.jpg',
    alt: 'Amber Fort spread along the ridge above Maota Lake, seen from Jaigarh',
    credit: { author: 'Jakub Hałun', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:20191218_Amber_Fort_seen_from_Jaigarh_Fort_1617_9427.jpg' },
  },
  amerPalace: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/PXL_20260305_042550919.MP_Amber_Palace_Devisinghpura%2C_Amer%2C_Jaipur%2C_Rajasthan_302001_03.jpg/1920px-PXL_20260305_042550919.MP_Amber_Palace_Devisinghpura%2C_Amer%2C_Jaipur%2C_Rajasthan_302001_03.jpg',
    alt: 'The tiered palace courtyards of Amber at Amer, Jaipur',
    credit: { author: 'Sourabh.biswas003', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:PXL_20260305_042550919.MP_Amber_Palace_Devisinghpura,_Amer,_Jaipur,_Rajasthan_302001_03.jpg' },
  },
  chittorgarh: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Vijay_Stambh_Chittorgarh_Fort_02.jpg/1920px-Vijay_Stambh_Chittorgarh_Fort_02.jpg',
    alt: 'The nine-storey Vijaya Stambha standing inside Chittorgarh Fort',
    credit: { author: 'Deepank Ranka', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Vijay_Stambh_Chittorgarh_Fort_02.jpg' },
  },
  chittorgarh2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Vijay_Stambh_Chittorgarh_Fort_06.jpg/1920px-Vijay_Stambh_Chittorgarh_Fort_06.jpg',
    alt: 'Carved sculptural tiers of the Vijaya Stambha at Chittorgarh',
    credit: { author: 'Deepank Ranka', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Vijay_Stambh_Chittorgarh_Fort_06.jpg' },
  },
  kumbhalgarh: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/The_great_wall_of_Kumbhalgarh_Fort.jpg/1920px-The_great_wall_of_Kumbhalgarh_Fort.jpg',
    alt: 'The perimeter wall of Kumbhalgarh running along the ridgeline',
    credit: { author: 'Kanika Gaur', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:The_great_wall_of_Kumbhalgarh_Fort.jpg' },
  },
  kumbhalgarh2: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Panoramic_view_of_Kumbhalgarh_fort_walls.jpg/1920px-Panoramic_view_of_Kumbhalgarh_fort_walls.jpg',
    alt: 'Panorama of the Kumbhalgarh fort walls crossing the hills',
    credit: { author: 'Sreesarkar', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Kumbhalgarh_fort_walls.jpg' },
  },
  ranakpur: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Pillars_of_Ranakpur_Jain_Temple_02.jpg/1920px-Pillars_of_Ranakpur_Jain_Temple_02.jpg',
    alt: 'Carved marble pillars filling the hall of the Ranakpur Jain temple',
    credit: { author: 'Banerjeedebasis', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Pillars_of_Ranakpur_Jain_Temple_02.jpg' },
  },
  jantarMantar: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/20191218_Jantar_Mantar%2C_Jaipur_0906_8983_DxO.jpg/1920px-20191218_Jantar_Mantar%2C_Jaipur_0906_8983_DxO.jpg',
    alt: 'Masonry astronomical instruments at the Jantar Mantar observatory, Jaipur',
    credit: { author: 'Jakub Hałun', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:20191218_Jantar_Mantar,_Jaipur_0906_8983_DxO.jpg' },
  },
  pushkar: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/20191214_Ghats_in_Pushkar_1713_8593.jpg/1920px-20191214_Ghats_in_Pushkar_1713_8593.jpg',
    alt: 'Ghats stepping down into Pushkar Lake in late light',
    credit: { author: 'Jakub Hałun', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:20191214_Ghats_in_Pushkar_1713_8593.jpg' },
  },
  patwonHaveli: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Jaisalmer-Patwon_Ki_Haveli-06-2018-gje.jpg/1920px-Jaisalmer-Patwon_Ki_Haveli-06-2018-gje.jpg',
    alt: 'The carved sandstone facade of Patwon Ki Haveli, Jaisalmer',
    credit: { author: 'Gerd Eichmann', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Jaisalmer-Patwon_Ki_Haveli-06-2018-gje.jpg' },
  },
  /* ───────────────────── Tribal Odisha ─────────────────────
     Each frame below was checked against its Commons description before use.
     Two near-misses were rejected on the way: a "Patachitra artist at work"
     that is Bengal patachitra rather than Odisha's pattachitra, and a set of
     printing blocks photographed in Pushkar, Rajasthan. Right craft family,
     wrong state — and a travel site that cannot tell them apart has no
     business describing either. */
  odishaHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Raghurajpur_Village.JPG/1920px-Raghurajpur_Village.JPG',
    alt: 'Painted artisan houses lining the single street of Raghurajpur heritage craft village, Odisha',
    credit: { author: 'Revanthv552', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Raghurajpur_Village.JPG' },
  },
  odishaSaura: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Lanjia_Saura_woman_in_traditional_jewelry.jpg/1920px-Lanjia_Saura_woman_in_traditional_jewelry.jpg',
    alt: 'Portrait of a Lanjia Saura woman wearing traditional ear discs and bead necklaces, Rayagada district',
    credit: { author: 'Subhashish Panigrahi', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Lanjia_Saura_woman_in_traditional_jewelry.jpg' },
  },
  odishaPattachitra: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Raghurajpur_7.jpg/1920px-Raghurajpur_7.jpg',
    alt: 'An artist holding up a finished pattachitra scroll painting outside his studio at Raghurajpur',
    credit: { author: 'Rangan Datta Wiki', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Raghurajpur_7.jpg' },
  },
  odishaArtisan: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Raghurajpur_2.jpg/1920px-Raghurajpur_2.jpg',
    alt: 'A woman artisan painting at work in Raghurajpur heritage village, Odisha',
    credit: { author: 'Rangan Datta Wiki', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Raghurajpur_2.jpg' },
  },
  odishaMarket: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/A_group_of_Bonda_tribals_at_Onekdeli_market_in_Malkangiri%2C_Odisha_03.jpg/1920px-A_group_of_Bonda_tribals_at_Onekdeli_market_in_Malkangiri%2C_Odisha_03.jpg',
    alt: 'Bonda people at the weekly market at Onukudelli, Malkangiri district, Odisha',
    credit: { author: 'Drashokk', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:A_group_of_Bonda_tribals_at_Onekdeli_market_in_Malkangiri,_Odisha_03.jpg' },
  },
  odishaSantal: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Dance_of_Santal_tribe_-Mayurbhanj_Odisha.JPG/1920px-Dance_of_Santal_tribe_-Mayurbhanj_Odisha.JPG',
    alt: 'Santal dancers and drummers processing through open country in Mayurbhanj district, Odisha',
    credit: { author: 'Swetapadma07', license: 'CC BY-SA 3.0', page: 'https://commons.wikimedia.org/wiki/File:Dance_of_Santal_tribe_-Mayurbhanj_Odisha.JPG' },
  },
  odishaKonark: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Wheel_engraved_in_the_13th_century_built_Konark_Sun_Temple_in_Orissa%2C_India.jpg/1920px-Wheel_engraved_in_the_13th_century_built_Konark_Sun_Temple_in_Orissa%2C_India.jpg',
    alt: 'A carved stone chariot wheel on the 13th-century Sun Temple at Konark',
    credit: { author: 'Joydeep', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Wheel_engraved_in_the_13th_century_built_Konark_Sun_Temple_in_Orissa,_India.jpg' },
  },
  odishaChilika: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Chilika_Lake_or_Chilka_in_Odisha_01.jpg/1920px-Chilika_Lake_or_Chilka_in_Odisha_01.jpg',
    alt: 'Still water and a low shoreline at Chilika Lake, the brackish lagoon on the Odisha coast',
    credit: { author: 'Pinakpani', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Chilika_Lake_or_Chilka_in_Odisha_01.jpg' },
  },
  odishaKondhHouse: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Kutia_Kondh_house_02.jpg/1920px-Kutia_Kondh_house_02.jpg',
    alt: 'A traditional Kutia Kondh house, built as an exhibit at the Adivasi Mela in Bhubaneswar',
    credit: { author: 'Prateek Pattanaik', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Kutia_Kondh_house_02.jpg' },
  },

  /* ───────────────────── Wildlife North East ───────────────────── */
  neHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Indian_rhinoceros_in_Kaziranga_National_Park_March_2025_by_Tisha_Mukherjee_02.jpg/1920px-Indian_rhinoceros_in_Kaziranga_National_Park_March_2025_by_Tisha_Mukherjee_02.jpg',
    alt: 'A greater one-horned rhinoceros crossing a shaded forest track in Kaziranga National Park, Assam',
    credit: { author: 'Tisha Mukherjee', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Indian_rhinoceros_in_Kaziranga_National_Park_March_2025_by_Tisha_Mukherjee_02.jpg' },
  },
  neElephants: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Herd_of_wild_Asian_elephants_in_the_grasslands_of_Kaziranga.jpg/1920px-Herd_of_wild_Asian_elephants_in_the_grasslands_of_Kaziranga.jpg',
    alt: 'A herd of wild Asian elephants moving through tall grassland in Kaziranga National Park',
    credit: { author: 'Thapalens', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Herd_of_wild_Asian_elephants_in_the_grasslands_of_Kaziranga.jpg' },
  },
  neGibbon: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Western_hoolock_gibbon_-_Hollongapar_Gibbon_Sanctuary_2023-01-12_01.jpg/1920px-Western_hoolock_gibbon_-_Hollongapar_Gibbon_Sanctuary_2023-01-12_01.jpg',
    alt: 'A male western hoolock gibbon in the forest canopy at Hollongapar Gibbon Sanctuary, Assam',
    credit: { author: 'Krunal Desai', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Western_hoolock_gibbon_-_Hollongapar_Gibbon_Sanctuary_2023-01-12_01.jpg' },
  },
  neWetland: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/View_of_a_wetland_landscape_in_Kaziranga_National_Park%2C_Assam.jpg/1920px-View_of_a_wetland_landscape_in_Kaziranga_National_Park%2C_Assam.jpg',
    alt: 'A wetland and grassland landscape inside Kaziranga National Park, Assam',
    credit: { author: 'Joli', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:View_of_a_wetland_landscape_in_Kaziranga_National_Park,_Assam.jpg' },
  },
  neBuffalo: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Wild_water_buffalo_in_Kaziranga_National_Park_March_2025_by_Tisha_Mukherjee_07.jpg/1920px-Wild_water_buffalo_in_Kaziranga_National_Park_March_2025_by_Tisha_Mukherjee_07.jpg',
    alt: 'A wild water buffalo standing in grassland at Kaziranga National Park, Assam',
    credit: { author: 'Tisha Mukherjee', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Wild_water_buffalo_in_Kaziranga_National_Park_March_2025_by_Tisha_Mukherjee_07.jpg' },
  },
  neManas: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Manas-national-park-02.jpg/1920px-Manas-national-park-02.jpg',
    alt: 'Forest and river country inside Manas National Park on the Assam–Bhutan border',
    credit: { author: 'Anushila Bharali', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Manas-national-park-02.jpg' },
  },
  neNamdapha: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Landscape_Namdapha_Aparajita_Datta.jpg/1920px-Landscape_Namdapha_Aparajita_Datta.jpg',
    alt: 'Dense forested ridges in Namdapha Tiger Reserve, Arunachal Pradesh',
    credit: { author: 'Aparajita Datta', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Landscape_Namdapha_Aparajita_Datta.jpg' },
  },
  neRootBridge: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Living_root_bridge%2C_Maghalaya%2C_India2.jpg/1920px-Living_root_bridge%2C_Maghalaya%2C_India2.jpg',
    alt: 'A living root bridge grown across a stream in the East Khasi Hills, Meghalaya',
    credit: { author: 'Joydeep Chakraborty', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Living_root_bridge,_Maghalaya,_India2.jpg' },
  },

  /* ───────────────────── Handicrafts Gujarat ───────────────────── */
  /* The two obvious Kutch embroidery files on Commons are PNGs that weigh 11 MB
     each at 1920px — enough to time out the image optimiser and 500 the page.
     These JPEG equivalents show the same craft at a tenth of the bytes. */
  gujaratHero: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Woman%27s_shirt_from_Kutch%2C_Gujarat%2C_India%2C_IMA_55114%2C_2.jpg/1920px-Woman%27s_shirt_from_Kutch%2C_Gujarat%2C_India%2C_IMA_55114%2C_2.jpg',
    alt: 'A Kutch woman’s silk shirt densely embroidered in silk with inset mirrors, on crimson ground',
    credit: { author: 'Indianapolis Museum of Art', license: 'Copyrighted free use', page: 'https://commons.wikimedia.org/wiki/File:Woman%27s_shirt_from_Kutch,_Gujarat,_India,_IMA_55114,_2.jpg' },
  },
  gujaratEmbroidery: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Hanging_from_India%2C_Gujarat%2C_Kutch%2C_Honolulu_Museum_of_Art_2015-12-01.JPG/1920px-Hanging_from_India%2C_Gujarat%2C_Kutch%2C_Honolulu_Museum_of_Art_2015-12-01.JPG',
    alt: 'An embroidered silk and metallic-thread hanging from Kutch, late 19th to early 20th century',
    credit: { author: 'Hiart', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Hanging_from_India,_Gujarat,_Kutch,_Honolulu_Museum_of_Art_2015-12-01.JPG' },
  },
  gujaratRoganArt: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Nirmuka_Rogan_Chhap.jpg/1920px-Nirmuka_Rogan_Chhap.jpg',
    alt: 'A Rogan art Tree of Life with peacock motif, painted in castor-oil paint, Kutch',
    credit: { author: 'AnaNodal', license: 'CC0', page: 'https://commons.wikimedia.org/wiki/File:Nirmuka_Rogan_Chhap.jpg' },
  },
  gujaratBhujodi: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Bhujodi_Handicraft_items.jpg/1920px-Bhujodi_Handicraft_items.jpg',
    alt: 'Mirror-inlaid craft panels hung on a stone wall in a handicraft store at Bhujodi village, Kutch',
    credit: { author: 'KartikMistry', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Bhujodi_Handicraft_items.jpg' },
  },
  gujaratRogan: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Rogan_painting.jpg/1920px-Rogan_painting.jpg',
    alt: 'An artisan drawing a Rogan painting in castor-oil paint onto red cloth at Nirona, Kutch',
    credit: { author: 'Rick Bradley', license: 'CC BY 2.0', page: 'https://commons.wikimedia.org/wiki/File:Rogan_painting.jpg' },
  },
  gujaratPatola: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/%27Patola%27_%28ritual_heirloom_cloth%29_from_Gujarat%2C_India%2C_late_18th_or_early_19th_century.jpg/1920px-%27Patola%27_%28ritual_heirloom_cloth%29_from_Gujarat%2C_India%2C_late_18th_or_early_19th_century.jpg',
    alt: 'Detail of an antique Gujarati patola cloth woven in silk double ikat',
    credit: { author: 'Unknown — Honolulu Academy of Arts', license: 'Public domain', page: 'https://commons.wikimedia.org/wiki/File:%27Patola%27_(ritual_heirloom_cloth)_from_Gujarat,_India,_late_18th_or_early_19th_century.jpg' },
  },
  gujaratBandhani: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Purple_and_green_bandhej.jpg/1920px-Purple_and_green_bandhej.jpg',
    alt: 'Bandhani tie-dyed cloth in purple and green, showing the tiny resist-tied dots',
    credit: { author: 'Soulful sunshine', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Purple_and_green_bandhej.jpg' },
  },
  gujaratMaldhari: {
    src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Maldhari_with_cattle%2C_Kutch%2C_Gujarat.jpg/1920px-Maldhari_with_cattle%2C_Kutch%2C_Gujarat.jpg',
    alt: 'A Maldhari herder walking among long-horned cattle in dusty light, Kutch, Gujarat',
    credit: { author: 'Drashokk', license: 'CC BY-SA 4.0', page: 'https://commons.wikimedia.org/wiki/File:Maldhari_with_cattle,_Kutch,_Gujarat.jpg' },
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

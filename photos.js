// 밥·디저트·놀거리 사진. 모두 위키미디어 공용(Wikimedia Commons)의 자유 이용 사진이며
// 작성자·라이선스·원본 주소를 함께 적어 카드에 표시합니다. (500px 축소본)
const PHOTOS = {
 "food": {
  "삼겹살": {
   "src": "img/food/01.jpg",
   "author": "by hellochris",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Samgyeopsal-01.jpg"
  },
  "닭갈비": {
   "src": "img/food/02.jpg",
   "author": "by shizu k (shezzz) at Flickr",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Dakgalbi-01.jpg"
  },
  "김치찌개": {
   "src": "img/food/03.jpg",
   "author": "Daderot",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Kimchi_jjigae_-_San_Francisco,_CA.jpg"
  },
  "순대국밥": {
   "src": "img/food/04.jpg",
   "author": "Mar del Este",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean_soup_Sundae_gukbap_01.jpg"
  },
  "칼국수": {
   "src": "img/food/05.jpg",
   "author": "by jslander",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.noodle-Kalguksu-01.jpg"
  },
  "족발·보쌈": {
   "src": "img/food/06.jpg",
   "author": "국립국어원",
   "license": "CC BY-SA 2.0 kr",
   "page": "https://commons.wikimedia.org/wiki/File:Jokbal_2.jpg"
  },
  "곱창": {
   "src": "img/food/07.jpg",
   "author": "뚱표아빠의 세상사는 이야기",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Gopchang_2.jpg"
  },
  "냉면": {
   "src": "img/food/08.jpg",
   "author": "Korea.net / Korean Culture and Information Service",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:KOCIS_Mul-naengmyeon,_Chilled_Buckwheat_Noodle_Soup_(4594756202).jpg"
  },
  "감자탕": {
   "src": "img/food/09.jpg",
   "author": "comicpie (a flickr user)",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.food-Gamjatang-01.jpg"
  },
  "찜닭": {
   "src": "img/food/10.jpg",
   "author": "ebifry",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.food-Andong-Jjimdakk.jpg"
  },
  "부대찌개": {
   "src": "img/food/11.jpg",
   "author": "lazy fri13th",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Budae-jjigae_1.jpg"
  },
  "닭한마리": {
   "src": "img/food/12.jpg",
   "author": "Larry",
   "license": "CC BY 2.5",
   "page": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Dak_hanmari-02.jpg"
  },
  "비빔밥": {
   "src": "img/food/13.jpg",
   "author": "abex (a flickr user)",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.food-Bibimbap-02.jpg"
  },
  "생선구이": {
   "src": "img/food/14.jpg",
   "author": "USDAgov",
   "license": "Public domain",
   "page": "https://commons.wikimedia.org/wiki/File:MyPlate_gov_Cultural_Food_(20241025-USDA-FNS-UNK-0034).jpg"
  },
  "낙지볶음": {
   "src": "img/food/15.jpg",
   "author": "박家상민",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Nakji-bokkeum.jpg"
  },
  "짜장면·짬뽕": {
   "src": "img/food/16.jpg",
   "author": "KFoodaddict",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Jajangmyeon_by_KFoodaddict.jpg"
  },
  "마라탕": {
   "src": "img/food/17.jpg",
   "author": "N509FZ",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Malatang_from_Hope_Tree_(20220226172344).jpg"
  },
  "마라샹궈": {
   "src": "img/food/18.jpg",
   "author": "我乃野云鹤",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Ma_La_Xiang_Guo.jpg"
  },
  "양꼬치": {
   "src": "img/food/19.jpg",
   "author": "Fumikas Sagisavas",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Freshippo_red_willow_twig_lamb_skewers.jpg"
  },
  "딤섬": {
   "src": "img/food/20.jpg",
   "author": "afterdog",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Dim_Sum_Breakfast.jpg"
  },
  "훠궈": {
   "src": "img/food/21.jpg",
   "author": "Akira CA",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Red_House_hot_pot_Chongqing.jpg"
  },
  "초밥": {
   "src": "img/food/22.jpg",
   "author": "Tim Reckmann from Hamm, Deutschland",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Nigiri_Sushi_(25966163204).jpg"
  },
  "라멘": {
   "src": "img/food/23.jpg",
   "author": "Andy Li",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Tonkotsu_Ramen_-_Goemon_Ramen_Bar_2023-06-06.jpg"
  },
  "돈카츠": {
   "src": "img/food/24.jpg",
   "author": "Minseong Kim",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Tonkatsu_of_Kimukatsu.jpg"
  },
  "우동": {
   "src": "img/food/25.jpg",
   "author": "udono",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Udon_by_udono.jpg"
  },
  "소바": {
   "src": "img/food/26.jpg",
   "author": "FotoosVanRobin",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Dried_soba_noodles_by_FotoosVanRobin.jpg"
  },
  "텐동": {
   "src": "img/food/27.jpg",
   "author": "毒島みるく",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Tendon_of_Ten%27ya.jpg"
  },
  "규카츠": {
   "src": "img/food/28.jpg",
   "author": "bryan... from Taipei, Taiwan",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:%E7%82%B8%E7%89%9B%E6%8E%92,_%E4%BA%AC%E9%83%BD%E5%8B%9D%E7%89%9B,_%E5%8B%9D%E7%89%9B,_%E4%BA%AC%E9%83%BD,_%E6%97%A5%E6%9C%AC,_%E4%BA%AC%E9%83%BD%E5%8B%9D%E7%89%9B%E4%BA%AC%E9%83%BD%E9%A7%85%E5%89%8D,_%E7%89%9B%E3%82%AB%E3%83%84%E5%B0%82%E9%96%80%E5%BA%97,_%E3%81%8D%E3%82%87%E3%81%86%E3%81%A8,_%E3%81%BF%E3%82%84%E3%81%93,_%E3%81%8D%E3%82%87%E3%81%86%E3%81%AE%E3%81%BF%E3%82%84%E3%81%93,_%E3%81%AB%E3%81%A3%E3%81%BD%E3%82%93,_%E3%81%AB%E3%81%BB%E3%82%93,_Kyoto_Katsugyu,_Kyoto,_Japan,_Nippon,_Nihon_(24897293890).jpg"
  },
  "오코노미야키": {
   "src": "img/food/29.jpg",
   "author": "ume-y",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Okonomiyaki_001.jpg"
  },
  "일본식 카레": {
   "src": "img/food/30.jpg",
   "author": "Ocdp",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Beef_curry_rice_003.jpg"
  },
  "샤브샤브": {
   "src": "img/food/31.jpg",
   "author": "漱石の猫",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Shabu-shabu_Sapporo.jpg"
  },
  "이자카야": {
   "src": "img/food/32.jpg",
   "author": "Syced",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Quality_izakaya_in_Ebisu_7.jpg"
  },
  "파스타": {
   "src": "img/food/33.jpg",
   "author": "Javier Somoza",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Espaguetis_carbonara.jpg"
  },
  "화덕피자": {
   "src": "img/food/34.jpg",
   "author": "CDibisceglia",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Pizza_Napoletana_Contemporanea.jpg"
  },
  "스테이크": {
   "src": "img/food/35.jpg",
   "author": "Ɱ",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Steak_dinner_with_vegetables.jpg"
  },
  "수제버거": {
   "src": "img/food/36.jpg",
   "author": "Mosa Meat",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cultivated_hamburger,_2013.jpg"
  },
  "브런치": {
   "src": "img/food/37.jpg",
   "author": "Thomas Angermann from Copenhagen, Denmark",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Brunch_Kalaset.jpg"
  },
  "리조또": {
   "src": "img/food/38.jpg",
   "author": "Benoît Prieur",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Risotto_de_gambas,_restaurant_Danieli_(Vienne,_Autriche).jpg"
  },
  "바비큐 플래터": {
   "src": "img/food/39.jpg",
   "author": "Mohmadsoyab Qureshi",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Barbecue_Seafood_Platter_-_Sterling_Holidays_Bardez_-_North_Goa_-_20180913_152240.jpg"
  },
  "쌀국수": {
   "src": "img/food/40.jpg",
   "author": "Andy Li",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Pho_Bo_by_Banh_%26_Mee_in_Kirkgate_Market.jpg"
  },
  "팟타이": {
   "src": "img/food/41.jpg",
   "author": "Takeaway",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Phat_Thai_kung_Chang_Khien_street_stall.jpg"
  },
  "인도 커리": {
   "src": "img/food/42.jpg",
   "author": "ノボホショコロトソ",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cheese_naan_and_Curry_06.jpg"
  },
  "분짜": {
   "src": "img/food/43.jpg",
   "author": "Weetjesman",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Bun_cha_Hanoi.jpg"
  },
  "타코": {
   "src": "img/food/44.jpg",
   "author": "T.Tseng",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Tacos_al_pastor,_taco_de_panza.jpg"
  },
  "떡볶이": {
   "src": "img/food/45.jpg",
   "author": "by jetalone (flickr)",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.snacks-Tteokbokki-08.jpg"
  },
  "김밥": {
   "src": "img/food/46.jpg",
   "author": "changupn",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Gimbap_(pixabay).jpg"
  },
  "치킨": {
   "src": "img/food/47.jpg",
   "author": "Brian Chan tigerrulezzz",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Fried_Chicken_(Unsplash).jpg"
  },
  "샌드위치": {
   "src": "img/food/48.jpg",
   "author": "Gaurav Dhwaj Khadka",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Sandwich_1.jpg"
  },
  "포케": {
   "src": "img/food/49.jpg",
   "author": "Andy Li",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Fried_Tofu_Poke_Bowl_(S)_with_kimchi_sauce_-_Kitokito.jpg"
  },
  "회": {
   "src": "img/food/50.jpg",
   "author": "by Junho Jung at Flickr from South Korea",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Namhae-Mijo_Port-Hoe-Raw_fish-01.jpg"
  },
  "조개구이": {
   "src": "img/food/51.jpg",
   "author": "bryan...",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Jogae-gui_4.jpg"
  },
  "해물찜": {
   "src": "img/food/52.jpg",
   "author": "최광모",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Haemul-jjim.jpg"
  },
  "장어구이": {
   "src": "img/food/53.jpg",
   "author": "Alpha from Melbourne, Australia",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Grilled_eel.jpg"
  },
  "소고기 구이": {
   "src": "img/food/54.jpg",
   "author": "Oleg Yunakov",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Marbled_beef_cooking_on_a_Korean_barbecue_tabletop_grill.jpg"
  },
  "갈비": {
   "src": "img/food/55.jpg",
   "author": "김태경",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Galbi-gui_2.jpg"
  },
  "양갈비": {
   "src": "img/food/56.jpg",
   "author": "Fumikas Sagisavas",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Freshippo_grilled_lamb_chops.jpg"
  },
  "오리고기": {
   "src": "img/food/57.jpg",
   "author": "Peachyeung316",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Sliced_Peking_Roasted_Duck_from_Peking_Garden.jpg"
  },
  "삼계탕": {
   "src": "img/food/58.jpg",
   "author": "wizdata",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Samgye-tang_2.jpg"
  },
  "설렁탕·곰탕": {
   "src": "img/food/59.jpg",
   "author": "이동원",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Seolleongtang.jpg"
  },
  "막국수": {
   "src": "img/food/60.jpg",
   "author": "pcamp (a flickr user)",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.food-Makguksu-01.jpg"
  },
  "한정식": {
   "src": "img/food/61.jpg",
   "author": "by Richy! at flickr",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Hanjeongsik-05.jpg"
  },
  "전·막걸리": {
   "src": "img/food/62.jpg",
   "author": "Korea.net / Korean Culture and Information Service (Jeon Han",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Buchimgae_and_makgeolli.jpg"
  },
  "대게·킹크랩": {
   "src": "img/food/63.jpg",
   "author": "さかおり",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Boiled_Echizen_crab_(snow_crab)_male_and_female.jpg"
  },
  "덮밥": {
   "src": "img/food/64.jpg",
   "author": "pxfuel",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Kaisendon_001.jpg"
  },
  "함박스테이크": {
   "src": "img/food/65.jpg",
   "author": "MaedaAkihiko",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Hamburg-Steak.jpg"
  },
  "만두": {
   "src": "img/food/66.jpg",
   "author": "Chloe Lim",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Jjin-mandu_3.jpg"
  },
  "뷔페": {
   "src": "img/food/67.jpg",
   "author": "Narek75",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:ATC_Buffet_Table_1.jpg"
  },
  "무한리필 고기": {
   "src": "img/food/68.jpg",
   "author": "이동원",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Samgyeopsal_table.jpg"
  },
  "샐러드바 뷔페": {
   "src": "img/food/69.jpg",
   "author": "HNBS",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Salad-bar-2094459_1920.jpg"
  }
 },
 "dessert": {
  "빙수": {
   "src": "img/dessert/01.jpg",
   "author": "국립국어원",
   "license": "CC BY-SA 2.0 kr",
   "page": "https://commons.wikimedia.org/wiki/File:Patbingsu.jpg"
  },
  "젤라또": {
   "src": "img/dessert/02.jpg",
   "author": "Ruth Hartnup from Vancouver, Canada",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Mango_gelato_(9368461646).jpg"
  },
  "요거트 아이스크림": {
   "src": "img/dessert/03.jpg",
   "author": "",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:French_fry_frozen_yoghurt.jpg"
  },
  "소프트아이스크림": {
   "src": "img/dessert/04.jpg",
   "author": "Kwekwe",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Black_sesame_soft_ice_cream.jpg"
  },
  "파르페": {
   "src": "img/dessert/05.jpg",
   "author": "MarcoA01701870",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Parfait_de_Frutos_Rojos.jpg"
  },
  "조각 케이크": {
   "src": "img/dessert/06.jpg",
   "author": "Shisma",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Shortcake_slice.jpg"
  },
  "티라미수": {
   "src": "img/dessert/07.jpg",
   "author": "Sharon Chen from Austin, United States",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Classic_Italian_Tiramisu-3_(29989504485).jpg"
  },
  "바스크 치즈케이크": {
   "src": "img/dessert/08.jpg",
   "author": "Sirabellas",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Raised_slice_of_cheesecake.jpg"
  },
  "푸딩": {
   "src": "img/dessert/09.jpg",
   "author": "muriel amaury from France",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cr%C3%A8me_au_caramel_2.jpg"
  },
  "마카롱": {
   "src": "img/dessert/10.jpg",
   "author": "Nicolas Halftermeyer",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Macarons,_French_made_mini_cakes.JPG"
  },
  "수플레 팬케이크": {
   "src": "img/dessert/11.jpg",
   "author": "Rhododendrites",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Souffe_pancakes_(76651).jpg"
  },
  "크레페": {
   "src": "img/dessert/12.jpg",
   "author": "Kaartic",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Fruit_crepe_served_at_a_restaurant.jpg"
  },
  "크로플": {
   "src": "img/dessert/13.jpg",
   "author": "Scudsvlad",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Croffle_1.jpg"
  },
  "와플": {
   "src": "img/dessert/14.jpg",
   "author": "Andy Li",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Belgian_waffles_%26_fruit_-_Brewhouse_%26_Kitchen_2026-04-14.jpg"
  },
  "도넛": {
   "src": "img/dessert/15.jpg",
   "author": "Gaurav Dhwaj Khadka",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Doughnut_2.jpg"
  },
  "소금빵": {
   "src": "img/dessert/16.jpg",
   "author": "User:逃亡者 (ja:利用者:逃亡者)",
   "license": "Public domain",
   "page": "https://commons.wikimedia.org/wiki/File:Salt_bread_(sold_at_supermarkets_in_Otaru).jpg"
  },
  "에그타르트": {
   "src": "img/dessert/17.jpg",
   "author": "Fumikas Sagisavas",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Multi-flavor_egg_tarts.jpg"
  },
  "르뱅 쿠키": {
   "src": "img/dessert/18.jpg",
   "author": "Jonathunder",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:ChocolateChipSmile.jpg"
  },
  "휘낭시에": {
   "src": "img/dessert/19.jpg",
   "author": "Kikaineko",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Two_rectangular_financiers.jpg"
  },
  "스콘": {
   "src": "img/dessert/20.jpg",
   "author": "Benson Kua from Toronto, Canada",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Lemon_Scones_(6849625315).jpg"
  },
  "까눌레": {
   "src": "img/dessert/21.jpg",
   "author": "Nicolo",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Mini_canneles_bordelais_zoom.jpg"
  },
  "츄러스": {
   "src": "img/dessert/22.jpg",
   "author": "Garry Knight from London, England",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Churros_en_vasos_en_Londres_-_A_Taste_of_Spain.jpg"
  },
  "붕어빵": {
   "src": "img/dessert/23.jpg",
   "author": "Penny Richards",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Boong_o_bbang.jpg"
  },
  "호떡": {
   "src": "img/dessert/24.jpg",
   "author": "Korea.net / Korean Culture and Information Service",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Hotteok.jpg"
  },
  "탕후루": {
   "src": "img/dessert/25.jpg",
   "author": "Aristorkle",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Tanghulu_sold_in_Shilin_Night_Market.jpg"
  },
  "꽈배기": {
   "src": "img/dessert/26.jpg",
   "author": "쪼끄미**",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Kkwabaegi.jpg"
  },
  "약과": {
   "src": "img/dessert/27.jpg",
   "author": "Korea.net / Korean Culture and Information Service",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:KOCIS_yakgwa,_honey_cookies_(4646996556).jpg"
  },
  "인절미": {
   "src": "img/dessert/28.jpg",
   "author": "ally j",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Injeolmi.jpg"
  },
  "단팥죽": {
   "src": "img/dessert/29.jpg",
   "author": "국립국어원",
   "license": "CC BY-SA 2.0 kr",
   "page": "https://commons.wikimedia.org/wiki/File:Patjuk_(red_bean_porridge).jpg"
  },
  "전통차": {
   "src": "img/dessert/30.jpg",
   "author": "Korea.net / Korean Culture and Information Service",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:KOCIS_Korean_Tea_(4553954420).jpg"
  },
  "양갱": {
   "src": "img/dessert/31.jpg",
   "author": "Ocdp",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Imo-y%C5%8Dkan_001.jpg"
  },
  "버블티": {
   "src": "img/dessert/32.jpg",
   "author": "Battlesnake1",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg"
  },
  "핫초코": {
   "src": "img/dessert/33.jpg",
   "author": "Geoffreyrabbit",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Hot_chocolate_in_western.jpg"
  },
  "생과일주스": {
   "src": "img/dessert/34.jpg",
   "author": "Shixart1985",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Fresh_fruit_and_juice_preparation_on_a_sunny_kitchen_countertop_with_vibrant_colors_and_healthful_options.jpg"
  },
  "스페셜티 커피": {
   "src": "img/dessert/35.jpg",
   "author": "Mortefot from Flickr",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Latte_art.jpg"
  },
  "밀크티": {
   "src": "img/dessert/36.jpg",
   "author": "Gaurav Dhwaj Khadka",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Milk_Tea_5.jpg"
  },
  "베이글": {
   "src": "img/dessert/37.jpg",
   "author": "Shisma",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Bagel_with_sesame_3.jpg"
  },
  "크루아상": {
   "src": "img/dessert/38.jpg",
   "author": "Herry Wibisono (herryway)",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Croissants_au_beurre_(18953292873).jpg"
  },
  "호두과자": {
   "src": "img/dessert/39.jpg",
   "author": "parkyang1021",
   "license": "CC BY 2.0 kr",
   "page": "https://commons.wikimedia.org/wiki/File:Hodugwaja.jpg"
  }
 },
 "play": {
  "보드게임카페": {
   "src": "img/play/01.jpg",
   "author": "Crumpylicious Blog",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Table_Taft_Board_Game_Caf%C3%A9_interior.jpg"
  },
  "방탈출": {
   "src": "img/play/02.jpg",
   "author": "Hudson Bloom",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Escape_Room_-_%22The_Expedition%22_(Escape_Quest_Bethesda).jpg"
  },
  "볼링": {
   "src": "img/play/03.jpg",
   "author": "Benjamin J. DeLong",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:5-pin_bowling_pins_(4177654894).jpg"
  },
  "코인노래방": {
   "src": "img/play/04.jpg",
   "author": "Christophe95",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Karaoke_in_Nha_Trang.jpg"
  },
  "오락실": {
   "src": "img/play/05.jpg",
   "author": "Photo by and ©2009 Dustin M. Ramsey (Kralizec!)",
   "license": "CC BY-SA 2.5",
   "page": "https://commons.wikimedia.org/wiki/File:Dave_%26_Buster%27s_video_arcade_in_Columbus,_OH_-_17912.JPG"
  },
  "포켓볼": {
   "src": "img/play/06.jpg",
   "author": "Kurt Kaiser",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Billiards_table_4.jpg"
  },
  "탁구": {
   "src": "img/play/07.jpg",
   "author": "KeepActive Australia from Melbourne, VIC, Australia",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Table_Tennis_racquet_and_ball_on_table_-_top_view.jpg"
  },
  "스크린야구": {
   "src": "img/play/08.jpg",
   "author": "Yoshihiro Kudo",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Batting_Center_or_Batting_Cage_in_Japan.jpg"
  },
  "양궁카페": {
   "src": "img/play/09.jpg",
   "author": "",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:WA_archery_target_with_arrows.jpg"
  },
  "VR 체험": {
   "src": "img/play/10.jpg",
   "author": "Bert Niehaus",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:VR_headset_with_smartphone_and_stereoscopy_image.jpg"
  },
  "만화카페": {
   "src": "img/play/11.jpg",
   "author": "Fredrik Strömberg",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:TT061204-16G_manga_cafe.jpg"
  },
  "PC방": {
   "src": "img/play/12.jpg",
   "author": "Ss이준 (lhj8396)",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:World_of_Tanks_PC_bang_LAN_party_Bunker_Rush_Season_2_in_FlyingCat.jpg"
  },
  "영화": {
   "src": "img/play/13.jpg",
   "author": "Eden, Janine and Jim from New York City",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cinema_Seats_I_(51830912465).jpg"
  },
  "전시회": {
   "src": "img/play/14.jpg",
   "author": "Chongkian",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Melaka_Art_Gallery_-_Exhibition_Hall.jpg"
  },
  "미술관": {
   "src": "img/play/15.jpg",
   "author": "서울연구원",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:MMCA_Seoul.jpg"
  },
  "소극장 공연": {
   "src": "img/play/16.jpg",
   "author": "Harrison Keely",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:The_theatre_stage_and_auditorium_of_the_Peacock_Performing_Arts_Center_in_Hayesville,_North_Carolina_03.jpg"
  },
  "LP바": {
   "src": "img/play/17.jpg",
   "author": "Silar",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:02024_1054_Vinyl_records_in_Bielsko-Bia%C5%82a.jpg"
  },
  "독립서점": {
   "src": "img/play/18.jpg",
   "author": "Benh LIEU SONG",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Paris_75005_Quai_de_Montebello_Bouquinistes_20071014.jpg"
  },
  "공원 산책": {
   "src": "img/play/19.jpg",
   "author": "Enigma7seven",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Seoulforest_path01.jpg"
  },
  "동네 골목 산책": {
   "src": "img/play/20.jpg",
   "author": "S h y numis",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Ikseon-dong_%EC%9D%B5%EC%84%A0%EB%8F%99_October_1_2020_3.jpg"
  },
  "시장 구경": {
   "src": "img/play/21.jpg",
   "author": "Bgag",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Gwangjang_Market,_Seoul_02.jpg"
  },
  "소품샵 투어": {
   "src": "img/play/22.jpg",
   "author": "Jegadeeswaran natarajan",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Stationery_Wholesale_Shop.jpg"
  },
  "빈티지숍 구경": {
   "src": "img/play/23.jpg",
   "author": "ClearLight602",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Vintage_clothing_store_on_Main_Street_in_18b_The_Las_Vegas_Arts_District.jpg"
  },
  "쇼핑몰 아이쇼핑": {
   "src": "img/play/24.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Large_interior_view_of_Plaza_Singapura_Shopping_mall_Orchard_Road_Singapore.jpg"
  },
  "도자기 원데이 클래스": {
   "src": "img/play/25.jpg",
   "author": "Kritzolina",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Pottery_at_the_Chokhi_Dhani_Resort_Panchkula_30.jpg"
  },
  "향수 만들기": {
   "src": "img/play/26.jpg",
   "author": "DDupard",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:A_Suma-perfume_by_Coty.1.jpg"
  },
  "반지 만들기": {
   "src": "img/play/27.jpg",
   "author": "DIVYALAKSHWIN",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Silver_ring.,.jpg"
  },
  "드로잉카페": {
   "src": "img/play/28.jpg",
   "author": "Pinakpani",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Colored_wood_pencils_28.jpg"
  },
  "베이킹 클래스": {
   "src": "img/play/29.jpg",
   "author": "Petty Officer 3rd Class Paul J. Perkins, U.S. Navy",
   "license": "Public domain",
   "page": "https://commons.wikimedia.org/wiki/File:USS_John_C._Stennis_baker.jpg"
  },
  "실내 클라이밍": {
   "src": "img/play/30.jpg",
   "author": "John Kane",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Man_climbing_in_bouldering_gym.jpg"
  },
  "아이스링크": {
   "src": "img/play/31.jpg",
   "author": "Dori",
   "license": "CC BY-SA 3.0 us",
   "page": "https://commons.wikimedia.org/wiki/File:Red_Arrow_Park_ice_rink_1292.jpg"
  },
  "롤러장": {
   "src": "img/play/32.jpg",
   "author": "Another Believer",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Gay_Skate_Oaks_Park_Roller_Skating_Rink_3.jpg"
  },
  "자전거 타기": {
   "src": "img/play/33.jpg",
   "author": "TurnOnTheNight",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Bicycles_along_Han_River_at_night_20240430191634.jpg"
  },
  "배드민턴": {
   "src": "img/play/34.jpg",
   "author": "Vladimir Maftei, http://www.enciclopedie.info/",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Rachet%C4%83_de_badminton_%C5%9Fi_flutura%C5%9F.jpg"
  },
  "네컷사진 찍기": {
   "src": "img/play/35.jpg",
   "author": "N509FZ",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Photo_booth_at_Wanquanhe_Qiao_Station_(20201231112106).jpg"
  },
  "필름카메라 들고 산책": {
   "src": "img/play/36.jpg",
   "author": "Franz van Duns",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Ensign_Midget_-_model_22_camera_in_comparison_to_a_type_135_film_roll.jpg"
  },
  "타로 보기": {
   "src": "img/play/37.jpg",
   "author": "Nosferattus",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Tarot_cards_-_3_card_spread_with_candles.jpg"
  },
  "찜질방": {
   "src": "img/play/38.jpg",
   "author": "Choikwangmo9",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%98%81%EC%8B%A0%EB%B6%88%EA%B0%80%EB%A7%88%EC%82%AC%EC%9A%B0%EB%82%9824%EC%8B%9C(%EA%B0%95%EC%9B%90_%EC%9B%90%EC%A3%BC%EC%8B%9C_%EC%8B%9C%EC%B2%AD%EB%A1%9C_96)3.jpg"
  },
  "족욕카페": {
   "src": "img/play/39.jpg",
   "author": "妖精書士",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Onogawa_onsen,_ashiyu.jpg"
  },
  "고양이카페": {
   "src": "img/play/40.jpg",
   "author": "Petar Milošević",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cat_Cafe_(Cat_Caffe).jpg"
  },
  "스크린골프": {
   "src": "img/play/41.jpg",
   "author": "Ohconfucius",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Indoor_golf_simulator.JPG"
  },
  "다트": {
   "src": "img/play/42.jpg",
   "author": "Christian Gidlöf",
   "license": "Public domain",
   "page": "https://commons.wikimedia.org/wiki/File:Three_darts_in_a_row.JPG"
  },
  "사격": {
   "src": "img/play/43.jpg",
   "author": "Sauer202",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Stripe_paper_target_for_smallbore_competitions_in_Nordic_Field_Shooting.jpg"
  },
  "실내 낚시": {
   "src": "img/play/44.jpg",
   "author": "池洋洋",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:279760950_m.jpg"
  },
  "재즈바": {
   "src": "img/play/45.jpg",
   "author": "digboston",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Bar_Kokhba_2014.jpg"
  },
  "북카페": {
   "src": "img/play/46.jpg",
   "author": "Missvain",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Coffeehouse_Five_-_November_2023_-_Sarah_Stierch_01.jpg"
  },
  "가죽공방": {
   "src": "img/play/47.jpg",
   "author": "AmiraAdel93",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Inside_a_Leather_Workshop.jpg"
  },
  "캔들 만들기": {
   "src": "img/play/48.jpg",
   "author": "Priscilla Du Preez artographybyp",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Mahogany_teakwood_scented_candle_(cropped).jpg"
  },
  "꽃다발 만들기": {
   "src": "img/play/49.jpg",
   "author": "Suyash Dwivedi",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Rose_and_carnation_flower_bouquet_01.jpg"
  },
  "와인바": {
   "src": "img/play/50.jpg",
   "author": "aimee castenell",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Wine_Institute_of_New_Orleans_-_Snackies.jpg"
  },
  "칵테일바": {
   "src": "img/play/51.jpg",
   "author": "Jonathan Hutchins",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:The_1812_cocktail_bar_-_geograph.org.uk_-_5518559.jpg"
  },
  "수제맥주": {
   "src": "img/play/52.jpg",
   "author": "Armineaghayan",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Dargett_Craft_Beer_(1).jpg"
  },
  "포장마차": {
   "src": "img/play/53.jpg",
   "author": "LinasD",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Seoul_street_food_2011_march_20.jpg"
  },
  "강아지카페": {
   "src": "img/play/54.jpg",
   "author": "CafeUploader",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:DogCafe.jpg"
  }
 }
};

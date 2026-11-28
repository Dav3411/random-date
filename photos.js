// 밥·디저트·놀거리 사진. 모두 위키미디어 공용(Wikimedia Commons)의 자유 이용 사진이며
// 작성자·라이선스·원본 주소를 함께 적어 카드에 표시합니다. (500px 축소본)
const PHOTOS = {
 "food": {
  "고깃집": {
   "src": "img/food/01.jpg",
   "author": "by hellochris",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.cuisine-Samgyeopsal-01.jpg"
  },
  "닭요리": {
   "src": "img/food/02.jpg",
   "author": "by shizu k (shezzz) at Flickr",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Dakgalbi-01.jpg"
  },
  "한식": {
   "src": "img/food/61.jpg",
   "author": "by Richy! at flickr",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean_cuisine-Hanjeongsik-05.jpg"
  },
  "국수": {
   "src": "img/food/05.jpg",
   "author": "by jslander",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.noodle-Kalguksu-01.jpg"
  },
  "해산물": {
   "src": "img/food/50.jpg",
   "author": "by Junho Jung at Flickr from South Korea",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korea-Namhae-Mijo_Port-Hoe-Raw_fish-01.jpg"
  },
  "중식": {
   "src": "img/food/16.jpg",
   "author": "KFoodaddict",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Jajangmyeon_by_KFoodaddict.jpg"
  },
  "일식": {
   "src": "img/food/22.jpg",
   "author": "Tim Reckmann from Hamm, Deutschland",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Nigiri_Sushi_(25966163204).jpg"
  },
  "양식": {
   "src": "img/food/33.jpg",
   "author": "Javier Somoza",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Espaguetis_carbonara.jpg"
  },
  "아시아 음식": {
   "src": "img/food/40.jpg",
   "author": "Andy Li",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Pho_Bo_by_Banh_%26_Mee_in_Kirkgate_Market.jpg"
  },
  "분식": {
   "src": "img/food/45.jpg",
   "author": "by jetalone (flickr)",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Korean.snacks-Tteokbokki-08.jpg"
  },
  "치킨": {
   "src": "img/food/47.jpg",
   "author": "Brian Chan tigerrulezzz",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Fried_Chicken_(Unsplash).jpg"
  },
  "브런치": {
   "src": "img/food/37.jpg",
   "author": "Thomas Angermann from Copenhagen, Denmark",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Brunch_Kalaset.jpg"
  },
  "뷔페": {
   "src": "img/food/67.jpg",
   "author": "Narek75",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:ATC_Buffet_Table_1.jpg"
  }
 },
 "dessert": {
  "카페": {
   "src": "img/dessert/35.jpg",
   "author": "Mortefot from Flickr",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Latte_art.jpg"
  },
  "디저트 카페": {
   "src": "img/dessert/06.jpg",
   "author": "Shisma",
   "license": "CC BY 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Shortcake_slice.jpg"
  },
  "베이커리": {
   "src": "img/dessert/38.jpg",
   "author": "Herry Wibisono (herryway)",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Croissants_au_beurre_(18953292873).jpg"
  },
  "도넛": {
   "src": "img/dessert/15.jpg",
   "author": "Gaurav Dhwaj Khadka",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Doughnut_2.jpg"
  },
  "아이스크림·빙수": {
   "src": "img/dessert/01.jpg",
   "author": "국립국어원",
   "license": "CC BY-SA 2.0 kr",
   "page": "https://commons.wikimedia.org/wiki/File:Patbingsu.jpg"
  },
  "버블티": {
   "src": "img/dessert/32.jpg",
   "author": "Battlesnake1",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Pearl_Milk_Tea_in_Chun_Shui_Tang.jpg"
  },
  "떡·한과": {
   "src": "img/dessert/27.jpg",
   "author": "Korea.net / Korean Culture and Information Service",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:KOCIS_yakgwa,_honey_cookies_(4646996556).jpg"
  }
 },
 "play": {
  "노래방": {
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
  "만화카페": {
   "src": "img/play/11.jpg",
   "author": "Fredrik Strömberg",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:TT061204-16G_manga_cafe.jpg"
  },
  "볼링장": {
   "src": "img/play/03.jpg",
   "author": "Benjamin J. DeLong",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:5-pin_bowling_pins_(4177654894).jpg"
  },
  "당구장": {
   "src": "img/play/06.jpg",
   "author": "Kurt Kaiser",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Billiards_table_4.jpg"
  },
  "스크린야구": {
   "src": "img/play/08.jpg",
   "author": "Yoshihiro Kudo",
   "license": "CC BY-SA 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Batting_Center_or_Batting_Cage_in_Japan.jpg"
  },
  "영화관": {
   "src": "img/play/13.jpg",
   "author": "Eden, Janine and Jim from New York City",
   "license": "CC BY 2.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cinema_Seats_I_(51830912465).jpg"
  },
  "전시": {
   "src": "img/play/14.jpg",
   "author": "Chongkian",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Melaka_Art_Gallery_-_Exhibition_Hall.jpg"
  },
  "공원": {
   "src": "img/play/19.jpg",
   "author": "Enigma7seven",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Seoulforest_path01.jpg"
  },
  "전통시장": {
   "src": "img/play/21.jpg",
   "author": "Bgag",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:Gwangjang_Market,_Seoul_02.jpg"
  },
  "쇼핑몰": {
   "src": "img/play/24.jpg",
   "author": "Basile Morin",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Large_interior_view_of_Plaza_Singapura_Shopping_mall_Orchard_Road_Singapore.jpg"
  },
  "소품샵": {
   "src": "img/play/22.jpg",
   "author": "Jegadeeswaran natarajan",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Stationery_Wholesale_Shop.jpg"
  },
  "서점": {
   "src": "img/play/18.jpg",
   "author": "Benh LIEU SONG",
   "license": "CC BY-SA 3.0",
   "page": "https://commons.wikimedia.org/wiki/File:Paris_75005_Quai_de_Montebello_Bouquinistes_20071014.jpg"
  },
  "공방": {
   "src": "img/play/25.jpg",
   "author": "Kritzolina",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Pottery_at_the_Chokhi_Dhani_Resort_Panchkula_30.jpg"
  },
  "술집": {
   "src": "img/play/53.jpg",
   "author": "LinasD",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Seoul_street_food_2011_march_20.jpg"
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
  "찜질방": {
   "src": "img/play/38.jpg",
   "author": "Choikwangmo9",
   "license": "CC0",
   "page": "https://commons.wikimedia.org/wiki/File:%EC%98%81%EC%8B%A0%EB%B6%88%EA%B0%80%EB%A7%88%EC%82%AC%EC%9A%B0%EB%82%9824%EC%8B%9C(%EA%B0%95%EC%9B%90_%EC%9B%90%EC%A3%BC%EC%8B%9C_%EC%8B%9C%EC%B2%AD%EB%A1%9C_96)3.jpg"
  },
  "고양이카페": {
   "src": "img/play/40.jpg",
   "author": "Petar Milošević",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Cat_Cafe_(Cat_Caffe).jpg"
  },
  "셀프사진관": {
   "src": "img/play/35.jpg",
   "author": "N509FZ",
   "license": "CC BY-SA 4.0",
   "page": "https://commons.wikimedia.org/wiki/File:Photo_booth_at_Wanquanhe_Qiao_Station_(20201231112106).jpg"
  }
 }
};

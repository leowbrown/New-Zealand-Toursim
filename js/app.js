// google maps API/Key Import

var googleMaps = '<script src="https://maps.googleapis.com/maps/api/js?key=' + googleMapsAPI + '&callback=initMap&libraries=&v=weekly" defer></script>';



$(document).ready(function() {
  $('body').append(googleMaps);
});



// datepicker for checkin / checkout

$(function() {
  $(".datepicker").datepicker();
});

var stays = [

  {
    id: 101,
    name: 'Lakefront BnB',
    type: 'hotel',
    town: 'wellington',
    minP: 1,
    maxP: 2,
    price: 157,
    minS: 1,
    maxS: 5,
    description: 'Perfectly located, across the road from the shores of the beautiful Lake Te Anau and just a 10 minute walk to shops and restaurants. Te Anau Lakefront BnB has spectacular views of the mountain ranges.',
    photo: 'wgtn01.jpg',
    beds: 1,
    baths: 1,
    tagWords: ['wellington', 'welly', 'hotel'],
    lat: -41.333029,
    lng: 174.775849


  },

  {
    id: 102,
    name: 'Southern Laughter',
    type: 'hostel',
    town: 'otago',
    minP: 1,
    maxP: 1,
    price: 30,
    minS: 1,
    maxS: 10,
    description: "Southern Laughter offer a great stay in a great location and it's just a short walk to all the attractions, bars, shops and restaurants. Enjoy free off street parking, free spa pool, luggage storage, and drinks discounts all around town.",
    photo: 'otago01.jpg',
    beds: 1,
    baths: 1,
    tagWords: ['otago', 'queenstown', 'hostel'],
    lat: -45.030228,
    lng: 168.658498
  },

  {
    id: 103,
    name: 'Compact Queen Studio',
    type: 'motel',
    town: 'taupo',
    minP: 2,
    maxP: 4,
    price: 90,
    minS: 3,
    maxS: 10,
    description: "The Compact Queen Studio offers Tea/coffee and toast making facilities only, mini fridge, sky TV and an ensuite bathroom with shower. This room is not suitable for a porta-cot or high chair.",
    photo: 'taupo01.jpg',
    beds: 2,
    baths: 2,
    tagWords: ['taupo', 'motel'],
    lat: -38.689991,
    lng: 176.080048
  },

  {
    id: 104,
    name: 'Modern Home',
    type: 'house',
    town: 'auckland',
    minP: 1,
    maxP: 4,
    price: 240,
    minS: 2,
    maxS: 15,
    description: "This brand new and stylish 3-storey home has spacious interior, quietness, convenience, surrounding nature's beauty and bay view. It is perfect for groups or families who seek tranquility in the suburbs. Only a few minutes’ walk from Blockhouse Bay Beach Reserve and walking distance from Blockhouse Bay Central.",
    photo: 'auck01.jpg',
    beds: 3,
    baths: 2,
    tagWords: ['auck', 'auckland', 'house'],
    lat: -36.931092,
    lng: 174.698037
  },

  {
    id: 105,
    name: 'Art Deco Luxury',
    type: 'house',
    town: 'wellington',
    minP: 2,
    maxP: 4,
    price: 184,
    minS: 1,
    maxS: 10,
    description: `Located on "The Golden Mile", lovingly Art Deco inspired "Prudence" is in the most highly sought part of central city Wellington. A Luxury escape, within a few minutes walk or scooter from everything from the waterfront, beach, shopping and Wellington's best restaurants and cafe's.`,
    photo: 'wgtn02.png',
    beds: 2,
    baths: 2,
    tagWords: ['wellington', 'welly', 'hotel'],
    lat: -41.145424,
    lng: 174.989951


  },

  {
    id: 106,
    name: 'Quiet Neighborhood',
    type: 'house',
    town: 'wellington',
    minP: 3,
    maxP: 6,
    price: 210,
    minS: 1,
    maxS: 14,
    description: `Lovely, sunny, cosy, clean and private three bedroom home in a quiet neighborhood. Parking right outside the front door. Close to airport, weta, local restaurants and bars, supermarket, Roxy movie theater, bus stop close by. Close to Lyall Bay Beach if you're a surfer and lots of outdoor walking and bike tracks if you outdoor activities.`,
    photo: 'wgtn03.png',
    beds: 3,
    baths: 1,
    tagWords: ['wellington', 'welly', 'hotel'],
    lat: -41.322045,
    lng: 174.807259


  },
  
  {
    id: 107,
    name: 'Cosy and comfort',
    type: 'house',
    town: 'auckland',
    minP: 2,
    maxP: 4,
    price: 170,
    minS: 1,
    maxS: 7,
    description: `Lovely, sunny, cosy, clean and private three bedroom home in a quiet neighborhood. Parking right outside the front door. Close to airport, local restaurants and bars, supermarket, Roxy movie theater, bus stop close by. Close to lots of outdoor walking and bike tracks if you outdoor activities.`,
    photo: 'auck02.png',
    beds: 2,
    baths: 1,
    tagWords: ['auckland', 'auck', 'hotel'],
    lat: -36.748904,
    lng: 174.723020


  },

  {
    id: 108,
    name: 'Spacious Appartment',
    type: 'appartment',
    town: 'auckland',
    minP: 2,
    maxP: 4,
    price: 110,
    minS: 1,
    maxS: 7,
    description: `Spacious character apartment with big balcony and a secure basement carpark. Two full bedrooms, one has a super king size bed with ensuite, the other queen bed with second bathroom.`,
    photo: 'auck03.png',
    beds: 2,
    baths: 2,
    tagWords: ['auckland', 'auck', 'hotel'],
    lat: -36.988709,
    lng: 174.893493


  },

  {
    id: 109,
    name: 'Botanical HideAway',
    type: 'house',
    town: 'taupo',
    minP: 2,
    maxP: 12,
    price: 211,
    minS: 1,
    maxS: 10,
    description: `Just as the name suggests, “Botanical Hideaway” is a tranquil oasis surrounded by trees, and backing onto the stunning Botanical Gardens. Private and peaceful, the only sound you will hear is that of birds singing. Nestled in the corner of the large sun-deck is the hot tub, which is the perfect spot to relax.`,
    photo: 'taupo02.png',
    beds: 7,
    baths: 2,
    tagWords: ['taupo', 'motel'],
    lat: -38.632723,
    lng: 176.037890
  },
  
  {
    id: 110,
    name: 'Iconic Kiwi Bach',
    type: 'house',
    town: 'taupo',
    minP: 2,
    maxP: 10,
    price: 206,
    minS: 1,
    maxS: 10,
    description: `Welcome to our Kiwi Bach with stunning views of Lake Taupō from the sunny lounge, kitchen and deck. Previous guests, family and friends say they love the relaxed vibe and they can truly unwind here.`,
    photo: 'taupo03.png',
    beds: 7,
    baths: 2,
    tagWords: ['taupo', 'motel'],
    lat: -38.632723,
    lng: 176.037890
  },

  {
    id: 111,
    name: 'Downstairs Appartment with Gardens',
    type: 'house',
    town: 'otago',
    minP: 2,
    maxP: 7,
    price: 130,
    minS: 1,
    maxS: 10,
    description: `From the garden there are views of Treble Cone ski field and Mt. Roy. The property is fully fenced with lots of secluded places to sit and relax. There is lots of parking for cars, boats and caravans. Wanaka township and the lake are a short 4 minute drive away.`,
    photo: 'otago02.png',
    beds: 5,
    baths: 3,
    tagWords: ['otago', 'motel'],
    lat: -45.145268180849186,
    lng: 168.75555833672524
  },

  {
    id: 112,
    name: 'Large and Spacious',
    type: 'house',
    town: 'otago',
    minP: 4,
    maxP: 9,
    price: 150,
    minS: 1,
    maxS: 6,
    description: `Fully fenced & private with secure garaging. 5 minutes drive from Wanaka town. Great Cafe less than 1 minutes walk away. Extensive cycling & walking networks within 10 minutes. Community recreation centre with gym, pools, spa & BBQ.`,
    photo: 'otago03.png',
    beds: 6,
    baths: 2.5,
    tagWords: ['otago', 'motel'],
    lat: -45.145268180849186,
    lng: 168.75555833672524
  }


]; //stays


var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: -40.935237,
      lng: 172.842336
    },
    zoom: 6,
  });
  
  var i;
  for( i = 0; i < stays.length; i++){
    var location = {lat : stays[i].lat, lng : stays[i].lng}
  };

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });

}

$('.listings-container').hide();


// page transitions


$('#startDate').datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date) {
    var selectDate = new Date(date);
    var msecInADay = 86400000;
    var stDate = new Date(selectDate.getTime() + msecInADay);

    $('#endDate').datepicker('option', 'minDate', stDate);
    var enDate = new Date(selectDate.getTime() + 10 * msecInADay);

    $('#endDate').datepicker('option', 'maxDate', enDate);

  }

});

$('#endDate').datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true
});



// home > listings
$('#searchBtn').click(function() {
  $('.home-container').toggle();
  $('.listings-container').toggle();
  dateDiff();
});

$('#homeBtn').click(function(){
 $('.home-container').show();
  $('.listings-container').hide();
});

function dateDiff() {
  var start = $(startDate).datepicker('getDate');
  var end = $(endDate).datepicker('getDate');

  var days = (end - start) / 1000 / 60 / 60 / 24; //to get human readable days
  $('#days').val(days);

  var guest = parseInt($('#numGuests').val());
  $('input[type=checkbox]').prop('checked', false);
  var searchWord = $('#searchWord').val();
  $('#results-location').append('<h3 class="searchResults">Search Results within ' + searchWord + '.</h3>');
  filterByWord(searchWord, guest, days);
}

// Total Price attempt - doesnt work.

function priceCalc(m,ds) {

  var totalPrice =  (stays[m].price * ds);
  
  return totalPrice;
  
}



function filterByWord(word, p, d) {
  var i;
  $('#listings-results').text('');
  for (i = 0; i < stays.length; i++) {
    if ((p >= stays[i].minP) && (p <= stays[i].maxP) && (d >= stays[i].minS) && (d <= stays[i].maxS) && (stays[i].town).includes(word.toLowerCase())) {

      displayCards(i, word, p, d);
    }
  }



} //filterByWord
// display all listings

function allStays() {

  var i = 0;
  $('#listings-result').text(' ');
  for (i = 0; i < stays.length; i++) {
    displayCards(i);
    cardModal();
  } //end of for loop
} //end of allCats function
// display cards
// display all

$('input[type=checkbox]').prop('checked', false);
allStays();

var meal, totalPrice;



function cardModal(k,w,g,dy) {

  $('.listings-modal').click(function() {
    $('#modalInfo').text(' '); //clearing the content
    $('.modal-info').text('');
    var i = 0;
    var i = 0;
    totalPrice = priceCalc(k, dy);
    console.log()
    for (i = 0; i < stays.length; i++) {

      if (parseInt(this.id) === stays[i].id) {


        $('.modal-info').append('<i class="fas fa-times x-icon col-12 pl-5 pt-4" data-dismiss="modal"></i><div class="modal-img-container col-sm-12 col-md-6"><img src="img/' +
          stays[i].photo + '" alt="' + stays[i].name + '" class="modal-img"></div>' +
          '<div class="modal-text-container pt-2 col-sm-12 col-md-6"> <div class="modal-listing-container ">' +
          '<h3 class="modal-header">' + stays[i].name + '</h3>' +
          '<p class="modal-description">' + stays[i].description + '</p><div class="row clearfix">' +
          '<h4 class="modal-price pl-3 col-8">$' + stays[i].price + '/Night</h4>' +
          '<div class="modal-bath-container row clearfix col-2"><h4 class="modal-bath">' +
          stays[i].baths + '</h4><i class="fas fa-toilet pl-2"></i>' +
          '</div><div class="modal-bed-container row clearfix col-2"><h4 class="modal-bed">' +
          stays[i].beds + '</h4><i class="fas fa-bed pl-2"></i>' + '</div> </div> </div>' +
          '<div class="modal-meal-container pt-3 pb-4">' +
          '<h3 class="modal-header">Meal Options</h3> <div class="row clearfix">' +
          '<p class="meal-details col-8"><b>Eggs Benedict</b><br>Soft Poached eggs on traditional English' +
          'muffin or Pride, with homemade hollandaise sauce </p>' +
          '<h4 class="modal-meal-price col-4">$15/day</h4> </div> <div class="row clearfix">' +
          '<p class="meal-details col-8">' + '<b>Fillet BBQ Pork</b> <br>' +
          'Tender fillet pork marinated in turmeric, lemongrass, topped with stir-fried vegetables. Served on a hot plate.' +
          '</p><h4 class="modal-meal-price col-4">$25/day</h4>' +
          '</div></div></div> <div class="modal-footer-container mx-auto col-sm-12 col-md-8 pl-5 row clearfix">' +
          '<button class="modal-cancel-btn col-3 ml-3" data-dismiss="modal">Cancel</button>' +
          '<select id="mealOptions" class="modal-meal-select mx-2 col-3" name="">' +
          '<option value="breakfast">Breakfast - $15</option>' +
          '<option value="dinner">Dinner - $25</option>' +
          '<option value="both">Both - $40</option>' +
          '</select><button onClick="showCost()"class="modal-confirm-btn col-3">Confirm</button></div>')
          $('#mealOptions').change(function(){
            meal = $('#mealOptions').val();
            totalCost = (dy*g*meal) + totalPrice;
          });   
        
      } //end of if statement
    } //end of for statement
  }); // end of moreDetails click event

} //cardModal
$('.modal-confirm-btn').click(function() {
  $('.modal-total-container').text(' '); //clearing the content
});

var totalCost;
function showCost(tc) {
  $('.modal-total-container').append('<p class="modal-total-price mx-auto">Your total cost = $' + tc + '</p>')
}


function displayCards(j, word, p, d) {
  $('#listings-results').append('<div class="listings-card-container listings-modal col-md-12 col-lg-6 moreDetails" data-toggle="modal" data-target="#modal-details" id="' + stays[j].id + '">' +
    '<div class="listings-card bg-light text-secondary row clearfix">' +
    '<div class="listings-card-img-container col-sm-12 col-md-6">' +
    '<img src="img/' +
    stays[j].photo + '" class="pl-1 listings-card-img" alt="' + stays[j].type + '">' +
    '</div>' +
    '<div class="listings-card-text-container col-sm-12 col-md-6">' +
    '<h3 class="listings-card-header pt-1">' + stays[j].name +
    '</h3><p class="listings-card-disc">' + stays[j].description +
    '<div class="listings-card-footer mx-auto col-12 mb-2 row clearfix">' +
    '<h4 class="listings-card-price">' + '$' + stays[j].price + '/Night' +
    '</h4> <div class="listings-card-icons-container row clearfix ml-auto pr-5">' +
    '<p class="listings-card-baths px-2">' + stays[j].baths +
    '</p>   <i class="fas fa-toilet"></i>' +
    '<p class="listings-card-beds px-2">' + stays[j].beds +
    '</p>' +
    '<i class="fas fa-bed"></i>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>'
  ); //append ends here
  cardModal(j, word, p, d);
}; //displayCards

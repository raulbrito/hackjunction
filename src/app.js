/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

  ajax(
  {
    url:'http://hackjunction.ngrok.io/hooks/product_choice',
    type:'json'
  }, function(data) {
    console.log(data);
    var body_text = "Press UP for a " + data[0] + "\nPress DOWN for a " + data[1];

    var main = new UI.Card({
      title: 'Hey Renny, hungry?',
      body: body_text
    });
        
    main.show();
    
    main.on('click', 'up', function(e) {
      console.log(data[0]);
      ajax(
      {
        url:'http://hackjunction.ngrok.io/hooks/pebble?name=' + data[0],
        type:'json'
      }, function(data) {
         var result_text = "Your order " + data + " is ready in 5 minutes!";
         new UI.Card({
           title: 'Awesome Renny!',
            body: result_text
           }).show();

      }, function(error) {
        console.log("error ordering"); 
      })
    });
    main.on('click', 'down', function(e) {
      console.log(data[1]);
      ajax(
      {
        url:'http://hackjunction.ngrok.io/hooks/pebble?name=' + data[1],
        type:'json'
      }, function(data) {
         var result_text = "Your order " + data + " is ready in 5 minutes!";
         new UI.Card({
           title: 'Awesome Renny!',
            body: result_text
           }).show(); 
      }, function(error) {
        console.log("error ordering"); 
      })
    });
    
    
  },
    function(error) {
      console.log("this is the error:" + error);
  });


      
/*
main.on('click', 'up', function(e) {
  console.log('going to ajax');
  ajax(
  {
    url:'http://hackjunction.ngrok.io/hooks/bttn',
    type:'json'
  },
  function(data) {
    console.log('all went good');
    var wind = new UI.Window({
      fullscreen: true,
    });    
    var textfield = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: 'Your food is waiting for you!',
      textAlign: 'center'
    });
    wind.add(textfield);
    wind.show();
    console.log('all went good');
  },
  function(error) {
    console.log(error);
    console.log('Download failed: ' + error);
  }
);



  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();

  
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Hola Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
*/

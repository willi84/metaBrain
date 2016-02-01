angular.module('starter.services', ['times.tabletop'])
.factory('BookDataService', function ($http, $q) {

  var BASE_URL = 'http://ajs-workshop.herokuapp.com/api/';

  var _books;

  /**
   * Public API
   */
  return {
    getBooks: getBooks,
    getBookByIsbn: getBookByIsbn,
    saveBook: saveBook
  };

  /**
   *
   * @returns {jQuery.promise|promise.promise|d.promise|promise|.ready.promise|jQuery.ready.promise|*}
   */
  function getBooks() {
    // @TODO: add simple caching
    //if (_books) {
    //  return $q.when(_books);
    //}

    // AngularJS 1.3
    return $q(function (resolve, reject) {
      $http.get(BASE_URL + 'books')
        .then(function (result) {
          resolve(_books = result.data);

        }, function (error) {
          reject(error);
        });
    });

    // ES 6
    // return new Promise(function(resolve, reject) {});

    // AngularJS 1.2
    //var deferred = $q.defer();
    //
    //$http.get(BASE_URL + 'books')
    //  .then(function (result) {
    //    console.log(result);
    //    deferred.resolve(result.data);
    //
    //  }, function (error) {
    //    console.error(error);
    //    deferred.reject(error);
    //  });
    //
    //return deferred.promise;
  }

  function getBookByIsbn(isbn) {
    return $q(function (resolve, reject) {
      $http.get(BASE_URL + 'books/' + isbn)
        .then(function (result) {
          resolve(result.data);
        }, function (error) {
          reject(error);
        });
    });
  }

  function saveBook(book) {
    return $q(function (resolve, reject) {
      $http.put(BASE_URL + 'books/' + book.isbn, book)
        .then(function (result) {
          resolve(result.status);
        }, function (error) {
          reject(error);
        })
    });
  }
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Items', function(BookDataService, Tabletop) {
  // Might use a resource here that returns a JSON array

 /* TabletopProvider.setTabletopOptions({
    key: 'https://docs.google.com/spreadsheets/d/1RVnUq3oMwt9aLROzgDJDbPlacjzWkOnx8pzzvX4Lcw4/pubhtml',
  });

  console.log(Tabletop);*/
  // Some fake testing data
  var items = []; /*[{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];*/

var bd = Tabletop; //BookDataService.getBooks();

  return {
    all: function() {
      return bd;


    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
});

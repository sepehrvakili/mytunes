// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(data) {
    return data.results;
  },
  initialize: function() {
    this.fetch();

    // var self = this;

    // var retData = [];
    // $.ajax({
    //   url: 'https://api.parse.com/1/classes/songs',
    //   success: function(data) {
    //     self.add(data.results);
    //     //this.set('SongModel', data.results);
    //     //this.add(song);
    //   }
    // });

    
    // return data;
  }


});
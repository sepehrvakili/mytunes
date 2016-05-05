// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    //console.log(this);
    this.on('add', function() {
      // alert('we need to add to song queue here');
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length >= 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      this.remove();
    }, this);

  },
  playFirst: function() {
    this.first().play();
  }


});
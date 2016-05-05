// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    
    this.on('ended', function(song) {
      debugger;
    }, this);


  },
  events: {
    'ended': 'endMe',
  },

  endMe: function() {
    this.model.ended();
    //Or
    //this.model.trigger('ended', this);
    // //this.setSong(song);

  },
  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

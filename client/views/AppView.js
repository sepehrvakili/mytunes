// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songView = new SongQueueView({collection: this.model.get('songQueue'), el: $('#songQ')});    
    this.libraryView = new LibraryView({collection: this.model.get('library'), el: $('#library')});
    this.libHeader = $('#libHeader').text('Library');
    this.queueHeader = $('#queueHeader').text('Your Playlist');
    this.photo = $('#photo');
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

  },

  render: function() {
    return this.$el.html([
      this.photo,
      this.playerView.$el,
      this.queueHeader,
      this.songView.$el,
      this.libHeader,
      this.libraryView.$el
    ]);
  }

});

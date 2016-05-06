// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.html('<th>SongQueue</th>');
    this.collection.forEach(this.renderSong, this);
    return this.$el;
  },
  renderSong: function(song) {
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  }

});

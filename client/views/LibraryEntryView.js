// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // tagName: 'tr',

  template: _.template('<%= title %>'),
  attributes: {
    class: 'libSong'
  },
  events: {
    'click': function() {
      this.model.play();
      this.model.enqueue();
      $('#songQ').removeClass('selectBg');
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

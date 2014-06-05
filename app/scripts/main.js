AppView = Backbone.View.extend({
 
  initialize: function(){
    this.listenTo(PhotoCollection, 'add', function(user){
      new UserView({model: user})
    })
  }
 
});

var app = new AppView();
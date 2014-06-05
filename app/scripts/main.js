'use strict';
 
var Photo = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
        url: 'http://37.media.tumblr.com/tumblr_mdgfpehkYN1r8cvzdo1_500.gif'
    },
});
 
var PhotoCollection = Backbone.Collection.extend({
    model: Photo,
    url: 'http://tiny-pizza-server.herokuapp.com/collections/photos'
});


////////////////THUMBNAIL VIEW BEGIN

var ThumbnailView = Backbone.View.extend({
 
    className: 'thumbnail',
 
    template: _.template($('.thumbnail-template').text()),
 
    events: {
        'click' : 'showDetailView'
    },
 
    initialize: function(){
        $('.container').append(this.el);
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.template(this.model.attributes);
        this.$el.html(renderedTemplate);
    },
 
    showDetailView: function(){
        new DetailView({model: this.model});
    }

});
///////////////THUMBNAIL VIEW END

var DetailView = Backbone.View.extend({

	className: 'detail',
 
    template: _.template($('.detail-template').text()),
 
    initialize: function(){
        $('.container').append(this.el);
        this.render();
    },
 
    render: function(){
        var renderedTemplate = this.template(this.model.attributes);
        this.$el.html(renderedTemplate).removeClass('thumbnail');
    },
});

var AppView = Backbone.View.extend({
 
    initialize: function(){
        this.listenTo(coolPhotos, 'add', function(photo){
            new ThumbnailView({model: photo});
        });
    }
});

var coolPhotos = new PhotoCollection();

var app = new AppView();

coolPhotos.fetch();


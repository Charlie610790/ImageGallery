'use strict';
 
var Photo = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
        comment: 'Go Red Sox',
        url: 'http://content.sportslogos.net/logos/53/53/full/ba0u6pkfm7zmorlyyy00cx0os.gif'
    },
});
 
var PhotoCollection = Backbone.Collection.extend({
    model: Photo,
    url: 'http://tiny-pizza-server.herokuapp.com/collections/Charliephoto'
});


////////////////THUMBNAIL VIEW BEGIN

var ThumbnailView = Backbone.View.extend({
 
    className: 'thumbnail',
 
    thumbnailTemplate: _.template($('.thumbnail-template').text()),
 
    events: {
        'click' : 'showDetailView'
    },
 
    initialize: function(){
        $('.thumbnailContainer').append(this.el);
        this.render();
    },
 
    render: function(){
        if (this.model.attributes.hasOwnProperty('url')) {
            var renderedTemplate = this.thumbnailTemplate(this.model.attributes);
            this.$el.html(renderedTemplate);
        }
        
    },
 
    showDetailView: function(){
        detailViewInstance.remove();
        detailViewInstance = new DetailView({model: this.model});
    }

});
///////////////THUMBNAIL VIEW END


var photos = new PhotoCollection();
var detailViewInstance;


photos.fetch().done(function(){
    photos.each(function(photo){

        new ThumbnailView({model: photo});

    });

    detailViewInstance = new DetailView({ model: photos.first() });
});

var app = new AppRouter();

Backbone.history.start();
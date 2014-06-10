'use strict';

var DetailView = Backbone.View.extend({

    className: 'detail-view',

    template: _.template($('.detail-view-template').text()),

    events: {
        'click .saveButton': 'updateModel',
        'click .newButton': 'createPhoto',
        'click .deleteButton': 'deletePlayer',
        'click .moveButton': 'movePlayer'

    },

    initialize: function(){
        this.listenTo(photos, 'add', function(photo){
            new ThumbnailView({model: photo});
        });


        $('.editContainer').prepend(this.el);
        this.render();
    },

    render: function(){

        var renderedTemplate = this.template(this.model.attributes);
        this.$el.html(renderedTemplate);
        return this;
    },

    updateModel: function(){

        var that = this;

        this.model.set({
            url:      this.$el.find('.url-input').val(),
            comment:  this.$el.find('.name-input').val()
        });

        photos.add(this.model);

        this.model.save().done(function(){
            that.$el.find('.status').html('You Added A New Player!');
        });
    },

    deletePlayer: function(){
        this.model.destroy();
    },

    movePlayer: function(){

        InjuredPlayer.add(this.model);
    },

    createPhoto: function(){

        var photoInstance = new Photo();

        this.model = photoInstance;

        this.$el.find('.url-input').val('');
        this.$el.find('.name-input').val('');
        this.$el.find('img').attr('src','http://placehold.it/370x300');


    }
});
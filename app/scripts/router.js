'use strict';
 
var AppRouter = Backbone.Router.extend({
 
    routes: {
        ''                            : 'renderHome',
        'players'                     : 'renderPlayers',
        'players/:playername'         : 'renderPlayer',
    },
 
    initialize: function () {
        
    },
 
    renderHome: function () {
        console.log('render home works');
        $('.editImage').attr('src','http://placehold.it/370x300');
        $('.url-input').val('URL HERE');
        $('.name-input').val('PLAYER NAME HERE');
    },
 
    renderPlayers: function () {
        $('.editImage').attr('src','http://www.sports-logos-screensavers.com/user/Boston_Red_Sox.jpg');
        console.log('render players works');
        
    },
 
    renderPlayer: function (id) {
    },

});
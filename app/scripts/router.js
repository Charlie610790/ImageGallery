'use strict';
 
var AppRouter = Backbone.Router.extend({
 
    routes: {
        ''                            : 'renderHome',
        'players'                     : 'renderPlayers',
        'players/:playername'         : 'renderPlayer',
    },
 
    initialize: function () {
        $('.editImage').attr('src','http://placehold.it/370x300');
        $('.url-input').val('');
        $('.name-input').val('');
    },
 
    renderHome: function () {
        console.log('render home works');
        $('.editImage').attr('src','http://placehold.it/370x300');
        $('.url-input').val('URL HERE');
        $('.name-input').val('PLAYER NAME HERE');
    },
 
    renderPlayers: function () {
        $('.container').html();
        console.log('render players works');
        
    },
 
    renderPlayer: function (username) {
        console.log('profile route for', username);
        $('.container').html('Check out '+ username + '\'s cool profile ');
        $('.container').append('<a href="/#users/'+username + '/favorites">'+ username +  '\'s favorites </a>');
    },

});
(function() {
  var Offify;
  Offify = (function() {
    function Offify() {}
    Offify.prototype.play = function(pl) {
      var player, playlist;
      playlist = Playlist.fromURI(pl);
      player = new Player();
      return player.play(playlist.tracks[0]);
    };
    Offify.prototype.login = function() {
      this.authDialog("http://dev.offify.x86.nu:3001/login");
    };
    Offify.prototype.authDialog = function(uri) {
      var callbacks;
      callbacks = {
        onSuccess: function(uri) {
          return crossroads.parse("facebook/loggedin?" + (uri.split("?")[1]));
        }
      };
      sp.core.showAuthDialog(uri, "spotify:app:offify:facebook:loggedin", callbacks);
    };
    Offify.prototype.template = function(template) {
      var text;
      text = sp.core.readFile('templates/' + template + '.ejs');
      return new EJS({
        text: text
      });
    };
    Offify.prototype.user = function() {
      return window.localStorage.getItem("user:token");
    };
    Offify.prototype.save_user = function(token) {
      return window.localStorage.setItem("user:token", token);
    };
    Offify.prototype.playlists = function() {
      if (!this._playlists) {
        this._playlists = JSON.parse(window.localStorage.getItem("user:playlists"));
      }
      if (!this._playlists) {
        this._playlists = new Array();
      }
      return this._playlists;
    };
    Offify.prototype.add_playlist = function(playlist) {
      this.playlists();
      this._playlists.push(playlist);
      window.localStorage.setItem("user:playlists", JSON.stringify(this._playlists));
    };
    return Offify;
  })();
  window.Offify = new Offify();
}).call(this);

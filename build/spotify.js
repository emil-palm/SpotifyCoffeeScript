(function() {
  window.sp = getSpotifyApi(1);
  window.views = sp.require("sp://import/scripts/api/views");
  $.extend(window, sp.require("sp://import/scripts/api/models"));
}).call(this);

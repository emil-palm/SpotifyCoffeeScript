window.sp = getSpotifyApi 1
window.views = sp.require "sp://import/scripts/api/views"
$.extend window, sp.require "sp://import/scripts/api/models"
# window.dom = sp.require('sp://import/scripts/dom');
# window.ui = sp.require('sp://import/scripts/ui');
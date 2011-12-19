class Offify			
	play: (pl) ->
		playlist = Playlist.fromURI(pl)
		player = new Player()
		player.play(playlist.tracks[0])
		
	login: () ->
			@authDialog("http://dev.offify.x86.nu:3001/login")
			return undefined
			
	authDialog: (uri) ->
		callbacks = {
			onSuccess: (uri) ->
				crossroads.parse("facebook/loggedin?#{uri.split("?")[1]}")
		}
		sp.core.showAuthDialog(uri, "spotify:app:offify:facebook:loggedin",callbacks)
		return undefined
		
	template: (template)->
		text = sp.core.readFile('templates/' + template + '.ejs');
		new EJS({ text: text });

# Token handling

	user: -> 
		window.localStorage.getItem("user:token")

	save_user: (token) ->
		window.localStorage.setItem("user:token", token)
		
# Playlist handling
	playlists: ->
		unless @_playlists
			@_playlists = JSON.parse(window.localStorage.getItem("user:playlists"))
		
		unless @_playlists
			@_playlists = new Array()
			
		@_playlists
		
	add_playlist: (playlist) ->
		@playlists()
		@_playlists.push playlist
		window.localStorage.setItem("user:playlists", JSON.stringify(@_playlists))
		return undefined;
	
window.Offify = new Offify()
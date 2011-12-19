# Barebone Spotify Coffeescript
Why? I was looking into starting to code some stuff for the new **Spotify Apps**.
And **coffeescript** is amazing we all know it, but since i needed some way of parsing
my **coffeescript** into a proper way of using **Spotify** i wrote some random rake tasks.
And here we are.

## Requirements
Im doing this in Ruby so you need; 
Ruby
And the following gems:
bundler
rake
json
coffee-script

They are all listed in the Gemfile so you can just run "bundle install" to get it all setup.

## Usage

### First steps

    mkdir /path/to/your/project/folder
    curl https://github.com/mrevilme/SpotifyCoffeeScript/zipball/master | unzip
    bundle install

Now you need to reconfigure the src/manifest.json so that info is as correct as you need it.
Then just do the following:

	rake build
	rake install
	
Now you should be setup and be able to load your app.

### Workflow
Write your code inside of src/* then just run

    rake build

and reload your spotify app.

# Authors
Emil Palm <emil[a]x86.nu> @mrevilme 

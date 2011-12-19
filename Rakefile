require "rubygems"
require "bundler/setup"
require 'json'
Bundler.require

namespace :spotify do
  task :manifest do
    content = File.open("src/manifest.json","r") { |f| f.read }
    hash = JSON.parse(content)
    ENV['app_name'] = hash["BundleIdentifier"]
    ENV['app_desc'] = hash["AppDescription"]
  end
end


task :copy do
  Dir.glob("src/**/*").each do |file|
    dst = "build/#{file.gsub(/^src\//,"")}"
    if File.directory? file
      FileUtils.mkdir dst unless File.exists? dst
    else
      FileUtils.mkdir File.dirname(dst) unless File.exists? File.dirname(dst)
      FileUtils.cp file, dst unless (file =~ /coffee\.js$/)
    end
  end
end

task :compile_coffee do
  Dir.glob("src/**/*.coffee.js").each do |file|
    if file =~ /coffee\.js$/
      local_filename = "build/#{file.gsub(/^src\//,"").gsub(".coffee","")}" 
      File.open(local_filename, 'w') {|f| f.write(CoffeeScript.compile(File.read(file))) } 
    end
  end
end

desc "Build the app"
task :build => [:copy,:compile_coffee]

# desc "Production build"
# task :production => [:build]

desc 'Install the app'
task :install => ['spotify:manifest',:build] do
  File.symlink("#{Dir.pwd}/build/", "#{Dir.home}/Spotify/#{ENV['app_name']}")
  puts "Installed #{ENV['app_name']} in ~/Spotify/#{ENV['app_name']}, remeber to use the development version of spotify"
  puts ENV['app_desc']
end

desc 'Remove the app'
task :remove => "spotify:manifest" do
  File.delete "#{Dir.home}/Spotify/#{ENV['app_name']}"
  puts "Removed #{ENV['app_name']} from ~/Spotify/#{ENV['app_name']}"
end
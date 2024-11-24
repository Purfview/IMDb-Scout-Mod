[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?hosted_button_id=JF5BEQE3YQGH2)   
![alt text](https://i.imgur.com/BpuPBsR.png)

# IMDb Scout Mod:

Auto search for movie/series on torrent, usenet, ddl, subtitles, streaming, predb and other sites.    
Supports Re-designed/Reference pages and does multi auto-search on List/Watchlist/Advanced Title Search pages.   
Adds links to IMDb pages from hundreds various sites.    
Auto search local HDDs/filelists using Voidtools Everything search engine.    
Adds movies/series to Radarr/Sonarr.   
Adds/Removes movies/series/episodes to/from Trakt's watchlist.   
Adds external ratings from Metacritic, Rotten Tomatoes, Letterboxd, Douban, Allocine, MyAnimeList, AniList.   
Media Server indicators for Plex, Jellyfin, Emby.   
Extract info to clipboard with the special button "Copy info to BBCode".    
Auto loads Reference View without login.   
Dark theme/style for Reference View.   
Compact mode for Reference View.   
Removes ads.   
Supports mobile: [Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix), Firefox for Android. [Orion](https://apps.apple.com/us/app/orion-browser-by-kagi/id1484498200) for iOS.       
Supports browsers: Firefox, Chrome, Opera, Safari, Waterfox, Brave, Pale Moon, Edge.    
Supports: [Violentmonkey](https://violentmonkey.github.io/), [Tampermonkey](https://www.tampermonkey.net/), [Greasemonkey](https://www.greasespot.net/), [Greasemonkey v3](https://web.archive.org/web/20171009185612/https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/versions/) & [Greasemonkey for Pale Moon](https://github.com/janekptacijarabaci/greasemonkey/releases).  

Meanings of the color borders around the icons:  
![alt text](https://i.imgur.com/hgjQd00.png) - `Search completed. Results found.`  
![alt text](https://i.imgur.com/VWMw0YC.png) - `Search completed. Results not found.`  
![alt text](https://i.imgur.com/4aJukqO.png) - `No access to search or search can't be done.`  
![alt text](https://i.imgur.com/UTLrRZu.png) - `Search completed. Request found.` 

## Installing:

[Press here to install](https://greasyfork.org/en/scripts/407284-imdb-scout-mod)

## Contributing:

Contributions are welcome.

## Adding new sites:

Inside the script, there is a list of dictionaries that contains of all the sites, and the data necessary to check IMDb against them.   
**Each site is a dictionary with the following attributes:**
  - `name`: The site name, abbreviated.
  - `icon` (optional): Icon for the site.
  - `searchUrl`: The URL to perform the search against, see below for how to tailor the string to a site.
  - `matchRegex`: The string which appears if the searchUrl *doesn't* return a result.
  - `positiveMatch` (optional): Changes the test to return true if the searchUrl *does* return a result that matches matchRegex
  - `seedingRegex` (optional): The string which appears if the searchUrl does return a result with seeding indicator   
  - `TV` (optional): If true, it means that this site will only show up on TV pages. By default, sites only show up on movie pages.
  - `both` (optional): Means that the site will show up on both movie and TV pages.
  - `spaceEncode` (optional): Changes the character used to encode spaces in movie titles. The default is '+'.
  - `goToUrl` (optional): Different URL used for link (instead of `searchUrl`).
  - `loggedOutRegex` (optional): If any text on the page matches this regex, the site is treated as being logged out.
  - `configName` (optional): Use this to allow changing names without breaking existing users.
  - `inSecondSearchBar` (optional): Places site at the second searchable bar.
  - `inThirdSearchBar` (optional): Places site at the third searchable bar.
  - `rateLimit` (optional): Connection rate limit in milliseconds. Default is 200. On the Search/List pages if rateLimit<=1000 then it will be increased by a factor of 4.
  - `mPOST`: HTTP request by POST method. For the sites that doesn't support GET.
  - `ignore404` (optional): Ignores all 4** HTTP errors.
  - `ignoreEmpty` (optional): Use it if an empty response means that no results found, otherwise by default it means 'logged_out'.
      
    
**Parameters you can use inside the URL:**
  - `%tt%`: The IMDb id with the tt prefix (e.g. tt0055630).
  - `%nott%`: The IMDb id without the tt prefix (e.g. 0055630).
  - `%tvdbid%`: The TVDb id.
  - `%tmdbid%`: The TMDb id.      
  - `%tmdb_orig_title%`: To get the native original title instead of IMDb's latinized one.   
  - `%doubanid%`: The Douban id.
  - `%search_string%`: The local movie title. Depends on preferences at www.imdb.com/preferences/general   
  - `%search_string_orig%`: The original movie title (e.g. Yôjinbô). Reverts to %search_string% if an original title is not set at IMDb.
  - `%year%`: The movie year (e.g. 1961).
  - `%seriesid%`: For the streaming APIs. The IMDb ID of series.
  - `%seasonid%`: For the streaming APIs. Season number.
  - `%episodeid%`: For the streaming APIs. Episode number.

See the script for examples.

## Versioning:
Follows a bastardization of the [semver](http://semver.org/) standard:
* Patch versions will not change behavior, only the URL/settings for trackers.
* Minor versions will definitely change code, although behavior may in fact remain the same.
* Major versions will definitely change behavior, although it will only be increased at the discretion of the current maintainer.
   
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=JF5BEQE3YQGH2)


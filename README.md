![alt text](https://i.imgur.com/scanaxX.png)

# IMDb Scout Mod:

New additions, features, tweaks and bugfixes.   
Add links from IMDb pages to torrent trackers and other movie sites -- easy downloading from IMDb.  
Supports [Greasemonkey](https://www.greasespot.net/), [Violentmonkey](https://violentmonkey.github.io/) & [Tampermonkey](https://www.tampermonkey.net/).  

## Contributing:

Contributions are welcome.

## Adding new sites:

Inside the script, there is a list of dictionaries that contains of all the sites, and the data necessary to check IMDb against them.
Each site is a dictionary with the following attributes:
  - `name`: The site name, abbreviated.
  - `searchUrl`: The URL to perform the search against, see below for how to tailor the string to a site.
  - `matchRegex`: The string which appears if the searchUrl *doesn't* return a result.
  - `postiveMatch` (optional): Changes the test to return true if the searchUrl *does* return a result that matches matchRegex
  - `TV` (optional): If true, it means that this site will only show up on TV pages. By default, sites only show up on movie pages.
  - `both` (optional): Means that the site will show up on both movie and TV pages.
  - `spaceEncode` (optional): Changes the character used to encode spaces in movie titles. The default is '+'.
  - `goToUrl` (optional): Different URL used for link (instead of `searchUrl`).
  - `loggedOutRegex` (optional): If any text on the page matches this regex, the site is treated as being logged out.
  - `configName` (optional): Use this to allow changing names without breaking existing users.
  - `inSecondSearchBar` (optional): Places site at the second searchable bar.
  - `inThirdSearchBar` (optional): Places site at the third searchable bar.
  - `rateLimit` (optional): Connection rate limit in milliseconds. Default is 200. On the Search/List pages it will be increased by a factor of 4.
  - `mPOST`: HTTP request by POST method. For the sites that doesn't support GET.
  

Parameters you can use inside the URL:
  - `%tt%`: The IMDb id with the tt prefix (e.g. tt0055630).
  - `%nott%`: The IMDb id without the tt prefix (e.g. 0055630).
  - `%search_string%`: The movie title (e.g. Yojimbo). Depends on your preferences at www.imdb.com/preferences/general .
  - `%search_string_orig%`: The original movie title (e.g. Yôjinbô). Reverts to %search_string% if an original title is not set at IMDb.
  - `%year%`: The movie year (e.g. 1961).

See the script for examples.

## Versioning:
Follows a bastardization of the [semver](http://semver.org/) standard:
* Patch versions will not change behavior, only the URL/settings for trackers.
* Minor versions will definitely change code, although behavior may in fact remain the same.
* Major versions will definitely change behavior, although it will only be increased at the discretion of the current maintainer.

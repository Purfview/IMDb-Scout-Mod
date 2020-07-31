# IMDb-Scout-Mod

Add links from IMDb pages to torrent and other sites -- easy downloading from IMDb

Greasemonkey v4 is currently not supported (v3.xx works). Try alternatives plugins such as Violentmonkey or Tampermonkey.

## Usage

'IMDb Scout Preferences' button you'll find on plugin's icon (you must open a movie page on IMDb first).

Currently the script works on both individual pages (e.g. https://www.imdb.com/title/tt4131188/), and the advanced title search (e.g. https://www.imdb.com/search/title/?title=test), and Watchlist.

## Contributing

Contributions are welcome.

## Adding new sites

Inside the script, there is a list of dictionaries that contains of all the sites, and the data necessary to check IMDb against them.
Each site is a dictionary with the following attributes:
  - `name`: The site name, abbreviated
  - `searchUrl`: The URL to perform the search against, see below for how to tailor the string to a site
  - `matchRegex`: The string which appears if the searchUrl *doesn't* return a result
  - `postiveMatch` (optional): Changes the test to return true if the searchUrl *does* return a result that matches matchRegex
  - `TV` (optional): If true, it means that this site will only show up on TV pages. By default, sites only show up on movie pages
  - `both` (optional): Means that the site will show up on both movie and TV pages
  - `spaceEncode` (optional): Changes the character used to encode spaces in movie titles. The default is '+'.
  - `goToUrl` (optional): Different URL used for link (instead of `searchUrl`).
  - `loggedOutRegex` (optional): If any text on the page matches this regex, the site is treated as being logged out.
  - `configName` (optional): Use this to allow changing names without breaking existing users.

Parameters you can use inside the URL:
  - %tt%: The IMDb id with the tt prefix (e.g. tt0055630)
  - %nott%: The IMDb id without the tt prefix (e.g. 0055630)
  - %search_string%: The movie title (e.g. Yojimbo)
  - %search_string_orig%: The original movie title (e.g. Yojimbo)
  - %year%: The movie year (e.g. 1961)

See the script for examples.

## Versioning
Follows a bastardization of the [semver](http://semver.org/) standard:
* Patch versions will not change behavior, only the URL/settings for trackers.
* Minor versions will definitely change code, although behavior may in fact remain the same.
* Major versions will definitely change behavior, although it will only be increased at the discretion of the current maintainer.

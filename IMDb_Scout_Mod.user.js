// ==UserScript==
// @name           IMDb Scout Mod
// @namespace      https://github.com/Purfview/IMDb-Scout-Mod
// @description    Add links from IMDb pages to torrent and other sites -- easy downloading from IMDb
//
// Preference window for userscripts, hosted by greasyfork:
// @require     https://greasyfork.org/libraries/GM_config/20131122/GM_config.js
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
//
// @version        5.2.1
// @include        http*://*.imdb.tld/title/tt*
// @include        http*://*.imdb.tld/search/title*
// @include        http*://*.imdb.tld/user/*/watchlist*
// @include        http*://*.imdb.com/title/tt*
// @include        http*://*.imdb.com/search/title*
// @include        http*://*.imdb.com/user/*/watchlist*
//
// @connect      *
// @grant        GM_log
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
//
// ==/UserScript==
/*---------------------Version History--------------------
1.00    -    Initial public release, everything works on barebones greasemonkey

1.50    -    Added the ability to select which sites to load from the GM script commands
        -    Moved the required method to userscripts
        -    Removed FH, NZB, Avax

1.60    -    Added style elements and shading to display on imdb

1.62    -    Fixed bug:SCC-ARC not removing when unchecked
        -    Alphabetized list

1.70    -    Cleaned up code
        -    Added option to not run script on page load

1.71    -    Deprecated action-box field

1.80    -    Added icons that link to OpenSubs, Criticker, RT, YT

1.81    -    Added support for tv, only displays on shows listed as 'tv series'
        -    Added support for icheckmovies at top bar.

1.82    -    Fixed title parsing for tv shows.

1.83    -    Fixed dhive not working properly

1.90    -    Set height of preference window to 450px, added scroll bar

1.91    -    Added another 11 torrent sites

2.00    -    Added auto updater

2.01    -    Added TC, FreshOn, TVT, STF, CC
        -    Cleaned up code (tabbing)
        -    Removed THR
        -    Added TV-Rage to top bar

2.02    -    Added PS, THC, HH, HDStar
        -    Fixed CC false positive

2.03    -    TehC now uses tt
        -    Added Raymoz mod for AT

2.04    -    Added HDbits
        -    Added TL

2.10    -    Added genre page search functionality

2.11    -    Fixed ICM because Nuked was whining

2.12    -    Removed tvrage
        -    Fixed iCM (added tt)
        -    Added HDVNbits
        -    Changed RevTT to .me
        -    Added HDT
        -    removed autoupdate

2.13    -    removed xvidme
        -    reinstated autoupdate
        -    removed google chrome code
        -    fixed hdvn and hdt issues

2.14    -    Added @grant entries for API access
        -    Fixed tt parser to work on imdb pages with referral info in url

2.2     -    Switch preferences window to use GM_config
        -    Consolidate icon & site lists
        -    Added IPT, KASS, sHD, and HDW
        -    Fix "Open All" link
        -    Add option for strikethroughs on search page
        -    Removed arrays from search URLs
        -    Spring cleaning

2.21    -    Added SSL to TVT, HDME, TC, AHD, IPT, SCC
        -    Added SSL option for CG
        -    Added GFT, GFT-Gems, GFT-TV
        -    Fixed SCC, SCC-ARC search URL
        -    Removed TheBox, TheDVDClub
        -    Added more comments, cleaned up some more stuff

2.22    -    Fixed TehC, BTN, BTN-Req, THC
        -    Added a bunch of TV sites, courtesy of seedless
        -    Added "both" option for sites, and made changes
             to allow coexistence of movie and TV sites with
             the same name
        -    Code re-organization, documentation
        -    Re-added code to allow an array for searchUrl

2.22.1  -    Minor fixes

2.23    -    Fixed THC, BTN
        -    Distinguish between movies and TV on search page

2.24    -    Separate load_on_start option for search page
        -    Fix search_string on search page

2.25    -    Added some helpful text when no sites have been enabled

2.26    -    Added code to show links when on pages besides just the "front" one
             (e.g. http://www.imdb.com/title/tt2310332/reference)

2.26.1  -    Correctly detect TV shows when on aforementioned pages.

2.3     -    Incorporate a bunch of changes courtesy of Inguin:
             - Added SSL to AT, TE, D-noid, TG, YT, RT
             - Changed tracker short titles to canonical form ADC, KG
             - Updated D-noid from .me to .pw
             - Fixed broken AT search; also updated to use .me so avoids redirect
             - Added BitHQ, ET (eutorrents)
             - Removed two broken THC; replaced with one fixed
             - Removed iplay, horrorhaven, hdstar, scandbits, leecherslair
             - Removed needless CG http/https duplication - plenty of listed sites self-sign
             - A-Z sites list for readability
             - Cleanup YT search string
             - Copyedits
             - Clean up code (tabs, trailing spaces)
        -    Use consistent naming style
        -    Added Letterboxd, Subscene to icons
        -    Added options for showing icons

2.31    -    Added preliminary check for TSH
        -    Change all SCC links to .org

2.31.1  -    Typo fix

2.32    -    On uncertain pages, display both movie and TV sites

2.33    -    Add year to possible search params
        -    Add rutorrent

2.33.1  -    Change KG to .in

2.33.2  -    Change TSH to .me

2.34    -    Updated AT, TPB
             - Removed HDWing, TVT and CHDBits
             - Added RARBG
             - Re-added reverse match checking to support rarbg

2.35    -    Fixed YouTube icon, add SubtitleSeeker icon
        -    Added FL.ro, bB, BHD, HDS
             - Fixed TL, TehC, HDb, HDVN, AHD, KG
             - Renamed reverseMatch to positiveMatch

2.36    -    Added Wikipedia to icon sites

2.36.1  -    Typo fix

2.37    -    Add PxHD

2.38    -    Fix subtitle seeker
        -    Added CG-c
        -    Added FilmAffinity
        -    Added option to skip http check entirely

2.38.1  -    Typo fix

2.38.2  -    Global replace parameters

2.38.3  -    Typo fix

3.00    -    Clean up some formatting
        -    Add support for new IMDb page format
        -    Update jquery

3.0.1   -    Added Classix

3.0.2   -    Updated documentation/comments

3.0.3   -    Removed GOEM, FY, PS, MT
        -    Added Metacritic, CanIStream.It?, AllMovie, Facebook, Amazon, Cartoon Chaos, MySpleen, Secret Cinema
        -    Fixed Wikipedia icon

3.1     -    Handle HTTP failures less silently

3.1.1   -    Fix KASS

3.1.2   -    Fix TPB, TE, HDT
        -    Add MTV, DVDSeed

3.1.3   -    Add M-T, UHDB, HDC, Blu-ray.com
        -    Fix scenehd, RT

3.1.4   -    Add HDClub

3.2     -    Fix the button on new-style pages

3.2.1   -    Fix AHD

3.3     -    Be less obnoxious about failed calls

3.4     -    Add Netflix icon
        -    Remove a default parameter to satisfy Chrome

3.5     -    Add KZ, NNM, BB-HD, t411, TD, Rutor
        -    Fix HDClub
        -    Fix preferences in Chrome, sort sites properly

3.5.1   -    Remove DHive, Fix AHD

4.0     -    Bring in UI changes courtesy of janot
        -    Add spaceEncode and goToUrl to site options
        -    Add option to show results as links instead of text
        -    Differentiate between missing and logged out
        -    General refactoring

4.1     -    Add RARAT

4.2     -    Fix t411
        -    Use magic .tld domain in @include

4.3     -    Set @connect in metadata block

4.3.1   -    Fix THC

4.3.2   -    Add AR, TtN
        -    Add year and "trailer" to youtube search
        -    Fix M-team

4.3.3   -    Fix BitHQ, PTP-Req, SCC

4.3.4   -    Fix M-team, myspleen, avistaz, eutorrents
        -    Removed KAT

4.3.5   -    Fix IPT, Freshon
        -    Add ExtraTorrent

4.3.6   -    Fix Demonoid, EuTorrents (now CinemaZ)
        -    Fix "Actually search for torrents" option
        -    Add PrivateHD for movies and tv

4.3.7   -    Apply CinemaZ fixes to AvistaZ as well

4.3.8   -    Fix SurrealMoviez and MySpleen, switch to new PTP url

4.3.9   -    Fix criticker, add CN

4.3.10  -    Fix Netflix, MTV

4.3.11  -    Add CHD back

4.3.12  -    Fix typo

4.4     -    Fix BeyondHD
        -    Allow unicode when searching by name

4.4.1   -    Add trakt.tv

4.4.2   -    Added XS, HD-S, PTN, TBD, Blutopia
        -    Removed Freshon, CN, ExT, t411, SCC
        -    Fixed SC, TE, TG, Tik
        -    Add .com for script runners that don't support .tld

4.5     -    (Chameleon)
        -    Added an option to run on ILC request pages
        -    Fixed running on reference pages (new imdb style)
        -    Added a delay of 1 second between loading the same site (by domain) - no more popcorn quota timeouts
        -    Fixed running on search pages

4.5.1   -    Removed (dead): BitHQ, TehC, FSS, ExtraTorrent, Cine-Clasico, and Secret-Cinema
        -    Fixed the hack on goToUrl

4.5.2   -    Fixed filelist.ro, Tik, TD
        -    Added HDHome, HDU, OurBits

4.5.3   -    Fixed TG, TE, HDSpace
        -    Added XS

4.5.4   -    Fixed HDU

4.5.5   -    Fixed BHD

4.6     -    Option to highlight if the movie is missing from PTP

4.7     -    Added option to ignore the movie/tv distinction

4.7.1   -    Fix blutopia, hdchina, indenting

4.7.2   -    Fix SDBits, M-T
        -    Add TTGg

4.7.3   -    Enable on https versions of imdb sites
        -    Add TTG

4.8.0   -    Add FinVip, JoyHD, TO, TP, TS, TVCK
        -    Fix TE, HDH, CZ, Subscene
        -    Remove SubtitleSeeker
        -    Rip out all site-specific code
        -    Fix up minor code smells
        -    Allow config name to be different from site name

4.8.1   -    Add SP

4.8.2   -    Add TMDB

4.8.3   -    Add TGx
        -    Fix TTG, JoyHD, HDH
        -    Remove duplicate TMDB

4.9.0   -    Add support for a user's watchlist

4.10.0  -    Add support for icon sites on the reference view
        -    Add HTTPS for icon sites that support it

4.11.0  -    Fix search_string

4.11.1  -    Remove Blutopia
             Fix IPT

4.11.2  -    Add unogs

4.11.3  -    Fix TVDB

4.11.4  -    Add AB, remove ADC
        -    Fix BHD, Demonoid, TPB, M-T, U2, BTN, BitHD

4.11.5  -    Fix conditional check

4.12    -    Update SDBits, BTN, PTP, TMDB
        -    Apply some correctness changes

4.12.1  -    Add CCT
        -    Update CHD, AB, TTG


#==============================================================================#
#    IMDb Scout Mod:
#==============================================================================#
       
4.12.1-mod1  -   First public release.  New additions, tweaks, bugfixes.

                 What I can remember:
             -   Added: Blu, Retroflix, ACM, PTE, KG Requests, SC Requests.
             -   Tweak: Classix search, and split to Movie/TV.
             -   Tweak: Bunch of 'loggedOutRegex' added.
             -   Fixed: Bunch of icons.
             -   Fixed: TL, TPB.
             -   Fixed: Bug in 'loggedOutRegex' logic.
             -   New feature: Distinct icons on Requests.
             
4.12.1-mod2  -   Removed: Canistream.it
             -   Fixed: Few icons.
             -   Fixed: Search bug if ampersand is in the title
             
4.12.1-mod3  -   Removed: RARAT.
             -   Added: Rarelust & Zooqle.
             -   New feature: Sites are split to public & private (config menu).        

4.12.1-mod4  -   Added: YGG, CG Requests.
             -   Tweak: CG-Cocks & CG Request icons.
             -   Tweak: RuT search, split to TV/Movie.
             -   Fixed: Filter out filled KG Requests.  
             -   New feature: %search_string_orig% (search by the original titles
                              on the movie/tv pages), enabled on RuT and YGG.

4.12.1-mod5  -   Fixed: CG Request. Demonoid typo.

4.12.1-mod6  -   Removed: HDVN, HoundDawgs.
             -   Added: 1337x, ETTV, LimeTor, HDSpain, RlsBB, DB, FF, THR, PTer.
             -   Fixed: TD, Demonoid, RARBG.
             -   Tweak: Bold'ed the titles of config menu sections for better visibility.
             -   Tweak: 'Other titles' sorted in alphabetical order.
             -   Tweak: Added 'loggedOutRegex' to all private & some public sites. 
             -   Fixed: All borked icons are fixed.
             -   Fixed: Bug in 'loggedOutRegex' (false negative if site responds with redirect).
             
4.12.1-mod7  -   Added: BRT.
             -   Tweak: SDBits, U2. 

5.0     -   Fix: @namespace & @name changed to fix updating for plugins.

5.1     -   Tweak: TVV, BB-HD.
        -   Fixed: Invisible icons on dark background JoyHD, Rarelust, CZ, Zooqle, KG.
        -   New feature: The new layout (icons are placed at top). Option to turn it off.
        -   New feature: Option to select background for the new layout.

5.2     -   Tweak: Small tweaks (some preferences will reset to default).
        -   Fixed: Rarelust icon.
        
5.2.1   -   Fixed: Rarelust icon (forgot to update it)
        -   Added: RlsBB-Proxy ('RlsBB' now points to the main domain)
        
        
-------------------------------------------------------*/

//------------------------------------------------------
// A list of all the sites, and the data necessary to
// check IMDb against them.
// Each site is a dictionary with the following attributes:
//
//  - name:
//      The site name, abbreviated
//  - searchUrl:
//      The URL to perform the search against, see below for how
//      to tailor the string to a site
//  - matchRegex:
//      The string which appears if the searchUrl *doesn't* return a result
//  - positiveMatch (optional):
//      Changes the test to return true if the searchUrl *does* return
//      a result that matches matchRegex
//  - TV (optional):
//      If true, it means that this site will only show up on TV pages.
//      By default, sites only show up on movie pages.
//  - both (optional):
//      Means that the site will show up on both movie and TV pages
//  - spaceEncode (optional):
//      Changes the character used to encode spaces in movie titles
//      The default is '+'.
//  - goToUrl (optional):
//      Most of the time the same URLs that are used for checking are
//      the ones that are used to actually get to the movie,
//      but this allows overriding that.
//  - loggedOutRegex (optional):
//      If any text on the page matches this regex, the site is treated
//      as being logged out, rather than mising the movie. This option is
//      not effected by positiveMatch.
//  - configName (optional):
//      Use this to allow changing names without breaking existing users.
//   
// To create a search URL, there are four parameters
// you can use inside the URL:
//  - %tt%:
//      The IMDb id with the tt prefix (e.g. tt0055630)
//  - %nott%:
//      The IMDb id without the tt prefix (e.g. 0055630)
//  - %search_string%:
//      The movie title (e.g. Yojimbo)
//      Depends on your preferences at www.imdb.com/preferences/general
//  - %search_string_orig%:
//      The original movie title (e.g. Yojimbo)
//      Affects only TV/Movie pages (on Watchlist/Search pages it will switch to %search_string%)
//  - %year%:
//      The movie year (e.g. 1961)
// See below for examples
//------------------------------------------------------

var public_sites = [
  {   'name': '1337x',
      'searchUrl': 'https://1337x.unblocker.cc/category-search/%search_string%+%year%/Movies/1/',
      'matchRegex': /No results were returned/},
  {   'name': '1337x',
      'searchUrl': 'https://1337x.unblocker.cc/category-search/%search_string%/TV/1/',
      'matchRegex': /No results were returned/,
      'TV': true},
  {   'name': 'Demonoid',
      'searchUrl': 'http://www.dnoid.pw/files/?query=%tt%',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access|daily site maintenance|page is not available/,
      'matchRegex': /No torrents found/,
      'both': true},
  {   'name': 'ETTV',
      'searchUrl': 'https://www.ettvdl.com/torrents-search.php?search=%search_string%+%year%',
      'matchRegex': /Nothing Found/,
      'both': true},
  {   'name': 'KZ',
      'searchUrl': 'http://kinozal.tv/browse.php?s=%search_string%+%year%&g=0&c=1002&v=0&d=0&w=0&t=0&f=0',
      'matchRegex': 'Нет активных раздач, приносим извинения. Пожалуйста, уточните параметры поиска'},
  {   'name': 'KZ',
      'searchUrl': 'http://kinozal.tv/browse.php?s=%search_string%+%year%&g=0&c=1001&v=0&d=0&w=0&t=0&f=0',
      'matchRegex': 'Нет активных раздач, приносим извинения. Пожалуйста, уточните параметры поиска',
      'TV': true},
  {   'name': 'LimeTor',
      'searchUrl': 'https://limetorrents.unblockit.win/search/movies/%search_string%+%year%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true},
  {   'name': 'NNM',
      'searchUrl': 'https://nnm-club.me/forum/tracker.php?nm=%search_string%+%year%',
      'matchRegex': 'Не найдено',
      'both': true},
  {   'name': 'RARBG',
      'searchUrl': 'https://rarbgweb.org/torrents.php?imdb=%tt%',
      'loggedOutRegex': /something wrong|Please wait|enter the captcha/,
      'matchRegex': '//dyncdn.me/static/20/images/imdb_thumb.gif',
      'positiveMatch': true,
      'both': true},
  {   'name': 'Rarelust',
      'icon': 'https://i.imgur.com/kaaYhsp.png',
      'searchUrl': 'https://rarelust.com/?s=%tt%',
      'matchRegex': 'Nothing Found'},
  {   'name': 'RlsBB',
      'icon': 'https://i.imgur.com/Ve3T1rC.png',
      'searchUrl': 'http://search.rlsbb.ru/Home/GetPost?phrase=%tt%&pindex=1&content=true&type=Simple',
      'goToUrl': 'http://rlsbb.ru/?serach_mode=light&s=%tt%',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access/,
      'matchRegex': /"results":\[\]|Not Found/,
      'both': true},
  {   'name': 'RlsBB-Proxy',
      'icon': 'https://i.imgur.com/Ve3T1rC.png',
      'searchUrl': 'http://search.proxybb.com/Home/GetPost?phrase=%tt%&pindex=1&content=true&type=Simple',
      'goToUrl': 'http://search.proxybb.com/?serach_mode=light&s=%tt%',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access/,
      'matchRegex': /"results":\[\]|Not Found/,
      'both': true},      
  {   'name': 'RuT',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?f=100,101,103,1105,1114,1213,1235,124,1247,1278,1280,1281,1327,1363,1389,1391,140,1453,1457,1467,1468,1469,1475,1543,1576,1577,1666,1670,187,1900,1908,1936,194,1950,2076,208,2082,209,2090,2091,2092,2093,2107,2109,2110,2112,212,2123,2139,2159,2160,2163,2164,2166,2168,2169,2176,2177,2178,2198,2199,22,2200,2201,2220,2221,2258,2323,2339,2343,2365,2380,2459,249,2491,251,2535,2538,2540,294,312,313,33,352,376,4,484,500,505,511,521,539,549,552,56,572,599,656,671,672,7,709,752,821,822,851,863,876,877,893,905,921,93,930,934,941,97,979,98&nm=%search_string_orig%',
      'loggedOutRegex': /Введите ваше имя/,
      'matchRegex': 'Не найдено'},
  {   'name': 'RuT',
      'searchUrl': 'https://rutracker.org/forum/tracker.php?f=103,1102,1105,1114,1120,1214,1242,1248,1278,1280,1281,1288,1301,1327,1359,1363,1389,1391,1453,1459,1460,1463,1467,1468,1469,1475,1493,1498,1531,1537,1539,1574,1690,1803,193,1938,1939,1940,195,2076,2082,2104,2107,2110,2112,2123,2139,2159,2160,2163,2164,2166,2168,2169,2176,2177,2178,2323,235,2380,2412,242,249,2491,251,2535,2538,266,294,315,325,387,489,500,534,552,56,594,599,607,656,671,672,694,704,717,718,721,752,775,781,815,816,819,821,825,842,851,863,864,876,893,915,97,979,98&nm=%search_string_orig%',
      'loggedOutRegex': /Введите ваше имя/,
      'matchRegex': 'Не найдено',
      'TV': true},
  {   'name': 'Rutor',
      'searchUrl': 'http://rutor.info/search/0/0/010/0/%tt%',
      'loggedOutRegex': /Gateway Time-out/,
      'matchRegex': 'Результатов поиска 0',
      'both': true},
  {   'name': 'TPB',
      'searchUrl': 'https://proxyproxy.fi/s/?q=%search_string%&video=on&category=0&page=0&orderby=99',
      'matchRegex': /No hits. Try adding an asterisk in you search phrase./,
      'both': true},
  {   'name': 'TGx',
      'icon': 'https://torrentgalaxy.to/common/favicon/favicon-16x16.png',
      'searchUrl': 'https://torrentgalaxy.org/torrents.php?search=%tt%',
      'matchRegex': /No results found/},
  {   'name': 'YGG',
      'searchUrl': 'https://www2.yggtorrent.si/engine/search?name=%search_string_orig%&category=2145&sub_category=all&do=search',
      'matchRegex': 'Aucun résultat !',
      'both': true},
  {   'name': 'Zooqle',
      'icon': 'https://i.imgur.com/jqKceYP.png',
      'searchUrl': 'https://zooqle.com/search?q=%tt%',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access/,
      'matchRegex': 'Sorry, no torrents match',
      'both': true}   
];

var private_sites = [
  {   'name': 'AB',
      'searchUrl': 'https://animebytes.tv/torrents.php?searchstr=%search_string%&action=advanced&search_type=title&tags=-lolicon+-shotacon+&sort=relevance&way=desc&hentai=0&showhidden=1&anime%5Btv_series%5D=1&anime%5Btv_special%5D=1&anime%5Bmovie%5D=1&anime%5Bova%5D=1&anime%5Bona%5D=1&anime%5Bdvd_special%5D=1&anime%5Bbd_special%5D=1&airing=2',
      'loggedOutRegex': /Forgot your username/,
      'matchRegex': /Translation: No search results/,
      'both': true},
  {   'name': 'ACM',
      'searchUrl': 'https://asiancinema.me/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /<tbody>\n\ {16}<\/tbody>/,
      'both': true},
  {   'name': 'AHD',
      'searchUrl': 'https://awesome-hd.me/torrents.php?id=%tt%',
      'loggedOutRegex': /Keep me logged in./,
      'matchRegex': /Your search did not match anything.|Error 404/,
      'both': true},
  {   'name': 'ANT',
      'icon': 'https://i.imgur.com/hKZo4s2.png',
      'searchUrl': 'https://anthelion.me/torrents.php?searchstr=%search_string%&order_by=time&order_way=desc&group_results=1&action=basic&searchsubmit=1',
      'loggedOutRegex': /You appear to have cookies disabled./,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'AR',
      'searchUrl': 'https://alpharatio.cc/torrents.php?searchstr=%search_string%+%year%&tags_type=1&order_by=time&order_way=desc&filter_cat%5B8%5D=1&filter_cat%5B9%5D=1&filter_cat%5B10%5D=1&filter_cat%5B11%5D=1&filter_cat%5B12%5D=1&filter_cat%5B13%5D=1&filter_cat%5B15%5D=1&action=advanced&searchsubmit=1',
      'loggedOutRegex': /<title>Login :: AlphaRatio/,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'AR',
      'searchUrl': 'https://alpharatio.cc/torrents.php?searchstr=%search_string%&tags_type=1&order_by=time&order_way=desc&filter_cat%5B1%5D=1&filter_cat%5B2%5D=1&filter_cat%5B3%5D=1&filter_cat%5B4%5D=1&filter_cat%5B5%5D=1&filter_cat%5B6%5D=1&filter_cat%5B7%5D=1&action=advanced&searchsubmit=1',
      'loggedOutRegex': /<title>Login :: AlphaRatio/,
      'matchRegex': /Your search did not match anything/,
      'TV': true},
  {   'name': 'AT',
      'icon': 'https://i.imgur.com/ON1FGGO.png',
      'searchUrl': 'https://avistaz.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"/,
      'positiveMatch': true},
  {   'name': 'AT',
      'icon': 'https://i.imgur.com/ON1FGGO.png',
      'searchUrl': 'https://avistaz.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'bB',
      'searchUrl': 'https://baconbits.org/torrents.php?action=basic&filter_cat[9]=1&searchstr=%search_string%+%year%',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Your search was way too l33t/},
  {   'name': 'bB',
      'searchUrl': 'https://baconbits.org/torrents.php?action=basic&filter_cat[8]=1&filter_cat[10]=1&searchstr=%search_string%',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Your search was way too l33t/,
      'TV': true},
  {   'name': 'BB-HD',
      'searchUrl': 'https://bluebird-hd.org/browse.php?search=&incldead=0&cat=0&dsearch=%tt%&stype=or',
      'loggedOutRegex': /Восстановление пароля|Bad Gateway/,      
      'matchRegex': /Nothing found|Ничего не найдено/,
      'both': true},
  {   'name': 'BHD',
      'searchUrl': 'https://beyond-hd.me/torrents/all?search=&doSearch=Search&imdb=%nott%',
      'loggedOutRegex': /FORGET PASSWORD/,
      'matchRegex': /<h5 class="text-bold text-danger">N\/A<\/h5>/,
      'both': true},
  {   'name': 'BitHD',
      'searchUrl': 'https://www.bit-hdtv.com/torrents.php?search=%tt%&options=4',
      'loggedOutRegex': /Forgot your password/,
      'matchRegex': /No match!/},
  {   'name': 'Blu',
      'searchUrl': 'https://blutopia.xyz/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /<tbody>\n\ {20}<\/tbody>/,
      'both': true},
  {   'name': 'BRT',
      'icon': 'https://i.imgur.com/KVaHMKi.png',
      'searchUrl': 'https://brasiltracker.org/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /Recuperar senha/,
      'matchRegex': /retornou nenhum resultado/,
      'both': true},
  {   'name': 'BTN',
      'searchUrl': 'https://broadcasthe.net/torrents.php?imdb=%tt%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /Error 404/,
      'both': true},
  {   'name': 'BTN-Req',
      'icon': 'https://i.imgur.com/yj9qrwa.png',
      'searchUrl':  'https://broadcasthe.net/requests.php?search=%search_string%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /Nothing found/,
      'TV': true},
  {   'name': 'CaCh',
      'searchUrl': 'http://www.cartoonchaos.org/index.php?page=torrents&search=%search_string%&category=0&options=0&active=0',
      'loggedOutRegex': /not authorized to view the Torrents/,
      'matchRegex': />Av.<\/td>\s*<\/tr>\s*<\/table>/,
      'both': true},
  {   'name': 'CCT',
      'searchUrl': 'https://concertos.live/torrents?imdb=%nott%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /ago/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'CG',
      'searchUrl': 'https://cinemageddon.net/browse.php?search=%tt%',
      'loggedOutRegex': 'Not logged in!',
      'matchRegex': /Nothing found!/},
  {   'name': 'CG-c',
      'icon': 'https://i.imgur.com/CdCbVW4.png',
      'searchUrl': 'https://cinemageddon.net/cocks/endoscope.php?what=imdb&q=%tt%',
      'loggedOutRegex': 'Not logged in!',
      'matchRegex': /Nothing found!/},
  {   'name': 'CG-Req',
      'icon': 'https://i.imgur.com/305SsHL.png',
      'searchUrl': 'https://cinemageddon.net/viewrequests.php?search=%tt%&incdesc=1&filter=true',
      'loggedOutRegex': 'Not logged in!',
      'matchRegex': /Nothing found./},
  {   'name': 'CHD',
      'searchUrl': 'https://chdbits.co/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search_area=4&search_mode=0&search=%tt%',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found/},
  {   'name': 'Classix',
      'searchUrl': 'http://classix-unlimited.co.uk/torrents-search.php?search="%search_string%"&parent_cat=Movies',
      'loggedOutRegex': /Sorry this is a private site/,
      'matchRegex': /Database Error/},
  {   'name': 'Classix',
      'searchUrl': 'http://classix-unlimited.co.uk/torrents-search.php?search="%search_string%"&parent_cat=TV',
      'loggedOutRegex': /Sorry this is a private site/,
      'matchRegex': /Database Error/,
      'TV': true},
  {   'name': 'CZ',
      'icon': 'https://i.imgur.com/HYNMAuJ.png',
      'configName': 'ET',
      'searchUrl': 'https://cinemaz.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"/,
      'positiveMatch': true},
  {   'name': 'CZ',
      'icon': 'https://i.imgur.com/HYNMAuJ.png',
      'configName': 'ET',
      'searchUrl': 'https://cinemaz.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"/,
      'positiveMatch': true,
      'TV': true},      
  {   'name': 'DB',
      'searchUrl': 'https://danishbits.org/torrents.php?&pre_type=s_imdb&search=%tt%',
      'loggedOutRegex': /Glemt din kode\?/,
      'matchRegex': /Your search did not match/,
      'both': true},            
  {   'name': 'DVDSeed',
      'searchUrl': 'http://www.dvdseed.eu/browse2.php?search=%tt%&wheresearch=2&incldead=1&polish=0&nuke=0&rodzaj=0',
      'loggedOutRegex': /Nie masz konta/,
      'matchRegex': /Nic tutaj nie ma!/},
  {   'name': 'eThor',
      'searchUrl': 'http://ethor.net/browse.php?stype=b&c23=1&c20=1&c42=1&c5=1&c19=1&c25=1&c6=1&c37=1&c43=1&c7=1&c9=1&advcat=0&incldead=0&includedesc=1&search=%tt%',
      'loggedOutRegex': /Vous avez perdu votre mot de passe/,
      'matchRegex': /Try again with a refined search string./},            
  {   'name': 'FF',
      'searchUrl': 'https://www.funfile.org/browse.php?search=%search_string%',
      'loggedOutRegex': /You need cookies enabled to log in/,
      'matchRegex': /Try again with a refined search/,
      'both': true},     
  {   'name': 'FL',
      'searchUrl': 'https://filelist.io/browse.php?search=%nott%&cat=0&searchin=3&sort=2',
      'loggedOutRegex': /Login on any IP/,
      'matchRegex': /Nu s-a găsit nimic!/,
      'both': true},
  {   'name': 'FinVip',
      'searchUrl': 'https://finvip.org/index.php?page=torrents&search=%tt%&options=1',
      'loggedOutRegex': /Sinulla ei ole oikeuksia sivulle/,
      'matchRegex': /<td colspan="2" align="center"> <\/td>/},
  {   'name': 'HDb',
      'searchUrl': 'https://hdbits.org/browse.php?c3=1&c1=1&c4=1&c2=1&imdb=%tt%',
      'loggedOutRegex': /Make sure your passcode generating/,
      'matchRegex': /Nothing here!/,
      'both': true},
  {   'name': 'HDC',
      'icon': 'https://i.imgur.com/KkZE390.png',
      'searchUrl': 'https://hdchina.org/torrents.php?incldead=0&spstate=0&inclbookmarked=0&boardid=0&seeders=&search=%tt%&search_area=4&search_mode=2',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found! Try again with a refined search string./},
  {   'name': 'HDH',
      'configName': 'HDHome',
      'icon': 'https://i.imgur.com/XUd8EfR.png',
      'searchUrl': 'https://hdhome.org/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found! Try again with a refined search string/},
  {   'name': 'HDME',
      'searchUrl': 'https://hdme.eu/browse.php?blah=2&cat=0&incldead=1&search=%tt%',
      'loggedOutRegex': /You need cookies enabled/,
      'matchRegex': /Try again with a refined search string./},
  {   'name': 'HDME',
      'searchUrl': 'https://hdme.eu/browse.php?search=%search_string%&blah=0&cat=0&incldead=1',
      'loggedOutRegex': /You need cookies enabled/,
      'matchRegex': /Try again with a refined search string./,
      'TV': true},
  {   'name': 'HDS',
      'searchUrl': 'https://hdsky.me/torrents.php?incldead=1&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/},
  {   'name': 'HDS',
      'searchUrl': 'https://hdsky.me/torrents.php?cat402=1&cat403=1&incldead=1&search=%search_string%&search_area=0&search_mode=0',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/,
      'TV': true},
  {   'name': 'HDSpace',
      'icon': 'https://i.imgur.com/hQNih7O.png',
      'searchUrl': 'https://hd-space.org/index.php?page=torrents&active=0&options=2&search=%nott%',
      'loggedOutRegex': /not authorized to view the Torrents!/,
      'matchRegex': /<td colspan="2" align="center"> <\/td>/,
      'both': true},     
  {   'name': 'HDSpain',
      'searchUrl': 'https://www.hd-spain.com/browse.php?%search_string%',
      'loggedOutRegex': /Error 404 No encontrado/,
      'matchRegex': /xxx Change Me xxx/,
      'both': true},            
  {   'name': 'HDT',
      'icon': 'https://hdts.ru/favicon.ico',
      'searchUrl': 'http://hd-torrents.org/torrents.php?active=0&options=2&search=%tt%',
      'loggedOutRegex': /not authorized to view this Torrents/,
      'matchRegex': /No torrents here.../,
      'both': true},
  {   'name': 'HDU',
      'searchUrl': 'https://pt.upxin.net/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/},
  {   'name': 'IPT',
      'searchUrl': 'https://ip.findnemo.net/t?q=%tt%',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access|Forgot your password/,
      'matchRegex': /No Torrents Found!/},
  {   'name': 'IPT',
      'searchUrl': 'https://ip.findnemo.net/t?72=&73=&q=%search_string%&qf=ti',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access|Forgot your password/,
      'matchRegex': /No Torrents Found!/,
      'TV': true},
  {   'name': 'JoyHD',
      'icon': 'https://i.imgur.com/z5kbxta.png',
      'searchUrl': 'https://www.joyhd.net/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /Resend Email Verification/,
      'matchRegex': /Nothing found! Try again with a refined search string/},
  {   'name': 'KG',
      'icon': 'https://i.imgur.com/0JFxPY5.png',
      'searchUrl': 'https://www.karagarga.in/browse.php?search_type=imdb&search=%nott%',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /No torrents found/,
      'both': true},
  {   'name': 'KG-Req',
      'icon': 'https://i.imgur.com/ZQgliKg.png',
      'searchUrl': 'https://karagarga.in/viewrequests.php?search=%nott%&filter=true',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /1&nbsp;-/,
      'positiveMatch': true,
      'both': true},     
  {   'name': 'LM',
      'searchUrl': 'https://www.linkomanija.net/browse.php?incldead=1&search=%tt%&searchindesc=1',
      'loggedOutRegex': /Prisiminti mane/,
      'matchRegex': /Nieko nerasta./},
  {   'name': 'LM',
      'searchUrl': 'https://www.linkomanija.net/browse.php?c30=1&c60=1&c28=1&c62=1&c65=1&c58=1&incldead=0&search="%search_string%"',
      'loggedOutRegex': /Prisiminti mane/,
      'matchRegex': /Nieko nerasta./,
      'TV': true},
  {   'name': 'LM-5z',
      'searchUrl': 'https://www.linkomanija.net/torrents.php?cat=0&search="%search_string%"',
      'loggedOutRegex': /Prisiminti mane/,
      'matchRegex': /Torrentų nėra./,
      'both': true},
  {   'name': 'M-T',
      'searchUrl': 'https://pt.m-team.cc/torrents.php?incldead=1&spstate=0&inclbookmarked=0&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /type="password" name="password"|An error occurred./,
      'matchRegex': /Nothing here!|Try again with a refined search string./,
      'both': true},
  {   'name': 'MS',
      'searchUrl': 'http://www.myspleen.org/browse.php?search=%search_string%&title=0&cat=0',
      'loggedOutRegex': /<title>MySpleen :: Login<\/title>/,
      'matchRegex': /<strong>Nothing found!<\/strong>/,
      'both': true},
  {   'name': 'MTV',
      'searchUrl': 'https://www.morethan.tv/torrents.php?searchstr=%search_string%+%year%&tags_type=1&order_by=time&order_way=desc&group_results=1&filter_cat%5B1%5D=1&action=basic&searchsubmit=1',
      'loggedOutRegex': /<title>Login :: morethan.tv/,
      'matchRegex': /<h2>Your search did not match anything.<\/h2>/},
  {   'name': 'MTV',
      'searchUrl': 'https://www.morethan.tv/torrents.php?searchstr=%search_string%&tags_type=1&order_by=time&order_way=desc&group_results=1&filter_cat%5B2%5D=1&action=basic&searchsubmit=1',
      'loggedOutRegex': /<title>Login :: morethan.tv/,
      'matchRegex': /<h2>Your search did not match anything.<\/h2>/,
      'TV': true},
  {   'name': 'NB',
      'icon': 'https://i.imgur.com/OH7fBY4.png',
      'searchUrl': 'https://norbits.net/browse.php?incldead=1&fullsearch=0&scenerelease=0&imdbsearch=%tt%&imdb_from=0&imdb_to=0&search=',
      'loggedOutRegex': /Ikke innlogget!/,
      'matchRegex': /<h3>Ingenting her!<\/h3>/,
      'both': true},
  {   'name': 'NBL',
      'searchUrl': 'https://nebulance.io/torrents.php?order_by=time&order_way=desc&searchtext=%search_string%&search_type=0&taglist=&tags_type=0',
      'loggedOutRegex': /have cookies disabled./,
      'matchRegex': /Your search did not match anything/,
      'TV': true},
  {   'name': 'OurBits',
      'searchUrl': 'https://ourbits.club/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found! Try again with a refined search string/},
  {   'name': 'PHD',
      'icon': 'https://i.imgur.com/MJJGioU.png',
      'searchUrl': 'https://privatehd.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"/,
      'positiveMatch': true},
  {   'name': 'PHD',
      'icon': 'https://i.imgur.com/MJJGioU.png',
      'searchUrl': 'https://privatehd.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'PTE',
      'icon': 'https://cdn.pte.nu/img/favicon.ico',
      'searchUrl': 'https://pte.nu/apitorrents?tpage=1&cat[]=6&cat[]=7&cat[]=9&search=%search_string%',
      'goToUrl': 'https://pte.nu/torrents?cat=["6","7","9"]&search=%search_string%',
      'loggedOutRegex': /submit">Sign in/,
      'matchRegex': /"count":0/,
      'spaceEncode': ' '},
  {   'name': 'PTE',
      'icon': 'https://cdn.pte.nu/img/favicon.ico',
      'searchUrl': 'https://pte.nu/apitorrents?tpage=1&cat[]=11&cat[]=12&search=%search_string%',
      'goToUrl': 'https://pte.nu/torrents?cat=["11","12"]&search=%search_string%',
      'loggedOutRegex': /submit">Sign in/,
      'matchRegex': /"count":0/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'PTer',
      'searchUrl': 'https://pterclub.com/torrents.php?search=%tt%&search_area=4',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/},
  {   'name': 'PTF',
      'searchUrl': 'https://ptfiles.net/browse.php?search=%search_string%&incldead=0&title=0',
      'loggedOutRegex': /Forgot your password/,
      'matchRegex': /Nothing found!/},
  {   'name': 'PTN',
      'icon': 'https://piratethenet.org/pic/favicon.ico',
      'searchUrl': 'https://piratethenet.org/browseold.php?incldead=1&_by=3&search=%tt%',
      'loggedOutRegex': /You need to have cookies enabled/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'PTP',
      'searchUrl': 'https://passthepopcorn.me/torrents.php?imdb=%tt%',
      'loggedOutRegex': /Keep me logged in/,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'PTP-Req',
      'icon': 'https://i.imgur.com/EFCRrc9.png',
      'searchUrl': 'https://passthepopcorn.me/requests.php?submit=true&search=%tt%',
      'loggedOutRegex': /Keep me logged in/,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'PxHD',
      'icon': 'https://i.imgur.com/OA7JJ6x.png',
      'searchUrl': 'https://pixelhd.me/torrents.php?groupname=&year=&tmdbover=&tmdbunder=&tmdbid=&imdbover=&imdbunder=&imdbid=%tt%&order_by=time&order_way=desc&taglist=&tags_type=1&filterTorrentsButton=Filter+Torrents',
      'loggedOutRegex': /You appear to have javascript disabled/,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'RevTT',
      'searchUrl': 'https://www.revolutiontt.me/browse.php?search=%tt%',
      'loggedOutRegex': /used when you're logged in./,
      'matchRegex': /Nothing found!/},
  {   'name': 'RevTT',
      'searchUrl': 'https://www.revolutiontt.me/browse.php?search=%search_string%&cat=0&incldead=1&titleonly=1',
      'loggedOutRegex': /used when you're logged in./,
      'matchRegex': /Nothing found!/,
      'TV': true},
  {   'name': 'Retroflix',
      'searchUrl': 'https://retroflix.club/torrents1.php?incldead=0&spstate=0&inclbookmarked=0&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /Restrict session to my IP/,
      'matchRegex': /Nothing found!/,
      'both': true},           
  {   'name': 'SC',
      'searchUrl': 'https://secret-cinema.pw/torrents.php?action=advanced&searchsubmit=1&filter_cat=1&cataloguenumber=%tt%&order_by=time&order_way=desc&tags_type=0',
      'loggedOutRegex': /<title>Login :: Secret Cinema/,
      'matchRegex': /Your search did not match anything/,
      'both': true},
  {   'name': 'SC-Req',
      'icon': 'https://i.imgur.com/QHOSsFZ.png',
      'searchUrl': 'https://secret-cinema.pw/requests.php?submit=true&search=%tt%',
      'loggedOutRegex': /<title>Login :: Secret Cinema/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'SDBits',
      'searchUrl': 'https://sdbits.org/browse.php?incldead=1&imdb=%tt%',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /Nothing here!|Nothing found!/},
  {   'name': 'sHD',
      'searchUrl': 'https://scenehd.org/browse.php?search=%tt%',
      'loggedOutRegex': /If you have forgotten your password/,
      'matchRegex': /No torrents found!/},
  {   'name': 'Snahp',
      'searchUrl': 'https://forum.snahp.it/search.php?keywords=%search_string%&amp;sf=titleonly',
      'loggedOutRegex': /register" role/,
      'matchRegex': '/Search found 0 matches/',
      'both': true},
  {   'name': 'SP',
      'searchUrl': 'http://www.scenepalace.info/browse.php?search=%nott%&cat=0&incldead=1',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'TBD',
      'icon': 'https://1.bp.blogspot.com/-F2JeKtPCJYI/VgjpVxwMO4I/AAAAAAAAADg/VyNyp-yW9Ac/s1600/TBD.ico',
      'searchUrl': 'https://www.torrentbd.me/torrent/movies.php?module=torrents&id=%nott%',
      'loggedOutRegex': /<title>TorrentBD : Login</,
      'matchRegex': /This title is not available!/,
      'both': true},
  {   'name': 'TD',
      'searchUrl': 'https://tday.findnemo.net/t?q=%tt%',
      'loggedOutRegex': /Error 522|Checking your browser|security check to access|Forgot Password\?/,
      'matchRegex': /No Torrents Found!/,
      'both': true},
  {   'name': 'TE',
      'searchUrl': 'https://theempire.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},
  {   'name': 'TG',
      'searchUrl': 'https://thegeeks.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},          
  {   'name': 'THR',
      'searchUrl': 'https://www.torrenthr.org/browse.php?search=%search_string%&blah=0&incldead=1',
      'loggedOutRegex': /registraciju morate imati omogućene cookiese/,
      'matchRegex': /Ništa nije pronađeno!/,
      'both': true},      
  {   'name': 'TO',
      'searchUrl': 'https://theoccult.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},
  {   'name': 'TP',
      'searchUrl': 'https://theplace.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /not found on this server|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},
  {   'name': 'TRL',
      'searchUrl': 'https://torrent.ai/lt/torrents?in=2&search=%tt%',
      'loggedOutRegex': /Jums nepavyksta pasijungti/,
      'matchRegex': /nieko nerasta!/,
      'both': true},
  {   'name': 'TRL',
      'searchUrl': 'https://torrent.ai/lt/torrents?search=%search_string%&cats[]=53&cats[]=56&cats[]=79&cats[]=42&cats[]=58&cats[]=59&cats[]=45&cats[]=69&cats[]=70&cats[]=39&cats[]=28',
      'loggedOutRegex': /Jums nepavyksta pasijungti/,
      'matchRegex': /nieko nerasta!/,
      'TV': true},
  {   'name': 'TS',
      'searchUrl': 'https://theshow.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},
  {   'name': 'THC',
      'searchUrl': 'https://horrorcharnel.org/browse.php?search=%nott%&cat=0&incldead=1',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /<h2>Nothing found!<\/h2>/},
  {   'name': 'Tik',
      'searchUrl': 'https://www.cinematik.net/browse.php?cat=0&incldead=1&srchdtls=1&search=%tt%',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'TL',
      'searchUrl': 'https://www.torrentleech.org/torrents/browse/list/categories/8,9,11,12,13,14,15,29/query/%search_string% %year%',
      'goToUrl': 'http://www.torrentleech.org/torrents/browse/index/query/%search_string% %year%/categories/1,8,9,10,11,12,13,14,15,29',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'spaceEncode': ' '},      
  {   'name': 'TL',
      'searchUrl': 'https://www.torrentleech.org/torrents/browse/list/categories/26,27,32/query/%search_string%',
      'goToUrl': 'http://www.torrentleech.org/torrents/browse/index/query/%search_string%/categories/2,26,27,32',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'TTG',
      'searchUrl': 'https://totheglory.im/browse.php?c=M&search_field=imdb%nott%',
      'loggedOutRegex': /Forget your password/,
      'matchRegex': /Didn't match any titles/},
  {   'name': 'TVCK',
      'searchUrl': 'https://www.tvchaosuk.com/browse.php?do=search&search_type=t_name&keywords=%search_string%',
      'loggedOutRegex': /404 Not Found/,
      'matchRegex': /<b>Nothing Found<\/b>/},
  {   'name': 'TVV',
      'searchUrl': 'https://tv-vault.me/torrents.php?action=advanced&imdbid=%tt%&order_by=s3&order_way=desc',
      'loggedOutRegex': /Lost your password\?|Browse quota exceeded/,
      'matchRegex': /Nothing found<\/h2>/,
      'TV': true},
  {   'name': 'U2',
      'searchUrl': 'https://u2.dmhy.org/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search=%tt%&search_area=1&search_mode=0',
      'loggedOutRegex': /<title>Access Point :: U2</,
      'matchRegex': /Nothing found/},
  {   'name': 'UHDB',
      'searchUrl': 'https://uhdbits.org/torrents.php?action=advanced&groupname=%tt%',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Your search did not match anything./},
  {   'name': 'XS',
      'searchUrl': 'https://www.xspeeds.eu/browse.php?do=search&keywords=%search_string%&search_type=t_name&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Forget your password/,
      'matchRegex': /<b>Nothing Found<\/b>/}
];

var sites = public_sites.concat(private_sites);

var icon_sites = [
  {   'name': 'AllMovie',
      'searchUrl': 'https://www.allmovie.com/search/movies/%search_string%',
      'showByDefault': false},
  {   'name': 'Amazon',
      'searchUrl': 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dmovies-tv&field-keywords=%search_string%',
      'showByDefault': false},
  {   'name': 'BCDB',
      'icon': 'https://i.imgur.com/IZwCRkn.png',
      'searchUrl': 'https://www.bcdb.com/bcdb/search.cgi?query=%search_string%'},
  {   'name': 'Blu-ray.com',
      'searchUrl': 'https://www.blu-ray.com/search/?quicksearch=1&quicksearch_country=all&quicksearch_keyword=%search_string%+&section=bluraymovies',
      'showByDefault': false},
  {   'name': 'Criticker',
      'searchUrl': 'https://www.criticker.com/?search=%search_string%&type=films'},
  {   'name': 'Facebook',
      'searchUrl': 'https://www.facebook.com/search/str/%search_string%/keywords_pages',
      'showByDefault': false},
  {   'name': 'FilmAffinity',
      'searchUrl': 'https://www.filmaffinity.com/en/advsearch.php?stext=%search_string%&stype[]=title&fromyear=%year%&toyear=%year%',
      'showByDefault': false},
  {   'name': 'Google',
      'searchUrl': 'https://www.google.com/search?q=%search_string%'},
  {   'name': 'iCheckMovies',
      'searchUrl': 'https://www.icheckmovies.com/search/movies/?query=%tt%'},
  {   'name': 'Letterboxd',
      'searchUrl': 'https://letterboxd.com/imdb/%nott%'},
  {   'name': 'Metacritic',
      'searchUrl': 'https://www.metacritic.com/search/all/%search_string%/results?cats[movie]=1&cats[tv]=1&search_type=advanced&sort=relevancy',
      'showByDefault': false},
  {   'name': 'Netflix',
      'searchUrl': 'https://www.netflix.com/search/%search_string%',
      'showByDefault': false},
  {   'name': 'OpenSubtitles',
      'searchUrl': 'https://www.opensubtitles.org/en/search/imdbid-%tt%'},
  {   'name': 'Rotten Tomatoes',
      'searchUrl': 'https://www.rottentomatoes.com/search/?search=%search_string%'},
  {   'name': 'Subscene',
      'icon': 'https://subscene.com/favicon.ico',
      'searchUrl': 'https://subscene.com/subtitles/title?q=%search_string%'},
  {   'name': 'TMDB',
      'icon': 'https://www.themoviedb.org/assets/2/favicon-16x16-b362d267873ce9c5a39f686a11fe67fec2a72ed25fa8396c11b71aa43c938b11.png',
      'searchUrl': 'https://www.themoviedb.org/search?query=%search_string%'},
  {   'name': 'Trakt.tv',
      'icon': 'https://walter.trakt.tv/hotlink-ok/public/favicon.ico',
      'searchUrl': 'https://trakt.tv/search/imdb?query=%tt%',
      'showByDefault': false},
  {   'name': 'TVDB',
      'icon': 'https://www.thetvdb.com/images/icon.png',
      'searchUrl': 'https://www.thetvdb.com/search?query=%search_string%'},
  {   'name': 'uNoGS',
      'searchUrl': 'https://unogs.com/?q=%tt%',
      'showByDefault': false},
  {   'name': 'Wikipedia',
      'searchUrl': 'https://en.wikipedia.org/w/index.php?search=%search_string%&go=Go'},
  {   'name': 'YouTube.com',
      'searchUrl': 'https://www.youtube.com/results?search_query="%search_string%"+%year%+trailer'}
];

// For internal use (order matters)
var valid_states = [
  'found',
  'missing',
  'logged_out',
  'error'
];

function replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig) {
  var search_url = site['searchUrl'];
  // If an array, do a little bit of recursion
  if ($.isArray(search_url)) {
    var search_array = [];
    $.each(search_url, function(index, url) {
      search_array[index] = replaceSearchUrlParams(url, movie_id, movie_title, movie_title_orig);
    });
    return search_array;
  }
  var space_replace = ('spaceEncode' in site) ? site['spaceEncode'] : '+';
  var search_string = movie_title.trim().replace(/ +\(.*|&/g, '').replace(/\s+/g, space_replace);
  var search_string_orig = movie_title_orig.trim().replace(/ +\(.*|&/g, '').replace(/\s+/g, space_replace);
  var movie_year = document.title.replace(/^(.+) \((.*)([0-9]{4})(.*)$/gi, '$3');
  var s = search_url.replace(/%tt%/g, 'tt' + movie_id)
    .replace(/%nott%/g, movie_id)
    .replace(/%search_string%/g, search_string)
    .replace(/%search_string_orig%/g, search_string_orig)
    .replace(/%year%/g, movie_year);
  return s;
}

function getPageSetting(key) {
  return (onSearchPage ? GM_config.get(key + '_search') : GM_config.get(key + '_movie'));
}

// Small utility function to return a site's icon
function getFavicon(site, hide_on_err) {
    var favicon;
  if (typeof(hide_on_err) === 'undefined') { hide_on_err = false }
  if ('icon' in site) {
    favicon = site['icon'];
  } else {
    var url = new URL(site['searchUrl']);
    favicon = url.origin + '/favicon.ico';
  }
  var img = $('<img />').attr({'style': '-moz-opacity: 0.4; border: 0; vertical-align: text-top',
                               'width': '20',
                               'src': favicon,
                               'title': site['name'],
                               'alt': site['name']});
  if (hide_on_err) { img.attr('onerror', "this.style.display='none';") }
  return img;
}

// Adds search links to an element
// state should always be one of the values defined in valid_states
function addLink(elem, link_text, target, site, state) {
  var link = $('<a />').attr('href', target).attr('target', '_blank');
  if ($.inArray(state, valid_states) < 0) {
    console.log("Unknown state " + state);
  }
  if (getPageSetting('use_mod_icons')) {
    var icon = getFavicon(site);
    icon.css({'border-width': '3px', 'border-style': 'solid', 'border-radius': '2px'});
    if (state == 'error' || state == 'logged_out') {
      icon.css('border-color', 'red');
    } else if (state == 'missing') {
      icon.css('border-color', 'yellow');
    } else {
      icon.css('border-color', 'green');
    }
    link.append(icon);
  } else {
    if (state == 'missing' || state == 'error' || state == 'logged_out') {
      link.append($('<s />').append(link_text));
    } else {
      link.append(link_text);
    }
    if (state == 'error' || state == 'logged_out') {
      link.css('color', 'red');
    }
  }

  if (!onSearchPage) {
    $('#imdbscout_' + state).append(link).append(' ');
  } else {
    var result_box = $(elem).find('td.result_box');
    if (result_box.length > 0) {
      $(result_box).append(link);
    } else {
      $(elem).append($('<td />').append(link).addClass('result_box'));
    }
  }
}

// Performs an ajax request to determine
// whether or not a url should be displayed
function maybeAddLink(elem, link_text, search_url, site) {
  // If the search URL is an array, recurse briefly on the elements.
  if ($.isArray(search_url)) {
    $.each(search_url, function(index, url) {
      maybeAddLink(elem, link_text + '_' + (index + 1).toString(), url, site);
    });
    return;
  }

  var domain = search_url.split('/')[2];
  var now = (new Date())*1;
  var lastLoaded = window.localStorage[domain+'_lastLoaded'];
  if (!lastLoaded) {
    lastLoaded = now - 5000;
  } else {
    lastLoaded = parseInt(lastLoaded);
  }
  if (now-lastLoaded < 1000) {
    window.setTimeout(maybeAddLink.bind(undefined, elem, site['name'], search_url, site), 1000);
    return;
  }
  else
  {
    window.localStorage[domain+'_lastLoaded']=(new Date())*1;
  }

  var target = search_url;
  if (site.goToUrl) {
    target = site.goToUrl;
  }
  var success_match = ('positiveMatch' in site) ? site['positiveMatch'] : false;
  GM_xmlhttpRequest({
    method: 'GET',
    url: search_url,
    onload: function(response) {
      if (response.responseHeaders.indexOf('efresh: 0; url') > -1) {
      addLink(elem, link_text, target, site, 'logged_out');         
      } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, link_text, target, site, 'logged_out');
      } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
          if (getPageSetting('highlight_missing').split(',').includes(site['name'])) {
            if (elem.style) {
            elem.parentNode.style.background = 'rgba(255,104,104,0.7)';
            } else {
              document.querySelector('#imdbscout_missing').style.background = 'rgba(255,104,104,0.7)';
            }
          }
          if (!getPageSetting('hide_missing')) {
          addLink(elem, link_text, target, site, 'missing');
          }
      } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, link_text, target, site, 'logged_out');
      } else {
        addLink(elem, link_text, target, site, 'found');
      }
    },
    onerror: function() {
      addLink(elem, link_text, target, site, 'error');
    },
    onabort: function() {
      addLink(elem, link_text, target, site, 'error');
    }
  });
}

// Run code to create fields and display sites
function perform(elem, movie_id, movie_title, movie_title_orig, is_tv, is_movie) {
  var site_shown = false;
  $.each(sites, function(index, site) {
    if (site['show']) {
      site_shown = true;
      // If we're on a TV page, only show TV links.
      if ((Boolean(site['TV']) == is_tv ||
           Boolean(site['both'])) ||
          (!is_tv && !is_movie) || getPageSetting('ignore_type')) {
        var searchUrl = replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig);
        if (site.goToUrl)
          site.goToUrl = replaceSearchUrlParams({
            'searchUrl': site['goToUrl'],
            'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'
          }, movie_id, movie_title, movie_title_orig);
        if (getPageSetting('call_http_mod')) {
          maybeAddLink(elem, site['name'], searchUrl, site);
        } else {
          addLink(elem, site['name'], searchUrl, site, 'found');
        }
      }
    }
  });
  if (!site_shown) {
    $(elem).append('No sites enabled! "IMDb Scout Mod Preferences" button you can find on Monkeys plugin icon.');
  }
}

//------------------------------------------------------
// Button Code
//------------------------------------------------------

function displayButton() {
  var p = $('<p />').attr('id', 'imdbscout_button');
  p.append($('<button>Load IMDb Scout</button>').click(function() {
    $('#imdbscout_button').remove();
    if (onSearchPage) {
      performSearch();
    } else {
      performPage();
    }
  }));
  if (onSearchPage) {
    $('#sidebar').append(p);
  } else if ($('h1.header:first').length) {
    $('h1.header:first').parent().append(p);
  } else {
    $('#title-overview-widget').parent().append(p);
  }
}

//------------------------------------------------------
// Icons at top bar
//------------------------------------------------------

// Adds a dictionary of icons to the top of the page.
// Unlike the other URLs, they aren't checked to see if the movie exists.
function addIconBar(movie_id, movie_title, movie_title_orig) {
  var iconbar;
  if ($('h1.header:first').length) {
    iconbar = $('h1.header:first').append($('<br/>'));
  } else if ($('.title_wrapper h1').length) {
    iconbar = $('.title_wrapper h1').append($('<br/>'));
  } else if ($('h3[itemprop="name"]').length) {
    iconbar = $('h3[itemprop="name"]').append($('<br/>'));
  } else {
    iconbar = $('#tn15title .title-extra');
  }
  $.each(icon_sites, function(index, site) {
    if (site['show']) {
      var search_url = replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig);
      var image = getFavicon(site);
      var html = $('<span />').append("&nbsp;").attr('style', 'font-size: 11px;').append(
        $('<a />').attr('href', search_url)
          .addClass('iconbar_icon').append(image));
      iconbar.append(html).append();
    }
  });
  //If we have access to the openInTab function, add an Open All feature
  if (GM_openInTab) {
    var aopenall = $('<a />').text('Open All')
        .prepend("&nbsp;")
        .attr('href', 'javascript:;')
        .attr('style', 'font-weight:bold;font-size:11px;font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;');
    aopenall.click(function() {
      $('.iconbar_icon').each(function() {
        GM_openInTab($(this).attr('href'));
      });
    }, false);
    iconbar.append(aopenall);
  }
}

//------------------------------------------------------
// Search page code
//------------------------------------------------------

function performSearch() {
  //Add css for the new table cells we're going to add
  var styles = '.result_box {width: 335px}';
  styles += ' .result_box a { margin-right: 5px; color: #444;} ';
  styles += ' .result_box a:visited { color: #551A8B; }';
  styles += ' #content-2-wide #main, #content-2-wide';
  styles += ' .maindetails_center {margin-left: 5px; width: 1001px;} ';
  GM_addStyle(styles);

  if($('div#main table.results tr.detailed').length !== 0) {
    //Loop through each result row
    $('div#main table.results tr.detailed').each(function() {
      var link = $(this).find('.title>a');
      var is_tv = Boolean($(this).find('.year_type').html()
                          .match('TV Series'));
      var is_movie = Boolean($(this).find('.year_type').html()
                             .match(/\(([0-9]*)\)/));
      var movie_title = link.html();
      var movie_title_orig = movie_title;      
      var movie_id = link.attr('href').match(/tt([0-9]*)\/?$/)[1];

      $(this).find('span.genre a').each(function() {
        if ($(this).html() == 'Adult') {
          $(this).parent().parent().parent()
            .css('background-color', 'red');
        }
      });
      perform($(this), movie_id, movie_title, movie_title_orig, is_tv, is_movie);
    });
  } else {
    // Chameleon code, in a different style
    var titleDivs = document.getElementsByClassName('col-title');
    var compact = true;
    if(titleDivs.length === 0)
    {
      titleDivs=document.getElementsByClassName('lister-item-header');
      compact=false;
    }
    for(var i=0; i<titleDivs.length; i++)
    {
      var t = titleDivs[i];
      var link = t.getElementsByTagName('a')[0];
      var is_tv = link.nextElementSibling.textContent.indexOf('-')!==-1;
      var is_movie = !is_tv;
      var movie_title = link.textContent;
      var movie_title_orig = movie_title;
      var movie_id = link.href.split("/title/tt")[1].split("/")[0];

      var elem = t.parentNode.parentNode;
      if(!compact)
        elem = t.parentNode;
      perform(elem, movie_id, movie_title, movie_title_orig, is_tv, is_movie);
    }
  }
}

//------------------------------------------------------
// Watchlist page code
//------------------------------------------------------

function performWatchlist() {
  //Add css for the new table cells we're going to add
  var styles = '.result_box {width: 335px}';
  styles += ' .result_box a { margin-right: 5px; color: #444;} ';
  styles += ' .result_box a:visited { color: #551A8B; }';
  styles += ' #content-2-wide #main, #content-2-wide';
  styles += ' .maindetails_center {margin-left: 5px; width: 1001px;} ';
  GM_addStyle(styles);
  if($('div .lister-list.mode-detail').children().length !== 0) {
    $('div .lister-list.mode-detail').children().each(function() {
      var link = $(this).find('.lister-item-header>a');
      var is_tv = Boolean($(this).find('.lister-item-details').html()
                          .match('TV Series'));
      var is_movie = Boolean($(this).find('.lister-item-year').html()
                             .match(/^([0-9]*)$/));
      var movie_title = link.html();
      var movie_title_orig = movie_title;
      var movie_id = link.attr('href').match(/tt([0-9]*)\/?.*/)[1];
      perform($(this), movie_id, movie_title, movie_title_orig, is_tv, is_movie);
    });
  }
}

//------------------------------------------------------
// TV/movie page code
//------------------------------------------------------
  
function performPage() {
  var movie_title = $('.title_wrapper>h1').clone().children().remove().end().text();
  if (movie_title === "") {
    movie_title = $('h3[itemprop="name"]').text().trim();
  }
  var movie_title_orig = $('.originalTitle').clone().children().remove().end().text();
  if (movie_title_orig === "") {
    movie_title_orig = movie_title;
  }
  var movie_id = document.URL.match(/\/tt([0-9]+)\//)[1].trim('tt');
  var is_tv_page = Boolean($('title').text().match('TV Series')) ||
      Boolean($('.tv-extra').length);
  var is_movie_page = Boolean($('title').text().match(/.*? \(([0-9]*)\)/));
  //Create area to put links in
  perform(getLinkArea(), movie_id, movie_title, movie_title_orig,
          is_tv_page, is_movie_page);
  addIconBar(movie_id, movie_title, movie_title_orig);
}

//------------------------------------------------------
// Find/create elements
//------------------------------------------------------

function getLinkArea() {
  // If it already exists, just return it
  if ($('#imdbscout_header').length) {
    return $('#imdbscout_header');
  }
  var p = $('<p />').append('<h2>' + GM_config.get('imdbscoutmod_header_text') + '</h2>').attr('id', 'imdbscout_header').css({
    'padding': '0px 20px',
    'font-weight': 'bold'
  });
  var background_color = (GM_config.get('new_layout_dark')) ? '#333333' : '#EEEEEE';
  var p_new = $('<p />').append(GM_config.get('imdbscoutmod_header_text')).attr('id', 'imdbscout_header').css({
    'padding': '4px 11px',
    'font-weight': 'bold',
    'background-color': background_color,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden'
  });
  if (GM_config.get('use_new_layout')) {
  var p = p_new;
  }
  $.each(valid_states, function(i, name) {
    if (GM_config.get('one_line')) {
      p.append($('<span />').attr('id', 'imdbscout_' + name));
    } else {
      var title = $('<span>' + name.replace('_', ' ') + ': </span>').css({
        'textTransform': 'capitalize',
        'min-width': '100px',
        'display': 'inline-block'
      });
      p.append($('<div />').attr('id', 'imdbscout_' + name).append(title));
    }
  });
  if ($('h1.header:first').length) {
    $('h1.header:first').parent().append(p);
  } else if (GM_config.get('use_new_layout')) {
      if ($('.button_panel.navigation_panel').length) {
      $('.button_panel.navigation_panel').after(p);
      } else if ($('.title_block').length) { 
        $('.title_block').after(p);
        }
  } else if ($('#title-overview-widget').length && !GM_config.get('use_new_layout')) {
    $('#title-overview-widget').parent().append(p);
  } else if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
  } else {
    $('#tn15rating').before(p);
  }
  return $('#imdbscout_header');
}

//------------------------------------------------------
// Create the config name
//------------------------------------------------------

function configName(site) {
  if ('configName' in site) {
    return 'show_' + site['configName'] + (site['TV'] ? '_TV' : '');
  } else {
    return 'show_' + site['name'] + (site['TV'] ? '_TV' : '');
  }
}

//------------------------------------------------------
// Code being run (main)
//------------------------------------------------------

// Get everything configured

// Create the non-site dictionary for GM_config
var config_fields = {
  'imdbscoutmod_header_text': {
    'label': 'Header text for torrent sites:',
    'type': 'text',
    'default': ''
  },
  'use_new_layout': {
    'section': 'Movie Page:'.bold(),
    'type': 'checkbox',
    'label': 'Use the new layout?',
    'default': true
  },
  'new_layout_dark': {
    'type': 'checkbox',
    'label': 'Dark background for the new layout?',
    'default': true
  },
  'loadmod_on_start_movie': {
    'type': 'checkbox',
    'label': 'Load on start?',
    'default': true
  },
  'call_http_mod_movie': {
    'type': 'checkbox',
    'label': 'Actually check for torrents?',
    'default': true
  },
  'hide_missing_movie': {
    'type': 'checkbox',
    'label': 'Hide missing links?',
    'default': false
  },
  'use_mod_icons_movie': {
    'type': 'checkbox',
    'label': 'Use icons instead of text?',
    'default': true
  },
  'one_line': {
    'type': 'checkbox',
    'label': 'Show results on one line?',
    'default': true
  },
  'ignore_type_movie': {
    'type': 'checkbox',
    'label': 'Search all sites, ignoring movie/tv distinction?',
    'default': false
  },
  'highlight_missing_movie': {
    'label': 'Highlight when not on:',
    'type': 'text',
    'default': ''
  },
  'loadmod_on_start_search': {
    'section': 'Search Page:'.bold(),
    'type': 'checkbox',
    'label': 'Load on start?',
    'default': false
  },
  'call_http_mod_search': {
    'type': 'checkbox',
    'label': 'Actually check for torrents?',
    'default': false
  },
  'hide_missing_search': {
    'type': 'checkbox',
    'label': 'Hide missing links?',
    'default': false
  },
  'use_mod_icons_search': {
    'type': 'checkbox',
    'label': 'Use icons instead of text?',
    'default': true
  },
  'ignore_type_search': {
    'type': 'checkbox',
    'label': 'Search all sites, ignoring movie/tv distinction?',
    'default': false
  },
  'watchlist_as_search': {
    'type': 'checkbox',
    'label': 'Treat the watchlist a a search page?',
    'default': false
  },
  'highlight_missing_search': {
    'label': 'Highlight when not on:',
    'type': 'text',
    'default': ''
  }
};

// Add each public site to a GM_config dictionary schema
// The GM_config default for checkboxes is false
$.each(public_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Public download sites:'.bold()] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

// Add each private site to a GM_config dictionary schema
// The GM_config default for checkboxes is false
$.each(private_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Private download sites:'.bold()] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

// Icon sites should be shown by default though,
// since they barely use any resources.
$.each(icon_sites, function(index, icon_site) {
  config_fields['show_icon_' + icon_site['name']] = {
    'section': (index == 0) ? ['Other sites:'.bold()] : '',
    'type': 'checkbox',
    'label': ' ' + icon_site['name'],
    'default': ('showByDefault' in icon_site) ?
    icon_site['showByDefault'] : true
  };
});

// Initialize and register GM_config
GM_config.init({
  'id': 'imdb_scout',
  'title': 'IMDb Scout Mod Preferences',
  'fields': config_fields,
  'css': '.section_header { \
            background: white   !important; \
            color:  black       !important; \
            border: 0px         !important; \
            text-align: left    !important;} \
          .field_label { \
            font-weight: normal !important;}',
  'events':
  {
    'open': function() {
      $('#imdb_scout').contents().find('#imdb_scout_section_2').find('.field_label').each(function(index, label) {
        var url = new URL(public_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname)  + '</a>');
        $(label).prepend(getFavicon(public_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_3').find('.field_label').each(function(index, label) {
        var url = new URL(private_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname)  + '</a>');
        $(label).prepend(getFavicon(private_sites[index], true));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_4').find('.field_label').each(function(index, label) {
  $(label).prepend(getFavicon(icon_sites[index], true));
      });
    }
  }
});

GM_registerMenuCommand('IMDb Scout Mod Preferences', function() {GM_config.open()});

// Fetch per-site values from GM_config
$.each(sites, function(index, site) {
  site['show'] = GM_config.get(configName(site));
});

$.each(icon_sites, function(index, icon_site) {
  icon_site['show'] = GM_config.get('show_icon_' + icon_site['name']);
});

// Are we on a search page?
// This variable is camelCased to show it's global
// Hopefully it can be factored out of the global scope in the future
var onSearchPage = Boolean(location.href.match('search')) || Boolean(location.href.match('watchlist'));

$('title').ready(function() {
  if (window.top == window.self) {
    if (!onSearchPage && GM_config.get('loadmod_on_start_movie')) {
      performPage();
    } else if (onSearchPage && GM_config.get('loadmod_on_start_search')) {
      if (Boolean(location.href.match('watchlist')) && GM_config.get('watchlist_as_search')) {
        performWatchlist();
      } else {
        performSearch();
      }
    } else {
      displayButton();
    }
  }
});
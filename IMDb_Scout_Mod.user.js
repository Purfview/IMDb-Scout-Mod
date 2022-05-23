// ==UserScript==
//
// @name         IMDb Scout Mod
// @version      17.0.1
// @namespace    https://github.com/Purfview/IMDb-Scout-Mod
// @description  Auto search for movie/series on torrent, usenet, ddl, subtitles, streaming, predb and other sites. Adds links to IMDb pages from hundreds various sites. Adds movies/series to Radarr/Sonarr. Adds external ratings from Metacritic, Rotten Tomatoes, Letterboxd, Douban, Allocine. Media Server indicators for Plex, Jellyfin, Emby. Dark theme/style for Reference View. Adds/Removes to/from Trakt's watchlist. Removes ads.
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD/AAAcAAA1AABEAABVAAC3AADnAAD2AACFAAClAABlAAB3AADHAACVAADYAABCnXhrAAAD10lEQVRIx73TV4xMURgH8H/OnRmZWe3T7h2sOWaNXu7oJRg9UccuHgTRBatMtAgSg+gJu9q+kFmihcQoD8qLTkK0CIkoy0YJITsRD0rCKTHFrnkSv5e5c88/53znO+fiPwvsvrN038cPNqrG9pJmHkRVnPcpaTlHJY60cfPSpsrzl1LKihrmLvxhCM2i3OHvDx0d+H7e3F6JBv5iZMiJfhFTfPYDMHrMImpwimWWUdSgDQkbno7fFpUPVgh+pHFbZR4SovSctDCM9Hac9IKd9rO8EevtBCkXgY5IMmgquwypP7qqfcp/Tp4KLONDVsWh3RSBB2rnZfit69ocUdqLn2prrRZYM0Jg4JibamKsqe7gfEh5GOAfeYJjVHIPZvil97rcXkMog30byWRwXYRWoxHbzNFHJJpAarO8NdEBBsdCaP3WMJltTmQd4zlnekTq9Z5dgACwAlrpK4BxdV5mvLuspRgMSHbCIFF0iS8MZ5S8oYBYKY7rByC4dDM9uSIUmPOIwxgQBoYeF93auP4qFyPbIVXziWeGTH1EFM57kJo2hqQju6BwIyRf6RmCjdT4JOdiwNgiH/PPD3qoqlsNaXRd+fKtFfECxlZVNVF9SOsgTZEr2TUjJJbyeNX1IZrKIbyGlBABfpQPv2UDrly13LkJXDVhpQ5MhtGwcyF4HKjlU4E8xwB0AvDjd6AGmevZ87EcQRHgcO52e9uNsYELOrAa/Yh81YlmYLQJ5HWyq0+kzQ/DQKEusg6CRI27ryy8nReRS0wsoetkmRwogHSprliCckfEjXG9yAQc74J0WB99vu6DF3i3pMucsXM6tpBbxd2mVJAwXwGogNRBvGRA4jtHKTXkAIwLGCR/mT4Lh75oneQXXP9sAYfGRDCsnw7pX/jRZkU3M44kjw2l5zRIzb4CbZ8dULdL6wbNPZOpK0B6gN1UR1mdoxAaL/GrWiLPL3SEwW9YMTU/d64BtLahAVyucWhj9Mm8ign9IfQaBtd2/GbvCAEBpG5eMcrj2I0ktpKLeaqXQ3Pst42KGIshpdTmQLAeTgFGJ2wvh+tayMOR0n1RZ8B9z13vnOPBnsBq4E1ffgZpPFZHWVpO2cvhjYpOcbBd5TlhpDu5zq9mHGZcVi0y+VFkcFkDdyKJfTt99wEyHSEzDM90KH0nexpwZHJHKYYhjzlwGe0pP/IKfxociaEb7YDbi6KGJY1R2cR76E6NAtXqY4pPH3plLcl8LD7V+cOLUbUWRFZRPTAbVZO3mxK18Xc1ZaAiS8ARJXpZliXAomR94siiiMx8ZBOkXGTlnH0F/9ov1xPtWwEqP9wAAAAASUVORK5CYII=
// @license      MIT
//
// @updateURL    https://greasyfork.org/scripts/407284-imdb-scout-mod/code/IMDb%20Scout%20Mod.meta.js
// @downloadURL  https://greasyfork.org/scripts/407284-imdb-scout-mod/code/IMDb%20Scout%20Mod.user.js
// @homepage     https://github.com/Purfview/IMDb-Scout-Mod
// @supportURL   https://github.com/Purfview/IMDb-Scout-Mod/issues
//
// @compatible   firefox
// @compatible   opera
// @compatible   chrome
// @compatible   safari (it doesn't support the sites with logins)
// @compatible   edge
//
// @require      https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@43fd0fe4de1166f343883511e53546e87840aeaf/gm_config.js
// @require      https://greasyfork.org/scripts/403996-exev/code/ExEv.js?version=808391
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
//
// @include      https://*.imdb.tld/title/tt*
// @include      https://*.imdb.tld/search/title*
// @include      https://*.imdb.tld/user/ur*/watchlist*
// @include      https://*.imdb.tld/list/ls*
//
// @exclude      /title\/tt\d+\/\w(?!(eference))/
// @exclude      /anon/
//
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @grant        GM.registerMenuCommand
// @grant        GM.notification
//
// @run-at       document-start
// @noframes
//
// ==/UserScript==
//
/*=========================  Version History  ==================================

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

5.3     -   Added: Tik-Req, AHD-Req.
        -   Tweak: No icon borders if "Show results on one line" is off.
        -   Fixed: Text color on the new layout.
        -   New feature: Option to change size of the icons.

5.3.1   -   Added: JPTV.
        -   Fixed: ACM icon.

5.4     -   Added: AG, CPS, Deildu (as public because open reg).
        -   Tweak: PTP, DVDSeeds, AHD, PTer.
        -   Fixed: Button code for legacy & new layout.
        -   Fixed: Reference view for the new layout.

5.5     -   Added: PreDB & dozen of the subtitles sites (all of it is set to the 2nd bar).
        -   Fixed: Subscene
        -   New Feature: New 'Subtitles' & 'Other searchable sites' sections (config menu), all set to 2nd bar.
        -   New Feature: Two extra searchable bars for the movies page (Search/Watchlist page shows only 1st bar).
        -   New Feature: Extra bars can be enabled/disabled/swapped at the preferences.
        -   New Feature: Two new 'inSecondSearchBar' and 'inThirdSearchBar' attributes.
                         Subtitles & Other searchable sites are set to 2nd bar.
                         3rd bar is empty, free space for custom configuration.

5.5.1   -   Added: TVV-Req, GT, WC, RareFilm, Titlovi, MoviePosterDB, Ulož, srrDB, xREL.
            Tweak: PreDB, TE, 1337x, LimeTor, HDB, BTN.

5.5.2   -   Added: XDCC, ixIRC.
            Tweak: GT.

5.5.3   -   Added: EUC, 1337x-Proxy, LimeTor-Proxy.

6.0     -   Added: BTN-Title (if someone prefer to search by the titles).
        -   Tweak: PTP, "Your popcorn quota" added to loggedOutRegex.
        -   Tweak: Refinement of code, comments and documentation.
        -   Fixed: "TV Special" is not recognized as "TV" (now it works same as "TV Movie").
        -   Fixed: Broken TV/Movie distinction on the Search/Watchlist pages.
        -   Fixed: Broken Watchlist search if "episode" is present.
        -   Fixed: Broken 'Load' button on Watchlist pages.
        -   Fixed: Broken %year% search on Search/Watchlist pages.
        -   Fixed: Broken %goToUrl% on Search/Watchlist pages when "check for results" is on.
        -   Fixed: Broken %goToUrl% on all pages when "check for results" is off.
        -   Fixed: Broken %year% on TV-series pages.
        -   Removed: 'Treat the watchlist as a search page?' option.
        -   New Feature: Documentaries are treated as TV & Movie.
        -   New Feature: %search_string_orig% works on Search/List/Watchlist pages too.
        -   New Feature: Script supports List pages.

6.0.1   -   Added: TSeeds.

6.0.2   -   Tweak: TSeeds.

6.1     -   Added: DC.
        -   Tweak: BTN-Title, WC, TVV, TVV-Req, ACM, Blu, JPTV, M-T, U2 and ect..
        -   Tweak: Some code optimizations.
        -   New Feature: Connection rate limiting for IMDb's domain.
                         Sites are added more consequent on Search/List pages.
        -   New Feature: Dynamic rates. Search on Title pages are much faster now.
        -   New Feature: Optional 'rateLimit' attribute for sites.

6.1.1   -   Fixed: TL, TSeeds.

6.1.2   -   Added: TL-PL, 3CT, IT.
        -   Tweaks: BTN-Req icon, Tik, Tik-Req.

6.2     -   Added: TVU, Bit-Titan, SU, Tasmanites, BDC, FE, PTMSG.
        -   Tweaks: AHD, AHD-Req, CPS, HDB. Some rate tweaks.
        -   Fixed: Disabling 'Show results on one line?' removed icon borders on Search/List pages.
        -   New feature: Sites are grouped by the result states on Search/List pages (same as on Title pages) (scout_tick).
        -   New feature: Option to highlight preferred sites (brighter border of icon or bold text).
        -   New feature: All icons of request sites ('-Req') are highlighted with a blue border if 'found'.
        -   New feature: 3rd bar supported on Search/List pages.
        -   New feature: Separate space in Config for the custom sites. Replace 'Dummy' placeholder with your custom sites.

6.2.1   -   Added: TDB.
        -   Tweaks: SDBits, TSeeds.

6.3     -   Added: iTS.
        -   Tweaks: TSeeds, Retroflix, Subscene.
        -   New feature: Infotip on icons shows '(TV)' for 'TV' sites.

6.3.1   -   Added: TT, TBA.

6.4     -   Added: T2K, DT.
        -   Tweak: Retroflix, TPB/TPB-Proxy.
        -   Fixed: Broken "Open All" button.
        -   New feature: Links of "icon sites" opens in new tabs.
        -   New feature: Support for POST method with new 'mPOST' attribute.

6.5     -   Added: SpaceTor, AlloCiné, SensCritique, КиноПоиск, MovieMistakes, TrailerAddict,
                   ScreenAnarchy, MovieChat, The Numbers, Lumiere, Box Office Mojo, OFDb.
        -   New feature: "Total sites" stats at the top of config.

7.0     -   Tweaks : TTG, RuTor, TL-PL is renamed to TLPL.
        -   Tweaks : TL search is by IMDb ID; searching by title is done with TL-Title.
        -   Tweaks : Some sites moved to https. Some config tweaks.
        -   Updated: GM_config & jQuery to latest versions.
        -   Fixed  : 'SpaceEncode' not working with 'goToUrl'.
        -   New feature: "Load Settings" button if there is no sites enabled.
        -   New feature: Page auto reloads after Settings close.
        -   New feature: "Selected sites" stats at the top of config.
        -   New feature: Greasemonkey v4 is supported.

7.1     -   Added: AS, DVDCompare, DVDTalk, DVDBeaver.
        -   New feature: Icon sites have hyperlinks in Settings too.

7.2     -   Added: ProStyleX, TorDL, PHD-Req, DonTor, CineCalidad, DVD-Basen, MRQE, Movie-Censorship.
        -   Tweaks: uNoGS, ETTV, CG, TVV-Req.
        -   New feature: Icons of the "icon sites" are same size as other icons.

7.3     -   Added: OmgWtf, DrunkenSlug.
        -   New feature: Streamlined "icon sites" area.

7.4     -   Added: NZBgeek, NZBfinder, NZBGrabit, NZBsu, abNZB, BD25, NZBplanet, NZBnoob,
                   TVmaze, Aither.
        -   New feature: Usenet sites are separated in Settings.

7.5     -   Added: NinjaCentral, MIAtrix, altHUB, SceneNZB, NzbNdx, nzbforyou, GingaDADDY,
                   HDA, FindAnyFilm, xThor.
        -   New feature: 'mPOST' can be formed as json (atm only for icon sites).

7.6     -   Added: DOGnzb, Sharewood, MovieBuff, ONLYscene, HD-F, E-T, SolidTor, MVG, BTDB, BD-film.
        -   Tweaks: eThor, YGG (tv separated), TSeeds, RareFilm, M-T, TVCK.
        -   Fixed: Iframes of the ads are interfering with Settings/GM_Config (script will remove ads).

7.6.1   -   Added: ExiTor, SI, Team-HuSh, G-Free.

7.7     -   New feature: HTTP status above 399 will produce an error (red border).

7.7.1   -   Tweak: BDC.

7.7.2   -   Added: ArenaBG.

7.8     -   Added:  LimeTor (tv), TorDL-Proxy, RMZ.
        -   Tweaks: LimeTor-Proxy, 1337x-Proxy, TPB-Proxy, Demonoid, Classix (icon), TT.
        -   Tweaks: Icons of some blocked sites moved to Imgur.
        -   New feature: Streamlined the layout of Settings.

7.8.1   -   Added: HEVCBay.

7.8.2   -   Added: GloTor, Unlimitz, HDenc, SB, Zamunda.
        -   Removed: SceneNZB, DB.
        -   Tweaked: YGG, PTP, KG, U2.

7.8.3   -   Tweaked: Zooqle.

7.8.4   -   Added: Yubraca.

7.8.5   -   Added: HDtime, HDAtmos, GD, DKBits, nCore, Thor-Island, Videoteka, DesiRel, Telly,
                   WhatsOnMubi, JustWatch.
        -   Removed: eThor.
        -   Tweaked: ArenaBG, TGx, NNM (split to movies/tv), Bit-Titan, updated proxy sites.

7.8.6   -   Added: SpeedApp, CMS, BJS.

7.8.7   -   Added: Milkie (no search), HQS, TSH, DWR, BigBBS, CT, ST, PS, TM, MP, LS, NZBcat.
        -   Removed: DKBits, SU, AG, ONLYscene, SpaceTor, Thor-Island.

7.9     -   New feature: Icons sorting (on button click, beta testing) by Sapphire.
                         For "found" icons only. Behaviour:
                         Highlighted > Others > Requests (in alphabetical order),
                         except order of highlighted is taken from Settings.
            Tweaked: CT, Subs4Free.

7.10    -   Added: BWT.
            Fixed: Watchlist

7.11    -   Merged code from Sapphire:
               New feature: Sites sorting when "Show results on one line" is off.
               New feature: Sorting button on the reference page.
        -   New feature: The request sites on the new line when sorting (Option).
        -   New feature: Added the sites sorting function for the missing.
        -   Fixed: Misalignment of the icons after sorting.
        -   Fixed: Sorting is done by a site's name instead of url.
        -   Fixed: Script was loading on trivia, credits, reviews & ect pages.
        -   Fixed: NBL.
        -   Tweak: Removed redundant @include.

7.12    -   Added: SPD, HT.
        -   Tweaks: Sorting, Ads.

8.0     -   New feature: Automatic alphabetical icons/sites sorting on Title page.
                Only for Public, Private, Usenet sites on the 1st searchable bar.
                "Found" sites are sorted as Highlighted > Others > Requests,
                order of the highlighted is taken from Settings.
                "Missing" sites are sorted only alphabetically, "LoggedOut" & "Error" sites are not sorted.
                Sorting starts when less than 5 sites are left to add.
                Found request sites are split only after all sites are added (Optional).
            Custom sites must be set to the 3rd/2nd search bar or sorting wont be working properly!

8.0.1   -   Tweak: Subscene.
        -   Tweak: Sorting functions moved above "main".

8.0.2   -   Added: WF, CrazyHD, PTM.
        -   Removed: DT.

8.1     -   Added: SkT.
        -   Fixed: AHD.
        -   Removed: OpenSubsOnline
        -   Bugfix: Firefox + GM4 combination wasn't working. New fixed GM_config lib.

8.2     -   Tweak: Updated GM_config link (fix was merged into mainline).

8.3     -   Bugfix: Page reload on Settings close wasn't working on Chrome and Opera.

8.4     -   Bugfix: No vertical spacing between icons.
        -   Bugfix: Non-square icons.

8.4.1   -   Added: BP.

8.5     -   Added: W-v3.
        -   Fixed: BigBBS, RetroFlix, Zamunda, E-T, RARBG, WF, Snahp.
        -   New feature: If rateLimit>1000 then when on List it won't increase.

8.5.1   -   Added: DW, ADC.
        -   Fixed: nCore.

8.6     -   Added: PREcBurns, PREovh, preFYP.
        -   Removed: MTV.
        -   New feature: Other sites are split to Pre databases and Streaming sites.

8.7     -   Tweak: Milkie moved to the icon sites.
        -   Tweak: Some ratelimits added.
        -   Tweak: Small tweak to code for ratelimit to IMDb site on List/Search pages.

8.7.1   -   Added: PD.

8.7.2   -   Added: HDZ.

8.7.3   -   Added: PTTime.

8.7.4   -   Tweaked: RARBG.

8.7.5   -   Added: Reelgood, WtFnzb(no tv), DDLW (for ~German IPs).
        -   Tweaked: OmgWtf(sort by size). DrunkenSlug & NZBfinder movie search by imdb id.

8.8     -   Tweaked: RARBG, Subtitry (RU).
        -   New feature: @noframes (probably proper fix for the bug "fixed" in v7.6).
        -   New feature: Changed how script starts, should be faster now.

8.9     -   Added: Fist of B-List, Criterion, Criterion Channel.
        -   New feature: New "Other sites" category in Settings.

8.9.1   -   Removed: AHD, AHD-Req.

8.9.2   -   Added: MTV.

8.9.3   -   Tweaks: Proxy updates.

9.0     -   Added: DOGnzb (movie search is by IMDb id, tv search by TVDb id) .
        -   New feature:  Support search by TVDb ID and TMDb ID
                         with new search URL parameters: %tvdbid% and %tmdbid%.
                          If matching id is not found then it will be set to "00000000".
                         Some functions are async now.

9.1     -   New feature: All icons from Imgur and the problematic sites are stored in the script as Base64 strings.

9.1.1   -   Fixed: YGG.

9.2     -   Added: FZ, Portugas.
        -   New feature: Ads removal moved to func.

9.2.1   -   Added: HDFans, BTN-TVDb (should be more reliable than by imdb id).

9.3     -   Tweaked: BHD.
        -   New feature: On list/Watchlist page the "Load IMDb Scout" button moved to the top.

9.3.1   -   Added: Simply Scripts, Scripts On Screen, IMSDb.

9.3.2   -   Added: HDAI.
        -   Fixed: PxHD, CG-Req.
        -   Removed: IMSDb.

9.3.3   -   Added: HB.

9.3.4   -   Fixed: BD-film.

9.3.5   -   Added: T (The Myth).

9.3.6   -   Added: VidSrc, DbGDP, FZN, M-TB, ETpl.
        -   Tweak: Ulož moved to the icon sites.

9.4     -   Fixed: A typo in %tmdbid% code.

9.4.1   -   Added: NTELogo, MOJBLiNK, MovieTorrentz.

9.5     -   New feature: Add movies to Radarr (based on dirtycajunrice's code).

9.6     -   New feature: Refined Radarr settings.

9.6.1   -   Added: Anasch.
        -   Tweaked: PTP, M-T, PTer, SDBits, U2, UHDB, TTG.

9.7     -   New feature: Add tv-series to Sonarr.

9.7.1   -   Added: TSP, Assrt (CN), GreekSubs (GR), HosszuPuska (HU), Pipocas (PT) & (BR),
                   Nekur (LV), Titrari (RO), WizdomSubs (IL), Yavka (BG), Zimuku (CN), Feliratok (HU).

9.7.2   -   Added: seleZen, Blu-Req, ACM-Req.

9.8     -   Added: DesiTor, Caps-A-Holic.
        -   New feature: Add/Remove movies/series/episodes to/from Trakt's watchlist.
        -   Note: Current Tampermonkey ver. has bug with notifications, affected: Sonarr/Radarr/Trakt-Watchlist.

9.9     -   Some code syntax and other tweaks.

9.10    -   Fixed: T2K (tv).
        -   Fixed: 'mPOST' wasn't working on the List/Search pages.
        -   Fixed: 'SpaceEncode' wasn't working on 'mPOST'.

9.11    -   New feature: Support for notifications on GM3.
        -   New feature: New section in settings for the special icons/buttons.
        -   Note: Tampermonkey fixed notifications from v4.13.6134.

9.11.1  -   Added: Filmow, WB.

9.12    -   Added: Simkl, MovieLens, ratehouse, Filmsomniac, MyMovieRack.
        -   Added support for Milkie search (needs auth token).

9.12.1  -   Added: Dl4All, 3Dsbs4u, myGully.

9.12.2  -   Added: PB.

9.13    -   Added new: GiroTor, LeechTurks, AveTor, 7torrents, xTorrenty, DevilTor, OxTor, Oasis,
                       TCTG, HD-U, HD-U-Req, Lat-Team, Lat-Team-Req, Immortuos, Immortuos-Req,
                       TorSurf, TorSurf-Req, Ztracker, Ztracker-Req.
        -   Added: DesiRel-Req, Telly-Req, 3CT-Req, Aither-Req, Anasch-Req, AR-Req, AT-Req, BDC-Req,
                   BP-Req, BRT-Req, BTN-IMDb-Req, BWT-Req, Classix-Req, CrazyHD-Req, CZ-Req, ExiTor-Req,
                   FE-Req, FL-Req, FZ-Req, HB-Req, IPT-Req, IT-Req, iTS-Req, JPTV-Req, MP-Req, nCore-Req,
                   NTELogo-Req, Portugas-Req, PS-Req, PTE-IMDb, PTM-Req, Retroflix-Req, Sharewood-Req,
                   SI-Req, SpeedApp-Req, TDB-Req, Team-HuSh-Req, THC-Req, TL-Req, TSH-Req, Yubraca-Req.
        -   Removed: E-T.

9.13.1  -   Added: ARAMovie.

9.13.2  -   Added: Cilipro, EXTTor, NPlus, NPlus-Req, DBy, DBy-Req.

9.14    -   Added: BT4G, SW, WH.
        -   Fixed: SolidTor.
        -   Removed: 7torrents.
        -   New feature: New 'ignore404' attribute.

9.14.1  -   Added: TLFBits, UHDB-Req, ANT-Req, NBL-Req, bB-Req.

9.14.2  -   Added: HDTurk.

9.14.3  -   Added: HDMonkey.

9.15    -   New feature: Check on tmdb/tvdb conversion, if it's not successful = 'error' icon.

9.15.1  -   Added: RPTor, SF, BestCore, HD-F-Req, BHD-Req.
        -   Tweak: HD-F (add search for tv).

9.15.2  -   Tweaks: BTN, BTN-TVDb.

9.16    -   Added: IS, IS-Req.
        -   New feature: 'mPOST' can be formed as json for all sites.
        -   New feature: 'mPOST' can be formed as json array (supports duplicate keys).
        -   New feature: Support for parameters in 'searchUrl' & 'mPOST' at the same time.

9.16.1  -   Added: HDT-Req.

9.16.2  -   Added: ASC.

9.16.3  -   Added: MKO.

9.16.4  -   Added: Hon3yHD, Hon3yHD-Req, TLZ.

10.0    -   New feature: Support for new IMDb layout.
        -   New feature: Support %search_string_orig% on the reference pages.
        -   Removed: Options for the legacy layout.
        -   Checked the icon sites: some fixed & some icons updated.

10.1    -   Updated: HB, MOJBLiNK.
        -   Removed: CineCalidad.
        -   New feature: If response is empty then site is 'logged_out'.
        -   New feature: New attribute 'ignoreEmpty'.
        -   Updated more icons of the icon sites.

10.2    -   Updated: Blu.
        -   Added: NZBSin, Douban, AE, ReinvenTor, 7torrents, CineCalidad, Cpasbien, PornoLab, PornoLab-ID.
        -   New feature: Option to remove "Open all" button.
        -   New feature: Option to change the size of the icons border.
        -   Changed GM_config link to a better host.
        -   Updated some icons of the public sites.

10.3    -   Added: Mubi, Hurtom.
        -   Updated: sHD.
        -   New feature: Support for new IMDb layout on Lists/Search pages.
        -   New feature: Support for reference view on Lists/Search pages (if set in Content Settings).
        -   As everything is so big on the new layout the icon size default is bumped to 32.

10.4    -   Added: HD-Olimpo, HD-Olimpo-Req.
        -   Fixed: Sometimes script wasn't loading/icons disappearing on the new IMDb layout.

10.5    -   New feature: Script removes tracking references from IMDb's URL (eg. ?ref_=tt_sims_tt_i_2).
        -   New feature: Separate size setting for the icons in settings.

10.6    -   New feature: Option to disable icons in settings.

10.7    -   Fixed: Bug in the references removal code.
        -   Refined @include and added @exlude so the script wouldn't activate where it shouldn't.

10.7.1  -   Added: TSP-Req.
        -   Removed: DesiTor.

10.7.2  -   Added: NextEpisode, CineMaterial, FF-Req.
        -   Updated: Aither, SI, HD-U, Lat-Team, Telly, NTELogo, FF, DBy.

10.8    -   Added: InternetArchive, DDU (as icon - rate limit is too high).
        -   New feature: Ads removal for the new layout and new option to disable it.
        -   New feature: Option to force the title pages to open in Reference View without login.
        -   Updated some private sites icons.

11.0    -   Fixed: Trakt authorization was broken if imdb opens in Reference View.
        -   New feature: Dark style for Reference View (optional).
        -   New feature: Compact mode for Reference View (optional).

11.1    -   Fixed: Few conditionals.

11.2    -   Added: TNT (needs auth token).
        -   New feature: Remove ":" and "-" symbols from the titles (possibly, search on some sites can break).
        -   Tweaked the compact mode.

11.3    -   Added: SceneRush, TorParadise, TCh, TTR, MH.
        -   Reverted removal of "-".
        -   Tweaked "Open all" button so it wouldn't open the special buttons.

11.3.1  -   Added: Peeratiko, ArabScene.
        -   Updated: MOJBLiNK.

11.4    -   Added: HDCenter, HDCenter-Req, TorSyndikat, TorSyndikat-Req, BTF, TSC, NRW, NRW-Req, SFP, SFP-Req.
        -   (Hacks: TorSyndikat link -> button. SFP-Req search works but links to the page without search results.)
        -   New feature: German sites moved to the new section in settings - "German sites".

11.5    -   Added: STT, Tubi, TurkTor, Partis.
        -   Fixed: "Hack" in previous patch wasn't working properly.
        -   Tweaked the buttons code.

11.6    -   Added: Darius, EkşiSözlük, BeyazPerde, Sinemalar, Hancinema, Ktuvit, TVRopes, FilmKatalogus, RatinGraph, TürkçeAltyazı (TR).
        -   Fixed: DonTor.

11.6.1  -   Added: Sinefil (TR), InterSinema (TR), Filmux (LT), OK (RU).
        -   Renamed few icon sites.

11.7    -   Added: SoR.
        -   New feature: No icon borders if auto-search is disabled.

12.0    -   Added: Nitro.
        -   New features: External ratings (beta testing on Reference View).
                          Gets raw average rating from Letterboxd even if there is no score.
                          Experimental atm: Rotten Tomatoes & Metacritic.
        -   Some code tweaks.

12.1    -   External ratings enabled for old layout.

12.2    -   New features: Metacritic's "Must-See" badge.
                          Rotten Tomatoes "Rotten" & "Certified Fresh" badge.
                          Separate RT's Audience score.
                          Ratings should be fully functional & enabled on all layouts.
        -   Fixed: Buggy interaction of tracking removal & forced reference, start is ~twice faster.

12.3    -   Added: PJs, PirataDigital, PirataDigital-Req, LegendasTV (BR), OpenSubtitles (BR),
                        PreDB.de, PreDB.org, PreDB.pw.
        -   Fixed: Some ratings can be 0, and 0 was shown when there were no ratings too (now '-').
        -   Removed: Filmsomniac, ADC.
        -   New feature: Douban ratings.
        -   New feature: Option to add your own OMDb API key (www.omdbapi.com/apikey.aspx),
                         it's used to get Rotten Tomatoes ratings.
        -   New feature: Support for search by Douban ID with %doubanid% parameter.

12.4    -   Added: JME, JME-Req, OBNIV (FR).
        -   Removed: PirataDigital (dupe of 'PD').
        -   New feature: Extract info to clipboard with the special button "Copy info to BBCode".

12.5    -   Fixed: Reference View forcing wasn't working from imdb's chart pages.
        -   Fixed: Dirty hack on IDs conversions, now they work properly and more reliably.
        -   Reworked: "Copy info to BBCode" button. Double action, first click activates the button.
                      Grey: standby, Yellow: working, Green(hollow): ready to copy, Red: error.
        -   New feature: Option to disable grey background for the searchable sites bars in Reference View.
        -   Added: Amazon Prime (DE).
        -   Moved OBNIV to the third bar.

12.6    -   Added: TorrentHistory, Wikidata.
        -   New feature: Allocine ratings.

12.7    -   Added: ABN, ABN-Req.
        -   Additional fallback methods to get douban id.

12.8    -   Fixed few ratings bugs.

13.0    -   New feature: Special buttons/indicators for: Plex, Jellyfin.
        -   Fixed: Allocine ratings bug.
        -   Added: Swarmazon.

13.1    -   Fixed: "#" and "&" in titles were breaking Plex.
        -   Fixed: Non-default Jellyfin url wasn't working.
        -   New feature: Indicator for Emby.
        -   New features: If found on Plex/Jellyfin/Emby then link opens actual movie/series.
        -   One more fallback method to get douban id.

13.2    -   Removed: SW.
        -   Added timeouts for the requests to sites.
        -   New features: Debug and Timeout option.

13.3    -   Removed: HEVCBay.
        -   Added: TeRaCoD.
        -   Fixed: Radarr/Sonarr custom profile id wasn't working.
        -   Differential BTN icons.

13.4    -   Fixed: IMDb ratings were not working in France(?).
        -   Fixed: RT ratings were not shown for some new movies.
        -   Fixed: Icons' size inconsistencies.
        -   Improved: "Copy info to BBCode". Gets Runtime & Ratings from imdb if they are not on omdb.

13.4.2  -   Removed: Cilipro.
        -   Added: ADC, OpenSubtitles.com (EN) & (GR).

13.5    -   Fixed: POST links stopped working on the redesigned pages (missing jQuery).

13.5.1  -   Updated: ACM, ACM-Req.

13.6    -   New feature: Add Top Review to the Reference View pages in compact mode.

13.7    -   Added: Haidan, Haidan-Req.
        -   Improved: "13.5" fix.

13.8    -   Added: EMP.
        -   Removed imdb's old layout code.

13.8.1  -   Added: Arrow Films, CBT, CBT-Req, TBL, TMV, iBit.
        -   Removed: Hon3yHD.

13.8.2  -   Added: Uniongang, SunXDCC.
        -   Removed: HDMonkey, Team-HuSh, ixIRC.

13.8.3  -   Added: GPW.

13.8.4  -   Added: TvRoad, Netflix-DVD, Blu-ray (moved to searchable, Other).

13.8.5  -   Added: OshenPT, Itzmx.

13.8.6  -   Added: CRT, CRT-Req.

13.8.7  -   Added: Arsenevich, Hawkmenblues, MovieParadise, DesiTor, TorrentLand, RedBits,
                   oMgWtFtrackr, TheRostrum, Taranis, AySTor, DataScene, Bukvi (BG).
            Updated: Snahp, ST, HDCenter, Yavka (BG), Arrow Films.
            Removed: ReinvenTor, TVU, DesiRel, LeechTurks, SF, Tasmanites, TBA, TCh, LS, NPlus, Oasis, Yubraca.

13.9    -   Removed @grant's - GM.addStyle, GM_info, GM.info.

13.9.1  -   Added: TurkSeed.

13.9.2  -   Added: DVDs ReleaseDates.

13.9.3  -   Added: WoT, TurkTracker, Yubraca.
            Updated: MTV.

13.9.4  -   Added: SC-Desc, TVV-Desc.
            Updated: BTF, TSeeds.

13.9.5  -   Removed: AS, ADC, DBy.

14.0    -   New feature: Chinese sites & French sites sections.
            Added: DBy, HD-O.
            Removed: BTDB.

15.0    -   New feature: Support for the video streaming APIs.
            New search URL parameters: %seriesid%, %seasonid%, %episodeid%.
            Updated: Sites in the Streaming section.
            Added: NetHD, Knaben.

15.0.2  -   Updated: SubDivX (ES).

15.0.3  -   Updated: WoT.

15.1    -   Disabled referer on links.
            Added: STC, STC-Req.

15.1.1  -   Added: Bit-City.

15.1.2  -   Added: Voidtools Everything search engine to Other section [8080 port] ( www.voidtools.com ).
            Removed: CurtStream.

15.2    -   New feature: Support for Radarr v4.
            Fixed: Bug with some sites (if it's mPOST and there are special chars in the name).
            Added: TorrentView, Bluray-Disc (DE).
            Updated AT, CZ and PHD to work in list view.
            Removed: ETTV, 7torrents.

15.2.1  -   Added: TPB-ID, TPB-ID-Proxy.
            Removed: AniSubs.

15.2.2  -   Added: DokuJunkies, SerienJunkies, FilmFans, SerienFans, Tor911, YesAsia,
                   KMDb (KR), KoFiC (KR), KoreanFilm.org (KR), Eiga (JP), HKMDb (CN), Kinenote (JP).
            Removed: OxTor, RlsBB-Proxy.

16.0    -   Updated script to work with new IMDb layout changes.

16.1    -   CSS fix for reference pages (v16.0 regression).
            Added: PuZo, BTDigg.
            Updated: ARAMovie, TBL, TheRostrum, TorParadise, xTorrenty.
            Removed: T2K, TMV.

16.2    -   Fixed: The icons bar wasn't smooth if icons occupied the few lines.
            Fixed: Script was running on anon.to urls with imdb url (anonymous redirect website).
            Possible fix for a rare bug when the script runs before page transfers to a reference page if set on imdb's settings.
            Added other sites/tools: MRI, Voidtools ES: URL protocol.
            Added the icon sites:
            45worlds, ADP, AFI Catalog (US), BAMPFA - CineFiles, BBFC, Common Sense Media, ČSFD (CZ), eBay,
            Eiga chirashi (JP), FFF Movie Posters, Filmový přehled (CZ), Google Scholar, HRC - Movie Posters Collection,
            Heritage Auctions - Movie Posters, Kinorium (RU), LaserDisc Database, Media History Digital Library,
            MyDramaList (Asia), Posteritati, VHS Collector, WorldCat, Yahoo! Japan - Movies (JP).

16.2.1  -   Added: Pahe, Nyaa, Filmboards.
            Updated: Movie-Censorship.

17.0    -   Updated script to work with new IMDb layout changes.
            Removed MutationObserver (probably not needed anymore).
            Added: TV Guide, EpisodeCalendar.

17.0.1  -   Moved: Tubi to the streaming sites.
            Removed: Bit-Titan.

*/
//==============================================================================
//    JSHint directives.
//==============================================================================

/*jshint esversion: 8 */
/*jshint sub:true */
/*jshint multistr: true */
/*jshint scripturl:true*/
/*globals GM, GM_config, $ */
/*jshint shadow:true */
/*jshint -W089 */
/*jshint expr: true */
/*jshint laxbreak: true */

//==============================================================================
//    A list of all the sites.
//==============================================================================
/*
    -= Each site is a dictionary with the following attributes: =-

#  'name':
The site name, abbreviated, unique (the 'TV' atribute internaly adds 'TV' to the name).

#  'icon' (optional):
Icon for the site. If not defined then script looks at site/favicon.ico.
Can be URL or Base64 string (www.base64-image.de).

#  'searchUrl':
The URL to perform the search against, see below for how to tailor the string to a site.

#  'matchRegex':
The string which appears if the searchUrl *doesn't* return a result.

#  'positiveMatch' (optional):
Changes the test to return true if the searchUrl *does* return a result that matches matchRegex.

#  'TV' (optional):
If true, it means that this site will only show up on TV pages.
By default, sites only show up on movie pages.

#  'both' (optional):
Means that the site will show up on both movie and TV pages.

#  'SpaceEncode' (optional):
Changes the character used to encode spaces in movie/TV titles. The default is '+'.

#  'goToUrl' (optional):
Most of the time the same URLs that are used for checking are the ones that
are used to actually get to the movie, but this allows overriding that.

#  'loggedOutRegex' (optional):
If any text on the page matches this regex, the site is treated as being logged out,
rather than mising the movie. This option is not effected by positiveMatch.

#  'ConfigName' (optional):
Use this to allow changing names without breaking existing users.

#  'inSecondSearchBar' & 'inThirdSearchBar' (optional):
Places site at the extra searchable bar. Subtitles and other sites are set to 2nd bar.
3rd bar is empty, space for custom user's configuration. By defaut site goes to the 1st bar.
Extra bars can be enabled/disabled/swapped at the Settings.

#  'rateLimit' (optional):
Connection rate limit in milliseconds. Default is 200.
On the Search/List pages if rateLimit<=1000 then it will be increased by a factor of 4.

#  'mPOST':
HTTP request by POST method. For the sites that doesn't support GET.
Right mouse click won't submit such request.
Atm 'goToUrl' not supported with it.
Examples (3 types of formating):
'cat1=4&cat2=6&filter=%tt%'
'{"cat1":4,"cat2":6,"filter":"all=%tt%&sort=date"}'
'{key:"cat",value:"4"},{key:"cat",value:"6"},{key:"filter",value:"%tt%"}'  // (supports duplicate keys)
Note: only these special chars are allowed in a site name if mPOST: .- ().

#  'ignore404' (optional):
Ignores all 4** HTTP errors.

#  'ignoreEmpty' (optional):
Use it if an empty response means that no results found, otherwise by default it means 'logged_out'.

    -=  Search URL parameters: =-

#  %tt%:
The IMDb id with the tt prefix (e.g. tt0055630).

#  %nott%:
The IMDb id without the tt prefix (e.g. 0055630).

#  %tvdbid%:
The TVDb id.

#  %tmdbid%:
The TMDb id.

#  %doubanid%:
The Douban id.

#  %search_string%:
The movie title (e.g. Yojimbo). Depends on your preferences at www.imdb.com/preferences/general.

#  %search_string_orig%:
The original movie title (e.g. Yôjinbô). Reverts to %search_string% if original title is not set at IMDb.

#  %year%:
The movie year (e.g. 1961).

#  %seriesid%
#  %seasonid%
#  %episodeid%
For the streaming APIs. The IMDb id of series and season/episode numbers.

*/

// Custom sites must be set to the 3rd/2nd search bar.
var custom_sites = [
  {   'name': 'Dummy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADsSURBVHja3NhbFoMwCEVR5j9p+ltr4B7Io0v1L6nslGSZoLntve0IIK/kefWY+hUcZg8o5qIKNNLNgfaMCiBeWKNrjPzGs2GDDJ4xKVALHiLhHIjgcR8D0vAqdSMiAch0auIKlEYPCA7c2ynxDYDxk1bXAF05JJ1XpTR+Z4v5DvgLAfVyyHoXAF4D1ox/GtD/dwog6ZwA2GwtALwH2JLwzwfsr4BtAhovC3KEgTtaG4i2TJtIUbwn2wogP1UAgvUiwMoAOdnhs2kb2H66PlAfVCocr1c40zWa8yrT91aZR+rkA5U+Qdi3ip33ZwAb5/CcnuFpKAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dummy.dummy',
      'loggedOutRegex': /dummy/,
      'matchRegex': /dummy/,
      'inThirdSearchBar': true,
      'both': true}
];

var public_sites = [
  {   'name': '1337x',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURdY2AN9iOP///9Y2AN9iOE1iXmMAAAADdFJOUwAAAPp2xN4AAADRSURBVDjLtdXtDQIhDAbgxmMBDAP4NcDFOoAI+8/kQXsmV6DgRfuL8KTlhT/ARSkYwHNMZZdyafHS8LhFN4SxhZ7Rf4OW0TUxjqCVyHFjG30ffYG07fZi5FgF5v34c7Sr+f+glXgCAEMWluVhF85VBGqclU5UMOCjiQERq5iHKpga8VnHbClRgYatjmwpboETrlXBoCF2caJEEk3ebuDUR6C7SOSXo0QSOaeKNECg4YejowVyHh1pgsDASGcL5DwdDCXePpgPv2/wyjep4o7f4Q1FlOJhL4s2tAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://1337x.to/category-search/%search_string%+%year%/Movies/1/',
      'matchRegex': /No results were returned/},
  {   'name': '1337x',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURdY2AN9iOP///9Y2AN9iOE1iXmMAAAADdFJOUwAAAPp2xN4AAADRSURBVDjLtdXtDQIhDAbgxmMBDAP4NcDFOoAI+8/kQXsmV6DgRfuL8KTlhT/ARSkYwHNMZZdyafHS8LhFN4SxhZ7Rf4OW0TUxjqCVyHFjG30ffYG07fZi5FgF5v34c7Sr+f+glXgCAEMWluVhF85VBGqclU5UMOCjiQERq5iHKpga8VnHbClRgYatjmwpboETrlXBoCF2caJEEk3ebuDUR6C7SOSXo0QSOaeKNECg4YejowVyHh1pgsDASGcL5DwdDCXePpgPv2/wyjep4o7f4Q1FlOJhL4s2tAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://1337x.to/category-search/%search_string%/TV/1/',
      'matchRegex': /No results were returned/,
      'TV': true},
  {   'name': '1337x-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURdY2AN9iOP///9Y2AN9iOE1iXmMAAAADdFJOUwAAAPp2xN4AAADRSURBVDjLtdXtDQIhDAbgxmMBDAP4NcDFOoAI+8/kQXsmV6DgRfuL8KTlhT/ARSkYwHNMZZdyafHS8LhFN4SxhZ7Rf4OW0TUxjqCVyHFjG30ffYG07fZi5FgF5v34c7Sr+f+glXgCAEMWluVhF85VBGqclU5UMOCjiQERq5iHKpga8VnHbClRgYatjmwpboETrlXBoCF2caJEEk3ebuDUR6C7SOSXo0QSOaeKNECg4YejowVyHh1pgsDASGcL5DwdDCXePpgPv2/wyjep4o7f4Q1FlOJhL4s2tAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://1337x.unblockit.day/category-search/%search_string%+%year%/Movies/1/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results were returned/},
  {   'name': '1337x-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURdY2AN9iOP///9Y2AN9iOE1iXmMAAAADdFJOUwAAAPp2xN4AAADRSURBVDjLtdXtDQIhDAbgxmMBDAP4NcDFOoAI+8/kQXsmV6DgRfuL8KTlhT/ARSkYwHNMZZdyafHS8LhFN4SxhZ7Rf4OW0TUxjqCVyHFjG30ffYG07fZi5FgF5v34c7Sr+f+glXgCAEMWluVhF85VBGqclU5UMOCjiQERq5iHKpga8VnHbClRgYatjmwpboETrlXBoCF2caJEEk3ebuDUR6C7SOSXo0QSOaeKNECg4YejowVyHh1pgsDASGcL5DwdDCXePpgPv2/wyjep4o7f4Q1FlOJhL4s2tAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://1337x.unblockit.day/category-search/%search_string%/TV/1/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results were returned/,
      'TV': true},
  {   'name': '3Dsbs4u',
      'icon': 'https://3dsbs4u.com/templates/3dsbs4u/images/favicon.ico',
      'searchUrl': 'https://3dsbs4u.com/index.php?do=search',
      'mPOST': 'do=search&subaction=search&search_start=1&full_search=0&result_from=1&story=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /did not return any results/,
      'both': true},
  {   'name': 'ARAMovie',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAYUExURQAAACQYGNiKGeUsLP///yQYGNiKGeUsLL6GE1wAAAAFdFJOUwAAAAAAwmsGsQAAAXZJREFUSMftlMFtwzAMRZUCvccFskCK3BsI2iADtAi+NYG8gaD1S35Ssp0cOkBDwIlpPolfJO1w+8PCC/hXAO0w4Rje0W2awgGThcLbWe0CuebFrIgT8O3Ax/kzxpiq/HRgKfcYs1xiXw6giY9lEDG1PZDVTwNY7qnVBwACzOsW2AOp0bczEMjNcmwAzWHE/AyI66LUdA95ggcAA0gG1BVICtQdAEvagdbc70BJntQAKDBE6GlLchEGZALqJzuElNJFEEgOjCpIJaOLMECiudrS0S0XQQC2fO2EZIgugoDebpZbu12EApe8jxewZpkiCLT6vD66CAXQetwbtQWuAsgBPOxD4wBFEOhxzc0+WEU7cLEEgJVu5kSy66qSAOOumsAdQ4QA3ABdlOVAF4FrOMFPlqxfBOoQIcDcZeUhItts6IMfAiWupSNgs6F7CjDOBROBpfiAMmnYl44ifCsrVeDrfpQPwHTi7eFkgyMv96T/r+/kC9jaL+xCPZlAjPJIAAAAAElFTkSuQmCC',
      'searchUrl': 'https://aramoviez.shop/wp-admin/admin-ajax.php?action=live_func&keyword=%tt%',
      'goToUrl': 'https://aramoviez.shop/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /جستجو نتیجه ای نداشت/,
      'both': true},
  {   'name': 'ArenaBG',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://arenabg.com/en/torrents/?category=1&text=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Грешка<|Lost password/,
      'matchRegex': /no results found|Не са намерени резултати/},
  {   'name': 'ArenaBG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGQklEQVRYw9VXbWxTVRg+Xbexrfto1/X7u90H2xAY2yCADhgRBwyCKA4YRCSCCCgbUgZC263bNKgDtmFi4IeJJMOQGH+YGDI0SEB/6A8TgzFRE5JpMJhFCVNgG+vje05v29uPjYn8scmTe3d3cp/n/TjPeS9j/6cfWlkhjrJG+FkQPnaOroOEzxBgHxF66L4ZbcwOMMWjI2VMQWS1hLNEcIsQQjtDSgQE7hIuktB19Cz9v5G/zkxE+AFhLImsIwGJ/+dC/ewqCa9+OHIfW0IvGBJRyQmDEjpTIJhCkJ/9RdhD92nTJ+fp87ORuGgjpF2E7knQJUEuJlyaCXpf17RESJGPJBFLJMM+BT7ckoGWpdnYMC8HT1epsH1hDk6uy8K1ViUm5GKSRXinU/OhOHIp4ptHFfDWZ8FpzIdarYZGo0FhYSG0Wm0UBp0Wa+bm4+ruDIS6ZdnoiJbjHmW3fvJu5w0XqXmE/A2GL15SYpY9TxBHSHU6HfR6PQwGQxz4M4tRh+AqFca6UmTCz36ga26ygHZWE+32jljaB3ekw6ovEBFzYqNBh/W1Gry/NQeXXs3EldZMfLIrG22r1KjwmGGxWGA2m2EyGtFan4/7chGRrepjLalqfzYu9UR+/WAais35IuqioiLML9Pi8r5MTJyg/5+U0Bu7v9GpxL6ntHDY7bBarSTGjFPPqMI9EV+Kn9HHZsTIDzGNMBlZ9LyZmqpVInJO/kSlFkMdaWFCjr4UoOf3jzN0r9fA6XTATkLK3WZcb1PGZyHsEcvl264x6nBS7b9rUUKvDafdYdHj27aMGHE/4VQC+mMiRnsU2FJnJBFOOBwOHG7QhLMQjHPNt2MCuLe3y5qPFvtWZIvU86byNhQgJKV7LAIiG+sPY5TuJyQR47RujLLw5f4seNwuuFwuLKiw4k5QkViGy7zxI/U/F5d+ysCy8jyRepPJiCstM0SNQ0TU26xGbaUN1eUWVJWZMLfUiDklBux+Uo17JxX4vCULCyvNqKmwwU0CPB4PXd1YOc+MG4eUcgFD2MkyIhkYlAsYJZRYNSJ6p82Mm13KcKORgNFe8oPGQtFkottNpij2ryzAGK0beFEFj8suoi8uLhbgQlbOM2H4cFpEwG28IjWiOFJlAu5RGRymQhhpK5W4LBh5SxGrP6X6p2A63A6TECCH22HGtaMZuEM9sKrWJCIvKSlBaWmpuHro74HNuQgR14SPzoioAB+d5zIBY4RKh1ZE5XLY8CsRRjLw+7E0NFTrxX7nsNlsotudDjvO7VRhnIR6V2tFA/KoOfnMmTMFvA0GjHPygMjAb8SZGRHQE21CaQuurVKLqPjLL+7NFgIm6OW9m/Lw3CKtQNPjOmyq06N5iRGnt1GjUhMO7stBc50BTYtNFLUHZWVlqKwoR9tqM+62K+Q98E30cBKTTIIFH1+XExWwc7k+bD694UbkRKFT8YhsxRBfQ2sv7FGRgGIhoGGBB+OdCbsgwM7EtuERZhOTTKQMJGCIOtZDdeYCPG4nBvfmxJyvT+YH/fEewNfcepPKVGMVzccF9DcVxRtRO3nOEdYUE0AznBijZH3AT7NDKwpgpxrzetZU2PH1AdqOJ2QWLIdkxyPHFNi+VCd2AO+Buio3/vArEz1gmLtvqiEkzg3/9Kdh2eywo/EXPlZmx+kteYJECJFhoofhq/2ZWF2jF43JHbC02IVPd+QmH0Z+djzVaZguZriEWeBHbwYWz7IIARzc4+dXmHGgQY2+ply8t1mF4No8rKnWwmYxiZ3BPcLtJLEbqTGTZ4JhHGTWyaahalrwd9yRTC+43paOjYuMURE8Oh5l9OiVjIjf82dzSiz4+AVVKnJ+CL089VTEB0g+PiVkYpS8/PzzuWisMYum5CLs0WM37Amzi00I0Fzwy2Fl8jQUTv0AzjPl1AJob4oBMlGElI1xun7/WiYGtubh3Q356H82H2ea8nBpVxZuBxSTDaWc/ELKSWgKEV4xwyVOxvKRXD4Fd6YgjqV9YNrkCULqxQwXeMBHSaoPlIDUcFTzB6b9ASJy+QwnxqipPsvaZSbDiX3sxKTd/lBCaIbjYxThHYrusjjP+fcD3zUBOli4t5O9codLMplH/pXMR3gaJvhxim0si59q/+rTS/b7B/hrRW7+UDuMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://arenabg.com/en/torrents/?category=2&text=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Грешка<|Lost password/,
      'matchRegex': /no results found|Не са намерени резултати/,
      'TV': true},
  {   'name': 'Arsenevich',
      'icon': 'https://scalisto.blogspot.com/favicon.ico',
      'searchUrl': 'https://scalisto.blogspot.com/search?q=%search_string%+%year%',
      'matchRegex': /No hay entradas/},
  {   'name': 'BTDigg',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAGFBMVEXl5eUAAADGxsYfHx96enqoqKhRUVE5OTmYayJ6AAAAZElEQVQoz2MYAGAoAmMpCgoKigVgCAmKYgoJogkFMCQihFgEDcBCihQKhRSKMgGtEkAIAXnimEKC6EIpgYIK6MYPCiFHhFAi3PVAbwsKgUMV7kcGVpiQKFSoiAGoQwgaQ4MCAAB0ISJb0ohTWAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.btdig.com/search?q=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': />0 results found/},
  {   'name': 'BTDigg',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAGFBMVEXl5eUAAADGxsYfHx96enqoqKhRUVE5OTmYayJ6AAAAZElEQVQoz2MYAGAoAmMpCgoKigVgCAmKYgoJogkFMCQihFgEDcBCihQKhRSKMgGtEkAIAXnimEKC6EIpgYIK6MYPCiFHhFAi3PVAbwsKgUMV7kcGVpiQKFSoiAGoQwgaQ4MCAAB0ISJb0ohTWAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.btdig.com/search?q=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': />0 results found/,
      'TV': true},
  {   'name': 'CineCalidad',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAYUExURQAAAP////////////8AAP///wAAAADMuIrsNr4AAAAGdFJOUwAABgwUPEMWCvsAAAEESURBVEjH3ZUxDsMgDEX/xJ4b9Cg9Qo8QqdLPyhRfv0ML2I6JU3Xr35CfPgjMN5ZEWBYo8a2+9gDpCAsUDq0BoOuN0ICtfwgN0MsBZEQMoATAqgEytOhACYF1AIzVAWUgIsqiAbosIntfe0CaHFB8vXm0M3zqmzgCDhAtfVHlaCCyc4UDxOo+HisykAoPRPU5UHVPFrMDgFEPAABARQBYawPoIyAB6hzYrgH4C+D2w0WdXXX6WBefO20Y23I2BqOmDYBt3tVl3vcnwK5zMtrD5OTk+w/gGCBCks8D4CNoxKALsR5Rj8sxmAZpHsVpmOfjIB0ogcXXQy0di/lgzUfzbLif6wXCRdoSVLccNgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.cine-calidad.com/?s=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /in_title/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'CPS',
      'searchUrl': 'https://mycarpathians.net/browse.php?c194=1&c60=1&c10=1&c20=1&c181=1&c183=1&c192=1&c190=1&c70=1&c30=1&c40=1&search=%search_string%',
      'loggedOutRegex': /Nem vagy bejelentkezve!/,
      'matchRegex': /Nincs itt semmi|Nem található/,
      'both': true},
  {   'name': 'Deildu',
      'searchUrl': 'https://deildu.net/browse.php?search=%tt%&cat=0&Lysing=1',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /Ekkert fannst!/,
      'both': true},
  {   'name': 'Demonoid',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADtUExURf///wEBAgcIBQ8QDg8SAxYbAxoaHCAlBygpJykxBysrKzM0MTU/Bjw9Oj8+Qj9HD0FARUJCQUVSCExMTkxXDk5OTlRTV1VmD1hYWFlfHl9fYmFwF2JhZWhoampqamtrbmt7FnBwcXJycnJydHR0dXWJGnd3dnh4eX2SH35+fYKCgoSbH4eHiYmJiIygIo6Nj5KlJJaWl5irJ56wKJ+en6O1LKm6Lqqqqq6/MbPEMrbHN7m5ubrHLLzMO8LPM8PRQMTExcjWRMvLy8zaSNHR0dHfStXiT9fX19roUt3d3ePj4+jo5+3t7fX19f7+/lUbTVQAAAABdFJOUwBA5thmAAAERklEQVQYGe3B7W8cVxXA4d89996Z3bF37bXjN+I4CCErRJWqVuLl//+IBEJUFLWq48SF2KntfbM9uzNzz7mMG6ANUgufEB94Hv73eP5zk6fxaOroTSb1Ff/OZOf2IZVrT+/4tR3uth0/YvK0vh58cu/Xnl7g5dfz8UHT8QOqk/qdf/FU3mwvA490+5ezr253D69qeoeVqqUg3tfLGqgOp+fl6VhYWUGgV1jD+NP5q9vd51ccLqbXzgmWII6O13eTmzfFybYnyLWrcfSeX30aSbB41Ux0WR7sb0RB29Xy8i7H0Tw82fYhFPCH8pZAL5C8ROtGH9++rn61DYZCUWw9W1+/me4/UUIopO2abQj0zHU+OolJnxwO6RCHIxsJOdqr11qEUIjpUksI9FZ+HV30hECRnTgEw4kJ1hBFCV6s0VnoQOg1ca2aTCD89bczj4DwnkcaCz6SND3EFoTezK9MzRKSLjf/wge8/fkr7zBNq2ZwBcIj35lqUqw4un8OBia8p25rK+eUtK3zEAg8KmuFDKRnJ6jDkEY8GL1TU7CkKyog8CirRkA9rYhkHM1n8SVgkDVbNmu7FQkQvpUQLIOBmZEhghloBrKZapdiAgIwObzI3gFZPSYmBuFUzDDIZKPnkwYPePhZ+3Xn932W7JzkTBaRIDGI91hWI6OqpHttj+c4Ts9sPInD4MQJEoOktO7W6w6Ig6qQnNRMVamn62r/3P3iS/dyo2m8iBMfqZf3dUL91ih67WarVGxuV9ooWkw4f7v3jduoX+6udY2X6Nvpjdv+yVAGF4tPsgNyWv7O8OMDbdkoJHw+exHqwWDlVIl+frmy02dDl1PbVXUhjmywcTJZXnyxPVFTbXdnFsQ6ZE0xv2z3Pr4YkXxmFbdWA3DgZi9m8eDo8vfLg0K9gvrjWQhNbl/Pi+2Phnk98oKbDncWmzigbo+mVbCR+6a2stVluxnc1tvJcPGw82JWNlI1mId612MC2S0mlE3VNfHpzhfdmOnhuVyM92bvHk5/HecVDNXANQwp1/Q627SigcYOBr9ZzC43OoSL7qNQ/VRXI6DwDdndjVwuH1zObr7p8rDONOXmelgth+MrBGafPVnf68MAkJjI3I1zHqiBPYwtB01aV6LTemdwAUIv+pu0ECJ5sMa1UmUcDXIzcBnPfWJs8dyPrwChdz540zUefB6u1c03cs74O6fzTSVDc19Z4PrgnJ7wqOwuAj0NdbKHDQMb3rkbHxQ03tVjv/pT6XjkeVTnZTcelZJYuZS2ssPcvDrb8yKW86v98uKP+ednPPL8XbqbSYjClW0570imn+/s5tJLN728fzt3J1/yrcA/pHSmoaje6b54wbVVPVjqopkvUhXbfHzGe47v7MSu7UxcHAaStrVzIvgi6sOKf3J8TzkqSXS09LwXT69brfgexwfKQfR8R63tGj7g+FdlLISeodo1/N9/xd8AcTxaeXm+9mUAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.dnoid.pw/files/?query=%tt%',
      'loggedOutRegex': /Ray ID|security check to access|daily site maintenance|page is not available/,
      'matchRegex': /No torrents found/,
      'both': true},
  {   'name': 'DevilTor',
      'searchUrl': 'https://devil-torrents.pl/szukaj.php?search=%search_string_orig%+%year%&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nic tutaj nie ma/},
  {   'name': 'DevilTor',
      'searchUrl': 'https://devil-torrents.pl/szukaj.php?search=%search_string_orig%&cat=7',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nic tutaj nie ma/,
      'TV': true},
  {   'name': 'Dl4All',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABFUExURRR6niup3UyZtU6btk+btlGdt1OeuFSeuFafuVeguVegulyiu16kvGC/5mGlvWG/5mSnv2TA52Wov2XB52epwMjIyP7+/jXV6UkAAADsSURBVEjHtZbHEoMwDERXCem9eP//U3MgeORuwaATg/chrZAY4IwBR1MsBACYAMwB9iSwawMAeICPYwtAFF0ZlgBDh+lReR1MGbY6VxUINB0AWoCIiAY2WvMcr8+RfiKCkuAThGWkQNLXSffpBS6TSrx+JKQAQMkkiMJoQD24CfAL3JsAgT/2DnsTOwlX9KQ7Kro5/l70EUiArq9GWEqUKwNEem3l1QCY9qoKMNfbioesvgFIH8CKPg9wDlAapmJJ/UDOsjpIAMkADyugj9YBzB7KG0eSvIlY3wPnAOvOknW8rQskUtsgB+vvzw8qG3cYjPoUcAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://dl4all.biz/index.php?do=search&subaction=search&story=%tt%&titleonly=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /yielded no results/,
      'rateLimit': 5000,
      'both': true},
  {   'name': 'DonTor',
      'icon': 'https://dontorrents.app/assets/images/touch-icon-ipad.png',
      'searchUrl': 'https://dontorrent.app/buscar/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /encontrado <b>0</,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'DW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAklQTFRF////i6K5i6K5i6K5i6K5ornQubnQAAAXi6K5i6K5FxcXudDQoqK5i6K5orm5ornQi6K5ornQoqK5oqK5orm5orm5orm5oqK5udDQi6K5ornQornQi4uLornQoqK5ubnQ0Of/i6K5ornQc3OLornQorm5oqK5ornQoqK5ubnQornQornQLi4uorm5ornQ0Of/orm5orm5ubnQubnQLi4uornQorm5orm5ubnQudDQudDQubnQorm5ornQorm5ubnQubnQudDQubnQubnQubnQudDQubnQudDQudDQudDQudDQudDQudDQudDQudDQudDQ0NDnXFxz0NDQc3Nz0NDn0Ofn0NDnudDQ0Ofn0NDQ0NDn0NDnudDQ0NDn0Ofn0NDn0NDn0Ofn0NDn0Ofn0NDn0Ofn0Ofn0Ofn0Ofn0Ofn0Ofnubm5ubm50NDQ0NDQAAD/ABcXABcuAP8AFxcuFy4uFy5FLi4uLi5FLi7/LkVFLkVcLv8uRUVFRUVcRUX/RVxcRVxzRf9FXFxcXFxzXFz/XHNzXHOLXP9cXP9zc3Nzc3OLc3P/c4uLc+dzc/9zi4uLi4uii4v/i6Kii+eLi/+LoqKioqK5oqL/orm5oueiov+iuaK5ubmiubm5ubnQubnnubn/udC5udDQuee5uf+50Lm50LnQ0NDQ0NDn0ND/0OfQ0Ofn0P+559DQ59Dn5+fQ/wAA/y4u/0VF/1xc/3Nz/4uL/6Ki/7m5/9DQ/+cX/+cu/+dF/+dc/+dz/+eL//+L//+i//+5////Evw4+AAAAG90Uk5TAAECBAUFBQYHCAoKCw8PEBERFBUWGBobHR4gISIlKCgoKiorKywuLzAyNDU2NjY2Nzg5Oz09Pj9BQkNERUZHTk9RVltfYmNncHJzdXd5ent7fYWGhoeMjo6Pj5CVmJiZm5ufoKSqrbCztLXL0eztxm/dSQAABr9JREFUWMPNV1d73EQUDaH33nvvvffee++9V4NX2mGUnYzIMAIpCxILWkzREkwcbTAOkGB6CJlfxrmjsrLjhLzwfdwHWztzz5nbNVq06D+RHc6538yThy7edavhh9xlFpT7jtwq+OFPF+r5oN+Lu5A46Wd5sfb8yf8K3/MRqznZ60Y6irpWIki3N7Abz+6/ZfzVVqsfaY2Dk14pSRITX2o3r98CfPHjFq511EDXHGDt0f4Lu20OfwBtD7QiuMWnpdQUSmekc9zC+GNoL/Fr49OGFAxJV/td0jp3IfyJtKNlVDs/n6AIha8pIxdtij+CMqfUCL8pgWXoKn8SqqfMx+9FeB/4blLHbwECyyApowfPI3jRmKH0Iyqb+Qlo5sKWhZJkw1z8bVhRMioMWIAgKYUoosiXQ2MeaOJPBT4StvKgMZ8gsWGB9UHfTNvKlBqAyxsE+Jl6tnRjwLvVcaXZ6WC6qO8+/nQjEGiR4HHbGn8tAihUWNS+Mb2goLC2JMlksyOHKHIwKIFk3tQ0IBI6IIIgomosThxmCWJKT3+v/3P9+g0b7WJCilqQE7uX+OsA8RTWRx1TyUSEkzb8VkqxNkCvBMqbMOaWkQGBwCq6pYTP/rRu7brZX/EEW/6s8LAgtYMB5ViYsJPFn48IeFIHqPPCdPPLD6X8QuaX8N8p0iqwR3SlVh766kpL8LAxMTxQft8OIgrjbMUwa8wfBf4vwiOAmpwysVAeovVk5YEUWirayGNYAu/WjWygCPyxgbh7mrKkFbV0V0iJf/sCfwaF0BcW31OIRET9VjGsNWbjxiJ23aCYcIFPbmiPwngJCG7HEPCEzG1wqEqQCjz/XBMU6UCCqwEZSDDkksXG3A4CjDHNxCQ1sw9wiij41s/ZtT8W+NU05/waDyWJw1NXGfNyGQKXKH3gA+sJxlI2qoWxsaVkgq7gUYB+hJri07YnAWXK4oMgiHRs04SCrd4FK8bGxt4m1oohCLSmbppwByVBxnAeKkPbCKoJctCX3MvN5+PvkwXWhqGkYrUM0BQY0LJXEvQUxVGTKKWE2yfzhItQjo+PrzTLiWE5QuxKKX2lrKL0c0N9UhAkdKRSvpRCCEkORVzyzHwIgk8KE8ZWmwEXtC8si4IJ/bQkmOibmEtCSxLPJwJPrCEDiICiMPYumWX3Cz1PzWRVDAZZLss9Eg7bNefaVATmU2KAm2ykJD2R5ZMlwWSWclHv2BhIj3fNSiL43CDCX4HgI5M1tKTgvUFepXEOAdVHyrBvQzD+nZFYGFIqvxfeCC94nFUEw6zHRcVA2TM+F/wL8x7wS4wRLWr9pQij5gsTGFjgyYKBIfgmcYXnrTLv2BBMIKNUeMtXoORrPHxMs6EleAJpyEKXEiQ8V2RUWB6CusYssQYAJZhnZ0XsWFcplcJVq7D2CgjuJIJcuYxzxqmLMs4RIt8m4RuKHPS5a9/KiWQMCYb9OCnDWXeA4CzkMZ3BJFGof+oawgtk8dvx8Y+RD2ZP9FzbZiaNYDznIspMCu1Li4k03Wi+mNGRgofms/EPqH6tb8SARrczL0vTPp6myNr9iOBRqrFi3OapdD0LQDI/w/lxiSfKFC09UR/0NY20p+xMvABuv8XozR7CxVIbPq9BW5d0JAzF7zDVTbMcRkTiLcTwqvq9oBxGwqvTZAZ7c+1yMSJIKLxQskFkLQHYzgXBDYic01CFAxgr+YxymmuwIC0yYMVBK95avpm2sSY0lbnC5XRGscYSCgcE9U+Hhvpei0Yvx0mXiU6DwcXrVzcJOEo0rhe4g7zdPOd+ELd4p8FAJR3NIQBjWCx0Op0WTf7tRgRn02h2sFFTcJaaHmvGUOV54VOHd5wOAFc07zh4uwyZg62KpMO6FPQGQfh9Jhht8w5zUDUPzr1lvYSCdsAAsSQdpvOpAmCFI4YJ46TQYS2qp8VzCfahri4ZLAcT2UzEeCkdJrM8dO1ju0XvxkPn3zSPLhh4LSyeSYsjAUJl5vDAFgBVgDl907vuSdQLvFUfypZNTanSJLInjy17i95C5rKFbtsnUI+oVmUEY0meMlZ47cRTKRnQbtEd01y48H3/QNvwrNUui3VZloUOWcQcTY9oAMe+Oo/f3BfH9s/Qdui0Clg7zlLltFm7rdIvY4ZlTce/sscWPnqusVMhYq1Wm7E2j9M0RIWH+Oe8yeyXgrlxy19dez9mx0WqcGDrzXYYx3EYheEyJuz3knnuoH/98DuqHDlZgvnCVRiGUZxOlJeFM7fq0/Ow0e0kz4fD+sc9x271x++Op9396uvNK+8br9173i6L/p/yD2G3DxphiJpfAAAAAElFTkSuQmCC',
      'searchUrl': 'https://forum.dirtywarez.com/search/search?keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|You must be logged/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'ETpl',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADDUExURQAAAAAAFQAVAAAVFRUAABUAFRUVABUVFRUVKhUqFRUqKioqFSoqKioqPyo/Kio/Pz8qKj8qPz8/Pz8/VT9VPz9VVVU/P1VVP1VVVVVValVqVVVqampVVWpqVWpqamp/amp/f39qf39/an9/f39/lH+Uf3+UlJR/lJSUf5SUlJSUqpSqqqqUlKqUqqqqlKqqqqqqv7+qqr+qv7+/qr+/v7/Uv9S/v9S/1NTUv9TU1NTp1NTp6enp6enp/+n/6f/p/////+3hzTsAAAMJSURBVFjD1ZdtQxQhEMc5T50ToTUuE1NJpTI0w3Qz167k+3+qBthV94R9OF81L/f4/5gnBo6whFFgg42kPko1HJECULkotaB0dQ/AOFddzAchkgBaVM49VGY+o6sBvAsLtOq434k0gIoKCdViYQVdCcBm5g8C0MoPdCUA3f0dAVWp6CoAxq6C/rYsewg5ANUe8Kssr8urfU/gxUiADP6jWWslEoQcCShs0P9AvTWCsUIdFnRMDtiXAPByY04ZZULJYgxgpp705qvE1jiUUowAwEEV9JfGaK1PsaH2ZIqQBVAZ9N+MOdNaKUzheykShB6A91/rY6WOCiaCFYNzcFAnwO+PHsidnfEAn76gx+j3UDyoD5paUxW3r/UZ+TKAc/7YcB7w+aV+e6vbA1s2LqjW/sEpCsE6ANQ4WwO41CH9j3p4siwATv8uLhoPhFTP3AcYApB39/fnNQCw7lImtgdYA54GvL2sft7ZGACG68/wsnpjfZMQAhkPsPdubuwchby9ZW0ESLQ1xpMAfX1lv1ucPy09SRgkAfzTuTk3lyf4I4YJayRvUKQAc419iyYZTKak09IA+fHoBI+dOhBAemyaDOGdL9p+mBp9AJKsQjitc7GDKegH8PxxziS+F8Dp5ixbtiGAAshkQoZaGjDCXguYJqowEBBXQQdgvUsurIEcgMfuAWNFVq+cKxEwBdoBuHVOp6Nh1jln/Jr0PODR+TNcVcmUHp9+zimvp8mJxOO+0i9LOCHCd8fIJmylZ2ITQxkJy4AItksBtM5CXQcVVprl6rHwWSzrWxNp+5kLirTOJMQQdKigyI51nLiTOlq73EBlHYA/9jkA33oWrsWbofFBae312ERBz7Me8OgCETGRTSJi/kpfwRleWCJ/N/JmloGydc68aVQbCaEAQu523c5PJwqY1KbuBhAxmKgvOt8HbzpuA6/fffHKejEToUOPgN5XGueQl+PM7n8j8aQTUS+GvlRpazZvhDcFH/pKC2EERutFktPn3omx2eJFMQvXFh/7l+dV/53/L8A/4yPVgnco2bcAAAAASUVORK5CYII=',
      'searchUrl': 'https://elitetorrent.pl/torrents.php?search=%search_string_orig%+%year%&category=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Connect Error/,
      'matchRegex': /Nie ma torrentów/,
      'both': true},
  {   'name': 'EXTTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAeUExURT9RtT9RteLl9OPm9Ojq9vDx+fHy+vHz+vT1+////1he4nYAAAABdFJOUwBA5thmAAAAWklEQVRIx2NgYBTEAwQY8MuDVBBUIEgAjCpAVSAWigYC0RRIzkQDE4eqgon4wmEEKZiibAwHWBUgg0GrYEZ6ORyM5NgcDAqQ46K8cFgWIKP1BSEFlNfdhJoHAFcHWeyBUYH6AAAAAElFTkSuQmCC',
      'searchUrl': 'https://ext.to/search/?c=movies&q=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/},
  {   'name': 'EXTTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAeUExURT9RtT9RteLl9OPm9Ojq9vDx+fHy+vHz+vT1+////1he4nYAAAABdFJOUwBA5thmAAAAWklEQVRIx2NgYBTEAwQY8MuDVBBUIEgAjCpAVSAWigYC0RRIzkQDE4eqgon4wmEEKZiibAwHWBUgg0GrYEZ6ORyM5NgcDAqQ46K8cFgWIKP1BSEFlNfdhJoHAFcHWeyBUYH6AAAAAElFTkSuQmCC',
      'searchUrl': 'https://ext.to/search/?c=tv&q=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'TV': true},
  {   'name': 'GloTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEW7iES7iER/fwC7iET///+8ikf+/fzr28fy6Nv7+PT17eLhy63SsIPRrn/MpnPLpG/Dllq9i0r59O738uravZjXuZLInmfBkVO/jk38+vfw5dfu4dDs3szo18Dn1b3m07rcwp7l0bbfyKjdxKPUtInNp3XGm2L17uXv49PjzbHFmmAWc7RYAAAAA3RSTlPmfAI6nT8aAAABCklEQVQ4y52T2W6DMBBFTbjYZgsGwpKwpUmTLv//gR0T1NYQB4n7YsnngIYZhu0c5lrDnB1z3JdxGHstEF/JNmHfS5HYheQTlA+bUL9B51hYhCTXuI1qSw0HTliUtiK9gXAWW78iFcSb6uF6SyFtiQ8ewbjP4X8vhI54qLsQQOcwF84TLzjGnGdCSfcdnbGGfrB4gycBmVIhGTXpUr0DkSnQja90ATiGSh9ITCGYHlHx2MMIuBlCAgj3X8S8hiv4/Q8rPbDeEASa335HLQflZAgNtWDM/ZIRXAoCsnLr/VViih/EhkBt5BmfWFeU6XyaVY5H8q+b93TcKpTBaSjKzb/99tViq8u7uv4/rJwU3R6VapwAAAAASUVORK5CYII=',
      'searchUrl': 'https://glodls.to/search_results.php?search=%search_string%+%year%&cat=1&incldead=1&inclexternal=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/},
  {   'name': 'GloTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEW7iES7iER/fwC7iET///+8ikf+/fzr28fy6Nv7+PT17eLhy63SsIPRrn/MpnPLpG/Dllq9i0r59O738uravZjXuZLInmfBkVO/jk38+vfw5dfu4dDs3szo18Dn1b3m07rcwp7l0bbfyKjdxKPUtInNp3XGm2L17uXv49PjzbHFmmAWc7RYAAAAA3RSTlPmfAI6nT8aAAABCklEQVQ4y52T2W6DMBBFTbjYZgsGwpKwpUmTLv//gR0T1NYQB4n7YsnngIYZhu0c5lrDnB1z3JdxGHstEF/JNmHfS5HYheQTlA+bUL9B51hYhCTXuI1qSw0HTliUtiK9gXAWW78iFcSb6uF6SyFtiQ8ewbjP4X8vhI54qLsQQOcwF84TLzjGnGdCSfcdnbGGfrB4gycBmVIhGTXpUr0DkSnQja90ATiGSh9ITCGYHlHx2MMIuBlCAgj3X8S8hiv4/Q8rPbDeEASa335HLQflZAgNtWDM/ZIRXAoCsnLr/VViih/EhkBt5BmfWFeU6XyaVY5H8q+b93TcKpTBaSjKzb/99tViq8u7uv4/rJwU3R6VapwAAAAASUVORK5CYII=',
      'searchUrl': 'https://glodls.to/search_results.php?search=%search_string%&cat=41&incldead=1&inclexternal=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/,
      'TV': true},
  {   'name': 'Hawkmenblues',
      'icon': 'https://hawkmenblues.net/wp-content/uploads/2020/01/cropped-VHS2-2-32x32.jpg',
      'searchUrl': 'https://hawkmenblues.net/?s=%search_string%+%year%',
      'matchRegex': /Nothing Found/},
  {   'name': 'HDenc',
      'icon': 'https://hdencode.com/wp-content/uploads/2016/03/413.ico',
      'searchUrl': 'https://hdencode.com/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No content available/,
      'both': true},
  {   'name': 'Hurtom',
      'icon': 'https://toloka.to/favicon.png',
      'searchUrl': 'https://toloka.to/tracker.php?prev_sd=0&prev_a=0&prev_my=0&prev_n=0&prev_shc=0&prev_shf=1&prev_sha=1&prev_cg=0&prev_ct=0&prev_at=0&prev_nt=0&prev_de=0&prev_nd=0&prev_tcs=1&prev_shs=0&f[]=117&f[]=84&f[]=42&f[]=124&f[]=125&f[]=129&f[]=219&f[]=118&f[]=16&f[]=32&f[]=19&f[]=44&f[]=127&f[]=55&f[]=94&f[]=144&f[]=190&f[]=70&f[]=192&f[]=193&f[]=195&f[]=194&f[]=196&f[]=197&f[]=225&f[]=21&f[]=131&f[]=226&f[]=227&f[]=228&f[]=229&f[]=230&f[]=136&f[]=96&f[]=173&f[]=139&f[]=174&f[]=140&f[]=120&f[]=66&f[]=137&f[]=138&f[]=237&f[]=72&f[]=45&o=1&s=2&tm=-1&shf=1&sha=1&tcs=1&sns=-1&sds=-1&nm=%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Вхід</,
      'matchRegex': />DL</,
      'positiveMatch': true,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'iBit',
      'icon': 'https://ibit.to/s/img/favicon-16x16.png',
      'searchUrl': 'https://ibit.to/torrent-search/%tt%/all/uploaded_at:desc/1/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /We could not find/,
      'both': true},
  {   'name': 'ilCorSaRoNeRo',
      'searchUrl': 'https://ilcorsaronero.in/argh.php?search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nessun torrent trovato/,
      'both': true},
  {   'name': 'InternetArchive',
      'icon': 'https://archive.org/images/glogo.jpg',
      'searchUrl': 'https://archive.org/details/moviesandfilms?query=%search_string_orig%&and[]=mediatype:%22movies%22&and[]=subject:%22Movie%22',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results matched/},
  {   'name': 'Knaben',
      'searchUrl': 'https://knaben.eu/search/?cat=All&q=%search_string_orig%+%year%&fast=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />Total hits : 0</},
  {   'name': 'Knaben',
      'searchUrl': 'https://knaben.eu/search/?cat=TV&q=%search_string_orig%&fast=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />Total hits : 0</,
      'TV': true},
  {   'name': 'KZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABCFBMVEUAAAARFSY7R4A8SIFAS4JKVIZPWIhdZI5pd6FwfKNwfaNxfqR1gKV5hKZ7haeDjKmJAACKmLiQnLqSnrqVCwiVGBWVobqXHBiYoruZDgmbpbydEAyeEw6fEw6kGRGoGhSoHBSpQDeqHRSsSUCssr+xKh+yVEjANCPCPC3Cyc7Dys7ESTbEys7FQzDFXErHSDfIz9LLgW/Lh3TOj3vSlYDU1c7V1s7V19jYXUPYcFzY2dHY2djZpY7bf2jbqJHcZk7h3c7khmfk4dXomnrqpoHq487q5NPt7d7w587w7N/x6M7x7dry2Lr269D37ND47dD53rr57dH64b767tH77tH87cz9787978+9KzODAAAAAXRSTlMAQObYZgAAAMlJREFUGBlFwdciA1EABNCZ0S4JFldfyeqi96jREgRBiMn//4n15BxQIiiJoERA+82p/qHL1+pc3+jLhQA1252Oc92P96dnAZz5jjn7ZmmjFQhA7VoWaz5fmF5uCQB7u86ir9aPbQ8QCBN2KZ7NLjo3HgBV7VJMDv2nIkCPdhbLk9fO3QoI93Ya73aSrTd7MwAcsdPoz9Vk98fDBCDX07Tuh/lkzwLAomPOXwdryVEgoIb/nQjQWKPQU9huVIoaPF0RQIlgUCAoEb/q0ya7wj1izQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://kinozal.tv/browse.php?s=%search_string%+%year%&g=0&c=1002&v=0&d=0&w=0&t=0&f=0',
      'matchRegex': 'Нет активных раздач, приносим извинения. Пожалуйста, уточните параметры поиска'},
  {   'name': 'KZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABCFBMVEUAAAARFSY7R4A8SIFAS4JKVIZPWIhdZI5pd6FwfKNwfaNxfqR1gKV5hKZ7haeDjKmJAACKmLiQnLqSnrqVCwiVGBWVobqXHBiYoruZDgmbpbydEAyeEw6fEw6kGRGoGhSoHBSpQDeqHRSsSUCssr+xKh+yVEjANCPCPC3Cyc7Dys7ESTbEys7FQzDFXErHSDfIz9LLgW/Lh3TOj3vSlYDU1c7V1s7V19jYXUPYcFzY2dHY2djZpY7bf2jbqJHcZk7h3c7khmfk4dXomnrqpoHq487q5NPt7d7w587w7N/x6M7x7dry2Lr269D37ND47dD53rr57dH64b767tH77tH87cz9787978+9KzODAAAAAXRSTlMAQObYZgAAAMlJREFUGBlFwdciA1EABNCZ0S4JFldfyeqi96jREgRBiMn//4n15BxQIiiJoERA+82p/qHL1+pc3+jLhQA1252Oc92P96dnAZz5jjn7ZmmjFQhA7VoWaz5fmF5uCQB7u86ir9aPbQ8QCBN2KZ7NLjo3HgBV7VJMDv2nIkCPdhbLk9fO3QoI93Ya73aSrTd7MwAcsdPoz9Vk98fDBCDX07Tuh/lkzwLAomPOXwdryVEgoIb/nQjQWKPQU9huVIoaPF0RQIlgUCAoEb/q0ya7wj1izQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://kinozal.tv/browse.php?s=%search_string%+%year%&g=0&c=1001&v=0&d=0&w=0&t=0&f=0',
      'matchRegex': 'Нет активных раздач, приносим извинения. Пожалуйста, уточните параметры поиска',
      'TV': true},
  {   'name': 'LimeTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUOSURBVHjanJdLiF1FEIa/iaMRQ6IILozVulDxgbtk0S34AIkuBDdyIi4CiouIEGEmCxdGCARBRXMxS9GFG8GcbARFCUIEkW4JKkhWGhGsWimBiKCYxBkXXedx753MTNJwuPdwurv+rvrrr+qF1dVVFhYWmBuN/4o/1r9vA+4GuZNAALajnAP7jZafKfwCXGKTY3FTs4xrEB6XEJ9tYnpUkBBCQJDRFEMbvVSsnM05f2GtfUTh9EZbL2zogchTMTWvLadm99hgZ3YY09+yZtrSflqOlsMUvrsaADukkXeX4tJzKaT+lDUaepntwgiOYBhZ87+TyeQIE17fPADhjng8nlhOze7xpqAIAUPX9EX3bRZU1kzbth/bQXse+Gd9Dgi3yvH4eZOa+wBUMwQII5My82tzAQDFQA0wJAipSc+05Os5aHuBC5f1gByXk01Me4SIURA3LiOTMuNwnWOEYf6WVX1NoiVTJuUtJrzSzdwyE/eXJMqeGr8WQQmAYP0zONbcpPn/sRPNs1edM0YhkwhII8tEHp4HIOyUJTmSCBRy3TjUTZKfNsyAYASiexKFgJLceN2jhsQAEVmk4Shw3TSAhpdFuHladczdrf0TfCOdObX5yRmRcB6wVu1K7CLy9BjADhL7AkJr7Uj+xqccZ0JxaBWU9gZ1bo15SgaEbAW1jIhAw35gYdHF5iGEnRAQsf50quIknAVRfZN7wgV/s5lMALTqgWLVMEIC2mAR4Z7qgcQjIoKimJkTbzhL29OpbmoOKCtkBVWXYg+NAhmhICPvOB2tVEYJWxEeXHQC3i/gH4fYp2CuaFCcXqCgBSX3DBEUVVeDEN2cEjEkVKDmp6ksyR2qBzoh2jlNPnovBMzzvSUjZBWgwcg+W1yiY0+86FC7fSyAKaibMHOpFrt9i8+6YWxc5pR9yO8QCkbbS2+NKEABSp0zt+6yY3vngf/GkmojEoWZVKvCJh7v7DDok9BmiLjBWFl0S39anEaqc4kogw/7UwpKmaqAqpE2WK+GUN1vVNePxRo4v+hvZ4HUxbNPMx0YLMEglOohrSwf3BsRCimM819q3GdqBEASoTUD49cOwPdmtq+RBiX36ZQQUmCKVOqkEhUY8mJE2qEaWpCpFBXpilqonFHOVACZr1hiRdEtxTwFpSZgnOGBL61s7z8U0OhfhnmhV4zKmW5vkwzGeQqnt7gHfiTzrWE00rhirUMmrSEJbiiu0aCNkXQwoggiETODzCngbFcLVigcM2eJma1R473XWyO1AkCwEe1m9bgjoHSbrtLyAbA6VMOWE2S+yWSSxIH9Wo2qGzcV75DmNUK1k+06t2VY24fPCmQ+wzg525JdYsIBS/a1imwLRLLHVHRspp4jj0in445AmauJBiSJVTuNP5hwCLi4dlPacIAlOdZI8lJb+pzvZEqg50DvaQUjdm1Hrw8GJBoyucZ+L/sx3lu/K17iHZZkuXGZVbKXF+urmkwxpNOP6KV8IHEgkb3KsmxvUDjUKe9G94JXWZIjUWQhkciezTK6H8x3REP/05DqvYCMFS5w1A5TeBNY2dzFpArckyzL20S5NxL67jjPtF5DNqQeTu66wNbOMOEQxidXdjMaxk00vEgjLxDlLulvCDJzZRkU3kwh20+09iGF94Hfr/xqthaQyGMknkBkF4HbELaDXAt2EeMvFKPYD2S+xDi1nuGrATAeW4FbgBv9/0XgPHAO+PtKNvp/ACd2iMQwv1FJAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|Please turn JavaScript/,
      'searchUrl': 'https://www.limetorrents.info/search/movies/%search_string%+%year%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true},
  {   'name': 'LimeTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUOSURBVHjanJdLiF1FEIa/iaMRQ6IILozVulDxgbtk0S34AIkuBDdyIi4CiouIEGEmCxdGCARBRXMxS9GFG8GcbARFCUIEkW4JKkhWGhGsWimBiKCYxBkXXedx753MTNJwuPdwurv+rvrrr+qF1dVVFhYWmBuN/4o/1r9vA+4GuZNAALajnAP7jZafKfwCXGKTY3FTs4xrEB6XEJ9tYnpUkBBCQJDRFEMbvVSsnM05f2GtfUTh9EZbL2zogchTMTWvLadm99hgZ3YY09+yZtrSflqOlsMUvrsaADukkXeX4tJzKaT+lDUaepntwgiOYBhZ87+TyeQIE17fPADhjng8nlhOze7xpqAIAUPX9EX3bRZU1kzbth/bQXse+Gd9Dgi3yvH4eZOa+wBUMwQII5My82tzAQDFQA0wJAipSc+05Os5aHuBC5f1gByXk01Me4SIURA3LiOTMuNwnWOEYf6WVX1NoiVTJuUtJrzSzdwyE/eXJMqeGr8WQQmAYP0zONbcpPn/sRPNs1edM0YhkwhII8tEHp4HIOyUJTmSCBRy3TjUTZKfNsyAYASiexKFgJLceN2jhsQAEVmk4Shw3TSAhpdFuHladczdrf0TfCOdObX5yRmRcB6wVu1K7CLy9BjADhL7AkJr7Uj+xqccZ0JxaBWU9gZ1bo15SgaEbAW1jIhAw35gYdHF5iGEnRAQsf50quIknAVRfZN7wgV/s5lMALTqgWLVMEIC2mAR4Z7qgcQjIoKimJkTbzhL29OpbmoOKCtkBVWXYg+NAhmhICPvOB2tVEYJWxEeXHQC3i/gH4fYp2CuaFCcXqCgBSX3DBEUVVeDEN2cEjEkVKDmp6ksyR2qBzoh2jlNPnovBMzzvSUjZBWgwcg+W1yiY0+86FC7fSyAKaibMHOpFrt9i8+6YWxc5pR9yO8QCkbbS2+NKEABSp0zt+6yY3vngf/GkmojEoWZVKvCJh7v7DDok9BmiLjBWFl0S39anEaqc4kogw/7UwpKmaqAqpE2WK+GUN1vVNePxRo4v+hvZ4HUxbNPMx0YLMEglOohrSwf3BsRCimM819q3GdqBEASoTUD49cOwPdmtq+RBiX36ZQQUmCKVOqkEhUY8mJE2qEaWpCpFBXpilqonFHOVACZr1hiRdEtxTwFpSZgnOGBL61s7z8U0OhfhnmhV4zKmW5vkwzGeQqnt7gHfiTzrWE00rhirUMmrSEJbiiu0aCNkXQwoggiETODzCngbFcLVigcM2eJma1R473XWyO1AkCwEe1m9bgjoHSbrtLyAbA6VMOWE2S+yWSSxIH9Wo2qGzcV75DmNUK1k+06t2VY24fPCmQ+wzg525JdYsIBS/a1imwLRLLHVHRspp4jj0in445AmauJBiSJVTuNP5hwCLi4dlPacIAlOdZI8lJb+pzvZEqg50DvaQUjdm1Hrw8GJBoyucZ+L/sx3lu/K17iHZZkuXGZVbKXF+urmkwxpNOP6KV8IHEgkb3KsmxvUDjUKe9G94JXWZIjUWQhkciezTK6H8x3REP/05DqvYCMFS5w1A5TeBNY2dzFpArckyzL20S5NxL67jjPtF5DNqQeTu66wNbOMOEQxidXdjMaxk00vEgjLxDlLulvCDJzZRkU3kwh20+09iGF94Hfr/xqthaQyGMknkBkF4HbELaDXAt2EeMvFKPYD2S+xDi1nuGrATAeW4FbgBv9/0XgPHAO+PtKNvp/ACd2iMQwv1FJAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|Please turn JavaScript/,
      'searchUrl': 'https://www.limetorrents.info/search/tv/%search_string%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'LimeTor-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUOSURBVHjanJdLiF1FEIa/iaMRQ6IILozVulDxgbtk0S34AIkuBDdyIi4CiouIEGEmCxdGCARBRXMxS9GFG8GcbARFCUIEkW4JKkhWGhGsWimBiKCYxBkXXedx753MTNJwuPdwurv+rvrrr+qF1dVVFhYWmBuN/4o/1r9vA+4GuZNAALajnAP7jZafKfwCXGKTY3FTs4xrEB6XEJ9tYnpUkBBCQJDRFEMbvVSsnM05f2GtfUTh9EZbL2zogchTMTWvLadm99hgZ3YY09+yZtrSflqOlsMUvrsaADukkXeX4tJzKaT+lDUaepntwgiOYBhZ87+TyeQIE17fPADhjng8nlhOze7xpqAIAUPX9EX3bRZU1kzbth/bQXse+Gd9Dgi3yvH4eZOa+wBUMwQII5My82tzAQDFQA0wJAipSc+05Os5aHuBC5f1gByXk01Me4SIURA3LiOTMuNwnWOEYf6WVX1NoiVTJuUtJrzSzdwyE/eXJMqeGr8WQQmAYP0zONbcpPn/sRPNs1edM0YhkwhII8tEHp4HIOyUJTmSCBRy3TjUTZKfNsyAYASiexKFgJLceN2jhsQAEVmk4Shw3TSAhpdFuHladczdrf0TfCOdObX5yRmRcB6wVu1K7CLy9BjADhL7AkJr7Uj+xqccZ0JxaBWU9gZ1bo15SgaEbAW1jIhAw35gYdHF5iGEnRAQsf50quIknAVRfZN7wgV/s5lMALTqgWLVMEIC2mAR4Z7qgcQjIoKimJkTbzhL29OpbmoOKCtkBVWXYg+NAhmhICPvOB2tVEYJWxEeXHQC3i/gH4fYp2CuaFCcXqCgBSX3DBEUVVeDEN2cEjEkVKDmp6ksyR2qBzoh2jlNPnovBMzzvSUjZBWgwcg+W1yiY0+86FC7fSyAKaibMHOpFrt9i8+6YWxc5pR9yO8QCkbbS2+NKEABSp0zt+6yY3vngf/GkmojEoWZVKvCJh7v7DDok9BmiLjBWFl0S39anEaqc4kogw/7UwpKmaqAqpE2WK+GUN1vVNePxRo4v+hvZ4HUxbNPMx0YLMEglOohrSwf3BsRCimM819q3GdqBEASoTUD49cOwPdmtq+RBiX36ZQQUmCKVOqkEhUY8mJE2qEaWpCpFBXpilqonFHOVACZr1hiRdEtxTwFpSZgnOGBL61s7z8U0OhfhnmhV4zKmW5vkwzGeQqnt7gHfiTzrWE00rhirUMmrSEJbiiu0aCNkXQwoggiETODzCngbFcLVigcM2eJma1R473XWyO1AkCwEe1m9bgjoHSbrtLyAbA6VMOWE2S+yWSSxIH9Wo2qGzcV75DmNUK1k+06t2VY24fPCmQ+wzg525JdYsIBS/a1imwLRLLHVHRspp4jj0in445AmauJBiSJVTuNP5hwCLi4dlPacIAlOdZI8lJb+pzvZEqg50DvaQUjdm1Hrw8GJBoyucZ+L/sx3lu/K17iHZZkuXGZVbKXF+urmkwxpNOP6KV8IHEgkb3KsmxvUDjUKe9G94JXWZIjUWQhkciezTK6H8x3REP/05DqvYCMFS5w1A5TeBNY2dzFpArckyzL20S5NxL67jjPtF5DNqQeTu66wNbOMOEQxidXdjMaxk00vEgjLxDlLulvCDJzZRkU3kwh20+09iGF94Hfr/xqthaQyGMknkBkF4HbELaDXAt2EeMvFKPYD2S+xDi1nuGrATAeW4FbgBv9/0XgPHAO+PtKNvp/ACd2iMQwv1FJAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Cloudflare|Ray ID|security check to access|Please turn JavaScript/,
      'searchUrl': 'https://limetorrents.unblockit.day/search/movies/%search_string%+%year%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true},
  {   'name': 'LimeTor-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUOSURBVHjanJdLiF1FEIa/iaMRQ6IILozVulDxgbtk0S34AIkuBDdyIi4CiouIEGEmCxdGCARBRXMxS9GFG8GcbARFCUIEkW4JKkhWGhGsWimBiKCYxBkXXedx753MTNJwuPdwurv+rvrrr+qF1dVVFhYWmBuN/4o/1r9vA+4GuZNAALajnAP7jZafKfwCXGKTY3FTs4xrEB6XEJ9tYnpUkBBCQJDRFEMbvVSsnM05f2GtfUTh9EZbL2zogchTMTWvLadm99hgZ3YY09+yZtrSflqOlsMUvrsaADukkXeX4tJzKaT+lDUaepntwgiOYBhZ87+TyeQIE17fPADhjng8nlhOze7xpqAIAUPX9EX3bRZU1kzbth/bQXse+Gd9Dgi3yvH4eZOa+wBUMwQII5My82tzAQDFQA0wJAipSc+05Os5aHuBC5f1gByXk01Me4SIURA3LiOTMuNwnWOEYf6WVX1NoiVTJuUtJrzSzdwyE/eXJMqeGr8WQQmAYP0zONbcpPn/sRPNs1edM0YhkwhII8tEHp4HIOyUJTmSCBRy3TjUTZKfNsyAYASiexKFgJLceN2jhsQAEVmk4Shw3TSAhpdFuHladczdrf0TfCOdObX5yRmRcB6wVu1K7CLy9BjADhL7AkJr7Uj+xqccZ0JxaBWU9gZ1bo15SgaEbAW1jIhAw35gYdHF5iGEnRAQsf50quIknAVRfZN7wgV/s5lMALTqgWLVMEIC2mAR4Z7qgcQjIoKimJkTbzhL29OpbmoOKCtkBVWXYg+NAhmhICPvOB2tVEYJWxEeXHQC3i/gH4fYp2CuaFCcXqCgBSX3DBEUVVeDEN2cEjEkVKDmp6ksyR2qBzoh2jlNPnovBMzzvSUjZBWgwcg+W1yiY0+86FC7fSyAKaibMHOpFrt9i8+6YWxc5pR9yO8QCkbbS2+NKEABSp0zt+6yY3vngf/GkmojEoWZVKvCJh7v7DDok9BmiLjBWFl0S39anEaqc4kogw/7UwpKmaqAqpE2WK+GUN1vVNePxRo4v+hvZ4HUxbNPMx0YLMEglOohrSwf3BsRCimM819q3GdqBEASoTUD49cOwPdmtq+RBiX36ZQQUmCKVOqkEhUY8mJE2qEaWpCpFBXpilqonFHOVACZr1hiRdEtxTwFpSZgnOGBL61s7z8U0OhfhnmhV4zKmW5vkwzGeQqnt7gHfiTzrWE00rhirUMmrSEJbiiu0aCNkXQwoggiETODzCngbFcLVigcM2eJma1R473XWyO1AkCwEe1m9bgjoHSbrtLyAbA6VMOWE2S+yWSSxIH9Wo2qGzcV75DmNUK1k+06t2VY24fPCmQ+wzg525JdYsIBS/a1imwLRLLHVHRspp4jj0in445AmauJBiSJVTuNP5hwCLi4dlPacIAlOdZI8lJb+pzvZEqg50DvaQUjdm1Hrw8GJBoyucZ+L/sx3lu/K17iHZZkuXGZVbKXF+urmkwxpNOP6KV8IHEgkb3KsmxvUDjUKe9G94JXWZIjUWQhkciezTK6H8x3REP/05DqvYCMFS5w1A5TeBNY2dzFpArckyzL20S5NxL67jjPtF5DNqQeTu66wNbOMOEQxidXdjMaxk00vEgjLxDlLulvCDJzZRkU3kwh20+09iGF94Hfr/xqthaQyGMknkBkF4HbELaDXAt2EeMvFKPYD2S+xDi1nuGrATAeW4FbgBv9/0XgPHAO+PtKNvp/ACd2iMQwv1FJAAAAAElFTkSuQmCC',
      'loggedOutRegex': /Cloudflare|Ray ID|security check to access|Please turn JavaScript/,
      'searchUrl': 'https://limetorrents.unblockit.day/search/tv/%search_string%/seeds/1/',
      'matchRegex': /csprite_dl14/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'MovieParadise',
      'icon': 'https://movieparadise.org/wp-content/uploads/2018/01/favicon.png',
      'searchUrl': 'https://movieparadise.org/?s=%tt%',
      'matchRegex': /No results to show with/,
      'both': true},
  {   'name': 'MVG',
      'searchUrl': 'https://forums.mvgroup.org/maintracker.php?filter=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgotten my password/,
      'matchRegex': /btsmall.gif/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'MVG-F',
      'searchUrl': 'https://forums.mvgroup.org/forumtracker.php?filter=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgotten my password/,
      'matchRegex': /btsmall.gif/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'Nitro',
      'searchUrl': 'https://nitro.to/tags.php?tags=2&where=1&search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /download_icon.png/,
      'positiveMatch': true},
  {   'name': 'Nitro',
      'searchUrl': 'https://nitro.to/tags.php?tags=1&where=1&search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /download_icon.png/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'NNM',
      'icon': 'https://nnmclub.ch/manifest/favicon-32x24.png',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?f[]=731&f[]=733&f[]=730&f[]=732&f[]=230&f[]=659&f[]=231&f[]=660&f[]=661&f[]=890&f[]=270&f[]=218&f[]=219&f[]=954&f[]=888&f[]=217&f[]=1293&f[]=1298&f[]=320&f[]=677&f[]=1177&f[]=319&f[]=678&f[]=885&f[]=908&f[]=1310&f[]=909&f[]=910&f[]=911&f[]=912&f[]=221&f[]=222&f[]=882&f[]=889&f[]=225&f[]=226&f[]=227&f[]=1296&f[]=891&f[]=1299&f[]=682&f[]=694&f[]=884&f[]=1211&f[]=693&f[]=913&f[]=228&f[]=1150&f[]=1313&f[]=1312&f[]=321&f[]=255&f[]=906&f[]=623&f[]=622&f[]=621&f[]=632&f[]=627&f[]=626&f[]=625&f[]=644&f[]=635&f[]=634&f[]=638&f[]=646&f[]=1155&f[]=1156&f[]=1099&f[]=1098&f[]=892&f[]=668&f[]=669&nm=%search_string_orig%+%year%',
      'matchRegex': 'Не найдено'},
  {   'name': 'NNM',
      'icon': 'https://nnmclub.ch/manifest/favicon-32x24.png',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?f[]=658&f[]=232&f[]=1221&f[]=1220&f[]=768&f[]=1300&f[]=922&f[]=770&f[]=1320&f[]=780&f[]=781&f[]=1322&f[]=769&f[]=706&f[]=577&f[]=894&f[]=578&f[]=580&f[]=579&f[]=953&f[]=581&f[]=806&f[]=714&f[]=761&f[]=809&f[]=924&f[]=812&f[]=591&f[]=588&f[]=589&f[]=598&f[]=652&f[]=593&f[]=587&f[]=584&f[]=586&f[]=585&f[]=596&f[]=614&f[]=623&f[]=622&f[]=621&f[]=632&f[]=627&f[]=626&f[]=625&f[]=644&f[]=635&f[]=634&f[]=638&f[]=646&nm=%search_string_orig%+%year%',
      'matchRegex': 'Не найдено',
      'TV': true},
  {   'name': 'Nyaa',
      'icon': 'https://nyaa.si/static/favicon.png',
      'searchUrl': 'https://nyaa.si/?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'oMgWtFtrackr',
      'searchUrl': 'https://omg.wtftrackr.xyz/torrents.php?searchstr=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /Your search did not match/},
  {   'name': 'oMgWtFtrackr',
      'searchUrl': 'https://omg.wtftrackr.xyz/torrents.php?searchstr=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /Your search did not match/,
      'TV': true},
  {   'name': 'Pahe',
      'icon': 'https://pahe.li/wp-content/uploads/2017/12/favicon.ico',
      'searchUrl': 'https://pahe.li/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|the security check/,
      'matchRegex': /Please try again/,
      'both': true},
  {   'name': 'Partis',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGAgMAAAAMQAoXAAAACVBMVEUAAAB1dnbkmQdwRkMRAAAAAXRSTlMAQObYZgAAANZJREFUOMvN0sENhCAQBdAPWS/cbYIqLIFNoB9K4Wimyl1AYXDUeNv9xxfnO07Er/KSNJ3QIkg5SV5SkF3hWDaH4I7PfDNSlnFSFfJD0xUtosrLKnekd57TkW3l6zcmRku9xMoIqrzPdvLbVW1s5DYyidGr0sqoRlM/3zWB4iWpTjbdkGu0b3FLhvZDn5AXNHXqi7X6G0JYBM2FNECNJle6OalCFroTyhYEy2iuJyWi4bc3RJzgAJtl7ZTnchInI4lKoiSIwQRRjzG2CzuyyDMyj0jjj/IBZ05ftNQK2woAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.partis.si/?p=search',
      'mPOST': 'najdi=%search_string_orig%+%year%&gremo=Gremo!',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /download.svg/,
      'positiveMatch': true},
  {   'name': 'Partis',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGAgMAAAAMQAoXAAAACVBMVEUAAAB1dnbkmQdwRkMRAAAAAXRSTlMAQObYZgAAANZJREFUOMvN0sENhCAQBdAPWS/cbYIqLIFNoB9K4Wimyl1AYXDUeNv9xxfnO07Er/KSNJ3QIkg5SV5SkF3hWDaH4I7PfDNSlnFSFfJD0xUtosrLKnekd57TkW3l6zcmRku9xMoIqrzPdvLbVW1s5DYyidGr0sqoRlM/3zWB4iWpTjbdkGu0b3FLhvZDn5AXNHXqi7X6G0JYBM2FNECNJle6OalCFroTyhYEy2iuJyWi4bc3RJzgAJtl7ZTnchInI4lKoiSIwQRRjzG2CzuyyDMyj0jjj/IBZ05ftNQK2woAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.partis.si/?p=search',
      'mPOST': 'najdi=%search_string_orig%&gremo=Gremo!',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /download.svg/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'PB',
      'searchUrl': 'https://pb.wtf/tracker/?ss=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Не найдено|No matches found/,
      'both': true},
  {   'name': 'ProStyleX',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURQAAACcfv2TZ+v///146RIcAAAA7SURBVAjXYwgFAgYwEf7/fyhD3KpVVxnCGRhMGUIf2NmiEBogguEvkLD/yxDeYP+VIY5BH6otFEwAAQBlTx1G4I9t0QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://prostylex.org/search.php?c1=1&c2=1&c3=1&c4=1&c5=1&c6=1&c7=1&c8=1&c9=1&c10=1&c65=1&c68=1&search=%search_string%&cat=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No torrents were found/},
  {   'name': 'ProStyleX',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURQAAACcfv2TZ+v///146RIcAAAA7SURBVAjXYwgFAgYwEf7/fyhD3KpVVxnCGRhMGUIf2NmiEBogguEvkLD/yxDeYP+VIY5BH6otFEwAAQBlTx1G4I9t0QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://prostylex.org/search.php?c12=1&c13=1&c14=1&c15=1&c17=1&c65=1&c68=1&search=%search_string%&cat=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No torrents were found/,
      'TV': true},
  {   'name': 'PornoLab',
      'searchUrl': 'https://pornolab.net/forum/tracker.php?f[]=1768&f[]=60&f[]=1111&f[]=508&f[]=555&f[]=1712&f[]=1713&f[]=1775&o=1&s=2&tm=-1&pn=&nm=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Введите ваше имя и пароль/,
      'matchRegex': /Не найдено|не найдено/},
  {   'name': 'PornoLab-ID',
      'searchUrl': 'https://pornolab.net/forum/search.php?po=1&dm=1&nm=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Введите ваше имя и пароль/,
      'matchRegex': /сообщений не найдено/},
  {   'name': 'PuZo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUdNlJwg5fvPCO1OjA9U2lVZHh9PUBGNkfoouAqAAAA2UlEQVRIx+3SMQuDMBAF4Cu0uhpI9qKga0mHrg0GZwvtLhbsKv7/oQ4SyCWX61x8q5/h7iWwx+UayTSDS17GUn0QCHPjQDlzoIEtmhIsGDYwUuC8gYUbIqNA7YbgwMKBXDMAMs0AyCfvLrXbgsixezPA2nYFlxSwYwo81MtadxfuLxcjhFDrEbMHDsKPbCtIAtHVPjAYyAYNhoFCS4gADBxA3QRA+uAUgILZUgADJAKGOICsoccAfb9DCqhn5ImEk0VrKEhw+BH0JDB4eKIGICM44D+BvYY/zRdXF11b49kGEQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.puzo.org/index.php?app=core&module=search&do=search&fromMainBar=1&search_term=%tt%&search_app=forums',
      'loggedOutRegex': /Cloudflare|Ray ID|An Error Occurred|Please wait at least/,
      'rateLimit': 30000,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'RARBG',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADMUExURQAAADhgu/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7+/zhgu1d5xlt8x2GByWiGzHCNz3aS0XqV0oCa1Iig1o+l2Zar25yw3qK14Ky947DA5LXE5rnH6MbS7MvW7tDa79ff8tzj8+Pp9uzw+fT2+/7+/////0INwLoAAAAodFJOUwAAAAMIDRQZHSIqMzpAR09dY251foaPl6CmrbO7wMfQ19re5Orx9/zZOpCWAAAB3ElEQVRIx5XVWVvaQBSA4ZlhsewoBapVlqFZKqKtiFAkZfn+/3/yIhAmkJDxXOQiOe8zmeXMEUopJYQolOsNM+q1armYE/FQSqnwUah1B65nhOs4o/5dp1X/lgxqmuRw7m/KCeDqjvTo1c9Bw70AGDULp6AF8D6LxXyxXHuhcFv5E9AG8BNi8s8DcJpSSivg+79XAKOKNfD9BcB9zh74S8CpfAH4W6Arw3wr8Ab0ZJifBObz+Wz2OjYmDuh8Knjc79dH7J+cciZgGYEAaGSDXQQ+gGY24OnwamU3whEE4FYsgDnpUTEbrCMADKTKAt7k8OYV+JkJ1lG+/x+863TgT6fTvy/GRv8BdFGlg9OK2AJtZQ/WgC5Zg/EGcJvSFrx5gNuW1mAD0JP24GkHjKqXQRAE41i10S/nLoDH2KnwVwC3VxmARXwaTjcL8HK8/XYAmWB7HGJmBcw7IDBF+vGexm+ybOAd1/bZGMKq4vx3YHMJuD2AedI0ksEw7JLP8aK4BOS1B2yMsjuIZDCQYWNdGt3LBC3z2pqEB7oyOFlbE5y13Y4QouGcNeAIlB7iH35VhRD57+lA1Aax/BshhBClH855/h6IUvthqLXWWg97neq+8eert319DGPjvhKfLLE8ejIzVGgAAAAASUVORK5CYII=',
      'searchUrl': 'https://rarbgweb.org/torrents.php?imdb=%tt%',
      'loggedOutRegex': /something wrong|Please wait|enter the captcha|too many requests/,
      'matchRegex': /imdb_thumb.gif/,
      'positiveMatch': true,
      'rateLimit': 4000,
      'both': true},
  {   'name': 'RareFilm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA7VBMVEUAAAD//////////////////+3///L///L/3r3/4L3/3br/3rr/2bP/2rL/wIH/v3z/v37/vnr/vHb/u3X/uXL/uHD/t2v/smT/o0b/oUH/nDj/lyz/lin/lCX/lSf/kiL/jRf/jRf/jBb/ixT/ihH/iQ//iA7/hwz/hgn/hAf/hQf/gQH/ggD/ggD/hAD/igD/jQX/jgD/jwH/lAH/nhn/nxD/owL/pi//pw7/sQz/sVL/uV7/uj7/wTD/xFX/xkL/x3L/0oz/24T/3GL/3Xz/3an/56v/7Yv/7cL/87r/+tn/++f//vr//vv///6LyAiWAAAALXRSTlMAAgQFBg4TFD5CQ0ZKTH2AgIKGh4uNkZm3vMTS09bW2+Tm6Onr7e/y8/X2+/xz1yocAAAAo0lEQVQYGQXBCU7DMAAAMOcoXTpxTuL/70MTYqjHupIEOyCfpnLu8329VzLj8/tpeDmGvl7XQzJePrM2Pg7Dq73F/HyBnOByjrm8QcxPED4ecSqQQwRTyQXE1GNDKPEMYggZTBlIqUcgLiCHEMEaNzBICfoSlxWykGHe4v0HaqsN/XtPrYaJv9N+6/r1tyZ1f6Shtrn25et2CMjjVKY+b9ve+AepX0NhemW8QgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://rarefilm.net/?s=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nothing Found/,
      'both': true},
  {   'name': 'Rarelust',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAwUExURQAAAAQIEA0ZMBAQDxIhQB86cChLjzAvLTZkvzpsz0A/PEN970iF/4+Nh7+8tP/78BtqQJIAAADPSURBVCjPY2BAB8xVq5YbqriAgJMASID93ru3RRkdINCmABLgev//35KeMyBwMgSkBkng9AyQGiQBoJogAVSB09MUwIaW9ACVd3TuOXPmhAPYWpMeoIEurnPAAiDA0gNiMWXuQRVgVJ2DpAUkBRGHGooQgFpLlADUUIQA1FqooRCHgZwOtRbidJDnoA6D+w1FAKwAqgUhADUUoQVq7ekZoOBACrGTIaDgACmBOwzkLhSXglyO6n2o0xEBBPUcCDBlgKMRSgEBowo4oqEUGgAA7xjvsO09qI8AAAAASUVORK5CYII=',
      'searchUrl': 'https://rarelust.com/?s=%tt%',
      'matchRegex': 'Nothing Found'},
  {   'name': 'RlsBB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURf///+KWHP7+/g40ZLEAAAABdFJOUwBA5thmAAAAxUlEQVQ4y83Uu3EFIQyFYRKX4L4c+CdQCfSjEhToVOlAsHcWrh+JxyZivmEEOrvQGrfR2ssd3trrHd5PYBt/BSZJSZck+QJFQUJjKHotQXIaJjCBnK6gYQldjhxGTkCBHOwALRg/hX6suIoO33eZEBdQB/N10pzABIvqJanm+iwzvEBKQJJYoCjQqjHOPGLPI/fmcjbnE0zPgV+GfA79i8/wSepjtW8z5OuHUYVsuiL0ijCg0WvyCPmfXI8Dvr/Zx2OwPxcfV/CgxyM3gh4AAAAASUVORK5CYII=',
      'searchUrl': 'https://search.bbrls.in/Home/GetPost?phrase=%tt%&pindex=1&content=true&type=Simple',
      'goToUrl': 'https://bbrls.in/?serach_mode=light&s=%tt%',
      'loggedOutRegex': /Ray ID|security check to access/,
      'matchRegex': /"results":\[\]|Not Found/,
      'rateLimit': 250,
      'both': true},
  {   'name': 'RMZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADzUExURf///zY2Njc3Nzg4ODk5OTw8PD4+PkFBQUNDQ0VFREVFRUZGRkdHR0hISExMTE5OTlRUVFVVVVZWVldXVllXUVtbW1xcXF9fX2VlZWdkWmtra3BsY3Bwb3NuYnNzc3R0c3h4eH5+fn9/f4B5ZoJ6ZIKAe4KCgIKCgoN/dIOBeYR8YIV+ZIWEg4d9YYd+Yoh+Y4uCZ4yDaIyMjI6Eao6Fa5CGbJKSkpOSjpOTk5SLcpaWlpeOdpmUh5qRepycnJ+XgKCYgqaknKempKqkkaqkk6ykkaymlKynma2ola6pnbOxqLW1tbiyoru3qLy4rr27t8TBt6S1Q0UAAAABdFJOUwBA5thmAAAAm0lEQVQY043NuwrCMABA0ds0TUmwImhRHASpII7+/+w3ODi4FlFaaPqgT4dmcvKOZ7nwk2d8vKkgQd1JEA8hbWPLI8bs2RhzQcA1ngYN7VYDCJAZ9RrqOHSAQPjQHtRihlSzssipDxw8c3P6YNRLhTMsRXQDosF0M5x1vgIkunQX1e+AgODtLnJQQINfOOiwQMU0OqhIgWws+Ksvvwcr+/YPaK8AAAAASUVORK5CYII=',
      'searchUrl': 'https://rmz.cr/search/%search_string%/titles/exact/m',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No movy available/},
  {   'name': 'RMZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADzUExURf///zY2Njc3Nzg4ODk5OTw8PD4+PkFBQUNDQ0VFREVFRUZGRkdHR0hISExMTE5OTlRUVFVVVVZWVldXVllXUVtbW1xcXF9fX2VlZWdkWmtra3BsY3Bwb3NuYnNzc3R0c3h4eH5+fn9/f4B5ZoJ6ZIKAe4KCgIKCgoN/dIOBeYR8YIV+ZIWEg4d9YYd+Yoh+Y4uCZ4yDaIyMjI6Eao6Fa5CGbJKSkpOSjpOTk5SLcpaWlpeOdpmUh5qRepycnJ+XgKCYgqaknKempKqkkaqkk6ykkaymlKynma2ola6pnbOxqLW1tbiyoru3qLy4rr27t8TBt6S1Q0UAAAABdFJOUwBA5thmAAAAm0lEQVQY043NuwrCMABA0ds0TUmwImhRHASpII7+/+w3ODi4FlFaaPqgT4dmcvKOZ7nwk2d8vKkgQd1JEA8hbWPLI8bs2RhzQcA1ngYN7VYDCJAZ9RrqOHSAQPjQHtRihlSzssipDxw8c3P6YNRLhTMsRXQDosF0M5x1vgIkunQX1e+AgODtLnJQQINfOOiwQMU0OqhIgWws+Ksvvwcr+/YPaK8AAAAASUVORK5CYII=',
      'searchUrl': 'https://rmz.cr/search/%search_string%/titles/exact/s',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No tv show available/,
      'TV': true},
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
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://rutor.info/search/0/0/010/0/%tt%',
      'loggedOutRegex': /Connection refused|Gateway Time-out/,
      'matchRegex': 'Результатов поиска 0',
      'both': true},
  {   'name': 'seleZen',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://selezen.net/index.php?do=search&subaction=search&story=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /никаких результатов/,
      'both': true},
  {   'name': 'SkT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURVK1Kf///+GCUfEAAABnSURBVAgdBcGxFYIwAAXAyyfPR2GR1kpGYRj3kFEchVEYgTIFj3hXBgI673TOnB49vK56WD6ZHPLcrGnrKSdi6UsgvV0tkGu+56BGjdwhShX6zz7GFIZwi28VhUCWfatpzJkPrQwE/ih/HTMOrpnSAAAAAElFTkSuQmCC',
      'searchUrl': 'https://sktorrent.eu/torrent/torrents.php?search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nenasli ste co ste/,
      'both': true},
  {   'name': 'SolidTor',
      'icon': 'https://solidtorrents.net/favicon-solidtorrents.ico',
      'searchUrl': 'https://solidtorrents.net/api/v1/search?q=%search_string_orig%+%year%&category=video&sort=seeders',
      'goToUrl': 'https://solidtorrents.net/search?q=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /value":0/},
  {   'name': 'SolidTor',
      'icon': 'https://solidtorrents.net/favicon-solidtorrents.ico',
      'searchUrl': 'https://solidtorrents.net/api/v1/search?q=%search_string_orig%&category=video&sort=seeders',
      'goToUrl': 'https://solidtorrents.net/search?q=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /value":0/,
      'TV': true},
  {   'name': 'SunXDCC',
      'icon': 'https://sunxdcc.com/images/favicon.png',
      'searchUrl': 'https://sunxdcc.com/deliver.php?sterm=%search_string_orig% %year%',
      'goToUrl': 'https://sunxdcc.com/?sterm=%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /botrec":\[]/,
      'spaceEncode': ' '},
  {   'name': 'SunXDCC',
      'icon': 'https://sunxdcc.com/images/favicon.png',
      'searchUrl': 'https://sunxdcc.com/deliver.php?sterm=%search_string_orig%',
      'goToUrl': 'https://sunxdcc.com/?sterm=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /botrec":\[]/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'TBL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD+/v43msJKqs4hjbhgudqY1ep4yONpqcHv8/R/tsm23eiYwM7k8PPl6OrV5OhWXu2yAAAAAXRSTlMAQObYZgAAA2xJREFUSMetlTFoE1EYx+Om4OA3iF6TUEgyFOyU52HUiBBuEHQ7Hg214mbACiJ4zaCD9AxWVPAEhQ4KomlirIiW1moXsVC0DWgER6GLTh3aOigFwf/33r1rm7bi4C8EAvf/fvl/73Ik9l9YmJ1trFJv1DVD9Y/6+s7+/ql+5gwzwJRBD7iuAjMTE+pSiSkznudJT0rpFudZMMXDGh4OpyVjX0HguxGwoswKDyiB6/YhMLdeMMACoAT2IQRGNmsAWCDE7Vjs6dYNwCKW+JtAzMMQCUCbQLBhZK3ACwUuI8AiDFs3QCA0YP+SOUAP40aQRQc2nJubGxhtzqhXTR5oNptVLTCGsy36+YE01kqlRZQQTDab1R1KLXp1gQyTt4iSLIgMJRhWnlgBxi2yKJFHQAnAPALoAMNo+TlZjdroElHlGQxakOZAqeS1aNwr91ESK9wgms5TnAWR4fJcQAvN2ZOUxBn0Eo0d1l+RBgjUypeI6YChijNs0VgeAS1IcaDnNDF7lEHKljYw2nDNOzmM/sNfuAMgepSnTsHjgAM9vb0BvWnUYKhI+yg2gCHN4zpQrXrFgMak7LOs2UZtie4KdGBBZOiBYVzKw6RIumIfDCAMVDzJBreYJ8ZKDIpu6kyxIDJIY1DcS2uDCVSlMhTdvJWsV6vnLXrXTUktyGiDNAYLu3ct0W4YUhCYDtrguujOd+C6lUAHNQ/YIJWhYrMBHKTO4zAoCgXuEBksdQeOUPwEBzLrDWP2qiFuDAVlqBRdlw3h+e1/aCVOUBzjwFljyNn7yML22KIDBkw7TiHs4KLDSwEDTTYar4mWu/GpDq46zm21ps0dcAc01uBx0lzUHfAQGYPiRwoGJp5xnE9ssHMBTQpjWEmlugJiOtCDO+ApDOgOFsS3Fut+BkfgDzGooDrYdq5Fcf4JpUIKjqbg6A5+9gXRr6FBfzDiKr+dyIDTIwrWQ8FyQQceCV8cok14HBlyOXGKNpB0woAvQHb099f13P/sAHUOgkl3KdJdKYOjmOcO5jkE4U3UmA7CPIfmFJg1AT8reHxzgTGkGT3OAocFUQd/ywbGsEEAheHYrlhsWo1vISjgD+XbhgZr6EZgu2mQaReAKwhs840AhjbBsbcxsBcCNb+xwc2Y4n3OzLetgOuaHQ/aGX4wDGL/wh9MyU9TkMmPTwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://tamilblasters.icu/index.php?/search/&q=%search_string_orig% %year%&type=forums_topic&search_and_or=and&search_in=titles',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'spaceEncode': ' ',
      'matchRegex': /Found 0 results/},
  {   'name': 'TBL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD+/v43msJKqs4hjbhgudqY1ep4yONpqcHv8/R/tsm23eiYwM7k8PPl6OrV5OhWXu2yAAAAAXRSTlMAQObYZgAAA2xJREFUSMetlTFoE1EYx+Om4OA3iF6TUEgyFOyU52HUiBBuEHQ7Hg214mbACiJ4zaCD9AxWVPAEhQ4KomlirIiW1moXsVC0DWgER6GLTh3aOigFwf/33r1rm7bi4C8EAvf/fvl/73Ik9l9YmJ1trFJv1DVD9Y/6+s7+/ql+5gwzwJRBD7iuAjMTE+pSiSkznudJT0rpFudZMMXDGh4OpyVjX0HguxGwoswKDyiB6/YhMLdeMMACoAT2IQRGNmsAWCDE7Vjs6dYNwCKW+JtAzMMQCUCbQLBhZK3ACwUuI8AiDFs3QCA0YP+SOUAP40aQRQc2nJubGxhtzqhXTR5oNptVLTCGsy36+YE01kqlRZQQTDab1R1KLXp1gQyTt4iSLIgMJRhWnlgBxi2yKJFHQAnAPALoAMNo+TlZjdroElHlGQxakOZAqeS1aNwr91ESK9wgms5TnAWR4fJcQAvN2ZOUxBn0Eo0d1l+RBgjUypeI6YChijNs0VgeAS1IcaDnNDF7lEHKljYw2nDNOzmM/sNfuAMgepSnTsHjgAM9vb0BvWnUYKhI+yg2gCHN4zpQrXrFgMak7LOs2UZtie4KdGBBZOiBYVzKw6RIumIfDCAMVDzJBreYJ8ZKDIpu6kyxIDJIY1DcS2uDCVSlMhTdvJWsV6vnLXrXTUktyGiDNAYLu3ct0W4YUhCYDtrguujOd+C6lUAHNQ/YIJWhYrMBHKTO4zAoCgXuEBksdQeOUPwEBzLrDWP2qiFuDAVlqBRdlw3h+e1/aCVOUBzjwFljyNn7yML22KIDBkw7TiHs4KLDSwEDTTYar4mWu/GpDq46zm21ps0dcAc01uBx0lzUHfAQGYPiRwoGJp5xnE9ssHMBTQpjWEmlugJiOtCDO+ApDOgOFsS3Fut+BkfgDzGooDrYdq5Fcf4JpUIKjqbg6A5+9gXRr6FBfzDiKr+dyIDTIwrWQ8FyQQceCV8cok14HBlyOXGKNpB0woAvQHb099f13P/sAHUOgkl3KdJdKYOjmOcO5jkE4U3UmA7CPIfmFJg1AT8reHxzgTGkGT3OAocFUQd/ywbGsEEAheHYrlhsWo1vISjgD+XbhgZr6EZgu2mQaReAKwhs840AhjbBsbcxsBcCNb+xwc2Y4n3OzLetgOuaHQ/aGX4wDGL/wh9MyU9TkMmPTwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://tamilblasters.icu/index.php?/search/&q=%search_string_orig%&type=forums_topic&search_and_or=and&search_in=titles',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'spaceEncode': ' ',
      'matchRegex': /Found 0 results/,
      'TV': true},
  {   'name': 'TGx',
      'icon': 'https://tgx.rs/common/favicon/apple-icon-57x57.png',
      'searchUrl': 'https://tgx.rs/torrents.php?search=%tt%',
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'TheRostrum',
      'icon': 'https://forum.emule-project.net/favicon.ico',
      'searchUrl': 'https://www.therostrum.net/search.php?keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Registe-se<|>Register<|cannot use search/,
      'matchRegex': />Jump to post<|>Ir para a mensagem</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TorDL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAbFBMVEUFMFwLNmINfsASgcMUP2sYhcYeSXUeicoljc4lmt4oU38tktIwn+AyXYk1l9Y7ZpE8peM9nNtFod9Jq+ZOpuRWq+hXsuldsOxktfBluOxrufRxvPdzv/B2v/qBxvOOzPaa0vml1/uu2/213v9ENtEwAAAAb0lEQVQYGQXBQU7DABAEMCdaBDcKPfP/17XqEaTMDvbxAwCY/QAAv2cBgM4WAOy0nuAbdLa+PNwV7LSIvnCj57btdXX3c5/tThdrY2N1EkQuuUQmQWVlRSbBXSIRmQaoh1v0eHsHAH+zAQB7nACAfwQvUdbdx9fFAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.torrentdownloads.me/search/?new=1&s_cat=0&search=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'TorDL-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAbFBMVEUFMFwLNmINfsASgcMUP2sYhcYeSXUeicoljc4lmt4oU38tktIwn+AyXYk1l9Y7ZpE8peM9nNtFod9Jq+ZOpuRWq+hXsuldsOxktfBluOxrufRxvPdzv/B2v/qBxvOOzPaa0vml1/uu2/213v9ENtEwAAAAb0lEQVQYGQXBQU7DABAEMCdaBDcKPfP/17XqEaTMDvbxAwCY/QAAv2cBgM4WAOy0nuAbdLa+PNwV7LSIvnCj57btdXX3c5/tThdrY2N1EkQuuUQmQWVlRSbBXSIRmQaoh1v0eHsHAH+zAQB7nACAfwQvUdbdx9fFAAAAAElFTkSuQmCC',
      'searchUrl': 'https://torrentdownloads.unblockit.day/search/?new=1&s_cat=0&search=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'TorParadise',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD/8Z/j6siicFqISzX/6WVvvA9Xow+FzSGfz2S615R+rUI3gQzQsJy6j3byv2DnxbMHAAAAAXRSTlMAQObYZgAAAgxJREFUOMudkjGI01AYx98FFHrFwxQ6m/NAKMoh5LkIQrlkvWKH7E7Jw95QbkjTmjmN3BI61FKX6HAi3iAiPW03BwNeh0JdK/Wyu7lav+8lOZqQLvcNL9/3/73/9773CLl2CP4G/egiH9yzP0kbwIZWp4FE7uZ5HPvtwA7GPK9I6yDoTy8mEy49+JGo788njNnTZON2EGd903WY0zJ7kH/42rsCRfM1M0zHcfUOEQZ6a1z4HgFjSCoBc186rOvBTfuN+yYH21CdWe5Jb1hhz6EuMLt99R6Byz5X4TAdK73bTsYoWKxBFdhgoHLqjkwvAmeu44cAyE08ZO7a03iultMjc4qZTyBhR+PzbxxYOtTqMrKH8hdjRmy0CFaHkD35gOv7iuKYTVL8iANb0HonAoJMH3ctaOQjMGG5FcK8yGvkZITbuQMBPUTDXK0WGoPjGHRQoipiWZH6xwkQ+DekM+xUFQxv1IzBM1z5RX6qy3dt8sqLgceBOiMC3H8oka60/q/tqFU44gDrF2QtQKwhxDdtZsAh2VOxSdHPAgFMEBWSDqqQkAMpA0Iqwe1zYk4v6cM88Icu6DLXoS5yHTDrQr2UsqogSvv0CX2j3U7rW2Jp95es0N/lDBHF0p2Q1uijslZPGeqiWF79W63+alrKckNMAsDTdVBP9AzY0iJSRpA6fZdLWlbnKOpVIteP/7PEpSZgLT8AAAAAAElFTkSuQmCC',
      'searchUrl': 'https://torrentparadise.cc/search.php?f=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/},
  {   'name': 'TorParadise',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD/8Z/j6siicFqISzX/6WVvvA9Xow+FzSGfz2S615R+rUI3gQzQsJy6j3byv2DnxbMHAAAAAXRSTlMAQObYZgAAAgxJREFUOMudkjGI01AYx98FFHrFwxQ6m/NAKMoh5LkIQrlkvWKH7E7Jw95QbkjTmjmN3BI61FKX6HAi3iAiPW03BwNeh0JdK/Wyu7lav+8lOZqQLvcNL9/3/73/9773CLl2CP4G/egiH9yzP0kbwIZWp4FE7uZ5HPvtwA7GPK9I6yDoTy8mEy49+JGo788njNnTZON2EGd903WY0zJ7kH/42rsCRfM1M0zHcfUOEQZ6a1z4HgFjSCoBc186rOvBTfuN+yYH21CdWe5Jb1hhz6EuMLt99R6Byz5X4TAdK73bTsYoWKxBFdhgoHLqjkwvAmeu44cAyE08ZO7a03iultMjc4qZTyBhR+PzbxxYOtTqMrKH8hdjRmy0CFaHkD35gOv7iuKYTVL8iANb0HonAoJMH3ctaOQjMGG5FcK8yGvkZITbuQMBPUTDXK0WGoPjGHRQoipiWZH6xwkQ+DekM+xUFQxv1IzBM1z5RX6qy3dt8sqLgceBOiMC3H8oka60/q/tqFU44gDrF2QtQKwhxDdtZsAh2VOxSdHPAgFMEBWSDqqQkAMpA0Iqwe1zYk4v6cM88Icu6DLXoS5yHTDrQr2UsqogSvv0CX2j3U7rW2Jp95es0N/lDBHF0p2Q1uijslZPGeqiWF79W63+alrKckNMAsDTdVBP9AzY0iJSRpA6fZdLWlbnKOpVIteP/7PEpSZgLT8AAAAAAElFTkSuQmCC',
      'searchUrl': 'https://torrentparadise.cc/search.php?f=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'TV': true},
  {   'name': 'TorrentView-Movie',
      'searchUrl': 'https://torrentview.co/bbs/board.php?bo_table=mov&sca=&sfl=wr_subject||wr_content&sop=and&stx=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /게시물이 없습니다/,
      'both': true},
  {   'name': 'TorrentView-Drama',
      'searchUrl': 'https://torrentview.co/bbs/board.php?bo_table=drama&sca=&sfl=wr_subject||wr_content&sop=and&stx=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /게시물이 없습니다/,
      'TV': true},
  {   'name': 'TorrentView-Netflix',
      'searchUrl': 'https://torrentview.co/bbs/board.php?bo_table=netflix&sca=&sfl=wr_subject||wr_content&sop=and&stx=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /게시물이 없습니다/,
      'TV': true},
  {   'name': 'TPB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%search_string%&cat=201,202,207,209',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%search_string%&cat=201,202,207,209',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/},
  {   'name': 'TPB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%search_string%&cat=205,208',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%search_string%&cat=205,208',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'TV': true},
  {   'name': 'TPB-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%search_string%&cat=201,202,207,209',
      'goToUrl': 'https://tpb.cnp.cx/search.php?q=%search_string%&cat=201,202,207,209',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/},
  {   'name': 'TPB-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%search_string%&cat=205,208',
      'goToUrl': 'https://tpb.cnp.cx/search.php?q=%search_string%&cat=205,208',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'TV': true},
  {   'name': 'TPB-ID',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%tt%',
      'goToUrl': 'https://thepiratebay.org/search.php?q=%tt%',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'both': true},
  {   'name': 'TPB-ID-Proxy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA8BAMAAAAkp6FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAkUExURQAAABkZGTMZAEwzM0xMM0xMTGZMM2ZMTGZmTH9mZn9/Zv///0CpG+oAAAGySURBVDjLxdXNitNgFMbxx2NlHHMThz8DfmRTBnfdSDeDuhFczc5LKINQ0M2Ay16CFyDSTYxgnT435yLph0lqVXA8q5D8kpf3Oe8h8pHS7YF5tzpgrH6V+yDoV/FHYOA55X8CkhSHQBBczOfzKUEMgPzoa2y7zoWrAXBir8K26/v2OvqgtN2AYnejC/gVKLaJHwB37VUD2qtuN3PiV00AOfGs06ybaHNo48oATvdAPRT16Bg4+SdAABkHQAYGKOsG9sDjunAFace6C74GUPjUFeTS99zdpgU8qvMpwNkzPveOfZ2QQgFIKUDL3x7evHMERE6OgLbzA/Xals1BUKmw7DdwAIx50HyBeDEIZhSWK0gUiwEApeUZ+WQq9cgKkbYMYa+nktiRT0jNAMvXKleLlsQ72+u3SCARnDRRq8n9AyhICSm4tMekZbuOpnPft6dt2bYwtmDk1XkGqBmJJmRZ0SwRIAUSF0tfKYjndkW+3LT7C6TEZbuFK4XiIeRkA74FZz+lMBUJ2h6YmuxkeHO+GW/ZdjXQrs1LLRj1GxH5freEigGwt8Rg5TFQ6bb/en8PfgCTTMM5Mqng0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://apibay.org/q.php?q=%tt%',
      'goToUrl': 'https://tpb.cnp.cx/search.php?q=%tt%',
      'loggedOutRegex': /Ray ID/,
      'matchRegex': /No results/,
      'both': true},
  {   'name': 'TurkSeed',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEXl5eXtHiYCAgLsOUDqZms/Pz/cp6mHh4dS1HxgAAABw0lEQVRIx7XUwYqDMBAG4MC2em1I2QcQQq8NkZ4tBh9ASL0G2nWvUrB9/XXjJBM3WmGX/Q9tDx//TDVK3ugQRpYjLCiWAbVZBcfVhr8CdvzPBrHWIG0A/Co3VambGlOkutF900UjIOyYZjXP+BTQILtt9p0XIAWw0nBZa2jWADcxyG0KC3AGAtbamGQEvPsJ9gRSj6JZBH0WCTo59lsAvFloSGsUs4DcMyeesyPIR+bFI26AGZBDFwOogDTRCKjw6YIGzBMBN3Mg6RFccEQotBcaG8KkKLopiBc9eJCUUuZVJLgBkJSCKlVhx93NgCVLyqrWbmiI/f6EjgsAQXMzPmhVewqvaDOAkRj4j4wW4RragRMBIABABXegAHAVVJqxAkE4QZVMmXAGgD0A0l7zBH7PA7Kp8ISHAG9Vi8czasBEgM2AevI3YXJ0S7UDOWxgEMCVFDBj3O1WeNDDvZA0WDMJdrkDOFOIrColTzjBnYeSeiFFbnBF9yp5o5h98XTR/kxuQkA0r2vNhw98+jYCwTvJMDCBJGcEOwTB43t9AYYCNyMG+Corl8Chg+sv54F+EMhNzgAevm4TJdkQD2rOtXvJfQGxDp98uYX4AAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://turkseed.com/browse.php?do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password|Şifre Sıfırlama/,
      'matchRegex': /\/details\.php/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Videoteka',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAAAAEIb///9ycnOEhIQAJJWmuN0qO16Rj4sEM6AqLDBiYWBVVlhHR0YoU68ZQJju8vpOcro8Y7OYmJgVKVf9/fnk6/d2jMgcSKegoKAsT5bO1fL///DZ1MbDwbyQ4FuhAAAAAXRSTlMAQObYZgAAAJ5JREFUGNNFzgcOwyAMQFEPzIbsnfT+xywhrfKFkPyQJeApMgd4Y6XssG32Pwe+pdCQ6pwiF6mo6nqIIXBkq9hWyaR8SAPNbTkawGN7+RRpdpr6vjMw4kLJMy2oz72CrGT9hxrU0557A17wuDwdeMOaDYDgcirqClDjVgAw2EzUOrlBDJTuN42u3CLPT9F1jTjJGeHXiOLKzghvpgS1L/8fB1zhxK/kAAAAAElFTkSuQmCC',
      'searchUrl': 'http://videoteka.org/?p=torrents&pid=10&keywords=%tt%&search_type=description',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /no results found|Nič ni najdeno/,
      'both': true},
  {   'name': 'W-v3',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAANR6G2x+Opvd2bs9iAn87F0+h2l8ppjcVPebpXf73Y4fCRrNRfhcGJpdHn7fboqHMQAAAAAXRSTlMAQObYZgAAAfJJREFUOMtiIAwEwQBDmFEQCgQwxBEymOKYMoIoAF0cAdAMwjRMEAPgkcA0adaqhTCzBFcshIjNnCgo2V4aGt4F1SJ1+BRYXDa0oqPO2cRZyaYKLMEooa0OlhA1fl56WE3ZOC3NXFAAIpE3ESSxJOlFe9yRc3HOaTkTwRJSbjqNIInLmyIlV62cKLncbfNFAbBjH6lEgSSaNhVCHBH2qVEQLFFifALEL9rciCZxz8kUyJUKSoE4W/LZ5ouCYO/NOJQzEUge1psIlpA4lDJRUAAkIfUIqETwqrM7WHxFDJABkRAs2tQItMnkLUh8upOSXSNYAuaexzaVIIk72btVJ4IlID4QlHTTA9s91SjNphMmAdiUpBOCstbqEDe1HjGG2yFq7HpRQlsDGvDX3VIWQiUkDptUimvbQiWknm1qhEpIhRiduGrmBRaGuAUqIdinplNn/BAmcWlbICjcwU7RTnZxKYRLfAsUhCYFcf3fyq4X4UYhJGTt/28ChTAsdAthElLe/z9FgTzRsVJQ8rpbMih0wbZLHvsPVAU00tnnaYyRkinIboizivM3g6yQU0tSNspOfguUgJq11NluIliHMTD5AJ0BT6GSN7ogkVEeGhp+U1AQM4lKrloFCnSSUzvejIPQQjgTEsjOmAUA/iIDs5AhCADTkKvh4m7FyQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://warez-v3.org/search.php?keywords=%tt%&sr=topics',
      'loggedOutRegex': /Cloudflare|Ray ID|you are not permitted/,
      'matchRegex': /Search found 0/,
      'both': true},
  {   'name': 'WB',
      'searchUrl': 'https://www.warezbook.org/?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /<ul>\s*<\/ul>/,
      'both': true},
  {   'name': 'WC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAFMSURBVDjLY3iKCo6GibNIxpxACDCgyi/hZAAB3vWYCjbGWjsVbuRlgACRq2gKHsczoIJaNAWVaPIMHqgKbvGiK3BCVbAMXZ4hC1XBJHR51sOoCtagK2hD8+YDcVR57Zy86l0ovpjLhOEKIVC4WmvCAmq2EIaKh4/rQeEKs+vWlCxOVAV7jMAUUkSgOYSVAV2BJAM2gNsEdAUPdgigxRcnTMHDE9Pmz5+/5IwYmi+OWoKo+cneEb3bwGZooMjzARNBBzASt12HW3KmvqTExdEeCJwKS+r3g4TOnUBLck/dwLpdcKbJpydkgfKyuBPt5YXT3DQ8pi28iksBLN7Xk63g3hLHicGHJWffw+nI4L1bo5724/bF3qinR4OfPtbcjEtB4Jmnl32Bqdwah4JtecCYcQMybFdhVxB8A0h4A/EuM6wK1reAyBAwsRgqBgBT7TkJcA3cwgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://worldscinema.org/?s=%tt%',
      'matchRegex': /Nothing Found/,
      'both': true},
  {   'name': 'WH',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADsSURBVHja3NhbFoMwCEVR5j9p+ltr4B7Io0v1L6nslGSZoLntve0IIK/kefWY+hUcZg8o5qIKNNLNgfaMCiBeWKNrjPzGs2GDDJ4xKVALHiLhHIjgcR8D0vAqdSMiAch0auIKlEYPCA7c2ynxDYDxk1bXAF05JJ1XpTR+Z4v5DvgLAfVyyHoXAF4D1ox/GtD/dwog6ZwA2GwtALwH2JLwzwfsr4BtAhovC3KEgTtaG4i2TJtIUbwn2wogP1UAgvUiwMoAOdnhs2kb2H66PlAfVCocr1c40zWa8yrT91aZR+rkA5U+Qdi3ip33ZwAb5/CcnuFpKAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.warezheaven.com/index.php?search/666/&q=%tt%&o=date',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /search_results/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'XDCC',
      'searchUrl': 'https://www.xdcc.eu/search.php?searchkey=%search_string_orig%+%year%',
      'matchRegex': /No result found/},
  {   'name': 'XDCC',
      'searchUrl': 'https://www.xdcc.eu/search.php?searchkey=%search_string_orig%',
      'matchRegex': /No result found/,
      'TV': true},
  {   'name': 'xTorrenty',
      'icon': 'https://xtorrenty.org/templates/xTorrenty/images/favicon.ico',
      'searchUrl': 'https://xtorrenty.org/?do=search&subaction=search&story=%search_string_orig%+%year%&catlist[]=0',
      'loggedOutRegex': /Cloudflare|Ray ID|odzyskaj hasło/,
      'matchRegex': /przyniosło żadnych rezultatów/},
  {   'name': 'xTorrenty',
      'icon': 'https://xtorrenty.org/templates/xTorrenty/images/favicon.ico',
      'searchUrl': 'https://xtorrenty.org/?do=search&subaction=search&story=%search_string_orig%&catlist[]=89',
      'loggedOutRegex': /Cloudflare|Ray ID|odzyskaj hasło/,
      'matchRegex': /przyniosło żadnych rezultatów/,
      'TV': true},
  {   'name': 'Zooqle',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALfSURBVDjLNdDPb1VVFMXx8w+Zd+869xZq3ogB5tXaQPVVH5o0dqCdFqtoTKiJE2eKDVVImqAGfzRhZhBNiUaRRIyCBrRo6D57r73P/TccFNfsM1mDb/KiNeiuWilh1YMsJoOLubp7UqqJVFcrEaJR6BxEvJBuZprEJNxscCVDKBQjXV3Ui5p4KhZW3bWUaladrFKrFXWNEq6avLjS1A9/fxTFy0DTMHdVYXX1SKU6Qz+eziNPNv4YqFIOd1bmkRfOXlMPJtL17gxHG18V8u6Zx8JaEU1eyHWg3/3z+ylw7JfKV4F+9/7+FGhvl5Lcyh6AnXD5ax542b8EsOOUB/PAKplIewPoH5gwNoH88E2gf1hL2OtAliEZOQMWxEx8B8BPZ4AFqjsvAvhBk3E4AcyU4nIFwN4JYBYlVD4BsFeSk1NgUbxK/QjA/hRYHApdLh09qMkGcPxQjfoOgH82gOP/kowtAI8smcVnAK64mJ0EVvgpgF2a6klgrDVVVZsB4+t6sAnkfbMZMP5G/z4L4GmriWr11gTAGEC/7eE//y9g0T2RpB6cHwPoX/qxiKkePhYw0ZqieEhouff1balqqjJY3LlpXraBpzgkMyvUKi431ifPnL9X728tTdavi+hlYCkixRAuFPPtLo9G+cXvVvPoiTZ/ILqLuefMUnUtF8Tsw4y+n2vaJ9tRh9zk9/VqHq+4JxfK2uqNrdz2bQPkUW6bpukavH2hn3vBmUoor3UZTYcW6Nrcom2aJjdANzcVS0aWeBejLnd932L582fbJnc5dyMcw7IykVrN38tt07a5W7tTf30lt82oafO5Dqc9kliUErz51nRxZfMrWrHyxWvPLy6f+/YW2lPFEz1EizPoQYq4Ueji4b8Bp6snqypiQVczFlY7CkPzgzGWjMmCpKl7DNVJpbs7WQt5Ckseyb2WwiI0CdLoGj6Iq1dd6JelpKqVDGdVJ6OGSARJc2oJd/0PjOCOB72CPu4AAAAASUVORK5CYII=',
      'searchUrl': 'https://zooqle.com/search?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|security check to access/,
      'matchRegex': /no torrents match|Come back later/,
      'both': true}
];

var private_sites = [
  {   'name': '3CT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEcUlEQVRYw+2WS2xUVRjHf985d2Y6naFlWqYFAVEiMRghCkRiXDUkJJi4EOmCRBcm2tbGxp0GXXTYSNUFaiOlTUOIjxgl6kIRNiiIiTFGQkAIGF4BSunUMn1O53Hv+VzM6JQAWlbGpP/kJicnX875n9/3yIU5zWlO/7EEQGkJETcJosbcElHQvIz1ZGZuKc1hGmsXg2nAV4fqIDeWXBNSThMttXhetBSYM0iVK619Kd3oKQDDkTFh53TJQH3LeqzpQagC1Rk3eSDfk3YdQl9RabY0LmgCfRF0OcrXIBuBRkS/wJduPOlA3WaEAirnERaDxlDSQBbhPhDF6XYZ7v3MK4OII/ogSHUZSoWPchLuKZlK1j8D7gOgBnhV0r3vaWPLOZA+kNfwWA4aQWQBqt04dxgjHyKyBLhK4FJYeRnRLQgJAK/yWskgnEL1LOAQeQrVYzizQ0j5Wte+FAm2gSwAvqPg9gIwVPiShsgmRJ8E+QlYiXOtMty3T5OtK2YkzjESOQ68QEPxHKIOoJRza4aBDphqAk2BWNA+soWt8kfPrwCEgk3AKgAC2S+ZvrESpL05fHZQtFsZGnmfvNkF3oE7F113noB+VA9VCKR7Tgqc0GT7A4jrQhgA/Qpb5QNoy9oQ37gmAmsR8iweGtbtLGQyWib40SjhbIap6EJi00OMUSD1D5U/snvgr7VXTrVqXetDSNALrAeZBHmWiDurda2dyA+XiGefYLQGrB9i/akuxuMpdEa9TM8r8czG84SlFSaOzqYNK23nsQaRUUSOoyogdYg8jjVvc/beZSDldhJDPmRBCyjFmz7wEXwcOts5UCnCdO8n0PwpiUScsKwD7QJZh3ErOLM0DPILostwBo6s2c+jv71OIVZBUJxS4jgmYgZ/MnP3BkhZIeWTYQw4pMm2dxD9GGGaQK6BPYphCwDZ6g1sb18hmV0/VkZGKsz8wZWMhs8I3YW7MqCNz8XQwU7VtqugBxhedB4ZvALkUA4yPHqa+fWjhPV5RB5BWEYo2KPJtj2oO4lQjbm+EZUJ8N6oHG8VglmM4vq2x/D4FqhHGUD0GMoYQgiCbTLUf7FktHUDyLvAw5X21gCRcZTPwe+UdP8QgNa+lCDimhDpARpAf8bXVxiJnRB2Tt+cgoA0lu7yNKxCGcLJEQJ3QDL9Y3+7Heo9pMn2pxG3GVgNGkW5DBwkHTos7M5XHu8WobIE0W4Ug1LEM6uJj15gkunb4lBSRmm2s8mdgsw29l9TcMvhXdSikSSx/BXGow140+PksNQxRQcF+vCklaKmCNNJkX0YMhgGY/VYfx4N+UskcJxGAAdUA1lJ4WZnIEUNofhanH8JQmGqJq6Sj67CSoCVKxRlJRr8DtyP6gC4KsQmsHod8aKoX0LsbA2oQYJJCvnLkiJ350E0UxEsgd4gyE1g1VKkCjEXMQygzkN8HzE+IbmAsVlM2GJNDfnQOLnJQdSbQHIjgCOQAGuyZRKzl2q5Q/T2lG6KfYt5+mY8Ofd/N6c5/S/1J0g15d7sX0t9AAAAAElFTkSuQmCC',
      'searchUrl': 'https://3changtrai.com/torrents.php?incldead=0&spstate=0&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Không tìm thấy/,
      'both': true},
  {   'name': '3CT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEcUlEQVRYw+2WS2xUVRjHf985d2Y6naFlWqYFAVEiMRghCkRiXDUkJJi4EOmCRBcm2tbGxp0GXXTYSNUFaiOlTUOIjxgl6kIRNiiIiTFGQkAIGF4BSunUMn1O53Hv+VzM6JQAWlbGpP/kJicnX875n9/3yIU5zWlO/7EEQGkJETcJosbcElHQvIz1ZGZuKc1hGmsXg2nAV4fqIDeWXBNSThMttXhetBSYM0iVK619Kd3oKQDDkTFh53TJQH3LeqzpQagC1Rk3eSDfk3YdQl9RabY0LmgCfRF0OcrXIBuBRkS/wJduPOlA3WaEAirnERaDxlDSQBbhPhDF6XYZ7v3MK4OII/ogSHUZSoWPchLuKZlK1j8D7gOgBnhV0r3vaWPLOZA+kNfwWA4aQWQBqt04dxgjHyKyBLhK4FJYeRnRLQgJAK/yWskgnEL1LOAQeQrVYzizQ0j5Wte+FAm2gSwAvqPg9gIwVPiShsgmRJ8E+QlYiXOtMty3T5OtK2YkzjESOQ68QEPxHKIOoJRza4aBDphqAk2BWNA+soWt8kfPrwCEgk3AKgAC2S+ZvrESpL05fHZQtFsZGnmfvNkF3oE7F113noB+VA9VCKR7Tgqc0GT7A4jrQhgA/Qpb5QNoy9oQ37gmAmsR8iweGtbtLGQyWib40SjhbIap6EJi00OMUSD1D5U/snvgr7VXTrVqXetDSNALrAeZBHmWiDurda2dyA+XiGefYLQGrB9i/akuxuMpdEa9TM8r8czG84SlFSaOzqYNK23nsQaRUUSOoyogdYg8jjVvc/beZSDldhJDPmRBCyjFmz7wEXwcOts5UCnCdO8n0PwpiUScsKwD7QJZh3ErOLM0DPILostwBo6s2c+jv71OIVZBUJxS4jgmYgZ/MnP3BkhZIeWTYQw4pMm2dxD9GGGaQK6BPYphCwDZ6g1sb18hmV0/VkZGKsz8wZWMhs8I3YW7MqCNz8XQwU7VtqugBxhedB4ZvALkUA4yPHqa+fWjhPV5RB5BWEYo2KPJtj2oO4lQjbm+EZUJ8N6oHG8VglmM4vq2x/D4FqhHGUD0GMoYQgiCbTLUf7FktHUDyLvAw5X21gCRcZTPwe+UdP8QgNa+lCDimhDpARpAf8bXVxiJnRB2Tt+cgoA0lu7yNKxCGcLJEQJ3QDL9Y3+7Heo9pMn2pxG3GVgNGkW5DBwkHTos7M5XHu8WobIE0W4Ug1LEM6uJj15gkunb4lBSRmm2s8mdgsw29l9TcMvhXdSikSSx/BXGow140+PksNQxRQcF+vCklaKmCNNJkX0YMhgGY/VYfx4N+UskcJxGAAdUA1lJ4WZnIEUNofhanH8JQmGqJq6Sj67CSoCVKxRlJRr8DtyP6gC4KsQmsHod8aKoX0LsbA2oQYJJCvnLkiJ350E0UxEsgd4gyE1g1VKkCjEXMQygzkN8HzE+IbmAsVlM2GJNDfnQOLnJQdSbQHIjgCOQAGuyZRKzl2q5Q/T2lG6KfYt5+mY8Ofd/N6c5/S/1J0g15d7sX0t9AAAAAElFTkSuQmCC',
      'searchUrl': 'https://3changtrai.com/viewrequests.php',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'mPOST': 'query=%search_string_orig%+%year%&action=list&finished=no',
      'matchRegex': /Không tìm thấy/,
      'both': true},
  {   'name': 'AB',
      'searchUrl': 'https://animebytes.tv/torrents.php?searchstr=%search_string%&action=advanced&search_type=title&tags=-lolicon+-shotacon+&sort=relevance&way=desc&hentai=0&showhidden=1&anime%5Btv_series%5D=1&anime%5Btv_special%5D=1&anime%5Bmovie%5D=1&anime%5Bova%5D=1&anime%5Bona%5D=1&anime%5Bdvd_special%5D=1&anime%5Bbd_special%5D=1&airing=2',
      'loggedOutRegex': /Forgot your username|Ray ID/,
      'matchRegex': /Translation: No search results/,
      'both': true},
  {   'name': 'ACM',
      'searchUrl': 'https://asiancinema.me/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password|Ray ID/,
      'matchRegex': /<tbody class="torrent-list">\s*<\/tbody>/,
      'both': true},
  {   'name': 'ACM-Req',
      'searchUrl': 'https://asiancinema.me/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Forgot Your Password|Ray ID/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'AE',
      'icon': 'data:image/gif;base64,R0lGODlhEAAQAJEAAP58fP+VrgAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ2RjU5Q0FCRDQyMTFFQkJGRjVEN0ZENTc4N0Y4Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ2RjU5Q0JCRDQyMTFFQkJGRjVEN0ZENTc4N0Y4Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDZGNTlDOEJENDIxMUVCQkZGNUQ3RkQ1Nzg3RjhDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDZGNTlDOUJENDIxMUVCQkZGNUQ3RkQ1Nzg3RjhDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTD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',
      'searchUrl': 'http://www.arenaelite.eu/?p=torrents&pid=10&keywords=%tt%&search_type=description',
      'loggedOutRegex': /Cloudflare|Ray ID|Zaboravili ste lozinku/,
      'matchRegex': /Nema rezultata/,
      'both': true},
  {   'name': 'Aither',
      'searchUrl': 'https://aither.cc/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Aither-Req',
      'searchUrl': 'https://aither.cc/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Anasch',
      'icon': 'https://anasch.cc/style/theme_dark/favicon.ico',
      'searchUrl': 'https://anasch.cc/index.php?page=torrents&search=%search_string%+%year%&category[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'positiveMatch': true,
      'matchRegex': /download.png/},
  {   'name': 'Anasch',
      'icon': 'https://anasch.cc/style/theme_dark/favicon.ico',
      'searchUrl': 'https://anasch.cc/index.php?page=torrents&search=%search_string%&category[]=2',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'positiveMatch': true,
      'matchRegex': /download.png/,
      'TV': true},
  {   'name': 'Anasch-Req',
      'icon': 'https://anasch.cc/style/theme_dark/favicon.ico',
      'searchUrl': 'https://anasch.cc/index.php?page=requests&action=search&title=%search_string_orig%&hfilled=on&htaken=on',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'positiveMatch': true,
      'matchRegex': /Coming Soon/,
      'both': true},
  {   'name': 'ANT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAALcElEQVR42u1d+3NU1R1PK30japW21JZip1otrVS0iooY21FKmUCSzTqDNAojpRqakIcQkNbGDoIKlsirEOKjWJpKEDstta2tkxmE3c2+iBRpmf7YP+Tbz+fmJpy9ex/nnN1NzMKdOZN9nb17Pvf7+Hwf56amZpKP9oxsac/KBZOxPi/d6nesz8nTyvuHOrLynYKTiHysploPGwBVgLqzchW+I+MD8s+f+kA+V1PthwWAg+p8gPlY4GdzcqI1I7ddBrAQlJUF6puVdyPmnG/Py4rLAFIts5Lvysp149KXk/sM5j5zGcC87PQ4j1cN1X+/egEuPRXOSO3YPDiIG0ydjyuJL1cVgFjQTk3b94/4UbliXH3z8qwxeDnJVp1TwcKWtmVlG4DcjgUeh8Efwmv/8QFw3dicJ8/KNXh+1hTAtpzcXt2cBoR34ym5siMtcwFkExa9g46Di+9My1fHpTYjj1uob30B/UnL/XjtparniR0jcj1s371jzwmwK6X6qpuRR9Xv7ByRm8YuDEZvzaV0gDg/ZMgb2wtMxhmZg9cSns9svWQAdFW8jlGGBoA7PPZ2FuadDPDwzdWPnpIUiItcAafzEyz+XIDH7VOntnwo0wHeOxGAz/9IJR/iaflSw7Dc3ZCUxxoSsqEhJS82pmRfY1L68bgPoxevb8f73Y0JeaQ+IXc2npRZJudozcs82LO/eOPltVn5xNhneoZkGsB7M1JiYVtXDcmnJx24WEJuBkgvYBwHYG8bjj9g/KpxWJYuS8kXdc4HsD5Lj+ras4Q32gDA/QY2c/LtYR0WBOl6EADutgBQHQOxYflZLCU39oh8PJKUZ2RDW1ru8YC3z5jy5OXuiVPTrFzF4ffeknfkU1DLegB5xArApBzD3wP4u2pJSmYYk/ScvGAZ7v1NjXoqdmBxC2jLaNPwuCmekM8HgDwbn+lxQdmPOZvwuAtjpw9wh/kebOP9+L7rdSSvpBAxOGpZXWnwmr2LhzN4na/7AUmvGTslcwuMNLwdHQfmvYx52+pT8hCczrVlChHXlAIgR+sH8pWyA0e1dKUnTPX6AcwPdL9T9ZhhFIYXJpaVmyHBC+uTsiTKY0IKuyzBG8b4BTz8zLKCx4UCoM26NgyStaXxtHzN2r6elJkAqjaWlCfhSHYAuDc859gc/1A+GQoiExT62ZrT+NtakZwhbREW8JSFIzjUbFDcoQpTunCuZ3WcD/llGPFtgwfXcBpDHTlZyyxPZTwtPBLJsKUn3a3r0RzgkkVSpiPpKyPs4eYA8N5dn5dHySMD5s0CuHeVDGAtbI1DJ+y43D7d0IjSZMsZ6YxCibZS+nQil5ysDLKhzNbg/Y1MwJbNmThhlsXCQIRX6ABI5wS13WsLIKSwb2UIV+zIynqA8R6AXMHQzk/LmCNkyh/gnfdEJ6vKosr4kR0GC3qzKa3vieNDMh3h2/5SIhec84lAAP8nn2n1AbgF8bpDeXLypxDn0mdt+wqeg0bApr2msZhXlyc87RU6MfQoRTlqDSDmLlcy1xF2cT5A6wE4aQ0PnesOiLbCyXJS1sArzitQ5ZTcjiv9VigHTMocHwdRy4xLnNzKVen6IbnaS0PoSEqRQsbOoQnZtNQBtAGLfpxFpgmB65xYNCl7vMYWQDQESMArsffl6z7gPayo2e9wUV7CZ7fjOaW5y4fKdJQghb+vC+FxGjnBoLHG1GnUK1K1xscettFwk8wyn4exdVlCvuE1AZjbqkF1lnlNhRsWvm1JnZYF8sKsPGGVYPAU9XUcxlbPD3vAQ22mhRFkhzvqS9Lg8pR8q+D8TIfZO5Pngzx/e1q+ayWBOTmsD95p+QIWMOD1qkwGaOcDk9JpqHq9pDJq7OtEI3ZqPMA1+Gaw/yszYAOTFiCmOgKyTX7O494g76qTJa47JbOtHEBaHi7wygjD8PoxSxAXhtjB1ywAPAeOOFsPQHjLkARnNCu3l54Bgu8xJd2Wqtwckrl+zgLA85j3TV371x1wVfdqpZ5GbdhqK8lhcqDQI98USpuCHcnGEAlst7KDeVlSo7n4F4MyK3UBgbdPwrXFNo3vpUJuBttUhXeEkOillgA26drA3QHe7S0/kuxLg1Ly4xIIcZfn98y3AHBvIIAZqbVK8yOe1gWwP5Tpa2ZX8Nk7SJotABxUQzInkZs0jJOxhkAueEZuhCfewwF13hU5stLL5kwA+ICuCveF/LhtJpV7hmpuZe5QKTk+PjeUQLsEQFmyLuBkgT/utHzPbw5JdWNaFgUlEQDkdDiIH+I7dmkC+JtaJYQkr3PLCQc1Qdw1aQBSyoIYvlpmdFs3tjpx7ZjaJ+U400pBJU6qI0C+x02ehmZ2YoniblI6Mby+WCPdHxp6sUrY04O1UJs0BnOIzuc1JXBTgPQt8tjKVWE2CDZwcVjRhwV5El7mGSlxjHaU+c/FQ1JIIN1z3TYQ70V+gxeU5w4pNN3K4jkz0xh/jhpuJ9jftWkMs8h+gKgUhqkovP5bnZqI0+dySq6MKBtMo+NwivWwdyyqa1zo5S5hb+FjJ9WmUVe2pjE5adRTYdg5H6O8WielFTIOYnFx0+6rShwAo9MmEmGtJLpdLCUznGRCoTodjyupKqfEmZRf2zYMsc2DDkW3+6rsAFr0zECV/6VfXILRdFrMLgK4p1YpxDhBvl3rWnHWZFQFm2NJuYs9NLqRTlAWiL8tLGvENJtWr2DxeM9o86JLOXwTqtY1Yp0asm7ATjt8Rq4Gx6S9bidzcBO8JPv1IerLNt8RCwnsN0/puzlBGmfV2LvNQGUDjuaCNjaum2+7qAlr/bq7wsqbtmEct88aqwTDNmeBimdrxBUspXLmk315xlsKMMhZHjMpbbr14U2WNZF682J6UuZQNdTyZtOw3FcW4HgRQG+CiuywiXUk7jQlKpfkYzdfOegnyd58ote2c8uYjQfuyBQXy7ScSYwTldg3QG1MxwF4+m/7nbIpjSjF4+Hx/JZxAPMyMyhLHdUjAzu20JL/nShfnFxcbDJWWb+yI9V4vIvVG9IpGwSXvi/X+FbskrI/yoM72RcbADOypSzg0YGU0GTkeHPGoH4en/VcncYhRjR+6TbV0fkd3B4LAP9tA2DHSHDjkpn0wZlYN4wn5PEiqSMYoxQkqtvgjoIQsri9pEmDPO+y8r45+WfZGs5Zn7ACb1h+6qeysKdadEhNkTF68UhrS2R0lZd5tn3S9Npls3/u/g/T+kTRArkRR7vzgOmx4YsxKKuC40WmYXlap8hVQjvHhVZPwb/kw+2T7tKtbXi3KbADwbALdVDts3ZrxaRB63TAK4H30fu+UplonPTGL+Wl2i2op9crUhV9GsWjxmE1L4jvvTWKrozXPjLyo5K2Oij7lCuVuV7g55VJaOOe6IKlSnZmWRDuXpWH6tal6TmLOk3NbN/RCUkNMe50+giV8I49fkXe1nbfXNI8BmVjuE3CoCLURVsaYadISWibito8LNszqO5hqfkQtT1X4i6lQzUfiWM0r9hsKHFHWKhij1/ccKcQJK+l1O1dJNvr8vabgyoB4AIG/5CkDU5ygKkw1ohHx27uK3Y2Y8MxOHFwQFtaKHDghlDZA6WC54wzhp2oU/2A1MXdLVoXyiB9A5cMcJC479s0i4dwvrMb8/LlqgaNhW2AthgLfr1swI01DuWVPS3VdsdLSMctvPUTFnqi3MAZdV1NlYMpL94kzLnFU04OVwI0BbxtUxosRhbrhuVa3hiMOyd5s5z26LtSlsvuHZzy0tY5Ire5O8QvTOSA9z4yITeWqPQBVb1zosFjpOG3Y3NqOghu+ptYyauuO1hOKIA5+WX1EeIJAhCS90h1RhQVBhDE+690VNUbklUQQN6olre9q+6YtjIA/tF7E7LLAOrtJBri3Tj8iveXAYxofmQebzL+e8P/AVg19tb96VooAAAAAElFTkSuQmCC',
      'searchUrl': 'https://anthelion.me/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /You appear to have cookies disabled./,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'ANT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAALcElEQVR42u1d+3NU1R1PK30japW21JZip1otrVS0iooY21FKmUCSzTqDNAojpRqakIcQkNbGDoIKlsirEOKjWJpKEDstta2tkxmE3c2+iBRpmf7YP+Tbz+fmJpy9ex/nnN1NzMKdOZN9nb17Pvf7+Hwf56amZpKP9oxsac/KBZOxPi/d6nesz8nTyvuHOrLynYKTiHysploPGwBVgLqzchW+I+MD8s+f+kA+V1PthwWAg+p8gPlY4GdzcqI1I7ddBrAQlJUF6puVdyPmnG/Py4rLAFIts5Lvysp149KXk/sM5j5zGcC87PQ4j1cN1X+/egEuPRXOSO3YPDiIG0ydjyuJL1cVgFjQTk3b94/4UbliXH3z8qwxeDnJVp1TwcKWtmVlG4DcjgUeh8Efwmv/8QFw3dicJ8/KNXh+1hTAtpzcXt2cBoR34ym5siMtcwFkExa9g46Di+9My1fHpTYjj1uob30B/UnL/XjtparniR0jcj1s371jzwmwK6X6qpuRR9Xv7ByRm8YuDEZvzaV0gDg/ZMgb2wtMxhmZg9cSns9svWQAdFW8jlGGBoA7PPZ2FuadDPDwzdWPnpIUiItcAafzEyz+XIDH7VOntnwo0wHeOxGAz/9IJR/iaflSw7Dc3ZCUxxoSsqEhJS82pmRfY1L68bgPoxevb8f73Y0JeaQ+IXc2npRZJudozcs82LO/eOPltVn5xNhneoZkGsB7M1JiYVtXDcmnJx24WEJuBkgvYBwHYG8bjj9g/KpxWJYuS8kXdc4HsD5Lj+ras4Q32gDA/QY2c/LtYR0WBOl6EADutgBQHQOxYflZLCU39oh8PJKUZ2RDW1ru8YC3z5jy5OXuiVPTrFzF4ffeknfkU1DLegB5xArApBzD3wP4u2pJSmYYk/ScvGAZ7v1NjXoqdmBxC2jLaNPwuCmekM8HgDwbn+lxQdmPOZvwuAtjpw9wh/kebOP9+L7rdSSvpBAxOGpZXWnwmr2LhzN4na/7AUmvGTslcwuMNLwdHQfmvYx52+pT8hCczrVlChHXlAIgR+sH8pWyA0e1dKUnTPX6AcwPdL9T9ZhhFIYXJpaVmyHBC+uTsiTKY0IKuyzBG8b4BTz8zLKCx4UCoM26NgyStaXxtHzN2r6elJkAqjaWlCfhSHYAuDc859gc/1A+GQoiExT62ZrT+NtakZwhbREW8JSFIzjUbFDcoQpTunCuZ3WcD/llGPFtgwfXcBpDHTlZyyxPZTwtPBLJsKUn3a3r0RzgkkVSpiPpKyPs4eYA8N5dn5dHySMD5s0CuHeVDGAtbI1DJ+y43D7d0IjSZMsZ6YxCibZS+nQil5ysDLKhzNbg/Y1MwJbNmThhlsXCQIRX6ABI5wS13WsLIKSwb2UIV+zIynqA8R6AXMHQzk/LmCNkyh/gnfdEJ6vKosr4kR0GC3qzKa3vieNDMh3h2/5SIhec84lAAP8nn2n1AbgF8bpDeXLypxDn0mdt+wqeg0bApr2msZhXlyc87RU6MfQoRTlqDSDmLlcy1xF2cT5A6wE4aQ0PnesOiLbCyXJS1sArzitQ5ZTcjiv9VigHTMocHwdRy4xLnNzKVen6IbnaS0PoSEqRQsbOoQnZtNQBtAGLfpxFpgmB65xYNCl7vMYWQDQESMArsffl6z7gPayo2e9wUV7CZ7fjOaW5y4fKdJQghb+vC+FxGjnBoLHG1GnUK1K1xscettFwk8wyn4exdVlCvuE1AZjbqkF1lnlNhRsWvm1JnZYF8sKsPGGVYPAU9XUcxlbPD3vAQ22mhRFkhzvqS9Lg8pR8q+D8TIfZO5Pngzx/e1q+ayWBOTmsD95p+QIWMOD1qkwGaOcDk9JpqHq9pDJq7OtEI3ZqPMA1+Gaw/yszYAOTFiCmOgKyTX7O494g76qTJa47JbOtHEBaHi7wygjD8PoxSxAXhtjB1ywAPAeOOFsPQHjLkARnNCu3l54Bgu8xJd2Wqtwckrl+zgLA85j3TV371x1wVfdqpZ5GbdhqK8lhcqDQI98USpuCHcnGEAlst7KDeVlSo7n4F4MyK3UBgbdPwrXFNo3vpUJuBttUhXeEkOillgA26drA3QHe7S0/kuxLg1Ly4xIIcZfn98y3AHBvIIAZqbVK8yOe1gWwP5Tpa2ZX8Nk7SJotABxUQzInkZs0jJOxhkAueEZuhCfewwF13hU5stLL5kwA+ICuCveF/LhtJpV7hmpuZe5QKTk+PjeUQLsEQFmyLuBkgT/utHzPbw5JdWNaFgUlEQDkdDiIH+I7dmkC+JtaJYQkr3PLCQc1Qdw1aQBSyoIYvlpmdFs3tjpx7ZjaJ+U400pBJU6qI0C+x02ehmZ2YoniblI6Mby+WCPdHxp6sUrY04O1UJs0BnOIzuc1JXBTgPQt8tjKVWE2CDZwcVjRhwV5El7mGSlxjHaU+c/FQ1JIIN1z3TYQ70V+gxeU5w4pNN3K4jkz0xh/jhpuJ9jftWkMs8h+gKgUhqkovP5bnZqI0+dySq6MKBtMo+NwivWwdyyqa1zo5S5hb+FjJ9WmUVe2pjE5adRTYdg5H6O8WielFTIOYnFx0+6rShwAo9MmEmGtJLpdLCUznGRCoTodjyupKqfEmZRf2zYMsc2DDkW3+6rsAFr0zECV/6VfXILRdFrMLgK4p1YpxDhBvl3rWnHWZFQFm2NJuYs9NLqRTlAWiL8tLGvENJtWr2DxeM9o86JLOXwTqtY1Yp0asm7ATjt8Rq4Gx6S9bidzcBO8JPv1IerLNt8RCwnsN0/puzlBGmfV2LvNQGUDjuaCNjaum2+7qAlr/bq7wsqbtmEct88aqwTDNmeBimdrxBUspXLmk315xlsKMMhZHjMpbbr14U2WNZF682J6UuZQNdTyZtOw3FcW4HgRQG+CiuywiXUk7jQlKpfkYzdfOegnyd58ote2c8uYjQfuyBQXy7ScSYwTldg3QG1MxwF4+m/7nbIpjSjF4+Hx/JZxAPMyMyhLHdUjAzu20JL/nShfnFxcbDJWWb+yI9V4vIvVG9IpGwSXvi/X+FbskrI/yoM72RcbADOypSzg0YGU0GTkeHPGoH4en/VcncYhRjR+6TbV0fkd3B4LAP9tA2DHSHDjkpn0wZlYN4wn5PEiqSMYoxQkqtvgjoIQsri9pEmDPO+y8r45+WfZGs5Zn7ACb1h+6qeysKdadEhNkTF68UhrS2R0lZd5tn3S9Npls3/u/g/T+kTRArkRR7vzgOmx4YsxKKuC40WmYXlap8hVQjvHhVZPwb/kw+2T7tKtbXi3KbADwbALdVDts3ZrxaRB63TAK4H30fu+UplonPTGL+Wl2i2op9crUhV9GsWjxmE1L4jvvTWKrozXPjLyo5K2Oij7lCuVuV7g55VJaOOe6IKlSnZmWRDuXpWH6tal6TmLOk3NbN/RCUkNMe50+giV8I49fkXe1nbfXNI8BmVjuE3CoCLURVsaYadISWibito8LNszqO5hqfkQtT1X4i6lQzUfiWM0r9hsKHFHWKhij1/ccKcQJK+l1O1dJNvr8vabgyoB4AIG/5CkDU5ygKkw1ohHx27uK3Y2Y8MxOHFwQFtaKHDghlDZA6WC54wzhp2oU/2A1MXdLVoXyiB9A5cMcJC479s0i4dwvrMb8/LlqgaNhW2AthgLfr1swI01DuWVPS3VdsdLSMctvPUTFnqi3MAZdV1NlYMpL94kzLnFU04OVwI0BbxtUxosRhbrhuVa3hiMOyd5s5z26LtSlsvuHZzy0tY5Ire5O8QvTOSA9z4yITeWqPQBVb1zosFjpOG3Y3NqOghu+ptYyauuO1hOKIA5+WX1EeIJAhCS90h1RhQVBhDE+690VNUbklUQQN6olre9q+6YtjIA/tF7E7LLAOrtJBri3Tj8iveXAYxofmQebzL+e8P/AVg19tb96VooAAAAAElFTkSuQmCC',
      'searchUrl': 'https://anthelion.me/requests.php?submit=true&search=%search_string%&showall=on',
      'loggedOutRegex': /You appear to have cookies disabled./,
      'matchRegex': /Nothing found/},
  {   'name': 'AR',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAS1BMVEUAAAAAi/8ARf8Ac+cAc/8AXP8AXLkAov8Ac9AAXKIARecALtAARaIALqIALrkARYsAXNAALucARdAXLqIALosAXOcARbkXF6IAF4vk/L6tAAAAAXRSTlMAQObYZgAAAYFJREFUSMft1dt2wiAQBdBhYALkXrWX///SCkMjxsVA8tS12vPgg7g9MQwR/niu13Puk+gcRMThLMQz7i3A+QSkGPh9Udaqp9gYxe9qt0i425TW4UXl0ZL0/BneiwkwBiB9gyS37x4CmCKcMilDFwsHgK0SGOo6nBGBexl6vkcVuMYqHoIAe14QoQnLXQA3gNdr9UWoeXmb7hshnxEXYVeDFD6bV6YtdjIc4THbc9oR3wIXoB7guXKxTdDAlp4h2LZL3T0HLjDa+s2xI7ztYN+6HY/wwH5BmpxmyJXvMEVnKrDbQ0iFyzEoHQ4ZrooDB6FjhtAOfbdqlRi2Q2XVFoMVafLGzsfbOLbAl1OXy6neuJdWKblyMMV9NCKkAgw7Iv3Nzpjg0UoqQs2Vc6mwCEcrVWIZgjQ9swRX4VciIkW4wqHK4adQudJoGEIsFJYP7MqV9LLQI5JKGQvnJlYu+WC4C2IGlXbO+Ww5Kq5Ewo/p+ZGSMa2zC/bZsezvuWP4j5xvvSUKGqCTCrMAAAAASUVORK5CYII=',
      'searchUrl': 'https://alpharatio.cc/torrents.php?searchstr=%search_string%+%year%&tags_type=1&order_by=time&order_way=desc&filter_cat%5B8%5D=1&filter_cat%5B9%5D=1&filter_cat%5B10%5D=1&filter_cat%5B11%5D=1&filter_cat%5B12%5D=1&filter_cat%5B13%5D=1&filter_cat%5B15%5D=1&action=advanced&searchsubmit=1',
      'loggedOutRegex': /Ray ID|<title>Login :: AlphaRatio|Something was wrong/,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'AR',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAS1BMVEUAAAAAi/8ARf8Ac+cAc/8AXP8AXLkAov8Ac9AAXKIARecALtAARaIALqIALrkARYsAXNAALucARdAXLqIALosAXOcARbkXF6IAF4vk/L6tAAAAAXRSTlMAQObYZgAAAYFJREFUSMft1dt2wiAQBdBhYALkXrWX///SCkMjxsVA8tS12vPgg7g9MQwR/niu13Puk+gcRMThLMQz7i3A+QSkGPh9Udaqp9gYxe9qt0i425TW4UXl0ZL0/BneiwkwBiB9gyS37x4CmCKcMilDFwsHgK0SGOo6nBGBexl6vkcVuMYqHoIAe14QoQnLXQA3gNdr9UWoeXmb7hshnxEXYVeDFD6bV6YtdjIc4THbc9oR3wIXoB7guXKxTdDAlp4h2LZL3T0HLjDa+s2xI7ztYN+6HY/wwH5BmpxmyJXvMEVnKrDbQ0iFyzEoHQ4ZrooDB6FjhtAOfbdqlRi2Q2XVFoMVafLGzsfbOLbAl1OXy6neuJdWKblyMMV9NCKkAgw7Iv3Nzpjg0UoqQs2Vc6mwCEcrVWIZgjQ9swRX4VciIkW4wqHK4adQudJoGEIsFJYP7MqV9LLQI5JKGQvnJlYu+WC4C2IGlXbO+Ww5Kq5Ewo/p+ZGSMa2zC/bZsezvuWP4j5xvvSUKGqCTCrMAAAAASUVORK5CYII=',
      'searchUrl': 'https://alpharatio.cc/torrents.php?searchstr=%search_string%&tags_type=1&order_by=time&order_way=desc&filter_cat%5B1%5D=1&filter_cat%5B2%5D=1&filter_cat%5B3%5D=1&filter_cat%5B4%5D=1&filter_cat%5B5%5D=1&filter_cat%5B6%5D=1&filter_cat%5B7%5D=1&action=advanced&searchsubmit=1',
      'loggedOutRegex': /Ray ID|<title>Login :: AlphaRatio|Something was wrong/,
      'matchRegex': /Your search did not match anything/,
      'TV': true},
  {   'name': 'AR-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAS1BMVEUAAAAAi/8ARf8Ac+cAc/8AXP8AXLkAov8Ac9AAXKIARecALtAARaIALqIALrkARYsAXNAALucARdAXLqIALosAXOcARbkXF6IAF4vk/L6tAAAAAXRSTlMAQObYZgAAAYFJREFUSMft1dt2wiAQBdBhYALkXrWX///SCkMjxsVA8tS12vPgg7g9MQwR/niu13Puk+gcRMThLMQz7i3A+QSkGPh9Udaqp9gYxe9qt0i425TW4UXl0ZL0/BneiwkwBiB9gyS37x4CmCKcMilDFwsHgK0SGOo6nBGBexl6vkcVuMYqHoIAe14QoQnLXQA3gNdr9UWoeXmb7hshnxEXYVeDFD6bV6YtdjIc4THbc9oR3wIXoB7guXKxTdDAlp4h2LZL3T0HLjDa+s2xI7ztYN+6HY/wwH5BmpxmyJXvMEVnKrDbQ0iFyzEoHQ4ZrooDB6FjhtAOfbdqlRi2Q2XVFoMVafLGzsfbOLbAl1OXy6neuJdWKblyMMV9NCKkAgw7Iv3Nzpjg0UoqQs2Vc6mwCEcrVWIZgjQ9swRX4VciIkW4wqHK4adQudJoGEIsFJYP7MqV9LLQI5JKGQvnJlYu+WC4C2IGlXbO+Ww5Kq5Ewo/p+ZGSMa2zC/bZsezvuWP4j5xvvSUKGqCTCrMAAAAASUVORK5CYII=',
      'searchUrl': 'https://alpharatio.cc/requests.php?submit=true&search=%search_string_orig%&showall=on',
      'loggedOutRegex': /Ray ID|<title>Login :: AlphaRatio|Something was wrong/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'ArabScene',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJ1BMVEUAAACbFhq2Gx67Gx+oGRz////mIieFFBfDdHWvTlH05ubnycrYo6RuB1yYAAAAAXRSTlMAQObYZgAAAW9JREFUSMft0T9Pg1AUBXCcXH2JCYNO2kGNm58Achtb7XoSCszOMj1ZG4zYuGja+Gcuk47tYt2UxU/l5S2Vd+mgg0kTz/JuOD8e8HBMzhpjqj8DR41ZObDblJ/ssNOYf/BLsJ/nd4tBgsMCCN952JvxMKgDIupyz8WIqAQnJqI6OACeX4E+dYGXT2BkgxKB1kOErR5irWf4sIAPXCmVAtkp+ko9zTMLdBAmRMclJgyIXL1pgR4CvkRt9HsIM/KUDar7OFuIOwDeBkQWOKmAeZJXArzJEkDA7UXBIloCPP4+N71hkol3CKjKJSae1mmBqfiKyIB2BZUeY2KBrtnUn26bQ/baAvDDA/KHgQLiFvklpjYYA1GBqFrDeWH/LGV+A9iolEtOnChVB+521d8rl4/BDDZQOs2vteY1ecgfdSIANxyzmsECIqsIkqbedYQQvRCyX2St3m84Iuvf+3PZsxC9EKIXQvQi1vk0JHGdFcwXcSQMGaE3B04AAAAASUVORK5CYII=',
      'searchUrl': 'http://arabscene.me/browse.php?do=search&keywords=%search_string_orig%+%year%&search_type=t_name&category=0&include_dead_torrents=no',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'positiveMatch': true,
      'matchRegex': /\/dl.png/},
  {   'name': 'ArabScene',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAJ1BMVEUAAACbFhq2Gx67Gx+oGRz////mIieFFBfDdHWvTlH05ubnycrYo6RuB1yYAAAAAXRSTlMAQObYZgAAAW9JREFUSMft0T9Pg1AUBXCcXH2JCYNO2kGNm58Achtb7XoSCszOMj1ZG4zYuGja+Gcuk47tYt2UxU/l5S2Vd+mgg0kTz/JuOD8e8HBMzhpjqj8DR41ZObDblJ/ssNOYf/BLsJ/nd4tBgsMCCN952JvxMKgDIupyz8WIqAQnJqI6OACeX4E+dYGXT2BkgxKB1kOErR5irWf4sIAPXCmVAtkp+ko9zTMLdBAmRMclJgyIXL1pgR4CvkRt9HsIM/KUDar7OFuIOwDeBkQWOKmAeZJXArzJEkDA7UXBIloCPP4+N71hkol3CKjKJSae1mmBqfiKyIB2BZUeY2KBrtnUn26bQ/baAvDDA/KHgQLiFvklpjYYA1GBqFrDeWH/LGV+A9iolEtOnChVB+521d8rl4/BDDZQOs2vteY1ecgfdSIANxyzmsECIqsIkqbedYQQvRCyX2St3m84Iuvf+3PZsxC9EKIXQvQi1vk0JHGdFcwXcSQMGaE3B04AAAAASUVORK5CYII=',
      'searchUrl': 'http://arabscene.me/browse.php?do=search&keywords=%search_string_orig%&search_type=t_name&category=0&include_dead_torrents=no',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /\/dl.png/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'ASC',
      'searchUrl': 'https://cliente.amigos-share.club/busca-filmes.php?search=&imdb=%tt%',
      'matchRegex': /Nenhum resultado/,
      'loggedOutRegex': /Cloudflare|Ray ID|equiv="refresh/},
  {   'name': 'ASC',
      'searchUrl': 'https://cliente.amigos-share.club/busca-series.php?search=&imdb=%tt%',
      'matchRegex': /Nenhum resultado/,
      'loggedOutRegex': /Cloudflare|Ray ID|equiv="refresh/,
      'TV': true},
  {   'name': 'AT',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://avistaz.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true},
  {   'name': 'AT',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://avistaz.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'AT-Req',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://avistaz.to/requests?search=%search_string_orig%&condition=new',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /Request Not Fulfilled/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'AveTor',
      'searchUrl': 'https://avetorrents.com/catalogue.php?cat=movies&tname=%search_string_orig%&year=%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Забравили сте си паролата/,
      'matchRegex': /Няма нищо намерено/,
      'both': true},
  {   'name': 'AySTor',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUbZWEegHv6/P0TQUAkkYwlnJYqsqwopqEqv7kty8VVfoHL5eY3wLo40sx2oqWZwcMUK6f+AAADKUlEQVQ4yz2Uz2sTQRTHZ7v+ol526NSDJ5neGkhXNyI0oCydJVK8SHdc9CbFSYVexO7OPyBhAz0qJNBAbW4Ve0iPBT1Y2yK5Cha6IM1NPTX/gN+3tb783PeZ73svy/eFMZ8xF8GYxxEeLgKEi7wL6OLd4TwEYAERn+H5LzgXKvwvYQFjm5Sm80op7kAf4MF8UpR5jnwccrSkaniRhCOiWBPwaBhqDonHqb5KtNYxJ+JjSlKUZSJt01RrxTkDQamAANKJbVprLwgANabjWWaMsTaNw5BGpqm4iBJrTN5qGdNsgmBmgFJAeQpCVAyAKkWZGR6td/I2IZA4ZBRcJNlweHLc7XY7HSBjtfKQ90RkkS8KEEJvXN9RHMQRjVfMuVx8Z0+7S5e774KdX65PtbjKgu3t/kd3u/b2fv/awgcpK6PQo9ZpXco5vy7HS6dz7n2JGAmPWj+/g0PBmZzxpRxvSVz4MUelZPmUwJasQDkaAMzW4pAUC3TRR3YgK/NS7k6Opkkx/WRSIsZI4SzeP/8MGimVsmW/XfeMuhKujO+thQA01JmcdSeoqwuAD1JEy1uyOiHnahDO3lu+XtbVUOjXOF6XldtTAzm+8TXY2ZPy1lWAiIbCc7OP0f58m3fpFzUUE40paEmOz9Hql63q9kDOTEPRmEQ3yHcZVEOaCt8j6vEAJYJTORMA7NdLMCKg0NhfmJDVYCA3T+bpLlRva85E+GBQra3VB5+C35XNYml+T871a/oxAKx95YUfkMXuFvsuOVrFj5nSXsAebkwxx3j+o+IghEEuRTHGhV3FaueFeJKn+mVxcqhgMw0wrdPU5u2WybudvFcUPw5skuh4kalGBrN1YJCi6PWOi+ONobGRipiAO1dWQHpFr0sOOjoAWHzGRJRlKyZvt5Gj6AwPDtNYKdxEi1qtPD9Pd4ZHBvmbi/AbFiNrwtPt0rvrcGi4KARAnCY2MWblwu60Ifw9QKTLdQJp5dgCS/vhlRZVotwoU4ZNaT2c8w0XIUiSZXR+jQQM4TP6C4GMiM1sjBXwmA/gQOJwIVScZLbcM49ReJwCMNTo04xDwRhu/eRfjvpGE79sZWUAAAAASUVORK5CYII=',
      'searchUrl': 'http://aystorrent.ro/browse.php?search=%search_string_orig%+%year%&blah=0&cat=0&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password/,
      'matchRegex': /Nothing found/},
  {   'name': 'bB',
      'searchUrl': 'https://baconbits.org/torrents.php?action=basic&filter_cat[9]=1&searchstr=%search_string%+%year%',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Your search was way too l33t/},
  {   'name': 'bB',
      'searchUrl': 'https://baconbits.org/torrents.php?action=basic&filter_cat[8]=1&filter_cat[10]=1&searchstr=%search_string%',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Your search was way too l33t/,
      'TV': true},
  {   'name': 'bB-Req',
      'searchUrl': 'https://baconbits.org/requests.php?search=%search_string%&cat[8]=on&cat[9]=on',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'BB-HD',
      'icon': 'https://bluebird-hd.org/pic/apple-touch-icon-57.png',
      'searchUrl': 'https://bluebird-hd.org/browse.php?search=&incldead=0&cat=0&dsearch=%tt%&stype=or',
      'loggedOutRegex': /Восстановление пароля|Bad Gateway/,
      'matchRegex': /Nothing found|Ничего не найдено/,
      'both': true},
  {   'name': 'BDC',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://broadcity.in/browse.php?do=search&search_type=t_genre&keywords=%tt%',
      'loggedOutRegex': /Recover Password|Şifre Sıfırlama|BunnyGuard|CloudBunny|>Fatal Error</,
      'matchRegex': /dl.png/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'BDC-Req',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://broadcity.in/viewrequests.php?do=search_request',
      'mPOST': 'do=search_request&keywords=%tt%',
      'loggedOutRegex': /Recover Password|Şifre Sıfırlama|BunnyGuard|CloudBunny|>Fatal Error</,
      'matchRegex': /report2.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'BestCore',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURR9Ayv///x9Ayt39jB8AAAACdFJOUwAAdpPNOAAAAHhJREFUKM+d0MENgCAMBVDi0fFM4MAI3acjcOBPqbYYP9EmRk48Au0vCbZ6PleKUV2O4lCDHRVGDnFdA1eLMTXdGF6Z8S9BGGeMvTIWQ6OmFgIt3XtgoDJAKCGE55HO4KaiETAhh9BP1eYEnK36J/AI+jLp8ejxITu06f0pcsC2EgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://best-core.info/browse.php?search=%search_string_orig%+%year%&c73=1&c70=1&c80=1&c81=1&c83=1&c77=1&c86=1&c76=1&c75=1&c74=1&c25=1&c24=1&c85=1&c21=1&c53=1&c20=1&c34=1&c90=1&c89=1&c82=1&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Probléma esetén írj nekünk/,
      'matchRegex': /Nem találtam semmit|cat_music_eng.png/},
  {   'name': 'BestCore',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURR9Ayv///x9Ayt39jB8AAAACdFJOUwAAdpPNOAAAAHhJREFUKM+d0MENgCAMBVDi0fFM4MAI3acjcOBPqbYYP9EmRk48Au0vCbZ6PleKUV2O4lCDHRVGDnFdA1eLMTXdGF6Z8S9BGGeMvTIWQ6OmFgIt3XtgoDJAKCGE55HO4KaiETAhh9BP1eYEnK36J/AI+jLp8ejxITu06f0pcsC2EgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://best-core.info/browse.php?search=%search_string_orig%&c54=1&c55=1&c58=1&c7=1&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Probléma esetén írj nekünk/,
      'matchRegex': /Nem találtam semmit|cat_music_eng.png/,
      'TV': true},
  {   'name': 'BHD',
      'searchUrl': 'https://beyond-hd.me/torrents/all?search=&doSearch=Search&imdb=%nott%',
      'loggedOutRegex': /FORGET PASSWORD/,
      'matchRegex': />N\/A</,
      'rateLimit': 625,
      'both': true},
  {   'name': 'BHD-Req',
      'searchUrl': 'https://beyond-hd.me/requests?imdb=%nott%',
      'loggedOutRegex': /FORGET PASSWORD/,
      'matchRegex': />N\/A</,
      'rateLimit': 625,
      'both': true},
  {   'name': 'BigBBS',
      'icon': 'data:image/gif;base64,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',
      'searchUrl': 'http://bigbbs.eu/?p=torrents&pid=10&keywords=%search_string_orig%&search_type=name',
      'loggedOutRegex': /Cloudflare|Ray ID|Odzyskaj hasło|zmienić hasło|change your password/,
      'matchRegex': /download.png/,
      'positiveMatch': true},
  {   'name': 'BitHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAXVBMVEUAAAD0cAD5jgD7rQD3hAD1egD7twL/zAD/owD6wQL+5QP+1gL/mQD0mQH0owD/6y/+7Vv+2h35zBPwsmL4ykbwlUX2rjb0ghz5qR70jg/s2KLujR70mBbtmB7qjgBSXCu/AAAAAXRSTlMAQObYZgAAAyJJREFUWMPl1utu4jAQBeBk7PiSjJ0LhC4t7fs/5p6ZJF1KKazza6U9ohUS8Glsj+1U/22GcULGcRz2G6NzMaqyn5mM00CC0+8yokFCkP/RRb9LGUMInEIWRaqZpvIRDYY5IcwhKxN9uRJTIglzRkmqTMUDMkTWqrLVEmNpKcdkNQIlXkuJhaX8ok9ElQzE+akMOdtGsjKcckYtJpUhjSAaUVLC5GZqzmXIm62buq43BRHVliEz2Vqj0PrOzlVZKDT1behQiLyL0nyByFaFebVZpuHa4ENVmgOxtVcMmbeqPBfiJIo61sDYkVOyFJgJScYkGDtyDMvvnZxNH6dqH5KZEmqhj/d3ELvyOnHOZPLl8OR7w9D3/YDcO9qcnka/nhHHKXovB/kd5LUzJgfHT4xxuQ18B+X7adM7ndFnp7lBRJk6ILfKEJ0Dw89uJhMQ4zCi78owOVHi4xk5mpCYc9a7oBNlGP4Qrfc+xuji46V1LL3ILApKaVvU0q6ftR1YZfzxYUtnJk2AEoGI4mMr6dZA8cPjw5ysvlIwn0qHN1IVsiqPkYtdQ5z/IFGILYr0j5AXa7eDPGyz0nlEesOvCpj2IVI3Er3fllI6jzoMWPA1RVGeIXMNBa+lFKPLGX1On31Rx0XpHyOIKB+UAxgZkzNXK1rT81I2RC/JkBdEjS3WQsGq/w2i97VU4qO7uY6pfbJA8xXC2nE3hSDWtNJw7c/NAmAdTlJEjVtFkNhiW/08IKylINJv0ZvTnb6OPkrTjCOc4SeFQMBw0QQY33KMXbfsADBwfmoW2YIhhF/3t6tuII0694s5oHNfXi4nEPeR5VjB38KgmOL0HQSjWU/jvlwZvXNAAgJHmB3KqAbmLOftebhcmQwMTDwjSfcGlKkQWcbCifUZH+VAGWMpAgMIBEoiZSAuFyIBRobAhDBljMw2VIikwIEhbLGy3c7Fj6EYhP7afj7M2rdCxAa+JjQ0FyIzhVvDnqvSNIk+vhgNz8XIoeEvT8RNfiklVEmoZCMowNilkDDLOZpg7Mt8DpmRwG9ztTuH0yXldH6fD/sNdZDqH81vCy4ugx8nIrEAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.bit-hdtv.com/torrents.php?search=%tt%&options=4',
      'loggedOutRegex': /Forgot your password/,
      'matchRegex': /No match!/},
  {   'name': 'BJS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+AQMAAABJDzoHAAAABlBMVEUAAADQDg5R1Yx2AAAAAXRSTlMAQObYZgAAAMBJREFUKM990LENAjEMBdA7UaTMBmQRdFkLJESyASulo2SFSBS0uS5FFBM7djiBdK5eYX99edoZI9B/UF5wZx2egfFgzO/IeA0kPlsHMuMiOAtORXDFMi1juSFa/HFhGNtgfWsGvDyg6oCtFrBZscV1OEZ22VUCZECopDKUjpWgo1517ogKYQCiZgSdGAZhAbyJDItwiNAxEaDBeUIVlAnwPwBZEGfpP3DoUG2doAWm3RHsBongNogE+MXcEL7Ymw9MWJLi/EtLCgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bj-share.info/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Recuperar senha/,
      'matchRegex': /Sem resultados/,
      'both': true},
  {   'name': 'Blu',
      'searchUrl': 'https://blutopia.xyz/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Blu-Req',
      'searchUrl': 'https://blutopia.xyz/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'BP',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAgPklEQVR42u09eXwUVdIdUHCVW24CmZ4kJNyHiLIg18qxeKGi+ImLggpCEHIxOQmnsJyrKArrKqIieAIeyCoe6HrtgiKiwKrIsh8CypXpHm7IV9VdL6l5ed3TEwKE3e+P+mXS/fp1d9V7dVe1po83tAoOCQADANIB5gOsBPgEYDPADoDdAPsIdtOxb2nMSromneZIqOjvWxEfqh3AgwBLAbYAFJUzbKG58R5t/58gargaYAbAV2eBAJEA7zmdnuG/miCxAAGADR4RdwrgXwAfA6wAmAVwN0AqwASCsQApAI8BvAbwN7rmlMd74LOMp2f7ryEIsqSFAGYE5GwHWAaQAdAXwA9wiTTXIICnAT4gmYG/e0hjqtK1fWguZFffR7i3Sc/Y7j+ZIG0Ano+ACFz9OQBXAVzsMlcTgE0u87wc4VkqAXSme30a4Zmep2f/jyFIfYAFEXh4LkCyx/mqEhuKxH7eiXKxTALY6jLfAnqXC5ogIwF+dXjBIEDPMsxZIM3zd4BeAPMU97i/DPNfDxByeGZ8lxEXIkFQ318TYQUfi2JXCKgJ8Is0Tyo7/450Du2RmCjv0QrgeIRnf/ts2TRngxjDHFYYCt2OAH9mx753mOMiEsQozOcApNHxaop509h1g6Vze9i5unR9pOfnAn8xqcMqTTBE71qhCfKk4sENgNFsTFPp/A3SHNeShlVEtgkS8AsizO8U809n194kndtIx9NJPiwH+CPAE8Tm5Oe/Wbo+np1Lddg5T1ZEgjRw0FZWAfgU45ezMV9KO6OQnUNiDAV4yoV9/I5d30I69zPAemJzqPLeJbG8gdJzbWPnliqeG+d/V/EMnxIOKgRBUFffpXjIgMs1zaWxfeh4DNkRaF/81YMmNVcx9zKHsejj2ou/4zKtHfg1wL3suluk8X6X55+omH9XedgtZ0qMawCOSA+2T1q1TvASu2a94nxLgA/p/E6yvMX4DwmB0bDOIh+AP2DsjQ+YKkt8Oxv7gofn/z3AIekeRwgn54UgvRQvjSpoZbfr/PS3abqR1Cwj7FonFThOskE4MqsD6MRKUDtKBLiUzt1AKnInEujjgCBp8QEjNjHLlO9xq/QecR5xUI3klIyHXueaIN0UD7GCztUhvp9MqwWt4VGIEICGvkxDS8gytHYFppaca6yE/8X1m1zudxlpXHeRUH6fVvR+hZ/qELnmlwBMBbiDdpvb+/zArn9RcX402VRjSO5UpwUktLZXFfjodq4IgivxhHTzhXRuLjt2mnxMNwLcSbGKFbAztOY5htb3TyHtqmlmAvzP5+nL7tMeII/cKcfKwat7GGAdzdmB3ecOaVwz6X0z6PgQknXPkLIgxj9F4x6W5jlBuDqrBLlcCEYG8yVhimroK2y1LqRAEbpIPgWW1Ql3CRLGhywsYK1IMddn9OLveUDuNpIlKPxfpx36Nh3b5sF5ibtsuOTyX4rPJlgrQCX4/0WfrQmuoh33JSkGO5hvTrhp5kj32Es4O2sE+VK6oVgd6+j/mmwsR8hBn02U2QCrAXrrNjE08uAaEZC3mQQ1GmJdABp59KF1Jk0K1efvuHCX7wHPckAHYsRlFBOjPhBjKRx/CmAh/D7AxwNBWhLxKtNu2Ez3XSjN/eXZIsjT0o3WAtRgQg2RWo/GYjTuJG3tz3FlJQTMyWTg4dh8iWUUKojwJcU4Wpej4YVybSIg+ytAsny/AySjxNguKN9QKyPHYz5Z7IeIgFPYWGGD7fAFjKY+e9HxuZ8ub4L8QaHaasQm5DjCl5I6iyws32+voCLycQlZpLI1kP30l+5fBaArwD2EnAUkSFfRfBiI+oj+vkvnFpECkEJquLVYYGVrySDDmmcbPeH3a4r74zxX0n1n0W46AATIox2+jo39gO5p7zLcfQFjQ1zAYlPbpXn/UF4EaUICmk+OyKytiOidltjCatJO9rDYgkaRPhkRq8nXxTWrkcSfD5SDUD9J8mIeyjFilxp5ElYqxqfT+XzrfTKNU6AypwI8xzRDJcCYawEaS8dPEy7PmCB/kyaeqLBW95NQ38p48mukLgr58BBdt0ARGbyN3S+RQrDlQQQ3+IZYK7ervpXGLKdz97H3yiF5JtTt3bQjfyHCFYGd80wC2DrwO0ea729nSpB7pQk/Z+fGM+v0JS40aZV8Qy+AWznDZ1+zVhH0qcJ2xGPnIcnhX6RtifeaKZ3fxB2XiHCfLQtPsjE/+m375SCNeUloa8zbIODeshKkBqmXfLKmkhYT9NtujS9Ubgrkt0CQ35P6+KPkur5dio3vPg/EkJUIwTJ7S24RZLnV4B16x2cZ62GxldLU/PaOW69wWtaXWP5hwm3UBFkkPXCBOOcLd6V/4PCCz9AYVAt/8dPqAkGKq4kHpuacZ0LI8BDbsd+w40ebZRg1W+aaWlKOMT1OLUd2kyEs4/J+adyiaAnilyb4pyAErA7L9SG2JBz7LamDGxlfFaytllj56LdKzDK+AagTV7KdX6tgxBDwLos0chkahB3fmPxxqyWnokFquhNON3vxJjtd/Ip08RWcILBCNMYjOXSyc6NMTc9EB575TzFH4zRjY3KuUb3jJNNSPeH6NRWUGNzKTpQMX2RVO9n75lOMPZbZYG6GKjeWX/FKkATFw+HF/QRBQId3IggBEiP0NtekYtOM6p2mmdo1s0JoDb8RSXWsQCA8t1xOriujd/ygNHeCF4I4RueAIKuAIN2TIhLEinOL645buj6MbzfR1Frmm3PiLhxiCBAxDi7op3kkRD9F8oXsenIkSG0pbmyq0jD9tnXcw+EBWkrjrxfOOtgZNzZLv+CIIaAOGcReXew3ktXvNudxwrkjQTIUCQjJsvBl7GalIAxavok51t9N5AMqSsoz58eXKADVKBfrQiXIV5L9JSKZMg5vcPFWP0wOUn4sw40gW1xuhoh/0+FG6NNKBOQPRULA36KmacF/17qvUItNBbmT5c4KLyAQCRs8wzGTZcusc7juJUqPFbjcKJVHKAnSUZpkksNW7OlAmBOwE46jvRGfbRTFpgZ7Vb3rkNYECJKQXYqNXaiQSzjoIGVgOiVkvMAclRxGqbRYmSCyyyAxgrDC6N5b8kPE2fbGe1eAetu6wI5dA6EedykxOHUBEWSFh+yWIjrXyQV3daX3nqkiyBaF/8YL9Bc7xk8EAY2qDRDFUpFJfmxyIcjpM0DQNgcNZhFpQWej+kq8dyNFJuNKCqB5wdtq1bziZJI0eX6UOnY/yxoHDSo51/xrt5khrS2ouM0yLCFf00M4lft5uBf4RITxD9D9sxU8/VYP93uVFBZEyD88Pl9dh6Dd7ChxJocgkjlBRksnO0U5+cdC+0I7pUWuqSVmh6nSXgjSC66PhevvA7gHfleihLqXXa5ZKXmm72E83i1h+hmHBIQeHp6zlYOK/48ocSbHS0ZzgiyTUu4rSxnnz0p5rhx8LFawXbftDdlw/C7CS84S0Tz0k3FfGcG0CHUg8VKth1uM/r4IiEqL8KztpfHr2bkrXea9RRGg2ijJHU2Vl/S6dNE6lqWhulFq8bUBYxraIxY4ZykWKcLBlSIQRKWZyNHAJZRg4MbmRnpcvbNc5mjrEjOa7zBfe1YewY/z+M8PgiA+Jze7ImdJlZH3gcvqEZDi8oKDxbgIBBEFQGUVyMujZCmHHWoP6ypSo064GIqaFInkhuBQ2c7RqKCeH7yd1eHtcYkYiiCWSGLbgVqVAH846A5I+oHPJwiSmOXqK1tbRoJEUxzUVooIOr2/KszdSpEDLO/mmoy98nMDVO6Stg6ZJgJ4Wk53qTgyPI+XEUUIfgl+8mVi7Dmk4d84AL/tKbb+d3j5W8tAjH9HuTtGuBh6qvEz2Jh7pHOqYh+Rl3CJ5LDMwIOPSMkKFzskNwiYw6KG6Q6VTNZq5+CzNRtFglphV3/gkFYagtGUAkSCQJQEecNhHicP7yAHOdLeYZ5dbAzPnHxEzq36grEiJxe8FT1EF3xCwHicORp7CUIhtM43tQ5gi2BSNf5tnm0820zhdm+euzc+KW+3lpS3pxiS837W4rMOWjvHQ8KeF+gQJUGWOMwzxkO9y3setcNeiqjpKo1q/3gxo0bJ0W4v2DTB1qTWOoUkMYiFRBN/Qa68qkjhXI47QQUROkBsjZIgg6IkSDOHeYa7XLOTeQ/C7DMHeEyRFvWZbCMITeTPEV7wFl+4Ho05Sb+JwLIWq+SRLUNKQwSErY+SIMPLEOFTudAnuYz/gFUXi9QmR3sIFvNn8YFSXobvNBJ4conYJ26JydRThFcdRfJ9ocb2k8IBV5b83JQysKyy1GoMU8zj9p48+7EGBbQcn6lpumHUH2txmXu48qGRYRbmwwKt6C2Ko79JSclrSGc+Jbmhf2FFj24vl6h4qOfKgKQaHjLlVfCzi43kBE5uFKdmBFxpqUdqNq8s+5rnAAPXONokzSLIbdxI1qTM83SwA2Lis4wRPtvgGQAEuZ9VQ50iF8kMeghx7ZsRCnw+d3i5D8mV0dQjkp4/A8PwsEdZ0pGQvtHFK1BLcd18NiZWsjEGU6kdOiCHAm6bA7u6q3m22dgXbgcWygTJUyTJfa3whIodIvJv33J5wdkekfUReQbk62OoeN8poe5TSm7jbMUtL3iAw3PepkduRFMqoMTgYakKqyVj+UfIHziT8LmGWoHUkAzHQplliZW/iazoXEViNFf/fnawYNtRTWE2GZjdHDLMndpWiFTLKZSk5+bDEsrEaXpxUTf/k0u/kobsWQdS5ZbXnfatA0F5oU4ToalRbjO/Htn8Ufotd5/YJwv1J2jQUtZh4Vvmkrd8L8DW+lnBp5KuPNsiRNKW0jb3Glff5nG18uL+fcRSvXht99BO+WMUhHiF3Eq9ya6pLRGE2xONyMBGgrzNs+dZicd6VtwUJtS/U+Tj3km/u5PjbCdXBeEml5E392uW5adRDZ6Y61EKIK1jKwsf9MezkC/Fd6tAVMNyvE+AXPyLWWxnj5QK9SFLKxW79iQYzj+RiSASB7G0+yp/yWKaKqu9nyoMw8pS5WtvOi6rfmvYNryCNREY6dBdIVvh4Swr/CTd49+KKtq/lMN9lpDWFHIIQQv2J1ir3VAnEFYuXY3YuND4gqwsYS4zMT6T9edNCn+OKMWapwjwLGTVQWuJp5sO3lNRi9FFd+5HFQ1cK91D7DwerKrl4LWNBq5m/U3yiABJLJb/BK36UwoToD9LAxIyUcwrjEdehbxSdi4eYJ0QrmX8MIYVdvLWe2MVL3BEUQp8m5R8t6kcstPl5jfCPrlJOjf9DO7zd+ZdXqcwdkOU3T9QwfYFiBCGiKOcFGXU5AX/SHYuZrjE07eQB1hY7sMUOVpFDoWTgnX8Vg9vTjOUtLSj5Hr+ogyNAYZKz9FZkeTAjcnjHuc9qWBX97skfmxgRBDXPOgQLkBONFlydl4sNSHIUAWo7pTKC3hRv6rXxxGHlwspavaKSLMRQf4qZDgW6N6bJhuK5xigu3cIWuJh3juob0oX4hqfEaEnOoSweQCPRxc7OyWBKELkuipAJYdwp0uTPUK7xKkf1F+jXN28ZrsFscmt9BxveDQi+0jP8Cyv95POXayrHZtcMKeTYfeyXrol4JuSQVyF1FZVPtghXd1NtT4bU4sF765ThXDlJIe1igndilFGnwFB5kjZIJWimGcN2TWqQNp6kjOItB1u84D6OQoQEy+5c9y8vv/rktb0YoTcte7SsamqJAfZmAtRfZ1XJ1wT6dqJxIKc7A3OUibp4T17NbJdzklqKKiZ+6hE7zoXgrwbxZw3ROnAXOuUBiSv8u5RTiyE2gnmKHRiZTPYdROkunHZpjjbMMVn5x7zevJ5fu8EWce0O5QnF+lSXzAXuFTaaWGJcsmqxDWPUE0KqwqWt5i0pwNSrtR4B4LwDqJHzxFB+insgzQJmW85XHsVaXtCg3tETvDQI3ekc0wllZOtf/RACBROWcRTVTHsyuSGriOt+BSHhIVjNFYUxaA2sopA9C5Bdoer+QFY2UMSssze8OLtKBP/VvIQZNMuHEfZI5mErNUszCrkRyOFp/ZGDwkPi+ncDqkBASpEcW4E8ZUkiDzhlmytKkdwauhYnV56j8vK+1RhnL1L0N1BhhRFG0SyXjoQ1fjKQISOIDfGNk41+mHPLkLcEpf8rVXs3Gss7yrfRQucBfMqtVJq/XSRVAA600vBzlyFgZXjsCN+JuRyba2PByQVuDgLGxFb+A1zFg5mY6qR9xW3fiViM131CJ1BrY522YbWc46ptZ5gWv9TvpVl48DqrekLvyaP2NIpvaRL0WV6eFMZlb11gGyuRAVBBnop2JE9v/ul2sNdDrXcBSwT71apq0EkgkyW5uvPjEZDMqSmSC7sYm0MVvyg+CzLNSFnD75ATj8ReJvULMPYDOMfuW6BGdNlhqnFptm2BtVFbsD2g83tWkmRPYl2SVyzdMOPyRr+cKcqV+Pv08P7/vJWf3P08Maaq72UtMmJb+KzD6qv3vxCu6WOizsB4fEIBJH7FA5RpCEdpd3JX6I+1+EBweP84blRM5h3mlv3P4pgUePUYEOqX+FJHW+R1mVl8CPgGCSaIBScGyy5Wniub2XSln5wYGXiUxzcRZPhL9k5EcuiVYSYoLv3EZSLf25yGSunG43TSzfT/JXYX6Hkb1suJWcMkkrPqjCXRog8AWtZJfH1LH9YLKJ/YJeK5FxDa5GLHStMLQn+dppmaH0eMbS2E42mQJyjIjQL149yeK8qVBXwg5eyaDeCqKplT5N2Mln33tAxRdqyTl8SWOGQeT9XWoV3hqefGn0BPrNaJWUW91/nxH3HZ9dq8GvSRQga+660n2imtC+wqrwwv3YfsSyjw0SzdsfJpnbFZFvGJOcZWvvJhtZuklVNvBlL9nAsGJNvs5I9J7iYPOLby9o4QNVaY49e+lNDbg9QV9EvZZdDpsYXDknIDUilfkwvaeSPBmcOICCXVhXGGE4AYvbDsXtYogP+PxGO9xEdiACRH/kCwA4DNjGAWCYgs5eVaZ9txTs44Vr7x5fIEGRX+BdkyItIDIyRw/+740uSyKt7wEtViivtKUtrDRmZx/XSPRBlAuYSMjeTdvE7lizBLfFaUjaJ7F4Z75Bkh+wmBhGDNe+UCYnIbAJsxTruLyGkdb55tokIGwRI7G8h1M6g7Pvb6ebwpGwjFpF59YyQ1iLfLBC9g2HOQiBYbcWql1lrc9LEniPlZTpFAPtHIMxevQzNZzSKusmZGhc5jP27w3ZsrJf+HsdmtoNiFCq0HAS6h1ntPwISGgIisVtoDqiuwzCRu2mGhYhXScW8nDSsTEBy/xZ5ptZrponC+QVY0dPrpgSr1h9jaI3GGVobuLbHnBASeCMShOojNyQJDcu5j3zbCOHhrg6GoZx1E1V7JlX/2UcVCgB6Wr8kFVn1NYI2NG6j1CEiWeEd4K6XGIXrG+cYIuQGsg5gOX194Z3oniQ1uSgWkNxmgjmvRZ5xA7KahCwrfbOo5gNBPdbOGNQajwv2YGzIyhBBIlI7kCoKGdeRni1LVzf63w6AavadrC4mrE++3x63yD++VFGTBW4Eqa6IfbdXFKlsVdQQnpQKeVpKocoQJU5kuGQ0aqQm8ihkT8brjwCSr9FZ17fmOWY+qdoWggCx8+BvW0Q2yg5s+XHNrFDTzlND2GGiFxw7GB8ong+JMhnTO4G1JXN1328bhR3J9+VUw7jLX1IxfFwPbyq9WxAD7nEY7lvDl1k6IR0h2oTj7Q55SB+R+7iQPdA8pt9/TH6tJQon5iKHer4xLK5vhVPhgbF3o3A57PXb/XG/ECXZyXlmT2Blg4trVrKMe31ZlkEmtLGvO0wytZZ55sCGY4NFUjPlY/jlBCDa72EsDykfsLrIBcKikrMl+2wrnF+qh+/WBDkLFIkPu/Teug8aWoOxhlZfAZ5r0BXJdDP00u3Aebef72iFr2UZLXUV230V7TCVJ2A6qbwLQUNKSrCb2IgdscHH0m+IlTVrlW+m4W9Y6Yjw+kCgzhY7slfohMZpxv9Y58Lvc5Ssb1kufEUs6u44e/5jMOc8EvIhtlu/0kt/rAzZYldd0SY2LtMZvBa4y8H/HmSVRnJvv0Eu6g+Zz+sSykI5JikN2ymxTJ7D6rGOyO84BVe30Qa2/HCWKNABEDIdxjwAyNYuGxG8uXGq8VXHSebjPUCLglV5KToT4WXHC8HqV3/Cb6+k/j5nyZLxRjrZHYcAFtA8R1xKNUT7W7k+pLiRskp2eJEhHO5SxKGr6OHdNlHHvo5kw1YmC56mcTyuEENONzk8ehyQ97XiBYdZqiy5L+IyS/VzH5yYZfQEjUvThhyyVNw+8w5r2N8Rf5NNUWxsooCPt2XGt7JnApD8K5y723KdgDbntw3Jvcm55gS49ww4tk5Y4DDPk+Qo5L6tg+RSel0/S63GnWr7tku1419JJQg8Br2M+O66OFvAdmO6/h8YAU8DMv4ICLxZQZTn4drqxLYEDCk+n2n1XX8/Od/QQL3VaqcYqBIjMQYKdihkBrAsA7SwgTBXPktwQwE/G1hjPVR9u043tRa55kZ41n3IpoBQTwK8J+aA538rIauY1XSlnb2LIoFz9LPcjN/pcxWfMHtBCOl48q6qvtj2KLzQTdgHRWoO8DnzMT2GrIJ4v/wR4Z1wXQolXfST1U5ECgjtxTVHBGtXHhbsCPMsEwjEXYHnm6YZK34zIhhXc3QQ75/rIxYGxNhZLxUQMrRQqzy8UOs1K6R1nmo2a5RmLMJviPgl1R7Gr29fYDYGNpkABEF2961f3Q38rH2uwumDLqLqtLdDZgharwWw0r4HBC3qOzcU039eSAMWIGIRcj28n3U+vUy2BYhvFzokLVg7BRB0oBnZFwhoa9QbGzzRItscCaBdBAjvMzukjVxypDacRzUUrymqOSqYcj0cH/3sEQ2fsWGqtXB6IrFg3jeTcsw7KFrJvyNil2Nkhi3Mc/ZBF6dPHr3DCLaIIoNZpGVhCBW7+7wPL39V+4mmVTLN5ADfBai9qFrRzvB7zSQhoxFtDmJPRSBLgq3yjQ4tYM42YPhdOjKoNUWXOtyn3oNBq6CoCRiNCQFjz8L3jmkffnNSu/+pI9plMI5285/heZ9qMDZ4N8yfD/NPg2d8EQBXf4AMwJGSQnJOPnnk9lGwT12yK2r5KbUINCCtSVoxsuVPpRZrIaK9ky+z2Lk3V/qqm5c0H8ti7zTZ7ID2R3K2TQQU9FdNMrRWqCCkG/XqjAmeAqWgyA9QfURw1MV3FmrV7i3UhPEGi6MSyJYE7e7C6vAMDZHdtgLCts4zNdIA88up0LTcP5v3ve7yyTl8eOylhW5tsBcQ8f9iq2qh6hpLnuTQ74Cx1ueRGFRYWQQ7Yxisfq3GqCA2OtASqVV62wJT6zY9pGW+eES77k+hh+qOscejEO83LxRz+xOHtesfPmztVqv3SsCWL7AwrM7ezPX+tF4BPpvn9mHJg3rpT5qWIDhQ3PFnELOUDV36/qFgV9Yn9oDNdZ1paldOM6uDPNglrF637tjkLnkFdxuu8jawAPDesbbcshyMdUCwDwBZ0We2qYFwPiB8WiDbRusBYKvjTa3+OHpe2F11xwSt3dvS3hn1gNDv6xXow5K89kNlZWc57RKCH6QUoJcpaaGKGEeF9VYYtXWBoXWYbGp6lqnDKl3UMDW4Atgafu0G1WT0ieXB37/ADnofCLAFfr8DiKuKHuHbFhzWuj0UAjZjs0yL0DB3rZTgJSDgh4CseD05x/Yqw5xFl48J/qLdXlhJu+WQdsnwoEUMoRkm2rujly88a73CfHo10seJ1zhEC++IUBn1sPWtjoBxCRIljohixT2y7MSEmmBrYKjVl8m8qoGSeAmGX1GTawvsMW3ZUe2ah0wrLAsEwWDRtcDS5sNO2IFsCmSE+JRGsUJQd1RwdI1hhVqDFFuwk9WO95rGPc56Bfw4caRv0B6WOwVJCWZruZvdFy4HdvrtzBEMv3YHJDQQQv/yB4MaqLIWki1XOhAJnXZonVs7INu0glTA/xvc8ujh7rADsAZ/GX1/sNjDGx8o9gS/gv1Y4sjvBTthd/NcIyYhu1iWdfWh/yzzwvh8t5cP3H9GvbZkK7yG3xac+CWeZ+H3fpfdg+n+G2DMyibpwYVN0oJzYPViHD4dkBoA7W0qKABz4PdfYFe9CQSwPnPXKBU/lxEs4h8BoBW+H+67uPLw4LWgYWlXTwvFwFjut7ubcrAW6BfoB+55WNfp+yBH5Bi6nwR98ywr4+NyQNwQSu3foat6zmNf+Rzb+o7LLA4OFa928sxafxEaoKu9hAjIppa3zDOGtCkwL0d2VPXeoKWKdwGtC9TjNKZe73coZ1jjkrhRIQnCO7P96rLi7+bCPp7sD/b50yp+uyLpAfj7MJx/D859Bwg7DHKkGPEyGyG2FwLkb4PrPm6bb8xvnGGMTMgxOreZYFZBD0GbCYaleuukviJBrpxqorukPczvFITap3tvpFkhCSKqhxZEKKxMF9WzFjEyw1oDFqvLLUBAY+8tPdVoClrQFY3TjZ6dpoRuaJFj3gzEwZZR1wMyu7aZaHZKyDJjca62gPihTx7WmuCc2bYd5MsMy0zEuTEkMBDY1vNw/SE909GlXv9s4+tcEIT3030+QsElZieOAkQlJQRKjC+/nWFi+ZbqgTBPhP8vBTaD3tzOU0KWK8bSwkgba4k2B30zHY067GjHVW76XZcy3ReKrHiRcyV7menZzwmeziVBeB+UhXqkbtcBYz3AE8SuuiTlGg2qjQxqVe4LWpY765xdqjiGp/GgCtzIVnVbUe7xNCrgPOhyf5Oesd25xs/5IAhv1RfQ1V07bXd6eAQPYxjrQb19HXbOoxTezQfkj/XZsmoEBcJSKANyNhWDvqeX9GSJBBvomWLPF17OJ0E4XE0x+o1urhA02Ky4RvlWUW2ke3epCLioKASRWdoY6vSzRS//MrYtNPeDWH0lPLoV5f0rIkFUNs0A0sTmU6LCJ5TlsoNSb/YR7KZjm2nMSromneZIkCuwKhpB/g/rg3cmaVFQqQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://blackpearl.biz/search/1/?q=%tt%&o=date',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your password/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'BP-Req',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://blackpearl.biz/search/1/?q=%tt%&t=post&c[prefixes][0]=9&o=date&g=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your password/,
      'matchRegex': /No results found/,
      'both': true},
  {   'name': 'BRT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAAAAAAk3keeAAAAAnRSTlMAAHaTzTgAAAEJSURBVCjPY2BAAez83AzYAV/UwlVAUK/GjCHF3LhyFRQsVkOVYhSdBxZfBFERhiLJOhcoWqkFZAmFLAXK2iFLNq5atdIGZspUoCwvQo4DqM8HYT1QbzxCMnLVqulI5gQCtSJ4E1atKkWSlANKisB5c1etSkKS5AVKylBHMhGn5JxVq8q8MltmLFy6ZG5vWbgDUFIK5i/5paswgBcHRHLyKqxAASyJXW6VM6rkIht2mQY4zwlV0hqFhyYpAOK145CMBMaXAC6dqwwYGObhlAQ6cCUNJGMYOFbhlFxVsgA9hOZgDz5tsCSn7QQMmeXx4vAI5dHxze9dDBZeMb02xlIKS15iYmVhIBIAAE9xIm/13bwlAAAAAElFTkSuQmCC',
      'searchUrl': 'https://brasiltracker.org/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /Recuperar senha/,
      'matchRegex': /retornou nenhum resultado/,
      'both': true},
  {   'name': 'BRT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAAAAAAk3keeAAAAAnRSTlMAAHaTzTgAAAEJSURBVCjPY2BAAez83AzYAV/UwlVAUK/GjCHF3LhyFRQsVkOVYhSdBxZfBFERhiLJOhcoWqkFZAmFLAXK2iFLNq5atdIGZspUoCwvQo4DqM8HYT1QbzxCMnLVqulI5gQCtSJ4E1atKkWSlANKisB5c1etSkKS5AVKylBHMhGn5JxVq8q8MltmLFy6ZG5vWbgDUFIK5i/5paswgBcHRHLyKqxAASyJXW6VM6rkIht2mQY4zwlV0hqFhyYpAOK145CMBMaXAC6dqwwYGObhlAQ6cCUNJGMYOFbhlFxVsgA9hOZgDz5tsCSn7QQMmeXx4vAI5dHxze9dDBZeMb02xlIKS15iYmVhIBIAAE9xIm/13bwlAAAAAElFTkSuQmCC',
      'searchUrl': 'https://brasiltracker.org/requests.php?submit=true&search=%search_string_orig%&showall=on&filter_cat[1]=1&filter_cat[2]=1&filter_cat[5]=1&filter_cat[7]=1&filter_cat[8]=1',
      'loggedOutRegex': /Recuperar senha/,
      'matchRegex': /Nada encontrado/,
      'both': true},
  {   'name': 'BTN',
      'searchUrl': 'https://broadcasthe.net/torrents.php?imdb=%tt%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /action=download/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'BTN-Title',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAALodkKfKYJcJcKlMoKc5wKirsKms8Kd58KndMKhbQKga4KfakKkcX//wAKeKIJj8EJl8sJo9wJbpOiaagyAAAAAXRSTlMAQObYZgAAAT9JREFUSMfFkVuWgyAQBbFRJD4Gjfvf6zQ0Q+t10PiV8otLVXJizLdo3u/mkZ94GvQPgv7FPAnWp0HbM+utpr9zXplW59qrLO9yaZkZZ/QFCWZmgRn9/Y37YRbc0cfAycULizK/+MlvZojBUK7kgSCxNhjoXX9477KVTxk10KKBP4op0xSDsQS9cPLbMtDITAaKBoJVhzAxpEEWNBCMBsQEg0KLx0IXGF8P5sgh8EyXD6ocA2cU2zEYMPm0JAajbNG3+0CcfHKJ0Sh+s9b6fSAOBopnzIMAwICGyHUwJDSIuNvAfRy0YIyJi8CBQXKsF5MEuyFB1S+Qe6dLuC7odEsZKOD2n81f+OG4hggxZz8IBLPP1HeAur8bIhjVh6JgKWF1UR8LhQv0EbIV1EfoXsdiQ30D/6YBu9rEaCMyX+EXkcgUNWOYO7EAAAAASUVORK5CYII=',
      'searchUrl': 'https://broadcasthe.net/torrents.php?action=basic&searchstr=%search_string_orig%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /No search results/,
      'TV': true},
  {   'name': 'BTN-TVDb',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAOVBMVEUAAAAJcJcKfKYKotsKd6AKm88Kc5wJlcoKirsKkMQKhbQLn9cKga4KfakA/zIKntQKk8gKeqUJbpOFSaBYAAAAAXRSTlMAQObYZgAAAT5JREFUSMfFkUl2wyAQBaEFAk2xrPsfNg0t5zMIEa1cO35Xxc+x+hbLMCyPfA4eFUvAPgjsi3kSOMs8DlxX4y+qhMkxO+aWz5zBzkzFXPs4+Skg89Iohiz4YXy2V/4i1MELh9S3Mjt5ziGYVVq8UMgacUMZ4Gbz/7vw+SsrglDgiCCfthCsCITKx09LK7Op+iMQOOscBrMxbwSngEBQCIgxeLvccHskCUbDZEFmuClQBeP5gJIHXgE9MmXAnC95zAocwdfNwEdWBcyhtTZpIE4ZAHznbgDaAc2B+2COIAj4buD/HbjCWCM3gS8Mkme72CRIhgg1P0DuHou5L6i60sl1cXWkd8Rg6d1MgJjaNwJdzv0dl/FzIUpH+HXxh6aIxgK/LAAXDR+FbgC/k0BvF0epH6nfb2DfNyE6iNRX+AXJHhS442mIQgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://broadcasthe.net/torrents.php?tvdb=%tvdbid%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /action=download/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'BTN-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAALodkKfKYJcJcKlMoKc5wKirsKms8Kd58KndMKhbQKga4KfakKkcX//wAKeKIJj8EJl8sJo9wJbpOiaagyAAAAAXRSTlMAQObYZgAAAT9JREFUSMfFkVuWgyAQBbFRJD4Gjfvf6zQ0Q+t10PiV8otLVXJizLdo3u/mkZ94GvQPgv7FPAnWp0HbM+utpr9zXplW59qrLO9yaZkZZ/QFCWZmgRn9/Y37YRbc0cfAycULizK/+MlvZojBUK7kgSCxNhjoXX9477KVTxk10KKBP4op0xSDsQS9cPLbMtDITAaKBoJVhzAxpEEWNBCMBsQEg0KLx0IXGF8P5sgh8EyXD6ocA2cU2zEYMPm0JAajbNG3+0CcfHKJ0Sh+s9b6fSAOBopnzIMAwICGyHUwJDSIuNvAfRy0YIyJi8CBQXKsF5MEuyFB1S+Qe6dLuC7odEsZKOD2n81f+OG4hggxZz8IBLPP1HeAur8bIhjVh6JgKWF1UR8LhQv0EbIV1EfoXsdiQ30D/6YBu9rEaCMyX+EXkcgUNWOYO7EAAAAASUVORK5CYII=',
      'searchUrl':  'https://broadcasthe.net/requests.php?search=%search_string%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /Nothing found/,
      'TV': true},
  {   'name': 'BTN-IMDb-Req',
      'searchUrl': 'https://broadcasthe.net/torrents.php?imdb=%tt%',
      'loggedOutRegex': /Lost your password\?/,
      'matchRegex': /Error 404|Nothing found/,
      'TV': true},
  {   'name': 'BWT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAADm5uZJRQb6AAAAJUlEQVQI12P4/x+EGtgZGpgZDjSCUTPDASCbEcZtBEoBFUBUAgDM+xMZ0lHWKQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bwtorrents.tv/index.php?search=%search_string_orig%+%year%&blah=0&cat=0&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|FORGOT PASSWORD/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'BWT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAADm5uZJRQb6AAAAJUlEQVQI12P4/x+EGtgZGpgZDjSCUTPDASCbEcZtBEoBFUBUAgDM+xMZ0lHWKQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://bwtorrents.tv/viewrequests.php?search=%search_string_orig%&filter=true',
      'loggedOutRegex': /Cloudflare|Ray ID|FORGOT PASSWORD/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'CaCh',
      'icon': 'data:image/png;base64,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',
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
  {   'name': 'CBT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAALVBMVEUAAADrXhebmpr1gC78+PfvoXqSkZH0wKqysbL45uL51cqmpqfRyMbi19W9vLxW8NP6AAAAAXRSTlMAQObYZgAAAmVJREFUSMelk8Fr01Acx3/YhC6lPTzKED3mEAqT4eNZip6iqIg6WIljzGMOQSgIY5bijj2MSIdEVvQ0GGxedpIdQqUTPJSBrIIbZShMEdlhYOnf4C9J08Q1yYPtC6UvfD/5vvf7vfzgHBKqVjKwyWYT/TQlN5J8SSPkchKwRAmZTPDvUYKy4g/AiKPYUwqa68efcpPmGcOQq3EAY3PL21XGbsYBteZ696uamY/evwkwMzBN83Un0n9YLcJjsyHL8pSpwvt59Yz/TqOlrLkjOyp8EFm+9B8hVRnJb52i7+qTSIhHBK9j7d/r8lCtNAkTAr6Oz9m2PBICAZHRmNu8/Z0wEBDCEnUfZtqKISuGLhuG3hJJQAzXpUd25VRpmfWKaa7sisQnLMhQ7/4az3+9ut9bfXCtd3z4MUV8Au91zdtBOdnT7bsnR0pPqfxeJL4QSDsRkxN21zae7e3+qezrLZX6AcUNACjj6solu9CwCytto1DX+yIN++BseP2tjEUYuo6/6c9rns+eDhuB/OyRPFJfoJ7/cvQhE2YdjvzpjrdD8QX4EtkTuOP7U31Bc7dvhu5yGWDCb/TgW86JH/secn89f7UDEvoLMKZjhyh0v+BSK26NDWRNlbqDwcD1QbLGBxKPKaz//KFCtLAu5hYlzd2Knmjn3LVtHBnKIoGy2zgU/qkxgK88RIkGQORUSqEAKwrIBkB0ESInAFKcALjNCYA3nAA48AM2YoBFTgCUOQFA/SbGSOIFZDkBIHICIJVcAgJBE2M6zQmAA04AlDkBQJNKQAm8gBwnANKcAMgwZkGiqgtwEf0DLwG1npqjgzMAAAAASUVORK5CYII=',
      'searchUrl': 'https://chilebt.com/filterTorrents?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Olvidaste tu contraseña/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'CBT-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAALVBMVEUAAADrXhebmpr1gC78+PfvoXqSkZH0wKqysbL45uL51cqmpqfRyMbi19W9vLxW8NP6AAAAAXRSTlMAQObYZgAAAmVJREFUSMelk8Fr01Acx3/YhC6lPTzKED3mEAqT4eNZip6iqIg6WIljzGMOQSgIY5bijj2MSIdEVvQ0GGxedpIdQqUTPJSBrIIbZShMEdlhYOnf4C9J08Q1yYPtC6UvfD/5vvf7vfzgHBKqVjKwyWYT/TQlN5J8SSPkchKwRAmZTPDvUYKy4g/AiKPYUwqa68efcpPmGcOQq3EAY3PL21XGbsYBteZ696uamY/evwkwMzBN83Un0n9YLcJjsyHL8pSpwvt59Yz/TqOlrLkjOyp8EFm+9B8hVRnJb52i7+qTSIhHBK9j7d/r8lCtNAkTAr6Oz9m2PBICAZHRmNu8/Z0wEBDCEnUfZtqKISuGLhuG3hJJQAzXpUd25VRpmfWKaa7sisQnLMhQ7/4az3+9ut9bfXCtd3z4MUV8Au91zdtBOdnT7bsnR0pPqfxeJL4QSDsRkxN21zae7e3+qezrLZX6AcUNACjj6solu9CwCytto1DX+yIN++BseP2tjEUYuo6/6c9rns+eDhuB/OyRPFJfoJ7/cvQhE2YdjvzpjrdD8QX4EtkTuOP7U31Bc7dvhu5yGWDCb/TgW86JH/secn89f7UDEvoLMKZjhyh0v+BSK26NDWRNlbqDwcD1QbLGBxKPKaz//KFCtLAu5hYlzd2Knmjn3LVtHBnKIoGy2zgU/qkxgK88RIkGQORUSqEAKwrIBkB0ESInAFKcALjNCYA3nAA48AM2YoBFTgCUOQFA/SbGSOIFZDkBIHICIJVcAgJBE2M6zQmAA04AlDkBQJNKQAm8gBwnANKcAMgwZkGiqgtwEf0DLwG1npqjgzMAAAAASUVORK5CYII=',
      'searchUrl': 'https://chilebt.com/filterRequests?imdb=%nott%&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Olvidaste tu contraseña/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'CG',
      'searchUrl': 'https://cinemageddon.net/browse.php?search=%tt%',
      'loggedOutRegex': /Ray ID|Not logged in!/,
      'matchRegex': /Nothing found!/},
  {   'name': 'CG-c',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJfSURBVHjaXNLPSxRhHAbw533n3dkdx5xpdieZhVWh9bIZWYcEXRKFvGQg0Y9zZJf+hihSi6h/obKiWx0LLHHp0NihwNYQNMXK3FrdlBlRdxzfed8OSZoP3+uH73N4SHRt+4rbP/KzkG06AgCAENHaulcqf7P8AwO4dQkXsCcU7/Cw40F3fX52YSJifsR8rvgRXRcIE0hoSOD/UDkZYRyPTz3qTnXNz88DkFIKIYQQNaipgb4fAJDFSHmvPOkc3mdiUCdRnMYMB/8HlBu4DgBLknKlL99XrBTfFEcNo65arVbCSoCt31iRkA3IKFAAEI5gxxKQVlpuXMq9bGER67FPE0JGKq/rRN1FnD+L3hM4vogS220nIRfFveX7tVFtQY5mG5uRkSvWatez7rGgQKG4GP+Aj+AIdq89zGqHr+DyJCY4Aq4GUU9Y6BmjoH8r6bq+5wOBSEWbPADgwQeAELIo0kcdopCqFTTUNmiatgMiRJ70kp+T9dv2JxSb4TqoTyMdX467U66u647jxGIxxhjbxOYCfkxhysX4l6+z05gJEWrQlrDswBFS3CnfbTFb5spzmUyGUooB3OzFGQuWqqqGYdi2bRiGqqpxqCbMlJIcOjQQnQuHOgcty8rlcoQxpmmaYRi6rjPGwjD0PE+v6LfNwUST1lnNm99NpAnJ0+drL/pfXSXZbHM8rqqqyhgDsLGxUSqV2vyTTzGcMlPwAQkAcEDyiqu6zDQOKoxQSgFwzjnnQRCkkQ4RwtuzoV+QY1FHWztLkKQUnAgKYHurGlZ9skVaccyGvW92WIV8K/4MAAC5CJCfm65HAAAAAElFTkSuQmCC',
      'searchUrl': 'https://cinemageddon.net/cocks/endoscope.php?what=imdb&q=%tt%',
      'loggedOutRegex': /Ray ID|Not logged in!/,
      'matchRegex': /Nothing found!/},
  {   'name': 'CG-Req',
      'searchUrl': 'https://cinemageddon.net/viewrequests.php?filled=no&searchwhat=imdb&search=%tt%',
      'loggedOutRegex': /Ray ID|Not logged in!|Requests are offline/,
      'matchRegex': /Nothing found./},
  {   'name': 'Classix',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABoElEQVQYGX3BPU5UURzG4d+ZOcQPQggQEpSoIRgrG7dg6RJchI0uwMZYm7AIO0sXYKLRWNjjV0SlALVRmLnnvO/fe3MIxcj4PAlIiTkMiYtvVpnrxd0x71aY7+pquvkcRpwtAvJ1k/Y42+o5yJsmdcuZM0xtyJsiFa0s8I/JHwnyZZOKYmmBGd2RZMiXTJJidJ8Zjy0b8oZIXVGYGeFSBXntJ6mrJpgRKlWQlw9IpTrMjFCtgnzBpFLNDr3jB/R2Er3fUW3IY5GKfEhvvBb04jsD1SrIUzHqyj69vI0Z6HPQKxLkQxHT/X3g3DUTDDz9YnpLgvxV6HYG1p4pMAPXyZ0pMDmC/HEDftHLRY6gF1G7H8c0eXedxqUGZmAVi2b0XidcZGKAa7FO5A+icVFgeuFaJJq8JxqXaoKB1Uk0+UA0LoowA9cq0eSJaaI4IuhFqIRp8qJoXKsJBlaRaPK2aFwU9RG9sIpFk2+YJqrLNwafQtWmyeumCfktJ1TDNLkzTaTXnLJNk27do1ncSpzSbqFJPLzCfzwd8/L8FnM9efUXuA4mfystff4AAAAASUVORK5CYII=',
      'searchUrl': 'http://classix-unlimited.co.uk/torrents-search.php?search="%search_string%"&parent_cat=Movies',
      'loggedOutRegex': /Sorry this is a private site|Connection refused/,
      'matchRegex': /Database Error/},
  {   'name': 'Classix',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABoElEQVQYGX3BPU5UURzG4d+ZOcQPQggQEpSoIRgrG7dg6RJchI0uwMZYm7AIO0sXYKLRWNjjV0SlALVRmLnnvO/fe3MIxcj4PAlIiTkMiYtvVpnrxd0x71aY7+pquvkcRpwtAvJ1k/Y42+o5yJsmdcuZM0xtyJsiFa0s8I/JHwnyZZOKYmmBGd2RZMiXTJJidJ8Zjy0b8oZIXVGYGeFSBXntJ6mrJpgRKlWQlw9IpTrMjFCtgnzBpFLNDr3jB/R2Er3fUW3IY5GKfEhvvBb04jsD1SrIUzHqyj69vI0Z6HPQKxLkQxHT/X3g3DUTDDz9YnpLgvxV6HYG1p4pMAPXyZ0pMDmC/HEDftHLRY6gF1G7H8c0eXedxqUGZmAVi2b0XidcZGKAa7FO5A+icVFgeuFaJJq8JxqXaoKB1Uk0+UA0LoowA9cq0eSJaaI4IuhFqIRp8qJoXKsJBlaRaPK2aFwU9RG9sIpFk2+YJqrLNwafQtWmyeumCfktJ1TDNLkzTaTXnLJNk27do1ncSpzSbqFJPLzCfzwd8/L8FnM9efUXuA4mfystff4AAAAASUVORK5CYII=',
      'searchUrl': 'http://classix-unlimited.co.uk/torrents-search.php?search="%search_string%"&parent_cat=TV',
      'loggedOutRegex': /Sorry this is a private site|Connection refused/,
      'matchRegex': /Database Error/,
      'TV': true},
  {   'name': 'Classix-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABoElEQVQYGX3BPU5UURzG4d+ZOcQPQggQEpSoIRgrG7dg6RJchI0uwMZYm7AIO0sXYKLRWNjjV0SlALVRmLnnvO/fe3MIxcj4PAlIiTkMiYtvVpnrxd0x71aY7+pquvkcRpwtAvJ1k/Y42+o5yJsmdcuZM0xtyJsiFa0s8I/JHwnyZZOKYmmBGd2RZMiXTJJidJ8Zjy0b8oZIXVGYGeFSBXntJ6mrJpgRKlWQlw9IpTrMjFCtgnzBpFLNDr3jB/R2Er3fUW3IY5GKfEhvvBb04jsD1SrIUzHqyj69vI0Z6HPQKxLkQxHT/X3g3DUTDDz9YnpLgvxV6HYG1p4pMAPXyZ0pMDmC/HEDftHLRY6gF1G7H8c0eXedxqUGZmAVi2b0XidcZGKAa7FO5A+icVFgeuFaJJq8JxqXaoKB1Uk0+UA0LoowA9cq0eSJaaI4IuhFqIRp8qJoXKsJBlaRaPK2aFwU9RG9sIpFk2+YJqrLNwafQtWmyeumCfktJ1TDNLkzTaTXnLJNk27do1ncSpzSbqFJPLzCfzwd8/L8FnM9efUXuA4mfystff4AAAAASUVORK5CYII=',
      'searchUrl': 'http://classix-unlimited.co.uk/reqall.php?Section=View_Requests&search=%search_string_orig%',
      'loggedOutRegex': /Sorry this is a private site/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'CMS',
      'searchUrl': 'https://cinemamovies.pl/browse.php?incldead=1&blah=1&gatunek=0&quality=none&search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Zapomniałeś hasła/,
      'matchRegex': /was not found|nie został odnaleziony/,
      'both': true},
  {   'name': 'CrazyHD',
      'searchUrl': 'https://www.crazyhd.com/index.php?page=searchlist',
      'loggedOutRegex': /Cloudflare|Ray ID|Popular Topics/,
      'matchRegex': /list-name/,
      'positiveMatch': true,
      'mPOST': 'search=%search_string_orig%+%year%',
      'both': true},
  {   'name': 'CrazyHD-Req',
      'searchUrl': 'https://www.crazyhd.com/index.php?page=viewrequests&search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Popular Topics/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'CRT',
      'searchUrl': 'https://www.cathode-ray.tube/torrents.php?searchtext=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|insufficient privileges|forgotten password/,
      'matchRegex': /did not match anything/,
      'both': true},
  {   'name': 'CRT-Req',
      'searchUrl': 'https://www.cathode-ray.tube/requests.php?search=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|insufficient privileges|forgotten password/,
      'matchRegex': /No requests/,
      'both': true},
  {   'name': 'CT',
      'icon': 'data:image/gif;base64,R0lGODlhEAAQAPfWAPHy9Pz8/f39/YuRpPX198DEy4iOn5KXpnF7km92jJuhtLa7yN7g5G53kNnb4bC1w15nf0ZQbEdRbnJ6kXF4i0dQZb/CyKuxv6iuvMDCyExWcHp/iU1VcayywIuRoX2Ai3l9iI+WqXyBjbO3xX2DkZKYqExYd5KYp8XHzcTHzFhdbXuBlauttWpxhW91hTpDX3R8jz5JZnZ8jHuDmz1JZ5GWpDtFXLzBzGJoecLEy0BLaGFsh3mDmfT09jtEVzQ9VGx1i5qfqYiPnklVc3Z/l4eOnYuTpZKarG93jJygq4SMn1Vfe3yEmFFceGtziXl/kUxVbUlRaFVcb2RthFVbbU9XaT9KZ1VefKmuvv39/m5zg/X2+PDx9GBqgHZ7hp2jtLW7x05WcI2TpJmdpqitvNTW2vP09oGGk2Bofl5mfnuEmH6ElkFNbJKYqd3g5aSquaCmtpeesGtzh5edsL/ByEJJXXN7kEJLZYKJnJGWqN/h50RQcYiPn5aer5CXqn6El8THzXR9loCFmTlCW42VqGNuiXB2hIiMlzpFYTtFYKSotZKYq/z8/JWcr6+ywX+GmKmstbi8xWJoeGx1j6etvVJefNbZ4JCWnlFXaIiPpGBrhtLU2mVqfNze4oKLoKmvvoCHn9HS2N3g5klRZkhRZW10hEZQZ8DDyVFYa1xlfpqhsj5IZJ2ktU5Yc9jZ3fv8/EdPYXuDmbO5xlRZap+irKmuvW10hYWJlpOZp4+VpfLz9V5ngTM9VtbY3kJNbEFLZtja34GJm6yyv5icq62zwXqAkD1HYl9mdqqvvqCnt2tyhsPFzIqSpn6Gm2RrgYCGmHh9jrK3xEdScz9IXoeOnv///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAANYALAAAAAAQABAAAAj/AKsJDKDHkZ9YPAjVcvNKoEMzxIh4UoUBiwJQk97octiDFYI4YKI9GLFgwRFNzABUE4AMwacOyRR8eXBD1gU4leYIENWgD5kBwTKFEBZJkYETzaQ5oBRomCERZyQl8DLm0q1DIJq0maHkg6syQTZp4ZSEAQNaGxLsKgQtw5ZjYXCMWlIBEAoqgphI2FEqFIE6JnzpGGKjwLIqeFZEaCCHBQFbg6S4QMTLQg5M1JCkanSFBKROBej4sPLjVAoVBzjksrRnggxUpKaZ0hAF1qxiMFY5CLCIjZEBdqZASOOMghADxnBlqcZFDQ0gJfg8e1SkRosXT1QKBJAnRisnf9YoFYOS6IB2h4x6ieny6w4aD8ACCLQWEAA7',
      'searchUrl': 'https://central-torrent.eu/browse.php?search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|inputlogowanie/,
      'matchRegex': /Nic tutaj nie ma/},
  {   'name': 'CZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAAAAAByaaZbAAAACXBIWXMAAC4jAAAuIwF4pT92AAACYklEQVRIx2N4RiJggDEen5yWFhxRvvIaXOrJqRnpIWGly65g1bDNg5sBDGSyb0BEdvrwQESkMq5gaLgRw8IAB6JTHj97diuBFSEiNOERqoYLpgzIgCXr6SUbFBHm9CfIGm47QsV52KGMdlcog5sDymh6iqQhBiyk2XP+2cO9GfwIczW6zj59tC9HAGzrKoSG42xAAaaYWxCBXTpQ5UzhNyEi+/RBXItHcA3RIH70Q5gjL0hDNITCRS4qgLyxBKbhqjiQq3QTEXCLweEji4iQZ6tAbgiAaVjLCOQ1IIX0IyOQhiokkSd6QAGRp1ANnSDpDciRGQsS2YkskgwSuQnVUA3inEaWBoucRBZpBolcgmqoA3EOI0sXgESOIYtUgUSuQDVMBnEWI0sHgURWIIv4g4LpPlTDIVAyCn+KkL0sBtIQ8AQhcl0CKKANC6V7oJji2oyQzgYFGwPHOoRICUgkHx5xbSB5hRMw2WnQhCt/FCYyAxQNvEfgGh5JgeTFFoLj/noOPFkLz4eIFIKTZBpS4pvHBRJhNc6sr4qWAbtHAZx3WA0y66tjZMEiyueQ80MDAyrgP9LMiCoisA8lAz1p5kGW1dv+7Em3ILKI6mb0PL3JnBkhrWNubm4hieBzxlzCLARuKjPgBLHYSo3r0rg1+EHVbLCSmkaChqsJwIJIjWgND1vkQExFIjU83agNYRKnIfB4BCcDKRoUhRBMojQg6x3VMIQ0qMiSqCHgSg4vSRqAyXuXOYkanj2Zo0GaBmDNnc0HrCdJytO7Iy2XwjXcM8StIQtr42S/nxsOEHsBqwZiAQDfnobxXS/XCAAAAABJRU5ErkJggg==',
      'configName': 'ET',
      'searchUrl': 'https://cinemaz.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true},
  {   'name': 'CZ',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAAAAAByaaZbAAAACXBIWXMAAC4jAAAuIwF4pT92AAACYklEQVRIx2N4RiJggDEen5yWFhxRvvIaXOrJqRnpIWGly65g1bDNg5sBDGSyb0BEdvrwQESkMq5gaLgRw8IAB6JTHj97diuBFSEiNOERqoYLpgzIgCXr6SUbFBHm9CfIGm47QsV52KGMdlcog5sDymh6iqQhBiyk2XP+2cO9GfwIczW6zj59tC9HAGzrKoSG42xAAaaYWxCBXTpQ5UzhNyEi+/RBXItHcA3RIH70Q5gjL0hDNITCRS4qgLyxBKbhqjiQq3QTEXCLweEji4iQZ6tAbgiAaVjLCOQ1IIX0IyOQhiokkSd6QAGRp1ANnSDpDciRGQsS2YkskgwSuQnVUA3inEaWBoucRBZpBolcgmqoA3EOI0sXgESOIYtUgUSuQDVMBnEWI0sHgURWIIv4g4LpPlTDIVAyCn+KkL0sBtIQ8AQhcl0CKKANC6V7oJji2oyQzgYFGwPHOoRICUgkHx5xbSB5hRMw2WnQhCt/FCYyAxQNvEfgGh5JgeTFFoLj/noOPFkLz4eIFIKTZBpS4pvHBRJhNc6sr4qWAbtHAZx3WA0y66tjZMEiyueQ80MDAyrgP9LMiCoisA8lAz1p5kGW1dv+7Em3ILKI6mb0PL3JnBkhrWNubm4hieBzxlzCLARuKjPgBLHYSo3r0rg1+EHVbLCSmkaChqsJwIJIjWgND1vkQExFIjU83agNYRKnIfB4BCcDKRoUhRBMojQg6x3VMIQ0qMiSqCHgSg4vSRqAyXuXOYkanj2Zo0GaBmDNnc0HrCdJytO7Iy2XwjXcM8StIQtr42S/nxsOEHsBqwZiAQDfnobxXS/XCAAAAABJRU5ErkJggg==',
      'configName': 'ET',
      'searchUrl': 'https://cinemaz.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'CZ-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAAAAAByaaZbAAAACXBIWXMAAC4jAAAuIwF4pT92AAACYklEQVRIx2N4RiJggDEen5yWFhxRvvIaXOrJqRnpIWGly65g1bDNg5sBDGSyb0BEdvrwQESkMq5gaLgRw8IAB6JTHj97diuBFSEiNOERqoYLpgzIgCXr6SUbFBHm9CfIGm47QsV52KGMdlcog5sDymh6iqQhBiyk2XP+2cO9GfwIczW6zj59tC9HAGzrKoSG42xAAaaYWxCBXTpQ5UzhNyEi+/RBXItHcA3RIH70Q5gjL0hDNITCRS4qgLyxBKbhqjiQq3QTEXCLweEji4iQZ6tAbgiAaVjLCOQ1IIX0IyOQhiokkSd6QAGRp1ANnSDpDciRGQsS2YkskgwSuQnVUA3inEaWBoucRBZpBolcgmqoA3EOI0sXgESOIYtUgUSuQDVMBnEWI0sHgURWIIv4g4LpPlTDIVAyCn+KkL0sBtIQ8AQhcl0CKKANC6V7oJji2oyQzgYFGwPHOoRICUgkHx5xbSB5hRMw2WnQhCt/FCYyAxQNvEfgGh5JgeTFFoLj/noOPFkLz4eIFIKTZBpS4pvHBRJhNc6sr4qWAbtHAZx3WA0y66tjZMEiyueQ80MDAyrgP9LMiCoisA8lAz1p5kGW1dv+7Em3ILKI6mb0PL3JnBkhrWNubm4hieBzxlzCLARuKjPgBLHYSo3r0rg1+EHVbLCSmkaChqsJwIJIjWgND1vkQExFIjU83agNYRKnIfB4BCcDKRoUhRBMojQg6x3VMIQ0qMiSqCHgSg4vSRqAyXuXOYkanj2Zo0GaBmDNnc0HrCdJytO7Iy2XwjXcM8StIQtr42S/nxsOEHsBqwZiAQDfnobxXS/XCAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://cinemaz.to/requests?search=%search_string_orig%&condition=new',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /Request Not Fulfilled/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Darius',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD///96enrd3d2cJ1JiAAAAZUlEQVQoz2MYdoBrFRgsgHCuhoaGXg2tbwDzdENDw7lDQ+PAHG4gh+FqaDhYihnEmRoamgDiMEE5BXDO1tDQADjHNDQ0Ap2DUIZmAMLoAyAOJ5DDBLYU4ZwKJIf+a0DyQgPD8AMAzioxUgejgkYAAAAASUVORK5CYII=',
      'searchUrl': 'https://dariustracker.hu/browse.php?viewMode=&c86=1&c85=1&c19=1&c17=1&c62=1&c82=1&c83=1&c48=1&c34=1&c16=1&c15=1&c64=1&c70=1&c68=1&c69=1&search=%search_string_orig%+%year%&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Elfelejtetted a jelszavad/,
      'matchRegex': /feltételekkel nincs találat/},
  {   'name': 'Darius',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD///96enrd3d2cJ1JiAAAAZUlEQVQoz2MYdoBrFRgsgHCuhoaGXg2tbwDzdENDw7lDQ+PAHG4gh+FqaDhYihnEmRoamgDiMEE5BXDO1tDQADjHNDQ0Ap2DUIZmAMLoAyAOJ5DDBLYU4ZwKJIf+a0DyQgPD8AMAzioxUgejgkYAAAAASUVORK5CYII=',
      'searchUrl': 'https://dariustracker.hu/browse.php?viewMode=&c58=1&c22=1&search=%search_string_orig%&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Elfelejtetted a jelszavad/,
      'matchRegex': /feltételekkel nincs találat/,
      'TV': true},
  {   'name': 'DataScene',
      'searchUrl': 'https://datascene.xyz/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember Me/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'DataScene-Req',
      'searchUrl': 'https://datascene.xyz/requests?unfilled=1&imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember Me/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'DBy',
      'searchUrl': 'https://danishbytes.club/torrents/filter?imdb=%tt%',
      'goToUrl': 'https://danishbytes.club/torrents?imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Glemt din adgangskode|Service Unavailable/,
      'matchRegex': /resultsCount":0/,
      'both': true},
  {   'name': 'DBy-Req',
      'searchUrl': 'https://danishbytes.club/requests?unfilled=1&imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Glemt din adgangskode|Service Unavailable/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'DC',
      'searchUrl': 'https://digitalcore.club/api/v1/torrents?categories[]=1&categories[]=2&categories[]=3&categories[]=4&categories[]=5&categories[]=6&categories[]=7&dead=false&limit=1&page=search&searchText=%search_string%+%year%',
      'goToUrl': 'https://digitalcore.club/search?search=%search_string%+%year%&cats=1,2,5,6,3,4,7&fc=true',
      'loggedOutRegex': /It doesnt work here/,
      'matchRegex': /imdbid/,
      'rateLimit': 250,
      'positiveMatch': true},
  {   'name': 'DC',
      'searchUrl': 'https://digitalcore.club/api/v1/torrents?categories[]=8&categories[]=9&categories[]=10&categories[]=11&categories[]=12&categories[]=13&categories[]=14&dead=false&limit=1&page=search&searchText=%search_string%',
      'goToUrl': 'https://digitalcore.club/search?search=%search_string%&cats=8,9,10,11,13,12,14&fc=true',
      'loggedOutRegex': /It doesnt work here/,
      'matchRegex': /imdbid/,
      'rateLimit': 250,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'DesiTor',
      'searchUrl': 'https://desitorrents.rocks/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember Me/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'DesiTor-Req',
      'searchUrl': 'https://desitorrents.rocks/requests?unfilled=1&imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember Me/,
      'matchRegex': /desi_torrent_title/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'DVDSeed',
      'searchUrl': 'https://www.dvdseed.eu/browse2.php?search=%tt%&wheresearch=2&incldead=1&polish=0&nuke=0&rodzaj=0',
      'loggedOutRegex': /Nie masz konta|Nie zalogowany!/,
      'matchRegex': /Nic tutaj nie ma!/},
  {   'name': 'EMP',
      'searchUrl': 'https://www.empornium.is/torrents.php?title=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Authorization error|forgotten password/,
      'matchRegex': /did not match anything/},
  {   'name': 'EUC',
      'searchUrl': 'https://eliteunitedcrew.org/browse.php?search=%tt%&cat=0&incldead=1&btn=Search',
      'loggedOutRegex': /Not logged in/,
      'matchRegex': /nijedan torent/,
      'both': true},
  {   'name': 'ExiTor',
      'icon': 'https://exitorrent.org/favicon.ico',
      'searchUrl': 'https://exitorrent.org/browse.php?search=%tt%&blah=1&incldead=0&polish=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Aby odzyskać hasło/,
      'matchRegex': /Nic tutaj nie ma/,
      'both': true},
  {   'name': 'ExiTor-Req',
      'icon': 'https://exitorrent.org/favicon.ico',
      'searchUrl': 'http://exitorrent.org/viewrequests.php?search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Aby odzyskać hasło/,
      'matchRegex': />Nie</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'FE',
      'searchUrl': 'https://finelite.org/selaa.php?search=%tt%',
      'loggedOutRegex': /Se ainoa oikea!/,
      'matchRegex': /notice-info/,
      'both': true},
  {   'name': 'FE-Req',
      'searchUrl': 'https://finelite.org/toiveet.php?search=%search_string_orig%&filter=true',
      'loggedOutRegex': /Se ainoa oikea!/,
      'matchRegex': /icon_cross.png/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'FF',
      'searchUrl': 'https://www.funfile.org/browse.php?search=%search_string%+%year%&c44=1&c19=1&incldead=1&s_title=1',
      'loggedOutRegex': /You need cookies enabled to log in/,
      'matchRegex': /Try again with a refined search/},
  {   'name': 'FF',
      'searchUrl': 'https://www.funfile.org/browse.php?search=%search_string%&c44=1&c7=1&incldead=1&s_title=1',
      'loggedOutRegex': /You need cookies enabled to log in/,
      'matchRegex': /Try again with a refined search/,
      'TV': true},
  {   'name': 'FF-Req',
      'searchUrl': 'https://www.funfile.org/requests.php?filter=open&search=%search_string%',
      'loggedOutRegex': /You need cookies enabled to log in/,
      'matchRegex': /row3/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'FL',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEUfotUje54mZHwpTFssLS8shKW30acsAAAANElEQVQI12MIhQKGEBcwcMXLcGZgMIAwWFzgDAUww4mBGcJwZHERgOhicXFgYHElymSYMwA+oyC+xS3dSAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://filelist.io/browse.php?search=%nott%&cat=0&searchin=3&sort=2',
      'loggedOutRegex': /Login on any IP/,
      'matchRegex': /Nu s-a găsit nimic!/,
      'both': true},
  {   'name': 'FL-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEUfotUje54mZHwpTFssLS8shKW30acsAAAANElEQVQI12MIhQKGEBcwcMXLcGZgMIAwWFzgDAUww4mBGcJwZHERgOhicXFgYHElymSYMwA+oyC+xS3dSAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://filelist.io/viewrequests.php?search=%search_string_orig%&filter=true',
      'loggedOutRegex': /Login on any IP/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'FinVip',
      'searchUrl': 'https://finvip.org/index.php?page=torrents&search=%tt%&options=1',
      'loggedOutRegex': /Sinulla ei ole oikeuksia sivulle/,
      'matchRegex': /<td colspan="2" align="center"> <\/td>/},
  {   'name': 'FZ',
      'searchUrl': 'https://www.fuzer.me/browse.php?ref_=basic&query=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Lost Password/,
      'matchRegex': /לא נמצאו תוצאות/,
      'both': true},
  {   'name': 'FZ-Req',
      'searchUrl': 'https://www.fuzer.me/requests.php?action=search&sq=%search_string_orig%&match=any&username=&hide_filled=1&show[movie]=1&show[ilmovie]=1&show[tv]=1&show[iltv]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Lost Password/,
      'matchRegex': /מילות מפתח אחרות/,
      'both': true},
  {   'name': 'FZN',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADyklEQVRIx7WWu4udVRTFf2ufc2fuzOQdIZJCAwoBGcl/kEYLrYLBR2MqGwUbCxFF09n4SpnCIkEsJBDRJlhHiDaiQrCxEoJFJo+Jk8zjft85y+Lem3tnnBtvEnL4yv3ts89ea6+9BMAiPAtBWqMGIR74VBOVMgcV/oDfExyCI6QGCkroIbIDEgQ0RIMPwFXB66RVSFPn8LRRaih7MzIOBPZ05et/o2yDcUZkYhUHpQWNVaftSs4ACbdAszlmS/EJOkQhljPOkKAc/f7baZ5+8fgra5evTBM5t/gkyZGcicojORs5Rwyhv4+TO94WbgUKxootsnNJlVLu64K20X+BAlwBYuxGS0GY6kfTolnbGQuJfTu3gnniNRyDKlfWNqP3+ChHp621XTxcLp1biXBITfFfV9InX+5CKqXmSWTTPz2nDkbY6gzCqklQ+n1OhHu1Q21OfXAtwkAktxvKSWfO7ya1WHnisCiQEB6gqX5OQCkBFmCXdPz59cXDxSZCbevrN+PEu/uI2u9NnjyOhRoYCMJQh6B6yCFDdFJ75pNbOTslJC/fist/5p9/mye1EODJFxzcgwObIm6uU3tDNmuQXVD0xcmba+vev9+lEXh2hjfef4woWMgw+QVHT5/dhPmxV0m++whkiGee7r384tqeXS4tueOl6+ns+e7VG4nw3VLigURUIIq+O720MMfMLIJew445f3hqr2LUxfu6YOwmG/P2iZWcPT9XmkYK1lbjrZM7SwnTV2WNCeRUm8R90LBQPbhfH7+zrKgKhd00LN3QNxcWCA3p0I+cDPLFYy9ABwyBZoi+mAtZxFefXc2ZbpfSqlaXEm9+tKttZ8itCNwn9j1BVuwg5QEfB1pibMLHn9t46ol2vVe7XdmO4Kdf04+/zCpVF9mGdohAzpM2oGtFdXxLIaFKSV9/vnR7VXt3u9fDFvDep12x4bJFFWYjlf7K9ATaeKSYElhSP+OOeW9sjAhy6dzt7RbOgYiZTBUhrq9sKxeblcp2wDrQWXC7Ss4CUsekYSWF9Tt3/6nYWa3czay325ucpM307z8LQ7EoAKWoj1F/uqtHxkoDmmrKfWApTAbaO4rhhtliFMZsW7IUVqHRtLNgQ2f6hdO2VaSXcFALBKOF2oGGSCi2OB6AmqCBMsG5jNkWtZk6jzZIHWw07u862/wpgUlFSvcwg7b75om6J2MRFcdAjcf9nbeUOBIAe9L4eKTqaqgkWMaHiB5VSJsszDYN6BNXE7++zFUThbIAPyS4BX/jIzBLrFLjoQx2NWqpu3EXLsC1fwHfqshpPMqZmAAAAABJRU5ErkJggg==',
      'searchUrl': 'http://fluxzone.org/browse.php?search=%tt%&blah=2&cat=0&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|.Login</,
      'matchRegex': /sit nimic!</,
      'both': true},
  {   'name': 'GD',
      'searchUrl': 'https://greekdiamond.info/index.php?page=torrents&search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Δεν είστε εξουσιοδοτημένος/,
      'matchRegex': />0<\/span> matches/,
      'both': true},
  {   'name': 'GiroTor',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://girotorrent.org/index.php?page=torrents&search=%search_string_orig%+%year%&category=0&options=1&active=0',
      'loggedOutRegex': /Cloudflare|Ray ID|OOppss/,
      'matchRegex': /download.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'GT',
      'searchUrl': 'https://greek-team.cc/browse.php?incldead=0&search=%search_string_orig%&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Retrieve Password/,
      'matchRegex': /No data found/,
      'both': true},
  {   'name': 'HB',
      'searchUrl': 'https://hebits.net/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|>התחבר</,
      'matchRegex': /לא נמצאו תוצאות עבור החיפוש שלך/,
      'both': true},
  {   'name': 'HB-Req',
      'searchUrl': 'https://hebits.net/requests.php?submit=true&search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|>התחבר</,
      'matchRegex': /לא נמצא דבר/,
      'both': true},
  {   'name': 'HD-Olimpo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAByUExURQA4cQAAOAAcOAAcVQA4VQA4cQBVcQBVjRxVcRxVjThVcVVxjXFxcXGNjY1xjY2NjY2Nqo2qqo2qxqqNjaqqjaqqqqqqxqrGxqrG4saqqsaqxsbGxsbG4sbi4uLGxuLixuLi4uLi/+L////i4v//4v///220wUYAAAABdFJOUwBA5thmAAACN0lEQVRYw+WXgXLbIAyG3cZkTbsV7BacFbyos3n/V5wAG0OCE4K32+323+UuIeZDIFlIVVVVpFiVFSHbCIRsI5CN8gBlJVHum+oDTSPqgzG2Amh1rgA6lgA0I2RpgrBiwIwQiS3cR5DnhzhvcbQazJPD9MMJRj0tEhECN7JGcJRxhLTfOBcy0o+I0JwDcgR6AegSQERoSwA8APQlAGfCdN5bAboIIKc9GDfnAJgVoZS+vrqXbgFAMpCsPudIFeGoDABwCRiXvSHfA4ZgONhCAhA+qZUHBIFjJ/R5gH4VAH8doP5vgLwDMMdBtwKAPw6QPll7ALjBfg0wRgAQXdcdVb8kcoBbFoz+yYh0H+DKVfLbAH0hAHIBWl+cwF0ADeYKMxccZ4xDdOFmeQHMZE4p//aIeo4IWRZIZ4CUzw+G8DIRdDYAHAVE/bjb1XUQynmA+eAGUdv5V0P5dA3Q1Xb+vr14mRaAPK3cC/bPFEDFXrgGwMUs4HAJ8BbINQAsgP2hXc0Hxl1JAASAL4fIC2q5F1zNlAI4/HAOGDBdOAv0HK8YrHFCCV8m4wX0I3lytzOczHof/gi0jVdJ1gFamkDakf2LEI0QS7nQOQNsDfg9AfBn8ClaTGnHI34wt4kW1TSNUC5zSsp5w0kacKtUtwZgwcLpeak7ZpfKZv4bJYUAnP+V0ndKCgH6J67//pZoebBudNXjjUPA+emeaSr0XYkfVv5e6IGOrTddm7u2fxiwufXd3nxvbP9/AXLRMh9BCbaMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://hd-olimpo.club/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Olvidaste tu contraseña/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'HD-Olimpo-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAByUExURQA4cQAAOAAcOAAcVQA4VQA4cQBVcQBVjRxVcRxVjThVcVVxjXFxcXGNjY1xjY2NjY2Nqo2qqo2qxqqNjaqqjaqqqqqqxqrGxqrG4saqqsaqxsbGxsbG4sbi4uLGxuLixuLi4uLi/+L////i4v//4v///220wUYAAAABdFJOUwBA5thmAAACN0lEQVRYw+WXgXLbIAyG3cZkTbsV7BacFbyos3n/V5wAG0OCE4K32+323+UuIeZDIFlIVVVVpFiVFSHbCIRsI5CN8gBlJVHum+oDTSPqgzG2Amh1rgA6lgA0I2RpgrBiwIwQiS3cR5DnhzhvcbQazJPD9MMJRj0tEhECN7JGcJRxhLTfOBcy0o+I0JwDcgR6AegSQERoSwA8APQlAGfCdN5bAboIIKc9GDfnAJgVoZS+vrqXbgFAMpCsPudIFeGoDABwCRiXvSHfA4ZgONhCAhA+qZUHBIFjJ/R5gH4VAH8doP5vgLwDMMdBtwKAPw6QPll7ALjBfg0wRgAQXdcdVb8kcoBbFoz+yYh0H+DKVfLbAH0hAHIBWl+cwF0ADeYKMxccZ4xDdOFmeQHMZE4p//aIeo4IWRZIZ4CUzw+G8DIRdDYAHAVE/bjb1XUQynmA+eAGUdv5V0P5dA3Q1Xb+vr14mRaAPK3cC/bPFEDFXrgGwMUs4HAJ8BbINQAsgP2hXc0Hxl1JAASAL4fIC2q5F1zNlAI4/HAOGDBdOAv0HK8YrHFCCV8m4wX0I3lytzOczHof/gi0jVdJ1gFamkDakf2LEI0QS7nQOQNsDfg9AfBn8ClaTGnHI34wt4kW1TSNUC5zSsp5w0kacKtUtwZgwcLpeak7ZpfKZv4bJYUAnP+V0ndKCgH6J67//pZoebBudNXjjUPA+emeaSr0XYkfVv5e6IGOrTddm7u2fxiwufXd3nxvbP9/AXLRMh9BCbaMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://hd-olimpo.club/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Olvidaste tu contraseña/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HD-U',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://hd-united.vn/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HD-U-Req',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://hd-united.vn/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HDb',
      'searchUrl': 'https://hdbits.org/browse.php?c1=1&c2=1&c3=1&c4=1&c5=1&c7=1&c8=1&imdb=%tt%',
      'loggedOutRegex': /Make sure your passcode generating|nginx/,
      'matchRegex': /Nothing here!/,
      'both': true},
  {   'name': 'HDME',
      'searchUrl': 'https://hdme.eu/browse.php?blah=2&cat=0&incldead=1&search=%tt%',
      'loggedOutRegex': /You need cookies enabled/,
      'matchRegex': /Try again with a refined search string./},
  {   'name': 'HDME',
      'searchUrl': 'https://hdme.eu/browse.php?search=%search_string%&blah=0&cat=0&incldead=1',
      'loggedOutRegex': /You need cookies enabled/,
      'matchRegex': /Try again with a refined search string./,
      'TV': true},
  {   'name': 'HDSpace',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACJVBMVEUAAAAICAgMDAwUFBQYGBgcHBweHh4gICAgICIkJCQmJiYoKCgqKiosLCwuLi4wMDAyMjIyMjQ0NDQ0NDY0ODg4NjY4ODg4ODw4Ojw6PD48PDw8PD48PEA8PkA+PkJAQEBAQERAQkJAQkRCQkZEREREREZEREhERkhGREZGRkhGSEpISEhISExISkpISkxITExITE5KSkxKTE5MTExMTFBMTlBMUFBOTExOUFJQUFBQUFJQUFRQUlRSUlZSVFZUVFRUVFZUVFhUVlhWVlpYWFpYWFxYWlxaWlxcXGBcXmBcYGBeXmBeYGJgYGBgYGJgYGRgYmRgZGRiZGZkZGRkZGhkZmhmaGpoaGxoamxobGxqampqam5sbGxsbHBsbnBscHBucHBucHJwcHBwcHRwcnBwdHBwdHRydHR0dHR0dHh0eHh2dnZ2eHh4eHh4eHp4eHx4enx4fHx8fIB8gIB+foKAgISAhISChIaEhIiEiIiIiIyIjIqIjIyMjI6MjJCMkI6QkJCQkJSQkpKQkpSQlJSUlJiUmJiYmJiYnJyanJyanJ6cnKCcoKCgoKCgpKSkpKimpqqmqqioqKyoqqqsrLCwsLCwsLSwtLS0tLi4uLi4uLy8vLy8vMC+wL7AwMDAwMTAxMDAxMTExMjIyMjIyMzMzMzM0NDO0tDQ0NDU2NjY2NjY2NzY3Njc4Nzc4ODg4ODk5OTk6Ojo7Ozs8PDw9PD0+PT4+PweuDG8AAADNElEQVQYGV3By25bVRQG4H/vtfY+F5/YTuLESVyqgNQSqQgGVAhRxICCuAnEpJ0xYNIBPATPwQMwYwoCBJ2WQAdQAapUNWrqxCEXJ/E5ts9l36gAMeD7xEs1FLOFMhyaTE+cS1xZKX3ACJIF0aZr+dC4kIagJZVBqQVbIgQlnL3sp4IpcQjoqLkSAk3HWHFiktJ4awKPagFJmohhglBdz9H6kmq8ayiEYJzLbSC66IT0WgpvLLGYt5MqFsEiSNG1ThuS3grFqW6gPFEC1coGKWlNIJLCwrNUsRM+CL5jk2u1n3bqY2Q21zqfeFhB0msJJZtSeLng6twn9d4UilQWgzlW4Mhbkqb16k+EFPrer/ym+cXhb1IvwrCuAyEsrHmFXit16kr3QEr8w51nCUsNRNL+cRyj37UaV0Qe4z/cYxZkKAonLsnai4cJLhWvnMyNMSTyCUA169KlXqqGsvV+8jhr92KKjoY5LqlIVfAVg4MgJPMYHdU6ia+mkGSHsb6G722MhthCERIyjKfSUPFyRGxSz8nYGzB8zaqRJJP49hTXW8NtfCg1WrNt9Jss3imQboobIro9Cvi/Txa8+bzEi4nU8ov9gCdab+BfsgOR5ad7JZKu4ulXHunbB3fw3us3b+HTdz3s5BZot4i/Bl6QQf5osfrB4n3Qa+kRcNH64MoGmccPFVZ7MuJz4IY/Pcf7ld8Gnqa6qh4B6f7PBulVE8AWcnP8ZZDPH9O3iKdw5/V3wGgErF2nwwAWCOHuMT6eTiYN1kddXZwNAVD/ZdKloERc2MMTz71T6Ggpn6tlOT6f2YDIt58Z3483OvTZ7wX05a2z5U5qDqpa1mdVYznl6NkNsb7VYZYf2c7+nxdXUJTFWFvfnlml1hVtrFS8Gj/e47t1MjyKBr2dh6IVO9ipEytZItpr5nBcmwcFl8iHSbt5cM9m7blQDKWVnIamqk9OHyW9Ne4fRDqqv/EpTaeFlqWqcTpD0lCv26Kl/li8NSHXEUUsfeMz8qwhBQYFBoPFyuh8h0u2yQwizJ2NrffOcmswxJa7sATMdn+r2M+1KrwuQFQL3+md2tkodNfLFC7ffdiovwAwkJZAwmXSqAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hd-space.org/index.php?page=torrents&active=0&options=2&search=%nott%',
      'loggedOutRegex': /not authorized to view the Torrents!/,
      'matchRegex': /<td colspan="2" align="center"> <\/td>/,
      'both': true},
  {   'name': 'HDSpain',
      'searchUrl': 'https://www.hd-spain.com/browse.php?%search_string_orig%',
      'loggedOutRegex': /Error 404 No encontrado/,
      'matchRegex': /xxx Change Me xxx/,
      'both': true},
  {   'name': 'HDT',
      'icon': 'https://hdts.ru/favicon.ico',
      'searchUrl': 'https://hd-torrents.org/torrents.php?active=0&options=2&search=%tt%',
      'loggedOutRegex': /not authorized to view this/,
      'matchRegex': /No torrents here/,
      'both': true},
  {   'name': 'HDT-Req',
      'icon': 'https://hdts.ru/favicon.ico',
      'searchUrl': 'https://hd-torrents.org/requests.php?search=%search_string_orig%',
      'loggedOutRegex': /not autorized to view this/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HDTurk',
      'searchUrl': 'https://hdturk.club/browse.php?do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Lütfen Giriş yapınız/,
      'matchRegex': /dl.png/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HQS',
      'searchUrl': 'https://hqsource.org/browse.php?c36=1&c3=1&c2=1&c49=1&c1=1&c8=1&c4=1&c7=1&c45=1&c9=1&c5=1&search=%search_string_orig%+%year%&blah=1&incldead=1&polish=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Zapomniałes hasła/,
      'matchRegex': /Nic nie znaleziono/},
  {   'name': 'HT',
      'searchUrl': 'https://huntorrent.net/browse.php?search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Elfelejtett jelszó/,
      'matchRegex': /Az általad megadott/,
      'both': true},
  {   'name': 'IPT',
      'searchUrl': 'https://ip.findnemo.net/t?q=%tt%',
      'loggedOutRegex': /Ray ID|security check to access|Forgot your password/,
      'matchRegex': /No Torrents Found!/},
  {   'name': 'IPT',
      'searchUrl': 'https://ip.findnemo.net/t?72=&73=&q=%search_string%&qf=ti',
      'loggedOutRegex': /Ray ID|security check to access|Forgot your password/,
      'matchRegex': /No Torrents Found!/,
      'TV': true},
  {   'name': 'IPT-Req',
      'searchUrl': 'https://ip.findnemo.net/requests?72=&73=&q="%search_string_orig%"',
      'loggedOutRegex': /Ray ID|security check to access|Forgot your password/,
      'matchRegex': /\( 0 requests/,
      'both': true},
  {   'name': 'IS',
      'searchUrl': 'https://immortalseed.me/browse.php?do=search&keywords=%tt%&search_type=t_genre',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password/,
      'matchRegex': />Nothing Found</},
  {   'name': 'IS',
      'searchUrl': 'https://immortalseed.me/browse.php?do=search&keywords=%search_string_orig%&search_type=t_name',
      'mPOST': '{key:"selectcats[]",value:"4"},{key:"selectcats[]",value:"6"},{key:"selectcats[]",value:"8"},{key:"selectcats[]",value:"9"},{key:"selectcats[]",value:"47"},{key:"selectcats[]",value:"48"},{key:"selectcats[]",value:"53"},{key:"selectcats[]",value:"54"},{key:"filtercats",value:"Filter"}',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password/,
      'matchRegex': />Nothing Found</,
      'TV': true},
  {   'name': 'IS-Req',
      'searchUrl': 'https://immortalseed.me/viewrequests.php?do=search_request',
      'mPOST': 'do=search_request&keywords=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password/,
      'matchRegex': /input_true.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'IT',
      'searchUrl': 'https://newinsane.info/browse.php?search=%tt%',
      'loggedOutRegex': /Ray ID|login_button/,
      'matchRegex': /Nincs találat|Nothing found|Nu s-a găsit|Nič sa nenašlo|kein treffer/,
      'both': true},
  {   'name': 'IT-Req',
      'searchUrl': 'https://newinsane.info/requests.php?category=0&search=%search_string_orig%&status=ungranted',
      'loggedOutRegex': /Ray ID|login_button/,
      'matchRegex': /Nincs találat|Nothing found|Nu s-a găsit|Nič sa nenašlo|kein treffer/,
      'both': true},
  {   'name': 'iTS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAAAAAP8A/wAA////AAD/AP///wD/////////AACGhHKfAAAACXRSTlMAgICAgICAgMCrlKeDAAAB80lEQVQ4y8WUMWtbQRCEB8fkeJ2rQDoVgZBOhSHtC3IiXieckKDuGRTEdlc8LO5fyNJ6L9+/TXGS7D8Qcu3s7Mzc3p70X0/dv0WdgVXJRoFBllLUjtwBhMQfBVBGSb4vNnbYADOxEWAcJcVzoe8YLJgLFwH8luTRsTXKQKxETICxlOR3ggELmKkjAogqaZo0YQHVs9LgxEkjJSXvwGAmlQonjW1Od3UAiJUe2WCBHSVF7eodFhjz5vXEeD6WCABs1byeGAdP+ycAmMnALjkO3eGAR+BZrSA4SgkvEOEEc4Fdkk8/0gAERK8J7Jz8apEXsiDwrOvba7DGUC1luQaiDpJ2GNhSkupj1A4M/5SlFmUrST4QxYB430styo0kuRFrDIv19swYJcl/uRcwnmwpCYO4kZQO+X5VMBhLkgSGj5LE9vFbAVh2dVcyYHEjSdNPKAR8TEuLikFkSUpbMIhYaSo4GF/ak0vYEOCSSrv3n2cAIzhmqYRjkBrQwRoYJUGA+bwRSmCGf5d2mANjliSVVrYflQIC47Z1wgzgIau0wfpFmsD8nVTaZB/yBQA2c6lgGJv7Swoz/E1TM+jnL62IPuvUanMK0YD+c/Nn7Bf5DLj7Ip2Nf/0wv2ynR38yXob+avWytjnvzuSU8qt9Tq9q/smH8RfRnFL/2ah1LgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://shadowthein.net/browse.php?incldead=1&search=%tt%&search_in=all',
      'loggedOutRegex': /most comprehensive people|JavaScript is disabled/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'iTS-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAHlBMVEUAAAAAAP8A/wAA////AAD/AP///wD/////////AACGhHKfAAAACXRSTlMAgICAgICAgMCrlKeDAAAB80lEQVQ4y8WUMWtbQRCEB8fkeJ2rQDoVgZBOhSHtC3IiXieckKDuGRTEdlc8LO5fyNJ6L9+/TXGS7D8Qcu3s7Mzc3p70X0/dv0WdgVXJRoFBllLUjtwBhMQfBVBGSb4vNnbYADOxEWAcJcVzoe8YLJgLFwH8luTRsTXKQKxETICxlOR3ggELmKkjAogqaZo0YQHVs9LgxEkjJSXvwGAmlQonjW1Od3UAiJUe2WCBHSVF7eodFhjz5vXEeD6WCABs1byeGAdP+ycAmMnALjkO3eGAR+BZrSA4SgkvEOEEc4Fdkk8/0gAERK8J7Jz8apEXsiDwrOvba7DGUC1luQaiDpJ2GNhSkupj1A4M/5SlFmUrST4QxYB430styo0kuRFrDIv19swYJcl/uRcwnmwpCYO4kZQO+X5VMBhLkgSGj5LE9vFbAVh2dVcyYHEjSdNPKAR8TEuLikFkSUpbMIhYaSo4GF/ak0vYEOCSSrv3n2cAIzhmqYRjkBrQwRoYJUGA+bwRSmCGf5d2mANjliSVVrYflQIC47Z1wgzgIau0wfpFmsD8nVTaZB/yBQA2c6lgGJv7Swoz/E1TM+jnL62IPuvUanMK0YD+c/Nn7Bf5DLj7Ip2Nf/0wv2ynR38yXob+avWytjnvzuSU8qt9Tq9q/smH8RfRnFL/2ah1LgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://shadowthein.net/viewrequests.php?search=%search_string_orig%',
      'loggedOutRegex': /most comprehensive people|JavaScript is disabled/,
      'matchRegex': />No</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'JPTV',
      'searchUrl': 'https://jptv.club/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'JPTV-Req',
      'searchUrl': 'https://jptv.club/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'KG',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://karagarga.in/browse.php?sort=added&search=%nott%&search_type=imdb&d=DESC',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in!/,
      'matchRegex': /No torrents found/,
      'rateLimit': 125,
      'both': true},
  {   'name': 'KG-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAe+SURBVFjD7Vl7UBRHGuePS1KiwJKF3Z3Zme6e7pnZNxAxJGcOyxCPV5IqY2nFAyVRjkhFjWBCkcSgVsqKIRFXjqoTMJRUmVM5c5KcRxH0LE2dGiSoVZHzjHJGD3MXPF4aJRYC5ttdg/vimWgld3Z1dX3bM93zm9/36+/rng25GRIybL1zZfiHhoxwbdCrwCRDrbcR5Ab3EweDldvDJwZojG/redLtn772oG/PhBi6m+UeoB8CKPCmH7MMBMcR0HPXAN38qQEaO0Pjeo8JlcGhZgwT3jVANycCyC/E+Y33v+oz8JbRc+XKB7UfOUt/d+jQEb/bfQK0VzT3e7r/taBpYWhY0EwypI9du3Yn/DLxgSmaUI1Wq+czMp/bULLx44aGb69fH/ucYwLkR4anw/t+KMVvbwgLe3ByeGQ0L0KN1Ok1kdHh4ZEYY6dzozcNweYcBtBwidMX64C7+ky6evWb9/0iNDqK1+n4KIMRAAFDqslWXb2ttfVse/t/hku3gY+bGCAfNBs2bHrg/rDICJ2RJxyPovR8pI6DWrNrd6BA7wQgHzHu3v3hlMkag15EIkMiJZKCqRKu1T2Rkv7fzm4/KHcI0KDHa2B/cfrM1LgEmVkTHn4sLi7BpDoQZpxIdDzCVHXExpeUbPpBDI067JbL3JHlxo3+3zy7QFVsjyTMsJjjZNmuKA5CrTqOcILE8Tg8THv/faHLl7/U29sbKOqxAhp5mLvt9xiNjU2xjvipDz0iyzbG7JTZkWSVZAdlNt5IDAYEkuI5HDopLDk59csvz48PkKf3ujtgjCXw9vXdyF70AkGKzCyUWiVqx9QmEIsRmRizISyDqgSjJAoSz4vAU0xMXGtr65jSrvePffv2OZ3Obdveh8EDAwPD7Etd5c8f7iFIplhl1EyICRMLlWMIs0syIDNTZgZueA5hRAUBDGHSpNA5c+b29/e70qx75tEZcsvixoULF7Zv356RkZmf//J7W6qOHm1qb7/kh6b3Wm/yrDSRJ7JklogKlEjESqiNyg7JVa2KaqPExOlFjBjBTBRxdLReq41uavpsCNAogRFKZ2dXc/OxEydOtLVdzF2yzGF/iEpqjGPq4zN//dzC7E3OsiOHG1taTn3WdCx3yVJdFMckk+R2GcgZAInYDC4TiVkkKjBkUuxUMvE8QUhiTKFU1uu4Xz0246uv/h00YwRhqL6+YfPvK/9YU/tqYZHZZLdaYtycy3bbVEW2cgYEqzo2JkFV7EYOQ8ihRAWvASBgCGSEiIUTFYOg8CIzilSSVFWxYsx4I8LYhUmRLVFa3bx5z3Z394wQnG4DOnXqH59//vfurm/+2fqvv+7/ZEVeASYKZxCNRhwXC6vpYZstViIm8IVMzaBWwAocyLJFoiYsmQRswtSCJLOAVURVETHKTADL4zIJIDFFllXwXU7OC6CN4Radj4ZOn/7ik4N/O3++7dDhTysqtrxXtbW4+N2VK1eqqmowGDB2LWNAA7ohWIYqMzOTzRI8nshGRD2ARKIgSRXgBmaG5SZB7EYEiwRaQoA5FhGhyc/P92AaRdQgo97eb717+vr6Ojs6iouLFyxYSCmTQMdEEQUwFFAYeAFyhUiYQBgPCwrLCCuIKGAALBcygE4UiTAJU/Q9IPAgLLqsrKyOjo5A3wUJjLe15oWsu7s7a+HzgAOLFPwFMUYXzQNJmMgCpkZMOYHwcAlRYEVADEhyAcIu3BhJSCCga6jgPoAFmMLDw1NSUs6dO+fnu3FsT5uammYkJmkhjxtEUP2cZ+ZRaoL0jpkKUIAV0LIougCB+MCAFnBTSYmK0onCLXqMRhEwiSLiedir6PLy8jw8+QfGUZOrp//9bTuBnj99UFu5pcq1KSsuccTEw9YHMZUwFUBIGOQFopEh+UPqiI2ZZjbbXnmlAPwFUHheAAMAcZxREMBGSUlJlZWVQ3oaX7YHPdXVfbzqtTUf1e6p2VHjGfhp49GsRb9lJuuUyChgCwI3LD2oJtUOsJ5+ak5SUvJbb71dXl4JgXHatASN5kGNRqvXGxITE+fOnZuenj5//vytW7d6gvj4ADU2Nq5bt66trQ1iySZnqTfPf9hRs/ylvPj4R6dMjgTJC0YKmFa9vhZC0RtvrFYUtaWlZfPmzTk5ORUVFTNnzoyIiOA4bv369ZmZmbm5ucuWLQOerl69OqLLPH3fb8jcgepUQUEBGGVlZfBOgSI7cvjIkiVLIRYkPZ4M9Dg3lqWlPbVocXZhYWFaWircsHPnjubm5q6urtTU1OnTp8+aNau8vHz27NkrVqwoKiqqra0FJ4wD0NmzZ2FqGFNVVQXGtWvXApMRlHeKS14tXPX6a0WpKU/+ZU89QhgSYnr6k6Wlpe7I0gktZExYItnZ2cANxBQgac2aNfv374ed0zhcBgwtXrw4IyPDaoWcgOvr6wMjG9hXrnxz5kzrsWPHQbXQZmU9/+KLS7/+uh3YvXz5svdB5dKlS0APvB4wtHbt2urqatj/hAQ9nfh9ePP0Qyg6fvz43r176+rqGhoaLl68GPQFhiLqgQMH2tvbe3p6Dh484DpD9vT4fSyETljz4ERoT548CfQEcdkIgEb4nhd0bznC2TzwaHZXz/Y3x3e2/3/9PvS/AOjeV9ifL6Cf7J8v9wC56ncEdByCpVKA+wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://karagarga.in/viewrequests.php?search=%nott%&filter=true',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in!/,
      'matchRegex': /1&nbsp;-/,
      'positiveMatch': true,
      'rateLimit': 125,
      'both': true},
  {   'name': 'Lat-Team',
      'searchUrl': 'https://lat-team.com/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Lat-Team-Req',
      'searchUrl': 'https://lat-team.com/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /label-danger/,
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
  {   'name': 'M-TB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAAAdXpba5/Infb3+/v7H3fExndfu8PG30+p/sNs7ueVCz+6wx9ljpdoSOVtbkcCau9aYw+bT19o+cZ7NvudpAAAAAXRSTlMAQObYZgAAAdpJREFUSMedllGSpCAQRLd1VWAKKPH+d90EhAIap3cmfwyj37PSAFv/zONy3n+Ywy/JZ6nS4vwffnnNpIi1/06puKflyFmWjf2D4iq+CR6z0eW+4b1ahL0Npd0jz8K1Br9G/sr3SstU2Ei7Ka+mOKLId8Yjv5UQXxN+m7J5Ajel3N1/E7anY5ivYQArQQYaIeZ6F2V1p2zhUUm/+kI0ZUMIpM4YrS/XCJpURYXFov89Mo8Jd6c8gAnIyKYclHjW1r+aASII2wgagdAMyAIFYUUAnHgIZYCHQLhSEBwbFrNEsJ2gNZ8xocAhEPGp1XELFjyE2qgIdEQ8ELNOoSSATsLVCVwFlVg4ItwDquATUgHQFEIQIfNXI9hOyEcItgjg1xX/H1Uoxg0kcNG2Cvu6jkJOJ9h953jO+8036wbjWaCp4EXAFdPRGHN2gmsehphGUFXAglehfRqSUSpBiOv3BSEEYlRLvAjIunq/l87GqCML1hqzIzIAnYqBNMKiTghIMmQARnTCgn0H4euOCOCnQiBtDYTWyI0c2LdOO2KER8YBMmIUxBB+MER448fX1rPQ3MDcEOGZl1LrYJhpH1HEQIYF+GAgER7rzGuJIzv0g1KDk599aoz0rz59/gH+cy8FZq5cPwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://masters-tb.com/browse.php?search=%tt%&cat=0&incldead=1&searchrs=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Трябва да влезеш в акаунта/,
      'matchRegex': /Открити торенти - 0/,
      'rateLimit': 3000,
      'both': true},
  {   'name': 'MH',
      'searchUrl': 'https://magic-heaven.info/browse.php?do=search&keywords=%search_string_orig%+%year%&search_type=t_name&category=0&include_dead_torrents=no',
      'loggedOutRegex': /Cloudflare|Ray ID|be redirected/,
      'matchRegex': /\/dl.png/,
      'positiveMatch': true},
  {   'name': 'MH',
      'searchUrl': 'https://magic-heaven.info/browse.php?do=search&keywords=%search_string_orig%&search_type=t_name&category=0&include_dead_torrents=no',
      'loggedOutRegex': /Cloudflare|Ray ID|be redirected/,
      'matchRegex': /\/dl.png/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'Milkie',
      'icon': 'https://milkie.cc/favicon.png',
      'searchUrl': 'https://milkie.cc/api/v1/torrents?query=%search_string%+%year%&oby=created_at&odir=desc&categories=1&pi=0&ps=50',
      'goToUrl': 'https://milkie.cc/browse?query=%search_string%+%year%&categories=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /hits":0/},
  {   'name': 'Milkie',
      'icon': 'https://milkie.cc/favicon.png',
      'searchUrl': 'https://milkie.cc/api/v1/torrents?query=%search_string%&oby=created_at&odir=desc&categories=2&pi=0&ps=50',
      'goToUrl': 'https://milkie.cc/browse?query=%search_string%&categories=2',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /hits":0/,
      'TV': true},
  {   'name': 'MKO',
      'icon': 'https://makingoff.org/forum/favicon.ico',
      'searchUrl': 'https://indice.makingoff.org/response.php?search_term=%tt%',
      'goToUrl': 'https://indice.makingoff.org/index.php?origem=busca&search_term=%tt%',
      'loggedOutRegex': /que todos efetuem login/,
      'matchRegex': /total":0/,
      'both': true},
  {   'name': 'MOJBLiNK',
      'searchUrl': 'https://www.mojblink.si/brskanje/?c50=1&c70=1&c71=1&c72=1&c73=1&c75=1&c121=1&c6=1&c37=1&c40=1&c39=1&c41=1&c4=1&c3=1&c43=1&c44=1&c25=1&c46=1&c47=1&c115=1&c1=1&c48=1&c123=1&c74=1&c120=1&search=%search_string_orig%+%year%&searchin=title&incldead=0&st=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Niste prijavljeni|Prijava!/,
      'matchRegex': /ni vrnilo rezultatov/},
  {   'name': 'MOJBLiNK',
      'searchUrl': 'https://www.mojblink.si/brskanje/?c50=1&c5=1&c82=1&c2=1&c125=1&search=%search_string_orig%&searchin=title&incldead=0&st=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Niste prijavljeni|Prijava!/,
      'matchRegex': /ni vrnilo rezultatov/,
      'TV': true},
  {   'name': 'MovieTorrentz',
      'searchUrl': 'https://m2g.link/torrents-search.php?c112=1&c127=1&c113=1&c108=1&c110=1&c109=1&c126=1&c107=1&search=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Account/,
      'matchRegex': /Nothing Found/},
  {   'name': 'MovieTorrentz',
      'searchUrl': 'https://m2g.link/torrents-search.php?c116=1&c115=1&c128=1&c114=1&search=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Account/,
      'matchRegex': /Nothing Found/,
      'TV': true},
  {   'name': 'MP',
      'searchUrl': 'https://majomparade.eu/letoltes.php?tipus=1&k=yes&name=https://www.imdb.com/title/%tt%&category[]=&tipuska=0&imdb_search=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Az oldal használatához/,
      'matchRegex': /Nincs találat/,
      'both': true},
  {   'name': 'MP-Req',
      'searchUrl': 'https://majomparade.eu/keresek.php?k=yes&name=%search_string_orig%&category=&majomt=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Az oldal használatához/,
      'matchRegex': />Nem</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'MS',
      'searchUrl': 'https://www.myspleen.org/browse.php?search=%search_string%&title=0&cat=0',
      'loggedOutRegex': /<title>MySpleen :: Login<\/title>/,
      'matchRegex': /<strong>Nothing found!<\/strong>/,
      'both': true},
  {   'name': 'MTV',
      'searchUrl': 'https://www.morethantv.me/torrents.php?filter_cat[1]=1&filter_cat[2]=1&title=+%2B%search_string%+%2B%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgotten password/,
      'spaceEncode': '+%2B',
      'matchRegex': /search did not match/},
  {   'name': 'MTV',
      'searchUrl': 'https://www.morethantv.me/torrents.php?filter_cat[3]=1&filter_cat[5]=1&filter_cat[4]=1&filter_cat[6]=1&title=+%2B%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgotten password/,
      'spaceEncode': '+%2B',
      'matchRegex': /search did not match/,
      'TV': true},
  {   'name': 'NB',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://norbits.net/browse.php?incldead=1&fullsearch=0&scenerelease=0&imdbsearch=%tt%&imdb_from=0&imdb_to=0&search=',
      'loggedOutRegex': /Ikke innlogget!/,
      'matchRegex': /<h3>Ingenting her!<\/h3>/,
      'both': true},
  {   'name': 'NBL',
      'searchUrl': 'https://nebulance.io/torrents.php?order_by=time&order_way=desc&searchtext=%search_string%&search_type=0&taglist=&tags_type=0',
      'loggedOutRegex': /have cookies disabled./,
      'matchRegex': /search did not match|are Cylons aboard/,
      'TV': true},
  {   'name': 'NBL-Req',
      'searchUrl': 'https://nebulance.io/requests.php?type=&submit=true&search=%search_string_orig%',
      'loggedOutRegex': /have cookies disabled./,
      'matchRegex': /No requests/,
      'TV': true},
  {   'name': 'nCore',
      'searchUrl': 'https://ncore.pro/torrents.php?mire=%tt%&miben=imdb&tipus=all_own',
      'loggedOutRegex': /Cloudflare|Ray ID|Jelszó-emlékeztető|Password recovery/,
      'matchRegex': /Nincs találat/,
      'both': true},
  {   'name': 'nCore-Req',
      'searchUrl': 'https://ncore.pro/requests.php?tipus=&mire=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Jelszó-emlékeztető|Password recovery/,
      'matchRegex': />\s*Nem\s*</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'NetHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAAKg+1Dn/BSoeaQs9INdM+twdR0qNcPW6DDz9r4+flhpN3U3OLt7/Hk5+ve4+fG0nD/AAAAAXRSTlMAQObYZgAAAxxJREFUSMetVc9LVFEYHXIYcRyV76lZTIvum1DKfr1nEAXBVGK/VhIPXY4hJgThWGibFkHaW5YUIbQYdNFWhVq0EoVaBVItW4iBa/vxB/R959477zYz7TyLO2/ud+79zjn3Pl5qn9H2cWLiTeW/5dwtnxj+zHbj+reQDAo3G9U/KarCe1xff6t4vvBwaPxaKIxibT3D9cINPGYvS5fnNYRpoj47xwT//da/9a+K+vbsn8A7V7s+p5w92/rvy8+yu8cGeVN4gAb9M3bJCTCgY3W2gs4k0ibySrX1DkUrjoXeVCo9ODjoaEsTdjUZSC4bRORE3MRpWf4S9fFYZsJ8Qljgv2fNcxlPiqh7ft3WwTc92pXs1cKEQ7HtAT552kcz5TEK4alzNoyikXASI9Fo/MzqaiXBUX02MDwGQvRB18GP2D0ig51VnomjaETXwR9Sea2xEyPPzEXRbdMjYIlbCioz1IPg2GUUDcMxgqY8Wy1B/mEEBwIhM83v5T5TKJ2QAwdBvK8jaFjYwX5LMiI4boB8ddC8+gB8/oRLudObRDbfMo6qiU7x8wumIugeGbiwrfmdIu8IHBd10Md5nWBFB90F/ZawBFE8Qj2CPiNeDlrCmIjCQpzhF4h1CYH4Q95gyrtVQgsjsl2L4pWCC+BXrMgdWkFwXfYWdI/kEHRK20QaHByeuQfnOTIOqSgZ2gbcMX5xntHoE31XTNTNLLUMUYy04hOLh0Up9E+Z41YQhR68gRBwifRxZ5XH2pgFbHI9JvHEUHrVqncPQQPpdzEI2lMec3fsBQYexfEc/z0N+WwFZswrAPyJYzYB+QtmVRoHsGffmOtCgLpAVkElRFlMwkRFLPMIXIEoi92YtKcd+/ImQQMtk8ZTACGYUgja4pX21KxwwW2PUkL4PTAwUJRJdABaIccFJDq7BjoyF9MwZrGsI+tI9vmh6KJDyGK312ElaUCF2q67aypftRqSqwBTV1WSViYkWHCRCyVOHEj7XR8flFpbPEv++dnZB37DTxIYVfgNP3uZNVvvR671yL4M8embgcHG+L64+Dm1z/gL1Ne6z3q5CzEAAAAASUVORK5CYII=',
      'searchUrl': 'https://nethd.org/torrents.php?search=%tt%&search_area=4',
      'loggedOutRegex': /Cloudflare|Ray ID|Không đăng nhập/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'NTELogo',
      'searchUrl': 'https://ntelogo.org/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'NTELogo-Req',
      'searchUrl': 'https://ntelogo.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'PD',
      'searchUrl': 'https://pirata.digital/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Esqueceu sua senha|Service Unavailable/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'PD-Req',
      'searchUrl': 'https://pirata.digital/requests/filter?tmdb=%tmdbid%&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Esqueceu sua senha|Service Unavailable/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'Peeratiko',
      'searchUrl': 'https://peeratiko.org/browse.php?cats4[]=60&cats4[]=1&cats4[]=9&cats4[]=62&cats4[]=15&cats4[]=16&cats4[]=18&cats4[]=19&cats4[]=17&cats4[]=21&cats4[]=22&cats4[]=10&cats4[]=13&cats4[]=14&search=%search_string_orig%+%year%&searchin=title&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': /Nothing found/},
  {   'name': 'Peeratiko',
      'searchUrl': 'https://peeratiko.org/browse.php?cats7[]=11&cats7[]=12&cats7[]=63&cats7[]=53&cats7[]=31&cats7[]=32&cats7[]=33&cats7[]=34&cats7[]=35&cats7[]=30&search=%search_string_orig%&searchin=title&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': /Nothing found/,
      'TV': true},
  {   'name': 'PHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAPhSURBVFjDzZdPiFVVHMc/v3Pue2+e8+a9sZnRUGqhRIsm+qtIWdYmQjBoEZlYRNtqEYGL2rSKaFNtatGiUlxEQQsZbRNKUBQoLRIpItFER51nOc+ZN/fe8+fXYt4bfb7rFII+f/Dj3Hs593w/53d+53B+QrE9CTwHPAyMAw2uz2aBJnAY+Ao4+F8/3AXsA/QG+b6ORqE9Cpy5geJdnwY2Xy2+Djh7E8S7fg5Y3xUXYOominf9QEebzQMQ7/rjBniewdkO09lqg7KHDLB6gAATCTDafXtgci0vPHsf823H+x8fYmHB9fQeqpTY9doWRkeq7P76CKdOX2TXq0+AQIyKKqhqoZI1gjHC/u9+49CPx7uf6wJcAG5bPTHMgT3buXv9OKemW2za9hkXZ9OeQeq1Cj9PvcL6O1dy9PfzvPXeQT7/8BkqZYsPcREigqLoFVsMBBFIrGG2lbLt5S859kcT4O+kO/iGe8e4Y1XGP82TtFspqrFvFqqRdusMF2ZmWTsmbLq/wYVzJ6nVSmiESlmIV0dBQBByF3FeWdmo8NiG8S4ASwBDZUdMz4KPiM+QAgBQcE1wc4SoVOw8IZ/BhhLnmhkf7fmLPI8ULcL2rbfz4D11YmYp28uRXQKIwaF+Dg1KcDnzaT9AOw0E1yY6j6oSfEZ080gs02q12f3NqWtm28bJChsnS6gHjXk/gGoghBSXK9Z4nnpkhPZCL0R1yJCYHJfHJegQMrwPqOZUhwwLaSxOQvFEnyJW0Oj7AdBADBkuj6yowCdvr+lmUI+lmSfLPIkVYvTEkKHBQ3Cgy2w49RDTxaTQUAQQIaZojIgIRqRIn85eAxVQh2oG0S4KLEegDjTrdCkAECJWMiqJcmleeffTOdpZXIJQoFoW3nxxhNG6AVWsBBJyrFgEv+yJI3iEDIMghQASSCRHreKdsnf/HD5cPQi8vr1M2VpUFSOBxDgSCQiBhezaEQjBY8kxgBQtgZGIwSEo1ii1qnBxrnfA2gohMR4rAQUSG7DiQIXGsLJza4ksLwZYtyYSQk7JCMYUAKR5JDE5HpBl1lLULYbRQJ57rFGiChMN+OCNhBil7zgWYfEgyiO1IXDuMoDpPhw+Fjl93jFed9SqHpF+CBGlVvWMNTzTTcdPvwZWjXoaw46RFY6ScZRsTsm6Ph8ecozVHZfmHd//0hsBAZhuKi+949n5tDC3AJnrn33uYO+3gZUj8MWUcmJ6sQWIsZPgerntPY7BGJj6AY7+qVemFccHeCM6YToXxEHZjOkUDYOyI4O+lG65Ja7lAy9MbonSbGDFqfyP8nwCqF9nlreAmeXK838B28oB4mWo2igAAAAASUVORK5CYII=',
      'searchUrl': 'https://privatehd.to/movies?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true},
  {   'name': 'PHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAADruwrhuSTly2XNpRHkwT7NrTZrvVs/AAAAAXRSTlMAQObYZgAAAIJJREFUKM+t0U0KgCAQhuG6Qf/7hA4gEa0FqXV1giBoHYbn7xuJSJTa+G5mfHYykac4fUruty2plQdiG5IwUEhMKaTJwAg4xSbRIADVDtCrPjCq1Qs9NsXVhJET5C3FFwPcCx225QVZg22uZ4Ks/gJGEZSMYGIm53Nh4PcuzimdY7td+tEu563AqZYAAAAASUVORK5CYII=',
      'searchUrl': 'https://privatehd.to/tv-shows?search=&imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /class="overlay-container"|class="movie-poster/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'PHD-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAAAAADruwrhuSTly2XNpRHkwT7NrTZrvVs/AAAAAXRSTlMAQObYZgAAAIJJREFUKM+t0U0KgCAQhuG6Qf/7hA4gEa0FqXV1giBoHYbn7xuJSJTa+G5mfHYykac4fUruty2plQdiG5IwUEhMKaTJwAg4xSbRIADVDtCrPjCq1Qs9NsXVhJET5C3FFwPcCx225QVZg22uZ4Ks/gJGEZSMYGIm53Nh4PcuzimdY7td+tEu563AqZYAAAAASUVORK5CYII=',
      'searchUrl': 'https://privatehd.to/requests?type=movie&search=%search_string%&language=0&condition=new',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /Vote this Request/,
      'positiveMatch': true},
  {   'name': 'PJs',
      'searchUrl': 'https://www.peerjunkies.com/browse.php?search=%search_string_orig%+%year%&cat=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': /Nothing Found/},
  {   'name': 'PJs',
      'searchUrl': 'https://www.peerjunkies.com/browse.php?search=%search_string_orig%&cat=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': /Nothing Found/,
      'TV': true},
  {   'name': 'Portugas',
      'searchUrl': 'https://portugas.org/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Esqueceu a sua password/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'Portugas-Req',
      'searchUrl': 'https://portugas.org/requests/filter?tmdb=%tmdbid%&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Esqueceu a sua password/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'PS',
      'searchUrl': 'https://polishsource.cz/browse.php?search=%tt%&incldead=1&scene=0&pl=0&sub=&search_in=nfo',
      'loggedOutRegex': /Cloudflare|Ray ID|Rejestracja</,
      'matchRegex': /Nic nie znaleziono/,
      'both': true},
  {   'name': 'PS-Req',
      'searchUrl': 'https://polishsource.cz/viewrequests.php?action=search&keywords=%search_string_orig%&filter=hide',
      'loggedOutRegex': /Cloudflare|Ray ID|Rejestracja</,
      'matchRegex': />Nie</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'PTE',
      'icon': 'https://cdn.pte.nu/img/favicon.ico',
      'searchUrl': 'https://pte.nu/apitorrents?tpage=1&cat[]=6&cat[]=7&cat[]=9&search=%search_string%',
      'goToUrl': 'https://pte.nu/torrents?cat=["6","7","9"]&search=%search_string%',
      'loggedOutRegex': /submit">Sign in/,
      'matchRegex': /"count":0/,
      'rateLimit': 250,
      'spaceEncode': ' '},
  {   'name': 'PTE',
      'icon': 'https://cdn.pte.nu/img/favicon.ico',
      'searchUrl': 'https://pte.nu/apitorrents?tpage=1&cat[]=11&cat[]=12&search=%search_string%',
      'goToUrl': 'https://pte.nu/torrents?cat=["11","12"]&search=%search_string%',
      'loggedOutRegex': /submit">Sign in/,
      'matchRegex': /"count":0/,
      'rateLimit': 250,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'PTE-IMDb',
      'icon': 'https://cdn.pte.nu/img/favicon.ico',
      'searchUrl': 'https://pte.nu/apitorrents?tpage=1&search=%tt%&nfo=true',
      'goToUrl': 'https://pte.nu/torrents?nfo=true&search=%tt%',
      'loggedOutRegex': /submit">Sign in/,
      'matchRegex': /"count":0/,
      'rateLimit': 250,
      'both': true},
  {   'name': 'PTF',
      'searchUrl': 'https://ptfiles.net/browse.php?search=%search_string%&incldead=0&title=0',
      'loggedOutRegex': /Forgot your password/,
      'matchRegex': /Nothing found!/},
  {   'name': 'PTM',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAACaUlEQVQoz2NgQAL8bIz+xuzdORLr2qRXhTD2xfFFO4vJ8DExYAX64oy1xszJljLRDnpxjnpZ4UaF+U45RQGRKTEmltYSirqSinrsvKJQ1XayHPMNGSI0lM9dvPr123cg+vXr17bdB4+cOAvhAtG379/1zF1BqjXEObqUGKYpsbV1TfoPAw8fPVHRMtp/+ARcZO+h40zsAiANmdoshVwMcYaab96+h0unphcFBcXCuX///YsK9eNkYWQQ52LoVWfoEGbvmTADLn3j5l15Wb1TZy7ARTZu29trymsuycBgLMJ0IZk521f/w8dPcOnktLzImGQ49/fvP+EebjtDmNI0WBgspZgOV7FPnjEPLn3m/CVFNZ3zl67CRVas27q1iev/SoY6awYGF1mW9DDTz1++wqVbuibXNHYgXP/3b3KQ3f8+xu9TWKr1mBh0hDlnzF0Gl/7x4+eWnfsPHj114AgQnQSi0oqGwxmcV/QY1hkxxmswMahqGX/7/gOuoaioZJIbX6MYf70U/ywX/oXJ/EfD2b+GMyyXYygUYLCSYWRQN7D59+8fRPX5S9fK1cU+BjLct2C4osrwo5np/0LGdxEMt9wYlsozlKgyc7ECY4GVe+W6bRANSTFpNz2Z/nYx/J/F8K+X4f8KxjuJDIeMGbbpMcxTZXCVZ4GmC1U9a6Dqi5evd8fI/l8j83894/8rYv8vSZ30Y9iqwXTMgGGBMUOACnISZOacu3h1THLOnIlhL99N//nK999FxZ+9rOfTWK+WMs4PZ3aSw0iw7HySzBx87CyMDuo8FYlKPcGc3c5MjRmyQbaigpyMyCoBtPJtZkiCXrcAAAAASUVORK5CYII=',
      'searchUrl': 'https://pretome.info/browse.php?search=%tt%&st=1&sd=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Joke of the day/,
      'matchRegex': /this filter criteria/,
      'rateLimit': 6100,
      'both': true},
  {   'name': 'PTM-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAACaUlEQVQoz2NgQAL8bIz+xuzdORLr2qRXhTD2xfFFO4vJ8DExYAX64oy1xszJljLRDnpxjnpZ4UaF+U45RQGRKTEmltYSirqSinrsvKJQ1XayHPMNGSI0lM9dvPr123cg+vXr17bdB4+cOAvhAtG379/1zF1BqjXEObqUGKYpsbV1TfoPAw8fPVHRMtp/+ARcZO+h40zsAiANmdoshVwMcYaab96+h0unphcFBcXCuX///YsK9eNkYWQQ52LoVWfoEGbvmTADLn3j5l15Wb1TZy7ARTZu29trymsuycBgLMJ0IZk521f/w8dPcOnktLzImGQ49/fvP+EebjtDmNI0WBgspZgOV7FPnjEPLn3m/CVFNZ3zl67CRVas27q1iev/SoY6awYGF1mW9DDTz1++wqVbuibXNHYgXP/3b3KQ3f8+xu9TWKr1mBh0hDlnzF0Gl/7x4+eWnfsPHj114AgQnQSi0oqGwxmcV/QY1hkxxmswMahqGX/7/gOuoaioZJIbX6MYf70U/ywX/oXJ/EfD2b+GMyyXYygUYLCSYWRQN7D59+8fRPX5S9fK1cU+BjLct2C4osrwo5np/0LGdxEMt9wYlsozlKgyc7ECY4GVe+W6bRANSTFpNz2Z/nYx/J/F8K+X4f8KxjuJDIeMGbbpMcxTZXCVZ4GmC1U9a6Dqi5evd8fI/l8j83894/8rYv8vSZ30Y9iqwXTMgGGBMUOACnISZOacu3h1THLOnIlhL99N//nK999FxZ+9rOfTWK+WMs4PZ3aSw0iw7HySzBx87CyMDuo8FYlKPcGc3c5MjRmyQbaigpyMyCoBtPJtZkiCXrcAAAAASUVORK5CYII=',
      'searchUrl': 'https://pretome.info/requests.php?search=%search_string_orig%&st=1&tf=all&filter[]=open&cat[]=19&cat[]=7',
      'loggedOutRegex': /Cloudflare|Ray ID|Joke of the day/,
      'matchRegex': />Not Filled</,
      'positiveMatch': true,
      'rateLimit': 6100,
      'both': true},
  {   'name': 'PTN',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTVDMTgyNjc2MkNFMTFFMTlERjlGNjg3RTc4QkRCNDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTVDMTgyNjg2MkNFMTFFMTlERjlGNjg3RTc4QkRCNDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NUMxODI2NTYyQ0UxMUUxOURGOUY2ODdFNzhCREI0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NUMxODI2NjYyQ0UxMUUxOURGOUY2ODdFNzhCREI0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgXKewwAAAHWSURBVBgZBcFLSNMBAMfxn+S7h+uBSiuoSGibGblBk7WasYcaTkFD6OIyNCh7nBtLO3ZICj1okFkZ0dQosULrP3RTa1M7qIQhQceKjBCCCta3z0d+BeTbF0zVDPsK/fLLJ5+8JbWT1e9M5dJmyS+P6t8kGcLd7ZRXfnlV/cLAwPFqhwokr70mVpueZYDyiEuenMpMtzwPXjJK4HdgvMiqxsW3vCZBy19b58lo68fQkrfv8M0wceIYOA3VLI4zSDshulkD/rDEZVq5xBhPcRiy2I+MHOop7b/FAo9ZAQDOY+4rfVI2km/VfhXJptOxLkJco5FZfjDFDJZeSZJUIqtcxc3rIVJ8ZYhzRAjTSXBV2ZIklypk3938K8Qc3ximjTAROgh+Vt4WZUk+BVSuhoUuznCdUyT4jsE0luh2HVSWdGKP96G7w3b3Nu95xAoA0M6uG87eo3c2mVU3PcZ9LqZb6GEdSLPCFdq4wDOi2IfV8GUegwRn03sHj8+1/gytOSYO3AsTZ4YpKpIyN/k+1P2bYYDSq5kZecXZhSZ5uscYpSp9LFngkrQ1v/7TPM8p689VnnJVrMrpBJM4YsqQlKkN2tkUXK1MbbRI+cqRtM1dtRxYNlVI0n/ywwQzWz7W5QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://piratethenet.org/browseold.php?incldead=1&_by=3&search=%tt%',
      'loggedOutRegex': /You need to have cookies enabled/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'PTP',
      'icon': 'https://passthepopcorn.me/static/common/touch-icon-iphone.png',
      'searchUrl': 'https://passthepopcorn.me/torrents.php?imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Keep me logged in|Your popcorn quota/,
      'matchRegex': /Your search did not match anything/,
      'rateLimit': 250,
      'both': true},
  {   'name': 'PTP-Req',
      'icon': 'https://passthepopcorn.me/static/common/touch-icon-iphone.png',
      'searchUrl': 'https://passthepopcorn.me/requests.php?submit=true&search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Keep me logged in|Your popcorn quota/,
      'matchRegex': /Your search did not match anything/,
      'rateLimit': 250},
  {   'name': 'PxHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAABbElEQVQoz72QMUtcQRSFzzn3vnm7rUVYWASDIoIoKQKSThD8A9qkEGIhBgSDbbAWRLKLGzeLLoggCBYiBEmakCIp3CIhCC4SJSAoFv6KFDNPlNTmMgwDM2f4vgM89hDAy7kKmYlO+W7r4tXCqOikid5uHL9+M046aaQ1a58I4OjHmFnZVDKVJ0YOv5/Nmkqm3JQ/7189uVwxBSkXw1B1XgCk3NIKAEzBFMQgBgBSJgYxEzMADmBv61p00kUHsL3xizTSBQfQqn+JSIKlgJjF16QDuDuTBkCFAGFJ+uvplKlsyk2lF4PNn3/emvLIOdy79PumLQYpiNnTJ9MCYMyNIe4ApHgdInSkVwHsAHY+dAsGB7C5/o00ISG9f/eREGmk/nW4B10ESEsBKDl0zhejgJQ/61vuXq2nWhUGKjOXtwdS+rHaM6lYvBSkzB5AZ4WDEy4472ptNzqkixYdmrXPqUcKQH1tnxAogvgf8xcdATfXQQipLQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://pixelhd.me/torrents.php?imdbid=%tt%',
      'loggedOutRegex': /You appear to have javascript disabled/,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'RedBits',
      'searchUrl': 'https://red-bits.com/torrents/filter?&imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember Me/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'RedBits-Req',
      'searchUrl': 'https://red-bits.com/requests?unfilled=1&imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember Me/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
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
      'searchUrl': 'https://retroflix.club/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget your password/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'Retroflix-Req',
      'searchUrl': 'https://retroflix.club/forums.php?action=search&keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget your password/,
      'matchRegex': />Request-Unfilled</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'RPTor',
      'icon': 'https://rptorrents.com/themes/Dark/images/favicon.ico',
      'searchUrl': 'https://rptorrents.com/torrents-search.php?c37=1&c6=1&c7=1&c32=1&c9=1&c10=1&c11=1&c12=1&c18=1&c33=1&c40=1&c41=1&search=%search_string_orig%+%year%&incldesc=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Account/,
      'matchRegex': /Nothing Found|Nu a fost gasit nimic/},
  {   'name': 'RPTor',
      'icon': 'https://rptorrents.com/themes/Dark/images/favicon.ico',
      'searchUrl': 'https://rptorrents.com/torrents-search.php?c14=1&c15=1&c16=1&c17=1&c18=1&search=%search_string_orig%&incldesc=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Account/,
      'matchRegex': /Nothing Found|Nu a fost gasit nimic/,
      'TV': true},
  {   'name': 'SB',
      'searchUrl': 'https://superbits.org/api/v1/torrents?searchText=%tt%',
      'goToUrl': 'https://superbits.org/search?search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|inloggningscookie/,
      'matchRegex': /seeder/,
      'positiveMatch': true,
      'ignoreEmpty': true,
      'both': true},
  {   'name': 'SC',
      'searchUrl': 'https://secret-cinema.pw/torrents.php?action=advanced&searchsubmit=1&filter_cat=1&cataloguenumber=%tt%&order_by=time&order_way=desc&tags_type=0',
      'loggedOutRegex': /<title>Login :: Secret Cinema/,
      'matchRegex': /Your search did not match anything/,
      'both': true},
  {   'name': 'SC-Desc',
      'searchUrl': 'https://secret-cinema.pw/torrents.php?action=advanced&searchsubmit=1&filter_cat=1&description=%tt%&order_by=time&order_way=desc&tags_type=0',
      'loggedOutRegex': /<title>Login :: Secret Cinema/,
      'matchRegex': /Your search did not match anything/,
      'both': true},
  {   'name': 'SC-Req',
      'searchUrl': 'https://secret-cinema.pw/requests.php?submit=true&search=%tt%',
      'loggedOutRegex': /<title>Login :: Secret Cinema/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'SceneRush',
      'icon': 'https://www.scene-rush.pt/apple-touch-icon-57x57.png',
      'searchUrl': 'https://www.scene-rush.pt/browse.php?c46=1&c8=1&c20=1&c35=1&c41=1&c32=1&c23=1&c38=1&c37=1&c13=1&c3=1&c6=1&c42=1&c2=1&search=%search_string_orig%+%year%&blah=0&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Recuperar Password/,
      'matchRegex': /Nada encontrado/},
  {   'name': 'SceneRush',
      'icon': 'https://www.scene-rush.pt/apple-touch-icon-57x57.png',
      'searchUrl': 'https://www.scene-rush.pt/browse.php?c13=1&c4=1&c18=1&c17=1&c23=1&search=%search_string_orig%&blah=0&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Recuperar Password/,
      'matchRegex': /Nada encontrado/,
      'TV': true},
  {   'name': 'SDBits',
      'searchUrl': 'https://sdbits.org/browse.php?incldead=1&imdb=%tt%',
      'loggedOutRegex': /Not logged in!|Technical Difficulties/,
      'matchRegex': /Nothing here!|Nothing found!/,
      'both': true},
  {   'name': 'sHD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABGdBTUEAALGPC/xhBQAAAcJJREFUOE9j3Hty6c3n2z99fc5ACLAxiWjLeTJMXR9dt0ps8lGf2aeiZxwPnXkifPrxwC3XGzdcrZ1+PAgoDkF9h4WAyjqWOjO0LbWHCK24WDD3dEz/Ydf5ZxL//fvz7ffHOaejJh72mnzEG64NpAGIIfwzj1etvVzeud96zeXy////AdGS81kTDrtPPga1BKgGRcO+u5P3350KVP311zug6r///q65XNl32BmnhmUXcj/+ePHt18f/MPD0w6UJh92Ajpx9MhLiChQbpp8I2XGjY8u1po8/XgK1fP/98e23x1de7Fh0NuXA/ZlYNACFeg869h92f/rxMlDDrz/fTzxcdu7JWqCe8083YtcACr5DLttutEEc9fPP1yXnMiYe9QSGNU4NPYect1xrhnvj7tvjoICCxQaKH8Ci3sBgufZyF1zD99+f552Oxalh4hGPuafjgK6Ha/jx+8uyczk4NfQccjr6YN7ff3/23pm463bfow/nnn+6PuWoL04NvYecDt6b+fH7y4lHPNv2mW673gJ0Elw1Ih4giW/miQig/5aczwDGNDCm+g+5LDid+AOsYdrxACAJTXzLN0wB+p1INH/FBAC7js3OZsq8KwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://scenehd.org/browse.php?search=%tt%',
      'loggedOutRegex': /If you have forgotten your password/,
      'matchRegex': /No torrents found!/,
      'both': true},
  {   'name': 'SI',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABOUExURQAAAAAAAAAAAAAAAAAAACoAACoqACoqKlUqKlVVKlVVVX9VKn9VVX9/VX9/f6p/Vap/f6qqf9SqVdSqf9SqqtTUqv/Uqv/U1P//qv//1Hdub04AAAAEdFJOU97t7/HHfsZqAAADyklEQVQYGaXB23bbRhIAwOoeUJd1nPz/X8bHa1sSMd0LEKSkTfKSw6qQ7lExwj06y10q3SndaXGIEWoSmbNkjnViIZwRQ6BXLILIdbVbXOQpIi3fPCzLz/L4kL8m+UWkb5PHp87A+bvld7vx9s0uXSSJcGgCQbRE5wibp2dX0yHtYkT4JIRNCiwIh/ngL9IuUAiHdJGZxfAhhnYRDmmXQpfPBpLZMVxEECJF+CQdMkc6DDcZ1u5EC3PaBEJIh7SLZK6F8kmyEnbZf357I+2ilcNiEzYvnEs6BCJ1E2M6vDw6/DjTLhaH8YrVbllaNCKjZ40Myq572OV5ullsuoVDMb6si11GTlqSbjqk8G5xWJepyqbkQiCYmuEqQtVIfpusv+wWF80pvZ1RibAZNq2GXfOYiso6nVh/2aVdU8p/3HQimCoERX757ZGzSKpKu1js5qk0xiTsCknbDLv8D+ZPm/QhXaytkTbpKtXUOmzKZv1W2iFcLC7WSoNxToM1h03q515EuFmni9mcXSwOVcKmWF/7KdumY3xtHWOipAeH72c36W/mOu2CJkTaZL2RC4HyLr1Lm/QukrZLu5fi5K8WuzyVv8mKpINxtpmVHn/ZnWym3eIwWjB9EoLqDGlX62K4+Irzn3aLmwjKuykz6r8VX9twsZLLisqSDukqJNOhGIK51mw35+JkV96lq4jy5sMUbcVkuJjNo02md4tdzSHSi107ZGtMM1H0WaSehHcRwy4zrE1kVMmMmpkxixjhHAtnsVktLnrazIjhHjMZ7pFM90h3GpEOY2hOD6ObJdouM6IxoomBDJ/14ir/yNfvvjzi9cfT1/nj1eb3LC8v/F7ry3x6evuRX62q3trV4qoVy6PNySZsIqWBGJYpCJtMb+2Q3g1Ow6bdDF0SHRaHskk36UNaSsRIhN0yao20i/QuZLpafCiy1jfpZlHr8xhTkGkTap3PUeFqcRUhpf7mk6VqJacmh8Ncz4/lJn1W4reHYReB6CoxbNpDujr7sPiseX72/cWmEboqh01Z1unQPqTPXiWekYkRKEmot7H4B+mz8/fzWsKmkCmGSpt1Df9k8SF4efHHQygag+dnHXTU7DHLRfqQPrRDo56+PAsXkchqNyfK1eKz5+fKKJKRXoddy7I5P7g4LQ9ruVlctd0IrWyaGDV/enzooFkftCatqlwtbhqtGa9oRHad1YNx7uZMuFrdLK66Z5kTbz/N2WVVzsyJqcy3XjVmz+kmYvhsZK/+hbn4f3P6d9Kd0p3SndKd0p3SndKdMt0lQ7pH/Q8N+K7UIUD68gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://shareisland.org/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Accedi con le|Sign In With|Dimenticata la Password/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SI-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABOUExURQAAAAAAAAAAAAAAAAAAACoAACoqACoqKlUqKlVVKlVVVX9VKn9VVX9/VX9/f6p/Vap/f6qqf9SqVdSqf9SqqtTUqv/Uqv/U1P//qv//1Hdub04AAAAEdFJOU97t7/HHfsZqAAADyklEQVQYGaXB23bbRhIAwOoeUJd1nPz/X8bHa1sSMd0LEKSkTfKSw6qQ7lExwj06y10q3SndaXGIEWoSmbNkjnViIZwRQ6BXLILIdbVbXOQpIi3fPCzLz/L4kL8m+UWkb5PHp87A+bvld7vx9s0uXSSJcGgCQbRE5wibp2dX0yHtYkT4JIRNCiwIh/ngL9IuUAiHdJGZxfAhhnYRDmmXQpfPBpLZMVxEECJF+CQdMkc6DDcZ1u5EC3PaBEJIh7SLZK6F8kmyEnbZf357I+2ilcNiEzYvnEs6BCJ1E2M6vDw6/DjTLhaH8YrVbllaNCKjZ40Myq572OV5ullsuoVDMb6si11GTlqSbjqk8G5xWJepyqbkQiCYmuEqQtVIfpusv+wWF80pvZ1RibAZNq2GXfOYiso6nVh/2aVdU8p/3HQimCoERX757ZGzSKpKu1js5qk0xiTsCknbDLv8D+ZPm/QhXaytkTbpKtXUOmzKZv1W2iFcLC7WSoNxToM1h03q515EuFmni9mcXSwOVcKmWF/7KdumY3xtHWOipAeH72c36W/mOu2CJkTaZL2RC4HyLr1Lm/QukrZLu5fi5K8WuzyVv8mKpINxtpmVHn/ZnWym3eIwWjB9EoLqDGlX62K4+Irzn3aLmwjKuykz6r8VX9twsZLLisqSDukqJNOhGIK51mw35+JkV96lq4jy5sMUbcVkuJjNo02md4tdzSHSi107ZGtMM1H0WaSehHcRwy4zrE1kVMmMmpkxixjhHAtnsVktLnrazIjhHjMZ7pFM90h3GpEOY2hOD6ObJdouM6IxoomBDJ/14ir/yNfvvjzi9cfT1/nj1eb3LC8v/F7ry3x6evuRX62q3trV4qoVy6PNySZsIqWBGJYpCJtMb+2Q3g1Ow6bdDF0SHRaHskk36UNaSsRIhN0yao20i/QuZLpafCiy1jfpZlHr8xhTkGkTap3PUeFqcRUhpf7mk6VqJacmh8Ncz4/lJn1W4reHYReB6CoxbNpDujr7sPiseX72/cWmEboqh01Z1unQPqTPXiWekYkRKEmot7H4B+mz8/fzWsKmkCmGSpt1Df9k8SF4efHHQygag+dnHXTU7DHLRfqQPrRDo56+PAsXkchqNyfK1eKz5+fKKJKRXoddy7I5P7g4LQ9ruVlctd0IrWyaGDV/enzooFkftCatqlwtbhqtGa9oRHad1YNx7uZMuFrdLK66Z5kTbz/N2WVVzsyJqcy3XjVmz+kmYvhsZK/+hbn4f3P6d9Kd0p3SndKd0p3SndKdMt0lQ7pH/Q8N+K7UIUD68gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://shareisland.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Accedi con le|Sign In With|Dimenticata la Password/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Snahp',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEX+/v40NDR+fn6/v79puPczAAADaElEQVRYw42XMW7bMBSGVRseNDiZfAQdIUM7NDmCBlMyEg1ZOjQIUB1Baw+gI2iw2yFrgALVJXyEDO3kAwRF84ukfz6SksLFsvnpvY+0RD4mol3+VerHKRltn9XQfo31XyjTfsb7l60Fiqco8KLO7S7Wv1ZOu48ArQsUfdCfKtEeRwIwxIgBW+0BmQ+U3hzoX29/ny7/dfq6iSjenga4i4z0aMfGKS2DDDS/YA5mEFFf/ByZZ77At11klhpxR5KIG55xk/jlRiiUqRkHh5ULhftUiKVCAgp9qr46mkvEY0L0pOrB1dw4X9aIDaBzwqZOwivAAPZI5YStGK1IABxa3EWxLS93Guggw7gFhe81cHi7fKKZsfyAKwNA05GotS9iGWCP2WTm3CbbWsDVzBDNDKKygKu5wo0mVG0BV3NthwFHAtCkZW8+EwJGk3dilCUBV/NocyMmgf1ZMwM6yFYEqDn05GeOADXXuBim4UYA9k+H3VarNARczaWeiFaPkgA19QQAIyA0j8i1BE5AaG6QfQETAkIze/OHakVAaOJBqDHYnIDUXIFLNUyAmujLQdUEpCaiI88NAakJPwANAam5QJwsDnTQXGIKNohFQGhaICHgaSLMMQSo2Q5A4QPUHAE4m+gERMDTVJNANxATwF4DKgCoOQfsDbAl4LVZoJsDnt8ZoRx3mAE6TtT4PMzP5Nx/UYR/NxVngE4/D/NP1Gb8mSwwB+FjzwAVHvvwxaFiEwWoeKdfPf/lZYAaQBW+/lTE2537CwgVH/ETgJElSPVmCQoXMa6DSA9gR8BRtMvgIr6QFnYh9ZdiKtqlWC7mVORiHt0OdtwO5IbCVZTbXWxLKs9bErcuArpa4Hbnb4vcWTN96zrcWKtz6VKHW/OB5VEL/djmXrJ06aPlQc3ywKbKzwAUWWqV0RKl8kuUlSxyVM+KMY+XSXSsWTANABXhKMZbaaCjItRUvNijQhkvF6lQ+QVnO1JwwnIHQD8pLIQbr+j94hW9Klo2My3pZBUW3hkdzVyq77J0l8ccZVrDWYJWcHy4E8e+cuIAcsVvTDl+hOEhiAmYgTHh0A/9f5TiIEUOdfuaJNc8iMkcXiunTpNyDBSbPpF+nD6QMgQDTIZgABmCAaYO7nzw/PZJJJggviWj7Xqv1MOr+Ok/fpooqUzl86wAAAAASUVORK5CYII=',
      'searchUrl': 'https://fora.snahp.eu/search.php?keywords=%tt%&sk=x',
      'loggedOutRegex': /Cloudflare|Ray ID|>Register<|you cannot use search at this time/,
      'matchRegex': /Search found 0|No suitable matches/,
      'rateLimit': 20100,
      'both': true},
  {   'name': 'SP',
      'searchUrl': 'https://www.scenepalace.info/browse.php?search=%nott%&cat=0&incldead=1',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'SPD',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH5QIcFQ8lPCMyxQAAA/NJREFUSMftlltsVFUUhr8zZ6adMjPtyPQiveK0UwqmIpAITdSoUSxDQROJxvpgePBJTITEGy8mRnwwSgLxGq3xlgBeEweIAtVaxUSkFKdYiiKiodXRAhUvFMs+de19pmNbZwgvjTGh2Q+7O+ec71/rX3utwZp1E/XL3TUVe/7/AE/DzfK/u6Zi/9+mKLaUWMvk8/pl1FxDxSJZVmWTu5mwr2yyotefH6B4NjMWTDivvZFQOR4730sgn6CfQIFZ0wgGCMgK4vNZ2HlE6l1xOT2wahfjLcB/kRVbmj6Xp8MzPRZ3zKPzXpKP0rOe5LMkXyb5Bj3tJPeQ7GZbgkULwbKYMf9cHlDcQDGE5LkF6fO6JXgDc8s4/jBqI6oNZzNqK+ojVBfOAGoINYxSdO2lqFDercidouhi8gpYAyswQcQNII4v0BJjZN2/AEkDOIk6rQGpFNVV5wZEGojC+/ASFFmuE3oVVkXDDKxFbRgDJAygF6cfdRz1pwZ82I7fD2WX5/DAlX8/7IEPIC5BhMUJja++yuOx17dogNPG6BacrTgdOH2MHsMZxPmD4dOsuAXyglbdkhweRGYxEzrhC9gJGyCYCWKZBD67lNRjqBfHIuhE9eH8gPoF9Tu7OwkGobQxR5lGb8BXwINwELpgF7wN1+ogcJ2QIGz76VsNYJMBfII6iHMUleLMSVpvE/kh6ppzAER+jdF+CPYZwLuwDqbpsktftFBFYzmDGw3gPQP4Cuc71E983kFh4Tj5kzywXPkPwTH4GvZDuwG8Ck2QL07E5XkJwrbtF1bqFDkJnE9xDjB6hL/6ufN2Ld/NfpZepOVLeSWhH76BLw3gHXgNTfVbXGzujglifg0n2sYikDI9zL4dhItE/mU5elFG/gkYgMOGtGsM8AzMc8sp7YTXa79ytwF8jNrPyCHuak1nPwdA5JdDHwzBj3AEesYBnoN75H0dRKacFsYY2oLqQHWTTBAJa/k55oGW7+c+GIZfIQVHDWCn8eB1eB4ehzlpJ9w74fPZmx7Q9+DsXla1/pP9bPNA5Jca+SNwygC+h27YMS6CJ2EleCfciSsv5dR2et+iZHpaftZ50EJ+kS72MwbwG/xsAO5NzgCegLUgeQiWp1+uvtqX533zEVZL8eSHdDfMDpDB4gvSaOw9awCDJkWfTQRIBKvlQsgqGRs+yyWIOTUUC7Vsbu6ZrLtYJTasggPwLfTCbkjAZtPvnjIGrDEeyF+kIdO7JAgse1LtZ/Pgkut0M7Ckd6LNKJGvwHSTEDnRzV08lG9bBMqobR6nVJyoEvnnMZNrmy1xT+ZMxKzMJrOXCVpxhbTVyR+SCqyLX/hddOG36dR58DeNZUiqGGZdXwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://speed.click/browse/deep/q/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Username/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'SpeedApp',
      'searchUrl': 'https://speedapp.io/browse?search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget Password/,
      'matchRegex': /text-emphasis text-hover-primary/,
      'both': true},
  {   'name': 'SpeedApp-Req',
      'searchUrl': 'https://speedapp.io/requests/?search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget Password/,
      'matchRegex': /text-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'ST',
      'searchUrl': 'https://www.scenetime.com/browse.php?c47=1&c57=1&c59=1&c64=1&c82=1&c16=1&search="%search_string% %year%"&cata=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|need cookies enabled|Try again in/,
      'matchRegex': /Nothing found/,
      'rateLimit': 6000},
  {   'name': 'ST',
      'searchUrl': 'https://www.scenetime.com/browse.php?c43=1&c2=1&c9=1&c77=1&search=%search_string%&cata=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|need cookies enabled|Try again in/,
      'matchRegex': /tvuhdn.png|tvpackn.png|tvhdn.png|TVsdn.png/,
      'positiveMatch': true,
      'rateLimit': 6000,
      'TV': true},
  {   'name': 'STC',
      'searchUrl': 'https://skipthecommericals.xyz/torrents?imdbId=%tt%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'STC-Req',
      'searchUrl': 'https://skipthecommericals.xyz/requests?unfilled=1&imdbId=%tt%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Swarmazon',
      'icon': 'https://swarmazon.club/forum/assets/favicon-xurteib6.png',
      'searchUrl': 'https://swarmazon.club/en/search/search.php?category=1&query=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Sign in</,
      'spaceEncode': '%2B',
      'matchRegex': /\(0\)/},
  {   'name': 'Swarmazon',
      'icon': 'https://swarmazon.club/forum/assets/favicon-xurteib6.png',
      'searchUrl': 'https://swarmazon.club/en/search/search.php?category=2&query=%search_string_orig%',
      'spaceEncode': '%2B',
      'loggedOutRegex': /Cloudflare|Ray ID|>Sign in</,
      'matchRegex': /\(0\)/,
      'TV': true},
  {   'name': 'T',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQiSURBVHjaxFfda1xFFP/NvXfux3Y39JPupkZN27Rp0obEGLcSUKFYsPgHFAwU8qJSBMW+SF98UB8FEVQUKRaVJvhQPwuitY1gidgP6lNa2diY7OImu7H7eT9nfGnu3uud3aypqQcu3DmcM+c353fmzAzhnCMoqZ4hntw5AKoaACG+nnMO5jlYTTjzwBgT6suFHDJXz5OgngQB7H74ME/tHsR6il2vYPrzd3wQUmj16xwcAFQjjr0Hn/ZXraz89DzyFN/+YD/uhXRs7UQEgEI1eG5zjjWFo+++BABgvmBiseyuGUCwRnwAskLhOlZTp8G9O/H2ay8DAN78YAKTX0+tGUAwTgMA1eDaZlOngT1dcF33zgR2S9tVAQR8GxSoGqx6VVw4xMWRQ6NwHOfOBBacuwEgyoBCdVT+KkT5cmp49ZXj6EgkfACOY8Ox1g4g6BugQI2kdXhfF54bfwb9fftg23aIDnZ4xB/XTQtnv/v5X1BgtVeEJ0+8gM2bN4WCA0B6ZBjpkWF/XCwu47NzP7YNwHNtEQAVzA0HclzXT3vLlLpuxLflNhQBkGQZjHkhw3PfT2GDYeDQY4/CMHRff2s+i98yc/64WqtFfFv3AS8KQCTvnToDAHhooA+apvr6n6av4P3Tk/9JVwwBIEQSn3CchboXB29q256QKADmuZAVuqoDAEhEbmHbBgWBY11pVKYDmWpCB0mWIEmNFUuK0tS2vV0gBGCDqrqYJ0UBpY0VU6o2tW1vFwgAuI4NqhlCB0rVEACF0qa2jHmISRb6eh7AQm4R80UzAlbYBzzHajqpqqpQ1cYu2HV/EkQiUKjup5S5JqiewIHuLXj95Is+4FMfT2Li219CRevadREAG1TfIM6ZpEDTGpw/PnoQzy9kcfHSZagqRXpoP7jagdNnf8CJ4+OIx+O+7bPjY7h4dRaFUiNosH5CRWio4sK6PjOHnu6ukO7Y2FEcGzvqjye+ugBF1bBjR2coWwCQTKVw21xAsO1H7oTMcyArVPh98uUUZmazPhWib8X20rUbIf3ichm/Zwuh+SRZFvQB5jVtLjXTxktvfIgnRwfxRPoAuruSUKmCSrWOm7eymL42gwvTv4IQCW999AXqpo2h/l2Yzy3h3U+/gcfCjSv0v3It35M+wrd3778nl9Lb+TlcP3+GhCgo5f/APx8p6yWl3E1BDVglZG9cBudsXYObxTmU/pwNU9Db28u3btuGXH4ZZZMhsSW1aquVZKWtgCt2zHMRV2xoXhm5XA6ZTIb4RajrOjZt3IjOVAq248Cy7MDB4UFMTPACwuExDvDmZ1nM0GHoHSiVgGKxGN4FpVIJS0tLiMViIITc5QErOs+Beq2GaqWCSqWCarUa3QXJZJJTSkEIWTOIlhg4B+cclmUhn88T4ev4/5C/BwDN68QK5KaRZAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://openlook.me/torrents.php?searchstr=%search_string%+%year%&filter_cat[2]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me|반드시 공지를 읽고 토런트를/,
      'matchRegex': /did not match/},
  {   'name': 'T',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQiSURBVHjaxFfda1xFFP/NvXfux3Y39JPupkZN27Rp0obEGLcSUKFYsPgHFAwU8qJSBMW+SF98UB8FEVQUKRaVJvhQPwuitY1gidgP6lNa2diY7OImu7H7eT9nfGnu3uud3aypqQcu3DmcM+c353fmzAzhnCMoqZ4hntw5AKoaACG+nnMO5jlYTTjzwBgT6suFHDJXz5OgngQB7H74ME/tHsR6il2vYPrzd3wQUmj16xwcAFQjjr0Hn/ZXraz89DzyFN/+YD/uhXRs7UQEgEI1eG5zjjWFo+++BABgvmBiseyuGUCwRnwAskLhOlZTp8G9O/H2ay8DAN78YAKTX0+tGUAwTgMA1eDaZlOngT1dcF33zgR2S9tVAQR8GxSoGqx6VVw4xMWRQ6NwHOfOBBacuwEgyoBCdVT+KkT5cmp49ZXj6EgkfACOY8Ox1g4g6BugQI2kdXhfF54bfwb9fftg23aIDnZ4xB/XTQtnv/v5X1BgtVeEJ0+8gM2bN4WCA0B6ZBjpkWF/XCwu47NzP7YNwHNtEQAVzA0HclzXT3vLlLpuxLflNhQBkGQZjHkhw3PfT2GDYeDQY4/CMHRff2s+i98yc/64WqtFfFv3AS8KQCTvnToDAHhooA+apvr6n6av4P3Tk/9JVwwBIEQSn3CchboXB29q256QKADmuZAVuqoDAEhEbmHbBgWBY11pVKYDmWpCB0mWIEmNFUuK0tS2vV0gBGCDqrqYJ0UBpY0VU6o2tW1vFwgAuI4NqhlCB0rVEACF0qa2jHmISRb6eh7AQm4R80UzAlbYBzzHajqpqqpQ1cYu2HV/EkQiUKjup5S5JqiewIHuLXj95Is+4FMfT2Li219CRevadREAG1TfIM6ZpEDTGpw/PnoQzy9kcfHSZagqRXpoP7jagdNnf8CJ4+OIx+O+7bPjY7h4dRaFUiNosH5CRWio4sK6PjOHnu6ukO7Y2FEcGzvqjye+ugBF1bBjR2coWwCQTKVw21xAsO1H7oTMcyArVPh98uUUZmazPhWib8X20rUbIf3ichm/Zwuh+SRZFvQB5jVtLjXTxktvfIgnRwfxRPoAuruSUKmCSrWOm7eymL42gwvTv4IQCW999AXqpo2h/l2Yzy3h3U+/gcfCjSv0v3It35M+wrd3778nl9Lb+TlcP3+GhCgo5f/APx8p6yWl3E1BDVglZG9cBudsXYObxTmU/pwNU9Db28u3btuGXH4ZZZMhsSW1aquVZKWtgCt2zHMRV2xoXhm5XA6ZTIb4RajrOjZt3IjOVAq248Cy7MDB4UFMTPACwuExDvDmZ1nM0GHoHSiVgGKxGN4FpVIJS0tLiMViIITc5QErOs+Beq2GaqWCSqWCarUa3QXJZJJTSkEIWTOIlhg4B+cclmUhn88T4ev4/5C/BwDN68QK5KaRZAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://openlook.me/torrents.php?searchstr=%search_string%&filter_cat[3]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /did not match/,
      'TV': true},
  {   'name': 'Taranis',
      'searchUrl': 'https://taranis.me/browse.php?search=%tt%&cat=0&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Wachtwoord vergeten/,
      'matchRegex': /Niets gevonden/,
      'both': true},
  {   'name': 'TBD',
      'icon': 'https://1.bp.blogspot.com/-F2JeKtPCJYI/VgjpVxwMO4I/AAAAAAAAADg/VyNyp-yW9Ac/s1600/TBD.ico',
      'searchUrl': 'https://www.torrentbd.me/torrent/movies.php?module=torrents&id=%nott%',
      'loggedOutRegex': /<title>TorrentBD : Login</,
      'matchRegex': /This title is not available!/,
      'both': true},
  {   'name': 'TD',
      'searchUrl': 'https://tday.findnemo.net/t?q=%tt%',
      'loggedOutRegex': /Ray ID|security check to access|Forgot Password\?/,
      'matchRegex': /No Torrents Found!/,
      'both': true},
  {   'name': 'TDB',
      'searchUrl': 'https://torrentdb.net/filter/torrents?&search=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'rateLimit': 5100,
      'both': true},
  {   'name': 'TDB-Req',
      'searchUrl': 'https://torrentdb.net/filter/requests?search=%nott%&pending=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password|Service Unavailable/,
      'matchRegex': /btn-warning/,
      'positiveMatch': true,
      'rateLimit': 5100,
      'both': true},
  {   'name': 'TE',
      'searchUrl': 'https://theempire.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'TV': true},
  {   'name': 'Telly',
      'searchUrl': 'https://telly.wtf/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Telly-Req',
      'searchUrl': 'https://telly.wtf/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot Your Password/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TeRaCoD',
      'searchUrl': 'https://teracod.net/browse.php?search=%search_string_orig%+%year%&cat=0&genre=0&incldead=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Nem vagy bejelentkezve/,
      'matchRegex': /Nincs találat/},
  {   'name': 'TeRaCoD',
      'searchUrl': 'https://teracod.net/browse.php?search=%search_string_orig%&c12=1&c13=1&c37=1&c38=1&c39=1&c40=1&genre=0&incldead=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Nem vagy bejelentkezve/,
      'matchRegex': /Nincs találat/,
      'TV': true},
  {   'name': 'TG',
      'searchUrl': 'https://thegeeks.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},
  {   'name': 'THC',
      'searchUrl': 'https://horrorcharnel.org/browse.php?search=%nott%&cat=0&incldead=1',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /Nothing found!/},
  {   'name': 'THC-Req',
      'searchUrl': 'https://horrorcharnel.org/viewrequests.php?search=%search_string_orig%&category=0&filter=true',
      'loggedOutRegex': /Not logged in!/,
      'matchRegex': /Nothing here/},
  {   'name': 'THR',
      'searchUrl': 'https://www.torrenthr.org/browse.php?search=%search_string%&blah=0&incldead=1',
      'loggedOutRegex': /registraciju morate imati omogućene cookiese/,
      'matchRegex': /Ništa nije pronađeno!/,
      'both': true},
  {   'name': 'Tik',
      'searchUrl': 'https://www.cinematik.net/browse.php?cat=0&incldead=1&srchdtls=1&search=%tt%',
      'loggedOutRegex': /Not logged in!|Ray ID/,
      'matchRegex': /Nothing found!/,
      'rateLimit': 125,
      'both': true},
  {   'name': 'Tik-Req',
      'searchUrl': 'https://www.cinematik.net/viewrequests.php?search=%search_string%&filter=1',
      'loggedOutRegex': /Not logged in!|Ray ID/,
      'matchRegex': /No requests found!/,
      'rateLimit': 125,
      'both': true},
  {   'name': 'TL',
      'searchUrl': 'https://www.torrentleech.me/torrents/browse/list/imdbID/%tt%',
      'goToUrl': 'https://www.torrentleech.me/torrents/browse/index/imdbID/%tt%',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'rateLimit': 250,
      'both': true},
  {   'name': 'TL-Title',
      'searchUrl': 'https://www.torrentleech.me/torrents/browse/list/categories/8,9,11,12,13,14,15,29,34,35,36,37,43,47/query/%search_string% %year%',
      'goToUrl': 'https://www.torrentleech.me/torrents/browse/index/query/%search_string% %year%/categories/8,9,11,12,13,14,15,29,34,35,36,37,43,47',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'rateLimit': 250,
      'spaceEncode': '%2B'},
  {   'name': 'TL-Title',
      'searchUrl': 'https://www.torrentleech.me/torrents/browse/list/categories/26,27,29,32,34,35,44/query/%search_string%',
      'goToUrl': 'https://www.torrentleech.me/torrents/browse/index/query/%search_string%/categories/26,27,29,32,34,35,44',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': /"numFound":0/,
      'rateLimit': 250,
      'spaceEncode': '%2B',
      'TV': true},
  {   'name': 'TL-Req',
      'searchUrl': 'https://www.torrentleech.me/user/requests/index?requestCategorySearch=0&requestSearch=%search_string_orig%&status=New',
      'loggedOutRegex': /Signup With Invite/,
      'matchRegex': />Found <b>0</,
      'rateLimit': 250,
      'both': true},
  {   'name': 'TLPL',
      'icon': 'https://torrentleech.pl/pic/Favikona.png',
      'searchUrl': 'https://torrentleech.pl/browse.php?search=%tt%&incldead=0&titlesearch=1&polish=0&cat_film=&napisy=0',
      'loggedOutRegex': /Ray ID|Niezalogowany!/,
      'matchRegex': /Nic tutaj nie ma/,
      'both': true},
  {   'name': 'TLZ',
      'searchUrl': 'https://tlz.digital/browse.php?c31=1&c26=1&c11=1&c3=1&c24=1&c30=1&search=%2B%search_string_orig%+%2B%year%&searchin=title&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'spaceEncode': '+%2B',
      'matchRegex': /Nothing found/},
  {   'name': 'TLZ',
      'searchUrl': 'https://tlz.digital/browse.php?c18=1&c16=1&c19=1&c29=1&search=%2B%search_string_orig%&searchin=title&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'spaceEncode': '+%2B',
      'matchRegex': /Nothing found/,
      'TV': true},
  {   'name': 'TM',
      'icon': 'https://torrentmasters.info/images/tm.gif',
      'searchUrl': 'https://torrentmasters.info/letoltes.php?search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Jelszó visszaállítás/,
      'matchRegex': /Nincs aktív torrent/},
  {   'name': 'TO',
      'searchUrl': 'https://theoccult.click/browse.php?incldead=0&country=&nonboolean=1&search=%tt%',
      'loggedOutRegex': /404 - Not Found|You need cookies enabled/,
      'matchRegex': /Try again with a refined search string/,
      'both': true},
  {   'name': 'TorrentLand',
      'searchUrl': 'https://torrentland.li/torrents?imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Recordar usuario/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TorrentLand-Req',
      'searchUrl': 'https://torrentland.li/requests?unfilled=1&imdbId=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Recordar usuario/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TorSurf',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUbSURBVFjDrZdbiFZVFMfPyCSSJFkPBZ0izB6iMMGK08U3qcaJjGoHMtAQgfgwhhstCkpQiozaM4FJJSMRpdZOLcGIgrxkbcMUGkHB0ByPXehGgTpDdPn6r7XX2d8+3/mO4zg9/DmXfVm/s9baa++TJMomQRnJdOB+DrQIWg29Bq2D1kIroIXQtWGMLuTqZUh5e8lEl0JPQYehf6HGOegIDG+AgflnNT4mgHYXQBk6bYW+gX7E8xmoAQNeFeMmEr/7Df2fhS4aP0DpRWnQ9bhuBsAwDByAjlUAskj0zMBu9TgBosZ4EOZKXOPKxOYb0UYTOxjfDkPbYPBEFUJ7MYg7jTF3TxAg9xCs/GmG8CA7AbIGRvuhvSUvkFLtRZ4y+UCi84kChM5T0fdABLIHRpbDqMKXO+8B8USAMNR3VwjveQOQHN+naDsOjWBcQxJ1K0BuhPH7YPxMCAUBJMpDmXzfxDxQDscjaB+FjnoAkbI9+OIEhl9n41WInWcHaM3caghivSlGd+P6d1iu2m3jupLq2SEMMYRt9LerA82HwqiJ3F7nOpMPsSeU3Qjjp8MS1VxHJsEDAFGfewjlIQja5N2lD/XGGi2SpKm8j2Rct+TBcRh+HjoVQfwDXY2vJogXghcIxORHffU1vgq3N1CExLbJhSAqVB/KihjCZH3QaChU2v2FthkMkaiHPERWtC3Hc8KqBSAPFBtOfRjWY7KvPQRCocz9ASBjQz+j7WKBuIO94EPxnTeuxgAgL9BgUnuARfz12u3w4bDLAHBXAOA6gHpBfSknkmwWe4Hb0G9MDxAAxYoGE0RppbBnZkIncL8F/f+UlTELffuaEFwRn2MINpjdgMH0/l3olnYA0wAwuQwQQcRnB+3mov9PuO6F1klNGPHtZnOojPTe5pns/0maZF1oO4l+r7RLrl7o8VAbAkAkLfmh3QL0O8RGNVYCxdxDbJBxf4Q9wuS7i+QGAIHMw/s762JLA9bUAqhwAnoJ/T6Dt3LcbwHEyqg63oS+14UNyofiXvYy5gBEBybqiI5UpePVNVLZfsfA26sA7IUrINqcvgDA+7IvPOy9wQBHfCj0y2GjMvn2UOSQDymvgmI9xlJ2KndU9kUYG8XgLyGDiRaifSYmf1Qq4UHoGLRejK6C1obSbPL5kj85e8FXwqua4aVCxBQV0VLCrmeXyiF0EM/Ycs0pmRiZ736FPpVqOCge24NrVzjGGbePDaX6wSgMfVEIawFIS/yuJkvJG6BJ38I9nQV+wfM78uWvyh5A97eifb+UZDI4x5dk/bGEYVPpFF0L4MMxBe7rxcCV8EAPBs6DNslh1GCCfvHAM3j/lUA+gOuSKAxPyg55G+eCwdFOR78Cfn23qMiFzHRKrKZAC6Dh5iEUhxDtDstXKzzvEIABTtDmxvRJKEKpppz5vvQvUsnwWKme7I9bLUetzMzGRN3RkkNiWicATqBPhu2Zlp7i/eAxLlrx6bvtKkh1AUCEnRjYg/sBbKercL1cTro/iPH9Upq/lcQbFoAPwtZsG5d4Y+oyvLs5lHJdF4I4FHFeFFXQuLejU1CvuHNEsvyQ7KTLBGAE6/5CfsdL3JRrzjkB+NpQVMmPwjLT9g0xPiPE3OTvSQ2ZKwBDwd2hiI0XgHc+cZuyi3EdkBVRJFOXHDTo3HePBzDTxUMrwk+sOl+AUDhaSnYzm/vF+CAnnN9DpqGPhaY3+5mWP+r/C0DbJxDnxc3jHL+bBHUGozUA/wGqqbOC+XSCnQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://torrentsurf.net/browse.php?search=%search_string_orig%+%year%&cat=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': /Nothing found/},
  {   'name': 'TorSurf',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUbSURBVFjDrZdbiFZVFMfPyCSSJFkPBZ0izB6iMMGK08U3qcaJjGoHMtAQgfgwhhstCkpQiozaM4FJJSMRpdZOLcGIgrxkbcMUGkHB0ByPXehGgTpDdPn6r7XX2d8+3/mO4zg9/DmXfVm/s9baa++TJMomQRnJdOB+DrQIWg29Bq2D1kIroIXQtWGMLuTqZUh5e8lEl0JPQYehf6HGOegIDG+AgflnNT4mgHYXQBk6bYW+gX7E8xmoAQNeFeMmEr/7Df2fhS4aP0DpRWnQ9bhuBsAwDByAjlUAskj0zMBu9TgBosZ4EOZKXOPKxOYb0UYTOxjfDkPbYPBEFUJ7MYg7jTF3TxAg9xCs/GmG8CA7AbIGRvuhvSUvkFLtRZ4y+UCi84kChM5T0fdABLIHRpbDqMKXO+8B8USAMNR3VwjveQOQHN+naDsOjWBcQxJ1K0BuhPH7YPxMCAUBJMpDmXzfxDxQDscjaB+FjnoAkbI9+OIEhl9n41WInWcHaM3caghivSlGd+P6d1iu2m3jupLq2SEMMYRt9LerA82HwqiJ3F7nOpMPsSeU3Qjjp8MS1VxHJsEDAFGfewjlIQja5N2lD/XGGi2SpKm8j2Rct+TBcRh+HjoVQfwDXY2vJogXghcIxORHffU1vgq3N1CExLbJhSAqVB/KihjCZH3QaChU2v2FthkMkaiHPERWtC3Hc8KqBSAPFBtOfRjWY7KvPQRCocz9ASBjQz+j7WKBuIO94EPxnTeuxgAgL9BgUnuARfz12u3w4bDLAHBXAOA6gHpBfSknkmwWe4Hb0G9MDxAAxYoGE0RppbBnZkIncL8F/f+UlTELffuaEFwRn2MINpjdgMH0/l3olnYA0wAwuQwQQcRnB+3mov9PuO6F1klNGPHtZnOojPTe5pns/0maZF1oO4l+r7RLrl7o8VAbAkAkLfmh3QL0O8RGNVYCxdxDbJBxf4Q9wuS7i+QGAIHMw/s762JLA9bUAqhwAnoJ/T6Dt3LcbwHEyqg63oS+14UNyofiXvYy5gBEBybqiI5UpePVNVLZfsfA26sA7IUrINqcvgDA+7IvPOy9wQBHfCj0y2GjMvn2UOSQDymvgmI9xlJ2KndU9kUYG8XgLyGDiRaifSYmf1Qq4UHoGLRejK6C1obSbPL5kj85e8FXwqua4aVCxBQV0VLCrmeXyiF0EM/Ycs0pmRiZ736FPpVqOCge24NrVzjGGbePDaX6wSgMfVEIawFIS/yuJkvJG6BJ38I9nQV+wfM78uWvyh5A97eifb+UZDI4x5dk/bGEYVPpFF0L4MMxBe7rxcCV8EAPBs6DNslh1GCCfvHAM3j/lUA+gOuSKAxPyg55G+eCwdFOR78Cfn23qMiFzHRKrKZAC6Dh5iEUhxDtDstXKzzvEIABTtDmxvRJKEKpppz5vvQvUsnwWKme7I9bLUetzMzGRN3RkkNiWicATqBPhu2Zlp7i/eAxLlrx6bvtKkh1AUCEnRjYg/sBbKercL1cTro/iPH9Upq/lcQbFoAPwtZsG5d4Y+oyvLs5lHJdF4I4FHFeFFXQuLejU1CvuHNEsvyQ7KTLBGAE6/5CfsdL3JRrzjkB+NpQVMmPwjLT9g0xPiPE3OTvSQ2ZKwBDwd2hiI0XgHc+cZuyi3EdkBVRJFOXHDTo3HePBzDTxUMrwk+sOl+AUDhaSnYzm/vF+CAnnN9DpqGPhaY3+5mWP+r/C0DbJxDnxc3jHL+bBHUGozUA/wGqqbOC+XSCnQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://torrentsurf.net/browse.php?search=%search_string_orig%&cat=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': /Nothing found/,
      'TV': true},
  {   'name': 'TorSurf-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAUbSURBVFjDrZdbiFZVFMfPyCSSJFkPBZ0izB6iMMGK08U3qcaJjGoHMtAQgfgwhhstCkpQiozaM4FJJSMRpdZOLcGIgrxkbcMUGkHB0ByPXehGgTpDdPn6r7XX2d8+3/mO4zg9/DmXfVm/s9baa++TJMomQRnJdOB+DrQIWg29Bq2D1kIroIXQtWGMLuTqZUh5e8lEl0JPQYehf6HGOegIDG+AgflnNT4mgHYXQBk6bYW+gX7E8xmoAQNeFeMmEr/7Df2fhS4aP0DpRWnQ9bhuBsAwDByAjlUAskj0zMBu9TgBosZ4EOZKXOPKxOYb0UYTOxjfDkPbYPBEFUJ7MYg7jTF3TxAg9xCs/GmG8CA7AbIGRvuhvSUvkFLtRZ4y+UCi84kChM5T0fdABLIHRpbDqMKXO+8B8USAMNR3VwjveQOQHN+naDsOjWBcQxJ1K0BuhPH7YPxMCAUBJMpDmXzfxDxQDscjaB+FjnoAkbI9+OIEhl9n41WInWcHaM3caghivSlGd+P6d1iu2m3jupLq2SEMMYRt9LerA82HwqiJ3F7nOpMPsSeU3Qjjp8MS1VxHJsEDAFGfewjlIQja5N2lD/XGGi2SpKm8j2Rct+TBcRh+HjoVQfwDXY2vJogXghcIxORHffU1vgq3N1CExLbJhSAqVB/KihjCZH3QaChU2v2FthkMkaiHPERWtC3Hc8KqBSAPFBtOfRjWY7KvPQRCocz9ASBjQz+j7WKBuIO94EPxnTeuxgAgL9BgUnuARfz12u3w4bDLAHBXAOA6gHpBfSknkmwWe4Hb0G9MDxAAxYoGE0RppbBnZkIncL8F/f+UlTELffuaEFwRn2MINpjdgMH0/l3olnYA0wAwuQwQQcRnB+3mov9PuO6F1klNGPHtZnOojPTe5pns/0maZF1oO4l+r7RLrl7o8VAbAkAkLfmh3QL0O8RGNVYCxdxDbJBxf4Q9wuS7i+QGAIHMw/s762JLA9bUAqhwAnoJ/T6Dt3LcbwHEyqg63oS+14UNyofiXvYy5gBEBybqiI5UpePVNVLZfsfA26sA7IUrINqcvgDA+7IvPOy9wQBHfCj0y2GjMvn2UOSQDymvgmI9xlJ2KndU9kUYG8XgLyGDiRaifSYmf1Qq4UHoGLRejK6C1obSbPL5kj85e8FXwqua4aVCxBQV0VLCrmeXyiF0EM/Ycs0pmRiZ736FPpVqOCge24NrVzjGGbePDaX6wSgMfVEIawFIS/yuJkvJG6BJ38I9nQV+wfM78uWvyh5A97eifb+UZDI4x5dk/bGEYVPpFF0L4MMxBe7rxcCV8EAPBs6DNslh1GCCfvHAM3j/lUA+gOuSKAxPyg55G+eCwdFOR78Cfn23qMiFzHRKrKZAC6Dh5iEUhxDtDstXKzzvEIABTtDmxvRJKEKpppz5vvQvUsnwWKme7I9bLUetzMzGRN3RkkNiWicATqBPhu2Zlp7i/eAxLlrx6bvtKkh1AUCEnRjYg/sBbKercL1cTro/iPH9Upq/lcQbFoAPwtZsG5d4Y+oyvLs5lHJdF4I4FHFeFFXQuLejU1CvuHNEsvyQ7KTLBGAE6/5CfsdL3JRrzjkB+NpQVMmPwjLT9g0xPiPE3OTvSQ2ZKwBDwd2hiI0XgHc+cZuyi3EdkBVRJFOXHDTo3HePBzDTxUMrwk+sOl+AUDhaSnYzm/vF+CAnnN9DpqGPhaY3+5mWP+r/C0DbJxDnxc3jHL+bBHUGozUA/wGqqbOC+XSCnQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://torrentsurf.net/viewrequests.php?search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Not logged in/,
      'matchRegex': />No</,
      'positiveMatch': true,
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
  {   'name': 'TSeeds',
      'searchUrl': 'https://www.torrentseeds.org/torrents?tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /"Download">/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TSeeds-Req',
      'searchUrl': 'https://www.torrentseeds.org/requests?unfilled=1&tmdbId=%tmdbid%',
      'loggedOutRegex': /Cloudflare|Forgot Your Password|Service Unavailable/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TSP',
      'searchUrl': 'https://www.thesceneplace.com/index.php?page=torrents&search=%search_string_orig%+%year%&category=20;21;22;23;24&options=0&active=0',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'positiveMatch': true,
      'matchRegex': /onMouseOut="this.className/},
  {   'name': 'TSP',
      'searchUrl': 'https://www.thesceneplace.com/index.php?page=torrents&search=%search_string_orig%&category=15;16;17;18;25&options=0&active=0',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'positiveMatch': true,
      'matchRegex': /onMouseOut="this.className/,
      'TV': true},
  {   'name': 'TSP-Req',
      'searchUrl': 'https://www.thesceneplace.com/index.php?page=viewrequests&search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'positiveMatch': true,
      'matchRegex': />No</,
      'both': true},
  {   'name': 'TT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAhBQTFRFAAAAFxcXfIdXgZNPPUchAAAAAAAAV2RIY3pDPEojAAAAKioqZW9Gq8RfjqdMAAAADBMGeJVJaIk6KDMYAAAAcX1MrsZmjKRLAAAAAAAAAAAABgwGcI8/Y4I6LDsZfpFGlq9RVFw9iJtaj6hZhJ5RaH0/QEsreJdHOk8hSFQnmK5RkahNo75YkKRbo79ffZ1HXXc1bo8+XHo0WXcyGyUOCg8FCQkEISUSDhMHBQoABAgAWmc7JTAVbH4/N0kefY9JRVsnAAAAjKNNVW8vAAAAHBwVExoNY3E+nr1Wg51JgJxIiqtMOUckDw8KDQ0GAAAAYmpFr8Vqo7pesMpnrMZmVWQwLTQcsbGxsLGwIysVYHJEiahXdZVFc5JLY4I9ICwSfI1Gl7JRHSIQAAAAlZWVi4uLAAAAJzAVdZZBOEsfUV4rmbFSkqxPBwcDAAAAAAAAGh8Ud5ZFc5dAWnczICoRPEYio7xXjaZMBwcDFBoKbo0+ZIM3Fx8MAAAAS1YoY3M0KzIWKjcWRFglJjIUAAAAs9Fgep5EuNRjdJhBvNhluNVidZpCcZdAocFXmrpUk7RRja5Npb1jp8ZaocBXhqlKbIo8rctdgKRHla9QpsRag6VIcJA+gJZFaHs4nrxVh6hKSl0paYc6qsdccog+aX05hJ9IfJhEV2wwYnw2f6JHkKhQmLRTfJtGbYlAtdFh////SoNNDAAAAIV0Uk5TAAuJyWsDAWPIjxAGYvzyNyjv/HIIfPf1PAcbKPD4ir/4ncjh4cmX9tVt+/3+/v7+/v79/IkyNXqQMjp5jZ2yw9AM5esdJCfL/v7+/tkwJgJg+f3+/umz+vy04f7+/fpusvpvEtDaIFX4yHT390IhJzHy/vmPYfr3RjHy/HgKi9qIctmeExoMbtgAAAABYktHRK/ObKMxAAAACXBIWXMAAB7BAAAewQHDaVRTAAAA0klEQVQYGVXBvy4EURiH4d/7zZkz50+BRCIalWajkSgVsjcgao3sFYhIlAq1VmdD4kI020zcApEImTtQ7CzrDJXnQQx6SZ7i03LOVympSOkyxnWXOPuOJDRv0MUNls4rxSKt5azqNDFicALc8avehWPowfEAr65/0n690MDcTDJJZo0K70ySSTLnsrTivW1KThrjYYOi2unk/AEEpsCEyCEc8Z9bHdE/82er5sXS27ZynqZ0H6O6Llfvex9h6Wdt+zWu/bJurQthHm9VXDeLEB5/AFWwKWjvya9AAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTA1LTAxVDE4OjA2OjExKzAyOjAwq9Q12QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wNS0wMVQxODowNjoxMSswMjowMNqJjWUAAAAASUVORK5CYII=',
      'searchUrl': 'https://tt.smallfoot.me/t?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Reset Password/,
      'matchRegex': /No Torrents Found!/,
      'both': true},
  {   'name': 'TTR',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAADXJwCQIRliExP/OhPEJwD///8pBgVTCAfwJAf8UBTPm5jtz83GY1b26+iFZGFCzkGWAAAAAXRSTlMAQObYZgAAAw9JREFUSMftk89r02AYx6sieo1YZLf5ltrWWS15GY1KD8N4WHVCO4puMnbLpd0PGuSNnkZzSGSnYT304EXqYUE9FNkO6TYQKcIyhTmm7AfeepilouK6m75J875vuh9/gODn0Lzh++33eZ4kj+8/B0GKCqGgoaN0Xf1jWpb5VdAnD9WFQlVyWN5TDnPA/JwkjTesuiRlW+pBXdbnpJz5E4ArmzUpG4/v10+HLkmNVUFXBV2PLkrf5al9BjVfz33SoYOeWJQ+q/sC4ru5igpdhEQtq8Q6DIW8tAIJChR6pHno1U+FL2QDRNdbMizMjXV0cVyvVWj+dEuBMCGFvIPAaU/AkoIKEK6/Vz0thi+/haANDlA1JQB7xtQYqxCupoELDhBUxAO+Gg5RA8+vED0w3YKCHpcB2PoSoAaQqFDDkgyhE9FT4SdJCyC6SgzXcQCCEEdEK3yMtACigIADtLiMIwDYBt3UMEL0+0gXZICghvLYEHYNDwCZITiPFA2CkKIhhP9FuuylhlGEkMynAdIRymeYIUMIYQOPr3fxVQmmgWs4Tw0Cjg7aBw0pEB/cOYe6SjMlGy4NtV770PUEQZDhMu4LPSsWxbWiiJlJF0plfO0vhvkUNroPAmtJs1+0ORO5teYcbgbPiiIx4OOr6puiIxSXN0QHv/1DDclNs+FE9N9e2C6LBGIYFgfMau1d0Q5omOYG1fvcJi8ayarVzM0axuydb6a5kDRc+twxrxnGpmXVdpJGsm4tmz8Mwgtfm0eGMfDBao6Xy6/xbn4cpobnruFYOTm71WzWd4r1erP5OykSbpDXjQd4JjWl3Eu8+xMRqpfOkbUpYdbHJYdfJUpXt88lwnFdo2194vEM5+LP0N16mMG3u45hj+pcJs324im+H20HcMxwz0fhUm4EDmAVupnhasqO6AwgnwurgSNwADMM+jwM2REjdgCrEPMaTjoRYaazGbwRKY9OWmQRTLXDSAeMiL9DJx0wTgz5vXqICmxUzp8i9VkBL/kUltoM0mfUWSXoFgj4jkIFQbzTU75/jb9YLXSq/qxHmQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://torrenteros.org/api/torrents?keys=%search_string_orig%+%year%&limit=1&torrent_type=all',
      'goToUrl': 'http://torrenteros.org/torrents/aggregate?keys=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total":0/},
  {   'name': 'TTR',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAADXJwCQIRliExP/OhPEJwD///8pBgVTCAfwJAf8UBTPm5jtz83GY1b26+iFZGFCzkGWAAAAAXRSTlMAQObYZgAAAw9JREFUSMftk89r02AYx6sieo1YZLf5ltrWWS15GY1KD8N4WHVCO4puMnbLpd0PGuSNnkZzSGSnYT304EXqYUE9FNkO6TYQKcIyhTmm7AfeepilouK6m75J875vuh9/gODn0Lzh++33eZ4kj+8/B0GKCqGgoaN0Xf1jWpb5VdAnD9WFQlVyWN5TDnPA/JwkjTesuiRlW+pBXdbnpJz5E4ArmzUpG4/v10+HLkmNVUFXBV2PLkrf5al9BjVfz33SoYOeWJQ+q/sC4ru5igpdhEQtq8Q6DIW8tAIJChR6pHno1U+FL2QDRNdbMizMjXV0cVyvVWj+dEuBMCGFvIPAaU/AkoIKEK6/Vz0thi+/haANDlA1JQB7xtQYqxCupoELDhBUxAO+Gg5RA8+vED0w3YKCHpcB2PoSoAaQqFDDkgyhE9FT4SdJCyC6SgzXcQCCEEdEK3yMtACigIADtLiMIwDYBt3UMEL0+0gXZICghvLYEHYNDwCZITiPFA2CkKIhhP9FuuylhlGEkMynAdIRymeYIUMIYQOPr3fxVQmmgWs4Tw0Cjg7aBw0pEB/cOYe6SjMlGy4NtV770PUEQZDhMu4LPSsWxbWiiJlJF0plfO0vhvkUNroPAmtJs1+0ORO5teYcbgbPiiIx4OOr6puiIxSXN0QHv/1DDclNs+FE9N9e2C6LBGIYFgfMau1d0Q5omOYG1fvcJi8ayarVzM0axuydb6a5kDRc+twxrxnGpmXVdpJGsm4tmz8Mwgtfm0eGMfDBao6Xy6/xbn4cpobnruFYOTm71WzWd4r1erP5OykSbpDXjQd4JjWl3Eu8+xMRqpfOkbUpYdbHJYdfJUpXt88lwnFdo2194vEM5+LP0N16mMG3u45hj+pcJs324im+H20HcMxwz0fhUm4EDmAVupnhasqO6AwgnwurgSNwADMM+jwM2REjdgCrEPMaTjoRYaazGbwRKY9OWmQRTLXDSAeMiL9DJx0wTgz5vXqICmxUzp8i9VkBL/kUltoM0mfUWSXoFgj4jkIFQbzTU75/jb9YLXSq/qxHmQAAAABJRU5ErkJggg==',
      'searchUrl': 'http://torrenteros.org/api/torrents?keys=%search_string_orig%&limit=1&torrent_type=tvserial',
      'goToUrl': 'http://torrenteros.org/torrents/aggregate?keys=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total":0/,
      'TV': true},
  {   'name': 'TurkTor',
      'searchUrl': 'https://turktorrent.us/?p=torrents&pid=10&keywords=%tt%&search_type=name',
      'loggedOutRegex': /Cloudflare|Ray ID|Şifrenizi mi unuttunuz|unless you read all your|sürece bu sayfayi göremezsiniz/,
      'matchRegex': /Sonuç bulunamadı|no results found/,
      'both': true},
  {   'name': 'TurkTracker',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AgMAAABECt5BAAAADFBMVEUAAAB/AAA/AAD/AABRR7oHAAAELUlEQVRIx82XTYvTQBjHp9VaGxE9+EJB6wu01YJ48QNUwYKeenBC66VRTGhy8lClFzFbcNE9LbKpSUAtixmSOe/Bi7IfYQ+6iKf9EOvLReqkeZlJZqo38aG0M/3lP/M8zzzMTMD/Yt5gPv8hm0vo5affIBzM74ppYSD7JjjszXtC/HY3+q3/Eg1f301b33laHChp863C4eYX2q7w8ifshJy8TMSMfD+HX7ezXTPrWO7x8k62283FMcp0z4Kcnc2Mvp/H5T3W0z0uS2Omc5XP8gem/RFwVm7TkX7yuLLDTc2FRqfm7A0bNW9XUs1IhI8kvhWyCab/0ucENk5CNIW4Rj0T+hb/bvGIzdtYjA+0ecd518lTYntI52BN8lmfjubWwpdmUeuMKK6JL/lsZCcyWoxTdTmzIBKBa1qI/STZ1EHQguC8exvr2G6tx5Fth8NF4XlQbSjOqob0d4YZ473kC5QglE8p6JZddV0c4kRYaMcYWorX6TV0ZMyYvBxJMDjVVTvDahAECR6nq11SIbAU55mtr9qtBF9LoztYguCkouI+rvgNJcYnQl3UjDDSdETVNVoUBHuKhfoOHrYUpl5qMZZD9eoDB/tELcLOfQ91q8H6eRBbySTupdhqq8F61Y9ZHNRWij04Rd3AZIuRxZaseusUFhd4RDGcXqR0DZOEpmVcvwM8dqPHOItlcAlksA4q22RZUjVjLR9jBA5Q3JhReAljH0+0BHN1TjBacUFBgIsoxIeNSYS/5PCmLw11EwQtm6oZ7aYmbSDzvOH6i7l7LJw47n1XsnU8Q0Y0+JgJp08K+d70so3cWYAMok6wRD4VFd1ypyuuq2jaBK25oJJgTwaX+9O+0+kdLzjuZuCbQcFdJHVEdBaUyWo6Lrz5ABQ8Y6gDCUnGAm+RhEJZtqZ9S4GdHij2HRcBjIs2KCcYQqcPrS5c7RHdoWGAcBCXw4mFGsAbkKhRF1ywSy81d2bGtXaGYC/GKuoV8fSQgQ0fxLhGVqh+J8QnVctTGrcftAzNTwv5SlQL8KZsQbXTa72wpU0TpPhoiIkabpBSbPQ1YyOz6ZYTDC0ZerJ+m1bymRCbKe5CBBGlYcwkNRHWoXcDVu8yFLyPt9STBF+H8IZ8mDsPCnspzm+uO/H+E+IV2WdRJCT4YYQnLKHbHhgtsL/sJLu2wAIrm3FuTs1E+GiSWbHVhIcFTdqfj5rx8oMqTkgUuNAObC87vqlPfz9im0vj+lNko79fDvgTmr/MfBThY2Z6rRF6RhdWEXvG+yb877EwZ+KbIZ/KMj/5vuiaSr3NuPM6j89lpmvS0UXOFj4JborL78zn2tztnR0s72rxCds7zQXaZGarPAKAk9PZXwnWoElfPL6Jqn7w1YzffbpAYKVf8gyA58FgFwitPv8MIZwnlOf0hUtoAYRkgn9lvwE3jGz2VsgLjwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://turktracker.net/browse.php?do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Security Code|Güvenlik kodu/,
      'positiveMatch': true,
      'matchRegex': /dl.png/,
      'both': true},
  {   'name': 'TVCK',
      'searchUrl': 'https://tvchaosuk.com/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Forgot Your Password/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'TVV',
      'searchUrl': 'https://tv-vault.me/torrents.php?action=advanced&imdbid=%tt%&order_by=s3&order_way=desc',
      'loggedOutRegex': /Lost your password\?|Browse quota exceeded|Cloudflare Ray ID/,
      'matchRegex': /Nothing found<\/h2>/,
      'rateLimit': 5200,
      'TV': true},
  {   'name': 'TVV-Desc',
      'searchUrl': 'https://tv-vault.me/torrents.php?action=advanced&torrentdesc=%tt%&order_by=s3&order_way=desc',
      'loggedOutRegex': /Lost your password\?|Browse quota exceeded|Cloudflare Ray ID/,
      'matchRegex': /Nothing found<\/h2>/,
      'rateLimit': 5200,
      'TV': true},
  {   'name': 'TVV-Req',
      'searchUrl': 'https://tv-vault.me/requests.php?search=&imdbid=%tt%',
      'loggedOutRegex': /Lost your password\?|Browse quota exceeded|Cloudflare Ray ID/,
      'matchRegex': /Nothing found|<strong>Yes</,
      'rateLimit': 200,
      'TV': true},
  {   'name': 'UHDB',
      'searchUrl': 'https://uhdbits.org/torrents.php?action=advanced&groupname=%tt%',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Your search did not match anything/,
      'both': true},
  {   'name': 'UHDB-Req',
      'searchUrl': 'https://uhdbits.org/requests.php?submit=true&search=%search_string_orig%&showall=on&filter_cat[1]=1&filter_cat[3]=1',
      'loggedOutRegex': /Lost your password/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'Uniongang',
      'searchUrl': 'https://www.uniongang.tv/browse.php?search=&incldead=1&cat=0&dsearch=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Ещё не зарегистрированы/,
      'matchRegex': /Ничего не найдено/,
      'both': true},
  {   'name': 'Unlimitz',
      'searchUrl': 'https://www.unlimitz.biz/browse.php?search=%search_string%&cat=0&blah=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Recover Password/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'WF',
      'icon': 'https://warezforums.com/images/favicon.ico',
      'searchUrl': 'https://warezforums.com/search.php?action=do_search&keywords=%tt%&postthread=imdbid',
      'loggedOutRegex': /Cloudflare|Ray ID|You are not logged/,
      'matchRegex': /no results were returned/,
      'rateLimit': 5100,
      'both': true},
  {   'name': 'XS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAB7UExURQAAABcXFxcXLhcuLi4XFy4XLi4uFy4uLkVFRUVFXEVcRUVcXFxFRVxFXFxcRVxcXFxcc1xzXFxzc3NcXHNcc3NzXHNzc3Nzi3OLc3OLi4tzc4tzi4uLc4uLi4uLoqKLoqKii6KioqKiubm5udDQ0NDQ5+fQ5+fn5////1iw3I8AAAIKSURBVEjHvZbbctsgEIatRrHkOBFxHBPXNW0pNPD+T9gFdlccZI2nF/lHoxGwn5Y9CHuz+Qp1dwvtjTG6kYmq5ob/BmhGtWCYU0laI5Dma7UzagbUAqDWgDuJHLhPBKyYSCVnqTxo3YZbz/OWnHPee8gtvM86C4OYX+N8mM+FQBoQgLDRxjciD548KAJUqLS7BcAaDGBj+GAtuErWrhQBybtz1lgG0ivhGS7QEuARsLkHm4kB2DsMaZ9Ox/Sn/ZSZ/Y0APJoZ8FAqBrhwIkjOHjIgGLUeykrHKmI1jFHyygVhQdKlOM9b4ijDQnxZAxjJW0oR+Qr4awvAlICmRghFEJFQ6o9BpXhKwBAQFo4xLZK+cFw654DJAPWO7Z8ODwKCh56zlAJM5bPN6RLMARgJ4Ii5NapDCT2MsiMPOm8+BlCagmYg/+Lar4zTLXhLyQgiOY7vy+ZxFYBtCWi5l5/OrQDf+JsO9TqFluTDYtbP0GuwNI7HjgEINHWwiFWrFK1BYgFITVHoGlamHNCx3cVtjSiBQde2+3CbdlNmigCm9SIPK6/fT08MdJWH/fQ8jnDt4HqeXqbKQQs8jasaGLgd8MtuWvAQMkd6PRR1eMvgA58adIpEneqqvcqTwBLNPyhYorP6cZWXvGgfH/JC5Hf1KwGbgdX1/dDPw+HhYRi2/eMj3Ldh/CX/ZP4BymfKmIFynKsAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.xspeeds.eu/browse.php?do=search&keywords=%search_string%&search_type=t_name&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Forget your password/,
      'matchRegex': /<b>Nothing Found<\/b>/},
  {   'name': 'Yubraca',
      'icon': 'data:image/gif;base64,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',
      'searchUrl': 'http://yubraca.net/browse.php',
      'mPOST': 'do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget your password|Zaboravili ste password/,
      'matchRegex': />Nista nije pronadjeno<|>Nothing Found</,
      'both': true},
  {   'name': 'Yubraca-Req',
      'icon': 'data:image/gif;base64,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',
      'searchUrl': 'http://yubraca.net/viewrequests.php?do=search_request',
      'mPOST': 'do=search_request&keywords=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget your password|Zaboravili ste password/,
      'matchRegex': /not_filled.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Zamunda',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://zelka.org/browse.php?search=%search_string_orig%+%year%&c42=1&c25=1&c51=1&c53=1&c46=1&c5=1&c20=1&c54=1&c35=1&c19=1&c24=1&c31=1&c28=1&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|cookies enabled|активирани Бисквитки/,
      'matchRegex': /Нищо не е намерено|No Results/},
  {   'name': 'Zamunda',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://zelka.org/browse.php?search=%search_string_orig%&c42=1&c50=1&c25=1&c51=1&c7=1&c33=1&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|cookies enabled|активирани Бисквитки/,
      'matchRegex': /Нищо не е намерено|No Results/,
      'TV': true},
  {   'name': 'Ztracker',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACsklEQVQozwXBS29UZRgA4Pf9buecOXOhEwrFaWKKBLVyCQgYQliIGAEXLl2YmLiRtYkL97rwJ7hwZ1zhwjQkxhgbw50EKpXgUNoUCrQQOk5P51zmO9/t9Xnwx7zhPQ0zbKWoNcsyybj94xd36D2Fie/tFkCoNTLglWZbozFLJAqBnTaNdei0fdqsF/4Ks0fx95/18l0y1hOEOPKeguAYK8k//lpdnedKQrqDKCAgqkQioxfPqNyk5VvBMmh3GQElCQSn+MmL8tgh9eBhWLgOPCIhEDmsrUBtYDwIG/d8/0G4PVd3p9XkHsaZFE+WaOW+kwmuLUPawvtb9M8V/eW3yc4puPo05GM6/mF8+KxMW1FtvODEL/6gogSerqoLn/o3D0D/b0+MtyfYtUvGMizW6ck10191z/u2NxslERPOYKdLZ8+7ygbr8NEiB/I/fVOZcZA70P5HUIMd0EZtKbDBwIkiF82OMc4Lzn675IcvAzmgGCAHqgEIIAGf0dtnmjd+LWwWRFWppOXm52BzXS1cyRFBj3xnV7xtta+IdyFVYjwK2cCv3a5mjgkB4KtCLN5045GPGkLnjiGawqsOl118fb/cd0pd/n5Ubrh3PmjIBgkUtLoUFUWotnRzVxxcmN7Hh48JW/Ld08neA7x0vnc03n84evyvmX4rwu9W27pIPNVL98hYPnuEOl1fjVQ2tP07/NGt6pOvJu78WWSbdn05vP9ZylwdIYm0KQ6eiE+cjqNIeaOcUVM9mTTZ5CwK5HuPqCqjc59PvHpmxMtXNNnhrhYIvCyDEqIscH6uAMSVRf3RF2leWgo4c1LIBkUt4L0LcrKbVGNSSm1v+yjixoALgBimZlR7J9d1CIGYhACQthkbZtZ7rGtea1YbyHMqStIlvPaG9J5TYGXpnAdjaCszwfP/ATkkhPpxifIUAAAAAElFTkSuQmCC',
      'searchUrl': 'http://ztracker.cc/browse_old.php?keywords=%tt%&search_type=t_description&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Léptessen ki 15 perc/,
      'matchRegex': /dl.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'Ztracker-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACsklEQVQozwXBS29UZRgA4Pf9buecOXOhEwrFaWKKBLVyCQgYQliIGAEXLl2YmLiRtYkL97rwJ7hwZ1zhwjQkxhgbw50EKpXgUNoUCrQQOk5P51zmO9/t9Xnwx7zhPQ0zbKWoNcsyybj94xd36D2Fie/tFkCoNTLglWZbozFLJAqBnTaNdei0fdqsF/4Ks0fx95/18l0y1hOEOPKeguAYK8k//lpdnedKQrqDKCAgqkQioxfPqNyk5VvBMmh3GQElCQSn+MmL8tgh9eBhWLgOPCIhEDmsrUBtYDwIG/d8/0G4PVd3p9XkHsaZFE+WaOW+kwmuLUPawvtb9M8V/eW3yc4puPo05GM6/mF8+KxMW1FtvODEL/6gogSerqoLn/o3D0D/b0+MtyfYtUvGMizW6ck10191z/u2NxslERPOYKdLZ8+7ygbr8NEiB/I/fVOZcZA70P5HUIMd0EZtKbDBwIkiF82OMc4Lzn675IcvAzmgGCAHqgEIIAGf0dtnmjd+LWwWRFWppOXm52BzXS1cyRFBj3xnV7xtta+IdyFVYjwK2cCv3a5mjgkB4KtCLN5045GPGkLnjiGawqsOl118fb/cd0pd/n5Ubrh3PmjIBgkUtLoUFUWotnRzVxxcmN7Hh48JW/Ld08neA7x0vnc03n84evyvmX4rwu9W27pIPNVL98hYPnuEOl1fjVQ2tP07/NGt6pOvJu78WWSbdn05vP9ZylwdIYm0KQ6eiE+cjqNIeaOcUVM9mTTZ5CwK5HuPqCqjc59PvHpmxMtXNNnhrhYIvCyDEqIscH6uAMSVRf3RF2leWgo4c1LIBkUt4L0LcrKbVGNSSm1v+yjixoALgBimZlR7J9d1CIGYhACQthkbZtZ7rGtea1YbyHMqStIlvPaG9J5TYGXpnAdjaCszwfP/ATkkhPpxifIUAAAAAElFTkSuQmCC',
      'searchUrl': 'http://ztracker.cc/viewrequests.php?do=search_request',
      'mPOST': 'do=search_request&searchwords=%search_string_orig%&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Léptessen ki 15 perc/,
      'matchRegex': /not_filled.gif/,
      'positiveMatch': true,
      'both': true}
];

var chinese_sites = [
  {   'name': 'BD-film',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.bd2020.com/search.jspx?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />0 条</,
      'both': true},
  {   'name': 'BT4G',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEX////ExMRGRkYaGhqqqqqYmJiIiIhvb2/FncXiAAAAU0lEQVQI12NgTGCAAFZzAQiD2UwFwioKFQkAM5RUWCBSxQGMEIZwIpTBpAZlsJkJQPUbqUAZzkpQOVZjRQcIK9hIxDERzAoyUjZWB7MYBQUY4AAAUfkIESxqP9YAAAAASUVORK5CYII=',
      'searchUrl': 'https://bt4g.org/search/%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'ignore404': true,
      'spaceEncode': ' ',
      'matchRegex': /did not match any/},
  {   'name': 'BT4G',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEX////ExMRGRkYaGhqqqqqYmJiIiIhvb2/FncXiAAAAU0lEQVQI12NgTGCAAFZzAQiD2UwFwioKFQkAM5RUWCBSxQGMEIZwIpTBpAZlsJkJQPUbqUAZzkpQOVZjRQcIK9hIxDERzAoyUjZWB7MYBQUY4AAAUfkIESxqP9YAAAAASUVORK5CYII=',
      'searchUrl': 'https://bt4g.org/search/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'ignore404': true,
      'spaceEncode': ' ',
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'CHD',
      'searchUrl': 'https://chdbits.co/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search_area=4&search_mode=0&search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/},
  {   'name': 'GPW',
      'searchUrl': 'https://greatposterwall.com/torrents.php?groupname=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|remember me|保持登录/,
      'matchRegex': /first 0 matches|显示前 0 条匹配/,
      'both': true},
  {   'name': 'Haidan',
      'icon': 'https://www.haidan.video/public/pic/favicon.ico',
      'searchUrl': 'https://www.haidan.video/torrents.php?&search=%tt%&search_area=4&search_mode=0&inclbookmarked=0&incldead=1',
      'loggedOutRegex': /Cloudflare|Ray ID|找回密码/,
      'matchRegex': /没有种子/,
      'both': true},
  {   'name': 'Haidan-Req',
      'icon': 'https://www.haidan.video/public/pic/favicon.ico',
      'searchUrl': 'https://www.haidan.video/torrentrequest.php',
      'mPOST': 'query=%tt%&action=list&finished=all',
      'loggedOutRegex': /Cloudflare|Ray ID|找回密码/,
      'matchRegex': /求种中/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'HDA',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRUlEQVQ4y7WTS0iUARSFv/kbw2eYio8onFr0LuhdRNEiicKkNrnJ2jSbgh5EVFQitZIosiJ7+MKgpwjWIloUIlL5IFBRe5BazqTVlDoz+vNP889pYVabXkRnd7mHy7n3nAv/CMefkCR/MmYglpgE0+GY4PvjAZI/hcbLeTRczSPrRBWdR3JJmtNO0rwW0lbVk7qq6dcDzri68fW4CCdEOP7AS/nSKUR/bZrA9p584xu5636WyjbcVUfVAQB5mxYwLj2FhVsDHHj4lm5PFa7cIESLCJC8yPIZmfFfpSpKJ6JMnZxu9cmqUVt1tu7tKlLFutc6OCGsoe59AJ+kbJXG27qI5LnRLyndCUBryTbsz9GE3kXSj8ZsxIjkEAXYQMZiqy/WlQkwsaN4EkbQwBkXGUrLrUt0OPpHV2i+4iYMDA8ZTF5rMn/98GgNbDo4kOGkEIDnZ/dgA7PdgXEObo7K97XOVD5S6frhV5ZaeqWTurS6SwVIx+Lt97ZuAOhDw2JVIBUjaaB57HYGdYWHCAA5ewenjWf55M47tXTVTcUCVrj90QbXAXhxxY2AtJWmL5RY892qJ8VFOrXE7DNVMea9Gsseq2CWNSj/I0lOtRXuVznSGaT+Gq+klB/CImMwrB2hkBbI/2yGypHqd5+39W6n2k9XqXKSRxeQKjND6qro/zSiaz8PzsubW1QaZ6sE6SLSOaRby0x9fODtDap2JKzNv839ZwUP62Hee1WvGdFwx5u3I7odCmnZX32YpFRPQE8tS3P53/gC401Ev6fyBOQAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.hdarea.co/torrents.php?incldead=1&search=%tt%&search_area=4',
      'loggedOutRegex': /Cloudflare|Ray ID|recover.php/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'HDAI',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.hd.ai/Torrents.tableList?page=1&limit=50&searchParams={"keyword":"%tt%"}',
      'goToUrl': 'https://www.hd.ai/Torrents.index?keyword=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /"total":0/,
      'both': true},
  {   'name': 'HDAtmos',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAbUExURQF7vBNtlyVfcy5YYDNUV0BKPFFLNldRP+vn3v1aAn8AAACPSURBVCjPXZFJEgMgCAS7spTfNZcMP3CenYMEF250AY0I2gM4gaDJK4Y67/AeHZ1A6Mg9iBtshgnaAmF7kKtEBy1gewdtAwJoYY9ePAF8JwcUUxfZMXubqgDZ/rQamdatYE5fW6X1BjSvmWEPXqdEPG7wPEHPxrLOe40lmedSgTxwv8D/JXEW1E8p8/qHzH/TeLn7aLMO2QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdatmos.club/torrents.php?incldead=1&spstate=0&search=%tt%&search_area=1&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'HDC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUQYaly1v////9/NZv5AAAAOklEQVQI12NgAAGFroYFDAodShwggoFBC0QoQAmgWFfTAgYEYBFwcWAQBBECAi4BIJYLA4uoQABYEgDsXQq2+4cHAAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdchina.org/torrents.php?incldead=0&spstate=0&inclbookmarked=0&boardid=0&seeders=&search=%tt%&search_area=4&search_mode=2',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found! Try again with a refined search string./},
  {   'name': 'HDFans',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAAE2ElEQVRIx81WS2wbVRSdGXvssSe248SOHRI3cZLG+ZIPpYQ2oIoiFD4ChCqBKliAgAWoO9IiVrCjAbEJCBYsEJvAAkVIpQIV0U0kKFRKnB9NQ344P9tJ7IztsefzZniTNx7PjFOigpB4vrbfvHvnnnfuve+DYf9xs/zL962UyxPq9EdO4TjOMclyA/xuPeIWkvaFPKEub2NvzfE+37E2d00tgeM8D379emR+/P1/AkB5Aq7aVm+4z9/SX93Q4a0L2+w2C4ERBE7A3wMfkoxlsuK3l86k16YNFO9AvKIi2FLZcG9VuNff3Outb3a6KqFH5BQnDPOCrlEjbRZf5LQJoGRJ14Tdoa7L773T3dZspZxWmx3qcEWPL+6K393mTJMYCJEPhmz6EVmWmd34q88/GY1GzQy6z1/uePwVu50MRqhqnzXkMSS/1WeZ3BZj+8DoDnOQWL27ZJkX5MWcC8cNYccdVfWBnqFTr39I2UuqiM86POjU2y3sgA8mcuXBhFO5OOh0kDj0/u5PueXN/auXBtnkqmZAuELdvvbTOC4DSRaBKnNxAalvJcUipGWgntQMNFnZE9fSCjP4G88CK0XTgRb9DIhCaiubiAkAE42C2jdz3A4rof75HspG4GKZJcrxfALAPky4p/E+A0AusZRaneIFWRANgtRwjp/8zKK+k8Sf7bCbzKDIB7aSpPSBhLkbew0AoJDJxKZ5TgBA1otagkCe2RR+i6kReyJib/NZzJayWqywL0uyK9hK2Er5I+C3sLfObK2I4mEAkvLa5zdyLK+OvHzCaQJADKBr2Ic8nP4GR3WDAUASCvubi0itSXERKf1tBoxNqoFqrLI81W7XWyIK8E970RXqMQDAll6+eTiD4uP4dH5lV62oF/qclAUrC5FGSKbrOs0AMA0KgE5KAMWRzyay6pq34a8N0Np4MUSY+ghkV6jPDMDGb3O57J1ygGQyxl+7VUDjj0aoriCpz4EkFd9V0tBEVvgMAHx6g9leEgUzAwAMtD6+zuQ4VfXWWVeRgaxnIImy1VFlr240AMDGxGb1S1QFkAzrNs1Ko9cZpAq4LS89QMNBuVgOmpmkpKHHDJBdN6ShPAdIrkTZqRiPtOf66RqaUJNcZIBI0HV9ZoDc+hQQsTIAzAQA5aMf9pG2wo5feMRdWgeaDZApfyva60sA3N4qm96CJJBoOdBGNPl9g//qhlpRD7dSxwNWxEAzgBg2bxPpvscAAPKpfHL1yBAh+fRHZisNijwItYr0EcYpR6DTAKBEaSMKinWpJdm0MSBJ58DIlZTh/NEVNNoUSG/YDMBuTiF8uHH+TQ6QXJtmby6XzlETA4ghpGNmAC65IIoi1D3dT6ORE2H7oQyQvD22oz9B0SpTYiDjqblxZuGq+VbBp1YuDpFdYd/JFgqNvPmY52yng8lLL45ul5+XfyaE0e/TF4YqDxhIXGZbSC0VErP52C+5tYlDri0y4NuChOYdtbY6Gyon7R6CPrAKJZ4Z+XLmmZ6HjtVWpmfGVr8YlgX2iIuX9/43Kk8OKzx1JppHTOLFTIzfW+Di01w8yu8tATZ5xE3QfFd1+oPPjVldTXCHgbcMZZPPJ4TUH3wSepzld+bFzBY8QO7iqnnIfZiucbWfs9AB6I5LzAr7azKfxf637S/kjKHfRT6qsgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://hdfans.org/torrents.php?search=%tt%&search_area=1',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'HDH',
      'configName': 'HDHome',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFW0lEQVRYw92XW2hcVRSGv3XOmUwyY5u2ptaqoU0botFqW1uk2Hp5EQSpYqmCgoKXF/VBfOiDRaEv4gVRBBUqii/eUNTqgz56wSuKpmlStW2aauy9mubSaTJnr718mJyZMzMnxQdFcMMP56y91t7/+ffaZ68N/3GTf2PQG1+xOYV2ugOjS4yfX79Vdv9rBNZst9yFHXR6ZYXAqnwLq1tCLopyLA5AYoeOT/HUm5vliX+EwG1v2CITeghY3ZLj8ijk4lxEVxTSEgYQBEgQQDAzsjeYLOEmprj2zc3S3zhedKbJbnnbzgK6A+GyUFiVi1iVi1geBcwLA0gmlKD5S7ylJokIvWc90H9GBW5527q8seLRq9m6oI3lsaegkBdABDBk6CTuo/1MZxFedz65K86lpdFuYPmQoxfM4QYR2ZmpwOa37Mm2PHe3RORGy7QuPIuos52wcbDl8wn7juNGxtGmiQzacrC4WB835bBD48zJWnLZ9JpdQMD1c4s83ZpHJOVy4QKiB9dSaAzaN4o+8x2nZlu6zrmED62l0BohUw577CtO/XaSsfESG3bcJgfSvkEMl0rEegkwNcz5GgZPECeOe0dxyXP3fMJ1i8mlfdMYPokbmagoNDKBHi2hQNE83Y1kA405HMeMxAouA0nbsYfpP6fw1XzppbVFEDdLXJKDP59AnVaS0nvWNBEY8wyVlb5yjMWuGYmjU2z7D5SS97YIuamHfFZM7DCzal5Y7DD1YAGrmgh8eY9MmNAfO2L1WCOqCeaxXUeJfzxSW5brusj3nk2YGTcTqQbqMTMsMHrWbLe6nAoAph2/O8ewc5hqPar72oMq9uqPnDod1+x3XEqhMUa1pgBWefceE2HJ/IAlTQQ+vUumppW9qpi3elQJUHk/PIm++1NtKTrbCTf2kG+Kk0qsGaTHCoSVTQQA1PG909kVsJTtvd2cHhmr7YpNvRTawopC1bhUDlRVAfMBl2QScEq/c5g2ILUEdfaXv2cy6SvkkHsvp5juryahh6pNMTyrMwmUPXucY9L7ynolSOdA2v7DQcqfDTOV9F+9lNbLFpFL+hMC3moxapjAsmu3W0cTga/vk4NlZSiOsxVQbVbnha8YL5VrPg9eyZxq3Mwi1CngMPMsiI2lTQQA4pgBp1jsa6gSsHp77LHR0/iXvmU88ekoEt65hmLsSW2C+hhvGFpLxDoCTul3mq2AZSigDvtwkNLgEcqJ38ZeiucWCJJIn1JAHeYVQ2t5UEdAHX0a1wdUc0Dr7Wk89zljiV+xBXlgPXNTSVjvX/lH9GAmTQSmyxyIPYedwxJUyfmarRGDhyjv2FXbFeuW0Lqso3LUew9pX3WY9yxb+SznNRHY9bCMquPALArYbAqow178jPFjE7UaoZCrjG3W7OsdrZGr/A+CxsNBlZ3qK1+sDUmY9c9PMFpCn/uE0aYiJTVWAl85truyCXj6EqbFXK2C8W72HEjw8QCl/t/ryzWfoYAqJp6RTAIovziPU8VuXkkxMa9dQj7r0GnE1g840VimqVa+3Ck4jyi837dVPsqsilUZfuxmckvn07Gyk9bEfveVtF/TTdvkNP72lzkyWzk2fIz4lS84ec8G5s0Q8M44IjBkwoB4vhkc4Ysz3gv2HrOD3QsrWZrVLnqE4XRdLYbMaCkI4wQc+GYLV7UXmDf8By9ueJ4th7ZJ6W9fTHq32f1aZov5WglWnawyCYCIUCZghIBfxOiXgJ3xNEP7Hpfjf/eik3kxiad5RyI2mbHMDBNBTPAScMxgn0T0e8eARezef4jDvCTxP345Xb7NzgmVzcAihN3eGBgL+fX4Npnk/9T+AgPhsag0aZ/vAAAAAElFTkSuQmCC',
      'searchUrl': 'https://hdhome.org/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found! Try again with a refined search string/},
  {   'name': 'HDS',
      'searchUrl': 'https://hdsky.me/torrents.php?incldead=1&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/},
  {   'name': 'HDS',
      'searchUrl': 'https://hdsky.me/torrents.php?cat402=1&cat403=1&incldead=1&search=%search_string%&search_area=0&search_mode=0',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/,
      'TV': true},
  {   'name': 'HDtime',
      'searchUrl': 'https://hdtime.org/torrents.php?incldead=0&search=%tt%&search_area=1',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)|Site is down/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'HDU',
      'searchUrl': 'https://pt.upxin.net/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found!/},
  {   'name': 'HDZ',
      'searchUrl': 'https://hdzone.me/torrents.php?search=%tt%&search_area=1',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'Itzmx',
      'searchUrl': 'https://pt.itzmx.com/torrents.php?incldead=0&spstate=0&search=%tt%&search_area=1&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'JoyHD',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.joyhd.net/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /Resend Email Verification/,
      'matchRegex': /Nothing found! Try again with a refined search string/},
  {   'name': 'M-T',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAACVBMVEUAAAD2yl8AAABwY/xKAAAAAXRSTlMAQObYZgAAAM5JREFUSMft1jEOwyAMBdAvRm5S7kOGnCDiFFHv4J0FCXzKyolpVOSoS7fiCfMcIowSgdtwbMYOb0NGoGjEUhGiGRUPG7YJE/4PuOkXw+UDVtaJpBUdUvbnBINJQXPwsVKGLwqaw0vlusO1CySHk8oEgC3YAIQOWgiBCsCPIGtnAbpgE3gouN/C+HIbigGr5O990LBz6ju3mpgErLaP3Y1p9+2ACl+Go6XzUR10WLhF88xj6n9ZjhMmTPgKwYaKQBYs9f6K43TAGs9+KbqLFzcxCeYxF3pcAAAAAElFTkSuQmCC',
      'searchUrl': 'https://kp.m-team.cc/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search=%tt%&search_area=4&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|type="password" name="password"|An error occurred|Please input the 6-digit code/,
      'matchRegex': /download.php/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'OshenPT',
      'searchUrl': 'http://www.oshen.win/torrents.php?incldead=1&spstate=0&search=%tt%&search_area=1&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'OurBits',
      'searchUrl': 'https://ourbits.club/torrents.php?search_area=4&search=%tt%',
      'loggedOutRegex': /SSL \(HTTPS\)/,
      'matchRegex': /Nothing found! Try again with a refined search string/},
  {   'name': 'PTer',
      'searchUrl': 'https://pterclub.com/torrents.php?search=%tt%&search_area=4',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)|Err code/,
      'matchRegex': /Nothing found!/,
      'both': true},
  {   'name': 'PTMSG',
      'searchUrl': 'https://pt.msg.vg/torrents.php?incldead=1&search=%tt%&search_area=1',
      'loggedOutRegex': /忘记了密码|Open Neural Network/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'PTTime',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB41BMVEVUdZBUdpFVd5FWd5FWd5JWeJJXeJJXeJNXeZNYeZNZeZNZepNZepRaepRae5Rbe5VcfJVcfJZdfZZefZZefpdffpdff5dgf5hhgJhhgJligZligZplg5tnhZxnhZ1ohZ1php1php5ph55qh55riJ9siZ9siaBtiaBxjaNyjaNzjqR0j6V2kaZ3kqd4kqd4k6d4k6h5k6h6lKl7lal8lap+l6t/mKyAma2Cm66Dm66EnK+FnbCGnbCHn7GIn7GIoLKQpreRpreRp7iSqLiTqLiXq7uZrb2arb2brr6cr76cr7+escChs8KhtMKjtcOmt8WnuMWpuseru8iuvcqvv8uwv8yxwMyzws20ws60w861w8+2xdC3xdC4xtG6x9K9ytS/zNXAzNbBzdbBzdfCztfDztfDztjDz9jEz9nH0drI0tvJ09zK1NzL1d3M1d3N1t7N197Q2eDR2uHT3OPU3OPV3eTW3uTa4efc4+jd4+jd4+ne5Onh5+vi6Ozj6O3k6e3l6u7n6+/n7O/o7PDp7fDr7vLr7/Lt8fPu8fTv8vTw8vXx9Pby9Pby9fby9ffz9fbz9ff09vf09vj19vj29/n2+Pn3+fr4+fr5+vv6+/v7+/z8/P39/f79/v7+/v7+/v/////SEZIxAAACGklEQVRYw2PgpBAwjBowasDgM4CVmYWDAgNY+TXNDSRZyTaAzTClY8bEEgsOMg1gUyhfAAINGqzkGcDqNx9swIJEIfIMECiA6F/QTpoT4AYIlUAN6NEhzwDueKgBNfJsZBnAYtkN1j/Nldxo5PaYANQ/M4if7ITEZxaeFe8kzMTExMrGycPNycrEzAZLoRiABVtSZmHj42QSMnHwDY1NSEuND/O2kGEDG2Ed4I8GAlxEcWQmVo2WeQtgYHploBwwSoSKFmCATj0WHAZodSGrm5ejxsYpVIxpQK8RcQYsWJAvw4bNgH5jvAbMygwJji2dAnZDGD9fdEsjCHSC+FObQMzmQnU2fAZM0GVkYRN3aALp6NBmEVcCAVmvuUButrIiiCONq0SCGgAKIg4m+0kgJ7gxcbCBAKPDHCA3lRPMYSfCAE5OQXAGi4I6lskRZEAaD/4yEcUA1kiQAclc5BsQBjIgiZNsA3gzQAZEkO0FVjVwNHgykWGALhMbK5NoBChV98GSDCkGTLaRkdVwzp0FckCMIBlhMK+ttr5jNjjNViqxkWEAArTawUtIcgyYmm+KKCBJNmBmXZyVCFIJTYoB08P8/NxtVTlZkKVIikYdBmDRiFa8k5ESRw0Y4gbo4zQgnYABbLJZ1RXVeSpY2gisJmVVldU+BBuaolJSUmJYa3JuCaAUP+GWKjs7O462AAc7O8doa33UgGFqAADBac8gNnGEjwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.pttime.org/torrents.php?search=%tt%&search_area=1',
      'loggedOutRegex': /Cloudflare|Ray ID|wechat.jpg|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'TLFBits',
      'searchUrl': 'https://pt.eastgame.org/torrents.php?incldead=1&spstate=0&search=%tt%&search_area=1&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|SSL \(HTTPS\)/,
      'matchRegex': /Nothing found|没有种子|沒有種子/,
      'both': true},
  {   'name': 'TTG',
      'searchUrl': 'https://totheglory.im/browse.php?c=M&search_field=imdb%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forget your password/,
      'matchRegex': /Didn't match any titles/,
      'both': true},
  {   'name': 'U2',
      'searchUrl': 'https://u2.dmhy.org/torrents.php?incldead=0&spstate=0&inclbookmarked=0&search=%tt%&search_area=1&search_mode=0',
      'loggedOutRegex': /Cloudflare|Ray ID|<title>Access Point :: U2<|under heavy load/,
      'matchRegex': /Nothing found/,
      'both': true}
];

var french_sites = [
  {   'name': 'ABN',
      'searchUrl': 'https://abn.lol/Torrent?UserId=&SelectedCats=2&SelectedCats=3&SelectedCats=4&YearOperator=≥&Year=&RatingOperator=≥&Rating=&SortOn=Created&SortOrder=desc&Search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/},
  {   'name': 'ABN',
      'searchUrl': 'https://abn.lol/Torrent?UserId=&SelectedCats=1&SelectedCats=3&SelectedCats=4&SelectedCats=9&YearOperator=≥&Year=&RatingOperator=≥&Rating=&SortOn=Created&SortOrder=desc&Search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/,
      'TV': true},
  {   'name': 'ABN-Req',
      'searchUrl': 'https://abn.lol/Request?SelectedCats=2&SelectedCats=3&SelectedCats=4&Filter=all&SortOn=Created&SortOrder=desc&Unfilled=true&Search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/},
  {   'name': 'ABN-Req',
      'searchUrl': 'https://abn.lol/Request?SelectedCats=1&SelectedCats=3&SelectedCats=4&SelectedCats=9&Filter=all&SortOn=Created&SortOrder=desc&Unfilled=true&Search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /Aucune donn&#xE9;e trouv&#xE9;e/,
      'TV': true},
  {   'name': 'Cpasbien',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExUReYbI/8AAP///+YbI/8AAFZq/VQAAAADdFJOUwAAAPp2xN4AAAECSURBVDjLpdXtDQIhDAbgah1ANrjoAo3vAl7C/jP54xDpByXm+u/yAMmVttAjDTrLG/2CAfSPq2G0iBk9xDMDxhUD1keGCc0M7wM7hQzsNwMDBwrpHG0GOoeKV2PW2Zqx6Ox+Dzfalothfa/9x9hsPo4Xw6TLoifVbyaCGCYiuuyllFLKnZgCvtW9MRmWg6vjp+K64Boyda4L3nOue871fYYXh///Y9O0bHlS1Y0dVzbl2YVCVDkM1cK+mMZaC0pRNbCrRVXnvg10l7Bx1j3Get6x6VAa5xG5/l5NB85nSzg98sEl+djLZ6po5nwiG/evARu1j4WZfu6paQv0S3TimfsA3CnPz7CoD14AAAAASUVORK5CYII=',
      'searchUrl': 'https://cpasbien.to/search_torrent/films/%search_string_orig%.html',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />0 torrents/,
      'spaceEncode': ' '},
  {   'name': 'Cpasbien',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExUReYbI/8AAP///+YbI/8AAFZq/VQAAAADdFJOUwAAAPp2xN4AAAECSURBVDjLpdXtDQIhDAbgah1ANrjoAo3vAl7C/jP54xDpByXm+u/yAMmVttAjDTrLG/2CAfSPq2G0iBk9xDMDxhUD1keGCc0M7wM7hQzsNwMDBwrpHG0GOoeKV2PW2Zqx6Ox+Dzfalothfa/9x9hsPo4Xw6TLoifVbyaCGCYiuuyllFLKnZgCvtW9MRmWg6vjp+K64Boyda4L3nOue871fYYXh///Y9O0bHlS1Y0dVzbl2YVCVDkM1cK+mMZaC0pRNbCrRVXnvg10l7Bx1j3Get6x6VAa5xG5/l5NB85nSzg98sEl+djLZ6po5nwiG/evARu1j4WZfu6paQv0S3TimfsA3CnPz7CoD14AAAAASUVORK5CYII=',
      'searchUrl': 'https://cpasbien.to/search_torrent/series/%search_string_orig%.html',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />0 torrents/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'G-Free',
      'icon': 'https://generation-free.biz/themes/TT-CFR/images/favicon.ico',
      'searchUrl': 'https://generation-free.biz/torrents-search.php?search=%search_string_orig%+%year%&cat=0&genre=&incldead=1&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Les cookies doivent/,
      'matchRegex': /a été trouvé/},
  {   'name': 'G-Free',
      'icon': 'https://generation-free.biz/themes/TT-CFR/images/favicon.ico',
      'searchUrl': 'https://generation-free.biz/torrents-search.php?search=%search_string_orig%&cat=0&genre=&incldead=1&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Les cookies doivent/,
      'matchRegex': /a été trouvé/,
      'TV': true},
  {   'name': 'HD-F',
      'searchUrl': 'https://hdf.world/torrents.php?searchstr=%search_string_orig%+%year%&order_by=time&order_way=desc&group_results=1&action=basic&searchsubmit=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe perdu/,
      'matchRegex': /Aucun fichier trouvé/,
      'both': true},
  {   'name': 'HD-F-Req',
      'searchUrl': 'https://hdf.world/requests.php?submit=true&search=%search_string_orig%&showall=on',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe perdu/,
      'matchRegex': /Aucun résultat/,
      'both': true},
  {   'name': 'HD-O',
      'searchUrl': 'https://hd-only.org/torrents.php?action=advanced&description=%search_string_orig%+%year%',
      'loggedOutRegex': />Entrer</,
      'matchRegex': /Aucun résultat/},
  {   'name': 'HD-O',
      'searchUrl': 'https://hd-only.org/torrents.php?action=advanced&description=%search_string_orig%',
      'loggedOutRegex': />Entrer</,
      'matchRegex': /Aucun résultat/,
      'TV': true},
  {   'name': 'HD-O-Req',
      'searchUrl': 'https://hd-only.org/requests.php?submit=true&search=%search_string_orig%',
      'loggedOutRegex': />Entrer</,
      'matchRegex': /Pas de résultat/,
      'both': true},
  {   'name': 'Sharewood',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAAXi6IAoqJcubkAorkAi6IXi4sXc4pd0NBFoqVcudBcoaIwi6IuoqYXoqJcorkX2sIOAAAAAXRSTlMAQObYZgAAAtBJREFUOMvNlM9rE0EUx1+2MdEGcWe624IH6SyxvRVhLkl/4E5Y0/NCcwhY2BbRayzFXgu5SD3V0puC0KMHe6w9KdKbN/EqFgSviv+A772Z7OTSHMUvZMPMJ+/N983bF/i/dG8yvj4ZT72YiButXxP5yVXh9R8Gn8PWFfiRkl2AMz1m/uZYsBFCptAY7tv1DfxM/yxxVaCiAs5XeHntC5X5shhhI0gGbllvS5rwqnE0uGQs5+GEc/UZtzdCi6WwUjBFywczjPVFl2lFORwNCAd3jwhP6+MNWxUzzt6gXLkmPKVX89RV5WSXfb3CuJ0rSpaXmJbVeEa/oQ5oHUf4vdYrMS234yO9zx3QX2WIDg9LjktQ+R+MZnwoUsT3L0q+ADWzqe3Va/QWFdiIdpyPwtNA9PXyB8Lnei3Hm4Rl5C4+KsiZ7es0bgu5DtDS7Y+9nKNhJ/5EZTvrGBBi/MnKq7iHGWKQbJw11BcY0UR+fqDb30Sv1wORH7EzPvxYON5YPtDvX3+ehTy3R9O9IWY+B/SD5wf6LahN/Q6chr9tRYkZAOsU1EP/wp05LGRn1m2pfsvPxWrZDtk0s0/29rZEfx9K4b3IJBFWSZZlKr596vHNXJrHNeX43DNp4hC8aopavOPyU/Pj72M4uBPS07WLrS2O4SSyOcpXCWTkaUXJsTHgU7fFfImlEB5bU4Fo+mCHFTsr7LjJdISdHZCMR9PYLcsSi/ikA1HRKOMouq7QR6XThV2H6wJDvDeDv6zifuCS7yZpTfl7Uw5XHZZioa7Yohu+FJMbPLuZKUweifUafTtVydrWAFSnqG8vhVDN5ivUBV84X0UyoOqUjUihlKGpepqw11qHLkHRjj88SvhUwHgps06GRr0C5cY6ahZcnr8z34wU55Ieys2wV9WOQcC3nyFPPLN/LM2CSuCk0aVrlw9HyiXwvnTBXrYBO8b2MIR/oL8lvI3zMdnr3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sharewood.tv/filterTorrents?search=%search_string_orig%+%year%&categories[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /table-responsive-line/,
      'positiveMatch': true},
  {   'name': 'Sharewood',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAAXi6IAoqJcubkAorkAi6IXi4sXc4pd0NBFoqVcudBcoaIwi6IuoqYXoqJcorkX2sIOAAAAAXRSTlMAQObYZgAAAtBJREFUOMvNlM9rE0EUx1+2MdEGcWe624IH6SyxvRVhLkl/4E5Y0/NCcwhY2BbRayzFXgu5SD3V0puC0KMHe6w9KdKbN/EqFgSviv+A772Z7OTSHMUvZMPMJ+/N983bF/i/dG8yvj4ZT72YiButXxP5yVXh9R8Gn8PWFfiRkl2AMz1m/uZYsBFCptAY7tv1DfxM/yxxVaCiAs5XeHntC5X5shhhI0gGbllvS5rwqnE0uGQs5+GEc/UZtzdCi6WwUjBFywczjPVFl2lFORwNCAd3jwhP6+MNWxUzzt6gXLkmPKVX89RV5WSXfb3CuJ0rSpaXmJbVeEa/oQ5oHUf4vdYrMS234yO9zx3QX2WIDg9LjktQ+R+MZnwoUsT3L0q+ADWzqe3Va/QWFdiIdpyPwtNA9PXyB8Lnei3Hm4Rl5C4+KsiZ7es0bgu5DtDS7Y+9nKNhJ/5EZTvrGBBi/MnKq7iHGWKQbJw11BcY0UR+fqDb30Sv1wORH7EzPvxYON5YPtDvX3+ehTy3R9O9IWY+B/SD5wf6LahN/Q6chr9tRYkZAOsU1EP/wp05LGRn1m2pfsvPxWrZDtk0s0/29rZEfx9K4b3IJBFWSZZlKr596vHNXJrHNeX43DNp4hC8aopavOPyU/Pj72M4uBPS07WLrS2O4SSyOcpXCWTkaUXJsTHgU7fFfImlEB5bU4Fo+mCHFTsr7LjJdISdHZCMR9PYLcsSi/ikA1HRKOMouq7QR6XThV2H6wJDvDeDv6zifuCS7yZpTfl7Uw5XHZZioa7Yohu+FJMbPLuZKUweifUafTtVydrWAFSnqG8vhVDN5ivUBV84X0UyoOqUjUihlKGpepqw11qHLkHRjj88SvhUwHgps06GRr0C5cY6ahZcnr8z34wU55Ieys2wV9WOQcC3nyFPPLN/LM2CSuCk0aVrlw9HyiXwvnTBXrYBO8b2MIR/oL8lvI3zMdnr3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sharewood.tv/filterTorrents?search=%search_string_orig%&categories[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /table-responsive-line/,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'Sharewood-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAAXi6IAoqJcubkAorkAi6IXi4sXc4pd0NBFoqVcudBcoaIwi6IuoqYXoqJcorkX2sIOAAAAAXRSTlMAQObYZgAAAtBJREFUOMvNlM9rE0EUx1+2MdEGcWe624IH6SyxvRVhLkl/4E5Y0/NCcwhY2BbRayzFXgu5SD3V0puC0KMHe6w9KdKbN/EqFgSviv+A772Z7OTSHMUvZMPMJ+/N983bF/i/dG8yvj4ZT72YiButXxP5yVXh9R8Gn8PWFfiRkl2AMz1m/uZYsBFCptAY7tv1DfxM/yxxVaCiAs5XeHntC5X5shhhI0gGbllvS5rwqnE0uGQs5+GEc/UZtzdCi6WwUjBFywczjPVFl2lFORwNCAd3jwhP6+MNWxUzzt6gXLkmPKVX89RV5WSXfb3CuJ0rSpaXmJbVeEa/oQ5oHUf4vdYrMS234yO9zx3QX2WIDg9LjktQ+R+MZnwoUsT3L0q+ADWzqe3Va/QWFdiIdpyPwtNA9PXyB8Lnei3Hm4Rl5C4+KsiZ7es0bgu5DtDS7Y+9nKNhJ/5EZTvrGBBi/MnKq7iHGWKQbJw11BcY0UR+fqDb30Sv1wORH7EzPvxYON5YPtDvX3+ehTy3R9O9IWY+B/SD5wf6LahN/Q6chr9tRYkZAOsU1EP/wp05LGRn1m2pfsvPxWrZDtk0s0/29rZEfx9K4b3IJBFWSZZlKr596vHNXJrHNeX43DNp4hC8aopavOPyU/Pj72M4uBPS07WLrS2O4SSyOcpXCWTkaUXJsTHgU7fFfImlEB5bU4Fo+mCHFTsr7LjJdISdHZCMR9PYLcsSi/ikA1HRKOMouq7QR6XThV2H6wJDvDeDv6zifuCS7yZpTfl7Uw5XHZZioa7Yohu+FJMbPLuZKUweifUafTtVydrWAFSnqG8vhVDN5ivUBV84X0UyoOqUjUihlKGpepqw11qHLkHRjj88SvhUwHgps06GRr0C5cY6ahZcnr8z34wU55Ieys2wV9WOQcC3nyFPPLN/LM2CSuCk0aVrlw9HyiXwvnTBXrYBO8b2MIR/oL8lvI3zMdnr3QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.sharewood.tv/filterRequests?search=%search_string_orig%&categories[]=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Mot de passe oublié/,
      'matchRegex': /btn-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TCTG',
      'icon': 'https://tctg.in/themes/NB-KidVision/images/favicon.ico',
      'searchUrl': 'https://tctg.in/torrents-search.php?search="%search_string_orig% %year%"&cat=0&incldead=0&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Entrer le total/,
      'matchRegex': /Aucun torrent trouvé/,
      'spaceEncode': ' '},
  {   'name': 'TCTG',
      'icon': 'https://tctg.in/themes/NB-KidVision/images/favicon.ico',
      'searchUrl': 'https://tctg.in/torrents-search.php?search="%search_string_orig%"&cat=0&incldead=0&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Entrer le total/,
      'matchRegex': /Aucun torrent trouvé/,
      'TV': true},
  {   'name': 'Tor911',
      'icon': 'https://www.torrent911.com/themes/default/img/favicon.ico',
      'searchUrl': 'https://www.torrent911.com/recherche/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Pas de torrents disponibles/,
      'both': true},
  {   'name': 'TvRoad',
      'icon': 'https://tvroad.info/themes/Nouveau/images/favicon.ico',
      'searchUrl': 'https://tvroad.info/TvRoad/Torrents/Recherche?recherche=%search_string_orig%&type=tout&endroit=nomtorrent&tl=peuimporte',
      'loggedOutRegex': /Cloudflare|Ray ID|Les Cookies Doivent être/,
      'matchRegex': /Aucun Résultat Pour Votre Recherche/,
      'TV': true},
  {   'name': 'xThor',
      'searchUrl': 'https://xthor.tk/browse.php?c118=1&c119=1&c107=1&c1=1&c2=1&c100=1&c4=1&c5=1&c7=1&c3=1&c6=1&c8=1&c122=1&c94=1&c95=1&c12=1&c31=1&c33=1&c9=1&searchin=title&incldead=0&group=0&state=0&accent=0&price=0&gang=0&mqr=0&staff=0&sch=%search_string_orig% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|autoriser les cookies|Cliquer sur le bouton marqué/,
      'matchRegex': 'Aucun résultat'},
  {   'name': 'xThor',
      'searchUrl': 'https://xthor.tk/browse.php?c104=1&c13=1&c15=1&c14=1&c98=1&c17=1&c16=1&c101=1&c32=1&c110=1&c123=1&c109=1&c30=1&searchin=title&incldead=0&group=0&state=0&accent=0&price=0&gang=0&mqr=0&staff=0&sch=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|autoriser les cookies|Cliquer sur le bouton marqué/,
      'matchRegex': 'Aucun résultat',
      'TV': true},
  {   'name': 'YGG',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www4.yggtorrent.li/engine/search?name=%search_string_orig%&category=2145&sub_category=all&do=search',
      'loggedOutRegex': /Ray ID|security check to access/,
      'matchRegex': 'Aucun résultat',
      'both': true}
];

var german_sites = [
  {   'name': 'Bit-City',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEXIyMgAAAAyQEDlAAAAGklEQVQI12OAAJsaBpMEBLJLYDBDRXY1EIUArhIHTye9LccAAAAASUVORK5CYII=',
      'searchUrl': 'https://bc-reloaded.net/uebersicht.php?showsearch=1&c43=1&c6=1&c7=1&c17=1&c9=1&c26=1&c45=1&c30=1&c33=1&search=%search_string_orig%+%year%&blah=0&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|SQL Error|Passwort vergessen/,
      'matchRegex': /keine Torrents/},
  {   'name': 'Bit-City',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEXIyMgAAAAyQEDlAAAAGklEQVQI12OAAJsaBpMEBLJLYDBDRXY1EIUArhIHTye9LccAAAAASUVORK5CYII=',
      'searchUrl': 'https://bc-reloaded.net/uebersicht.php?showsearch=1&c22=1&c38=1&c23=1&search=%search_string_orig%&blah=0&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|SQL Error|Passwort vergessen/,
      'matchRegex': /keine Torrents/,
      'TV': true},
  {   'name': 'BTF',
      'searchUrl': 'https://bittorrentfiles.me/browse.php?search=%tt%&search_where=4',
      'loggedOutRegex': /Cloudflare|Ray ID|Server nicht zur Verfügung/,
      'matchRegex': /keine Torrents/,
      'both': true},
  {   'name': 'DDLW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJXSURBVHjapJO7axRRFIe/O3eemUmym90QdzdP39Ei2KQRTGVlbyWxUFCw1yZFAqKFjdra6n9j418gqGChaHZ2XnvvzL0WsyLBYOOpDhzOj+93HsJay/+E+6/iw6PnNukusbC4SJIk+J6PxaK1JssLiixDnEZw7+DI9ocjBoMBy/0+cRLj+z5SugigMQ3VVJFl+d8CD56+sGe3thitrdLpdoniBON6GMchlJLaWrCGAINW+qTA/cNn9sr2VQYb68SdDm4Uo6RDZcAVDsqAJyzCGqQQLEiB87t5//GB3Tp3ge5oiJhfRIcR2nXJrGAlCthdW8IKw/mFkN2NZT6lBZ+z6s8Qe8MRcb+PmYshCBHSBcfBGoNFAPC9qinjlnisFMLKlmD/yaGNuj1sFOOHEY4rwREIAZO64YeqASgM6JnjBrB2tkYTxzhRTBCGTK0gKxS4DYUVfK0a4o5smwSYGfG40ihbzWYQhHiBT40grSoSCdIYpGkYRh4rkQeAMlCbFmE1Dul6siVwvQAhJIWu8aXL3qW1Uw+r0jWZbu3c3tkCaNd49+Ubu765yXyvx7dSMa0NbjiH4/sI3wcpaRBkusYzDV6tsWVFMy1bgsZYVNMwyUsmacHO5pAgjLDSRbguCMlEaz6kKYM4YHUhwSgfo6NWQGuN1g3pz2OKvOLW7s1TLbz/+IXLZzpc314/+UxlUTFViqmFtCh49PotThDieB6Fgb2L69y5cY0yHVPrXvsvr94hG90KFEVOnpcoBGHgow3ggOOAmuTkkxSA6fgYXZZtXmYsJjG/BgCm4wqyWfJJYwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://ddl-warez.to/?search=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Keine Ergebnisse/,
      'both': true},
  {   'name': 'DokuJunkies',
      'icon': 'https://dokujunkies.org/img/favicon.png',
      'searchUrl': 'https://dokujunkies.org/serie/search?q=%search_string_orig%',
      'loggedOutRegex': /Seite nicht gefunden/,
      'matchRegex': /<a href="\/serie\//,
      'positiveMatch': true},
  {   'name': 'DWR',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://dragonworld-reloaded.net/selection.php?search=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID|PW vergessen/,
      'matchRegex': /Nichts gefunden/},
  {   'name': 'FilmFans',
      'icon': 'https://filmfans.org/favicon.ico',
      'searchUrl': 'https://filmfans.org/api/v2/search?q=%tt%',
      'goToUrl': 'https://filmfans.org/',
      'loggedOutRegex': /Cannot GET/,
      'matchRegex': /"result":\[\]/},
  {   'name': 'HDCenter',
      'icon': 'https://hdc.bz/hdc.ico',
      'searchUrl': 'https://hdc.bz/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Private Computer/,
      'matchRegex': /did not match anything/,
      'both': true},
  {   'name': 'HDCenter-Req',
      'icon': 'https://hdc.bz/hdc.ico',
      'searchUrl': 'https://hdc.bz/requests.php?submit=true&type=&search=%search_string_orig%&showall=on&filter_cat[1]=1&filter_cat[2]=1&filter_cat[3]=1&filter_cat[4]=1&filter_cat[9]=1&filter_cat[10]=1&filter_cat[11]=1&filter_cat[15]=1&releases[]=1&releases[]=3&releases[]=5&releases[]=6&releases[]=7&releases[]=9&releases[]=11&releases[]=13&releases[]=14&releases[]=15&releases[]=16&releases[]=21&formats[]=0&formats[]=1&formats[]=2&bitrates[]=0&bitrates[]=1&bitrates[]=2&bitrates[]=3&bitrates[]=4&bitrates[]=5&bitrates[]=6&bitrates[]=7&bitrates[]=8&bitrates[]=9&bitrates[]=10&bitrates[]=11&media[]=0&media[]=1&media[]=2&media[]=3&media[]=4&media[]=5&media[]=6&media[]=7',
      'loggedOutRegex': /Cloudflare|Ray ID|Private Computer/,
      'matchRegex': /Nothing found/,
      'both': true},
  {   'name': 'Immortuos',
      'searchUrl': 'https://immortuos.life/filterTorrents?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Hast du dein Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'Immortuos-Req',
      'searchUrl': 'https://immortuos.life/filterRequests?imdb=%nott%&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Hast du dein Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'JME',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAGFBMVEUAAADLbx70hyXaeCDugyS2YxnkfiKcVBQj4lv1AAAAAXRSTlMAQObYZgAAAMJJREFUGNNtj0EOgjAQRX9j0C21ilsZCm6rqKwlqFtCOADiBYgx8frCFEET/6Z5fdNpPv5G/AC5X7CjatSLKA0heu1kqgwGKhJMdIPcvjoZOKkLw+R1l7sKktUBYolig2VHsoGMzDSEYgLmlIsAR6BbLHR9R4SnJc+PQ+zx6Aevs4tZoGypHUwNymQLj6soyuHECjd0mesGSIzw+fd2P59r6+jMtQyTIi1bVbuf5tHq5fmwkUQ6oy36KCIKeNDaeoAxbxiGFqQE92uiAAAAAElFTkSuQmCC',
      'searchUrl': 'https://jme-reunit3d.eu/torrents/filter?imdb=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'JME-Req',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAGFBMVEUAAADLbx70hyXaeCDugyS2YxnkfiKcVBQj4lv1AAAAAXRSTlMAQObYZgAAAMJJREFUGNNtj0EOgjAQRX9j0C21ilsZCm6rqKwlqFtCOADiBYgx8frCFEET/6Z5fdNpPv5G/AC5X7CjatSLKA0heu1kqgwGKhJMdIPcvjoZOKkLw+R1l7sKktUBYolig2VHsoGMzDSEYgLmlIsAR6BbLHR9R4SnJc+PQ+zx6Aevs4tZoGypHUwNymQLj6soyuHECjd0mesGSIzw+fd2P59r6+jMtQyTIi1bVbuf5tHq5fmwkUQ6oy36KCIKeNDaeoAxbxiGFqQE92uiAAAAAElFTkSuQmCC',
      'searchUrl': 'https://jme-reunit3d.eu/requests/filter?tmdb=%tmdbid%&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'myGully',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADPUExURQAAAAkJCQsLCwsgABAQDxUhDhYWFRYWFhkZGRklEhoZGRoaGRoaGhsbGh4eHR4eHh8fHyIiISMiIiMjIiQkIycmJicnJikpKCsrKiwrKywsKy4tLS4uLS87JzEwMDMyMjMzMzU1NDkvJzo6OT08Oz8/PklIR0tBOExLSk5NTFBQTlVUU1lZV1pKO1pZWFxcWl1cWl5dXGJhX2JhYGJiYGtZSG1aSXVjUnZkU3h4eHtoWHxqWX9sXIBuXYVzYod0Y499a5F+bayNcczMzP///xQAxwgAAACvSURBVBjTNY9XEsJACEDRVRN77zXGrmuPil2S+59JWOMbPuANQ4FAIINJwZRPxA2+jWJBd5zMG+1tHz8kgq7uOK6ErsOGBTquL4DaIws6N2znN04NDlMCKlabvQBASeyOLLBYawXg+yxhhSzsWKnGhRHLtXSkcuVAKRYKFtJxiqbz4VCYvbSsTWTCtYDmDi9igaCSo4c2p3toZQuVegdv9H9uiFnEC+nwW1GatDbpF7GULSad5I+2AAAAAElFTkSuQmCC',
      'searchUrl': 'https://mygully.com/search.php?do=process&quicksearch=1&childforums=1&exactname=1&query=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|404 Not Found|Du bist nicht angemeldet/,
      'matchRegex': /lastpost.gif/,
      'positiveMatch': true,
      'rateLimit': 4200,
      'both': true},
  {   'name': 'NRW',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://nrw-tracker.eu/site/torrent_suche.php?showsearch=1&search=%search_string_orig%+%year%&incldead=0&orderby=added&sort=desc&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /keine Torrents/},
  {   'name': 'NRW',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAV1BMVEUAAAABAQEzMzM6OjqQkJAqKioVFRUhISH8/Pyrq6vT09Nubm5VVVXv7+92dnakpKRCQkJLS0uDg4P29vZ6enri4uJcXFzBwcHr6+uZmZnOzs5kZGS2tra4lbyAAAAAAXRSTlMAQObYZgAABzVJREFUaN7dmm9jmjAQh3f5O0wMScRghO//OXeXgBrRrVP7YnvcVlfo77m7UMTSHw0/P8I170H64W1+Hh45KHq/P52OH+B02u/vJVg4Zu/O5/EDnM87tOxvFFQ9ps9zl3MWb4IR/Tyj44RdrPlY/nnuRTRmSsm+Q7IpGTeIHhUXA+bvxk645KVWSsHlQWitJcIY44hfwef4KdygEYXcfpH01oluJMOSfxy7mJiCFgUYz5gPNk3GxSiw+QoNMg4O+7XeM5RsvpSl2I80JRLsj+cu2m08lAYk1u5DsGiZJoM4Q0w0zBCwF0YGra7ULw+xOx/3VbCbRVK3waDWASldkFoSTLICp0cDfoLAPQhNIUnMuxMJDqdzN0iA1lCp+W16id6mX+NLQwDS9efjgQTHMU/qOvdrA1pv8/kf8zVBhiTG4x4F++MswjUelviLQVbY1/KrQGnMCXHe4SLQEkTerCzcTkd/KX49ZlUZcIUP3SLohiJQawft+v5RwCmcou9g7ipgQNT0bTx7Gl+/3Sh7C63y7nQV1PFcDV+bv9TwFGn68yJwrD06dUX+/vAphzt8WVDym/lL/Zt8Vkr/uqDGf7V+ttb+tx005T9dX1nT/7oDBZf4bX47mlcEDw+fu3j/5eIprhVsx78tv8S/K1Cb9eWsiX9VoHSpXz2o/6V4wMBWQOHq0dn5lXjiXiBJ8OTwZwr+HtkKNGvHv8AJDa/AdCvgzw4fqeAVFL8TeHkV3IyHaXgN5VuBDPJR/RJeRQXZCizTenP21PC6wLYClth6eMrLeBS8IUisFUxsrT94Urw0HhXY5enUCrjhmmqXae66PqYXDh5pYzaiXxTa8FbguCTC0UhmY98L/3e1D0IYyuZnVQWuFfiB02DkcJTBeik1j70G5v+8zJpbk/zsND23GsZUPz34VhB9mdA8s6kXg1cA0yxijFiYlaAeFa0AfMwxmpDGCMCTE0LBaKogtoIQg2RIEfRCRKOg9xQj/SRyRtfgBjOZyWtl3YDmLAbR86pmHiYh0AV65FUgQisQNwKBZAsaW2ZqvaLUzPOQ0uRiZwLXNJE00nsUbyfcE8zg3ODBZ/1YkC+CJAoRU3mmXiwAu70yrE4lFQSQjmAAykyIhClCQeZWYHOggx8F2otKANDUtojAYnSGEmyyXqMYnxoSg6d3OonjrvTmMShwZhXYVtAHymdzB0zEwoD9R4eNG6zTLNAqMNAYalPAnGAD4jEw0FtDUMIvgn4roPPD3AMbHGKMw91L2Qn0lAhLBGsV+EDQYURwDK2ndixcPxF0ltEeXQZZQikSVCqRoGwgfPAFDdrjzvhR8YoGj04rIQhYBN0jAYO+B70USvuXVOyklMkVSF4LBc7LRDjumdJkvDLOuEGDMRdBagSpCFQReIICeS2QrYUCaDTaxACCobe0ehoKcfKRABDhdwINJFC3b188tV4WFefm/eScG7BQYJGw+Fe4KMRgBGJACwkVthVw2tZnUAHBAVEklTkYkKXMIRIiBlAAAyU6gVixkMN1CUDOGwHlUweyVJlSxMzCAFJcibhfkGCzqAzXjRImB89HBFVQuxcTv0YCEzegwCTQa9kTxMt+EO0zge34KqjJBtxGsCRprEGtm7MFIyoOdJbw7DDtZRXki0DeC6KvBkwPNO4Kg5DXc4sXcBH0G0HTQTYANt91oHxetwVQi0CtWzN9FzwXZHk/IlDxIsDgnIUGlwu0EUyxDQC67rd+Fzw+2YW87QA4plaBM5NNXoEOnggKPDBak5wAIC6rLYW8Edy/4OhmDbKjg90aG5hUD1/kFf2ry7XZlKlDD1bABS02gksHtHtMWO0lTZcffPmEvkoSdMlfk3x94S8noucCHy8CNiRP/wkiMcm9TS4uP63sc4f0fd/NnTiPcx5MSkIEtdSR/Y0g+lYwVIHYrTsEkecZ8+gF3ziKClKxetIOQaEfhaiKeexj8lKpqa8ZDy9buKsbw8/MNQ9TzJ3QYYiprMEzlOQctOvHucPuZgcr2wsvbhZ7/3OHhYvo7F+9GUhDFgkubC8d2bTWaUU/vXHd/uzilyUFWz54+S7tpwVWtoLwaUFoBdp/WuD1nQA+DL8TsI8LVCNQnxYodifQ8GF0K4BvF6hPj0jB9wrgXvB5vlvwaET/Vgf/mWD4HoH7dkG3COaBwzfA6l2oH4fdHD18A3yYq+A4CgvfQBDz7lAFvVHwcdSUx3Iv8+dp18UAxKeX4FwF++OYDXtWBzR37+hRPxTK5sfda2yAlqDecZ+z4Q+yMUzy5Y74EIX44h1xgk1ixgZIQC2gYdjcc7/cEffFMRmDmoIzhsJtWO6H11auKGmNoBvii+BAhl4ME9bDOfsCfPnL+GZD6djRryXUW/qL4bQ7z10WMVJ9bzyIiKOcx+svVpDh5x6b2I3jPHdvM8/jeN41vxpChgN2cTyi5QMcMf2wln9VFMke/7zJgbim/wIdZt6iSV9J7QAAAABJRU5ErkJggg==',
      'searchUrl': 'https://nrw-tracker.eu/site/torrent_suche.php?showsearch=1&search=%search_string_orig%&incldead=0&orderby=added&sort=desc&cat=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': /keine Torrents/,
      'TV': true},
  {   'name': 'NRW-Req',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://nrw-tracker.eu/site/torrent_request.php?search=%search_string_orig%&filter=true',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort vergessen/,
      'matchRegex': />Nein</,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SerienFans',
      'icon': 'https://serienfans.org/favicon.ico',
      'searchUrl': 'https://serienfans.org/api/v2/search?q=%tt%',
      'goToUrl': 'https://serienfans.org/',
      'loggedOutRegex': /Cannot GET/,
      'matchRegex': /"result":\[\]/,
      'TV': true},
  {   'name': 'SerienJunkies',
      'icon': 'https://serienjunkies.org/img/favicon.png',
      'searchUrl': 'https://serienjunkies.org/serie/search?q=%search_string_orig%',
      'loggedOutRegex': /Seite nicht gefunden/,
      'matchRegex': /<a href="\/serie\//,
      'positiveMatch': true,
      'TV': true},
  {   'name': 'SFP',
      'searchUrl': 'https://s-f-p.dyndns.dk/browse.php?do=search&keywords=%tt%&search_type=t_genre&category=0&include_dead_torrents=yes',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort Vergessen/,
      'matchRegex': /\/dl.png/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SFP-Req',
      'searchUrl': 'https://s-f-p.dyndns.dk/viewrequests.php?do=search_request',
      'mPOST': 'keywords=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|Passwort Vergessen/,
      'matchRegex': /input_true.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'SoR',
      'searchUrl': 'https://sor-next.tk/selection.php?scat[]=30&scat[]=134&scat[]=138&scat[]=137&scat[]=160&scat[]=186&scat[]=143&scat[]=133&scat[]=182&scat[]=183&scat[]=174&scat[]=173&scat[]=191&scat[]=147&search=%search_string_orig%+%year%&blah=0&orderby=added&sort=desc#1',
      'loggedOutRegex': /Cloudflare|Ray ID|Angemeldet bleiben/,
      'matchRegex': /Nicht gefunden was du/},
  {   'name': 'SoR',
      'searchUrl': 'https://sor-next.tk/selection.php?scat[]=140&scat[]=135&scat[]=136&scat[]=180&scat[]=184&scat[]=179&scat[]=173&scat[]=191&scat[]=147&search=%search_string_orig%&blah=0&orderby=added&sort=desc#1',
      'loggedOutRegex': /Cloudflare|Ray ID|Angemeldet bleiben/,
      'matchRegex': /Nicht gefunden was du/,
      'TV': true},
  {   'name': 'STT',
      'icon': 'https://st-tracker.eu/design/ex1080_default/favicon.ico',
      'searchUrl': 'https://st-tracker.eu/tfiles.php?showsearch=1&h66=1&search=%search_string_orig%+%year%&orderby=added&sort=desc&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Nicht eingelogt/,
      'matchRegex': /keine Torrents/},
  {   'name': 'STT',
      'icon': 'https://st-tracker.eu/design/ex1080_default/favicon.ico',
      'searchUrl': 'https://st-tracker.eu/tfiles.php?showsearch=1&h76=1&search=%search_string_orig%&orderby=added&sort=desc&incldead=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Nicht eingelogt/,
      'matchRegex': /keine Torrents/,
      'TV': true},
  {   'name': 'TNT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVAQMAAABrbCoMAAAABlBMVEXm5uYmLzenm8r7AAAC9klEQVRIx73Tz27TMBgAcIcgBSE074R2GMsLIAHiAIeqZuJF9gZw7KFqslNv9AWQhsQL8ASQnXJj10G7OlMOHJcKafXWLB9tbH92Yrb2Aj641q/x5+/zH/Jv2v1V5zXtUW3xWtup+6Rhz+v+oGHvsTctq/vXNnnSOrb5MvqebYHMgtpG8S/T9jCEaR1cylTWU4NZbCoTaiDM5BeFGvRNdbmO08VKvFRPCXexipEOTT9gFUdoJ1hFiP+msa6ii1Hy5A7r9DGDWaatRLvS1jMmCm0CK0K7Mlbq4cyyngry21jVv932c8s62/XvW9u60nLb1K7ObWNyYWiYuN3sXCJldh13WHRl9qqEQpowJtAqPA9trBygzSBTxvB8z5WFlbEcEmkQ4t1I0UZ4r0ZoKVqojIK5kwxiZTO8u5GyIBJ4x2GuEj0q9fs4h+9qdAL6HaXwUZ8vjFTKo6qPUXIZeYth5IrNZFa7ER5NNBTSdoDqrFhRyTf1UkSZrqjUb/oQdJUUsF6I9a4B4AB3HPTJQIWnBaBOGko86QitQDO7lqGFQLbkGglaADEV9XdIy4WToKpP1ZgHmb8KyUpiWlR4q1ARLisnQbYKYVkAq28CsOjBciYTy/0hMdoWgSIUJBK+MQqhWH4EKRjzIS1p6QHmJ68+BFUgLz1OFmwINJNTcQOHKYQU7DoAzlPYZWDPZZBfwFcGWaOOY4AyBGK3MF5UgiYN65JXcOBnDeuRd/CFFKTZOD8l7TbnvTZ5n6dP2+bvTx47djzZa9u9w8lDJ543uU8cnJCNzJ+6FgR/sZFrlMeOhTxxjPHMsYgXjgEXTsrASyflOR846f0aMSeVE37UToZRPmwnU4b8uL3wmydnyfYmdQzGbh3VWGxiXjUuNzG//+PSuQfXP683mns5dvaKVmOI23u1tMQplzsFR9/4RbtgAA6ibRGft21wc7Zoz2U3Z9BeIwTu5EIXUydnfzGt1t8XfIPr798z/mmjOx7wde8I35vbTsn/bH8ANSe+EaJ+o2YAAAAASUVORK5CYII=',
      'searchUrl': 'https://tntracker.org/api/browse?cats=6,7,17,18,19,20,22,24,34,35,36,37,38,39,43,45,46,48&orderC=4&orderD=desc&start=0&length=1&search=%search_string_orig%+%year%',
      'goToUrl': 'https://tntracker.org/browse/?search=%search_string_orig%+%year%&perPage=100&cats=6,7,17,18,19,20,22,24,34,35,36,37,38,39,43,45,46,48&page=1',
      'loggedOutRegex': /:"no access/,
      'matchRegex': /recordsTotal":0/},
  {   'name': 'TNT',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVAQMAAABrbCoMAAAABlBMVEXm5uYmLzenm8r7AAAC9klEQVRIx73Tz27TMBgAcIcgBSE074R2GMsLIAHiAIeqZuJF9gZw7KFqslNv9AWQhsQL8ASQnXJj10G7OlMOHJcKafXWLB9tbH92Yrb2Aj641q/x5+/zH/Jv2v1V5zXtUW3xWtup+6Rhz+v+oGHvsTctq/vXNnnSOrb5MvqebYHMgtpG8S/T9jCEaR1cylTWU4NZbCoTaiDM5BeFGvRNdbmO08VKvFRPCXexipEOTT9gFUdoJ1hFiP+msa6ii1Hy5A7r9DGDWaatRLvS1jMmCm0CK0K7Mlbq4cyyngry21jVv932c8s62/XvW9u60nLb1K7ObWNyYWiYuN3sXCJldh13WHRl9qqEQpowJtAqPA9trBygzSBTxvB8z5WFlbEcEmkQ4t1I0UZ4r0ZoKVqojIK5kwxiZTO8u5GyIBJ4x2GuEj0q9fs4h+9qdAL6HaXwUZ8vjFTKo6qPUXIZeYth5IrNZFa7ER5NNBTSdoDqrFhRyTf1UkSZrqjUb/oQdJUUsF6I9a4B4AB3HPTJQIWnBaBOGko86QitQDO7lqGFQLbkGglaADEV9XdIy4WToKpP1ZgHmb8KyUpiWlR4q1ARLisnQbYKYVkAq28CsOjBciYTy/0hMdoWgSIUJBK+MQqhWH4EKRjzIS1p6QHmJ68+BFUgLz1OFmwINJNTcQOHKYQU7DoAzlPYZWDPZZBfwFcGWaOOY4AyBGK3MF5UgiYN65JXcOBnDeuRd/CFFKTZOD8l7TbnvTZ5n6dP2+bvTx47djzZa9u9w8lDJ543uU8cnJCNzJ+6FgR/sZFrlMeOhTxxjPHMsYgXjgEXTsrASyflOR846f0aMSeVE37UToZRPmwnU4b8uL3wmydnyfYmdQzGbh3VWGxiXjUuNzG//+PSuQfXP683mns5dvaKVmOI23u1tMQplzsFR9/4RbtgAA6ibRGft21wc7Zoz2U3Z9BeIwTu5EIXUydnfzGt1t8XfIPr798z/mmjOx7wde8I35vbTsn/bH8ANSe+EaJ+o2YAAAAASUVORK5CYII=',
      'searchUrl': 'https://tntracker.org/api/browse?cats=2,6,7,16,27,28,29,40,41,42&orderC=4&orderD=desc&start=0&length=1&search=%search_string_orig%',
      'goToUrl': 'https://tntracker.org/browse/?search=%search_string_orig%&perPage=100&cats=2,6,7,16,27,28,29,40,41,42&page=1',
      'loggedOutRegex': /:"no access/,
      'matchRegex': /recordsTotal":0/,
      'TV': true},
  {   'name': 'TorSyndikat',
      'searchUrl': 'https://torrent-syndikat.org/browse.php?searchstring=%tt%&searchtype=imdbId',
      'loggedOutRegex': /Cloudflare|Ray ID|Domain erwerben/,
      'matchRegex': /Keine Ergebnisse/,
      'both': true},
  {   'name': 'TorSyndikat-Req',
      'searchUrl': 'https://torrent-syndikat.org/rsystem/requests.php?cats[]=Serie&cats[]=Film&sname=%search_string_orig%&rtype=all&rfill=unfilled',
      'loggedOutRegex': /Cloudflare|Ray ID|Domain erwerben/,
      'matchRegex': /Keine Ergebnisse/,
      'both': true},
  {   'name': 'TSC',
      'searchUrl': 'https://tsctracker.org/browse.php?c130=1&c76=1&c78=1&c75=1&c113=1&c54=1&c5=1&c55=1&c43=1&c20=1&c120=1&c119=1&c36=1&c121=1&c124=1&search=%search_string_orig%+%year%&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|Login merken/,
      'matchRegex': /keine Torrents/},
  {   'name': 'TSC',
      'searchUrl': 'https://tsctracker.org/browse.php?c112=1&c128=1&c129=1&c69=1&c72=1&c66=1&c125=1&c68=1&c126=1&c127=1&search=%search_string_orig%&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|Login merken/,
      'matchRegex': /keine Torrents/,
      'TV': true},
  {   'name': 'TSH',
      'searchUrl': 'https://theshinning.me/filterTorrents?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Haben Sie Ihr Passwort vergessen/,
      'matchRegex': /label-danger/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'TSH-Req',
      'searchUrl': 'https://theshinning.me/filterRequests?search=%search_string_orig%&categories[]=1&categories[]=2&categories[]=10&unfilled=1',
      'loggedOutRegex': /Cloudflare|Ray ID|Haben Sie Ihr Passwort vergessen/,
      'matchRegex': /<tbody>\s*<\/tbody>/,
      'both': true},
  {   'name': 'WoT',
      'searchUrl': 'https://world-of-tomorrow.eu/browse.php?showsearch=1&c87=1&c64=1&c91=1&c66=1&c11=1&c49=1&c90=1&c48=1&c47=1&c60=1&c62=1&c89=1&search=%search_string_orig%+%year%&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|Account-Bewerbung/,
      'matchRegex': /Nichts gefunden/},
  {   'name': 'WoT',
      'searchUrl': 'https://world-of-tomorrow.eu/browse.php?showsearch=1&c87=1&c64=1&c76=1&c79=1&c95=1&c78=1&c100=1&c16=1&c77=1&search=%search_string_orig%&incldead=0&orderby=added&sort=desc',
      'loggedOutRegex': /Cloudflare|Ray ID|Account-Bewerbung/,
      'matchRegex': /Nichts gefunden/,
      'TV': true}
];

var usenet_sites = [
  {   'name': 'abNZB',
      'searchUrl': 'https://www.abnzb.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'abNZB',
      'searchUrl': 'https://www.abnzb.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'altHUB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAAAAABqCHz+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAA/SURBVCjPY2CgGPz/ix9iKEDXgkMBQhmUi7AMRCNbz4BQjawXzQSCClCMxFRA0Aoi3IDNCiRfkBiSmAFHKQAA3nAtsAtCXGUAAAAASUVORK5CYII=',
      'searchUrl': 'https://althub.co.za/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /nzb_check/,
      'spaceEncode': ' ',
      'positiveMatch': true},
  {   'name': 'altHUB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAAAAABqCHz+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAA/SURBVCjPY2CgGPz/ix9iKEDXgkMBQhmUi7AMRCNbz4BQjawXzQSCClCMxFRA0Aoi3IDNCiRfkBiSmAFHKQAA3nAtsAtCXGUAAAAASUVORK5CYII=',
      'searchUrl': 'https://althub.co.za/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /nzb_check/,
      'spaceEncode': ' ',
      'positiveMatch': true,
      'TV': true},
  {   'name': 'BD25',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD39CPHW4lRAAAAMElEQVQI12NgYGCo+cDg1MFQ08Lg1AJmfACKMdj8YXBqACGWPwwSLAwKLAx1f4DCACqLC6kLjCdiAAAAAElFTkSuQmCC',
      'searchUrl': 'http://www.bd25.eu/index.php?page=files&search=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|not authorized to view/,
      'matchRegex': /download.gif/,
      'positiveMatch': true,
      'both': true},
  {   'name': 'DOGnzb',
      'searchUrl': 'https://dognzb.cr/movies/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Keep me logged/,
      'matchRegex': />available</,
      'positiveMatch': true},
  {   'name': 'DOGnzb',
      'searchUrl': 'https://dognzb.cr/series/%tvdbid%',
      'loggedOutRegex': /Cloudflare|Ray ID|Keep me logged/,
      'matchRegex': /NO NZBS FOUND/,
      'TV': true},
  {   'name': 'DrunkenSlug',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAADnjA/s6uHopUjCva2tppbUzr7QbBXf3NDxwnGii3D49/L545/Cx8+qr7nR1twRDJ5wAAAAAXRSTlMAQObYZgAAAj9JREFUOMtt1EFo01AYB/AwRDaKSNih4KkELJHCJAQZEQ87pI9SZYeZ10OlY6PpIyAeZEqgpxFKeLDDKMKgsJsG8Z1KhkMtDspAHfQwxO2gdB2FXgbtYaC3UV/aNe9l7H98v3z8v8eDCJPEfEnCWKoLV+K7yHIk2UUbUZpCmH7upyQZPY9AxZFGSfnY3ODOY5lGw/fH5mY4uEmh4UtyALKZYHADpBrSJO5jBh8Niy5ruVgORjIMvhgAIR2YdGVKLoO7hj4KQJgOJesMYHCchgawLOwkE6wjD2GeEAihnnHkynoIO5CG0NAZjCsrDB4YaPOivZgnEGC5xEH8HU7tIjNLPN3C5kIIM/NrW05S13t5D1q4xMPL2lZRVeMqoTdKrzBQ1kBrX7RtjRg5N822mlYLRz+KokgBAhOyC34q/DvLNUUxrhEPmDn2HO3jEtEoiNpDD6SfhXBL6r19o1UDmPdAllXc33s6W6uNQC0DQwhz/utgdvvgEvQlVnHepdBqjiG9wKBzygOrmGqf3lO3W/vKCLIJDg4Z3MnWGfQPP18L0xSUEPLRiWoIMAIzIcShwMEfDgwGMQpKjb7HeKLOYPCTA65cCCFOIcvByZADyMFcZ0epfVulT0vB42CvWxQ1sCraAdgc3O7/JQZo2gHYZQpsrWN09OT7GF5zIHwdDM4eXcIrHmJzxP4wAsXORX8A5H25SstV21sSIvm9TInYpNBbj8I0HPQR2hyedIUr2V0edIYXi5lJNYv/QteBE57/B7RpFm5n21SwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://drunkenslug.com/movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me/,
      'matchRegex': /Download/,
      'positiveMatch': true},
  {   'name': 'DrunkenSlug',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAADnjA/s6uHopUjCva2tppbUzr7QbBXf3NDxwnGii3D49/L545/Cx8+qr7nR1twRDJ5wAAAAAXRSTlMAQObYZgAAAj9JREFUOMtt1EFo01AYB/AwRDaKSNih4KkELJHCJAQZEQ87pI9SZYeZ10OlY6PpIyAeZEqgpxFKeLDDKMKgsJsG8Z1KhkMtDspAHfQwxO2gdB2FXgbtYaC3UV/aNe9l7H98v3z8v8eDCJPEfEnCWKoLV+K7yHIk2UUbUZpCmH7upyQZPY9AxZFGSfnY3ODOY5lGw/fH5mY4uEmh4UtyALKZYHADpBrSJO5jBh8Niy5ruVgORjIMvhgAIR2YdGVKLoO7hj4KQJgOJesMYHCchgawLOwkE6wjD2GeEAihnnHkynoIO5CG0NAZjCsrDB4YaPOivZgnEGC5xEH8HU7tIjNLPN3C5kIIM/NrW05S13t5D1q4xMPL2lZRVeMqoTdKrzBQ1kBrX7RtjRg5N822mlYLRz+KokgBAhOyC34q/DvLNUUxrhEPmDn2HO3jEtEoiNpDD6SfhXBL6r19o1UDmPdAllXc33s6W6uNQC0DQwhz/utgdvvgEvQlVnHepdBqjiG9wKBzygOrmGqf3lO3W/vKCLIJDg4Z3MnWGfQPP18L0xSUEPLRiWoIMAIzIcShwMEfDgwGMQpKjb7HeKLOYPCTA65cCCFOIcvByZADyMFcZ0epfVulT0vB42CvWxQ1sCraAdgc3O7/JQZo2gHYZQpsrWN09OT7GF5zIHwdDM4eXcIrHmJzxP4wAsXORX8A5H25SstV21sSIvm9TInYpNBbj8I0HPQR2hyedIUr2V0edIYXi5lJNYv/QteBE57/B7RpFm5n21SwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://drunkenslug.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember me/,
      'matchRegex': /No result!/,
      'TV': true},
  {   'name': 'GingaDADDY',
      'searchUrl': 'https://www.gingadaddy.com/nzbbrowse.php?b=2&st=2&k=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|You need cookies enabled|Forgotten Password/,
      'matchRegex': /Try again with a refined/,
      'both': true},
  {   'name': 'MIAtrix',
      'searchUrl': 'https://www.miatrix.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'spaceEncode': ' '},
  {   'name': 'MIAtrix',
      'searchUrl': 'https://www.miatrix.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'NinjaCentral',
      'searchUrl': 'https://ninjacentral.co.za/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NinjaCentral',
      'searchUrl': 'https://ninjacentral.co.za/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBcat',
      'searchUrl': 'https://nzb.cat/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /search did not match/,
      'spaceEncode': ' '},
  {   'name': 'NZBcat',
      'searchUrl': 'https://nzb.cat/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /search did not match/,
      'spaceEncode': ' ',
      'TV': true},
  {   'name': 'NZBfinder',
      'icon': 'https://nzbfinder.ws/img/appicons/favicon-32x32.png',
      'searchUrl': 'https://nzbfinder.ws/Movies?imdb=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot password/,
      'matchRegex': /View on IMDB/,
      'positiveMatch': true},
  {   'name': 'NZBfinder',
      'icon': 'https://nzbfinder.ws/img/appicons/favicon-32x32.png',
      'searchUrl': 'https://nzbfinder.ws/search?id=%search_string%&t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot password/,
      'matchRegex': /No result!/,
      'TV': true},
  {   'name': 'nzbforyou',
      'searchUrl': 'https://www.nzbforyou.com/search.php?keywords=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|Remember me/,
      'matchRegex': /No suitable matches were found/,
      'both': true},
  {   'name': 'NZBgeek',
      'searchUrl': 'https://nzbgeek.info/geekseek.php?moviesgeekseek=1&browsecategory=2000&browseincludewords=%search_string% %year%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgot password/,
      'matchRegex': /returned 0 releases/},
  {   'name': 'NZBgeek',
      'searchUrl': 'https://nzbgeek.info/geekseek.php?moviesgeekseek=1&browsecategory=5000&browseincludewords=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID|forgot password/,
      'matchRegex': /returned 0 releases/,
      'TV': true},
  {   'name': 'NZBGrabit',
      'icon': 'data:image/gif;base64,R0lGODlhEAAQAKIAAM/j5CQ/T6vKzFqInAAAAP///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjM1RTVFRkNDMTY3MTFFQkE2NkZGMkMzRkY2MDAxQTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjM1RTVFRkRDMTY3MTFFQkE2NkZGMkMzRkY2MDAxQTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMzVFNUVGQUMxNjcxMUVCQTY2RkYyQzNGRjYwMDFBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMzVFNUVGQkMxNjcxMUVCQTY2RkYyQzNGRjYwMDFBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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',
      'searchUrl': 'https://www.nzbgrabit.xyz/nzbsearch.php?query=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID|You are not logged in/,
      'matchRegex': /There are no posts/,
      'both': true},
  {   'name': 'NzbNdx',
      'icon': 'https://www.nzbndx.com/templates/bookstrap/images/icons/favicon.ico',
      'searchUrl': 'https://www.nzbndx.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NzbNdx',
      'icon': 'https://www.nzbndx.com/templates/bookstrap/images/icons/favicon.ico',
      'searchUrl': 'https://www.nzbndx.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBnoob',
      'icon': 'https://nzbnoob.com/templates/bookstrap/images/icons/favicon.ico',
      'searchUrl': 'https://nzbnoob.com/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NZBnoob',
      'icon': 'https://nzbnoob.com/templates/bookstrap/images/icons/favicon.ico',
      'searchUrl': 'https://nzbnoob.com/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBplanet',
      'icon': 'https://nzbplanet.net/views/images/iphoneicon.png',
      'searchUrl': 'https://nzbplanet.net/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember Me</,
      'matchRegex': /did not match any/},
  {   'name': 'NZBplanet',
      'icon': 'https://nzbplanet.net/views/images/iphoneicon.png',
      'searchUrl': 'https://nzbplanet.net/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|>Remember Me</,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBSin',
      'icon': 'data:image/gif;base64,R0lGODlhQABAAKIAAArWC/CH+yqi/fz8/kh5wQEDCwAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDY2NzU4RDVCRDM0MTFFQkFERDdFRDlDOUQ3MkI0RjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDY2NzU4RDZCRDM0MTFFQkFERDdFRDlDOUQ3MkI0RjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENjY3NThEM0JEMzQxMUVCQUREN0VEOUM5RDcyQjRGNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjY3NThENEJEMzQxMUVCQUREN0VEOUM5RDcyQjRGNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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',
      'searchUrl': 'https://nzbs.in/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username|Lost your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NZBSin',
      'icon': 'data:image/gif;base64,R0lGODlhQABAAKIAAArWC/CH+yqi/fz8/kh5wQEDCwAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDY2NzU4RDVCRDM0MTFFQkFERDdFRDlDOUQ3MkI0RjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDY2NzU4RDZCRDM0MTFFQkFERDdFRDlDOUQ3MkI0RjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENjY3NThEM0JEMzQxMUVCQUREN0VEOUM5RDcyQjRGNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENjY3NThENEJEMzQxMUVCQUREN0VEOUM5RDcyQjRGNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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',
      'searchUrl': 'https://nzbs.in/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username|Lost your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'NZBsu',
      'icon': 'https://www.nzb.su/templates/light/images/icons/favicon.ico',
      'searchUrl': 'https://www.nzb.su/search/%search_string% %year%?t=2000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/},
  {   'name': 'NZBsu',
      'icon': 'https://www.nzb.su/templates/light/images/icons/favicon.ico',
      'searchUrl': 'https://www.nzb.su/search/%search_string%?t=5000',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgotten your password/,
      'matchRegex': /did not match any/,
      'TV': true},
  {   'name': 'OmgWtf',
      'searchUrl': 'https://omgwtfnzbs.me/browse?search=%tt%&cat=default&sort=3',
      'loggedOutRegex': /Cloudflare|Ray ID|Forgot your username/,
      'matchRegex': /returned no results/,
      'both': true},
  {   'name': 'WtFnZb',
      'icon': 'https://0ccec98d8962a17294688363537bfe2e.wtfnzb.pw/templates/bookstrap/images/icons/favicon.ico',
      'searchUrl': 'https://0ccec98d8962a17294688363537bfe2e.wtfnzb.pw/movies/?imdb=%nott%',
      'matchRegex': /Director/,
      'positiveMatch': true,
      'loggedOutRegex': /Remember Me/}
];

var subs_sites = [
  {   'name': 'Addic7ed',
      'searchUrl': 'https://www.addic7ed.com/search.php?search=%search_string%&Submit=Search',
      'matchRegex': /returned zero results/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'ArgenTeam (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD+piP+ryfhkB/3iBzTn17+qBueXhytzVNOAAAAAXRSTlMAQObYZgAAAJFJREFUKM/NzTEKwkAQheEFhW2dDcQ2DmgdXcV6Q/AEpheE1ClWcn3fMGsYT6B/Nx8Dz/2uVSxNBWIkRruw/4B2onrjTL4j+oJMRK196AGTnTLwGtA9AfRe3/gwjswL5MDM1/lIVBlwPi2rPQucAY1Cwv1wGCngBRpZrVsd6QDbDECVQGCEZekpIxFdBm12/9IbRsweLgGQj4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.argenteam.net/search?filter=%search_string_orig%+%year%&movieFilter=on',
      'matchRegex': /No se encontraron coincidencias/,
      'inSecondSearchBar': true},
  {   'name': 'ArgenTeam (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAD+piP+ryfhkB/3iBzTn17+qBueXhytzVNOAAAAAXRSTlMAQObYZgAAAJFJREFUKM/NzTEKwkAQheEFhW2dDcQ2DmgdXcV6Q/AEpheE1ClWcn3fMGsYT6B/Nx8Dz/2uVSxNBWIkRruw/4B2onrjTL4j+oJMRK196AGTnTLwGtA9AfRe3/gwjswL5MDM1/lIVBlwPi2rPQucAY1Cwv1wGCngBRpZrVsd6QDbDECVQGCEZekpIxFdBm12/9IbRsweLgGQj4AAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.argenteam.net/search?filter=%search_string_orig%+%year%&serieFilter=on',
      'matchRegex': /No se encontraron coincidencias/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Assrt (CN)',
      'searchUrl': 'https://assrt.net/sub/?searchword=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /找不到字幕/,
      'inSecondSearchBar': true},
  {   'name': 'Assrt (CN)',
      'searchUrl': 'https://assrt.net/sub/?searchword=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /找不到字幕/,
      'inSecondSearchBar': true,
      'TV': true},
 {   'name': 'Bukvi (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAACAx4zICJNNCYaEiCBOB1vTy2gTCCqeTWNaDLvbB+7XyTOq0e8lUD2jS7zyk9jwSYaAAAAAXRSTlMAQObYZgAAAqRJREFUOMudlOFLE2Ecx+d/sN/2TOaLXtztZgsruNumJo647WbSO/WuwF5tkzVJEZ1rNEHIhS3UybYjEwqhPKoJQmZdTRiYIQSGoCIKLV/0RpT8CwSbt+25G/TK77u7D5/f93meOx7dhVIDmlS9RyTJMCRDkhQLoMcA3E4hEokWIwhCJ6ESaOF5K4V4xHo7KWeUxgQu89FYhKQQa5K8gnWBgEoHipA5ibQ6uziiW2YbJNBhhYrNu4W7UZm3ukl3jtBXFBMfGzbxLLLKHaas1D2M6w2dsUETAQBeyRDLCvMYoHNA63UIujtassKSxsh9MNHnbabXsezbsMYYLYEaJOWyC0NaY9lLKwtcyR1lh7SGJJTASH7xKKwx8oufSqPkeyOyxvDnF2Wl3PjG6X/YpYLh/IlcXC5AQ5gMd31UR/nzJ++VDT71cD3e5Srj2M+5G1ccdo610dqOd8dfH8kzTNNRHH0GnToqKc7eYSzs7fSNpeZBFaChfKrlt89zP+nzsKNPqozB5iDjaErQHs6TIDQdyfjMxIsvz/2ItdtvjQE2AtMTvRnK8iDR42aTdIjFRvAkfoUGgPpDO5sca8frNWRCcbOyc9sf6HcYU3psJPZtylmhScKVNogYzP49DJWO/XrKlUZpPS6fHLf5lB+mbucarQFiK22mFVD7zUajAB4ltvaYfWVwqWiooG/b/N9R6YPHJQBXxV+7RnVVmc31dl/xCVChbfO0rbKPGoM4t2ZOQTGuHcPBD/yloC41971umwJ3aN3jf7nVC2UBXI6BVc/U3rOpcar2bK9xqwKMu5np1fqAJcjUF4hXXB+edLOwdrDaJgKAcRxQ/zZUwMDZWm/AzhTjsASn9lnQVbpPNwob5fzc5QBfAMhix+GqbgAAFnB0F80/tQPqXjjKwvUAAAAASUVORK5CYII=',
      'searchUrl': 'http://bukvi.bg/index.php?search=%search_string_orig%',
      'matchRegex': /намерени резултата: 0/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Feliratok (HU)',
      'searchUrl': 'https://www.feliratok.info/index.php?search=%search_string_orig%+%year%&nyelv=Magyar&tab=film',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /download.png/,
      'positiveMatch': true,
      'inSecondSearchBar': true},
  {   'name': 'Feliratok (HU)',
      'searchUrl': 'https://www.feliratok.info/index.php?search=%search_string_orig%&nyelv=Magyar&tab=sorozat',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /download.png/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'GreekSubs (GR)',
      'icon': 'https://greeksubs.net/uploads/greeksubfav32.png',
      'searchUrl': 'https://greeksubs.net/search/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Δεν βρέθηκαν υπότιτλοι/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'HosszuPuska (HU)',
      'icon': 'data:image/gif;base64,R0lGODlhEAAQAPECAAAAADg4OP///8zMzCH5BAkKAAMAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAACK5yPOcDtDwyTcVWIX9hg+895HQiOgUmGarqiqemSMCvW9Jll1G5ROaYIHgoAIfkECQoAAwAsAAAAABAAEAAAAimcjznA7c9MXEBWCjMLPIAOht0nlp5ZkiiorlzrwqscaraFU5YNKf5RAAAh+QQJCgADACwAAAAAEAAQAAACJ5yPOcDt3wyTgFKIQdhb8w924SiSoWd+aFqyrbue2WwtlX3NjsIfBQAh+QQJCgADACwAAAAAEAAQAAACKJyPOcDtD1aUhtUIcwu8gw6GnkhyXymeKKiupsvCY6lp1G1Rdab0RwEAIfkECQoAAwAsAAAAABAAEAAAAiicjznA7Q8Mk3FViF/YPIAOhl9IeiU5nl2qbmz7qrGbYdRtUbWt9EYBACH5BAkKAAMALAAAAAAQABAAAAIqnI85wO3PTFxAVgozC7xz4IUiKJYBaYZo2q3s+XouO5+aZuWUdUPKfygAACH5BAkKAAMALAAAAAAQABAAAAIonI85wO3fDJOAUohB2JzrDoJfSI6keJZpaK5Bu8LZXC31ZF90pPRGAQAh+QQJCgADACwAAAAAEAAQAAACKZyPOcDtD1aUhtUIcwu8e+CFIiiWAWmGaNqt7Pl+catqGYVblH0rvlEAACH5BAkKAAMALAAAAAAQABAAAAIonI85wO0PDJNxVYhf2LwH4IUdKIpk6Z0op66fO8LsmGHUbVG1rfRGAQAh+QQJCgADACwAAAAAEAAQAAACLJyPOcDtz0xcQFYKcwu8+wB04feNIFmKqGeaa7uqnIvC8TlrmsVTlg5RCA8FACH5BAkKAAMALAAAAAAQABAAAAItnI85wO3fDJOAUohB0KH7z23f2IUhWXonaqKg6sJpLM4xl+XVsk/8pYsohoYCACH5BAkKAAMALAAAAAAQABAAAAIsnI85wO0PVpSG1QhzCwHwD3KeGJZjV4bnmaJk+7rwCsds6mkaxVuUnlEIDwUAOw==',
      'searchUrl': 'https://hosszupuskasub.com/filmek.php?cim=%search_string_orig%&nyelvtipus=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Ilyen bejegyz/,
      'inSecondSearchBar': true},
  {   'name': 'HosszuPuska (HU)',
      'icon': 'data:image/gif;base64,R0lGODlhEAAQAPECAAAAADg4OP///8zMzCH5BAkKAAMAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAACK5yPOcDtDwyTcVWIX9hg+895HQiOgUmGarqiqemSMCvW9Jll1G5ROaYIHgoAIfkECQoAAwAsAAAAABAAEAAAAimcjznA7c9MXEBWCjMLPIAOht0nlp5ZkiiorlzrwqscaraFU5YNKf5RAAAh+QQJCgADACwAAAAAEAAQAAACJ5yPOcDt3wyTgFKIQdhb8w924SiSoWd+aFqyrbue2WwtlX3NjsIfBQAh+QQJCgADACwAAAAAEAAQAAACKJyPOcDtD1aUhtUIcwu8gw6GnkhyXymeKKiupsvCY6lp1G1Rdab0RwEAIfkECQoAAwAsAAAAABAAEAAAAiicjznA7Q8Mk3FViF/YPIAOhl9IeiU5nl2qbmz7qrGbYdRtUbWt9EYBACH5BAkKAAMALAAAAAAQABAAAAIqnI85wO3PTFxAVgozC7xz4IUiKJYBaYZo2q3s+XouO5+aZuWUdUPKfygAACH5BAkKAAMALAAAAAAQABAAAAIonI85wO3fDJOAUohB2JzrDoJfSI6keJZpaK5Bu8LZXC31ZF90pPRGAQAh+QQJCgADACwAAAAAEAAQAAACKZyPOcDtD1aUhtUIcwu8e+CFIiiWAWmGaNqt7Pl+catqGYVblH0rvlEAACH5BAkKAAMALAAAAAAQABAAAAIonI85wO0PDJNxVYhf2LwH4IUdKIpk6Z0op66fO8LsmGHUbVG1rfRGAQAh+QQJCgADACwAAAAAEAAQAAACLJyPOcDtz0xcQFYKcwu8+wB04feNIFmKqGeaa7uqnIvC8TlrmsVTlg5RCA8FACH5BAkKAAMALAAAAAAQABAAAAItnI85wO3fDJOAUohB0KH7z23f2IUhWXonaqKg6sJpLM4xl+XVsk/8pYsohoYCACH5BAkKAAMALAAAAAAQABAAAAIsnI85wO0PVpSG1QhzCwHwD3KeGJZjV4bnmaJk+7rwCsds6mkaxVuUnlEIDwUAOw==',
      'searchUrl': 'https://hosszupuskasub.com/sorozatok.php?cim=%search_string_orig%&nyelvtipus=1',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Ilyen bejegyz/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'LegendasTV (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYBAMAAACDuy0HAAAALVBMVEUAAAD/vhH/tBr/kTj/oir/rCH/683/yV7/+O3/3Yv/qmP/y0L/xp3/5a7/0o/WkB1QAAAAAXRSTlMAQObYZgAAAyhJREFUSMft1s9LFGEYwPGniHHFVnqHchHxsEObRNBlFomlQ7izBhFRy07dYowKixQVI9YohggNzNCLGhIEZsiySHpQoaPQYUnYjQqDiCDK6q/oeX/M7Kwt77uCUAe/eFjhM6/zOvO+78Ju/yIXKnokxSMOBNo/L8WhiBv4JeeCtK7msl2bB3kaWQbRzYQLirrItLj9ZDuo0ggpAtaYsRxQVtLbXLxmye4EdWEjdtkN9esxB2ronW29nCD6EailsG11EHHn6t5T2wq11fgaK8LONnzdr+fXU9F0pXncXTC9LJqNGViUYC1uBR40886tQjWsE/xZDtr6g6YZzzra51mBUxxj1BLiBHDpEBo7mnVgrJCswITXGnx3dMRpvL8sQKh3KICjNNTjPh4lxDRTiCMb/OLNObRpNrIo4uN+xPFUumUS/Ho2OdYxple96RGG77mVq/HLAGLi1eKI6VG84FR5QlOLxBuZNInpYT+hejfuEq8in56YbfW0T4scN7PpyTH2pIPpPrxSfJCk4fO9wF6RMMOvFBhL4StSr8Zg8k4LfKAWnOA4KsezHJ+EOvZ/b6oFn4UGnWByvMYXxTloIDrWqsBIEbORdeOoFH+LW7ROOjK+Xcel+Kol8F6D1rZz+CGzqYsCx6R4H1/D5+EBpbatwEgpvoIUc2W4DgHD1/gHZzu4KMONjKT74AP7kPmqwrgz9MF3Si1LijW6PQlsYc+lGCXHKFU4xPE4DCoxxmzUx6eUmO4XL5g1T0jxAFIP4zpol2LciHCbdhAjVeEJnR8WSbFy5ZgQ5A6YteASH9nDCcXXGxrAUmYbeISQw0kV3sOw2J91y5Rj78QKE9bKpAQ3+AdWyTuQst1S7IgTyCvyzK1me+fKR/Iol/TcNYz7H7fSsdvJePnYCfUTjxvYsawToKEZI0NxxF+95ZH5LnLph3c7eLDF8EnQ6XmVgiPbbFUubIi/qccsih0fh1Gyg7eMLevMugPaDNFtilu3Pk+0QYwm/wa0KTuJeDw4DTzSaR62GMYS+W7tt2lW7rIjhPYXZn59uLC6ZeUIvHKHNZTL5fJvvWC3/7Y/8/Mr4gxNgEIAAAAASUVORK5CYII=',
      'searchUrl': 'http://legendas.tv/busca/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /data-filme=/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Moviesubtitles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACFlBMVEUAAAABAQECAgIDAwMEBAQFBQUGBgYICAgJCQkKCgoLCwsNDQ0ODg4UFBQYGBgcHBweHh4fHx8gICAhISEjIyMkJCQnJycpKSkqKiowMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlJSUpKSkpMTExMTE1NTU1OTk5PT09RUVFSUlJUVFRVVVVWVlZZWVlaWlpcXFxeXl5gYGBiYmJjY2NkZGRpaWlqampra2tsbGxubm5zc3N0dHR1dXV2dnZ4eHh8fHx9fX2AgICBgYGCgoKDg4OFhYWGhoaIiIiLi4uNjY2Pj4+Tk5OUlJSVlZWWlpaYmJicnJydnZ2goKCkpKSlpaWmpqanp6eoqKipqamqqqqurq6vr6+wsLCzs7O0tLS2tra4uLi5ubm7u7u9vb2+vr7AwMDBwcHCwsLDw8PExMTFxcXGxsbJycnKysrLy8vMzMzNzc3Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dnb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7v4od+AAAAAXRSTlMAQObYZgAAAldJREFUGBm9wfk/k3EcAPDPrFNRrmLZ9/P5bmOWUpRKkZgKFTrQIYm0pFwhOUpakxKl3RN79sz2WIz+w7Y5kld+rPcb/oGYpP07YCtxlw1GQZqztFccgL9Iqnf/XA5bMn901cfDZnrb8lKEseSoMqXj2zn40w3RcK1mIBgMjh9BJI3G5CuDjcq+6NIY8qZg8GoqISKrCUqF8JtytiidMUTt1EIuxxAqXVywJsO655MpSobEsHXxAmEI3VoI/HgMa9TSiI4QkZgh0MYIkbSmwPy8n8Oq25JwEgkJ1R8kqTEDsWAwIIXchVU9fqlTg8hUD+fHL404ht7PCV2NHYJ/WAYRe2w+n3+4qrhqSPKNl4/6fP43eYhYaPbEQUSi6A3x+f1zAw1ur6d1zJLFUcmpPEAQkewVRa+7v93kq8u1iRO6uiY6pEKm0jp1ABADkOD2eHvylFxVKziFd7OfZqoZ8lTOcQIBgAPsGheM6YwYUovYTc8EoRkRibFMZxwA8H0ALWIFhlGR1/bU6vE48jGEml/JAGCvAuCKeB7D2HFx1vzo+r2xqcrDGRd7hWoIUwMkmvVpGEIlnr4shqjr87js7u9OgjBFNkBNFzEk0nRbcogj4tnpsAZYceoEjx98ks2p4MWMQckZItJrl8tlOggronPSqeCr/a3R5Zy+TwolIeJLp9OSD2t2HiOu/2wPcXRylYohZkzap/SwQWxmTn633Waz2UuJMW3WA8fQadgstnLEZrVO1Z5RF7eNVSfAOllUlFy+LSxacbPXODbaf4d2y2Ar8u1y+L9+AZl9xrRD45UJAAAAAElFTkSuQmCC',
      'searchUrl': 'http://www.moviesubtitles.org/search.php?q=%search_string_orig%',
      'matchRegex': /No results found/,
      'inSecondSearchBar': true},
  {   'name': 'Napisy24 (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURf///y9usmxpaf///3rL57kAAAABdFJOUwBA5thmAAAAM0lEQVQ4y2NgGLqAaRUKWECMwNJQJBA2KkAlgfr/EECCAFXcEQ4y8itJAlT3PumpcBgBAHh/F92ZowfMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://napisy24.pl/szukaj?page=1&lang=1&search=%search_string_orig%&typ=1#',
      'matchRegex': /Znalezione Napisy \(0\)/,
      'inSecondSearchBar': true},
  {   'name': 'Napisy24 (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURf///y9usmxpaf///3rL57kAAAABdFJOUwBA5thmAAAAM0lEQVQ4y2NgGLqAaRUKWECMwNJQJBA2KkAlgfr/EECCAFXcEQ4y8itJAlT3PumpcBgBAHh/F92ZowfMAAAAAElFTkSuQmCC',
      'searchUrl': 'https://napisy24.pl/szukaj?page=1&lang=1&search=%search_string_orig%&typ=2#',
      'matchRegex': /Znalezione Napisy \(0\)/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Nekur (LV)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADNSURBVHjaYvz///////8ZRixgYhjhYDQARnoAMK5erawiK3fnNoQrKDSyvP/+HQuEISYGoXn5RlYAsLJAs8DvPyMzA/z+M1oIjgbAaACMBsCIBiy/TT7nfRYbwQGgnpI6LT1gBLcEIb3Bt28hXKER1hJ89260EBwNgJFeC5x3qztd7TiCC8Flp8USBBhGbiHIwvqA9wiv3GgZMBoAowEwGgCjATCSA4CVZWR6n5UF6vFXryD0SBscff+OcXRucLQMGA2AEQ0AAAAA//8DAFOnNjmXgsiYAAAAAElFTkSuQmCC',
      'searchUrl': 'http://subtitri.nekur.net/modules/Subtitles.php',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Nekas netika atrasts/,
      'mPOST': 'ajax=1&sSearch=%tt%',
      'inSecondSearchBar': true},
  {   'name': 'OpenSubtitles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (BR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/pb/search/sublanguageid-pob/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (DE)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ger/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (EN)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-eng/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (ES)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-spa/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-fre/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (GR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ell/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (IT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-ita/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (PL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-pol/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (PT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-por/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (RO)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-rum/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (RU)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-rus/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAACVBMVEUAAAD///8TExOI954UAAAAk0lEQVQoz62SQQ7DMAgEcSXfe/F/+gQf4D99egeCjJtTpITIG4agtYMsX1nxkr/os56r8EB0+6ANJcxmqEWJV6oMFTq6ynAgm64N8J6j7EksW0CaEL7Z1h0GBjvoBt20oHGoBXyyAmgDTliAe26avk3PoAnxCwVh8nYD1oTJmklsbZTQY1QapVlDZDz34/492K/YD8ElL5+2GoYbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.opensubtitles.org/en/search/sublanguageid-tur/imdbid-%nott%',
      'loggedOutRegex': /Guru Meditation/,
      'matchRegex': /div itemscope/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles.com (EN)',
      'icon': 'https://www.opensubtitles.com/assets/ui/favicons/favicon-64x64-e8e9f196985f98cfaa08b1e0159a1030cfc9b014c464fab6693cd0573382a702.png',
      'searchUrl': 'https://www.opensubtitles.com/en/en/search-all/q-%tt%/hearing_impaired-hearing_impaired-1/machine_translated-machine_translated-0/trusted_sources-trusted_sources-0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'OpenSubtitles.com (GR)',
      'icon': 'https://www.opensubtitles.com/assets/ui/favicons/favicon-64x64-e8e9f196985f98cfaa08b1e0159a1030cfc9b014c464fab6693cd0573382a702.png',
      'searchUrl': 'https://www.opensubtitles.com/en/el/search-all/q-%tt%/hearing_impaired-hearing_impaired-1/machine_translated-machine_translated-0/trusted_sources-trusted_sources-0',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Pipocas (BR)',
      'searchUrl': 'https://pipocas.tv/legendas?t=imdb&s=%nott%&l=brasileiro',
      'loggedOutRegex': /Cloudflare|Ray ID|Lembrar-me/,
      'matchRegex': /Não existem legendas/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Pipocas (PT)',
      'searchUrl': 'https://pipocas.tv/legendas?t=imdb&s=%nott%&l=portugues',
      'loggedOutRegex': /Cloudflare|Ray ID|Lembrar-me/,
      'matchRegex': /Não existem legendas/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'PlanetDP (TR)',
      'searchUrl': 'https://planetdp.org/movie/search/?title=%tt%',
      'matchRegex': /<span>Altyazılar/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Podnapisi',
      'searchUrl': 'https://www.podnapisi.net/en/subtitles/search/advanced?keywords=%search_string_orig%&year=%year%',
      'matchRegex': /table-responsive/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Podnapisi (EN)',
      'searchUrl': 'https://www.podnapisi.net/en/subtitles/search/advanced?keywords=%search_string_orig%&year=%year%&language=en',
      'matchRegex': /table-responsive/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'RegieLive (RO)',
      'searchUrl': 'https://subtitrari.regielive.ro/cauta.html?s=%search_string_orig%',
      'matchRegex': /Nu au fost gasite subtitrari/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subs4free (GR|EN)',
      'icon': 'https://www.subs4free.club/images/icons/favicon-32x32.png',
      'searchUrl': 'https://www.subs4free.club/search_report.php?search=%search_string%&searchType=1',
      'matchRegex': /any subtitles using your criteria|There is no subtitle/,
      'inSecondSearchBar': true},
  {   'name': 'Subs4free (GR|EN)',
      'icon': 'https://www.subs4free.club/images/icons/favicon-32x32.png',
      'searchUrl': 'https://www.subs4free.club/search_report.php?search=%search_string%&searchType=2',
      'matchRegex': /any subtitles using your criteria|There is no subtitle/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'SubDivX (ES)',
      'searchUrl': 'https://www.subdivx.com/index.php?buscar2=%search_string_orig%+%year%&accion=5&subtitulos=1',
      'matchRegex': /titulo_menu/,
      'positiveMatch': true,
      'inSecondSearchBar': true},
  {   'name': 'SubDivX (ES)',
      'searchUrl': 'https://www.subdivx.com/index.php?buscar2=%search_string%&accion=5&subtitulos=1',
      'matchRegex': /titulo_menu/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'Subs.com.ru (RU)',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://subs.com.ru/index.php?e=search&sq=%search_string_orig%',
      'matchRegex': /Ничего не найдено/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subs.ro',
      'icon': 'https://cdn.subs.ro/fav.ico',
      'searchUrl': 'https://subs.ro/subtitrari/imdbid/%nott%',
      'matchRegex': /Pagina solicitată/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subscene',
      'searchUrl': 'https://subscene.com/subtitles/searchbytitle?query=%search_string%',
      'loggedOutRegex': /Please do not hammer|HTTP Error 404/,
      'matchRegex': />Exact</,
      'positiveMatch': true,
      'rateLimit': 7500,
      'inSecondSearchBar': true},
  {   'name': 'Subscene',
      'searchUrl': 'https://subscene.com/subtitles/searchbytitle?query=%search_string%',
      'loggedOutRegex': /Please do not hammer|HTTP Error 404/,
      'matchRegex': />TV-Series</,
      'positiveMatch': true,
      'rateLimit': 7500,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'SubsLand (BG)',
      'searchUrl': 'https://subsland.com/index.php?s=%search_string_orig%&w=name&category=1',
      'matchRegex': /Няма намерени субтитри|Не са открити/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'SubsUnacs (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAeUExURQAAAA4ODisrKzk5OWRkZIGBgaysrLq6utfX1+Xl5Q6iRfAAAACnSURBVCjPjZHRDYJAEEQHaIASSLAAolSAPUgFaixAE0uwAeC6ZR13LuEIkf27l5vZ2V2EpLAHTK8b6/5xMJ5PrPbtYGjAKh4bYHpWfGcHl4xdSZD3bkpFVrunQH7xrgG0cD0BLVxPIIXSQp5Ki+svBRQOx/IfWEk0PH9aHmg9/Gl54grZ3jawCeJIAnEkAjOm53eJBNaaXQUWW4X02ipCcimE5JarY89anrB+IWyh0wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://subsunacs.net/search.php?m=%search_string_orig%&y=%year%&t=Submit',
      'matchRegex': /transpDiv/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subtitles.hr',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAB3RJTUUH5AgHEyg0ji/HegAAAEhQTFRFDjlULFJpSmt/aYSUeJCfh5yqlqm1w87V8fP1/wAA/xAQ/yAg/0BA/1BQ/2Bg/4CA/5CQ/6Cg/7Cw/8DA/9DQ/+Dg//Dw////dQyPXQAAAKdJREFUOMvlk90OgyAMhR1YO5yOOYTz/m86foRIMvB62bnqab5AW8ow/Isk8xSDiVlGm0TiAAjgGDBA0WbJKwC3K2BsANGKewqU0oBRQQbQJ/uKQQfYTsC+BO0VsDpgy0CRru3zAthVHzCPAlgdZDPgjL8fblaq2cX8xpFttTnbVGN7DmtV5LdBeYfFA+23QM43gGAhekA5QhCl1ZEUtqzYYSSi3/g1Hx39HyjcMM70AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.subtitles.hr/subtitles-search/?movie=%search_string_orig%',
      'matchRegex': /matched subtitles found/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Subtitry (RU)',
      'searchUrl': 'https://subtitry.ru/subtitles/?film=%nott%',
      'matchRegex': />0</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Titlovi (BiH|HR|MK|SLO|SRB)',
      'searchUrl': 'https://titlovi.com/titlovi/?prijevod=%tt%',
      'loggedOutRegex': /Ray ID|security check to access|Još samo jedan/,
      'matchRegex': /<b>0<\/b> rezultata/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Titrari (RO)',
      'searchUrl': 'https://www.titrari.ro/index.php?page=cautaredevansata&z5=%nott%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />1-0\/0</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TransHeaven (BG)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAVKSURBVBgZtcHLb1xnGcDh3/tdzmVmbI89nthNTGoTW2qIUFQUVagSGzaV2LKCFRtWsEBi0Q1iw55V/4IqFUsElSpVrAA1SLSoXBqJujEpSWzH13HGnjlzbt/bMJKLjR3qSPA8oqr8PzngF2//5t0H2Wii842bL/3gZof/kR/f6e1ltQPu3PntX4vuVrexlma/3huSH0qVqwgIT4nwL8JTqqD8NyoYEf8kZycrhlVwwNrq3x+luuNXNnaE0pE5yhIRVAmBUKMKioCxGIcYnimAxXhCoIYQHJD4KLKKMzRaTEb4DmWNsVQlRU6RUZdQY4UoJWrhYlRBOYciFgs1Pj9wde4A7yJvHNWIwS6mJKukGIkRxSoeMYhHLFozGpINBFBUOI8KTqwzRhylJTjAuNjalFHG41XZUj88csVQNFTJTDH5gk7OEbcQR1FIf9M9WXdZT41TEc6hotaKrdLpbGIGHzsgH2VabLjt3UhKVw5cfmjzoSlC0bnK4q0iTjVtYx3Dvtu+11j7fbL7SXCJWodwmggaqlDnIZ1b7L70im3POeDoYGe0fd8c9NOQxSFTraQY+ZGYF7arVqdc+KraCBtRl2b/YfTpB+mDD+qoFXyEgPA5ETEi+SjLn5Tt5ZWvLM5OW3HA/OxMHEduvvHLd97l2Ndi2Xx8TxZvSV0hSOR87K7Nde5+9D5f5NXFublL8Tevta8szTrgzdtvccbMi/NrW0VlEzUWLayNW63GzVtf5wLufLrFMcMzTHSmc6UWixiojNU4iRaWvsxzMjxLUEBQFBAFRYsy5zk5zhHAoMppSgj8WwVB0aABtSJOMCKc4ThNoQ7qDEERTlFVY4RjDhCwAsKzGc6olaeUExRBrI2KrOA5Oc4QTlMlqFHjfHPQ32PsOz9/665fDFduTHSnVmz25qsNjv3ojdsfTt7YSRexDhHHRSjWSpr46smIsd+994eNdkG9GKXtSy3LCe+8/atPritXp4mbWGf4Iipg1DgaCdYoY83hPtURWs2nvDwbcUJ/9U++9wjJbKQ+FsfFGEsUkcYRY2nIqYaEKoFYOGlYYUJwJjRscF4NF6HKU0LaaDAWNRoIhHqYcb+Xc4JferluX66tD6JK5Xge3kWMWR8hipb9jA+V771XXO5E++tbf37/j9Wtb4fONXWJEjQUjosQUKSmrpSxoAoBymHNapZsQFJS1HP9pdcG3WGo1UohmhOC4+ICWitjCohgbZVX/cNef3iI1lhL2sAngDAWcJyhfE5AQED5T4pxRA3KEY8/5uFHDA6oRi6NTfdq0V0JM5fVWBXrOE3AGQMIAS0JJaFCDQIGY4UxUUXBJE50qtxpZ2tp1qO3kR3tH8xe6994LUzO2KhprXOcYUUAS02dSTmgKgkGQSzOC2NWoawJkvroxan4+pXpedMa/vPoH3dXV3dNcbST1yNvmt47x2kaQlWWPo4rcXU6Ic02jUmiVA2lMKwCY7lJSNu4OJ2Kl6Mv3X79WxxbXL4eQqhdXNoIEzlOq8rCxwmQSVq1F5hd0s4VWo3gKAy9QcXYkZ9ieoG0ZWfoNFY4oWebw+YlbXSPJLHBGU7zcQL87Kc/OXItmV4gmZIyk95G2Nw63NxbX3/43e//EKiLUZLvx5t/6fY2FlqWE2pMNNhv7N2f2l9r799znGdzZzf3qbctHR3qxirFgMgMJid2Dh7oQR9IDtdnQ13tf3zZ3eh2XmF5mWMTOjKbf2tGYWqyGUXecZ5hNqqNNcZpXYbBAcMeXiotssHBoCgAWwwS3S6H+81eOx0dcoLX2g/2mk8eTdrJpIo+AyHxf+9tZ3PxAAAAAElFTkSuQmCC',
      'searchUrl': 'http://subs.sab.bz/index.php?act=search&movie=%search_string_orig%&yr=%year%',
      'matchRegex': /<tr class="subs-row">/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TürkçeAltyazı (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAMFBMVEUAAAD////zeQHQaAGyWgL+jRv29fTj5eb+27e0pZb8qlewf0/7xY7Du7TS0M786tcNwhDKAAAAAXRSTlMAQObYZgAAA8VJREFUSMd9lFvoDFEcx3/7QhKZB+NOnTERSs0MhfAwU5Iko5G8sMXZkFu0k1yKB21SFNHmUtQi/ctlRdoUijZJbpFE5J5seaBViu85vzMYJp992Mv8zud8f78zs/Q/+j+nP9j2pF6vH3m8lH7R+2B6lzJ6PXletS27svVJ/R0ZnlkWPhs+vLQMlU+sKX1ab1kpGfq8tX4zCJpnH+q4br0lpnTQyiPTahlv9otMsN62CrBXDyDmcblcWPAy6+eRlEXXO5mg1z1ZZEjXkWHYGGmbRb9Vo25cpIzzEziD/WMP+PFVSrm21hBTfg3BE1/1mm4tY/etRiycvcQ8FeKYBbrtdq1dg6O2p3b7dCLEdNPDeSEmqA123759uyZtGyY2jOaUfYQQ7mfs0NPTc4q7qbW1QZwlxWvHEeKMZQ1tNBK8KW7dutUQwnH0HqXzHmrHfbZuJIl7jZvtOX06cfHrNHWs/XwIRNKzK4njGDuB4UkDEWBw7qopCeAuXpxAgKyKlS6+4FfPO4eCV442NJRgLBfsEPgMA4c473nC1QYX49Acd5PF708rxRRMocmGBAaxnU8hjpNFsvIGhtFLqT8EnMF1x5U5o+u6i6SsHhfCv0t9fWOAwGRcrlZUKulWx/H30jBPZ0ggcBdywXUXMzhRTdP7qo2NDhtiYMYENSaXbtu2yfcv0UedgQ08psEQQHEyfddpejPooa8nGYNxer01EF8d4Yy/0+ns86fQPs4AhInwxdVD9KYe7TT96bSPDVAIE+E6BMgPmkEwDQUwsIIj2LEW+CD0scV+nxXIrRPYwyHA+iAIouCXQSsmmqNUArU8CsFsGIwg1idl26uUAMuZKfTAz9rgkyqvVIIw5OvhXHodGIXLArmGBYa5tCE0bYxlAQ5R7Z8xi5YFpo0lbKhUNvl6fevIp0+HLlyiISEUAiAjkDLdogVXqmUq2dvuUZ/IKK7pKchKujlQ1yVpBlDv0Ci4CVlN94XIto4yel2IuI+dWQTVwlv6zX5l8GAwTVz3Q2T/g42RVjg3kQCG1U0IXtAfrFAzh2J+uQyBvI4pzM3/pUesmCAhkN/UGA/kCkoXIk5xDU/F9xgHOQct5EOwYny7u2uBA8OcAZRjRBSxY5Kr74RwHuXBJCIeJ1ARLtJfbM4UwIdhL/1FPxRoCYCAp5Dr42HEDk3IBTmGZAq8YECXxQpDbgx85pyCwUkUFJQ+RsBIUPAvvffzcv26SgWsufA7xUUqYgUqDDOpkO7+LMZkKmZk69fDUkAJRyy79Vardflw7n75CZBalsNovAasAAAAAElFTkSuQmCC',
      'searchUrl': 'https://turkcealtyazi.org/%tt%',
      'matchRegex': /Henüz bu filme ait altyazı bulunmuyor/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TVsubtitles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACFlBMVEUAAAABAQECAgIDAwMEBAQFBQUGBgYICAgJCQkKCgoLCwsNDQ0ODg4UFBQYGBgcHBweHh4fHx8gICAhISEjIyMkJCQnJycpKSkqKiowMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlJSUpKSkpMTExMTE1NTU1OTk5PT09RUVFSUlJUVFRVVVVWVlZZWVlaWlpcXFxeXl5gYGBiYmJjY2NkZGRpaWlqampra2tsbGxubm5zc3N0dHR1dXV2dnZ4eHh8fHx9fX2AgICBgYGCgoKDg4OFhYWGhoaIiIiLi4uNjY2Pj4+Tk5OUlJSVlZWWlpaYmJicnJydnZ2goKCkpKSlpaWmpqanp6eoqKipqamqqqqurq6vr6+wsLCzs7O0tLS2tra4uLi5ubm7u7u9vb2+vr7AwMDBwcHCwsLDw8PExMTFxcXGxsbJycnKysrLy8vMzMzNzc3Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dnb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7v4od+AAAAAXRSTlMAQObYZgAAAldJREFUGBm9wfk/k3EcAPDPrFNRrmLZ9/P5bmOWUpRKkZgKFTrQIYm0pFwhOUpakxKl3RN79sz2WIz+w7Y5kld+rPcb/oGYpP07YCtxlw1GQZqztFccgL9Iqnf/XA5bMn901cfDZnrb8lKEseSoMqXj2zn40w3RcK1mIBgMjh9BJI3G5CuDjcq+6NIY8qZg8GoqISKrCUqF8JtytiidMUTt1EIuxxAqXVywJsO655MpSobEsHXxAmEI3VoI/HgMa9TSiI4QkZgh0MYIkbSmwPy8n8Oq25JwEgkJ1R8kqTEDsWAwIIXchVU9fqlTg8hUD+fHL404ht7PCV2NHYJ/WAYRe2w+n3+4qrhqSPKNl4/6fP43eYhYaPbEQUSi6A3x+f1zAw1ur6d1zJLFUcmpPEAQkewVRa+7v93kq8u1iRO6uiY6pEKm0jp1ABADkOD2eHvylFxVKziFd7OfZqoZ8lTOcQIBgAPsGheM6YwYUovYTc8EoRkRibFMZxwA8H0ALWIFhlGR1/bU6vE48jGEml/JAGCvAuCKeB7D2HFx1vzo+r2xqcrDGRd7hWoIUwMkmvVpGEIlnr4shqjr87js7u9OgjBFNkBNFzEk0nRbcogj4tnpsAZYceoEjx98ks2p4MWMQckZItJrl8tlOggronPSqeCr/a3R5Zy+TwolIeJLp9OSD2t2HiOu/2wPcXRylYohZkzap/SwQWxmTn633Waz2UuJMW3WA8fQadgstnLEZrVO1Z5RF7eNVSfAOllUlFy+LSxacbPXODbaf4d2y2Ar8u1y+L9+AZl9xrRD45UJAAAAAElFTkSuQmCC',
      'searchUrl': 'http://www.tvsubtitles.net/search.php?q=%search_string_orig%',
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'WizdomSubs (IL)',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://json.wizdom.xyz/%tt%.json',
      'goToUrl': 'https://wizdom.xyz/movie/%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /release_group/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Yavka (BG)',
      'searchUrl': 'https://yavka.net/subtitles.php?l=BG&i=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Повече информация/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Zimuku (CN)',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://zmk.pw/search?q=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /搜索不到相关字幕/,
      'inSecondSearchBar': true,
      'both': true}
];

var pre_databases = [
  {   'name': 'PREcBurns',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADsSURBVHja3NhbFoMwCEVR5j9p+ltr4B7Io0v1L6nslGSZoLntve0IIK/kefWY+hUcZg8o5qIKNNLNgfaMCiBeWKNrjPzGs2GDDJ4xKVALHiLhHIjgcR8D0vAqdSMiAch0auIKlEYPCA7c2ynxDYDxk1bXAF05JJ1XpTR+Z4v5DvgLAfVyyHoXAF4D1ox/GtD/dwog6ZwA2GwtALwH2JLwzwfsr4BtAhovC3KEgTtaG4i2TJtIUbwn2wogP1UAgvUiwMoAOdnhs2kb2H66PlAfVCocr1c40zWa8yrT91aZR+rkA5U+Qdi3ip33ZwAb5/CcnuFpKAAAAABJRU5ErkJggg==',
      'searchUrl': 'http://pre.c-burns.co.uk/pre.php?searchtext=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />: 0</,
      'inSecondSearchBar': true},
  {   'name': 'PREcBurns',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADsSURBVHja3NhbFoMwCEVR5j9p+ltr4B7Io0v1L6nslGSZoLntve0IIK/kefWY+hUcZg8o5qIKNNLNgfaMCiBeWKNrjPzGs2GDDJ4xKVALHiLhHIjgcR8D0vAqdSMiAch0auIKlEYPCA7c2ynxDYDxk1bXAF05JJ1XpTR+Z4v5DvgLAfVyyHoXAF4D1ox/GtD/dwog6ZwA2GwtALwH2JLwzwfsr4BtAhovC3KEgTtaG4i2TJtIUbwn2wogP1UAgvUiwMoAOdnhs2kb2H66PlAfVCocr1c40zWa8yrT91aZR+rkA5U+Qdi3ip33ZwAb5/CcnuFpKAAAAABJRU5ErkJggg==',
      'searchUrl': 'http://pre.c-burns.co.uk/pre.php?searchtext=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': />: 0</,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string%+%year%&cats=movies',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true},
  {   'name': 'PreDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string%&cats=tv',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB-Orig',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string_orig%+%year%&cats=movies',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true},
  {   'name': 'PreDB-Orig',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAACVBMVEUAAAAAGDC6urrej6pEAAAAAXRSTlMAQObYZgAAACBJREFUCNdjQAOhQMCQtTRrKUMmEMAIKBdBgJVAFKMCAKceEPrGnb57AAAAAElFTkSuQmCC',
      'loggedOutRegex': /Ray ID|security check to access|seconds to search again/,
      'searchUrl': 'https://predb.me/?search=%search_string_orig%&cats=tv',
      'matchRegex': /Nothing found.../,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'PreDB.de',
      'icon': 'https://predb.de/favicon-32x32.png',
      'searchUrl': 'https://predb.de/search.php?t=pre&s=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID|experiencing some problems/,
      'matchRegex': /itemListElement/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'PreDB.org',
      'icon': 'https://predb.org/img/favicon-32x32.png',
      'searchUrl': 'https://predb.org/search/%search_string_orig%/all',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No results found/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'PreDB.pw',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAFklEQVQI12NQUmfo6MdHdq1nUP8PJwENVw0h7PKMxQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://predb.pw/search.php?search=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /<tbody><\/tbody>/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'preFYP',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAACXBIWXMAABLIAAASyAH7Hi3CAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURQAAAAAAAAAAANHR0dBVfo0AAAACdFJOU/3+jYSN0wAAAE9JREFUGNNj+LsKDOoZfkEY6xleQRirGV79B4PVDK8hjNcMr8GK1gMZQCGgEuyMf6twMvDo+rOKMOMvlAF2IskMuONh3oF7EO5leCDAggUAEyPMhg3uaZgAAAAASUVORK5CYII=',
      'searchUrl': 'https://pre.fyp.nl/search.html',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Sorry, no results/,
      'mPOST': 'input-Search=%search_string%&submit-Search=',
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'PREovh',
      'searchUrl': 'https://predb.ovh/api/v1/?q=%search_string%+%year%',
      'goToUrl': 'https://predb.ovh/?q=%search_string%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total": 0/,
      'inSecondSearchBar': true},
  {   'name': 'PREovh',
      'searchUrl': 'https://predb.ovh/api/v1/?q=%search_string%',
      'goToUrl': 'https://predb.ovh/?q=%search_string%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /total": 0/,
      'inSecondSearchBar': true,
      'TV': true},
  {   'name': 'srrDB',
      'searchUrl': 'https://www.srrdb.com/browse/imdb:%nott%/order:date-desc/1',
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'xREL',
      'searchUrl': 'https://www.xrel.to/search.html?xrel_search_query=%tt%&lang=en_US',
      'matchRegex': /not return any results/,
      'inSecondSearchBar': true,
      'both': true}
];

var other_sites = [
  {   'name': 'Blu-ray',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADeUExURVO29Vq59Vu59Vy59V269WC79W6/9W+/9XDA9XDB9nDC93HC93PC9nXE93bG9njF93vF9n3I94DH9oHG9oLH9oTI9oXJ9orK9orN+IvK94zM94zO+I3L943O+JDN95HP+JHQ+JPP95XQ+JbQ95jU+ZnR+JzR+JzS95zT+J3S+J3T+J3U+J7S+J/T+J/U+KDT+KPV+KTX+anX+K7Z+q/a+bHc+bbf+rrf+cTk+sXk+8jk+svl+svm+8zn+9vt/Nvu/Nzu/Nzv/N3v/ODv/OHw/Ojz/Onz/er0/er1/f///532i+4AAAC+SURBVDjLtdNFDsNADEDRFFxmZmZmZs79L9TUo1ZZOGOpamdlK0/K6EdRgDnK74CqO9cRA7RT54DapMFpf3wLEvTsNkdmKkCBAi5chzhXKODH0ceBEs55CrhfU/yBc4gCk1qnvxB3LJulHbYRMElBCsAqL3lgU58DFPACWJJzIZYGHbRXd/UfgwKw5sAYl7RhatjgkjVKDQ1xhwQBquForD0Tzy8eqsPt/glRZEIN5CV3OVnqVSvo/Mev9zV4Aq22bvwYC8iHAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.blu-ray.com/search/?quicksearch=1&quicksearch_country=all&quicksearch_keyword=%tt%&section=theatrical',
      'matchRegex': /return any results/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Bluray-Disc (DE)',
      'icon': 'https://bluray-disc.de/img/icons/60x60.png',
      'searchUrl': 'https://bluray-disc.de/suche',
      'mPOST': 'SearchString=%tt%&section_movie=on&section_imports=on&section_erotic=on&imports_all=on',
      'matchRegex': />Treffer einblenden</,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'DVDs ReleaseDates',
      'icon': 'https://dvdsreleasedates-nortongroupllc.netdna-ssl.com/images/touch-icon-iphone.png',
      'searchUrl': 'https://www.dvdsreleasedates.com/search/?searchStr=%search_string_orig%',
      'matchRegex': /no results found/,
      'inSecondSearchBar': true},
  {   'name': 'Fist of B-List',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAACRElEQVQoz42SvU/bUBTFz/uIyWCRxGkSjJWSFqkMURgqUCu1U4qExEC7MLLyDzBUdOvHWjpkQYgl3VgZWok5U4UEEkNKqQIqcqDEFeHFke1n49chDBSWXt3hDudcnZ/uBQAAUQSl8D/F36wgkPz8HJp27b0rWl5eppT2+/39/X0yWEyIBsi70vn5+ZmZGSGEUsp1Xdu26e8zXFzwdx/weoUD/KZ6dHR0enp6c3MzCIJsNut5npSSDIIpFQEghN+MtLi4uLe3NzU1Va1WLy8vGWOO4/ClJfgBDn9yjUe3AAzDmJubW1hY2Nracl23UqmYpnnN8PARjg55oTDieUIIMTDU6/WJiYnj42Pf923bzmQytm3zk19wvbExs/igmNQ0zjnvdDqWZZVKpXK53Gg0hBC6rhuGEYZhr9fj98cAaLr+I5/XU6lUEASe53W73Z2dHSFEqVRqNpuWZRFCcrmcUorVarXh4XB391sikej1emEY+r4vpZRShmGYz+cBtNttSqnjOGtra9QwjNnZWQBSSs55EARKKUopY6zVajHGdF0fHx8HsLGxAYBKKRuNxoDS9wNKKSEkjhHHJI7jg4ODoaHk6enZ+vr6PxdNI43rzgH5VMoERoDi5OTj278EJD+tDlVfyNYRvZfF9jZ9/ix0/iSePvHfvs98rjvN72jbaaX8L1/V6seAAsl+X0VXMEcolLKKKpslnQ5jPCoUrl6+wlU8nEgq01SUKgAknU53uwRgQARQgAAU4IMhqRFfEkABJwAHor/pPAicVESz8wAAAABJRU5ErkJggg==',
      'searchUrl': 'http://www.fistofblist.com/search?q=%search_string%+%year%',
      'matchRegex': /No posts matching/,
      'inSecondSearchBar': true},
  {   'name': 'MRI',
      'searchUrl': 'https://www.moviereviewindex.com/index.php',
      'mPOST': 'search=%search_string%&page=searchresults&Submit=search',
      'matchRegex': /No films found with given search string/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Scripts On Screen',
      'searchUrl': 'https://scripts-onscreen.com/?s=%tt%',
      'matchRegex': /nothing matched/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Simply Scripts',
      'searchUrl': 'https://www.simplyscripts.com/cgi-bin/search.pl?search=%search_string_orig%&method=exact',
      'matchRegex': /There are 0 results/,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'TorrentHistory',
      'icon': 'https://torrenthistory.org/static/favicon.ico',
      'searchUrl': 'https://torrenthistory.org/search?order=desc&sort_by=created&q=%search_string_orig%+created>=%year%&target=torrents',
      'loggedOutRegex': /Cloudflare|Ray ID|Cannot parse/,
      'matchRegex': />Created</,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-ID',
      'icon': 'https://www.voidtools.com/favicon.ico',
      'searchUrl': 'http://localhost:8080/?search=%tt%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-Title',
      'icon': 'https://www.voidtools.com/favicon.ico',
      'searchUrl': 'http://localhost:8080/?search=%search_string%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-ID-ES',
      'icon': 'https://www.voidtools.com/favicon.ico',
      'searchUrl': 'http://localhost:8080/?search=%tt%',
      'goToUrl': 'es:%tt%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Voidtools-Title-ES',
      'icon': 'https://www.voidtools.com/favicon.ico',
      'searchUrl': 'http://localhost:8080/?search=%search_string%',
      'goToUrl': 'es:%search_string%',
      'loggedOutRegex': /invalid request/,
      'matchRegex': />0 results</,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'Wikidata',
      'icon': 'https://www.wikidata.org/static/favicon/wikidata.ico',
      'searchUrl': 'https://tools.wmflabs.org/wikidata-todo/resolver.php?prop=P345&value=%tt%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /wiki\/Q/,
      'positiveMatch': true,
      'inSecondSearchBar': true,
      'both': true},
  {   'name': 'YesAsia',
      'icon': 'https://d3rwyinxzcqr6y.cloudfront.net/Assets/res/imgs/yesasia.ico',
      'searchUrl': 'https://www.yesasia.com/us/search/0-0-0-bpt.48_q.%search_string%+%year%-en/list.html#&q=%search_string%+%year%&sea=1',
      'matchRegex': /were unable to find|has returned zero/,
      'inSecondSearchBar': true}
];

var streaming_sites = [
  {   'name': '2Embed',
      'icon': 'https://www.2embed.ru/images/favicon.png',
      'searchUrl': 'https://www.2embed.ru/embed/imdb/movie?id=%tt%',
      'matchRegex': /We can't find/,
      'inThirdSearchBar': true},
  {   'name': '2Embed',
      'icon': 'https://www.2embed.ru/images/favicon.png',
      'searchUrl': 'https://www.2embed.ru/embed/imdb/tv?id=%seriesid%&s=%seasonid%&e=%episodeid%',
      'matchRegex': /We can't find/,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'Cuevana2 (ES)',
      'icon': 'https://cuevana2.io/wp-content/themes/moviescript/images/favicon.ico',
      'searchUrl': 'https://cuevana2.io/titulo/%search_string_orig%/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Lá página que usted sea/,
      'spaceEncode': '-',
      'ignore404': true,
      'inThirdSearchBar': true},
  {   'name': 'Cuevana2 (ES)',
      'icon': 'https://cuevana2.io/wp-content/themes/moviescript/images/favicon.ico',
      'searchUrl': 'https://cuevana2.io/serie/%search_string_orig%/',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /Lá página que usted sea/,
      'spaceEncode': '-',
      'ignore404': true,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'Filmux (LT)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD1xRizibOpAAAAGklEQVQI12OAAP4PUMTHAEL8DyAIyIYjCAAAsssGH84/BRYAAAAASUVORK5CYII=',
      'searchUrl': 'https://filmux.to/index.php?do=search&subaction=search&story=%search_string_orig%+%year%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /nedavė jokių rezultatų/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'GDrivePlayer',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAROSURBVFjDzZdbTBRnGIZJ0/te9aKJFhWwi6Fgu6wHPLR40bTaRm1CUamFptWmrYZUW4IcTCTW0gZDLyBBjFi4wGoitnsAi2Bokap00yJW2YXCnoGZ7bK7YGFhd3n7/bOMYfYgyyHqxZOZ7E7+95nv/+bLTAyAmCdJzFMjwG1dK/IMsY/4hTATjki4Nq51nCpL4rZfS3S8q4mInegl6ojNRAwjksBzhIpANJAASAAkAFo0GvxEcSSBZwm1JGRLCvgNMvCp8eDlcXSU4k6Ow4lTsd70q8uwXSnlLeG4HDvV8eFEcsMJZErCNyUJ4YM5e2EuOw3jmXMwVUmxVp6DsuWsv/JuNc50SanuqkLp7SLkNL+OHcoXsVsjmy3AhxNofhielgRumwKGC1egt09DN4aIDIwAZjtgCkL87e6gE991luBt1QoKfijhDCdgDgiwsifCcEkN3QSgJ1f98MLp5wIiJ2/lC5WYEXCEE+CZAL/+JdgOZENHl+g56WK93MIkBugmbposyGhMxi716jkEqLlMldVCeYMX6hmaholK/o99fgK9RB/J57Zl4h1hKx4loEiAsfZH6Eali7DgKo0VBTU6dFu8sLrmVxEDVeFY+0HqhdgoBH64ECJgocDTl414flcD0o+0oabZhn57QCzabchvP7A4ge+vmLBirwrxWRqs2qfGeyW3odE6hf8G/n2MAmtympBIrKTzxOwmHK7oxs3ecdjc1B/8YxIQkWU3IjZTCcWnLSi92I/7Np9wbXB/zCnwIC2eJzD+yguw1dShJ0oBkdX7NYLIG3ntqGsdxv1Bn0SCCXzx28dIp1nwploWKlCWXTFEeEv3lHuvNnT7B1zzExBZlvEzlmcoUaE0wzirQftIoLHzkK++ZY334nU5FyKQVOLjCawq8qG8dRrWkfkJJLxPFdijwo6CDtS3cdAN+yUV0NH5+J0vgQ4FTaWtoRVYf9zFE0jOd6Li2iQsUQrIPmgUgjd83kqPqYGu9cPiDO0BJuDsOorJG6nw/L5l8QKs+1fOnB+tugdtvwdWd6DU4Z6CJRWIy1ILcyDrmz/Q3OWOag4siYAwCXc2BDr9+pAQaoxyEs5LoLIlVICN3OomG47X9uJehGd9SQReJoGTP03A6gyzCGF2Rp52j2Yao9oPMdmxLqIAxwReLXBhd/kodEOhQQt9H+ihdQwmPQVvniG8QB8TYKQcc+JblQeDrLnsi3sj6hFuYgquv3Kp/AoWHlHgvCigKKZKFDpxomECWqMfRtZsjlBMRB8J9lBldLwUFsz2fcCsp/AjmLohF8MZo+EE5IRflFhXHGjIbV+78dHZBzhc+x8OBXHw/BR+bav3jf2dh5E7xUEUwv3nJxT2mth4s+kOJ8DIEwVEUosCW5JCMsJxFglfeaC6ROP1lky4w2AmO1jJNwWHjxEbIwkwPiNMhGMukgs9Ds3lQg6dcgfb1yjQEmnEU/hx+qT4Hxx8JuUJoU43AAAAAElFTkSuQmCC',
      'searchUrl': 'https://databasegdriveplayer.xyz/player.php?imdb=%tt%',
      'matchRegex': /<title></,
      'inThirdSearchBar': true},
  {   'name': 'GDrivePlayer',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAROSURBVFjDzZdbTBRnGIZJ0/te9aKJFhWwi6Fgu6wHPLR40bTaRm1CUamFptWmrYZUW4IcTCTW0gZDLyBBjFi4wGoitnsAi2Bokap00yJW2YXCnoGZ7bK7YGFhd3n7/bOMYfYgyyHqxZOZ7E7+95nv/+bLTAyAmCdJzFMjwG1dK/IMsY/4hTATjki4Nq51nCpL4rZfS3S8q4mInegl6ojNRAwjksBzhIpANJAASAAkAFo0GvxEcSSBZwm1JGRLCvgNMvCp8eDlcXSU4k6Ow4lTsd70q8uwXSnlLeG4HDvV8eFEcsMJZErCNyUJ4YM5e2EuOw3jmXMwVUmxVp6DsuWsv/JuNc50SanuqkLp7SLkNL+OHcoXsVsjmy3AhxNofhielgRumwKGC1egt09DN4aIDIwAZjtgCkL87e6gE991luBt1QoKfijhDCdgDgiwsifCcEkN3QSgJ1f98MLp5wIiJ2/lC5WYEXCEE+CZAL/+JdgOZENHl+g56WK93MIkBugmbposyGhMxi716jkEqLlMldVCeYMX6hmaholK/o99fgK9RB/J57Zl4h1hKx4loEiAsfZH6Eali7DgKo0VBTU6dFu8sLrmVxEDVeFY+0HqhdgoBH64ECJgocDTl414flcD0o+0oabZhn57QCzabchvP7A4ge+vmLBirwrxWRqs2qfGeyW3odE6hf8G/n2MAmtympBIrKTzxOwmHK7oxs3ecdjc1B/8YxIQkWU3IjZTCcWnLSi92I/7Np9wbXB/zCnwIC2eJzD+yguw1dShJ0oBkdX7NYLIG3ntqGsdxv1Bn0SCCXzx28dIp1nwploWKlCWXTFEeEv3lHuvNnT7B1zzExBZlvEzlmcoUaE0wzirQftIoLHzkK++ZY334nU5FyKQVOLjCawq8qG8dRrWkfkJJLxPFdijwo6CDtS3cdAN+yUV0NH5+J0vgQ4FTaWtoRVYf9zFE0jOd6Li2iQsUQrIPmgUgjd83kqPqYGu9cPiDO0BJuDsOorJG6nw/L5l8QKs+1fOnB+tugdtvwdWd6DU4Z6CJRWIy1ILcyDrmz/Q3OWOag4siYAwCXc2BDr9+pAQaoxyEs5LoLIlVICN3OomG47X9uJehGd9SQReJoGTP03A6gyzCGF2Rp52j2Yao9oPMdmxLqIAxwReLXBhd/kodEOhQQt9H+ihdQwmPQVvniG8QB8TYKQcc+JblQeDrLnsi3sj6hFuYgquv3Kp/AoWHlHgvCigKKZKFDpxomECWqMfRtZsjlBMRB8J9lBldLwUFsz2fcCsp/AjmLohF8MZo+EE5IRflFhXHGjIbV+78dHZBzhc+x8OBXHw/BR+bav3jf2dh5E7xUEUwv3nJxT2mth4s+kOJ8DIEwVEUosCW5JCMsJxFglfeaC6ROP1lky4w2AmO1jJNwWHjxEbIwkwPiNMhGMukgs9Ds3lQg6dcgfb1yjQEmnEU/hx+qT4Hxx8JuUJoU43AAAAAElFTkSuQmCC',
      'searchUrl': 'https://databasegdriveplayer.xyz/player.php?type=series&imdb=%seriesid%&season=%seasonid%&episode=%episodeid%',
      'matchRegex': /<title></,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'HDSS (FR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEUAAAD/aQD/aQD/aQD/aQD/aQD/aQD/aAD/aQD/aQD/aAD/aQD/aQD/aQD/aQD/agD/aQD/aQD/aAD/aQD/aAD/aAD/aQD/aAD/aAD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aAD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aAD/aQD/aQD/aQD/aQD/aQD/aQD/aQD/aQApCZHfAAAANXRSTlMAKubX7aLNcxfiiPUfeQydRhkRmn1T3nAPXtCwpYI9CHZrWCS6k03UxY9BBWY0776nNqwx+e6nRBgAAAGnSURBVDjLfdNrm3JAGMBxxhRDGI3zKbRCOaSe7//Znnto7a5c/V+N+l2D6U4QjJG2uSe/5Xl5QX0BwNXRE3WrpHWOAJS82btoKzdSLQ7sGGl4I62vdwcAh3LocbRbZ94lQoYzB6zWUKOvyuRkqFAtchCHmnRVeNYSXIjJHYULEIWTYSk3YWpeK7KJqgns9gBOIrUz5fW9mMJayUy0/wFGWsTsMANjdGC9AsfCluByyr/IsFZkRn6DQEXSAnRYr4FjL8C45oQD8w10xpRCPVKtAWxL3CCdonKJNkBGkB5MtQ0c0Rrw+2r111wo9fs3APfVhoj3iOoQ77ce0qXnKfEiLw+5/Zpj4EofAdzuI/BnAL/Fxx2s5IGr30Bf7yCz8Ou8DMx0/s95YubdbgfxQv1v0MH5AzjNoEiQNPpHSxSPBgCz1tyA6gxL3Q8gLR27Z5deX1OdeCz6A5DqBYVTtLkgWGrU/0MEYy18npaBgU9cHhEEeF8X4x5jMoi3GdC8wt9x3zbm43Hflbo1A5hwlcX3OIb/F+MDVtgqY2WT5MoLnNNMLaGmUdX/qJ40ksjVldMAAAAASUVORK5CYII=',
      'searchUrl': 'https://hdss.nu/?s=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /we have nothing to/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'LookMovie.ws',
      'icon': 'https://www.lookmovie.ws/templates/lookmovie/images/apple-icon-60x60.png',
      'searchUrl': 'https://www.lookmovie.ws/?do=search&subaction=search&story=%tt%',
      'matchRegex': /yielded no results/,
      'inThirdSearchBar': true},
  {   'name': 'M4uFree',
      'searchUrl': 'https://ww2.m4ufree.com/search/%search_string% %year%.html',
      'loggedOutRegex': /Too Many Requests/,
      'matchRegex': /title-mv/,
      'spaceEncode': ' ',
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'rateLimit': 8000,
      'both': true},
  {   'name': 'Movietown (DE)',
      'searchUrl': 'https://movietown.org/secure/search/%search_string_orig%?type=&limit=8',
      'goToUrl': 'https://movietown.org/search?query=%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /results":\[\]/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'OK (RU)',
      'searchUrl': 'https://ok.ru/video/search?st.cmd=video&st.psft=search&st.m=SEARCH&st.ft=search&cmd=VideoContentBlock&st.v.srt=All&st.v.sfd=LONG&st.v.sfhd=off&st.v.sq=%search_string_orig%&gwt.requested=xxx',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /No search results found/,
      'inThirdSearchBar': true,
      'both': true},
  {   'name': 'Tubi',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4BAMAAADLSivhAAAAGFBMVEUmJi34Mzf1KWT8PCH4TyGqMS3XPyexKFH+E2IbAAAB4klEQVRYw+3Vv1PCMBQH8IqHrMZenWkWV70H7h7IHPXAtRzQmWPx3zdfLj/oC8SDTX3foYQ0nzyaQCgkEolEIpFIJPn053OTuX2llDp9fzqdzro9N6o6A0+7PUsMvxD37fDb34fPf+bLV3uWdP4JXM0Ruw+4uizadhNw6EZzbjoYQf03pcj3r61zq73AFBu+zykuOQ55gc5jVZ7A9n7zI1bH8Yu9c38pVkhzEUZhlM7gIsG4IvSkXGmOw7tTeDTZmP4SuOK4p+7qbQ5P6BXvoe8TrLXO45H7KdqYDH6vj+FxOAVUk8O6TjE1cXHyWNcp9kcIWB5r379ymJ790XcOHh3BFa7l40lsPCaaWTzhuCRiOGkDg62JY+J4eASXYJiis2AMDyx44BOhDpHd4A8iMnGrHhNswyfC0BL4Oo7FMdMwXABvHY5tWwaDbsg/NBQZjneuHKJ9+wrYONKg5wOtguOeE4MtJnJtpdxxBoJZFngdJ3igXYaYaJ+7GrgKBaldEUEluNA+BxP5IwsPHWNS3PPCfW4Epf2XJWRcBJyWHqK0x/j6s9Im4rT0A9Y+4PALiYVTHIU+aCuUiRvstjvgVG9Z2+vV3hqGYwY7/eXbn6Hd+bt1adu2KSQSiUQikUj+fb4B4n/CsDtPLf0AAAAASUVORK5CYII=',
      'searchUrl': 'https://tubitv.com/oz/search/"%search_string%" %year%',
      'goToUrl': 'https://tubitv.com/search/"%search_string%" %year%',
      'loggedOutRegex': /in your area/,
      'matchRegex': /title/,
      'positiveMatch': true,
      'spaceEncode': ' ',
      'both': true,
      'inThirdSearchBar': true},
  {   'name': 'VidSource',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVQ4ja2TvUoEMRSFv3sns7nbC4KtheAKNhZbW4mlpY0P4FYWgiLoFgpa2/kYvpwussciM+P+2TiekHCS+3cuSUwSfWDjoF+GcSBJSPoT917V2xZyDPj8mC0ZcgzWnBd9Wru9P08E8DWb8fL0xt30EgyaZQFCgsf7V24fJt1pAjArM4Y1XhlgG8INSUTUuIPmICC5gzUZIhLu/psAhJGjxt1RM5K7YWZFQdS0+02QROSEuyEaBWaOexEduWRvW1quDtJPEQFzWWmhDcqRqKoSuaqi3L2RGwVzwCXs+uTo/17i1fFux29O9zo+PTvYyM/3t+Sj0U6XbJCrjg+H6w9pFSlV2MXhdq8WrO93/gaUmJF4CshtQwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://v2.vidsrc.me/embed/%tt%/',
      'matchRegex': /Not Found!/,
      'ignore404': true,
      'inThirdSearchBar': true},
  {   'name': 'VidSource',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABD0lEQVQ4ja2TvUoEMRSFv3sns7nbC4KtheAKNhZbW4mlpY0P4FYWgiLoFgpa2/kYvpwussciM+P+2TiekHCS+3cuSUwSfWDjoF+GcSBJSPoT917V2xZyDPj8mC0ZcgzWnBd9Wru9P08E8DWb8fL0xt30EgyaZQFCgsf7V24fJt1pAjArM4Y1XhlgG8INSUTUuIPmICC5gzUZIhLu/psAhJGjxt1RM5K7YWZFQdS0+02QROSEuyEaBWaOexEduWRvW1quDtJPEQFzWWmhDcqRqKoSuaqi3L2RGwVzwCXs+uTo/17i1fFux29O9zo+PTvYyM/3t+Sj0U6XbJCrjg+H6w9pFSlV2MXhdq8WrO93/gaUmJF4CshtQwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://v2.vidsrc.me/embed/%seriesid%/%seasonid%-%episodeid%',
      'matchRegex': /Not Found!/,
      'ignore404': true,
      'inThirdSearchBar': true,
      'TV': true}
];

var sites = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites, custom_sites, subs_sites, pre_databases, other_sites, streaming_sites);

var icon_sites_main = [
  {   'name': '_OMDb (for Dev tests)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADsSURBVHja3NhbFoMwCEVR5j9p+ltr4B7Io0v1L6nslGSZoLntve0IIK/kefWY+hUcZg8o5qIKNNLNgfaMCiBeWKNrjPzGs2GDDJ4xKVALHiLhHIjgcR8D0vAqdSMiAch0auIKlEYPCA7c2ynxDYDxk1bXAF05JJ1XpTR+Z4v5DvgLAfVyyHoXAF4D1ox/GtD/dwog6ZwA2GwtALwH2JLwzwfsr4BtAhovC3KEgTtaG4i2TJtIUbwn2wogP1UAgvUiwMoAOdnhs2kb2H66PlAfVCocr1c40zWa8yrT91aZR+rkA5U+Qdi3ip33ZwAb5/CcnuFpKAAAAABJRU5ErkJggg==',
      'searchUrl': 'http://www.omdbapi.com/?i=%tt%&apikey=8c967f70&plot=short&tomatoes=true',
      'showByDefault': false},
  {   'name': '45worlds',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEVmle38/f+RsvJ2oO/q8f2txvXH2PjZ5fv8btQOAAAAq0lEQVQoz8WQywqDMBBFB0M/IOJjq5OWbqWKrlsC3RZq9lUhXYv/D52Mxj4+oJ5Nck9yBxLYFAVQEoXPwQUCTdy8aEIIJLGKjkSMiIVvnEPXetO0P8JWXFE+76aKh0b9IqrMCa1llHEWFkgIVR7ltDRI8MnIC+x7bBMEIo9nL4mUhyXgMMa0iWHBN3g3l/PwW4ju8SFOBdSpf1w9RkNzfeph/R9EJQ72Dn/jBdATGCXKRXJwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.45worlds.com/45worlds/45w_search.php?sq="%search_string%"',
      'showByDefault': false},
  {   'name': 'ADP',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUBAEH3+f8EBSdJSm0jJEaoqcpzdJSNjrH8KmoVAAAArklEQVQoz33QTQvCMAwG4DIRr2bd1mvJhmfn8N7OgVcr7AdMoXc/2O+3CkpSx95bHsIbiJhK1UYAis8rAA5WwYnBkN0yOidwsTmFJVz3YGgFhJwJONk0jpQs4K7RAoGx0lh6gz9B/enJn5r01BCypSDbCtYMEOsiAqtiIBvJGwZJocAS0vis9775wrHvx50LKOlfnDzUwCDFDYes4xv/Hco/jCAJHVpwEGIeOjGZF55LGoVIzTuWAAAAAElFTkSuQmCC',
      'searchUrl': 'https://adp.acb.org/findavideo.html?title=%search_string%',
      'showByDefault': false},
  {   'name': 'AFI Catalog (US)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAAG7wcI7Pj2DhIdAOfQDAAAAkElEQVQY02NAAAUYQwfG4IcxOBugDOYEKIMpAiZ3DcaYClNkClOkClG0atXSsFWrVjAw6IaCQAwDAzeYAZRl2gpiFDBAhRIYoEIHQPr0gYwGsGVTQ8OhJsIYvKHhEOs4Q0MfQJwWGloBcVpoZRxE0VWv6xBFogfWQhSZNnBDFKkzMOwBM9gYGDiAFJhkYsAAAPQ7I8T9ZIABAAAAAElFTkSuQmCC',
      'searchUrl': 'https://catalog.afi.com/Search?searchField=MovieName&searchText=%search_string%',
      'showByDefault': false},
  {   'name': 'AllMovie',
      'icon': 'https://cdn-gce.allmovie.com/images/ios/AppIcon57x57.png',
      'searchUrl': 'https://www.allmovie.com/search/movies/%search_string%',
      'showByDefault': false},
  {   'name': 'AlloCiné (FR)',
      'icon': 'https://assets.allocine.fr/favicon/allocine.ico',
      'searchUrl': 'https://www.allocine.fr/rechercher/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Amazon',
      'searchUrl': 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dmovies-tv&field-keywords=%search_string%',
      'showByDefault': false},
  {   'name': 'Amazon Prime (DE)',
      'icon': 'https://www.amazon.com/favicon.ico',
      'searchUrl': 'https://www.amazon.de/s?k=%search_string_orig%&i=instant-video',
      'showByDefault': false},
  {   'name': 'Arrow Films',
      'icon': 'https://www.arrowfilms.com/apple-touch-icon.png',
      'searchUrl': 'https://www.arrowfilms.com/elysium.search?search=%search_string%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'BAMPFA - CineFiles',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAMFBMVEUXbr4neMJWyPHpqRVNw5T1aBXbT6/yJTRaZpg5n9osjrWidlJFr+NGt5qMR3XENFJdayYeAAACPUlEQVRYw+3UPWjbQBQA4KcWN/IPsRwItG6H5jYXDy5ZApkMNxUKyXBg8NKpZMx2nmx1CBYEiuvNm226RHQoFEHBi/HWrUOmgsGbOwVvHtN3kk6qfPLgLYF7SA/pcR/o9J4EpR0DLNgpDA000EADDTTYAsqu6/rsemJjvhl8wfpg0ANzMvmJFdPBAIC7OzsAXyml7wXw2DnmPqkCZAmZwtNjDBuefcRAx/kiBvS3DxoqeJsG5nNaBwAWAgJQiMCpBPucryQAg77zQTMAlgQ1wwcfABIAN3CLwIzAEA5CAD+OJShyfrkN9LaAVhLkGWMSjFXQ5WsFeMzywRSTCjrr9ia4ZjaCKnmNSQHL9nIDZEJQmR3B7FcK6HZCQK2c6MMhe8m+B8AgKlj/B+a3otNXLB+AfsUggxiIxl0gaO3x5CxdNU12JsC4kpPAiDvNEdgRoEMAD8G5AAfVLLmRo3ESApNfFiMwKtO6AAZrBKBAXkhQQ3DhfEKwKvJF4i15DQjAE/IqAqdWuOl9vsIjAXC11xSgQL5Vsz44cSyIwGID4AZCkCX9ENQAJMDnMTdBw5FgVkkBfz/zVhKIECBHyBsF7HGMBMj7wALRNnKkgK4A7SRoTjxmI4A0sOT39xLQUhk/0QwuzgRgRqYq6Igz7nQdDnExDpMAfRXg7CXBEGfPikEvFXR5BP4AAkBwJsCYDBXAWwLYAuRcd4SV5w6A4dhQHmEFDNcCE+9AFC3MeI2Fh/q710ADDTTQ4PGB0o7xD+J9O9xnt0dGAAAAAElFTkSuQmCC',
      'searchUrl': 'https://cinefiles.bampfa.berkeley.edu/?q="%search_string%"',
      'showByDefault': false},
  {   'name': 'BBFC',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAADFBMVEXm5uYCAgJLS0uioqLkzWL0AAABfUlEQVRIx+3SMU7DMBQGYBOLoUPaU+QIGdqBInGBSPR30hCJSEzAUokdReIMPkIlpDLkAAyReobsLAwwcQAG3vNLSENVcYDmDXmJPzvx84saYohjijdJpST93I7ryCVvJY/vcQu+wEhA4xdCgUDA76AWsAJhB1YAAgFe+6AbqGXBPtjsEESHIN+BybeDyZdSM6QbpeaVg0uLkuDBmkIFQKzGSB0sgSuCWyBRIV9qIGcARaX5ahgiDzSzhdwBioBuRzzFgVkjI0jXyOe4rgLcWVmx0nZBUI6R8HZrU01LBloWGHfc9YKhLd4m1Axo0GNoCNpS3QQPW96hz+ChaCDnup943gkqhkp1HSIoaCHDiVG7cMGgGfz/Yf9V/Y+ft4AWom676G034ZEtF3jaL9BQyXIkQUygkAlw/2ysXU/kEKmHhYP0A4kGp4ghwL3N/jRqxSCNaqAQqBi4tTHDkrODRKqyzc9wYznjESgFpjBywGcbl2YvqonPUg0xxBHFD/G1szdpCKQqAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.bbfc.co.uk/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'BCDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAU0ElEQVRo3tWbeXRd1X3vP3uf4c6aZ8kaLE/YBoMDxjiGDHYzQEjS0Ay8wHsJJPTRpKFpSSDNIkMDLYFQU5q0TUgJSSGUGEjh4YDjBcEBG3CAmBo7HmVZkmVrtGTp6k7n7N/7415JV9KVZGe1We+dte468z77t3/f3/y7irPYurq+VaG0aga01pZtaa1FQAGgEEApQMgeA4KgUKBARFAq+7QIE8e5k+mHE8+LgBFjjPHTkr3V3lD31/1nOm81183jXbe6lh27LOiE34Wy1mplLdOWU4GgUWjGCcwbRXLDqknqc9fV+DIw9WmVt58cYfrUBAwiBsA3Xr+I+U/wX0tmEr8y/uhLdXW3p8+ayAPH7n53dSzwddty12ptuTO+LwqUTKcu7/48X5qgS2XZRw4GwuS4U9YkbzEmnlGI8dO+Se9MpE9/tbr6qzvPiMjfHPxOuCpq31EeCfyFVhb/v2xGjEln4ncm02Pfqqu7LTkrkW8cujtYE3O/Xxxyr1FK6T/8VNV0uBS4RgFY57gqYpKZxA8S6dGbGupum4Cvnf+J2hhfLwo51yiFRkxhMRGV28vEtSx6ctfzMZYHq7k3KYBxKSAHMsu7OalX6KDj3mAp9zhw+wxOnjzxjXXRUNmLSll6uqooICAFzme7duZ8opAayl2Y7fkJUZ5cc4wYk8kMXFxa+Y3XJog83nWLGwlVbnNs97L5V33uyf93vnNWMuqnn/e83veXVn07bQNYVuidtrbWZg2cFJ6Nmh0xUogdzM1kYR4UqryPnw3ic9paab1eVHg98LwNEHQDG5TCJWuGZoP83B+Yb9KcJevmHHMWkMuUK65WwQ0TRBrhQvD5faD6//ImsBZAvXHgjqKWcr3XteyGWdXHNKjKmbhLswlhIYsgv78Qz4XkjPE7RsYSK+xYINVs6VCZ4E97OU+3yvh51hclz1fN3ixgPs4E9mcBX0nbmIQmk/LQjsaJGZRl5hzGUlQIqtEO2SaMGLfQ5ORsREomFPjsEJhha/M5lDvJ45h4iqG9aU78YpC+3acYGk0gnqCB0qYi6tZWUH1FEaFyhbaZCAQmPymu1ipqayUajP6DyaPMpdDGDZ4ifkhz8LudtL/RzcvJE+xjiPLmOsLREIeOtuHtSrLq9Souf2whTVc10PDRKKGIxrLUxOKKiLaU2Lal0BOrL2om0guZEDUHMguYCjV/kDH5vK859tAob/3oEL+Od9PTEuF9H/4QX770fKKuRjsgfobReJqHfv4sdz/+IhvvP8mGkytouC5MeXkI17HynC6lbUFAzKxzH4+YZJosTfPspnBDZCLgmowpZVq4JZODia/JjIKfNAzuSXLkB4fZEh3g/Td/indcvBwtKYKBIKFQFNvy8b0EEXeEv7rhg7xr3WpuvvW7FD25H2/ZMuQSj6qqKJals/GZoG2FYdx8zGYSJV9cZBrTZ5NVyXMSVAF0CphEgJPPjXJi2wC9x+IMDMU5bdIEUFzyR+/kindehChNuGwRFoL4SbSfQimDUhmMn+Ti81q4/roP8Pimp2l5rh6vGmJRh2g0kPuWxibHyXnjapF5vJRptsFYjHUL8YMew4eTIJqiFQ6lazSkLDoeifO7J/az61Q3bzKEvaAUq05jaSGT9Oj42U/oSg7w5zfdSMwJgZdGKRtRPko5oF2U8RA/w6XrVvCD+57AHE9ztC1B44IY4bAFKoslWxAEPwesaWxQzO9STbN9mWGb7l+kOPnLAfq7TnMsPsxRf5S4ZFgbqmXNta0M/HqQV9uO80pkhHd+6j189v2XUl4agHQCjYdWhvbjvdz/ky18/qZb+Zf7/5myWBDEArEZihvCjo2jLRQ24UCEsGODEfp6RxkaGqOuNoK2NCIGW8mkvzpDv8jUQH1WOgXwLbr+T5quB7t5q7eHHaYXFlWxeNUK1i1rJZVO8KPb76f4J5qfJ45Sf8V6/ummz1BkJUiMDmB5CifgYmsbZVKcu7CSO792PTd8cRMPP/wIf37jDaAyJDzDn3zsRtadu4yv3PYZLKeIzv5uqtJhTNqQSvgkkmmM76G1DQj2OFQniMq3U2qmHOXL5njCKTNis+f2ATpeOskWp49lH9/A3139x9SUB0gP95FOx4nEitm69QWe3n+Ci67/GH/22Y8zMtiO2EEq6pfiOgr8JHhjYCzwUsRE+Nz1H+GWOx7kxhs+i6NsguEw1fV1vHXkKF5GSCcH6Dp6jK7iDHsHe1g8WE8qmcbzPCxHARa2YKZw8kxiVMnjoElZ/O72Yfa9fIIdTYqbvn4nyxeWEh/sZrRPCEaKKIpGCNgON95wNV/+/Dd5T3EJfjpOrKSGSEk1iI/4CZSyyNoIG6M8lGQ4f3kTAeXT1d1N84Ia8DNcffWHiUYCuK6NQ4Y/vnwtra2V3HTtd1jZVkNvzxijo0ncgEZE0FksGhA/q2XH91OOzeS1KeeGoz9NcnxnD7vPiXLXA/eytKGYdHyU0soWqhpXUlyxgHC0AssN8/YLl3PO6qVsfvJJ7HARStko5aB0jjjlINpBdAClbcAiEnRYsKCa3r7+XICsWX3+am6/4z5+/OgzJIyLr4tpWlBDwLaRlEdn12kGT8XxfQ8QNCKI5CYuZmIveceIn9tPPR89qjjxSD/bVC9fvecOwjqJ0lBa10qwqAJtOzlIZ8dylObT//OD7D+wn8PHevHJqj2UBqXxxOLVNw9wpLMfz4f4WBKjFCXFESKRYtA2SiwqKspZunQhb1u9mkxiDC+T5OGfvcB5VgknSzwGTo0wlkhjTPa7WnITEPzJX46D48dT7uV+iE/fjjR9Y2Osvu5PqCwLg1JEy+qx7ACTpkkQEQzZL11w3lKWLGti67PbsAMxfOMDFkpZjGV8vvCnX+Gez99Dz6kUcS9IyvM5PZKitrYG0KA1tq2469t/Q0NTIzteOcC3v/yPDD30JutDtewJdBMKWQRchVJZZtgIOVjK7N54gYBVUAztNBwNpPno+zdivAyhaBm2GwaTydlVQWEQhJd37+OZR59FHT9F2Yhw+OU3Mf/bwXgGHAViEYvFqG1tpTMRp7SiDmW5jA0e5sCBNtJemqQXYt9b+3j91V207XoTa083TSMOb7MixEsr+GXRUcaCQyxoqKO02MFSktWuIibnu0rBhHBmJMDQQY05rfD6DemUT3SJJlQrxI/F0RWlLFzYgqSGsdxwjrDJzUfx/Qc289vvPcUVTiNBN8i6ZA0HRhO0d3WzZFFT1t1TGoxi4x9dxuKFDYSCNiIptuzcw5pEBXd94kZ6BvppjmtWOuW8ww5yKlpMx8IEv3Hb6fF7KS11WbWsjJXLSygutlHKjBOZlcnpebnMUIBjT1i0bx3kQE8/7d4oSQ1BzydkB1gVqaI8pbArIti2AxJEWRZKxrV1lpO/3XOArf/yBJ+KLmZPc5yjmTYushfSsM/i9edeYvmK5Sjxcp6M5obr/gc2GZSfZHhklM0PbOFqXY3TZ+NbdYzUKdrCIxy1uhjSp3FDhvLyAGuqK2hqjLJoYTGNDVECgewSi5isxzOhbHJgjLdF2f2NUXYc62C7d5JFl5zLxRetp6q8iN7Bfo539vLgi6/gnvJoTrSS8Q2uG84tj+RkPHu0deuvWEExeyuH+U16L/V1ERKVw4QPlbD/V6/jfU7h2jZKPFAax3HRno+xHX7678+yrjfGUI3Fi4HDeAGf0zJMOKwpKwnQWBmlvi5CXW2YqsoQ5WUBohEH19U5Mcl65HZWk/qIMiCajseC/O6HfWzOHKPhfRfw/Wu/TFWRgxIfy3FwJIO2DX/9hat4dMtOHnh4KyMjI1RWlCFeeiJsUZKFbUdnJ/XYDLtxWpujXLK2mroah/jeIMVtAxzYv59zVy7PalgUoPGVy+OP/YIDP3ied5Q08HhgLxSP0bggwgVVlVRWBLNElQcoLXGJhLOEaa3ytHnOkE9y0tcItG8Osuf+fh7jOJ+584tcuLIB5acpKq3FcSwwKZSkIJNE/ATXfnAdFSUxjnceo6K8NFuKy0EVyRK6dHEru351gI2midGGNEsXRampCtO2wqX2oMMb27az8tyVORtpSCZ8ntr8FG/d9xQbAnW8UN6FHx1lzQUVXLCqjKrKINGoQyho4TgaawZh+ck7QSZMiBj63why8P4hfma6+bO7vsLFKxoJOAEqapfhRIpQ2s5GAWKBtkFn/YgNl6yk+9jBnLlQk4jFoBCuvPLdtEdT9HScZuHuVhK7ijj+oxint4zxG7+fx596Es839A8O88SPH+fea2/l9KZnebuq4IX6E7S7nSxdEuPCC0o5Z0mMhrogpcUWoaDCtkxOuZgpDkqevdeKCQfd5/RejfIM7/ro5Vx83iKUgmhFfdafNUlE2Sjlo7QD4qG0jfgeQUezb/dOVq5ex4KGWpTW4AsiBiWGRY31/M0dN3Pn397Hrl19rNpdgm8Me4MjXPSJdXQ+so3vfPJzyL4OFmfCrNIOfRVhnogdZkCfYMWyYtZeVMbC5hChEDmiZubAC2f0BKXMeKhliL3NI/JjC//Z39Lx4Q001peDWNmIS2uMaJQoTo95DA0NUVUSxQ0WgTdEPDHG1265lU3fu4/i4jBa5aWMjLBh/WpWPbSJF196hf7BU1iS5rpLz6e6qoxXX36L+r29xALFHKtOst/tpEd6iMXgbUtKWb2qhGVLokSjeoLAs0lIS9YZyLppgfpeAu8rZ+kWn633/JTrN32JZGKIYKQUxEYpQbTLP/zTQxz6+Q42Xn85H73mKixCxOMJDh7ax5f+6kvcu+luwkFrcmVVVsNVFQe56vJLssrJZJ2Pk0NjqHQGR+CZykOcVCeoLHc5ty5MS1OEpYujNNSHiEUttDLzpAtnZgYlx3I9nv5wA0L4fT3YrUHqXzvOM09sxRiF76VAWVntJ5pPfOLDHLKS9JwaYOzUCZQ3yp23Xce2//gOidMnuPHKT/Lr514knkhjcpo763goxORwoxXPvbqPL11/N1f0ljNUZhh0+1i5PMp7N1ZyxXuruOztpSxuDVMU02g1NSgo/PNn3pesM2nd/Bcrm2yd+F+WNsp2PIbDhsAbITr2HaF248UURyNo2845C4bSkihFZVHe+95LcewkETeICDjKZ+B0HNneif3cfrY992vae05CJEAimWB4ZJQTfYPsfHkPP/rek3Q8upsNqSpOV/lsC+2mYYHFuovLuGBVETXVASIRjWUxYXsV427ipKNR6Hj8fJyjnkQetMEYxEdhiEY1NeeP0LExzKJfKLZuepBPb/oaFgqVc6KV8fjQB97NX/7lHQz29fOPf38LJSUVaNNDf/8wZTpEbXEZlUfipI++yY4HdzCsDT4GDVQS5u0EkIp6toeP0KaOUV/vcP55MZYsClFSrLEsc9YJeCkMWQM+dj4MbAvKyxUjl3fTf6iJ0hfb+OXmp/ngpz4GXgqRDEppAnaIlauW03msHUySVOIUz21/jSNP/44P2fX8sPxlonUurV4VFSNBGlMBjGdI6AyD4ST7wr0cSh2htNjmvMYQq1YWcc7SCFWVNpY2U9N8BZO9s5VvZ8qppXwzma1T2VpIwIXaWiF+VR/quyXs/95jHF2/hoWtzSAZEB/l+1x3zYcQk+ZkdxffvfeHmO3HuZIafrtgAF8PUt4QxsTiHBnxGRuzGEt4pDNpHEcRDltcVBZjQUOQ1pYwjQ1BioosbEv+a0uzklU8NiI5l24SIpGwouacYTqvjHDOIy4/ve0uvnj/PUTDQcTPgLIwVpCHH3qCw4+8yPnDYdxgFTuqOjlkHeGcRSHWrSmiptplbMwwNOwRH/MREQKuJhq1KC1xKCu1iUVtAgGNUpJzqM++SDalPSaPwnFJtY1og/gTnETA0lBRrhm7tIv+AwtZ/Hofj9z7z3z6li8wlkzz7JNbePmH/8HqPpd1bin7a4d51d2NHRpjeUuItRfGWL40REmxjREh4wm+l3X1tKWw7exPa6a6ZPMUxtRcpZSCi2MwooxtRBtBjBIzpaXFcaCmBhIfOY5qX8DAozu4H+HwC6/ScjzNu90SOuuSbHXeZNQeoK7WYcmiGMuXhlnYEqKkSGFZBgtw7Ly2tEkczd/QUfDyfN0Gk/cFbTzjGNvgJhHfQ/n29EfDIahpidP2kX5a/jVG6t9eo8EohiqDPF92jEOZg1RUWFzYEmb5sjAtTQEqKxxCQYXWplCV5A9azTYipn+sLG1r5RwWrH4k3TAdLUpBSbGi6qKTHE75DL0R4VC6h/2ZNorCwvlNQZYtDrG4NUhNtUM4NG7bzBRGzdbaMhsD5+u2KzzmzIYcI07/WCbSpgBOHnnHdpvhy6Z0XOTVCxNJQ1t7ijfeHKOjK00opGluDLCoJUBdrUNxkY1jqzmYNLNep+Zo+viv0K8KGPWqXmlasvWSbIuL8l9DzGWzjR4MQHOjQzgcYWgoQCCgqSi3KY5ZuK6adJzlzGc7oy0mL0F21lpolvEDVnrnRNuZUcXbtIx+XuG5BcdTWflsrLeor7XQCrRWaC3zaYkzjxh+34r1LE66iONlKN82QaS2Ys+LCexSklo/m5ehECwNllYTVmi+Jqa5e8XmENj5WkplfswbQq8YVfz8FCHpbf/AeuUd3a7wdH4HyCSR450fhY4LwWu+Zyc1rswCyTPtgJmpqGzj24svrWn++c5sGTa3VTU//ZJR5XdmK9C5fLf42RTjeNY85+dOlhUms+3Z2sm0ssL09ybqK2bi+clsYf49k/eOKRxmyWSaY7IKYBDEoCtuHydwRitomrpvWeI1OPRdk+0ImV7pUoWNuMyCvzO5LszQ5lPFTuYJ/fN4rpQxqvwBrOq/m7NzuePIx8O2OfFNmxM3K7zfs9dRFS47qAL3RM2s/J5pv9eU1lrbYFXdJbr2W9XNm8eYJz4BoPPQFe9x6Pq6lrE1irR9dsZsjnBIFeCKqMKvjffGSKGwa3xIJy0qvAur7raqlmdemEu2C27th69xtQxudDm5wYissUgthFRZDuZa/bd2rBacqkHhQaAf5e4Ha5fR5dstu+yFysZ/P/t/ExTa2g5+sgTJNCuSQUulbK3S0xwalccVyRVA86KgaTFvfseZUoVbaSYjKNuIcj2t3CTa7qht3jx0pvP+v76c+7iRUQTqAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.bcdb.com/bcdb/search.cgi?query=%search_string%',
      'showByDefault': false},
  {   'name': 'BeyazPerde (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaAQMAAAACZtNBAAAABlBMVEU9Wbr///9a8YjqAAABLElEQVQ4y7WTza0CMQyE3xMHjpRAKVsaKc2lpIQcc7BiJv5ZWwhuEGmzfF57YpLJ34/HRUbCIdLi979IfroCOLMwAh4bKEtEugsrzLM+FW7CCKwQQ75IiDVEvAdZmksGUyW7LTN81hid36HaVMYAoluOdU2IIfGOF2aEOmIGSB6WjWTAhKgBwoyFVPSBglVhpwhtwCTNARMeDXq0A3rAgGp3FZkOqsQVFto6QQDjhGawFKhCrzAqzAr8EeZHgV47oNd23ja63vw524NZYcTukG8VKcQTe90q6P75+awKHCd3t2O8GrAd8AofdLwMxEzBxTsHu6vcSGk7GWG+CCHGWknu3r2au/dQFxggOFGywv7SDuF6MWben7x0ClTvHMRCIcTQStZjeEletO+PJ5WePxWsKLQ5AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.beyazperde.com/aramak/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'Box Office Mojo',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAPUExURQAAAACe/4CAgJKSkv///3TPSakAAAI/SURBVGje7dZrjoQgDADgQjgA3oD0BHsEf3D/M608CgWqo84k7mZoNj5QPmjFcQFmzJgx45+EX8/dZ/wWq9i8xh1sR2F3CHi5GULnm8A2fphCRNZXKUCe7doAsaEB0jimA02+NSVtwkkF0vRyCmmmpi+ZKWP5eJTHGYFc7SHjCsAIQK6DIY/uG2oA6UK4JU2Q18BTofaAmFSu5TlgPQD8AZAvCEBJAWjJHAB+AKhU9wFzCRBW4ieB4yLuPIUGWLuFdAqoRTQM8BfWgbSU1w4wRytxfJnKDwoDytvopR+U7nWGsj4JoPqKv4DfHkuK5qgJJbZOQADsLnDyKXwAUC0gSkpolQFF0+I1UOIURUDVxBiwiElKAB2yE95qLwCWAcsiTkECFglQx8DCM2QNHWDVkIMAKDalCrDd88CyB6i7gM0VFgB7BbBfDcAEMgATeAtQewD8TcDKgH0UAN7l+ndBBK58mfYBOPdt7IHmOzwCdgeAAjT/CdSsxf4ywP81Y52k/i9D3er1eQDeBOx7wDvdvyN0c4bxbwsHGl29nk/OAzoAGHoRgHgaCGNtm80Ip5ru0u4GoBkAuAeEydFcA4Ap5Qi4cN1VwKXrDRBT5UAYVlcAKRHMzRqHFFwpXgQ2jwG0hVKWEcCwdeUp9ADELdJxVzYB0BoGgB5pbh0BpxmAHYDtw5SAbdJsITkQUjgCXAcAAQg9INQgj4UCEBrzEZ8tDusAyrQK8FMuxF0FUjmFBek++lY/AODjGcyYMePB+AUzahMgDu5KYgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.boxofficemojo.com/title/%tt%',
      'showByDefault': false},
  {   'name': 'Caps-A-Holic',
      'icon': 'https://caps-a-holic.com/image/favicon.png',
      'searchUrl': 'https://caps-a-holic.com/index.php?s=%search_string%',
      'showByDefault': false},
  {   'name': 'CineMaterial',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABOFBMVEUAAADzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWELzWEIWhsrzWELzWELzWEJusd1usd3zWEJNm8dNsd0LbrHzWEJ5vN3zWEIWY6bzWEJjsdJusd15vN0LXKDzWELzWEILY6YUj70TWJtusd1usd1jsdJNm8cQXZshhbyFvN15vN1usd3zWEJusdILY6bzWEIskLzzWEJCm8d5vN0hbrFCm8cLY5shebELXJs6m8vzWEJCm8d5vN0LY5shbrFNm8c3kMcLY5sLWJshebxNptILY5sWWJs3kMdusd0hebELY6YhebFjptJYptJjsdIskLwWbqYLWJsLWJvzWEJ5vN0WY6Zusd1usdJjsdJYptIWWJtCm8dNm8chebEskMcWbrEshbwhhbwhbrFNptKbqUhfAAAAV3RSTlMACmgx7OKPdWFXwvc3gyUUsZxOF+GkVw0K28zMwLp3aUM0GBIPBvLsxq6loZqYi4FEIx0d3tfBv7OKd2pSRz0zMifq5+fa1MG1sJdlXV078fDgwreNiGDeTbgzAAAC+ElEQVRIx9WVaVvaQBDHJwQI4b4UUEABQYFWFO+73lqrvQtBErz9/t+gMxvWhBzVPk/f9P9q2PDbOXZ2B/6hZuAvtLOxunx397B8ulWCtyi2cXgzGBxt7MTgbUo11Oebm9VxNCsLnohfCoivEJ++qOrzIQKCJ9gZKhQPCK5Atd7vq2ojAyB5O2Z5JRcoM3eNSBEgOumN+z0ofyE0hHJhFwIRDEqUjPgFOTgML+CAzPUQQcKqhZwO2Zn5HiJFNMhNfCUUWilIUd1TQvdjje1DF5E6WfKkkXdchzzsh89SgwlEZlMASwW9RolAWBTDslQGUoAtRkYPpIvIFBbLx/ZjcZs3lVholREniKTRByMSAlQiOfIVlzk3Rh+kkUwQwdxZRT24kMRDYT988rDatNmkuVyEpCAwGnGFNYEfmJL0bclA0oisAdBOcTCpHDQYMmWjf7uoFtvIWwGzBPrjLneDNNc0IdMsRQ+MqoyxBXUTrTHgmiIkBTl0YmtZyi/Ki2bk/54QAKov2OTjrj2EZE1IGqKOvQcRnsICBfbLhEwwJOzQydy3SGzTjLDARDsimhAZTvaNk0yzqMOOSIQb5RmtZKoYlsQxl3Cnk2SGjNXeRsQ4lwwkKVibJF75CG7Y1NrDa8+Okg5rxY4E+T6FHMzUNFPvd+fZrYjaUuG3UQjJsKmd8PUWIrNV6vCIFSnwOy/HIVvTPvL1RUToUiZtHSP7eBETZfipadvAtYYIXX2/pS+Fl3dyaRdKmlbLmnu516sDMhi5owTIHmsUl+GGHqUWGrui24udVzRt3/qOXU+Bq6rniqI1wawWIf2i6xjMK4pSizm8yf16xpEoHSuobesASyOiql93HFz8UEhNsGpxFr3gFDvbs0zPzQNG5KtgZ9KE0Ky8eAm6fbl+f68TWcdp/E1HBoPB8vd3qNOD26cnHTlHwlFFjuDcf3h8vL0lhJhNcNXimQOi5PfhT9prWJH1K3hNsfHGEUc+r2+14W2K7Y1fbF1eteF/0m8ceNWfw2T0aAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.cinematerial.com/search?q=%tt%',
      'showByDefault': false},
  {   'name': 'Common Sense Media',
      'icon': 'https://www.commonsensemedia.org/themes/custom/common_sense/images/favicons/favicon-96x96.png',
      'searchUrl': 'https://www.commonsensemedia.org/search/category/movie+tv/%search_string%',
      'showByDefault': false},
  {   'name': 'Criterion',
      'icon': 'https://www.criterion.com/assets/img/icons/favicon-32x32.png',
      'searchUrl': 'https://www.criterion.com/search#stq=%search_string%',
      'showByDefault': false},
  {   'name': 'Criterion Channel',
      'icon': 'https://vhx.imgix.net/criterionchannelchartersu/assets/15749e13-43d7-4c08-88bf-f634ca8756b3.png',
      'searchUrl': 'https://www.criterionchannel.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Criticker',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURQEwX////1zK6woAAADMSURBVCjPddKxCsIwEAbgKx3USdwcxL5GhYKvpKMgpKODjyB9tpS+QNwihJx3l1xpKc1yH+G/JG0CmAesIEKGXaB3GcMMPWIoKRMLDACCCAl3yLhRKd0UXAcr2KPjTF1hwgMn+DpZGfHnFTyzY9ic8TAFZ/ys66C4CEyCBwNYjPB8VELNNRCaBeRrvEn/Q7qOipNsSjgzvM4EDTO2hMDhj6JTtAyv4PBLMWa6SsNwVcAmdekJ3zM0BLkKDtNoFVGB9pkhe6UXYGD9kfwB9L1rtmDnK5kAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.criticker.com/?search=%search_string%&type=films'},
  {   'name': 'ČSFD (CZ)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeBAMAAABY/L5dAAAAGFBMVEWqAwSEAQH///+nNTXmv7/RlJS/YGH04+MSjMyfAAAECUlEQVRYw+1UTZfSQBDMKLtcZx67etUhH9eEKFwhgF4hAl53o4vXJbvK37e6e5IIyfOpRx/1gHQm1dU91RO8Cy644J8wsWVZHrueYD2KhuerhQX8DvpLS2jxM3+xsGEH/8o+Lz7aaavqCjld/F4Ue9d21ap6B/5jB7/vo0Z5d7oIhRg50w7+KEANG593GVGOv2jDhlSj3eVy+9l2wt9us6BV1f4WYZf93ei2P+fK+zYemN8yLmOVznEBtXFauY993myYr2m5+VU9u1x+tHfgtMZVTj0sIt39csbIpxoJYiUSjFvYP7CrSkMhcIxR6OmerXQ1taSw4nv6yt4zU6uX+y98pSr5UPO4tFR1iv1Aezc25nLqPTb/vTbijaeLgMjMFXk9ipaLLGJBdVVa4IeSRyXOSBmCyvp0pSo8roDrDTLLuFP0qHpbmAhorCHKmc/tTazgieiV/dQD3UsGqjoVCHIo2dij8FfgyN64Iy1VH0m/Zx2imMbV5/geHNHXXOiVPR6PdoZk0xy8mEgj+/xc2licYLfZEohd2zXV5HZElB4VsGYScWsydQ5ufK1ubaw1KtVYkRLGpUa+1uJuVWMUat2PEspkatN0OVWqCBG4nUo0Gir1wqfN9Bs+ysGtmTY5jKvPB0e5v99lgUHc8KkcxvX94cG+YVWSc+CRhrriN/7fcjhDCDR8GZeq+fVtT3aiBJ67vhSVhiAzBfqdfKm61uJn0z6M4LjqQ67UZXSkAwkMyqodDZjcYu6+OdPv+0nctwkvF7W8xn02jOMiUBXfKE0fjMu8jrDAtRhzZ8TMmCJ0NHJJNJ8Mho6QFr/J26Xp2cCuUePJ0cA3TMkPGiqiYQa59T9RBNa1vTe6PFBIC57QTfljvy+HUvXhI5rfKUPrMG6HP8QZllnMk7SBvH9cDN1IP5z82tkPHuvLPoQ/Ra4BXTAXIzhOSIn1pQU3LohcNaeNSKbgkGoZ1ejfSFUjw3IYEkP+5U2jTz24LnE/waUpgAQ5t6A4ffIJXQZpWvjGNPJy/LDwIU2zUAvdQJ+RPxrkGEV9nTQ0QJMmOxihy36pKg8deSd8FLzFmdKwX3Pblb4u11AZwtZTJPomMuYVGQcofDwl9n9K0/IAm06xxhlM03fUE3cj+lCQ7cHsU8xkXBG3wjkevujS2Z+d8Q9uXI4s+gjkHd2N7RnCMfsbOPmqH1T9LWDcX/GHoFwnv/DzEEPspMK4sT1gh9tN0vCzNXL8bRs5xjWg4Xwdj2cNv6ShvzVtvOZx4el8+7RzfFpBLZjdxiSQI2EOm1nNx8qX9D2G2UaBczuxBvrz+YeKX78tbbi3Bf0n75v+5W3poMvAA2p5uWn8HKSELj4/SJhT+f/HuPAv/P+O/xPX7k8uOdDYkQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.csfd.cz/hledat/?q=%search_string%',
      'showByDefault': false},
  {   'name': 'DDU',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAYFBMVEUAAAAkKVk4SGWr1vAsLpA0NcNaYHXZ5PFBb+1KSdhlarAWFjZSV+eKuPB6pO92g+hFVaw5TuR3gLpgiKmtu/BXZupRkOxoaeldfOOHeuuMmrKSk+6gssFxwPFVsO9XncQeP7MVAAAAAXRSTlMAQObYZgAAARdJREFUOMvlzstyhCAQQNHmLQqiAoKoM///l2mZqMlUVlkmd6NVfaob+DPJo7ad2iOACau/07TVecuPhDaLMYaCi8klrYVOK1MF50RgXAitlyUh6E2MRmttXFBq8wBmxDm8WhYK1ukOakwpRQGaZuRwgiBBhQHBSzAmKyAnWFUF5AIBwTi+gfUC1lo8IUZzgbxRIO7e0Dt6bGgo/FzfJ7RNM/8a5GwquE9sxcM2+fMNMeq3DcxKUPYCRvMOWe7lDSjYG2hOEAxfAaPQz/7cKHiHgA9Zlm+g/QREEAT45cMwFVlKUSrgif3pn37wfoqCV9ARjsQ5t4aAgDG2Px5znm0cBc6rQCJ0SotbKUjF9v0xN7l3sYP/0geplRBUFRcD9gAAAABJRU5ErkJggg==',
      'searchUrl': 'https://ddunlimited.net/search.php?keywords=%search_string_orig%&terms=all&gsearch=0&sv=0&fid[]=1381&fid[]=1572&fid[]=1573&fid[]=1577&fid[]=1582&fid[]=1583&fid[]=1925&fid[]=1926&sc=1&sf=firstpost&sr=topics&sk=t&sd=d&st=0&ch=300&t=0&submit=Search',
      'showByDefault': false},
  {   'name': 'Douban (CN)',
      'icon': 'https://img9.doubanio.com/favicon.ico',
      'searchUrl': 'https://search.douban.com/movie/subject_search?search_text=%tt%',
      'showByDefault': false},
  {   'name': 'DVD-Basen',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'http://www.dvd-basen.dk/uk/home.php3?search=%search_string%&mvis=ok&region=z&land=z&ok=go',
      'showByDefault': false},
  {   'name': 'DVDBeaver',
      'icon': 'http://www.dvdbeaver.com/1/logodb.gif',
      'searchUrl': 'https://www.google.com/search?q="%search_string%"+site:www.dvdbeaver.com',
      'showByDefault': false},
  {   'name': 'DVDCompare',
      'searchUrl': 'https://www.dvdcompare.net/comparisons/search.php',
      'mPOST': 'param=%search_string%&searchtype=text',
      'showByDefault': false},
  {   'name': 'DVDTalk',
      'searchUrl': 'https://www.dvdtalk.com/reviews/search?orderBy=Date&reviewType=All&NReviews=50&searchText=%search_string%&searchType=advanced',
      'showByDefault': false},
  {   'name': 'eBay',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAAD0BAMAAABeARbNAAAAMFBMVEUAAAAAAACZzAD/zAEBZt7+AABDQ0OGkn5mZgEzMwBgAABATaf+QEAAGjgBM28nJyijxz+KAAAAAXRSTlMAQObYZgAAAjFJREFUeNrslrFywyAQREljlYYGSn4Nmqg0asRviyptZtJk4ksG7rJHY14vLewuB2axWCxenPpFMZOpD/fNPlH+dE/E3UzhbI4SZ+z8cL/zYZTZmvsLTzaupkwh2hrK87WJ8jTt7HpEo8Ph+nijwc2NEAxBO2gaN97u+XFvbhRrCHrtppYrd+x9r7WeD62m0Y7RO3oj6skAuT/dUuVnD7Li4c6dME+1tG/dV8HWlNI+BtzMKtvehl5CTeNsv5H9dIeOwsm6BhuR4H770UoEuN9l2B6033Z88lxgvxmjJ2D9tpzZg/WbNXEvpN+WNXID0u/Cu2gA85u3jTtwqnB/NZgPJ7zIdcnDorbsux32Pinsw5hQUQt8Ap3qwG9HAD1FE84obl8l3xRIy7zEqQvSMivph4W0LEnuOg9pmawgiFkWZROwAAoeMDFJUrPa5aQIl5/F0tS5gsqJP44B7RT+wgOWLJQO2kFRDmld/i+dpeezkQ/Bi8fbRaUBSUnbotlPNxe/pD/Zm0MCAGEoCoBkoQIVqICiAJ4SZMGQgjrLMDn1vpi+K3AltVqtVqvV6oJarZ6u3+xr2fVMWob/iM49u7dsrajVarVarVar1Wp1b98OagAGgQAI1kJNtpZaCyRIQgg/FHAPQgghswZGwaLRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUajj6NTv1z61X+sb48X4A5Do9FoNBqNDkKj0Wg0Go0OQk+nn7W9lySdUwPQF080xci5zgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.ebay.com/sch/11232/i.html?_nkw=%search_string%&_sop=15',
      'showByDefault': false},
  {   'name': 'Eiga (JP)',
      'icon': 'https://eiga.k-img.com/apple-touch-icon.png',
      'searchUrl': 'https://eiga.com/search/%search_string_orig%/',
      'showByDefault': false},
  {   'name': 'Eiga chirashi (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAElBMVEWhjHMPEBB9bVozLihFPTSMemVSmNT2AAAANklEQVQI12MQhAIGYQUGIGAyZBBiYGAVFBRRZBAAcgUFhRlxMkRADDCAMxBSeLTDrYBbCncGAG67BR2ovDFTAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.google.com/search?q=%search_string%+site:eiga-chirashi.jp&tbm=isch',
      'showByDefault': false},
  {   'name': 'EkşiSözlük (TR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAKlBMVEUAAACCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkqCwkq8qML+AAAADXRSTlMA5zcNeWQltsmMU9Wbyr8SygAAALhJREFUKM9jgAIWBwZUoCiEymfrvZGAImBz9+5hFIHYu3evIvOZZO/evaiAJGB+FwiKkQR8QQJXUHVA9CB0oOqJBfMR9rDthQjchrmN8y4UTID5AyYA889cmMBNqBGyMIGLEENY7sIBJFAsEALNYAFdhMAlhLOQneaLELiCXWAtQuAWWCARISCE8DxyALAiBALAAsy1MP51Axy+5ZKF+i0AFmSrIQK7EDE7EcSXSUCKBw/Zi52QWAAAlBTMPY2+wdQAAAAASUVORK5CYII=',
      'searchUrl': 'https://eksisozluk.com/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'EpisodeCalendar',
      'icon': 'https://episodecalendar.com/favicon.png',
      'searchUrl': 'https://episodecalendar.com/en/shows?q[name_cont]=%search_string%',
      'showByDefault': false},
  {   'name': 'Facebook',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.facebook.com/search/pages/?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'FFF Movie Posters',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABhAgMAAAC7aCcwAAAADFBMVEXHIyj+/PzRS0/rsbM4OElsAAAAeUlEQVRIx+2RMQ6AIBAEN94HbVBjjPEJ1FY+hZLcK4XDBCxspFCUaaaY6vZQuUujPC1EA4mWosvMzAZBpFan7SiTOIiU9vpd8bMAQbKORVy0B4LIqyu7nC8dme17vlDL8wVsEjVOlUzYRsmi6ReiSLWXRX+jIJZKBjtcBNFDmPNP9wAAAABJRU5ErkJggg==',
      'searchUrl': 'https://fffmovieposters.com/?post_type=product&s=%search_string%',
      'showByDefault': false},
  {   'name': 'FilmAffinity',
      'icon': 'https://www.filmaffinity.com/favicon.png',
      'searchUrl': 'https://www.filmaffinity.com/en/advsearch.php?stext=%search_string%&stype[]=title&fromyear=%year%&toyear=%year%',
      'showByDefault': false},
  {   'name': 'Filmboards',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAALVBMVEX///8yMjJdXV06OjppaWkCAgJiYmJDQ0NYWFhLS0tSUlIfHx/MzMyRkZHo6OgDkeZ1AAAFEElEQVRYw+2Wyw/MUBTGT8SGIBmT8RoLKkaxqoaJ2FgwG7EY3IgMm8lkNhJBI82woRtVsRCRam08Ijq18SphRESChUdI2CE2bIS/wTm9r5qaiIXHwtfXPY9fv3s7M83Ahl/UHwNaKtFT5+JAdwElBaBAPSpz0KKop7BeS5Z7nGrxE1Ul0MOdDr23ihHWiiHwFO661usj0qOIlPMY9DfkKejnavGLCiYLWrn6/CKDyfojDr8o6Ha7/W6/31XiQb/RaOBRFvQpTw16o1a8CSZ/sAG20u3oIg9uoAvFgxzKCJ4nImAYRqNrCDUMo09nVJeOLs/SLgWiSNJYSV2VhnJxMquByforgJdvRh9lGJ5Ju2ngroaYFRvFwCsNM3TdQYIJgg1OyjHiqt8A06TofMZQnVUe6nSWZfMMz6PKgQy1xhOiVvB80/OWMK45puk1DuBgCwJYaazOswYOTcM36R7ge75vZuzG5s2bNxyZn3h+enY0Gl1PTSok60aoBQn2UoicDz5ed7MTH4C0cbu5gp37+vXro7aBheVs/VfUm+2mr0SAWbsHXFgK2CIcPGr7HKBsCTjeeSCAjQQcJqBDPccEsPV7wKvtBO1wTDhw4CXP+loQ+EcxrRx87UCV9QJIAgwT3H1IgpXsg3YIpIOfJIkEtmIvxcRAklzaAaQZr9+92LQ9EIvurAgChBWAk0lQaQDphQO78v4aY2xVkkqHIE1T7RBEUeynJEiHtRyYwlDzMCMcvgOWjRjrzPU5cInlD+kz9o8QGMopESCeUjtjpLs5kAjgI2ZmBwQcVg6XhQPe/mB6lrEzBFhr+nso+wl/DyfnK4f2d8DNFwCzHrPbmITsKoB+qj922Maf+5NOTMD9ArBVORSBV/Kbs3RHCdAOqQZeyPo0Fn8PbBSAdngJRc3K7pYcYjmlNI5j4VBsGAeGw8vC4dgQx+PA504M7r76QhpPrdfrzcEwjoTDMIqiUADPF995D3kTOwjpabaTL4ixBdh1WQDHELjIgYdY6uSrmcHuQnyoAEQo+ZRwqD441H2xaoiiTABxRJJrGGqHN51oWNsGpNM7IIo5MF0Cag3aYeswOtsWP8kCEOUKi4uW39ZhdIU94GwBGHCiMKVT0iGKTgqgrdegHMpAGwFpVnKQQFR0UMCjyQ7RJIcwUg4oN5SLjtywAAxKADm4hEiHMAxdBYThWbXowUA6rB24JDkltNOAe5Z94D8AcAfSIcz7T4kpUaSBwQH+tlu9AwG1BjfXj4Ao5C+vWdmdgoMrgMMKkCvtjDK2l0Yz2VztIACn4ODob2v7g2gqOZwqA0+x/z0AT4PrCofSlBQAz96KF82l7a4AtIMjAFcCWrQEt+DQlGtQwL4x4ClmwdEOTZJywHAMmJHdcBxoNqWD7ZBsATgYCkAbYB1sPSXbsfFgiwRg2/v457CBv4u/sBuYA8euzzNQy65h1MRDroHGo/1Uym7R2/55hgbkYLsHGKrt2k4TiX1iStju4PpYrs4gOsTYbRsFeCMOODbJkQ4Oxc0cqGRMdwCdKqiqzbUPAe5AiEUl2xph/zXXVoDdpAULqUXrCoF40UBRlnQoaSJw+PcCP5+SNSYJWBMEtmXZVZS8qCnlgUXp/CQF1TFVKnX8I3mtohNjDpZIVHDLLzZ9rlvzvuJtFICNpCpuKIyqNfpYMRSiuo6qkOes76tVi3doaQZKKS26jyWGec3SQFllD+kwUf+Bfxn4BqrPs4posMpbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://filmboards.com/board/1%nott%/',
      'showByDefault': false},
  {   'name': 'FilmKatalogus (HU)',
      'searchUrl': 'https://www.filmkatalogus.hu/kereses',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAABmq+s2N2ioz71FAAAAAXRSTlMAQObYZgAAAJhJREFUOMvd1DEOwyAMhWHPPUrv4ww5Avdh74JU/lMWqDBxUNNmyFIPSP6E9AwSiIBagcjNw0PuHp4z4AGDAGkLK6UaZA0VQoPSdKBWHLDsYd1DGIBioGiNNcgKA3JZjyF9gho7oDSXwBT7MwBxQDt8JRudd6Ueu5wHncBSTo7+N7d+CLoF5drRo59j9dA2d/j6sufPQDzIC/gi6JgsG1QlAAAAAElFTkSuQmCC',
      'mPOST': 'keres0=1&gyorskeres=0&szo0=%search_string_orig%&sbmt=Keress!',
      'showByDefault': false},
  {   'name': 'Filmový přehled (CZ)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAD1BMVEUAAAABAQH9/f2AgIC+vr4nyb2FAAAAAXRSTlMAQObYZgAAAYNJREFUWMPtlFGOgzAMRK2UC7T0AKnJAdrAAQrk/mda70pbCwQl76MfK+379jAzNopsELTMfT8UjVJDSN+zhqlKhST1RV+kfjr6/DzognmI7+cnXZGGWDnvsfYVPr9g16Pz+VWqnf1k3SHlzQKD7tJNW4X1DSWCQB7qOJAzx7oNORkZGF1EBm7hBsgimQGy8BvU3SJkrSA9vbIaJFPRKrpFIpLppJVklMjoUCK/XTNpLXdfKilhFVgJq4BKhJ8K4BKNKitxOwMuJhiJoDXBAwmiBBMATHBGPKVhgrucmCBTwUVuHxZcuWBkgvZf8FcFH/+X+O99+rAg40cAPzP4IeNPJX+Mb+xuwvaaTdCwrQpbUxRjRJ2NG+psNKiCEVgFY0QVyCUuIizTUwRlauWXDiUyAkgEMrVRWKYsTnjUXQ1ZWGVmYQbAwg3c4nhFyCLLmjAeGpBQk2zQHQQCiqvsMNYW8Bpg3lcF5k0xr+eHKO9Ji1jt5PP7Ji9JO6jUELT0Rtn8+hfH004lM+7fYgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.filmovyprehled.cz/en/databaze?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Filmow (BR)',
      'searchUrl': 'https://filmow.com/buscar/?year_start=%year%&q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'FindAnyFilm',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplNGEzZDk4ZC1lOWQ0LTRjNDMtYjFlYi1iZWY1YTVkY2Q2ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZDMDVDN0VFMzdCMTFFOTkzNjE5ODcxQkEzMDVCNjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZDMDVDN0RFMzdCMTFFOTkzNjE5ODcxQkEzMDVCNjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMUI2QzE5RTg5MzUxMUU5OUU0NDkwODZGNzcxNzRFQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMUI2QzE5Rjg5MzUxMUU5OUU0NDkwODZGNzcxNzRFQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps4JVg4AAADGUExURQYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAYcPAcdPQcePQsmPwwnPxg9RSM3UyNSSypfTzRyVDZIYTh5Vjp9WERVbUVWbkmYX0pacllofV9tgl/Ca2bPb2l2iWrVcHOAknXqdnjweIWQn5egraKqtrzCytHV293g5PLz9f///9Pyn44AAAAgdFJOUwAeHyAhIk5XWFlab3Fzd3ilpqe4udfj5PLz+Pn6/P3+T6ZSXQAAAwNJREFUeNrt3dlSE1EUheF9QAFFE+lEmw7YfZznCYcYJ/D9X8oLULkJ6e6zx6q1n+B864eqVFEpiM4vTef3FjnINXdn02t0+dLB/Rzs2oP0//07hzngNTf+vn+/zSGvu3X+/t0uB71ul4goNTnsNYmI7uTAVxFttZEB7RZNcuib0Cw2YEZ1bEBNi9iAI8rBDwAAAAAgCuDkl+KdCACWvxVvCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAQwPdl8b00Bbzx+Uc+AAAAAAAAAAAAAAAAsAO8PQsOyE9/BgfkB5/PYgP6RnAM6BfBM6BXBN+AHhGcAzZHcA/YFME/YEOECIArI4QAXBUhCGB9hCiAtRFOR31l4JsBoPenoz73wwIw4COqVwBfBCsAWwQ7AFMEQwBPBFMARwRbAEMEa0BxBHNAaQQHgLIIHgBFEcQBL14/FI0gDni1+vhEMoICYPVVMoIGYCUZQQcgGEEJIBdBDSAVQQ8gFEETIBJBFSARQRnAH0EbwB5BH8AcwQDAG8EEwBnBBsAYwQrAFsEMwBXBEMATwRLAEsEWwBDBGFAewRzQN8KHNV8ZeG8O6BuB91gBPSM4BhhE4AaoR2AHaEcQAOhGkACoRpABKEYQAuhFEANoRZADKEWQBKhEEAVoRBAGyEeQBohHkAesPj2ODXj3KHSBL89i/xILzy8NEJ9fGCA/vyhAY35JgMr8cgCl+cUAWvMLAfTmlwEozi8BUJ1fAKA7PztAe35ugPr8vACD+VkBFvMzAmzm5wMYzc8FMJufCWA3PwvAcn4OgOn85QDj+YsB1vMXAuznLwM4mL8E4GL+AoCP+UcDvMw/FuBm/nEAR/OPAniafwTA1/zDAc7mHwpwN/9AgL/5BwGeO5w/43+zAgAAAACUAhax339EdWxATfPYgBlNYgMmtN1Gfn+7TVRFBlRElJq4728SEdFeF/X93R4REdF+0F+D7jZd3M5hyJ+fm/TvUhUuQlslunxpOq+Pozz+uJ5Pr188/A9SdDQDmX60YQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.findanyfilm.com/search?all=%search_string%&sort=product_release_date&type=ALL',
      'showByDefault': false},
  {   'name': 'Google',
      'searchUrl': 'https://www.google.com/search?q=%search_string%'},
  {   'name': 'Google Scholar',
      'searchUrl': 'https://scholar.google.com/scholar?q="%search_string%"+%year%',
      'showByDefault': false},
  {   'name': 'Hancinema (KR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAD////Dw77LJC4Ac6D29vXt7eugmqJM5zFZAAAAAXRSTlMAQObYZgAAAbxJREFUSMellT1uwzAMhdMbpALk3Wzs7HGA7I4AzzKQ7BLgC6RDrl+Srn6IyGqLPsBZ9Ok9Uo6p3e69qj2u1/UnQHtALZuAgm+5DWAOQLsFkL2+F4AkfbvZSpEeWN0GoCHKloAGMtkCAAC9DU69AEKAy9opObisYeGQxIewVNqc40GWAR966AQg9n8Ow0V4yHP4GFin8jl4Wg9E9woogCGKLWYnAE/5woKeBGgKyC0QgBxQZJBbtNiVzQCsQAj9FUIExAShB/onQCacjTHDCf2hz4FsnXTB7R4S4I8RMKwrV5mAVMI5AFhlDTCPHgFbAEwA4GegAUcARWnqUgIjAQDt7wARIQFXA1SswSbgLADugkE4CkCcA79WOIgEFLTxJDUf+1UamPxdMGykwUS2Eeixo4NBDxM1UuXdCrAVAkIAHM0AV+tBrE/8tl0AqAhpMYJj4xWgMA3CQn4X/Oebc4uR4vEJAGU0mcXEmxsbAQ09WRwDIAYEAhTnkCKC95OBBBR09IPI81metDwk58p9odayXuZw/nV366BcNq4DhUT9UpslUZ72sNQAneZwdRR3tYv1XnT4/939Vl/ffwGwigOGhP6IUQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.hancinema.net/hancinema-search.php?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Heritage Auctions - Movie Posters',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAACAgLz8/ODg4NBiE38AAAAAXRSTlMAQObYZgAAAPZJREFUKM9dkjuOwjAQhq1dbbFClByBkjL3oOCPEUJAnYoSpYFL5AgIZaKU1HAJ99TpERWIcQbbGn658GfNw/MwXj+X18EEnYFVuE/A2hkxch6sGP6j16aHTGAZrKLdAB/dGIYBtuKSnKoAOfsj6mB+E1wlZUjLwVK4P/vE+u4Ppmac11gc/cHcZAJl6xONBIoamJlKoGPIAzSNB9eDrTvAMhARQ+Ei5G1RRVgdyzOD+Cz4IUJJ1DJI6IKojnk6AfkOOdvwdzIBgLCUEk4N0Lm5FPd4Ans3VWWrhqhWqSbq9urGp5HoYekxpgHr0eulSOvyvUhqxd7dysarfbjCmgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://movieposters.ha.com/c/search-results.zx?N=54&Nty=1&Ntt=%search_string%',
      'showByDefault': false},
  {   'name': 'HKMDb (CN)',
      'icon': 'https://hkmdb.com/common/hkmdb_db_logo.png',
      'searchUrl': 'https://hkmdb.com/db/search/simple_search_results.mhtml',
      'mPOST': 'display_set=eng&search_for=movies&search_string=%search_string%',
      'showByDefault': false},
  {   'name': 'HRC - Movie Posters Collection',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAALVBMVEXw8OvY19MkICHq6uVWU1Th4d2wrqt5d3e7urempaPDwr7R0c2XlpXKycY/PD1os5axAAAA+ElEQVQ4y2MYBaQDYyhAF2c8Xg4GNQLoEk5KYKCCKfFOyeXRExcsEu5KU47UPcEm8e7cSSdsRvm4zKkBS2AadeT4IewSde7lLirEO7fEBQzc0SWYBaHAgJJwZTU2MAhlDQ4IMDUwMGY1NRZlZoCYxyaxMSFtR9aqBdsaEmWibkRs2xa1ACLReetgpsRcG4GdrcciZ0iu5M3MbIDq6FiR0ZZmFnAt4+bdNRErd9yYkQDxgqmoobBgYKBBaLSpKGug6VZTYwEkF9yVirWWuLh0Fbo/2IK3RWZZSCdnBqBLXN0WtZJDMDVzA3qQbIwOZGU03SwqwDAKqAYAfspQpC9k5YQAAAAASUVORK5CYII=',
      'searchUrl': 'https://hrc.contentdm.oclc.org/digital/collection/p15878coll84/search/searchterm/%search_string%',
      'showByDefault': false},
  {   'name': 'iCheckMovies',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMAgMAAADTrqmtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAMUExURf///xwcHMImKf////Y3wksAAAABdFJOUwBA5thmAAACVElEQVRYw+3YPXKzQAwG4KTIEXKfHCGF8c6koc8lOEWa9CmyFD4Cp+AS9DQ7ExTD/kkr7U++ceHio/Q8Rq8WG7Q8PNzd8dSVjtfDdOVjJ48V81ItZYs9V8yp0XRdPfQ9mXODeWsw73Vz1rcxum7ODeatwbxLRsFMS3HTA0DFwHH8oK6Y6a2J5bjxJJS7dqW/qBmCWXNGASQn2kvR38+AzOzNNzWI2NaOUsT02IA3H8QMxKy+FDaKkL3YmRlaai9m42AzJGber3liEnINdKwONio1Py4OMmkcgE9bqmo+iEkjw+biIAN1wyKDcXFKZnFxouGRfalo8pELxrgVREaM81UxoVQw6l/MFuLkjeHn6W1MGvkyM3P96oXEmagZbIKRrCA3+9k1McDM/mkoZo6TrsS4b4ZiR+SM0ThyzkwoMjM2jwtkI7v7IjILCmQjc2NQIBuZGgU0kM4YV+wS2yoaF1kwcRVNxejYlmBcsSm0VTQ6bzYf2q9B1oyhLcm4SxYii2YpmQ79YfTk2xKNCx0uW97oooFoIGsWT0b0xPyLGXBj4Wctmo2auWgmwfRJYyWz4NabjHyvM7j1srngESe9P2/tZhLNQJqf8ICTMWSaYs+vpWAUNqR1bgxriz+XDWuLP9+3GGctmZEOiXyWCKWA7wtiY2MykPL5ZxvpGFmZo7jh8xg3fK4T9jLA5kNuBjkOMUoulZ9p14zppa7S/ZdYqqvM89I+TkjDjBJOw/aDKg0j7hkHst+5wz3sf3Mb83wDc2p433JqeG/z2vhupxao+V3TXR2/bieEjYde6F4AAAAASUVORK5CYII=',
      'searchUrl': 'https://www.icheckmovies.com/search/movies/?query=%tt%'},
  {   'name': 'InterSinema (TR)',
      'searchUrl': 'https://www.intersinema.com/ara.asp?ara=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'JustWatch',
      'icon': 'https://www.justwatch.com/appassets/favicon.ico',
      'searchUrl': 'https://justwatch.com/us/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'КиноПоиск (RU)',
      'searchUrl': 'https://www.kinopoisk.ru/index.php?kp_query=%search_string%',
      'showByDefault': false},
  {   'name': 'Kinenote (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWAQMAAAAGz+OhAAAABlBMVEUAAAD+VQGq9n6SAAAAAXRSTlMAQObYZgAAAb9JREFUSMfN1k1qxiAQBuAJFtwUvEDBixS8WEGP5lFyhCyzkNgYw0zmZ5FVaZYPfN/7kqgj/OXzCUXZN6zKfmCXtDRo0nyDLi2eVoWl0zZh/TQR4oYdImJYLzximAjJw3jI0i9rLGIaax0u4yHptpVFTNtZxLSDzE9jIRGtUgQate5oGOLQKCSgUeuIRq3zwzZsTNYwgqxTxDQKSWgU0pltGEFW50vR/xeYHaBtN2w1rBgG2pq02bhIq7AoA/DMZuPIbDbOzGbjLq2AUwYQpDWAxC2Pxl3YaCwsjcbC4mgszI/G3OY31OYMC4Ylw7q2xTBvWDQsG9a1LS/N/XOzOsNbSy/fqX/5jcCyZFg0zEtbql5rgdYkW7uJ27U1grEXnLJthOi9laWNEGlXiN7TTtkGIGyGvDg3rhBuM6RY59Wbc61bVgxbX567TRiFOG5VzAAKyXpWQFS/tWePI6NBqDsDJGMOxofV2/zDcJyTNRr7aLsxu1e0gFbQnHE/AFob+m6xPSzeVh/mbyvqTiMuTtN2ZumylVm4rBp3LkawDGvcIJ+2G3e9VVg4rQhzDQ6QT4Nm3EU3ZV9QlX1AgT98fgEn+llzp3SK7QAAAABJRU5ErkJggg==',
      'searchUrl': 'http://www.kinenote.com/main/public/cinema/search_result.aspx?key_search=%search_string%',
      'showByDefault': false},
  {   'name': 'Kinorium (RU)',
      'icon': 'https://images.kinorium.com/web/favicon/favicon_120.png',
      'searchUrl': 'https://en.kinorium.com/search/?q=%search_string%+%year%',
      'showByDefault': false},
  {   'name': 'KMDb (KR)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAGFBMVEVTTL/+/v9HQLuno97Z1/GBfNBnYcc8NLYv8SczAAABz0lEQVRo3u3VsW+jMBTHcctKu/9kw2yRpnPAaW6Nc1HnQi43F9rup+u1/ffvGYnwaAUtW4f3lQyxgY8QComSJEmSJEmSJEn61uksc3FzXojzdpWtUI5f4hiw8v5OP3jfzS+937p2VXV56kb31x/9lgFLoNA5TIdeI36+AnaqX6F+ngU6O3FDwAWkDLBKLTgQEFtPACsaigFa1x+BxI0DC6Dq5oSh0eUQSJ4C7Pgd/CjpKAcqnQ+B9K0mdhyIz5ADhQ4EOAZkj8Qy4K9yDFgDtwNg7z4B0ofDmgE+PkMO7K4xDRjAuB7YAA0DLNIX2txOALGqB+IT5kBInnGYBOwRKHoASBwDTDD/sJkEkj8BOw6YAZCbxVzANhwobYlfc4ADUA2B3D4i/TpwA+w5UCPYxRygiC8jA65A43Ng9KtsnkFjFsBfpmULJPMA/jovkbwA6XugnnwGcTDgFdjRjgNvJWwzDqzYq7Nsj+6HgDnScAx4BQoGqICEAVlAEYHxnzS7GQJxiQM5qo9ApXqAsg0HaqBhQInmPWC3jgGG3fLl6XSvLmhznv+mabvrOlH3mTr3dLq78M3YX5tup+2uK4vRnp0SD0uSJEmSJEmSJH3r/gP8coRX+bDIBAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.kmdb.or.kr/db/search/movieSearch?collection=ALL&query=%search_string%+%year%',
      'showByDefault': false},
  {   'name': 'KoFiC (KR)',
      'icon': 'https://www.koreanfilm.or.kr/eng/img/common/kobiz2.ico',
      'searchUrl': 'https://www.koreanfilm.or.kr/eng/films/index/filmsList.jsp?searchKeyword=%search_string%',
      'showByDefault': false},
  {   'name': 'KoreanFilm.org (KR)',
      'icon': 'https://koreanfilm.org/favicon.ico',
      'searchUrl': 'https://www.google.com/search?q="%search_string%"+site:koreanfilm.org',
      'showByDefault': false},
  {   'name': 'Ktuvit (IL)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAgMAAACf9p+rAAAACVBMVEX///8AOLifn59X4NuiAAAAvklEQVRIx+3VMYpDMQwE0EHVopMsuk/u46OoFHPKSAgcufhVCITwp7Hlh5Htxvj5PC5yw0fhzjsR7zEAXRM0eiRgV8ADxPHXIKxi5r9BA3pCNJjDDhA2cIEMXbAVgIkrWZBeYAWs2q1B4wLMUc0HoHtwgEEiIRpiwBoQfIEu9Q0+wQfk/g3itjbU6oY4IDbgAOEA4gVo8H60CXWaNCmIA1wZSiZYFJANGsKQBt8QyGlCVn2hBCPu3N/Et8Ov5wlQlnG+tD7IKgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.ktuvit.me/search.aspx?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'LaserDisc Database',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGAgMAAAD09RfOAAAADFBMVEX///8AAABpaWmdnZ264cFnAAABnUlEQVRo3u2XMWqEQBiFjYOFhaVHsElv7xEsMnGLLTyCR/AS9imDVY7gJTxPAtEgvGF4/FlHlP2/TuSB7Mens5GiKIqiKE/L67jwsV6bEfhyJoNdqNfrFwu0zsSudOt1hpMKFzHeSXDSw2J7jilaKHESISneyWHxDoPtOZpoZYbJmzMp8Y4FbjDYnuP+pwUnd2cyMy21V0vr09LhwlAtlVdL75tMOMlQS0FNJigMTTZcy0BNFiiMa8nh14+5lgG0/COw9JDAipMEVgQIrCaBybQcGlgpDyw/SWC5PLA5QGCd12QlD6w/e2DDSQI75GBhghwsQgQ2ywOz4sBMkMCsODATIrDJazISBCZ+7yUBDhY8sFgeGAcD4+DBgoOBcTAwDr73OBgYB7VQ3MB80MA45gEtfUAtbmCchGrhgXFygRY8WFw/sFQD+9Vy/cASuzJ6+PRpQfgXDOF/jRH+BUP4yR3hBwuEHywYnsAAcnIPoOW2h5aZTdodtBg66XfQkgXQ0uwRWC4PbJabtE8UWHOdwAZ5YN+MKVIURVEUJTA/mzfhn3x5gqcAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.lddb.com/search/IMDb/%nott%',
      'showByDefault': false},
  {   'name': 'Letterboxd',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA5FBMVEUAAABEVWZAvPQA4FT+gAAKDA9CU2M3RFIpMz4DBAT/gABBUWI+Tl4+TV0lLjcXHSNDWGtKVmL///9DVWdAWmVArd9DaYHjeQ5iyfT++fNGvvNAtu1BmsVCg6VW6YtS6YtDYXY/ZnRDXHAl5Gsg42hCV2U/XWQ5aWM1cmJRWF4fnlwbp1tUYFlaWVkPwFgMxlcE1lUC21RkXFOXaDf/mC/rewr/hQn2/P3z+/xAseVAseRBnstx2Mpm08VBk7xBiq9Cf5+9wG21umRtXk+QZjykazG1byjBcSHAcSHKcxzzfQX3fgRDkLFHAAAAAXRSTlMAQObYZgAAATtJREFUOMuFk2d7gjAUhTkEElBkKGJbtXXvbe3ee/z//1NC8rRSS/Pm4znJSW7u1X6wPYs5lDrM8mxtF9PK45u8Zf6SbZciBXXt1HaGHZi5pRfwBwUzrWc7bIYMmLiHi0zcJIAiE8pDLPyDFd8gqc90FYDT7fe74PhRo8QrZmsegPUmZ3y+DBGOFoQsRiFaN1VdP6/HFo8nvBkJlcmMJMyaZT2hVoozGJ6MnFgPRHKtS+7ANAcVQ3Cy3xF65+xAGspwNBoY8oTj4qEwHBX3dIlPuUGQYeAR4oQ4oi0M7dPtCIa1IbknkitdUgfjz3wXJ2wmc6HPmxdCv+TP9IDg+SPe/zpFb7wkZDnuoVGL5eqtD3ii1MHqcQhOOBiE4LSiyBelVnyW8rtVDaNsOVXTKttePTjq0VMPr3L8vwCrIxmNWEgYQAAAAABJRU5ErkJggg==',
      'searchUrl': 'https://letterboxd.com/imdb/%nott%',
      'showByDefault': false},
  {   'name': 'Lumiere',
      'icon': 'https://lumiere.obs.coe.int/assets/favicon.03b96b55.ico',
      'searchUrl': 'https://lumiere.obs.coe.int/web/search/',
      'mPOST': 'search=search&title=%search_string%&search.x=0&search.y=0',
      'showByDefault': false},
  {   'name': 'Media History Digital Library',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEX////d7v/u//+qzO7M3fCIu927zO673e6Iqt3u7v+Zu+6Zu910qt1mmdKZzO7M7v+n2SNhAAAAbElEQVQI12NgYGCZwAAFgTDGcQcFEMWieCXQACwQfD3CKgHEMHUQThVOYuAUFGdgzLrIwMBYc4iBYdcToAyTJVC2xYGBQf81A2MySL9E+kbhVJAmB+2lPavB5ogwS1RCrGCSgVmmAWNwAjUBANCnEycINOX5AAAAAElFTkSuQmCC',
      'searchUrl': 'https://lantern.mediahist.org/?q="%search_string%"',
      'showByDefault': false},
  {   'name': 'Metacritic',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAJeUExURefy/+jt/unt+unu/+n0/+n1/+rp5+rq6urr7urs8ert+Ort+urz/+r0/+vn1+vq6evr6+vs8uvt8+vt9uv2/+v3/+zp3+zs7Ozs7uzu8+zx/+zz/+z0/+z1/+z3/+3t7e3u8O3v7+3y/+31/+35/+7s4e7t7e7u7u7u7+71/e73/+/v7+/y7e/y/u/3/+/7//Dt4fDv7/Dw7/Dw8PDy9vDz9/D3//D6//Hv4fHv5vHw7vHw7/Hx8PHx8fHy9vHz9/H0+fH5//H8//H9//Lt3/Lx8/Ly8PLy8vLy8/Ly9PL0+vL3//L8//L9//PouvPquvPqvvPy8fPz8vPz8/Pz9PPz9fP1/PP2/vP3//P4/fP4//P///TryPTryvTy6PTz8vTz8/T08/T09PT2/fT4/vT9//T+//T///XprvX08/X09PX09fX19fX2+vX+//X///bqufbw2fby5/b07vb19fb29vb2+Pb4+fb5//b8//b///f16vf29vf39/f4/Pf4//f5//f6//f7//f8//f+//f///jsuPj4+Pj4+fj4/Pj5+/j5/Pj5/vj6//j+//j///nvyfny2fnzxvnz4/n5+fn5+vn5+/n6//n8/fn8//n+//n///ruv/r43/r6+fr6+vr///v6+/v7+/v99vv9//v+//v///z6+/z7+/z8+/z8/Pz8/fz+//z///39/P39/f39/v3///710v732P789f79/P7+/v7+//7////vt//ztf/zv//0uP/2yf/30f/4zP/40f/42P/87v/97v/99f///v///wIjMP/KAP///9PJig8AAADHdFJOUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4lQUvAAAD00lEQVRYw62X+X/URBjGCxYiKBABWdHCIiiLKCJWUI6CgLJoFWwDKCJCV0q1BJAjHIVwSJdwSVGnaq0yJWqVtWVVoBY5PTrN/lfMvMlustmZbHrMD+/ns7t5vnlnnjfZ9y0hA1wlgwBASFV05ERDYfF05cvJb76wcuurlh1L3zuDkK4kEIsqQlhTVIzsDLoikkJIKiKphGBJOkxI42irYE1oI2SzJKcIUaQoVZVDBEA6KjNAVNZoOvK4BmLx1w1SOzbCAHKsi5AKOeYAFA0jlGDRUKqOtLZYAeu7tn1VSjZ/GgEgVUD+9AMa/kDdLffq3uzyEO4uGzqGJlEuwy5kAMhxyJ8Cmkc9V6j2Q5554leafwR2EQEAxkpcMzHatKThS4E6j/HDzjdqMDbVeMLEziFC/pcnlgbKXcTHpVN68l2Isfx/erSY3E3iqb+YC886gArVNFH14roQ+hxiw8oabNJduC48Nkyoz9DlJ6wune66EKGcXya9I9BnnOUjvDLtOs09CgATxxcc/JGvz3hWPqF9y0Illcq6MOKtIvfnEGY/mHPhyozJYfQ+wsayrAvl9b91hNK7BLhfZzpRYbvwOrFCAvIIf5M5tgvR9f8HGBhAIG/GAJBuCk6A6wVTfNqWtg+xMzABfy4ewh+OC38GAQp34wKu2YDnOfrCTfsJsO2ZAHi8EMDznkd4GADz/QB+8fgJTDULAFYgQEhgqqs5QJj69Z8MlAIHIKwd/7MdGpDhl0YfABn+6ykYIPCSfdsbAMgVvrAafC9HHyCg/EIBAssvBKBI8fQTEEDIA/SDwFQfAOBfziFwCbwE4IXCsYFH6BUBOvIKQUjg/cn+DICyVWEIvCN8bSoARr7qLWaBmVwT5z0CgEVbraIEfptQu8I+xPYX8p6nUASmmNvtuPB7qdVXAgjGO3+u+GLlh/mPdFEC6Nd9ZJq5PtHqG4FdfZP0OH0i65E6+0SAi7tzPVJcw7hxl4gg0m/7FptOr8y69TXE4hNE+juebp3NC9WETxA2it5O1e71v27iEIT6pmbPxOJ06+8W5iC+/0sRln95xDsvVGV3UbTZpvm/6J0XEhoykJrQ0edJK0y7fzJ5FmtMRGPWBRi6otJ28o8Ykf3lP7JWgvwlrwu5qa3V4ow83pmnnZBq39RmGFpCN5x4fPmhoKFr/9vnDEOHTUO0DzGeHbro0LiXkOTTIvmTrWxolGHoirmH6E5tFEB3cWpIyYHbhep775c8dMkFeFxQdUM3NIiqqus01h9rTH62+3tXfGHPieT5o59o9BJdhajpEAdn+B7Yug9mOH/a+PzQFgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://www.metacritic.com/search/all/%search_string%/results?cats[movie]=1&cats[tv]=1&search_type=advanced&sort=relevancy',
      'showByDefault': false},
  {   'name': 'Movie-Censorship',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH5AoDEjQAvYzAkgAABHxJREFUSMftVU1sE1cQfru209ACSQ9pK4HUSBFcoBERlzYVbQNqD4AQ7blRe0BqSISEaCWQ2qTcilo5OLEd2/k1IaUQBxCiCEcYK06kNiiFUCfkp0pShO3E+XHW9nrX6/X+dN57seum1/aW1Wj1dmbe972ZNzOLpP/5QVsEWwT/CUEanlSKigjvdHqTE3YQhA2rKEj/NouiSK3YQQSNlANBYM3Isqrreclks4UcsAE0eWtW1/8BLgiAlS3YLmta7lAYBAF6Mhab8Xgm3G6QoNu9+uKFBBxwEIIOm+PR6MzAALUuBAICNZGwFOBTlNDo6MQVvH2yry8SDPIQDXiQgyJd14fPnfseoVaEWhBqRmig5oM1bh2Chv1yNrsUDF7du4daW4jblKdfUVWB54H7T5/vZk2N86Wi1py1Y+eO3vJyT3V1aHJSlGWUkaQ5v7+v8i2HyeQqwgJOQ02NKVWFnEqZzK1DhywIuUxGMLUZDQOffLy0uJgRRVnXn1gsNpa1IuRAyE7EhlAbETiot66OV1WU4jhI3MMzZyiKg2XaGKajtHRhfFxWlD/u3IH9LqPBwSCnAWMNNZsTsgwRzHnvAxz4O40G1/ZXvOfP/+p236391GEwOI1GR1FR7949S+EwEuJxRVH8p+ssFAhhIAji3uefpXT97tGjrUSD9SyDCS5d4mUZbu72kcNgai8yAc3PdV9E0um4KCY07ZHDAZrLCPXu2xcJhTCBqmn++tM5AgYOCzG6thXfP3WqvbjYwWBNIYGgadHZ2c6SnW2EG+CGra2cIIjJJFxbSlF+v3Hdd/HiRCDAJZObCdpIQqnQ5OY1eYKUpk15vVRP8+b/timekaEJaOGmNY1XlATPC6lUnqAegup8tXTg5Em8k8HiZFmnyXjjow83UkTvAFIEBD7fRlhE2f/+e2sQAc+T6k/DAsoXJPV3BA31FlJhY16ve/cuqAe4Ooj9p3erhzs6KCVoCMF3SUVZWpjveeN1O8NAWE6GsRvYMXePpOv5rhy328aazeuxGLnkbJYSQDnPTk/7v/qylVQUwI24XI/7PbYCgoDZnIBEaJqvHm+B2nWyOI3tO7Y/sloBkYtGf2lqAlPXa2URXEUcB702dPZsC8u6Xt42+/RpeGGho6QECrynvPz56uposxnWtA9g8eDCBYgAKFYWF69VHYDmchlYpwGXH5zjakXFld27Wsj6QWPjMsch6NVxm62zrMxKbtVdUfF8airwzdc/4NqwTgcCdqKnTURlfmQkC2Mgk4nMz3mOHLbmHOy5bu8ufzPQYgmvriUTCSSr6mBtrXv//msHD/ZVVfVWVk4ODq4sL//W1RWORMLPnt0+dgz0P2I5cP2dt+81NIRmZoAAz05ZjsXjY93dt44fBwdwu3niRMByeTYYXOV5PpHAswiPLFWF76X1dZDlZBKKV4BS03XwAQjo2yjHUSssYjCYc7M2TQe1psHkAhPISiLBSRJPRnfB/wAqDBCJ4AWZ5ngOEwxxk5U6FP4MCkz0LRU4bP2Ttwi2CCTpLw+PfGOkBCRRAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.google.com/search?q="%search_string%"+site:www.movie-censorship.com',
      'showByDefault': false},
  {   'name': 'MovieBuff',
      'searchUrl': 'https://www.moviebuff.com/search?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'MovieChat',
      'icon': 'https://moviechat.org/favicons/favicon-32x32.png',
      'searchUrl': 'https://moviechat.org/%tt%'},
  {   'name': 'MovieLens',
      'icon': 'https://movielens.org/favicon-32x32.png',
      'searchUrl': 'https://movielens.org/explore?q=%search_string%',
      'showByDefault': false},
  {   'name': 'MovieMistakes',
      'icon': 'https://www.moviemistakes.com/favicon.png',
      'searchUrl': 'https://www.moviemistakes.com/search.php?text=%search_string%',
      'showByDefault': false},
  {   'name': 'MoviePosterDB',
      'searchUrl': 'https://www.movieposterdb.com/search?category=title&q=%tt%',
      'showByDefault': false},
  {   'name': 'MRQE',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJUExURQAAAP////SWKj2rvDcAAAACdFJOUwAAdpPNOAAAALZJREFUOMu90z0OAiEURtEbEhuWwnrU9dC4DxoTcldpMSPC4GS0UMqTQN7PB5fN4UdwBiADnBpErT0E1dJBsgR9QVBIlgbRCtHaIFkgaAPNgOYVggJoWSEukKwN6ghpgah7oAUgvIHb55AHuO4Bb+B+CAePflfpLnw8sfiEureGaVHTKudlT3GYAoObSM2hI21iCck8wtJwd6UwQFzn3tWhdr08IR9CGQqz63YZqLkHwquXP/zsB236OSKC/2dIAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.mrqe.com/search?utf8=✓&q=%search_string%',
      'showByDefault': false},
  {   'name': 'Mubi',
      'icon': 'https://mubi.com/apple-touch-icon.png',
      'searchUrl': 'https://mubi.com/search/films?query=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'MyDramaList (Asia)',
      'icon': 'https://mydramalist.com/assets/img/apple-touch-icon-iphone.png',
      'searchUrl': 'https://mydramalist.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'MyMovieRack',
      'icon': 'https://www.mymovierack.com/sys_images/icon/apple-icon-57x57.png',
      'searchUrl': 'https://www.mymovierack.com/title/topResultFor?q=%tt%',
      'showByDefault': false},
  {   'name': 'Netflix',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.netflix.com/search/%search_string%',
      'showByDefault': false},
  {   'name': 'Netflix-DVD',
      'icon': 'https://dvd.netflix.com/apple-touch-icon-180x180.png',
      'searchUrl': 'https://dvd.netflix.com/Search?v1=%search_string% %year%',
      'spaceEncode': ' ',
      'showByDefault': false},
  {   'name': 'NextEpisode',
      'icon': 'https://static.next-episode.net/favicon_comb.ico',
      'searchUrl': 'https://next-episode.net/search/?name=%search_string%',
      'showByDefault': false},
  {   'name': 'OFDb (DE)',
      'searchUrl': 'https://www.ofdb.de/view.php?page=suchergebnis&SText=%tt%&Kat=IMDb',
      'showByDefault': false},
  {   'name': 'Posteritati',
      'icon': 'https://posteritati.com/icons/apple-touch-icon.png',
      'searchUrl': 'https://posteritati.com/search?query=%search_string%',
      'showByDefault': false},
  {   'name': 'ratehouse',
      'icon': 'https://rate.house/favicon-32x32.png',
      'searchUrl': 'https://rate.house/search-all?query=%search_string%',
      'showByDefault': false},
  {   'name': 'RatinGraph',
      'icon': 'https://cdn.ratingraph.com/assets/images/icon-32.png',
      'searchUrl': 'https://www.ratingraph.com/search-results/%search_string_orig%/',
      'showByDefault': false},
  {   'name': 'Reelgood',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAABiVBMVEUAxnz////+///+//79//78//76/v35/vz3/vv2/vvz/fry/fnv/fft/ffr/Pbq/PXp/PXm/PTl+/Pk+/Pj+/Li+/Hc+u/b+u/a+u7Z+u7Z+u3W+ezS+erO+OjJ+ObI9+XH9+XG9+XE9+PD9+PC9+PA9uK89uC79t+49d629d209dyw9Nqv9Nqu9Nqr9Nir89ii8tSc8dGb8dGV8c6V8M6U8M2T8M2R8MyP8MuO8MuK78mJ78iI78iH78iH7sd97cN77cJ27MB07L9w671u67xr67tq67pp6rln6rlh6bZf6bVe6bVY6LJV6LBT57BT569S569R565Q565P565P561N561M5qxL5qxK5qtF5alE5alB5ac+5aY95KU65KQ55KMz46Ex46Av4p8t4p4q4p0q4pwp4pwn4Zsk4Zok4Zki4Zkg4Jgf4Jgc4JYY35QX35QV35MU35IT35IS35IR3pEQ3pAP3pAO3o8J3Y0I3Y0H3YwG3YwF3YsE3YsD3IoC3IoB3IoB3IkA3ImkwFqMAAAAAXRSTlP+GuMHfQAAAXZJREFUeNrt1VdTwkAQB3AWqWLviqgoFuwNLFiwdwURe1fsDUEFW8J+cucuCDMwQ5J7cHzIPv2zs7/ZzNxNolIhY6kUqcj/IZ8irHK93MszSoDmM1YJOkeQSZosAHkznwyy5Gu+AKB6l0Eihgf1oO64ZpCIAbsajGNvJPJ2m63F4YlKlBjbrAQoXuIQuRwgVboqKnXmbRJ2zGS+7uRXQtak+KksI951qcm0ri+YkKDdE5cRdzadbTpFTEqwisreCjpY5qH3MDY3NZRLG5obMUnL5CZ3n3+g3QsD7a1IkNrue/J01DgitK20Oysuaw9JvuzUgIt2o4W0vSAmixa/EfGxXw8AA6FQ6Pm4VXiTg8zSMPpK0zCkVn40k/S1X8VTuhzPeCofiZQm66MSv2Cpsu0F2eREDOXJnsB5DQ0NnEzpQtwSlq7Jl7ywtOpdtkS/sHRavuQswkUIy5bohWSWJ+NLjbfSpM9JaoPmfZqdfuWfrUhF/rH8AWogkZaxzEKaAAAAAElFTkSuQmCC',
      'searchUrl': 'https://reelgood.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Rotten Tomatoes',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://www.rottentomatoes.com/search/?search=%search_string%',
      'showByDefault': false},
  {   'name': 'ScreenAnarchy',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURXoVA////7XVBmYAAAI8SURBVEjH3dW9jtQwEABgW4POqdg2RQ6/wpZXnAiPwiNsuRUOT0B73b0CJaURxZXX0mFAokSRrjhLrDJ4frybNaJFwBWr5Mt5xh5PHGP+j7+phdhCamFu7u0vkFs4NAC/hY2mc4sORdQHChtE+RevEBAl37h0OgLlUVh6jl0AJ34i4AgiP1muNSZHtR8UPEFZFtzhwrFGgpLG3WvwQFAmvfnUgK9A93TlsYFRwTLgGSRHEE4wQYWDVoMrgiswtLoKQAMr5Ao1mwCeg13DLBexhaUFHsSlfZh0cVnhsQIy/JD4QYpc4EFglGhlxV9XkAneC3hZVYHXAk5KWPZLVwGSZoPf67IYJo/fKowKsQKPiStgieMKSBTqC1LmHjDa2yMEgfEIIyYq3EjFA9oMhukMPq9gWUFSCFILBd5GBs/diDyjuyPQvgQCbrN8bKn7Ft4IHGp98JZ7l4H3Bb3AUmEZabgAV/DAwO0p+5LDCfgFmoNOctIaJzwBT2SSt0zaq6RZ7BpKkKyX8ss3sgNBOhLSX3mIlmk9Nz6WYy6Y/or6dDZofGIYGLb20fiZ4RnDZKMZduVnZzxDJEjl7Hxl/DsKOhfwCnzCMUQecsmwt1/MpcCwr2mHddqZrhTo7LPJXJvuJUPX/8ESPenNi1KmHXTAaeNFb2JZYoYBaLU2uhuT4AoK8AfFJvfREpRvAwMkl+0M2dHHgvoAdm4Pb2E+gpsdjd/BDQwC2fUuw5ayMDztXXfRw9bM0Jn0L3+3fwKL326n9SzYSwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://screenanarchy.com/search.html?term=%search_string%',
      'showByDefault': false},
  {   'name': 'SensCritique (FR)',
      'searchUrl': 'https://www.senscritique.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Simkl',
      'icon': 'https://eu.simkl.in/img_favicon/v2/favicon-32x32.png',
      'searchUrl': 'https://simkl.com/search/?q=%tt%',
      'showByDefault': false},
  {   'name': 'Sinefil (TR)',
      'searchUrl': 'https://www.sinefil.com/ara/%tt%',
      'showByDefault': false},
  {   'name': 'Sinemalar (TR)',
      'searchUrl': 'https://www.sinemalar.com/ara/?type=all&q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'The Numbers',
      'searchUrl': 'https://www.the-numbers.com/custom-search?searchterm=%search_string%',
      'showByDefault': false},
  {   'name': 'TMDB',
      'icon': 'https://www.themoviedb.org/assets/2/apple-touch-icon-57ed4b3b0450fd5e9a0c20f34e814b82adaa1085c79bdde2f00ca8787b63d2c4.png',
      'searchUrl': 'https://www.themoviedb.org/search?query=%search_string%+y:%year%'},
  {   'name': 'TrailerAddict',
      'icon': 'https://cdn.traileraddict.com/icons/favicon-32x32.png',
      'searchUrl': 'https://www.traileraddict.com/search/%search_string%',
      'showByDefault': false},
  {   'name': 'Trakt',
      'icon': 'https://walter.trakt.tv/hotlink-ok/public/apple-touch-icon.png',
      'searchUrl': 'https://trakt.tv/search/imdb?query=%tt%',
      'showByDefault': false},
  {   'name': 'TVDB',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAADGUExURf///8bGxqqqqqqqqqqqqqqqqo2NjVVVVTg4OAAAABwcHAAAABwcHDg4OBwcHAAAABwcHBwcHBwcHBwcHBwcHBwcHBwcHAAAAAAAAABVAABxAABxHABxOACNHACNOACNVRwcHByNVRyqVTgcODg4ODiqVTiqcVU4VVVVVVWqcVXGjXFVVXFxcXHGjXHiqo1xcY1xjY2NjY3iqqqNqqqqqqriqqrixsaqxsbGxsb/4uLGxuLG4uLi4uL/4uL////i4v/i/////0lx5+8AAAAYdFJOUwA/R1BUYHZ+hJ6eqqrf6Onp6u3y8/X5+1fyvVQAAAFUSURBVDjLzZLtWoJAEEa37zRL0z6GpWAkpDW0XMRMNG3u/6aaXUJJ8W9P5w887GFmdvcV4g84bFguNjQ2HAtxAoAIAOGzUnEcKxU+gfmUA6fiCnhZTanMOCwMuBMdBJzTZxJ1fc/gB/0JUVoU6YgWwBd1pXTXSEf2aWobI7ZZSMlzvF+4TkSKx+JOLCAlW+tsyOUKQmKrLZqKfHdb8OSQjDAwgiZ3V3AD/nswMC2a00rB47/zIZvZslrQYAwW5jNZKbzBYhGCFaorxDykNkK2p8II0rSY4WHfDLh/F/5mF5oeKw4qoBC0toKiQO4IziuByodsAb1X3AVl5qhDK2jqOu7WbQ55DdDe5jXCB/VduU6EeUu4eJGHG36mRLPkJeoFQdCLhpOZucafzN2KS5NJHM9LkcxGuM5kRxzco001d8zBUqgRjoQ4q9WZWpl6Qe1c/Ae+Aa3UZLmlWGG0AAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.thetvdb.com/search?query=%search_string%'},
  {   'name': 'TVRopes',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEUAAAAxRmP57Df5vyj8+/egqrfn6e15h5lZaX/Jz9ZFWHH875v50Df988362W+ulkBC9VAnAAAAAXRSTlMAQObYZgAAAkhJREFUSMfEk60OwkAQhCvOEbD4Da6AuLFNaAKGkPCgWM7xI4o9QUIlYPoQSMiGNMult1fJpydfZ+fS7H+sHmVfxKwbuL7MAbB5WjU8AqD5Nek5A0VFNEl59gA8Ec3LpAeWGFVlnhegoC+aatN6GKcUarhPi7LCE6hIcIrITy+UVg2994HLxU1SXDvQBCFtK16bZxLqyHWd0Kz7wSUYEmIvOABTkZCrofSeBozVK8lQhTSqsy4mDOUui7EPzjuV0dC9NUmhLrcfk/pTbWWDvM4UlhI6RQNisnJYjBGYIjhMeRcrr6GbFi/xaKb3blz2mD7VkjFOw0AQRbdwErmg2ALF+DQubNI6EigKlQsUEiqQUIzpXIBMKtOR0gUguAwVp0BC4gbMeBL/lbNOz7e0O1699cwfz+dvpfdDBz/fX1rr4fmMHuXwyjyiWmHQ06RVsSruVY/WouRjV6JGBIkOVb+i7aqGKPASO3RN25IPR1xDYIXUmLZXPpxTcKTs0GW9kZ4oeLdDyMJ5b1qQPyFNNzHV288piE0INYq9GOaskLNJM8DZLqTOxN4FzO1CYk/MPXRCkbyMufOdkFuxvdpc2Qk5OUGxiyMbVCdaDqSyTmjO9uplDzTij7C5E2VqWwAqH1JLfbNu/C8RjxTLC9pfknvoOfptJtAZz35TudlvtEZ72Wn6EmC8MCdoDcrgUcKcQM9bKMEdtBI/VVQ2g6Af25Bzp806IoSmotyE3Bx9M+Qsbj98/22ayNskTTNl0fFivZ41d8IwUP9efyK8ybskjbpNAAAAAElFTkSuQmCC',
      'searchUrl': 'https://tvtropes.org/pmwiki/search_result.php?q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'TV Guide',
      'icon': 'https://www.tvguide.com/a/www/img/favicon_32.png',
      'searchUrl': 'https://www.google.com/search?q=%search_string%+site:tvguide.com',
      'showByDefault': false},
  {   'name': 'TVmaze',
      'icon': 'https://static.tvmaze.com/images/favico/favicon-96x96.png',
      'searchUrl': 'https://www.tvmaze.com/search?q=%search_string%',
      'showByDefault': false},
  {   'name': 'Ulož',
      'icon': 'https://ulozto.net/favicon-32x32.png',
      'searchUrl': 'https://ulozto.net/hledej?type=videos&q=%search_string_orig%',
      'showByDefault': false},
  {   'name': 'uNoGS',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUAQMAAAAmpYKCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAGUExURcIuFP///1hzcc8AAACXSURBVCjP5dHBDcMgDAVQIw4cGYFNwmIVsEFWYoOuwAblyMEqjalSWxEskH7pS+9o+QPcLf7o43QSzguXhatwWxjZWxCOwn5YF7Bpc2lum9mmzK0rW7W5AYXfwkHYL+wS2+a5TWHrOrdqbMCv3dUB2fRGVY+1LnbkBpFsyaj6aej7i2yG+/Pn2HeyJrs+blBki4YMDf45H2h2eZI+A8LwAAAAAElFTkSuQmCC',
      'searchUrl': 'https://unogs.com/?q=%search_string%',
      'showByDefault': false},
  {   'name': 'VHS Collector',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEUAAAD5+fmUlJRPT09kaVR8AAACCUlEQVRYw+3VMY6bUBAG4MHIBQVJxREcKQegSMcRUMIA0aKIOhVH8CWQIqWOFKEUe4R3CY6QFKn2ACt5Z8Z+zABau1l3/JKFn/iM3/Dm6cGWLVu23DEjXklFoL8GSgI/T1fyj8APuJIPbwN2w/CHrv9/05cjXWUUDhx3BogFl1sHiBmXXdPoL3LOIDyDpDEgvhQpABCrOfAPqC6gJ0ogVxAiPtBbeL6AEZFBqyBCdECZg07BAQswIBE/KqBPbgB5pPr7TAFitwAZgeMEdvILBancQAXBAuz5iSG6CcSIzgAuqiUArwIa57AzINK/UBCUM5AZwDcaCKoZaC2gqmqI56C2IORxVMwmWS5AAVE9A9gZIA2xNyAgUDoF0hBpo2CHLB4V8HqnuQJAEW4GDq0Bo4jGA2mIxIIUJc4DboixMyA+g84DXm8L/JZvDOj6zIJIQOEBNwQeYbWzSg/ItwsQ/mLhQYz4BZ0BLHouQ8FnBAbfh8Gv5CcCRwFy51vJF44HoQJuiK8EIplYT0AyKmBc8fui1KMH6RwUAB95Dm4CkQIQYKqQxAb0MrM1cB6MrwDwIEFsViDC0oJ8BfZYecAFtitwwHoC6QrIzHMLuiV4ZzoK9gvQowQmILt11dW1gnhRRSLgUUGweA+ybA+gIDydnsDk/YkCAu5/JN08Fm8erLeP5i1btmy5X14AdyCxIih+5IwAAAAASUVORK5CYII=',
      'searchUrl': 'https://vhscollector.com/artwork?search_api_title=%search_string%',
      'showByDefault': false},
  {   'name': 'Wikipedia',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAGFBMVEUAAAD+/v4FBQVFRUXQ0NBvb2+Ojo6vr6/DA8rxAAAAAXRSTlMAQObYZgAAAUpJREFUOMu9lE1ugzAQhdMbdMJP1pkEvMahBzBRugf1AqCoe+j9pc7Mk1OBQJWqKrMwY39+8zQYvJN4oUW87ixoJVb3Rw2tBgRrkj8A2ojngIvGW6Jj/fVIBdw8M98PHXMxvns+WXrXUhnzkejA3BNddci5gofXhDpuiZKCdE8AmAxcVdfUJIqSADJ2Nsp8GElkNYBITzKmninVhKYWQE2CmfSZs+kYwWAmDR8beUIGkPDZTArbm7sHyGAiLepsXwFgCVZnK9wDYKmFiU5EDYAls7K+ywhsqYRVkPwYAVo0nVZs2gg07NX6iWsZQwSxxbSQimjvB+zZSfFUTLLzDORiMvXkuUd7ADAJF7WvhjAHHX86OxPBM9AwV3bwbgES5hHHvwAp3uzE/QKQdxCGBcBBU17QEtyw9ePXj/o/f84Nk80rY/uS2byWvgGb7GoMA0DhoQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://en.wikipedia.org/w/index.php?search=%search_string%&go=Go'},
  {   'name': 'WhatsOnMubi',
      'searchUrl': 'https://whatsonmubi.com/?q=%search_string%',
      'showByDefault': false},
  {   'name': 'WorldCat',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAMFBMVEUAAACpMG8gebU+mjxgSJT1gh/6+fjc5OfuzcityMv5rGt0tnOZaqGilMHQjrBcncm6xbD9AAAAAXRSTlMAQObYZgAABQ9JREFUaN7VmE3ITFEYx8/qzFDUbLCYLGZBVha3SLaTj2I5yOr4mmF8XV+vrzCKl5WESBIblK0iWSn5KAsLkaLYyELSuyA789479/3dM88557pmw2/l7e38Pc///5znnl71X6A7h65+SHh39Yopf/zQ9SdNeFZSQR9+37R5o8qwLTsOq8uUcKzp4Ly32nZbWWjO51nmO3+jsfCnEeclyz0Cext9fijY2XSz0lPAxKTAAkqoPCknsLuREE8JXmqWE9ibCswraAAPZAcJ87OfRQMFKehGygKVsqPppecUqAwEFroLKJ7EbVTgcqD4Lmxs4IErglUv+zT7vA2MESlU7MMfroy1EzoHx5R3jFLSm7I53/NbcSgQQiN16DXnXwjPwiGYRI7zzzkfZJoVwg7Gtvg8N4EQTk3ZV3BepviDKSq3/y7kQ6gEhq4oRcMY2gXoyRloh1IkBKYgK6C99dzXWp/6tzPGnyIhZHO8YvDLby9rU9S/mNBVmmd5+DSt7lPN4rkJpPjD8jBOh6I2xFzjTJEQppEBBRQo7M0L7LR2X7Umee4ViPODvCzrQPLZMUeMwX5rCva4BOqxspnIj8Epa3merLmYPTyICLAMDAKS2CmwID8GqwwtSOb4Pwo6S1ElbKi5Ma5Jnp/8wCATo2SWV6DKGDBIBSVU8ldhGmMQ7OGzT2AnV4kS6t++nD14Nr3U2OgW2DG8TfS5b2fag38eF0lKgRkDgVfKxS4Envo8CL/mjtODJwXNNnChGU3jFlCXwhu5Sg6e58nO8CeB4Z7tuUz6NQUES6gb92dBdZ40VwU+6cymEQtlYFybd0Qwys9ipX1Xf4LGBOcDJ/CaN/Rgr+fdfNr8HGm17hr7fsW8L9jrPra2+qyxc/jIJBX3cLo1SRr0Y64DORb0oFsJt9m0wkW+ji66qcA6TBAuhkvY0koxlgkGEzLmG58FKT3LhJ5lQsplvwA5nMRFTMiaGPMKSBNmKSYBhdjnASbMFFtJN2CB8aSACVVioIecwph7DpgE7Vlr+BA2gfvUE48MuvCYsN7kY/gsnnqE6TPBuGNQ2iphvt+EniMGSmCkg6NEDAr03ryCywQEiEGBHYScpunEYAvAiaBAVeSIAD4GBDQ58n2q2387qUyE9sItkWNioj4aLb1isiTkbsuWOTHExDC51I5Gfe6rAZ3h7brtXvTQ2DH0ciaMK31vUmCpYRosC3TU54E9izdZCf3buD1KWIzCRH6xbUp+G0/liID+lF6FfVEKw9+ZaPwyFECHVS704PE1rpS6F6UsjZW0LatviRCAKGOJDC4xCIuCAqlVgAOYUCSADRRQJIAHSaH2IhuMCAJdhwApYCS3k98YOQd5n91G6osom+FJBB1ZCnShaSBaJD+P0ml8kKWdTxS5jcJqSG8m/z8d5PeBTSeyeXT14MGrjyKRbze/kYSPXriqW6QAdvvgKmHBGiXo3AsXQAfMkc224gLUgRYbTYLnwHCRgQyh2IZ46IWyVjmp+GxYzEdBWBC0AQexUA5yscKYIkMsKFYgAQpgCrwKwocHhgJkB8UD9YCPWrgDFC46z29tFXQA+vBUEY/Se00DjGGBxLVH/fQepsdpgJtYTLuPAhpgispQoQEsLIE+PWIB3dYIBWBA+QJIcLQCqq0c46o8W1qwzozYQazKo0dwEAEaGEmgp0YTuKOgrIk0MEKM4+ov6ZLAKD3QQHm63IG/Q5+9e3dc/dP8BpiVd1yLonswAAAAAElFTkSuQmCC',
      'searchUrl': 'https://www.worldcat.org/search?q=kw:%search_string%+%year%&fq=x0:video',
      'showByDefault': false},
  {   'name': 'Yahoo! Japan - Movies (JP)',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAD/ADOkL+w0AAAAAXRSTlMAQObYZgAAAJNJREFUKM/N0DEOwyAMBdCPGFgqcQQuEjXX6hZ6M46C1Au4UxkQ7k+Qh1bKHk/P/n8yrjabav5F1GLZAV7XukOAVNl7D5aEvacSDa45InR4cYx8Ryie4BIzN0CR4Bux5QVh4oEgxFpkIr0qYiXipyAWImg2MM6EH4ZO4B93w2K4GXAKl3eEAS/zDf2AU6JONFRcZL68HUrWMWSBQwAAAABJRU5ErkJggg==',
      'searchUrl': 'https://movies.yahoo.co.jp/find/?query=%search_string%',
      'showByDefault': false},
  {   'name': 'YouTube',
      'icon': 'https://www.youtube.com/s/desktop/640aba68/img/favicon_32.png',
      'searchUrl': 'https://www.youtube.com/results?search_query="%search_string%"+%year%+trailer'}
];

// Class of these should be renamed(search: "class of the special buttons").
var special_buttons = [
  {   'name': 'Copy Info to BBcode',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAACMjIw+cENnAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC',
      'searchUrl': 'https://dummycopy.info',
      'showByDefault': false},
  {   'name': 'Emby',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiAgMAAADWy+6dAAAACVBMVEUAAABStUr////uFVkTAAAAAXRSTlMAQObYZgAAAVZJREFUSMel1sFtwzAQRNEQiEpQPy6BATwHpy+WwINUZWDY9M8OveDBe/2gnyURor4+nJqFcs3KpqzsuiRFqgkjXTNGyhglkATkDNDESAmTQBKQM0DOADmTQBKQM0DODKhMzIC2izMD2qszA9LVGWZioJyBykqAdmXQpgwqBsVyM4hf+23voP1ejneQ7uV8A5VH6TO0Pco5Q/uz9AnSsxwOlVHOZtD2KiyCeZSzRUiUHqAiyhmgTRQWPRnK+R9SKI01JZYDZxOFRfXFUDqMFRgrHcaKMZRDg/E1bTDucDX+37oG49cjmHgPumDifbPtRjkEE59PE0x4pofv0DJKM4a9o8iw37oiwx4VTIRugjHI1wAJByiW6pDWUDXInPSdCPRjDNDFGCAoOxq+obQ8GZiZWZ9AA1qedDNUlyfqDC1Obh9jDIJxaPkl4gMzQzAOLb+s5jEmmT+/vrUeJElMGgAAAABJRU5ErkJggg==',
      'searchUrl': 'https://emby.media',
      'showByDefault': false},
  {   'name': 'Jellyfin',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAWlBMVEUAAACaY8WgYMSnXcN8b8p1cswklNdudcwZmdlGhtJbfc8vkNVies2UZcY5i9SHashoeM0NntpQgtCPZ8dVf89qfdMHoNuUbM9Pjd1if9OLcNBAkt4GqOOeaM3KneA7AAAAAXRSTlMAQObYZgAAAyBJREFUaN7t2dtuozAUheGkHFJOCTWkTGjz/q85xpuwBCuuCTYXlbouZ1Q+/ThqED387bfuOOyw46Ioejse73cguwh6FYwdhIGoqqrbx9CAFoRouj48IMLbKDQwdhOaC4zgwoO49HFYYUlc9OI4dATOGsQOERBg7CsEMyI7kcR7R2gjvAAiFuIUSLBHJDD8D2Ikuq6DEI5ARNcNGT0iNHEKKeiZf2ziscEQ6PAQQBxkIHTE6VoGICDAAHEqPYWIBDEg1GUZ5DZNAoyHUNf+xHHYQ4BhBCFKDwEE/Xd8gnDbaJBgJbThIYCgQdBEG/I2YSDyvG23ExB4ImwlBHATIgxEG/SsYVyFMEZQAavrSXjRiNYTNYhtJ8ECG7kQCsZLESywIQ1KqTYLchJJklgJlYUQ4pgNZQRDZP7E+C2xINQjAsTms44Hggyl1Bix2uCz5q+6BTEJ2cuCm4CRyQJFsAHCJyKeCDIgrDIg/BBRLzJAnDOvCAj1woCgtyaCT4KJMp9nQDh7R0xEbiFchlVYRpQLQwSZbwQeOmxEkQaKKHPKOK8g8NBBBAs2oijSdFMEBBBzY4rQhkNYH9ESYQRk+Ee0avbjX0T4R7RqllEURoDhjMBIMETLRAFiewQEIRbGJKTvduJIBEVAUJThICgCBIQZYSrYSIkggQhbRP4DAYOJioiZ4CZSEBah4sczawQIGOlIvDsIOgw6CZWT4CAgVF1FjfWwq/wKxzTARGoj6FXHxiFCjwgRPAk0MCFCeIIjfAkIMEBIRNPsS1SGuPgRED74j0RVWOLjwxgc0XR+BIQFMX/TG0RYEovX1dsBNyHCJiVlAUZkCAiyJHnt8k6C37knZqXj1eJZRgITJBhCDFk+LJvtPK4YNhEQPr+fERD4QVyvJUIDMo74nBG2iCffphTxTCCiulcUkVifa9TqCBDa4AgSiKCDgDARh2kvR/BtskfAcEdAIIIFfGSBdF0XJgIATV++H4XY8zZ9A2Cl7/tJ0CNBuT5NFMDTF9/2gQVwWDNjXGW3280IQrCgL44dXp4xcrP237Qv2aPBXPpvv2P/AVCXgkok99PsAAAAAElFTkSuQmCC',
      'searchUrl': 'https://jellyfin.org',
      'showByDefault': false},
  {   'name': 'Plex',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqAgMAAAApTywEAAAADFBMVEUAAAAzMzLloyOHaCswgFEpAAAAAXRSTlMAQObYZgAAASdJREFUSMfk1r0NwjAUAGEoGIF9GIGCBClFBsgI7JERKEiUklGyRKYAu7niXiy5Q8LtJ4XDfvk5lFcTrmuiU2xNsvOOXbhkdNHjnt34Oa+ikeKYv7Fu+q45tjbZFNs92xhak+0d25DsGdsj2Su2rmA9obI22yojdIxtI1Q2JFtkCsUUijkUcyjmUNtgU+iuzTZCZRoLTGOBORTTWGAOxRyKORRjyRQqI3Sxsds2Qku2yhSKaSxkg0ynhGnT6v4Dh4TpcOv3erI5E/N22jrPC0YmpqcB5lOwkYkp09Znq7unyax7hjAQNnbaxkDIGAgbA2FjIGxk2si0kSkj00Zm/TtuKxiZWDwQGAMhYyB+41vjMzrJkdkexNfGxNc2xdumxW0h3jY0XgAAgEgBSKfkENwAAAAASUVORK5CYII=',
      'searchUrl': 'https://www.plex.tv',
      'showByDefault': false},
  {   'name': 'Radarr',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACTFBMVEUAAAD//////////////vu1t7j/zFCGiYz////+/v4xNjs7QEUpLjP////7+/smKzBHS09VWV1obG/////////////Z2tv/////////////////////yUdQVFg/Q0imqKp2enz19va2t7n///+XmZyTlZj/4JOOkJOEh4n/8tTY2trV1tf/9+L////r7Oz///////84PEEuMjdLT1RCRkv/zlmMj5FaXWGVl5plaGzq6+yYmpx0d3rU1dZ8f4L8/f3v7/C+wMG6u72bnaD/5qmgo6WsrrD/67mxs7XOz9H//PT///////////////////////////////////////////////82Oj//xDX/xj3/zE2JjI9SVlr/0mVdYWV4e3//1nLn5+jg4eKGiYttcHSAg4b/2XzMzc+wsrTGx8ijpqj/5KCdn6H/7cC9vsC6vL2+wMH////Q0dL/8c3k5eX/+evp6en19fXy8vL9/f3////l5ubz8/T///////////////////////////////////////////////////9YXGD/z1r/13b////c3d7HyMmqrK7s7O2Ii43/24X4+Pjy8/Opq63/7sT4+PjExcf9/f3R0tP/89bf4OHl5ubl5ebk5ebj4+Tt7u7/////////////////////////////////////////////////////wjAkKS4XHCEaHyT/wCkiJywYHiMfJSobICYhJiv/vyQeIygcIicVGh//wSz/vyctMTYSGB0KDxUSFx1vUO58AAAAsHRSTlMA5eTH5u77+uPx/fz+8uX++/r31Xkg9drSOhIJ/Pv79vb19fPz8/Pz8+vq6uno57yj/f38+/r5+fj49/f39vb19fT09PDw7+7u6+bOybimlHFgWCkeGAb+/v38+vn4+Pf39vb29vX19PTz8/Hw7e3t7Ovr6+jn5+bm5d3Y18G0sZuPi4J9ZF5EDwz5+fb19fX19PT08/Pv7ezs6+vq6ejo6Ojn3suvl5GHbFRQSjECARZmqHoAAAO5SURBVEjHjZXle9NQFMbblEFSN9Yic0UmbGMbc2FjbsBwd3d3d3d3t+ZG2yTrgH+MJPfmCQ8k3c6Hfjq/5n3Pvee9Fq0uDZw8Fg509XwabxlVDdhcqzObq2/W1h8OThy5/WKxq7HCSQHAMt7mjM7+wRH6J3Y3+HkqSsrF8KBso6voQsL+H8UZKRJDaiVSFbW7ihNZ6XfVSXJjlKV4llO+Qnlurwr1TTQVFM5kGfmPneltO/IcIKqwoKT6bvj8d2PgK+Gj5H7HbhzD8MJ8j0KTHChtdJ2YYAicTiYZMuqcilnlwrBpyzlescILa5OtH42snEgDJMnW4HI7RB6lANUK66lreBOc9B9gW6IArZjarCLurXZkxbGZsH35DxgnA1SS0jtlukpY8Zfp0IoALm8giueaAWMWR3I7cGTFz4uKFYqblYy9H28CjI3FFs/BkPskB7LizM4I9A8aA3SEpldOQcjBPDuAIy7bSHRfMAEikVhk/T70kf01UQreFt8GImgGRIZii7aMQUh7BRDU2xLNyzptDEBk5h6k61CLg+XUEWdnnTMCUMWHlk3B4UEeaHYqVhiQdnieKaBaye1AyFS/IH9EsFedMQOQrsmzNStJw/KhSJWdZgAqOnblAbSCt5dwJJ8SMAc0K/TK6ZBopUhuxlFzQLeycDaU5eOjw0dGAcTjufATbdRoAFo5EDQqUliQUJI+JwjsLWFLzU0j+bkdaKwKMPyzPJwIiNNXpyM1r/OeyZI4z+pec4Cmx2qL4U5y/NqMYfd/VeJzjQAkfo52yNtLeQHk425H+rWg2eWLRe7sQ2qep4s8Q0rZeM6s+p5BLTUkHVDFL3uKLsTBHHXnGOHJi0yiVwscWyarA8oqbEPira2pcKt/risgwuf1FX3oBRoQ/2vZdvsoUV02cQ1RcGa+RQcet8+QfrcpwOSh9dooX+V7KEZZZzGlseAdClkEbMIK81O3K43btMA4kDMMs09KbXIdg+06UD4Nxw65oQ74u8OrRdKahlDfv+l6vNKPWWGh0FvL81roWXvnWf6tD7UgG9f7C1eQMFbZpZuInm8Gcf+Z8EpbMQymt7tlBgpue0t914DFqOaH0iRq+c5Ct9W9f6ePFaD4ulWhs2avXF+WH/CC3bvUaxfg48P7kwtOQfFGNam7ygEYTuRFDr4JZU2uIjhKkxpvu+5jRfhSc2BBzr235/RRGtsoykpLFQBgAWVfdws/e9EyUl0KhjJuVK+oKW+q2nVSf6ESygoe7woEOotOTUjc9weXiUPgDnteIQAAAABJRU5ErkJggg==',
      'searchUrl': 'https://radarr.video',
      'showByDefault': false},
  {   'name': 'Sonarr',
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://sonarr.tv',
      'showByDefault': false},
  {   'name': 'Trakt-Watchlist',
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMAQMAAAAF7N6xAAAABlBMVEUAAADtIiSf7FjNAAAAAXRSTlMAQObYZgAABW9JREFUWMOVmE/K1TAUR79SoTOrM2d1CQ4dCHVJglOxigtwSxU3UnADBScRS+MvuTc5CSroQ7/32nN7k9P8aZOHyGd/eFg5Oht0POjzR3Qn8jD1iIv02UBcZJ8ZxC/7DJygev5ZQV0+KgIKFQ2gLh91BOVSLGLp0VWqbYUZoqjiMPToqK5eGOiDTtSgBZRjx1hLnVt0WShRoFP5aIEBxKFXdmvQbjKn3821QVbUh/K1gBS4eYvl7BPoykV5I6uwEXTqoDTzlgJBh4JVhF+my0H7w1qbeUxBa0UflCY4OVOSxZFl2A1N16qTc0F3ylK64b2oHpOj/PNytFyThRoKShAcrWFQhqGgUzU6HG3nw6ZqFXSkI0fxeL2qSpujXX9q/9yPOaVx9GGIVxX+eE4qeHGkE6F2+DEosKBbJ86qNV0POjM70o+9as236qDghPLlH6rWcqfD0VBQfZxIa71SksGQJG8n0tqCsh0VxQut3OSHnU7fAa3cJ5Uoo10/0UqVzcULpeocaOVBcxU0tVoxKUggo4e511KE7kJC+mq1bFQXtHRaz1QbFWJOa6f1KqF9NLR1Wu/17ShkhFZMVx/J1f6h9VHV1ZmCjkZrzM5+XoWjpeuSRDA0CqE13zkmX7inFGgtV85sKKVAaw12p1YhibdailZVHaXsaOXqKnqpCK0dpDJ7rZRaF2QUeq2Kbp3ptLyuU0ZnpwVKcp2WRxk6Oi1Ho5C+Oi0rNqFgCC2vkaG90zKPcxCy5kILdA4pEC3PEEBoOXoQGmOv5eWC0LLaJnQ4Qgs03Z1WRW9AaKUUNwgt0F5UVHPXArlKvGbXss7xoiBp3ZNpmQlIB3HMWqAPjqYYP5oWaAnlWbIXLZBrxYOBoXv+pCBpbWfVAnlrharVo3gsl2uBTm+t+Z5Dh7zzjmmcqVuWDyi11hg/uRbIW+tj/LKD9FPIW0v34jfkrcUdBLkW9x1EJwSBpBVpY5B3QnoGyDth7U+gwzshvRDknZC+CzKtSI8H+dhinFAN10IMVMYWYiAbW3R5kI8tBgrIxxbDC+Rj6xNiIBtbXxAD2ZRxJDGQ9Q1rrRMxuo1pBcToojZlXEUMFEwr3oiBbMqIiIFsyoiIgWzKiIiBslaMiDEDWCeMVQzkWlsVA/lMuCLGVTYTLo3YdCekvzYTzogx6b3L4RNioJe5kNHFQDr5LFdtQCxPsDYtmxBiQmUyt+gqBvowWBkuxtNBd9IneMRA7oOY2sIfUh7sYjy/1K+sCMRAh1UMsfxAtCes6yCmc4bOEotYTOgWKiUgVh70YbN6ITZUtJoNYkN5qbiWHNqIjRU9tgIQM6Q/9yOrFmLNu43JIDYb2hViWojp/2rog2khpiuF8vPHtBAT2gx9MS3E/HVObfnNtBDbgr9SCmWAmJ9XwHfTQszfRZX2Z9ZCbHCkev7IWoiVl1uhK2shJtOpvEg/d+Jinx3F8vqN2KxzhibTQsxe2nnVR+z9dvmr/m4LBMRepaqxrGjFniZXFiOtmJwM6b9y92KKZuHTik0qg+VSK3YvGqcssvZG7FbkyNLsaMQu5Z8MxbygQywoz+xIwzw0Ym9ZIaZC70Ys5VjbJSdiqeTN0aGgvYoFFqrpz0IV5zOyvGVRnMW+2qKYpfRdxWYdjwXdiqKhV2WY2mU7hW0s2/vFfkqwsw+g3wtLeot0ZBn2UtTNxoLvTQTP129HXCnOp0/ft+i3PoJdpMwzyPdIDkWUg36bhU2r9e+bM7Eg9mo8wwBiY8ju2gTKxwP55g7tlpE9P9DhaXK7/b7BtXnMACrBE98gv4GztcwC8sLopP++cdeMsP/YJGy7DYiM5AOxI8kxiA2u3xB9A9QeiHD0C22p6PDcZ/DbAAAAAElFTkSuQmCC',
      'searchUrl': 'https://trakt.tv/oauth/authorize?client_id=325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2&redirect_uri=https://www.imdb.com/title/tt0052077/reference&response_type=code',
      'showByDefault': false}
];

var icon_sites = icon_sites_main.concat(special_buttons);

//==============================================================================
//    Replace Search URL parameters
//==============================================================================

async function replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id, mPOSTsearch) {
  var search_url = ('mPOST' in site && !mPOSTsearch) ? site['mPOST'] : site['searchUrl'];
  // If an array, do a little bit of recursion
  if ($.isArray(search_url)) {
    var search_array = [];
    $.each(search_url, function(index, url) {
      search_array[index] = replaceSearchUrlParams(url, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
    });
    return search_array;
  }

  if (search_url.match("%tvdbid%")) {
    movie_id = await getTVDbID(movie_id);
  } else if (search_url.match("%tmdbid%")) {
    movie_id = await getTMDbID(movie_id);
  } else if (search_url.match("%doubanid%")) {
    movie_id = await getDoubanID0(movie_id);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID1(imdbid);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID2(imdbid);
  }
  if (search_url.match("%doubanid%") && movie_id == "00000000") {
    movie_id = await getDoubanID3(imdbid);
  }

  var space_replace      = ('spaceEncode' in site) ? site['spaceEncode'] : '+';
  var search_string      = movie_title.trim().replace(/ +\(.*|&|:/g, '').replace(/\s+/g, space_replace);
  var search_string_orig = movie_title_orig.trim().replace(/ +\(.*|&|:/g, '').replace(/\s+/g, space_replace);
  var movie_year         = (onSearchPage) ? movie_year : document.title.replace(/^(.+) \((\D*|)(\d{4})(.*)$/gi, '$3');
  var s = search_url.replace(/%tt%/g, 'tt' + movie_id)
                    .replace(/%nott%/g, movie_id)
                    .replace(/%tvdbid%/g, movie_id)
                    .replace(/%tmdbid%/g, movie_id)
                    .replace(/%doubanid%/g, movie_id)
                    .replace(/%seriesid%/g, series_id)
                    .replace(/%seasonid%/g, season_id)
                    .replace(/%episodeid%/g, episode_id)
                    .replace(/%search_string%/g, search_string)
                    .replace(/%search_string_orig%/g, search_string_orig)
                    .replace(/%year%/g, movie_year);
  return s;
}

//==============================================================================
//    Convert IMDb ID to TVDb/TMDb/Douban ID
//==============================================================================

function getTVDbID(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    "https://thetvdb.com/api/GetSeriesByRemoteID.php?imdbid=tt" + movie_id,
      onload: function(response) {
        if (String(response.responseText).match("seriesid")) {
          response.responseXML = new DOMParser().parseFromString(response.responseText, "application/xml");
          const xmldata = response.responseXML;
          const tvdb_id = xmldata.getElementsByTagName("seriesid")[0].childNodes[0].nodeValue;
          resolve(tvdb_id);
        } else {
          const tvdb_id = "00000000";
          resolve(tvdb_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getTVDbID)");
        console.log("IMDb Scout Mod (getTVDbID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getTMDbID(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    "https://api.themoviedb.org/3/find/tt" + movie_id + "?api_key=d12b33d3f4fb8736dc06f22560c4f8d4&external_source=imdb_id",
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (String(response.responseText).match('movie_results":\\[{')) {
          const tmdb_id = result.movie_results[0].id;
          resolve(tmdb_id);
        } else if (String(response.responseText).match('tv_results":\\[{')) {
          const tmdb_id = result.tv_results[0].id;
          resolve(tmdb_id);
        } else if (String(response.responseText).match('tv_episode_results":\\[{')) {
          const tmdb_id = result.tv_episode_results[0].id;
          resolve(tmdb_id);
        } else {
          const tmdb_id = "00000000";
          resolve(tmdb_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getTMDbID)");
        console.log("IMDb Scout Mod (getTMDbID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

function getDoubanID0(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 6000,
      url:    "https://movie.douban.com/j/subject_suggest?q=tt" + movie_id,
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (String(response.responseText).match(movie_id)) {
          const douban_id = result[0].id;
          resolve(douban_id);
        } else {
          const douban_id = "00000000";
          resolve(douban_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID0)");
        console.log("IMDb Scout Mod (getDoubanID0): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID0): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID0): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID1(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID1): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 8000,
      url:    "https://www.douban.com/search?cat=1002&q=tt" + movie_id,
      onload: function(response) {
        const parser = new DOMParser();
        const result = parser.parseFromString(response.responseText, "text/html");
        if ($(result).find('[onclick*=' +movie_id+ ']').length) {
          const x = $(result).find('[onclick*=' +movie_id+ ']').attr('href');
          if (x.match(/subject%2F(\d+)/)) {
            const y = x.match(/subject%2F(\d+)/)[1];
            resolve(y);
          } else {
            resolve("00000000");
          }
        } else {
          resolve("00000000");
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID1)");
        console.log("IMDb Scout Mod (getDoubanID1): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID1): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID1): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID2(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID2): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 8000,
      url:    'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL { ?s wdt:P4529 ?Douban_film_ID. }}',
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (result.results.bindings[0] != undefined) {
          if (result.results.bindings[0].Douban_film_ID != undefined) {
            const douban_id = result.results.bindings[0].Douban_film_ID.value;
            resolve(douban_id);
          } else {
            const douban_id = "00000000";
            resolve("00000000");
          }
        } else {
          const douban_id = "00000000";
          resolve(douban_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID2)");
        console.log("IMDb Scout Mod (getDoubanID2): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID2): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID2): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getDoubanID3(movie_id) {
  console.log("IMDb Scout Mod (getDoubanID3): Started.");
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    'https://www.google.com/search?q="tt' +movie_id+ '" site:https://movie.douban.com/subject&safe=off',
      onload: function(response) {
        const result = String(response.responseText);
        if (result.match("movie.douban.com/subject/")) {
          const x = result.split("movie.douban.com/subject/")[1];
          const y = x.split("/")[0];
          const douban_id = y;
          resolve(douban_id);
        } else {
          const douban_id = "00000000";
          resolve(douban_id);
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getDoubanID3)");
        console.log("IMDb Scout Mod (getDoubanID3): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (getDoubanID3): Request Aborted.");
        resolve("00000000");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (getDoubanID3): Request Timeout.");
        resolve("00000000");
      }
    });
  });
}

function getAllocineID(movie_id) {
  return new Promise(resolve => {
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    'https://query.wikidata.org/sparql?format=json&query=SELECT * WHERE {?s wdt:P345 "tt' +movie_id+ '". OPTIONAL {?s wdt:P1265 ?AlloCin__film_ID.}  OPTIONAL {?s wdt:P1267 ?AlloCin__series_ID.}}',
      onload: function(response) {
        const result = JSON.parse(response.responseText);
        if (result.results.bindings[0] != undefined) {
          if (result.results.bindings[0].AlloCin__film_ID != undefined) {
            GM.setValue("AllocineID_last_is_film", true);
            const allocine_id = result.results.bindings[0].AlloCin__film_ID.value;
            resolve(allocine_id);
          } else if (result.results.bindings[0].AlloCin__series_ID != undefined) {
            GM.setValue("AllocineID_last_is_film", false);
            const allocine_id = result.results.bindings[0].AlloCin__series_ID.value;
            resolve(allocine_id);
          } else {
            GM.setValue("AllocineID_last_is_film", "none");
            const allocine_id = "00000000";
            resolve(allocine_id);
          }
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (getAllocineID)");
        console.log("IMDb Scout Mod (getAllocineID): Request Error.");
        resolve("00000000");
      },
      onabort: function() {
        resolve("00000000");
      },
      ontimeout: function() {
        resolve("00000000");
      }
    });
  });
}

//==============================================================================
//    Construct & return Title/List GM_config setting
//==============================================================================

function getPageSetting(key) {
  return (onSearchPage ? GM_config.get(key + '_search') : GM_config.get(key + '_movie'));
}

//==============================================================================
//    Get site's icon
//==============================================================================

function getFavicon(site, hide_on_err) {
  var favicon;
  if (typeof(hide_on_err) === 'undefined') {
    hide_on_err = false;
  } else if (hide_on_err === false) {
    return;
  }
  if ('icon' in site) {
    favicon = site['icon'];
  } else {
    var url = new URL(site['searchUrl']);
    favicon = url.origin + '/favicon.ico';
  }
  const size = GM_config.get('mod_icons_size');
  const border = parseInt(GM_config.get('iconsborder_size')) *2;
  var iconsize = ('matchRegex' in site) ? size : GM_config.get('call_http_mod_movie') ? size - border : size;
  var title = (site['TV']) ? site['name'] + ' (TV)' : site['name'];
  var img = $('<img />').attr({'style': '-moz-opacity: 0.4; border: 0',
                               'width': iconsize,
                               'height': iconsize,
                               'src': favicon,
                               'title': title,
                               'alt': site['name']});
  if (hide_on_err) { img.attr('onerror', "this.style.display='none';"); }
  return img;
}

//==============================================================================
//    Add search links to an element
//==============================================================================

function addLink(elem, site_name, target, site, state, scout_tick, post_data) {
  // State should always be one of the values defined in valid_states.
  if ($.inArray(state, valid_states) < 0) {
    console.log("Unknown state: " + state);
  }

  var link = $('<a />').attr('href', target).attr('target', '_blank').attr('rel', 'noreferrer');
  // Link and add Form element for POST method.
  if ('mPOST' in site) {
    var form_name = (site['TV']) ? site['name'] + '-TV-form-' + scout_tick : site['name'] + '-form-' + scout_tick;
        form_name = form_name.replace(/\s|\.|\(|\)/g, '-');
    var placebo_url = new URL(target).origin;
    link = $('<a />').attr('href', placebo_url).attr('onclick', "$('#" + form_name + "').submit(); return false;").attr('target', '_blank').attr('rel', 'noreferrer');

    var data = (post_data.match('{')) ? post_data : '{"' + post_data.replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}';
    var addform = $('<form></form>');
        addform.attr('id', form_name);
        addform.attr('action', target);
        addform.attr('method', 'post');
        addform.attr('style', 'display: none;');
        addform.attr('target', '_blank');
        addform.attr('rel', 'noreferrer');

    if (post_data.match('},{')) {
      const dataArray = (new Function("return [" +data+ "];")());
      dataArray.forEach(function (item, index) {
        let addinput = $("<input>");
            addinput.attr('type', 'text');
            addinput.attr('name', item.key);
            addinput.attr('value', item.value);
        addform.append(addinput);
        $('body').append(addform);
      });
    } else {
      data = JSON.parse(data);
      for (const name in data) {
        let addinput = $("<input>");
            addinput.attr('type', 'text');
            addinput.attr('name', name);
            addinput.attr('value', data[name]);
        addform.append(addinput);
        $('body').append(addform);
     }
    }
  }
  // Icon/Text appearance.
  let icon;
  const border_width = GM_config.get('iconsborder_size');
  if (getPageSetting('use_mod_icons') && getPageSetting('call_http_mod')) {
    icon = getFavicon(site);
    (!GM_config.get('one_line') && !onSearchPage) ? icon.css({'border-width': '0px',        'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 0px 2px'})
                                                  : icon.css({'border-width': border_width, 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 0px 2px'});
    if (state == 'error' || state == 'logged_out') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(255,0,0)')
                                                                            : icon.css('border-color', 'rgb(180,0,0)');
    } else if (state == 'missing') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(255,255,0)')
                                                                            : icon.css('border-color', 'rgb(230,200,100)');
    } else if (state == 'found') {
      (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                            : icon.css('border-color', 'rgb(0,130,0)');
        if ((site['name']).match('-Req')) icon.css('border-color', 'rgb(50,50,200)');
    }
    link.append(icon);
  } else if (!getPageSetting('use_mod_icons')) {
    site_name = (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? site_name.bold() : site_name;
    if (state == 'missing' || state == 'error' || state == 'logged_out') {
      link.append($('<s />').append(site_name));
    } else {
      link.append(site_name);
    }
    if (state == 'error' || state == 'logged_out') {
      link.css('color', 'red');
    }
  } else {
    icon = getFavicon(site);
    icon.css({'border-width': '0px', 'border-style': 'solid', 'border-radius': '2px', 'margin': '1px 0px 2px'});
    (getPageSetting('highlight_sites').split(',').includes(site['name'])) ? icon.css('border-color', 'rgb(0,220,0)')
                                                                          : icon.css('border-color', 'rgb(0,130,0)');
    if ((site['name']).match('-Req')) icon.css('border-color', 'rgb(50,50,200)');
    link.append(icon);
  }
  // Create/find elements for Search/List pages.
  if (onSearchPage) {
    var result_box = $(elem).find('td.result_box');
    if (result_box.length == 0) {
      $(elem).append($('<td />').addClass('result_box'));
      $.each(valid_states, function(i, name) {
        $(elem).find('td.result_box').append("<span id='imdbscout_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  if (onSearchPage && GM_config.get('load_third_bar_search')) {
    var result_box3 = $(elem).find('xd.result_box_3rd');
    if (result_box3.length == 0) {
      $(elem).append($('<xd />').addClass('result_box_3rd'));
      $.each(valid_states, function(i, name) {
        $(elem).find('xd.result_box_3rd').append("<span id='imdbscout3_" + name + scout_tick + "'>"+'</span>');
      });
    }
  }
  // Add links to IMDb page.
  var in_element_two = ('inSecondSearchBar' in site) ? site['inSecondSearchBar'] : false;
  var in_element_three = ('inThirdSearchBar' in site) ? site['inThirdSearchBar'] : false;
  if (onSearchPage && in_element_two || in_element_three && !getPageSetting('load_third_bar') || in_element_two && in_element_three) {
    return;
  } else if (!onSearchPage && in_element_two) {
    $('#imdbscoutsecondbar_' + state).append(link).append(' ');
  } else if (!onSearchPage && in_element_three) {
    $('#imdbscoutthirdbar_' + state).append(link).append(' ');
  } else if (!onSearchPage) {
    $('#imdbscout_' + state).append(link).append(' ');
  } else if (!in_element_three) {
    $('#imdbscout_' + state + scout_tick).append(link);
  } else {
    $('#imdbscout3_' + state + scout_tick).append(link);
  }

  if (onSearchPage) {
    // Hack: Convert GET link to button to deal with same-origin problem (icons mode only).
    // Sorting removes event, so on the title pages same hack will run at the end of the sorting (iconToButtonHack).
    if (site['name'] == "TorSyndikat") {
      const button = $('span[id*='+ scout_tick +']').find('img[title="TorSyndikat"]').parent();
      const link = button.attr('href');
            button.prop("href", "javascript: void(0)");
            button.removeAttr("target");
      button.click(function() {
        GM.openInTab(link);
      });
    }
    if (site['name'] == "TorSyndikat-Req") {
      const button = $('span[id*='+ scout_tick +']').find('img[title="TorSyndikat-Req"]').parent();
      const link = button.attr('href');
            button.prop("href", "javascript: void(0)");
            button.removeAttr("target");
      button.click(function() {
        GM.openInTab(link);
      });
    }
  }
  // Hack: Same-origin problem with POST, so remove 'onclick' form (icons mode only).
  if (site['name'] == "SFP-Req") {
    const button = $('img[title="SFP-Req"]').parent();
          button.prop("href", "https://s-f-p.dyndns.dk/viewrequests.php");
          button.removeAttr("onclick");
  }

  // Call to the sorting launcher.
  if (!onSearchPage && !in_element_two && !in_element_three) {
    iconSorterLauncher(site);
  }
}

function iconToButtonHack() {
  if ($('img[title="TorSyndikat"]').length) {
    const button = $('img[title="TorSyndikat"]').parent();
    const link = button.attr('href');
          button.prop("href", "javascript: void(0)");
          button.removeAttr("target");
    button.click(function() {
      GM.openInTab(link);
    });
  }
  if ($('img[title="TorSyndikat-Req"]').length) {
    const button = $('img[title="TorSyndikat-Req"]').parent();
    const link = button.attr('href');
          button.prop("href", "javascript: void(0)");
          button.removeAttr("target");
    button.click(function() {
      GM.openInTab(link);
    });
  }
}

//==============================================================================
//    Determine whether a site should be displayed
//==============================================================================

async function maybeAddLink(elem, site_name, search_url, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id) {
  // If the search URL is an array, recurse briefly on the elements.
  if ($.isArray(search_url)) {
    $.each(search_url, function(index, url) {
      maybeAddLink(elem, site_name + '_' + (index + 1).toString(), url, site);
    });
    return;
  }
  // Don't check the second/third bar sites if a 2nd/3rd bar is disabled in the Settings.
  var in_element_two = ('inSecondSearchBar' in site) ? site['inSecondSearchBar'] : false;
  var in_element_three = ('inThirdSearchBar' in site) ? site['inThirdSearchBar'] : false;
  if (in_element_two && !GM_config.get('load_second_bar') || in_element_three && !getPageSetting('load_third_bar') || in_element_two && in_element_three) {
    return;
  }
  // Don't check the second bar sites on a Search/List/Watchlist page.
  if (in_element_two && onSearchPage) {
    return;
  }
  // Connection rate limiter per domain.
  var set_rate = ('rateLimit' in site) ? site['rateLimit'] : 200;
  var rate     = (!onSearchPage) ? set_rate : (set_rate > 1000) ? set_rate : set_rate * 4;
  var domain   = search_url.split('/')[2];
  var now      = (new Date())*1;
  var lastLoaded = window.localStorage[domain+'_lastLoaded'];
  if (!lastLoaded) {
    lastLoaded = now - 50000;
  } else {
    lastLoaded = parseInt(lastLoaded);
  }
  if (now - lastLoaded < rate) {
    window.setTimeout(maybeAddLink.bind(undefined, elem, site['name'], search_url, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id), rate);
    return;
  } else {
    window.localStorage[domain+'_lastLoaded'] = (new Date())*1;
  }

  var success_match = ('positiveMatch' in site) ? site['positiveMatch'] : false;
  var target = search_url;
  if ('goToUrl' in site) {
    target = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'}, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
  }
  // Check tmdb/tvdb conversion.
  if (search_url.indexOf('=00000000') > -1 || search_url.indexOf('=undefined') > -1) {
    addLink(elem, site_name, target, site, 'error', scout_tick);
    return;
  }
  // Check for results with POST method.
  if ('mPOST' in site) {
    const post_data = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
    GM.xmlHttpRequest({
      method: 'POST',
      timeout: parseInt(GM_config.get('timeout_ms')),
      url: search_url,
      data: post_data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      onload: function(response) {
        if (GM_config.get('debug_sites')) {
          const name = (site['TV']) ? site['name'] + ' (TV)' : site['name'];
          console.log(name + " POST Response Status: " + response.status + "\n ");
          console.log(name + " POST Response Headers: " + response.responseHeaders + "\n ");
          console.log(name + " POST Response: " + response.responseText + "\n ");
        }
        if (response.responseHeaders.indexOf('efresh: 0; url') > -1 || response.status > 499 || (response.status > 399 && !site.ignore404) || (response.responseText == "" && !site.ignoreEmpty)) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
            if (getPageSetting('highlight_missing').split(',').includes(site['name'])) {
              if (elem.style) {
                elem.parentNode.style.background = 'rgba(255,104,104,0.7)';
              } else {
                document.querySelector('#imdbscout_missing').style.background = 'rgba(255,104,104,0.7)';
              }
            }
            if (!getPageSetting('hide_missing')) {
              addLink(elem, site_name, target, site, 'missing', scout_tick, post_data);
            }
        } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
          addLink(elem, site_name, target, site, 'logged_out', scout_tick, post_data);
        } else {
          addLink(elem, site_name, target, site, 'found', scout_tick, post_data);
        }
      },
      onerror: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("IMDb Scout Mod (POST-Request Error. Site): " +site_name);
      },
      onabort: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("IMDb Scout Mod (POST-Request aborted. Site): " +site_name);
      },
      ontimeout: function() {
        addLink(elem, site_name, target, site, 'error', scout_tick, post_data);
        console.log("IMDb Scout Mod (POST-Request timed out. Site): " +site_name);
      }
    });
    return;
  }
  // Request header tweaks
  let reqHeader = {};
  if (site['name'] == "Milkie") {
    reqHeader = {
      "Host": "milkie.cc",
      "Authorization": GM_config.get("milkie_authToken")
    };
  } else if (site['name'] == "TNT") {
    reqHeader = {
      "Host": "tntracker.org",
      "Authorization": GM_config.get("tnt_authToken")
    };
  } else if (site['name'] == "DonTor") {
    reqHeader = {
      "Host": "dontorrents.one",
      "Referer": "https://dontorrents.one"
    };
  }
  // Check for results with GET method.
  GM.xmlHttpRequest({
    method: 'GET',
    headers: reqHeader,
    timeout: parseInt(GM_config.get('timeout_ms')),
    url: search_url,
    onload: function(response) {
      if (GM_config.get('debug_sites')) {
        const name = (site['TV']) ? site['name'] + ' (TV)' : site['name'];
        console.log(name + " GET Response Status: " + response.status + "\n ");
        console.log(name + " GET Response Headers: " + response.responseHeaders + "\n ");
        console.log(name + " GET Response: " + response.responseText + "\n ");
      }
      if (response.responseHeaders.indexOf('efresh: 0; url') > -1 || response.status > 499 || (response.status > 399 && !site.ignore404) || (response.responseText == "" && !site.ignoreEmpty)) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (site['positiveMatch'] && site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else if (String(response.responseText).match(site['matchRegex']) ? !(success_match) : success_match) {
          if (getPageSetting('highlight_missing').split(',').includes(site['name'])) {
            if (elem.style) {
              elem.parentNode.style.background = 'rgba(255,104,104,0.7)';
            } else {
              document.querySelector('#imdbscout_missing').style.background = 'rgba(255,104,104,0.7)';
            }
          }
          if (!getPageSetting('hide_missing')) {
            addLink(elem, site_name, target, site, 'missing', scout_tick);
          }
      } else if (site['loggedOutRegex'] && String(response.responseText).match(site['loggedOutRegex'])) {
        addLink(elem, site_name, target, site, 'logged_out', scout_tick);
      } else {
        addLink(elem, site_name, target, site, 'found', scout_tick);
      }
    },
    onerror: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("IMDb Scout Mod (GET-Request Error. Site): " +site_name);
    },
    onabort: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("IMDb Scout Mod (GET-Request aborted. Site): " +site_name);
    },
    ontimeout: function() {
      addLink(elem, site_name, target, site, 'error', scout_tick);
      console.log("IMDb Scout Mod (GET-Request timed out. Site): " +site_name);
    }
  });
}

//==============================================================================
//    Perform code to create fields and display sites
//==============================================================================

function perform(elem, movie_id, movie_title, movie_title_orig, is_tv, is_movie, series_id, season_id, episode_id, movie_year, scout_tick) {
  var site_shown = false;
  $.each(sites, async function(index, site) {
    if (site['show']) {
      site_shown = true;
      // For TV Series show only TV links. TV Special, TV Movie, Episode & Documentary are treated as TV and Movie.
      if ((Boolean(site['TV']) == is_tv || Boolean(site['both'])) || (!is_tv && !is_movie) || getPageSetting('ignore_type')) {
        var searchUrl = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id, true);
        if ('goToUrl' in site && getPageSetting('call_http_mod')) {
          maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
        }
        if ('goToUrl' in site && !getPageSetting('call_http_mod')) {
          searchUrl = await replaceSearchUrlParams({'searchUrl': site['goToUrl'], 'spaceEncode': ('spaceEncode' in site) ? site['spaceEncode'] : '+'}, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
          addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
        }
        if (!('goToUrl' in site) && getPageSetting('call_http_mod')) {
          maybeAddLink(elem, site['name'], searchUrl, site, scout_tick, movie_id, movie_title, movie_title_orig, movie_year, series_id, season_id, episode_id);
        }
        if (!('goToUrl' in site) && !getPageSetting('call_http_mod')){
          addLink(elem, site['name'], searchUrl, site, 'found', scout_tick);
        }
      }
    }
  });

  if (!site_shown) {
    $(elem).append("<pre>No sites enabled!\nScript's settings can be found in your Monkey's shortcut.\nFor now you can press this temporary button:");
    var p = $('<p />').attr('id', 'imdbscout_settings_button');
        p.append($('<button>Load Settings</button>').css({'cursor':'pointer', 'background-color':'#F5C518', 'color':'blue', 'font-weight':'bold'}).click(function() {
          GM_config.open();
          $('#imdbscout_settings_button').remove();
    }));
    $(elem).append(p);
  }
}

//==============================================================================
//    'Load' button code
//==============================================================================

// Runs when "Load on Start?" is disabled.
function displayButton() {
  var p = $('<p />').attr('id', 'imdbscout_button');
  p.append($('<button>Load links</button>').css({'background-color':'#F5C518', 'color':'blue', 'font-weight':'bold'}).click(function() {
    $('#imdbscout_button').remove();
    if (onSearchPage) {
      performSearch();
    } else {
      performPage();
    }
  }));
  if (onSearchPage) {
    $('#sidebar').prepend(p);
  } else if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').before(p);
  // reference
  } else if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
  }
}

//==============================================================================
//    Icons at top bar on Title page
//==============================================================================

// Unlike the other URLs, they aren't checked to see if the movie exists.
function addIconBar(movie_id, movie_title, movie_title_orig) {
  var iconbar;
  if ($('.ipc-page-section').length) {
    iconbar = getIconsLinkArea();
  // reference + remove "Reference View" txt and a link to settings
  } else if ($('.titlereference-header div script').length) {
    // wrap text node for removal
    $($('.titlereference-header div script')[0].nextSibling).wrap('<span class="removethis"/>');
    $('.removethis').remove();
    $('.titlereference-change-view-link').remove();
    iconbar = getIconsLinkArea();
  // in case if code above breaks
  } else if ($('h3[itemprop="name"]').length) {
    iconbar = $('h3[itemprop="name"]').append($('<br/>'));
  }

  $.each(icon_sites, async function(index, site) {
    if (site['show']) {
      var search_url = ('mPOST' in site) ? site['searchUrl'] : await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig);
      var image = getFavicon(site).css('margin', '2px 2px 2px');
      var html = $('<a />').attr('href', search_url).attr('target', '_blank').attr('rel', 'noreferrer').addClass('iconbar_icon').append(image);

      // Link and add Form element for POST method.
      if ('mPOST' in site) {
        var form_name = site['name'] + '-iconform';
            form_name = form_name.replace(/\s|\.|\(|\)/g, '-');
        var placebo_url = new URL(site['searchUrl']).origin;
        html = $('<a />').attr('href', placebo_url).attr('onclick', "$('#" + form_name + "').submit(); return false;").attr('target', '_blank').attr('rel', 'noreferrer').addClass('iconbar_icon').append(image);
        var post_data = await replaceSearchUrlParams(site, movie_id, movie_title, movie_title_orig);
        var data = (post_data.match('{')) ? post_data : '{"' + post_data.replace(/&/g, '","').replace(/=/g, '":"').replace(/\+/g, ' ') + '"}';
        var addform = $('<form></form>');
            addform.attr('id', form_name);
            addform.attr('action', search_url);
            addform.attr('method', 'post');
            addform.attr('style', 'display: none;');
            addform.attr('target', '_blank');
            addform.attr('rel', 'noreferrer');

        if (post_data.match('},{')) {
          const dataArray = (new Function("return [" +data+ "];")());
          dataArray.forEach(function (item, index) {
            let addinput = $("<input>");
                addinput.attr('type', 'text');
                addinput.attr('name', item.key);
                addinput.attr('value', item.value);
            addform.append(addinput);
            $('body').append(addform);
          });
        } else {
          data = JSON.parse(data);
          for (const name in data) {
            let addinput = $("<input>");
                addinput.attr('type', 'text');
                addinput.attr('name', name);
                addinput.attr('value', data[name]);
            addform.append(addinput);
            $('body').append(addform);
         }
        }
      }
      iconbar.append(html).append();
      // Call to 'Copy Info to BBcode' funcs.
      if (site['name'] == "Copy Info to BBcode"){
      start_copyInfoToBBcode(movie_id, movie_title_orig);
      }
      // Call to Emby funcs.
      if (site['name'] == "Emby"){
      start_emby(movie_id, movie_title, movie_title_orig);
      }
      // Call to Jellyfin funcs.
      if (site['name'] == "Jellyfin"){
      start_jellyfin(movie_id, movie_title, movie_title_orig);
      }
      // Call to Plex funcs.
      if (site['name'] == "Plex"){
      start_plex(movie_id, movie_title, movie_title_orig);
      }
      // Call to Radarr funcs.
      if (site['name'] == "Radarr"){
      get_radarr_movies(movie_id);
      }
      // Call to Sonarr funcs.
      if (site['name'] == "Sonarr"){
      get_sonarr_tvseries(movie_id);
      }
      // Call to Trakt-Watchlist funcs.
      if (site['name'] == "Trakt-Watchlist"){
      start_trakt(movie_id, movie_title);
      }
    }
  });

  if (!GM_config.get("remove_openall")) {
    // If we have access to the openInTab function, add an Open All feature.
    if (GM.openInTab) {
      // Wrapped in timeout because the button lands in front of icons (async function).
      setTimeout(() => {
        var aopenall = $('<a />').text('Open All').prepend("&nbsp;").attr('href', 'javascript:;').attr('style', 'font-weight:bold;font-size:11px;font-family: Calibri, Verdana, Arial, Helvetica, sans-serif;');
            aopenall.click(function() {
              $('.iconbar_icon').each(function() {
                GM.openInTab($(this).attr('href'));
              });
            });
        iconbar.append(aopenall);
        // Rename class of the special buttons so "Open all" wouldn't open them.
        $('img[title="Copy info to BBCode"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Emby"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Jellyfin"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Plex"]').parent().removeClass('iconbar_icon').addClass('iconbar_spec_icon');
        $('img[title="Radarr"]').parent().attr('class','iconbar_spec_icon');
        $('img[title="Sonarr"]').parent().attr('class','iconbar_spec_icon');
        $('img[title="Trakt-Watchlist"]').parent().attr('class','iconbar_spec_icon');
      }, 300);
    }
  }
}

// Create elements for the icons bar
function getIconsLinkArea() {
  // If it already exists, just return it
  if ($('#imdbscout_iconsheader').length) {
    return $('#imdbscout_iconsheader');
  }
  const pad = onReferencePage ? '0px 0px 0px 0px' : '0px 0px 0px 0px';
  var p = $('<p />').attr('id', 'imdbscout_iconsheader').css({
    'padding': pad,
    'margin-left': '0px',
    'margin-right': '0px',
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
  });
  const hr = $('<hr />').css({'margin-top':'7px', 'margin-bottom':'7px', 'color':'#0d0d0d' });
  if ($('.ipc-page-section').length) {
    $('#scout_rating_table').after(hr);
    $('.ipc-page-section:eq(0)').before(p);
  // reference
  } else if ($('.titlereference-header div hr').first().length) {
    $('.titlereference-header div hr').first().after(p);
  }
  var styles = '#imdbscout_iconsheader {line-height: 16px;} ';
  GM_addStyle(styles);
  return $('#imdbscout_iconsheader');
}

//==============================================================================
//    Search/List/Watchlist page code
//==============================================================================

function performSearch() {
  //Add css for the new table cells we're going to add
  var styles  = '.result_box {width: 975px} ';
      styles += '.result_box a { margin-right: 5px; color: #444;} ';
      styles += '.result_box a:visited { color: #551A8B; } ';
      styles += '#content-2-wide #main, #content-2-wide ';
      styles += '.maindetails_center {margin-left: 5px; width: 1001px;} ';
  GM_addStyle(styles);

  if (getPageSetting('load_third_bar')) {
    var styles3  = '.result_box_3rd {width: 975px} ';
        styles3 += '.result_box_3rd a { margin-right: 5px; color: #444;} ';
        styles3 += '.result_box_3rd a:visited { color: #551A8B; } ';
        styles3 += '#content-2-wide #main, #content-2-wide ';
        styles3 += '.maindetails_center {margin-left: 5px; width: 1001px;} ';
    GM_addStyle(styles3);
  }
  var showsites = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);

  var search_page = (Boolean(location.href.match('/search/'))) ? true : false;
  if($('.lister-list').children().length !== 0) {
    $('.lister-list').children().each(function() {
      var elem     = (search_page) ? $(this).find('.lister-item-content') : $(this);
      var link     = $(this).find('.lister-item-image>a');
      var movie_id = link.attr('href').match(/tt([0-9]*)\/?.*/)[1];

      var scout_tick = window.localStorage['_imdbscoutmod_tick'];
      if (!scout_tick) {
        scout_tick = 1;
        window.localStorage['_imdbscoutmod_tick'] = scout_tick;
      }

      performSearchSecondPart(elem, link, movie_id, showsites, scout_tick);
      scout_tick = parseInt(scout_tick) + 1;
      window.localStorage['_imdbscoutmod_tick'] = scout_tick;
    });
  }
}

function performSearchSecondPart(elem, link, movie_id, showsites, scout_tick) {
  // Connection rate limiter for IMDb.
  var rate;
  if (!(GM_config.get('call_http_mod_search'))) {
    rate =  400;
  } else if (showsites > 99) {
    rate = 6000;
  } else if (showsites > 80) {
    rate = 5000;
  } else if (showsites > 60) {
    rate = 3500;
  } else if (showsites > 40) {
    rate = 2500;
  } else if (showsites > 20) {
    rate = 2000;
  } else if (showsites > 10) {
    rate = 1500;
  } else {
    rate = 800;
  }
  var domain = "https://www.imdb.com";
  var now    = (new Date())*1;
  var lastLoaded = window.localStorage[domain+'_lastLoaded'];
  if (!lastLoaded) {
    lastLoaded = now - 8000;
  } else {
    lastLoaded = parseInt(lastLoaded);
  }
  if (now - lastLoaded < rate) {
    window.setTimeout(performSearchSecondPart.bind(undefined, elem, link, movie_id, showsites, scout_tick), rate);
    return;
  } else {
    window.localStorage[domain+'_lastLoaded'] = (new Date())*1;
  }

  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    "https://www.imdb.com" + link.attr('href'),
    onload: function(response) {
      var parser = new DOMParser();
      var result = parser.parseFromString(response.responseText, "text/html");

      var is_tv    = Boolean($(result).find('title').text().match('TV Series'));
      // newLayout || reference : check if 'title' has just a year in brackets, eg. "(2009)" // Note: 'title' is fail-safe measure if other checks fail.
      var is_movie = (Boolean($(result).find('[data-testid=hero-title-block__metadata]').text().match('TV')) || Boolean($(result).find('li.ipl-inline-list__item').text().match('TV Special'))) ? false : Boolean($(result).find('title').text().match(/.*? \(([0-9]*)\)/));
      // newLayout || reference
      if (Boolean($(result).find('[data-testid=genres]').text().match('Documentary')) || Boolean($(result).find('li.ipl-inline-list__item').text().match('Documentary'))) {
        is_tv    = false;
        is_movie = false;
      }
      var movie_year  = result.title.replace(/^(.+) \((\D*|)(\d{4})(.*)$/gi, '$3');
      var movie_title = $(result).find('[data-testid=hero-title-block__title]').text().trim();
      // reference
      if (movie_title === "") {
        movie_title = $(result).find('h3[itemprop="name"]').text().trim();
        movie_title = movie_title.substring(movie_title.lastIndexOf("\n") + 1, -1 ).trim();
      }
      var movie_title_orig = $(result).find('[data-testid=hero-title-block__original-title]').text().trim().replace("Original title: ", "");
      // reference
      if (movie_title_orig === "" && $(result).find('h3[itemprop="name"]').length) {
        movie_title_orig = $.trim($($(result).find('h3[itemprop="name"]')[0].nextSibling).text());
      }
      // not found
      if (movie_title_orig === "") {
        movie_title_orig = movie_title;
      }
      // Streaming APIs support
      var series_id  = "tt" + movie_id;
      var season_id  = "1";
      var episode_id = "1";
      if (Boolean($(result).find('title').text().match('TV Episode'))) {
        if ($(result).find('h3[itemprop="name"]').length) {
          series_id  = $(result).find('h4[itemprop="name"] a').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
          season_id  = $(result).find('.titlereference-overview-season-episode-numbers li').first().text().trim().match(/(\d+)/)[0];
          episode_id = $(result).find('.titlereference-overview-season-episode-numbers li').last().text().trim().match(/(\d+)/)[0];
        } else {
          series_id  = $(result).find('[data-testid=hero-title-block__series-link]').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
          season_id  = $(result).find('[data-testid=hero-subnav-bar-season-episode-numbers-section]').children().first().text().trim().match(/(\d+)/)[0];
          episode_id = $(result).find('[data-testid=hero-subnav-bar-season-episode-numbers-section]').children().last().text().trim().match(/(\d+)/)[0];
        }
      }

      perform(elem, movie_id, movie_title, movie_title_orig, is_tv, is_movie, series_id, season_id, episode_id, movie_year, scout_tick);
      },
      onerror: function() {
        console.log("IMDb Scout Mod (Lists): Request Error.");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Lists): Abort.");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (Lists): Time out.");
      }
  });
}

//==============================================================================
//    Title page code
//==============================================================================

function performPage() {
  var movie_title = $('[data-testid=hero-title-block__title]').text().trim();
  // reference
  if (movie_title === "") {
    movie_title = $('h3[itemprop="name"]').text().trim();
    movie_title = movie_title.substring(movie_title.lastIndexOf("\n") + 1, -1 ).trim();
  }
  var movie_title_orig = $('[data-testid=hero-title-block__original-title]').text().trim().replace("Original title: ", "");
  // reference
  if (movie_title_orig === "" && $('h3[itemprop="name"]').length) {
    movie_title_orig = $.trim($($('h3[itemprop="name"]')[0].nextSibling).text());
  }
  // not found
  if (movie_title_orig === "") {
    movie_title_orig = movie_title;
  }

  var movie_id = document.URL.match(/\/tt([0-9]+)\//)[1].trim('tt');
  var is_tv    = Boolean($('title').text().match('TV Series'));
  // newLayout || reference : check if 'title' has just a year in brackets, eg. "(2009)" // Note: 'title' is fail-safe measure if other checks fail.
  var is_movie = (Boolean($('[data-testid=hero-title-block__metadata]').text().match('TV')) || Boolean($('li.ipl-inline-list__item').text().match('TV Special'))) ? false : Boolean($('title').text().match(/.*? \(([0-9]*)\)/));
  // newLayout || reference
  if (Boolean($('[data-testid=genres]').text().match('Documentary')) || Boolean($('li.ipl-inline-list__item').text().match('Documentary'))) {
    is_tv    = false;
    is_movie = false;
  }
  // Streaming APIs support
  var series_id  = "tt" + movie_id;
  var season_id  = "1";
  var episode_id = "1";
  if (Boolean($('title').text().match('TV Episode'))) {
    if (onReferencePage) {
      series_id  = $('h4[itemprop="name"] a').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
      season_id  = $('.titlereference-overview-season-episode-numbers li').first().text().trim().match(/(\d+)/)[0];
      episode_id = $('.titlereference-overview-season-episode-numbers li').last().text().trim().match(/(\d+)/)[0];
    } else {
      series_id  = $('[data-testid=hero-title-block__series-link]').prop('href').match(/\/tt([0-9]+)\//)[0].replace(/\//g, "");
      season_id  = $('[data-testid=hero-subnav-bar-season-episode-numbers-section]').children().first().text().trim().match(/(\d+)/)[0];
      episode_id = $('[data-testid=hero-subnav-bar-season-episode-numbers-section]').children().last().text().trim().match(/(\d+)/)[0];
    }
  }

  // Start of External ratings code
  if (GM_config.get("ratings_cfg_imdb") || GM_config.get("ratings_cfg_metacritic") || GM_config.get("ratings_cfg_rotten") || GM_config.get("ratings_cfg_letterboxd")) {
    externalRatings(movie_id, movie_title, movie_title_orig);
  }
  // Call to iconSorterCount() for the icons/sites sorting.
  iconSorterCount(is_tv, is_movie);

  // Create areas to put links in
  addIconBar(movie_id, movie_title, movie_title_orig);
  perform(getLinkArea(), movie_id, movie_title, movie_title_orig, is_tv, is_movie, series_id, season_id, episode_id);
  if (GM_config.get('load_second_bar') && !GM_config.get('load_third_bar_movie')) {
    getLinkAreaSecond();
  } else if (!GM_config.get('load_second_bar') && GM_config.get('load_third_bar_movie')) {
    getLinkAreaThird();
  } else if (GM_config.get('load_second_bar') && GM_config.get('load_third_bar_movie') && !GM_config.get('switch_bars')) {
    getLinkAreaSecond();
    getLinkAreaThird();
  } else if (GM_config.get('load_second_bar') && GM_config.get('load_third_bar_movie') && GM_config.get('switch_bars')) {
    getLinkAreaThird();
    getLinkAreaSecond();
  }
}

//==============================================================================
//    Create elements for the 1st search bar on Title page
//==============================================================================

function getLinkArea() {
  // If it already exists, just return it
  if ($('#imdbscout_header').length) {
    return $('#imdbscout_header');
  }
  var font_weight = (GM_config.get('highlight_sites_movie').length == 0) ? 'bold' : 'normal';
  let backgroundColor;
  if (onReferencePage) {
    backgroundColor = (GM_config.get('greybackground_reference_view')) ? '#333333' : '#ffffff' ;
  } else {
    backgroundColor = '#333333';
  }
  var p = $('<p />').append(GM_config.get('imdbscoutmod_header_text')).attr('id', 'imdbscout_header').css({
    'padding': '4px 10px',
    'font-weight': font_weight,
    'background-color': backgroundColor,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
    'color': '#EEEEEE'
  });

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

  const hr = $('<hr />').css({'margin-top':'7px', 'margin-bottom':'7px', 'color':'#0d0d0d' });
  if ($('.ipc-page-section').length) {
    $('#imdbscout_iconsheader').after(hr);
    $('.ipc-page-section:eq(0)').before(p);
  // reference
  } else if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
    if (GM_config.get('dark_reference_view')) {
      const hr = $('<hr>').css({'margin': '0px'});
      $('#imdbscout_header').after(hr);
    }
  }
  return $('#imdbscout_header');
}

//==============================================================================
//    Create elements for the 2nd search bar on Title page
//==============================================================================

function getLinkAreaSecond() {
  // If it already exists, just return it
  if ($('#imdbscoutsecondbar_header').length) {
    return $('#imdbscoutsecondbar_header');
  }
  var font_weight = (GM_config.get('highlight_sites_movie').length == 0) ? 'bold' : 'normal';
  let backgroundColor;
  if (onReferencePage) {
    backgroundColor = (GM_config.get('greybackground_reference_view')) ? '#333333' : '#ffffff' ;
  } else {
    backgroundColor = '#333333';
  }
  var p = $('<p />').append(GM_config.get('imdbscoutsecondbar_header_text')).attr('id', 'imdbscoutsecondbar_header').css({
    'padding': '4px 10px',
    'font-weight': font_weight,
    'background-color': backgroundColor,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
    'color': '#EEEEEE'
  });

  $.each(valid_states, function(i, name) {
    if (GM_config.get('one_line')) {
      p.append($('<span />').attr('id', 'imdbscoutsecondbar_' + name));
    } else {
      var title = $('<span>' + name.replace('_', ' ') + ': </span>').css({
        'textTransform': 'capitalize',
        'min-width': '100px',
        'display': 'inline-block'
      });
      p.append($('<div />').attr('id', 'imdbscoutsecondbar_' + name).append(title));
    }
  });

  if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').before(p);
  // reference
  } else if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
    if (GM_config.get('dark_reference_view')) {
      const hr = $('<hr>').css({'margin': '0px'});
      $('#imdbscoutsecondbar_header').after(hr);
    }
  }
  return $('#imdbscoutsecondbar_header');
}

//==============================================================================
//     Create elements for the 3rd search bar on Title page
//==============================================================================

function getLinkAreaThird() {
  // If it already exists, just return it
  if ($('#imdbscoutthirdbar_header').length) {
    return $('#imdbscoutthirdbar_header');
  }
  var font_weight = (GM_config.get('highlight_sites_movie').length == 0) ? 'bold' : 'normal';
  let backgroundColor;
  if (onReferencePage) {
    backgroundColor = (GM_config.get('greybackground_reference_view')) ? '#333333' : '#ffffff' ;
  } else {
    backgroundColor = '#333333';
  }
  var p = $('<p />').append(GM_config.get('imdbscoutthirdbar_header_text')).attr('id', 'imdbscoutthirdbar_header').css({
    'padding': '4px 10px',
    'font-weight': font_weight,
    'background-color': backgroundColor,
    'margin-top': '0px',
    'margin-bottom': '0px',
    'overflow': 'hidden',
    'color': '#EEEEEE'
  });

  $.each(valid_states, function(i, name) {
    if (GM_config.get('one_line')) {
      p.append($('<span />').attr('id', 'imdbscoutthirdbar_' + name));
    } else {
      var title = $('<span>' + name.replace('_', ' ') + ': </span>').css({
        'textTransform': 'capitalize',
        'min-width': '100px',
        'display': 'inline-block'
      });
      p.append($('<div />').attr('id', 'imdbscoutthirdbar_' + name).append(title));
    }
  });

  if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').before(p);
  // reference
  } else if ($('.titlereference-header').length) {
    $('.titlereference-header').append(p);
    if (GM_config.get('dark_reference_view')) {
      const hr = $('<hr>').css({'margin': '0px'});
      $('#imdbscoutthirdbar_header').after(hr);
    }
  }
  return $('#imdbscoutthirdbar_header');
}

//==============================================================================
//    Icons/sites sorting
//==============================================================================

// Count selected sites for the sorting launcher (showSitezFirstBar).
function iconSorterCount(is_tv, is_movie) {
  let sitestosort = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites);
  if (!is_tv && !is_movie || getPageSetting('ignore_type')) {
    showSitezFirstBar = sitestosort.reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);
  } else if (is_tv && !getPageSetting('ignore_type')) {
    const showtvsitez = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['TV'] == true && site['show'] == true); }, 0);
    const showbothsitez = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['both'] == true && site['show'] == true); }, 0);
    showSitezFirstBar = showtvsitez + showbothsitez;
  } else if (is_movie && !getPageSetting('ignore_type')) {
    const showallsitez = sitestosort.reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);
    const showtvsitez = public_sites.concat(private_sites, chinese_sites, french_sites, german_sites, usenet_sites).reduce(function (n, site) {
      return n + (site['TV'] == true && site['show'] == true); }, 0);
    showSitezFirstBar = showallsitez - showtvsitez;
  }
}

// Sorting launcher.
function iconSorterLauncher(site) {
  showSitezFirstBar = showSitezFirstBar - 1;

  if (GM_config.get("sortReqOnNewLine") && showSitezFirstBar == 0) {
    sortReqOnNewLineTemp = true;
  }
  //console.log('Sites left: ' + showSitezFirstBar + ", Added: " + site['name']);
  if (showSitezFirstBar < 4) {
    iconSorterFound();
    iconSorterMissing();
    //console.log('SORTING!');
  }
  if (showSitezFirstBar == 0) {
    iconToButtonHack();
  }
}

// Sorting of the found sites.
function iconSorterFound() {
  const imdbscout_found = document.querySelector("#imdbscout_found");

  const sorta = (list) => { // sort alphabetically
    return list.sort((a, b) => {
      if (GM_config.get("use_mod_icons_movie")) {
        if (a.firstChild.getAttribute("alt").toLowerCase() < b.firstChild.getAttribute("alt").toLowerCase()) {
          return -1;
        } else if (a.firstChild.getAttribute("alt").toLowerCase() > b.firstChild.getAttribute("alt").toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
          return -1;
        } else if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  };

  let highlighted = [], requests = [], others = [];

  let children = imdbscout_found.children;
  if (!GM_config.get('one_line')) {
    let [removed, ...children2] = children;
    children = children2;
  }
  for (const child of children) {
    if (GM_config.get("use_mod_icons_movie")) {
      if (child.firstChild.getAttribute("alt").includes("-Req")) {
        requests.push(child);
      } else {
        child.children[0].style.border.includes("solid rgb(0, 220, 0)") ? highlighted.push(child) : others.push(child);
      }
    } else {
      if (child.textContent.includes("-Req")) {
        requests.push(child);
      } else {
        child.querySelector("b") ? highlighted.push(child) : others.push(child);
      }
    }
  }

  let sorted;
  if (GM_config.get("highlight_sites_movie").includes(",")) {
    const highlighted_sites = GM_config.get("highlight_sites_movie").split(",");
    let hl_temp = [];
    for (const hl of highlighted_sites) {
      for (const hl_node of highlighted) {
        if (hl === (!GM_config.get("use_mod_icons_movie") ? hl_node.textContent : hl_node.children[0].getAttribute("alt"))) {
          hl_temp.push(hl_node);
        }
      }
    }
    sorted = [...hl_temp, ...sorta(others)];
  } else {
    sorted = [...sorta(highlighted), ...sorta(others)];
  }

  for (const node of sorted) {
    node.remove();
    imdbscout_found.insertAdjacentHTML("beforeend", node.outerHTML + " ");
  }

  sortReqOnNewLineTemp && requests.length > 0 ? imdbscout_found.insertAdjacentHTML("beforeend", "</br>") : false;
  for (const node of requests) {
    node.remove();
    imdbscout_found.insertAdjacentHTML("beforeend", node.outerHTML + " ");
  }
  sortReqOnNewLineTemp && requests.length > 0 ? imdbscout_found.insertAdjacentHTML("beforeend", "</br>") : false;
}

// Sorting of the missing sites.
function iconSorterMissing() {
  if (GM_config.get("hide_missing_movie") || !GM_config.get("call_http_mod_movie")) {
  return;
  }
  const imdbscout_missing = document.querySelector("#imdbscout_missing");

  const sorta = (list) => {
    return list.sort((a, b) => { // sort alphabetically
      if (GM_config.get("use_mod_icons_movie")) {
        if (a.firstChild.getAttribute("alt").toLowerCase() < b.firstChild.getAttribute("alt").toLowerCase()) {
          return -1;
        } else if (a.firstChild.getAttribute("alt").toLowerCase() > b.firstChild.getAttribute("alt").toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a.textContent.toLowerCase() < b.textContent.toLowerCase()) {
          return -1;
        } else if (a.textContent.toLowerCase() > b.textContent.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  };

  let all = [];

  let children = imdbscout_missing.children;
  if (!GM_config.get('one_line')) {
    let [removed, ...children2] = children;
    children = children2;
  }
  for (const child of children) {
    all.push(child);
  }

  let sorted = [...sorta(all)];

  for (const node of sorted) {
    node.remove();
    imdbscout_missing.insertAdjacentHTML("beforeend", node.outerHTML + " ");
  }
}

//==============================================================================
//    Special button: Copy info to BBCode
//==============================================================================

function start_copyInfoToBBcode(imdbid, movie_title_orig) {
  const standby_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAACpjQD94zkmAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC';
  let button = $('a[href="https://dummycopy.info"]');
      button.addClass('CopyInfotoBBcode');
      button.removeAttr("href");
      button.removeAttr("target");
  button.prop("href", "javascript: void(0)");
  button.click(function() {
    button.find('img').prop("src", standby_icon);
    copyInfoToBBcode(imdbid, movie_title_orig);
  });
}

async function copyInfoToBBcode(imdbid, movie_title_orig) {
  const error_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAACgAAB8H+SvAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC';
  const ready_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAZACk9hdsAAAAAXRSTlMAQObYZgAAALBJREFUKM910rENwyAUBNCPKFKyQdiErEVhKYzGKIzgkgLl4v/x2Y7k0PCQ7nQNcp53n7fHZ+IBFEMAqiECzfASvxqSuFlbxA1i9vMFjahEQZ+Yc9lWikJX6kQNTWFzhiS+b+BcjkPnDFkcDhSialjRiJXoe4YQGUQinjNMRPQTlvkFW3/rt1iIxPCLiJXAPhEIT8gBtm6xXJEUaX/onAxFLOK6AYAhbFgVHvwEG+Q4X86vk0jZCGx+AAAAAElFTkSuQmCC';
  const success_icon1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAZACk9hdsAAAAAXRSTlMAQObYZgAAAKZJREFUKM990cENwyAMBVBHHHpkg7JJslYPkcpojMIIHH1A/FKTTxVViSXgHWwh68uv3jpehzbwAKLBA8kQgGzYgELomAYq0f6QiURE6IBDG/BANAQgDSSfDZu4YljFqWGXpRLN8JIFE5FIRCYKoXKGSCVW4nlGgN6CzZfj99jYPBEm+IUnHCFEr2/zBfYJW/C4dguxn2r5RlnUAMDgcSTtwPA6ZNYH82fX5apYo9sAAAAASUVORK5CYII=';
  const success_icon2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAQMAAACQp+OdAAAABlBMVEUAAAAAZACk9hdsAAAAAXRSTlMAQObYZgAAAJxJREFUKM+V0rENxCAMBVCiFFcyApuEtVJECqMxCiNQUiD+WfZ97qJTirjxK/6XG7vvnM32imF4AUnhgawIQFFEt1bF5harHW7phPX3HxQiEwnNYOd2vZIUAchEUUSgEk1xAl0QumAQmEhE/oRRiEo0ZiY6MSY0fIO/8MM6cRAbEYmQCXSDJ1bCETKPEAX9giBoF3hBta/gEwjcnDdEcwZMhnHuiwAAAABJRU5ErkJggg==';
  let key;
  if (GM_config.get("ratings_cfg_omdb_apikey") == '') {
    const keys = ['8c967f70', 'dd37e5a4', '3fdb9c5a'];
    key = keys[Math.floor(Math.random() * keys.length)];
  } else {
    key = GM_config.get("ratings_cfg_omdb_apikey");
  }
  // Preparing button
  let button = $('.CopyInfotoBBcode');
      button.off("click");

  // Pause and let RT ratings to finish and get OMDb response from storage
  if (GM_config.get("ratings_cfg_rotten")) {
    await sleep(1000);
  }
  const omdbLast = await GM.getValue("OMDb_last","{}");
  let x;
  if (omdbLast.match(imdbid)) {
    x = JSON.parse(omdbLast);
    console.log("IMDb Scout Mod (Copy Info to BBCode): Parsing info from storage.");
  } else {
    x = await getInfoFromOMDb(key, imdbid, error_icon, button);
  }

  const y = JSON.stringify(x);
  if (y != undefined) {
    button.find('img').prop("src", ready_icon);
  } else {
    button.find('img').prop("src", error_icon);
    GM.notification("Error: 'undefined'!", "IMDb Scout Mod (Copy Info to BBCode)");
    return;
  }
  // Collecting info
  let collect = document.createElement("textarea");
      collect.innerHTML+="[center][size=6]" +x.Title+ "[/size][/center]\n";
      if (x.Poster != "N/A") {
        const xPoster = x.Poster.replace('300.jpg', '600.jpg');
        collect.innerHTML+="[center][img]" +xPoster+ "[/img][/center]\n";
      }
      collect.innerHTML+="\n";
      if (x.Title != movie_title_orig) {
        collect.innerHTML+="[b]Original Title:[/b] " +movie_title_orig+ "\n";
      }
      collect.innerHTML+="[b]Year:[/b] " +x.Year+ "\n";
      if (x.Runtime != "N/A") {
        collect.innerHTML+="[b]Runtime:[/b] " +x.Runtime+ "\n";
      } else if (onReferencePage) {
          if ($('.ipl-inline-list__item:eq(0)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipl-inline-list__item:eq(0)').text().trim()+ "\n";
          } else if ($('.ipl-inline-list__item:eq(1)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipl-inline-list__item:eq(1)').text().trim()+ "\n";
          } else {
            collect.innerHTML+="[b]Runtime:[/b] N/A\n";
          }
      } else {
          if ($('.ipc-inline-list__item:eq(0)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipc-inline-list__item:eq(0)').text().trim()+ "\n";
          } else if ($('.ipc-inline-list__item:eq(1)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipc-inline-list__item:eq(1)').text().trim()+ "\n";
          } else if ($('.ipc-inline-list__item:eq(2)').text().trim().match('min')) {
            collect.innerHTML+="[b]Runtime:[/b] " +$('.ipc-inline-list__item:eq(2)').text().trim()+ "\n";
          } else {
            collect.innerHTML+="[b]Runtime:[/b] N/A\n";
          }
      }
      collect.innerHTML+="[b]Genre:[/b] " +x.Genre+ "\n";
      const xLanguage = x.Language.split(',')[0];
      collect.innerHTML+="[b]Language:[/b] " +xLanguage+ "\n";
      const xCountry = x.Country.split(',')[0];
      collect.innerHTML+="[b]Country:[/b] " +xCountry+ "\n";
      if (x.Awards != "N/A") {
        collect.innerHTML+="[b]Awards:[/b] " +x.Awards+ " ([url=https://www.imdb.com/title/" +x.imdbID+ "/awards]link[/url])\n";
      }
      collect.innerHTML+="[b]IMDb link:[/b] https://www.imdb.com/title/" +x.imdbID+ "\n";
      if (x.imdbRating != "N/A") {
        collect.innerHTML+="[b]IMDb Rating:[/b] " +x.imdbRating+ " from " +x.imdbVotes+ " users\n";
      } else if (onReferencePage) {
          const imdbRating = $('.ipl-rating-star__rating:eq(0)').text().trim().replace(',','.') *1;
          const imdbVotes = $('.ipl-rating-star__total-votes:eq(0)').text().trim().replace('(','').replace(')','');
          if ($.isNumeric(imdbRating)) {
            collect.innerHTML+="[b]IMDb Rating:[/b] " +imdbRating+ " from " +imdbVotes+ " users\n";
          } else {
            collect.innerHTML+="[b]IMDb Rating:[/b] N/A\n";
          }
      } else {
          const imdbRating = $('[class^=AggregateRatingButton__RatingScore]:eq(0)').text().trim().replace(',','.') *1;
          const imdbVotes = $('[class^=AggregateRatingButton__TotalRatingAmount]:eq(0)').text().trim();
          if ($.isNumeric(imdbRating)) {
            collect.innerHTML+="[b]IMDb Rating:[/b] " +imdbRating+ " from " +imdbVotes+ " users\n";
          } else {
            collect.innerHTML+="[b]IMDb Rating:[/b] N/A\n";
          }
      }
      collect.innerHTML+="\n";
      collect.innerHTML+="[b]Plot:[/b] " +x.Plot+ "\n";
      collect.innerHTML+="\n";
      collect.innerHTML+="[b]Directed by:[/b] " +x.Director+ "\n";
      collect.innerHTML+="[b]Screenplay by:[/b] " +x.Writer+ "\n";
      collect.innerHTML+="[b]Starring:[/b] " +x.Actors+ "\n";

  // Finishing button
  button.prop("href", "javascript: void(0)");
  button.click(function() {
    copyInfoToClipboard(collect);
    if($('.CopyInfotoBBcode').length) {
      button.find('img').prop("src", success_icon2);
      button.removeClass('CopyInfotoBBcode').addClass('CopyInfotoBBcode2');
    } else {
      button.find('img').prop("src", success_icon1);
      button.removeClass('CopyInfotoBBcode2').addClass('CopyInfotoBBcode');
    }
  });
}

function copyInfoToClipboard(collect) {
  document.body.insertBefore(collect,document.body.firstChild);
  collect.focus();
  collect.select();
  const x = document.execCommand('copy');
  document.body.removeChild(collect);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getInfoFromOMDb(key, imdbid, error_icon, button) {
  return new Promise(resolve => {
    const url = "http://www.omdbapi.com/?i=tt" +imdbid+ "&apikey=" +key+ "&plot=full";
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 10000,
      url:    url,
      onload: function(response) {
        if (String(response.responseText).match("limit reached!")) {
          GM.notification("Limit reached! \nSet OMDb API key in settings (at Ratings). \nGet it at www.omdbapi.com .", "IMDb Scout Mod (Copy Info to BBCode)");
          $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
          button.off("click");
          return;
        }
        let responseJSON;
        if (response.status == 200) {
          responseJSON = JSON.parse(response.responseText);
          if (responseJSON['Response'] == "False") {
            GM.notification("Response: 'False'! \nNo data!?", "IMDb Scout Mod (Copy Info to BBCode)");
            $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
            button.off("click");
            return;
          }
          GM.setValue("OMDb_last", JSON.stringify(responseJSON));
          const returnInfo = responseJSON;
          resolve(returnInfo);
        } else {
          GM.notification("Request not successful! \nStatus code:" +response.status+ ".", "IMDb Scout Mod (Copy Info to BBCode)");
          $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
          button.off("click");
        }
      },
      onerror: function() {
        GM.notification("Request Error.", "IMDb Scout Mod (Copy Info to BBCode)");
        console.log("IMDb Scout Mod (Copy Info to BBCode): Request Error.");
        $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
        button.off("click");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Copy Info to BBCode): Request is aborted.");
        $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
        button.off("click");
      },
      ontimeout: function() {
        console.log("IMDb Scout Mod (Copy Info to BBCode): Request timed out.");
        $('.CopyInfotoBBcode').find('img').prop("src", error_icon);
        button.off("click");
      }
    });
  });
}

//==============================================================================
//    Special button: Jellyfin
//==============================================================================

async function start_jellyfin(movie_id, movie_title, movie_title_orig) {
  const found_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAVFBMVEUAAABRtbRUtqxiuoZJxyVGw0FJyhhOrLVKzQ5IxDRcvHNWt6ZWv2dLzgJbuJheuY5KwE1Ov1ZSv15gu3tYt6BlwYpMzjJbv6xev6BMzENQ0wJjxHzriFNUAAAAAXRSTlMAQObYZgAAAz5JREFUaN7t2dtyokAUheGOHARFQUAh+v7vOX1k0expILC5SFX+mmu/Wt1MmRDx12/tpBIHdj6fv06nrgNyhCCJ0xXGUcIVBrPwJbNE2/UC8W1wgiJgsAoqJ7T3vj9IAHHvy4MFWclqSAGEEkDwCx5Rsh8TRjiiZBXoCNmzPIKAoA3ei3ACiCh6NhwCeWAxIoKxWwDR9T1GqBrmEV2r6qUAouES7AihaksIUfNpWI9JmEZEc7l8CkZCuLTgiEvBKKBhhCYKXgGGEXiIk8oJMCBsNs4eIaaVTQOi2HlOEAhhhLqu9wsgEARZwnxMMCzxeCQbDCrQdhAQlggrKCJhHQFDCZqoQLA8TWgQJJHw3jWIAgT3CBhK0ETCLMCwgvyXs9x1FEX/IxQAYtMICNRIpGDK8/0jItOEUBMqEBtHQKBGgmAsEkHBfZn6hLsKEHtHNA0IzMjViHXGjIDva98wI0BsHRENxEXlERDWGGuOCQSMHMTWB1ZtgFCQGU54xdtHlB5RPMgMW8w0QhKeIQEnxPGWERAiJ9S1b0AAMS9Qwgog6hDxSjeNcI2FyQysSOeFlTehBUrEujSdJdYfEzEUYY29N4EfCXziJYWlGSsfWBDfYhwhNoyYCklSiVEOgLE0ApERRqAEhJRphCQmBohsdgQlQiMCM9Ig4QvICfQmzAq0QJxXEhCkQQgtaCKbe0lKCQgriBQEEUAISgQETaAxkQVGgPCNT9OAsA/sICAlBAmMuHZXsvGi+tSyokIAFgj6ulpsD4KMEEbYSUCgxNfBBEbwEJktQLTHEU5or/c9BIRbdvOEIwgZHaGJdi+RhQm86WUSfGLyunr/Xd8ogRG2bQBGmCCAuA9F0c8+fpmg79x1S6/9YhMRAgQRtGGrVIlXPATDE95jgowg36Y1JfI8nxJZiKBC4Mc/fLoJK3yBENeO/n3FJwah0r/AhwQcEwhnzI3AhgobTESYEmIIggwCvq8xInBMoXNC8zfhj8hXj7AC7qP3BJknzI1IPQIASX5+T0bgmGRmAx1BhDcAopT3/hk8JtesgAHBni4Q47vO5/9LvMnnzzqFCueEDSYAGRI/ThsPXfLteg0ZQ3/0X7+jf5hLej58/U8WAAAAAElFTkSuQmCC";
  const error_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAMAAACce/Y8AAAAVFBMVEUAAADHe1HJcVXdHLPPVYXhDr7LY3bTRJLGgk/WOZzkBMjMXn7RTYvGi0zZKqjdAMvKZ1nKYGzKX13Gh07KX2bRZnrmMLHQdVvhQKPXUZDSaGHWYoVyeKB5AAAAAXRSTlMAQObYZgAAA2ZJREFUaN7t2dFyqjAYBGAVBJFKpUdq1fd/z5O4wqauoZCEi85058y55JvNT9vfuPrLb83aZrVgDofDekmEwuZMI7mwuwubpQwD7FDCGtf0gCvQSC0YYvcQjpvj9bqIwBLH4/F6Siz8eyphckpqQGAJK3wkJQ4DAeAufNBIIlhACBoJBEtYBIOg0CUyjMBjsiHRdkkHsdMSbVsUqQQekzvskxG6Il4AwV9OZ2uwRJGCcCdxRo+PoYRNEoElVjYbEBDqWxEncBIQEKdEXde3PEUJCjRaECZ5nMCfOgg0cE5WyPMUbxMFGhTy2GOC0Qs0+mOKMA4PQvcaGHWNEubfJdAQQYi+xNvbJW4SIDQQHkQZIoCgoBlKmJRl8CQovDTyCAIdJhFvIMqks6bhCGVACRU0wzHZzO6wPIFJUBgzykeSvk3MQFRV2SSZNf/KkSgfRNWkmHXbqlFBsEQTX6LlRuAQFYnoEq0lxDDPhkBjYokRoa6fCCvAmC0oAQEEjUGQGl7CI/R7jRokZpS4I98ES0B4NihMMsZmzaVDapCIKcHNKc+fDEdosvASXP/wV0JqkAgvUQxEbYhvhnk8BENkQSV4TFwJvhtNn4zE2AvLEjJrCn5iO+ljnQpSQgwSYSVOLIFJeIjMEtu5k9BjAlGKAYE1RgUl+DZx6xACgtRQYvyYKJRfKzefQgSWyL1LR5aBGDF4D3EXGCnhIyhs40pQqJ4NEnsPgRJK+EpU1Uti6yO0BIlBsIgrkKAhhN7+KQFBS5RCQLDEfuwKUwj9uYYgBAQh9ApT1zOZNQhdY11ir4QVdkpgGDc5JmQlxNZPuNc1uhvb3OzTLyVDQIg9CSnBq46gsAQMISDEEBSUYIn0hJaIJ/aPPBHr5QkKxxiCwvv+/dWXRBaIIyjYuIRzD7sYYcKvJlIII8Q9ocA4QQEJAyjQ4LTdW337/5xr5C1DQQiW4F2yyU9XixlCYSYBAxk+vzOZEykhhHw1ISvBRY3GhAQEL6Hfr3j3Gj4eAgkKSmzWWqLw7DU+wU8g0gGELJhSYopAQkvwY52P8M2aBCMl9JiCSxA5G0NLzBD0hZUY4DptEs1ICQKvY0pcTwEl9NffWLqua4vOBMJ0gsJqSjqbHLlcxgXzcGY1O2iBGl/IZ5+sz/3Rf/kd+Q/Hk31KvuHwvAAAAABJRU5ErkJggg==";
  let button = $('a[href="https://jellyfin.org"]');
      button.addClass('JellyfinServerIndicator');
      button.prop("rel", "noreferrer");
      button.removeAttr("href");

  const jelly_url = GM_config.get("jellyfin_server_url").replace(/\/$/, "");
  const jelly_user = GM_config.get("jellyfin_username");
  const jelly_pass = GM_config.get("jellyfin_password");
  const debug = GM_config.get("jellyfin_debug");

  let titles =[];
      titles.push(movie_title);
  if (movie_title != movie_title_orig) {
    titles.push(movie_title_orig);
  }

  let user_id = await GM.getValue("Jellyfin_UserId", "none");
  let access_token = await GM.getValue("Jellyfin_AccessToken", "none");
  let last_validcreds = await GM.getValue("Jellyfin_LastValidCreds", "none");

  if (user_id == "none" || last_validcreds != jelly_user+jelly_pass) {
    const got_token = await getAuthFromJellyfin(jelly_url, jelly_user, jelly_pass, debug);
    if (got_token) {
      user_id = await GM.getValue("Jellyfin_UserId", "none");
      access_token = await GM.getValue("Jellyfin_AccessToken", "none");
    } else {
      user_id = "none";
    }
  }
  let search_found = false;
  let found_title = "";
  let server_id = "none";
  let item_id = "none";
  if (user_id != "none") {
    for (var i = 0; i < titles.length; i++) {
      const x = await searchJellyfin(jelly_url, titles[i], movie_id, user_id, access_token, debug);
      if (x === true) {
        search_found = x;
        found_title = titles[i];
        server_id = await GM.getValue("Jellyfin_ServerId", "none");
        item_id = await GM.getValue("Jellyfin_ItemId", "none");
        break;
      } else if (x === "stop"){
        search_found = x;
        break;
      }
    }
  }
  const link_notfound = jelly_url+ "/web/index.html#!/home.html";
  if (search_found === true) {
    const link_found = jelly_url+ "/web/index.html#!/details?id=" +item_id+ "&serverId=" +server_id;
    button.prop("href", link_found);
    $('.JellyfinServerIndicator').find('img').prop("src", found_icon);
  } else if (user_id == "none" || search_found === "stop") {
    button.prop("href", link_notfound);
    $('.JellyfinServerIndicator').find('img').prop("src", error_icon);
  } else {
    button.prop("href", link_notfound);
  }
}

function getAuthFromJellyfin(jelly_url, jelly_user, jelly_pass, debug) {
  return new Promise(resolve => {
    const url = jelly_url+ "/Users/authenticatebyname";
    const post_data = '{"Username":"' +jelly_user+ '","Pw":"' +jelly_pass+ '"}';
    GM.xmlHttpRequest({
      method: "POST",
      timeout: 5000,
      url:    url,
      headers: {
        "Accept": "application/json",
        "x-emby-authorization": 'MediaBrowser Client="Jellyfin Web", Device="IMDb Scout Mod", DeviceId="666", Version="10.7.6"',
        "content-Type": "application/json",
      },
      data: post_data,
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Jellyfin Debug_01 URL: " +url);
          console.log("Jellyfin Debug_01 Response: " +resultStr);
          console.log("Jellyfin Debug_01 Status: " +response.status);
        }
        if (response.status == 200) {
          const responseJSON = JSON.parse(response.responseText);
          const user_id = responseJSON.User.Id;
          const access_token = responseJSON.AccessToken;
          GM.setValue("Jellyfin_UserId", user_id);
          GM.setValue("Jellyfin_AccessToken", access_token);
          GM.setValue("Jellyfin_LastValidCreds", jelly_user+jelly_pass);
          resolve(true);
        } else if (response.status == 401) {
          GM.notification("Invalid username or password.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): Invalid username or password.");
          GM.setValue("Jellyfin_UserId", "none");
          GM.setValue("Jellyfin_AccessToken", "none");
          resolve(false);
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): HTTP status is not 200!");
          resolve(false);
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Jellyfin Server is running, \nand if Jellyfin Server URL is correct.", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request Error.");
        resolve(false);
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Jellyfin): Request is aborted.");
        resolve(false);
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request timed out.");
        resolve(false);
      }
    });
  });
}

function searchJellyfin(jelly_url, title, movie_id, user_id, access_token, debug) {
  return new Promise(resolve => {
    const titleUri = title.replace(/&/g,'%26').replace(/#/g,'%23');
    const url = jelly_url+ "/Users/" +user_id+ "/Items?searchTerm=" +titleUri+ "&IncludeItemTypes=Series,Movie,Episode&Limit=24&Fields=OriginalTitle,ProviderIds&Recursive=true";
    const auth = 'MediaBrowser Client="Jellyfin Web", Device="IMDb Scout Mod", DeviceId="666", Version="10.7.6", Token="' +access_token+ '"';
    const imdbid = "tt" +movie_id;
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url: url,
      headers: {
        "Accept": "application/json",
        "x-emby-authorization": auth,
        "content-Type": "application/json",
      },
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Jellyfin Debug_02 URL: " +url);
          console.log("Jellyfin Debug_02 Response: " +resultStr);
          console.log("Jellyfin Debug_02 Status: " +response.status);
        }
        if (response.status == 200) {
          if (resultStr.match(imdbid)) {
            const responseJSON = JSON.parse(response.responseText);
            const obj_array = responseJSON.Items;
            let found_obj = $.grep(obj_array, function(i) {
              return i.ProviderIds.Imdb === imdbid;
            });
            const x = found_obj[0].ServerId;
            const y = found_obj[0].Id;
            GM.setValue("Jellyfin_ServerId", x);
            GM.setValue("Jellyfin_ItemId", y);
            if (debug) {
              console.log("Jellyfin Debug_02 ServerId: " +x);
              console.log("Jellyfin Debug_02 ItemId: " +y);
            }
            resolve(true);
          } else {
            resolve(false);
          }
        } else if (response.status == 401) {
          GM.notification("Invalid username or password, \nor access token expired, \ntry to refresh the page first.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): Invalid username or password, or access token expired, try to refresh the page first.");
          GM.setValue("Jellyfin_UserId", "none");
          GM.setValue("Jellyfin_AccessToken", "none");
          resolve("stop");
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Jellyfin)");
          console.log("IMDb Scout Mod (Jellyfin): HTTP status is not 200!");
          resolve("stop");
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Jellyfin Server is running, \nand if Jellyfin Server URL is correct.", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request Error.");
        resolve("stop");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Jellyfin): Request is aborted.");
        resolve("stop");
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Jellyfin)");
        console.log("IMDb Scout Mod (Jellyfin): Request timed out.");
        resolve("stop");
      }
    });
  });
}

//==============================================================================
//    Special button: Emby
//==============================================================================

async function start_emby(movie_id, movie_title, movie_title_orig) {
  const found_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiAgMAAADWy+6dAAAACVBMVEUAAABStUoAZADvOtGiAAAAAXRSTlMAQObYZgAAAVZJREFUSMel1sFtwzAQRNEQiEpQPy6BATwHpy+WwINUZWDY9M8OveDBe/2gnyURor4+nJqFcs3KpqzsuiRFqgkjXTNGyhglkATkDNDESAmTQBKQM0DOADmTQBKQM0DODKhMzIC2izMD2qszA9LVGWZioJyBykqAdmXQpgwqBsVyM4hf+23voP1ejneQ7uV8A5VH6TO0Pco5Q/uz9AnSsxwOlVHOZtD2KiyCeZSzRUiUHqAiyhmgTRQWPRnK+R9SKI01JZYDZxOFRfXFUDqMFRgrHcaKMZRDg/E1bTDucDX+37oG49cjmHgPumDifbPtRjkEE59PE0x4pofv0DJKM4a9o8iw37oiwx4VTIRugjHI1wAJByiW6pDWUDXInPSdCPRjDNDFGCAoOxq+obQ8GZiZWZ9AA1qedDNUlyfqDC1Obh9jDIJxaPkl4gMzQzAOLb+s5jEmmT+/vrUeJElMGgAAAABJRU5ErkJggg==";
  const error_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiAgMAAADWy+6dAAAACVBMVEUAAABStUrgABUqlEtKAAAAAXRSTlMAQObYZgAAAVZJREFUSMel1sFtwzAQRNEQiEpQPy6BATwHpy+WwINUZWDY9M8OveDBe/2gnyURor4+nJqFcs3KpqzsuiRFqgkjXTNGyhglkATkDNDESAmTQBKQM0DOADmTQBKQM0DODKhMzIC2izMD2qszA9LVGWZioJyBykqAdmXQpgwqBsVyM4hf+23voP1ejneQ7uV8A5VH6TO0Pco5Q/uz9AnSsxwOlVHOZtD2KiyCeZSzRUiUHqAiyhmgTRQWPRnK+R9SKI01JZYDZxOFRfXFUDqMFRgrHcaKMZRDg/E1bTDucDX+37oG49cjmHgPumDifbPtRjkEE59PE0x4pofv0DJKM4a9o8iw37oiwx4VTIRugjHI1wAJByiW6pDWUDXInPSdCPRjDNDFGCAoOxq+obQ8GZiZWZ9AA1qedDNUlyfqDC1Obh9jDIJxaPkl4gMzQzAOLb+s5jEmmT+/vrUeJElMGgAAAABJRU5ErkJggg==";
  let button = $('a[href="https://emby.media"]');
      button.addClass('EmbyServerIndicator');
      button.prop("rel", "noreferrer");
      button.removeAttr("href");

  const emb_url = GM_config.get("emby_server_url").replace(/\/$/, "");
  const emb_user = GM_config.get("emby_username");
  const emb_pass = GM_config.get("emby_password");
  const debug = GM_config.get("emby_debug");

  let user_id = await GM.getValue("Emby_UserId", "none");
  let access_token = await GM.getValue("Emby_AccessToken", "none");
  let last_validcreds = await GM.getValue("Emby_LastValidCreds", "none");

  if (user_id == "none" || last_validcreds != emb_user+emb_pass) {
    const got_token = await getAuthFromEmby(emb_url, emb_user, emb_pass, debug);
    if (got_token) {
      user_id = await GM.getValue("Emby_UserId", "none");
      access_token = await GM.getValue("Emby_AccessToken", "none");
    } else {
      user_id = "none";
    }
  }
  let search_found = false;
  let server_id = "none";
  let item_id = "none";
  if (user_id != "none") {
    const x = await searchEmby(emb_url, movie_id, user_id, access_token, debug);
    if (x === true) {
      search_found = x;
      server_id = await GM.getValue("Emby_ServerId", "none");
      item_id = await GM.getValue("Emby_ItemId", "none");
    } else if (x === "stop"){
      search_found = x;
    }
  }
  const link_notfound = emb_url+ "/web/index.html?#!/home";
  if (search_found === true) {
    const link_found = emb_url+ "/web/index.html?#!/item?id=" +item_id+ "&serverId=" +server_id;
    button.prop("href", link_found);
    $('.EmbyServerIndicator').find('img').prop("src", found_icon);
  } else if (user_id == "none" || search_found === "stop") {
    button.prop("href", link_notfound);
    $('.EmbyServerIndicator').find('img').prop("src", error_icon);
  } else {
    button.prop("href", link_notfound);
  }
}

function getAuthFromEmby(emb_url, emb_user, emb_pass, debug) {
  return new Promise(resolve => {
    const url = emb_url+ "/emby/Users/authenticatebyname?X-Emby-Client=Emby Web&X-Emby-Device-Name=IMDb Scout Mod&X-Emby-Device-Id=666&X-Emby-Client-Version=4.6.4.0";
    const post_data = '{"Username":"' +emb_user+ '","Pw":"' +emb_pass+ '"}';
    GM.xmlHttpRequest({
      method: "POST",
      timeout: 5000,
      url:    url,
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json",
      },
      data: post_data,
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Emby Debug_01 URL: " +url);
          console.log("Emby Debug_01 Response: " +resultStr);
          console.log("Emby Debug_01 Status: " +response.status);
        }
        if (response.status == 200) {
          const responseJSON = JSON.parse(response.responseText);
          const user_id = responseJSON.User.Id;
          const access_token = responseJSON.AccessToken;
          GM.setValue("Emby_UserId", user_id);
          GM.setValue("Emby_AccessToken", access_token);
          GM.setValue("Emby_LastValidCreds", emb_user+emb_pass);
          resolve(true);
        } else if (response.status == 401) {
          GM.notification("Invalid username or password.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): Invalid username or password.");
          GM.setValue("Emby_UserId", "none");
          GM.setValue("Emby_AccessToken", "none");
          resolve(false);
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): HTTP status is not 200!");
          resolve(false);
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Emby Server is running, \nand if Emby Server URL is correct.", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request Error.");
        resolve(false);
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Emby): Request is aborted.");
        resolve(false);
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request timed out.");
        resolve(false);
      }
    });
  });
}

function searchEmby(emb_url, movie_id, user_id, access_token, debug) {
  return new Promise(resolve => {
    const imdbid = "tt" +movie_id;
    const url_p1 = emb_url+ "/emby/Users/" +user_id+ "/Items?Recursive=true&IncludeItemTypes=Movie,Series,Episode&Fields=OriginalTitle,ProviderIds&AnyProviderIdEquals=imdb." +imdbid;
    const url_p2 = "&Limit=50&X-Emby-Client=Emby Web&X-Emby-Device-Name=IMDb Scout Mod&X-Emby-Device-Id=666&X-Emby-Client-Version=4.6.4.0&X-Emby-Token=" +access_token;
    const url = url_p1 + url_p2;
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url: url,
      headers: {
        "Accept": "application/json",
        "content-Type": "application/json",
      },
      onload: function(response) {
        const resultStr = String(response.responseText);
        if (debug) {
          console.log("Emby Debug_02 URL: " +url);
          console.log("Emby Debug_02 Response: " +resultStr);
          console.log("Emby Debug_02 Status: " +response.status);
        }
        if (response.status == 200) {
          if (resultStr.match(imdbid)) {
            const responseJSON = JSON.parse(response.responseText);
            const x = responseJSON.Items[0].ServerId;
            const y = responseJSON.Items[0].Id;
            GM.setValue("Emby_ServerId", x);
            GM.setValue("Emby_ItemId", y);
            if (debug) {
              console.log("Emby Debug_02 ServerId: " +x);
              console.log("Emby Debug_02 ItemId: " +y);
            }
            resolve(true);
          } else {
            resolve(false);
          }
        } else if (response.status == 401) {
          GM.notification("Invalid username or password, \nor access token expired, \ntry to refresh the page first.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): Invalid username or password, or access token expired, try to refresh the page first.");
          GM.setValue("Emby_UserId", "none");
          GM.setValue("Emby_AccessToken", "none");
          resolve("stop");
        } else {
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Emby)");
          console.log("IMDb Scout Mod (Emby): HTTP status is not 200!");
          resolve("stop");
        }
      },
      onerror: function() {
        GM.notification("Request Error! \nCheck if Emby Server is running, \nand if Emby Server URL is correct.", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request Error.");
        resolve("stop");
      },
      onabort: function() {
        console.log("IMDb Scout Mod (Emby): Request is aborted.");
        resolve("stop");
      },
      ontimeout: function() {
        GM.notification("Request timed out!", "IMDb Scout Mod (Emby)");
        console.log("IMDb Scout Mod (Emby): Request timed out.");
        resolve("stop");
      }
    });
  });
}

//==============================================================================
//    Special button: Plex
//==============================================================================

async function start_plex(movie_id, movie_title, movie_title_orig) {
  const error_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqAgMAAAApTywEAAAADFBMVEUAAAAzMjLlJSOILCtdxdm5AAAAAXRSTlMAQObYZgAAASdJREFUSMfk1r0NwjAUAGEoGIF9GIGCBClFBsgI7JERKEiUklGyRKYAu7niXiy5Q8LtJ4XDfvk5lFcTrmuiU2xNsvOOXbhkdNHjnt34Oa+ikeKYv7Fu+q45tjbZFNs92xhak+0d25DsGdsj2Su2rmA9obI22yojdIxtI1Q2JFtkCsUUijkUcyjmUNtgU+iuzTZCZRoLTGOBORTTWGAOxRyKORRjyRQqI3Sxsds2Qku2yhSKaSxkg0ynhGnT6v4Dh4TpcOv3erI5E/N22jrPC0YmpqcB5lOwkYkp09Znq7unyax7hjAQNnbaxkDIGAgbA2FjIGxk2si0kSkj00Zm/TtuKxiZWDwQGAMhYyB+41vjMzrJkdkexNfGxNc2xdumxW0h3jY0XgAAgEgBSKfkENwAAAAASUVORK5CYII=";
  const found_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqAgMAAAApTywEAAAADFBMVEUAAAAyMzIl5SMriCtvvKHfAAAAAXRSTlMAQObYZgAAASdJREFUSMfk1r0NwjAUAGEoGIF9GIGCBClFBsgI7JERKEiUklGyRKYAu7niXiy5Q8LtJ4XDfvk5lFcTrmuiU2xNsvOOXbhkdNHjnt34Oa+ikeKYv7Fu+q45tjbZFNs92xhak+0d25DsGdsj2Su2rmA9obI22yojdIxtI1Q2JFtkCsUUijkUcyjmUNtgU+iuzTZCZRoLTGOBORTTWGAOxRyKORRjyRQqI3Sxsds2Qku2yhSKaSxkg0ynhGnT6v4Dh4TpcOv3erI5E/N22jrPC0YmpqcB5lOwkYkp09Znq7unyax7hjAQNnbaxkDIGAgbA2FjIGxk2si0kSkj00Zm/TtuKxiZWDwQGAMhYyB+41vjMzrJkdkexNfGxNc2xdumxW0h3jY0XgAAgEgBSKfkENwAAAAASUVORK5CYII=";
  let button = $('a[href="https://www.plex.tv"]');
      button.addClass('PlexServerIndicator');
      button.prop("rel", "noreferrer");
      button.removeAttr("href")

  const plex_url = GM_config.get("plex_server_url").replace(/\/$/, "");
  const plex_token = GM_config.get("plex_token");
  let titles =[];
      titles.push(movie_title);
  if (movie_title != movie_title_orig) {
    titles.push(movie_title_orig);
  }

  let tvdb_id = "00000000";
  // newLayout || reference : check if 'title' has just a year in brackets, eg. "(2009)" // Note: 'title' is fail-safe measure if other checks fail.
  const is_movie = (Boolean($('[data-testid=hero-title-block__metadata]').text().match('TV')) || Boolean($('li.ipl-inline-list__item').text().match('TV Special'))) ? false : Boolean($('title').text().match(/.*? \(([0-9]*)\)/));
  if (!is_movie) {
    tvdb_id = await getTVDbID(movie_id);
  }

  let search_found = false;
  let found_title = "";
  let metadata_key = "none";
  let machineId = "none";
  for (var i = 0; i < titles.length; i++) {
    const x = await getInfoFromPlex(titles[i], movie_id, tvdb_id, plex_url, plex_token);
    if (x === true) {
      search_found = x;
      found_title = titles[i];
      metadata_key = await GM.getValue("Plex_metadata_key", "none");
      machineId = await machineIdentifierFromPlex(plex_url);
      break;
    } else if (x === "stop"){
      search_found = x;
      break;
    }
  }

  const link_notfound = plex_url+ "/search?query=" +movie_title+ "&X-Plex-Token=" +plex_token;
  if (search_found === true) {
    let link_found;
    if (machineId !== "none" && metadata_key !== "none") {
      link_found = plex_url+ "/web/index.html#!/server/" +machineId+ "/details?key=" +metadata_key;
    } else {
      link_found = plex_url+ "/web/index.html#!/";
    }
    button.prop("href", link_found);
    $('.PlexServerIndicator').find('img').prop("src", found_icon);
  } else if (search_found === "stop") {
    button.prop("href", link_notfound);
    $('.PlexServerIndicator').find('img').prop("src", error_icon);
  } else {
    button.prop("href", link_notfound);
  }
}

function machineIdentifierFromPlex(plex_url) {
  return new Promise(resolve => {
    const url = plex_url+ "/identity";
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url:    url,
      onload: function(response) {
        if (response.status == 200) {
          const parser = new DOMParser();
          const result = parser.parseFromString(response.responseText, "text/xml");
          const x = $(result).find("MediaContainer").attr("machineIdentifier");
          if (x.length == 40) {
            resolve(x);
          } else {
            console.log("IMDb Scout Mod (Plex): machineIdentifier not found.");
            resolve("none");
          }
        } else {
          console.log("IMDb Scout Mod (Plex): machineIdentifier not found.");
          resolve("none");
        }
      },
      onerror: function() {
        resolve("none");
      },
      onabort: function() {
        resolve("none");
      },
      ontimeout: function() {
        resolve("none");
      }
    });
  });
}

function getInfoFromPlex(title, movie_id, tvdb_id, plex_url, plex_token) {
  return new Promise(resolve => {
    const titleUri = title.replace(/&/g,'%26').replace(/#/g,'%23');
    const imdbid = "tt" +movie_id;
    const tvdbid = "thetvdb://" +tvdb_id;
    const url = plex_url+ "/search?query=" +titleUri+ "&X-Plex-Token=" +plex_token;
    GM.xmlHttpRequest({
      method: "GET",
      timeout: 5000,
      url:    url,
      onload: function(response) {
        if (response.status == 200) {
          const resultStr = String(response.responseText);
          const parser = new DOMParser();
          const result = parser.parseFromString(response.responseText, "text/xml");
          if (resultStr.match(imdbid)) {
            const metadata_key = $(result).find('[guid*=' +imdbid+ ']').attr("key");
            if (metadata_key != undefined) {
              GM.setValue("Plex_metadata_key", metadata_key);
            }
            resolve(true);
          } else if (resultStr.match(tvdbid)) {
            const metadata_key = $(result).find('[guid*=' +tvdb_id+ ']').attr("key");
            if (metadata_key != undefined) {
              GM.setValue("Plex_metadata_key", metadata_key);
            }
            resolve(true);
          } else {
            GM.setValue("Plex_metadata_key", "none");
            resolve(false);
          }
        } else if (response.status == 401) {
          GM.setValue("Plex_metadata_key", "none");
          GM.notification("Unauthorized! \nCheck if Plex Token is correct.", "IMDb Scout Mod (Plex)");
          console.log("IMDb Scout Mod (Plex): Unauthorized! Check if Plex Token is correct.");
          resolve("stop");
        } else {
          GM.setValue("Plex_metadata_key", "none");
          GM.notification("HTTP status is not 200.", "IMDb Scout Mod (Plex)");
          console.log("IMDb Scout Mod (Plex): Status is not 200!");
          resolve("stop");
        }
      },
      onerror: function() {
        GM.setValue("Plex_metadata_key", "none");
        GM.notification("Request Error! \nCheck if Plex Server is running, \nand if Plex Server URL is correct.", "IMDb Scout Mod (Plex)");
        console.log("IMDb Scout Mod (Plex): Request Error.");
        resolve("stop");
      },
      onabort: function() {
        GM.setValue("Plex_metadata_key", "none");
        console.log("IMDb Scout Mod (Plex): Request is aborted.");
        resolve("stop");
      },
      ontimeout: function() {
        GM.setValue("Plex_metadata_key", "none");
        GM.notification("Request timed out!", "IMDb Scout Mod (Plex)");
        console.log("IMDb Scout Mod (Plex): Request timed out.");
        resolve("stop");
      }
    });
  });
}

//==============================================================================
//    Special button: Radarr
//==============================================================================

function get_radarr_movies(movie_id) {
  let imdbid = "tt" + movie_id;
  let radarr_url = GM_config.get("radarr_url").replace(/\/$/, "");
  let radarr_apikey = GM_config.get("radarr_apikey");
  const error_icon = "data:image/png;base64,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";
  GM.xmlHttpRequest({
    method: "GET",
    url: radarr_url + "/api/v3/movie",
    headers: {
      "X-Api-Key": radarr_apikey,
      "Accept": "text/json"
    },
    onload: function(response) {
      if (response.status == 200) {
        const responseJSON = JSON.parse(response.responseText);
        GM.setValue("IMDb_Scout_Mod_Radarr_movies", JSON.stringify(responseJSON));
        console.log("IMDb Scout Mod (Radarr): Sync movies complete!");
        buttonBuilder(imdbid, radarr_url, radarr_apikey);
      } else if (response.status == 401) {
          $('a[href="https://radarr.video"]').find('img').prop("src", error_icon);
          GM.notification("Error: Invalid Radarr API Key.", "IMDb Scout Mod (Radarr)");
      } else {
          $('a[href="https://radarr.video"]').find('img').prop("src", error_icon);
          GM.notification("Error: Status " + response.status, "IMDb Scout Mod (Radarr)");
      }
    },
    onerror: function() {
      $('a[href="https://radarr.video"]').find('img').prop("src", error_icon);
      console.log("IMDb Scout Mod (Radarr): Request Error. Check that Radarr is running or your Radarr URL.");
      GM.notification("Error: No response. \nPlease check your Radarr URL.", "IMDb Scout Mod (Radarr)");
    },
    onabort: function() {
      $('a[href="https://radarr.video"]').find('img').prop("src", error_icon);
      console.log("IMDb Scout Mod (Radarr): Request is aborted.");
    }
  });
}

async function buttonBuilder(imdbid, radarr_url, radarr_apikey) {
  let exists = await check_exists(imdbid);
  const exists_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAnNSURBVGjezVppVFTnGU57TpfjyWlTT1yRVXABNzQCAgoa1Kgxat1ApWpijFWjMW2NC0ar0YhYjUYFUeMh7lutdQEUUXNcmypukUVrGGffYWbunX1u32e418DADGoc8MdzdC535n7P+z3v+t3XOI57rRG8Tkgj7CB8R7hLuE+4QThImEsIfYbf8QsauyGVcI1gEImeMPmFZ5kdu3YzObk72cNH/8n88KCUcTgcDP39f4QlhJavCoE3CN9i4cUXvzOlpU+zRPZ8y9U+OJxr0yHUjbZBHbmOXbpzQ0eMsu38Js9kYhgT3X+LMI3w6+YkACvm63R69s8fLzAHhERw7YLCudBOUVx41x51ENa5G9chtJOb0KAhI+z/+vcp7EY14TxhcHMQ+AVhL8Mw7KixqbZW7YPdVvZceEPoENaZa0c7NPlP71sflJZhN9SEPH/7h+cFbL8hY/lKBouvvUDsAGQDGWFX2gaGccHhXevcA7LYrc7dol1rs/5hksnk2JEywieEN/1NANK5d+pMPtM2sONTy0dE9nRbt2uPPq6FS5YxJ0+f0RWeK9Ju3LTFEJ+U4oB8POWFz206hHE9+8Q5t+/YxVosFiP99h3CVMIv/UVguIvjqiakpdvaB0c8XUwgLT4xebDj9p27kISYIOEh1mi18pWr1xo7R/VyCU5dm0hwRKSbyLCRY2zFFy8ZeP84QYjzB4Gs8oqHZlgczilYMoqiT1l5hYpftNQDbjKkedXU92eaIan2IRH1/AOSC6K/zf90IUu/BVnJCF++DP+o/eHE/oOHrW1I28KDYdVPFy5mectLfcBN5PKVa5rR41JtkJWnf8Ao8BsykGvZilWsXq+Hoz8mLCa0eBkErmSu32hrTQ8XHtqOCBw5dlzfgPUl3nbEZrNJd+3Oq+odm+BsHeDdPxKSUxx7DxwyOZ1OSOsKYfTPJXBt9dost/WEh8EXzhQU6jwXe1N/U11eVab0QgIQS6QyxWfk9BGR5B+B9f0jsGMXDrudOmWa9eatEjg5DLWHEPXCBNZkrq9H4HR+QV0CLrssTTzRkSxKcuWosg0qg0rmRWLuXaJyQ/nR7HlmJDwEBE//wDNCyNlnfDTHUlpWzvDfyyaE+ImATTZZMskeW9mXi6l8i5ssSbPna/N1vmQFnM4v1PYfONjhyz8QqrNzd1JVwsI/HhCmE3710gmkSybbEyr7cQNFSVx8ZZwbi+WLzCQtlS8i1dXVsg2UP/rEJTohHyHaCcBO4Pqgoe6yxOhyueAfhYQUvxEQgB1JEg3gvlCsYp5Ui+S+dkOpVMr/+tlSBg6N8qNeWRLa2Z3xx6elW7//7y3ISsdHK/8RqMEAklVfbuSTd5171N9W071SX0Ru3rqtnpQ+3YpnBoZ1abAsCYmI4ijrgwRkleVnAjUYIErg+pJ/fCj9wHZZd1ntS1YURqW78/ZUJQ4c4kDegYzqh91QblvODiNP4kO/ExCQQL6RSGTmSudYEHp9JESJyWSS5e7aXY2+A35QO+zCV3DtwKEjQvMU1CQEavvH26KBrm3KrUalQSHzRYTKGeWsufPNyBO1o1UQfe4dk+BUqtRmum9VkxIAkkT93WF3gnic46jmiJ5zOXz6B1XFum7RMS7kjojImvW0DgiBlCz095tNTuAnWfVz78hM6QzrJd0ljQ//EJfcvqPu3jvWKexEQEgnbsz4NIqurgfNRkBAfGUs+Uc8t1S+hH1U/UjhjcRRqsWEUBscHsn16z+II39pfgICEHaHPhns3KfeW9UQCbK2dFzqFFsAlSKISD16x3JSmazslSGAnQA2KzcZve3CiZOnddgFEOgeHcNJpNLmJ4Dvx9T4gu2G/obaR2UrKauoUKHRQiSKTUjmDAZjabMRGCBKdC88VTzBfkh9sMpHtn5KgCyuIGd2oT8ZOWa8i5Jf8/gAFj5YlIJ8IJThXsNoHQISEIhxtWwbyGVt+MrCjzebjkAcaRz3L5NnsKVVpb4aIYlWp5PTIg0/VoqUwjXqE1QoMTpF9XLRdSSyr5uEAMIkSu2pknRbgTZf21greupMgQ41UYvft+L2HTgkRCXJoSPH9C3eaMVtyd7O8Fm8q18JCFl3jHi046TmpK6xrHu++KJ2+HtjbZheoCrFGr74ch2ikhjE0D8vXJKB4QKw6Ll64uclgCyLf9cpMk0++gL34imeKxYuzmAwOMPihQKuFZUMW3Ny0cyIN2/NMcyc/bHF4XRi8fsIv/FKIHP9BhvqjRchIGTWBbL5lhJ9ia/OTGwwGGSbt2QbevWNdzZUeSJc3rl7Ty2VyhSnzxQwfGf2dUPjlzoE8gvOmjBBeB4CKJfjyOofSKbbLuiKtY30xtJjx0/oBrw91O6tN0akWbFqDep+ud1uN/ERJ/1ZWsrrFotF8867o+2Y2zRGABaHzkc8Gebcrfqm0e4Lo0m0iGgVPacT2AFcRytJMsahCUaQkN/fCa2ftam/TglCfavkjio2MdmB6XTLNoEchrmeBFASo+taIV/OVFRVKHzpXCyWKFavXWdECESLWG8+RGSAUeNSrecvXITO8XvHCf2ed6xy/crVa+56RK3RyFetyTQmpwyzIUJ4LrBIW6TlOyyvcmFZVrZl2/Zq1PTeJthw1uSUd+yFZ4sMpHM8+wKh/4sOtq6u37jZdu/+D0+n0OhXSYfSZ8iWda6fKyrW4ugJY0rPHrdmBtTRPQNak5nF6vVV0HkFYcGLzEhrfzhFicI+a848cyO1idTHlFo5d/5fWEzhUP7Wn8KF10zhZs2xVDx8xPDf3Vq7x/05BDZR6LJgIJuTu8vwDBPpp4tXa7TyRUs/Z2iRDZ4TYLSO63+cMMl69foNYQ66nxD9Msfr48j7DYhC0CYmzLWk0uB0mu6X5u3dXxWXOJA/qelWT+eQESZxeXv2YxINufyHMNEfBxxtCeX7Dx5m3mwX5B4qTZk2w1J88ZIGTi34AlK7SqWWF1+4pKFOyYqZJhKPZ1jE9S7do10Zy1eycrmC5XX+OeEP/jzkW0DRwDRr7idmSAmnLcI4Y+iI0faxEydbhwx/zx5NGRTXAxo4jYH+gdnzFpjLKx4a+Xj+FSG4KU4pf0soUKnVbGJyzQEerAnHC3TXKzUjcnxuSOcgjfNiikKQioE/L05o6oPuMJQVjx//yCBzogvCor2dF9cc5IVyMfFJjs1bsxmD0Qirf0+YwRukWV41CCAUkZwY8gkTahdIBg6J4gv6xv9RakTHxDupdmE1Gi2sLiIsI/zuVXjZ43W+9n5IWZW9dv0GXvIwL85Ybv3boqW29Rs3WQrPFTFqtYblT+VzCV1etbdVXuOPevAmyik+BN7nUUI4R9hASGyu123+D+XnR5UxJxwhAAAAAElFTkSuQmCC";
  let button = $('a[href="https://radarr.video"]');
      button.prop("href", "javascript: void(0)");
      button.removeAttr("target");
  if (exists) {
    button.find('img').prop("src", exists_icon);
    button.click(function() {
      GM.openInTab(radarr_url + "/movie/" + exists[0].titleSlug);
    });
  } else {
    button.click(function() {
      new_movie_lookup(imdbid, radarr_url, radarr_apikey, exists_icon);
    });
  }
}

async function check_exists(imdbid) {
  let movieliststr = await GM.getValue("IMDb_Scout_Mod_Radarr_movies", "{}");
  let movie_list = JSON.parse(movieliststr);
  let filter = null;
  try {
    filter = movie_list.filter(movie => movie.imdbId == imdbid);
  }
  catch (e) {
    if (e instanceof TypeError) {
      return false;
    } else {
      errorNotificationHandler(e, false);
      return false;
    }
  }
  if (!filter.length) {
    return false;
  } else {
    return filter;
  }
}

function new_movie_lookup(imdbid, radarr_url, radarr_apikey, exists_icon) {
  GM.xmlHttpRequest({
    method: "GET",
    url: radarr_url + "/api/v3/movie/lookup/imdb?imdbId=" + imdbid,
    headers: {
      "X-Api-Key": radarr_apikey,
      "Accept": "text/json"
    },
    onload: function(response) {
      let responseJSON = null;
      if (!response.responseJSON) {
        if (!response.responseText) {
          GM.notification("No results found.", "IMDb Scout Mod (Radarr)");
          return;
        }
        responseJSON = JSON.parse(response.responseText);
        add_movie(responseJSON, imdbid, radarr_url, radarr_apikey, exists_icon);
      }
    }
  });
}

function add_movie(movie, imdbid, radarr_url, radarr_apikey, exists_icon) {
  movie.rootFolderPath = GM_config.get("radarr_rootfolderpath");
  movie.monitored = GM_config.get("radarr_monitored");
  movie.minimumAvailability = GM_config.get("radarr_minimumavailability");
  if (GM_config.get("radarr_searchformovie")) {
    movie.addOptions = {searchForMovie: true};
  } else {
    movie.addOptions = {searchForMovie: false};
  }
  const qProID = GM_config.get("radarr_profileid");
  if (qProID == "Any") {
    movie.qualityProfileId = 1;
  } else if (qProID == "HD - 720p/1080p") {
    movie.qualityProfileId = 6;
  } else if (qProID == "HD-1080p") {
    movie.qualityProfileId = 4;
  } else if (qProID == "HD-720p") {
    movie.qualityProfileId = 3;
  } else if (qProID == "SD") {
    movie.qualityProfileId = 2;
  } else if (qProID == "Ultra-HD") {
    movie.qualityProfileId = 5;
  } else if (qProID == "Custom") {
    movie.qualityProfileId = parseInt(GM_config.get("radarr_customprofileid"));
  }
  GM.xmlHttpRequest({
    method: "POST",
    url: radarr_url + "/api/v3/movie",
    headers: {
      "X-Api-Key": radarr_apikey,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(movie),
    onload: function(response) {
      const responseJSON = JSON.parse(response.responseText);
      if (response.status == 201) {
        let button = $('img[title="Radarr"]');
            button.prop("src", exists_icon);
            button.parent().off("click");
        button.click(function() {
          GM.openInTab(radarr_url + "/movie/" + responseJSON.titleSlug);
        });
        GM.notification('"' + responseJSON.title + '"' + " \nSuccessfully sent to Radarr.", "IMDb Scout Mod (Radarr)");
      } else {
          GM.notification("Error: " + responseJSON[0].errorMessage, "IMDb Scout Mod (Radarr)");
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Radarr): Request Error.");
      GM.notification("Request Error.", "IMDb Scout Mod (Radarr)");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Radarr): Request is aborted.");
      GM.notification("Request is aborted.", "IMDb Scout Mod (Radarr)");
    }
  });
}

function errorNotificationHandler(error, expected, errormsg) {
  let prestring = "IMDb Scout Mod (Radarr): ";
  if (expected) {
    GM.notification("Error: " + errormsg, "IMDb Scout Mod (Radarr)");
  } else {
    GM.notification("Unexpected Radarr Error, please report it. \nActual Error: " + error, "IMDb Scout Mod (Radarr)");
  }
}

//==============================================================================
//    Special button: Sonarr
//==============================================================================

async function get_sonarr_tvseries(movie_id) {
  const error_icon = "data:image/png;base64,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";
  var tvdbid = await getTVDbID(movie_id);
  if (tvdbid == "0") {
    $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
    console.log("IMDb Scout Mod (Sonarr): TVDb ID not found.");
    return;
  } else if (tvdbid == undefined) {
    $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
    console.log("IMDb Scout Mod (Sonarr): Error converting IMDbID to TVDbID (undefined).");
    return;
  }
  let sonarr_url = GM_config.get("sonarr_url").replace(/\/$/, "");
  let sonarr_apikey = GM_config.get("sonarr_apikey");
  GM.xmlHttpRequest({
    method: "GET",
    url: sonarr_url + "/api/series",
    headers: {
      "X-Api-Key": sonarr_apikey,
      "Accept": "text/json"
    },
    onload: function(response) {
      let responseJSON = null;
      if (!response.responseJSON) {
        try {
          responseJSON = JSON.parse(response.responseText);
          if (responseJSON.error == "Unauthorized") {
            throw "creds";
          }
          GM.setValue("IMDb_Scout_Mod_Sonarr_series", JSON.stringify(responseJSON));
          console.log("IMDb Scout Mod (Sonarr): Sync series complete!");
          sonarrButtonBuilder(tvdbid, sonarr_url, sonarr_apikey);
        }
        catch (e) {
          $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
          if (e instanceof SyntaxError) {
            sonarrErrorNotificationHandler(e, true, "No JSON in response. \nPlease check your Sonarr URL.");
          } else if (e == "creds") {
            sonarrErrorNotificationHandler(e, true, "Invalid Sonarr API Key.");
          } else {
            sonarrErrorNotificationHandler(e, false);
          }
        }
      }
    },
    onerror: function() {
      $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
      console.log("IMDb Scout Mod (Sonarr): Request Error. Check that Sonarr is running or your Sonarr URL.");
    },
    onabort: function() {
      $('a[href="https://sonarr.tv"]').find('img').prop("src", error_icon);
      console.log("IMDb Scout Mod (Sonarr): Request is aborted.");
    }
  });
}

async function sonarrButtonBuilder(tvdbid, sonarr_url, sonarr_apikey) {
  let exists = await sonarrCheck_exists(tvdbid);
  const exists_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAA/SSURBVHjatJp5lFxVncc/972qevVq7aru6i3d2egkKC4hSwMRQiAbBBNIxiDoxDMQFQiK4wgqzOCcGSaHEZWZM5AxOqiDjGMCiDhiNgYmq2RGEyEhCcSsvaareql9eVX1fvNHd4d0p5t0EG6de86tOu+9+v5+97d9f/cpDcVoI1RVRSgc4vlnn2XatGkUCoXRLg0As4EpQCPwUaVUGDABBRSAtIgcBY4Bp4H9wKnhD1KqH4/D4WDRosXsff0gZjiCO5fAME1EZMj1Dt77cAE3AcuBucCEcwGIyNn1OeAWnPM1BewWkVeBZ4Cu9wJCew/3eIG7BjT4ArBqEPwg8OFaGvx92PADNyqlvgMcAJ4ELvmgBbgZeE0ptR647FyND1+PZhrnCjK4VkpVA/cqpfYDfwN43jcBNE3D7Xb7lVLrlVIvKqU+OghoENRI69GEGU3ggXUAeAT4H6fTebmu64ywmWMXQFOKVCo1bfeePdsNw7jr3TT8fg0RwTTN5vb29u3t7e2fdTj0d71eF2CkqVB43MYVXdHu32zfuXNauDLMlc3NFEul85x0tPVoAEe7D8A0TXp6elh5623GwYNvrAgGgmlLc7zmKls4nM7zBZgxcxZ19fVn57iGBiJVlUQmTbnS0bzo14F0rNYul9m+Ywe1tbXMnjWLYrE45M/H6gcXutY0TRKJBHesXs2+ffuorggSuG75IkOTdDHW8ZoojWKphF0uUx6Y+i0rltPQ0DAwGxk3bhw9vb1TE12dWzrS+Zr6Gz9N266tlIpFtmzdhtswmDfvWkqlErZt836YlYjg8/loaWlh9ee/wNbNm3Ei1C1fTTSRwjzx+qJEKn2isbHxQH19PaFQiHA4TDgcRvX09AxxWKWU7/4Hvr7rhRdemK7ZJXyzr6dYMwl5ZQPlcplCscjaf3iEu++6C8uysCzrTzIhTdPw+/28ffQod9+zhj/s34/X5cC4/lPYosj/9wYchonmcGaeeebpa5uamvZZlvXOA5PJ5JCZy2bX9/X1yc23LBfT6xNAGq5bKhPv/Ib4/H6pqa4RQL5831fk5MmTYtu25HI5SSQSEo/HJZFIjGmm02kplUpSKBRk48Znpa5+nFTX1IpDIeNX3i3jP/VF0UFC4UoxPR75r1+/JLZtv5lKpQKpVIrBqT/wwAPYto1t24jIkrJtP+52u1m2bCnRaJRDh4/gT/fgDlYQnLsUdeowuqZx5O2j/PLFX5FOZ6ivq6OmpgbTNFGqPwrICOHY6XRimiZut5t0Os3u3Xt4+OGH+dFPfkw6HicU8BNZ/gW8hpPcK8+hXG4ikQg//MEPWLb0k6RSqWrbtg0R2TaYMFU8Hj/rQ0qp3wMfFhEMwyCXy/H1b3yTp/7th3idDirn3oRVPQG1/Xk6OzuIVNcSi56hpq6em5ct4/LLpzNzxkxqamuojkT6haE/J6TTaaLRKG+8cYDjx4+zYeNGjhw5gsPpJJ/NUDN+EqWPzaUq4OX0s+sR3aCuvp7Hvv2PrFz5KZLJ5CDOvIg0AweBIQKsVko9da6tGoaBZVl88a672bx5C15d8F+3Avv5Z0hfsxDtyF7E8KA0RS6bxRYhFApRVVXJhPHj8Xi8iAjlcplYLMrplha6Yz2USkUMw8DhcEI+DR/5BN6d29D/8hEy//EYlsPA7/fz/XVPsnDhQlKp1HBXek5EbgUgHo8Tj8e1RCJxaLidxuNxyeVykk6nZcas2aJAJn58ljSJU66S8RKYfo1U+b0SCIXFabilurZOQEm4skoAMUyPoDkElAQrQgLIxMmTRXM4pW5cg4S9HqmYMVc+IROloYhM/cR80UE8Pr/8ZtMmsW17NB8qxOPx6fF4/OwO3ABsHi3B+P0+Nm/Zyh133IkTG72hCWPf7/ERJD5/Dvk3diNON5quUS6X0ZSGLTaapiG2oDSFphSlchm34SZfyGNooE2bRfDVnRQpkZl9OdJ6lL5sgVWr/px1Tz5BOp0eEqqH4VoL/I02kFBufbdkk05nWHLDDcyZM4eOaIziqbdomzCJOD1UvfI7nB+aBaUCsVg31ZEIZzrb8Tk1UtFOrGQfLrtEZ3sbHtOkpbUVKVokdRPt1a3kydE6ZTLW8Tdp7YpRXR3ha3/11fPC8wi4Pgt4NcANXHWhhGSLcO+aNYTClZgVlbh723Feu4g43bisLC63ScDvxUrFCTROJrWhHc8OG8fLOXK/6KLi0unodomQ34vXH8BTyqMjFOctwNV1Am9lBNNjcsONN3DJJZdQyBculP8mAlMcwMdF5NILkZFcLscVVzbT1NTE7/7vf5kwaRIndr9MIOijzAFyuTxBv4++n7XQOCdEiCnoA2zPRsgd6ebUpjYqvv5xTh96g5r6cfT4DbL5lxk3cSLHjx+noaGRW5Yto1QqMUgUL1A7Xe0APqSUGlKnj7Qb5XKZQCDAkiVLOHLkMJqmE45UYxgu7LKNYRjIL2JcNmcKOQpkyAwrezU+tmQqR65+g/D0qTiLWbRQGKdVRClFMBhkwoTxzJgxg3w+P6byW0Tma0D1WIswEWHa1CnoDienTp3CbbiJRbvJJ3rhxRiXXdNEigwWg6l+sLYFG5te0lwamIq+4yixriiJRAJBOH26BdXPO/D5fNi2PaYaSik1SVNKjR9OA2UUFlEqlWhobMRtuKkMh7HtMn6viaexicicCnIUsIfQDAXnNA0UkCTLhMZGwnNvwqMrNE0jFKqgXCoxe/ZsXC7XqFR0hLVXA5pGIN8jClAul6muriZfyOMPBIjGYuhiU3jqAH4qKFIevYgbDAaUcWFgrf8ldrlEMpkkHA6TSiZoarrkYhmcqQ20PsZUFosIwUCA2toaipaF1+tFH7jNwHme2QyuU8SG7IONje4E3enCY5oULQufz0ddXR3lcvliKnFD4/y6610FcDgdVAQraG9rxev10tOXOOukg1zuHfBqoP0QGfI3ThyU2yGdzqCURktrKy7DRFMaF0svHIB9MTcUrSICmB4Pbrcbj9cDpLGHaF0NIafveMA7xiRl8JpuTJ8Xq2hhmuYA07so/EUN6B7r1bquE4vFeOutt6isrKKjvQOXYaDfNZMoXThwIChkQCsyAFqG6F+Rp0Dl+nsp2zY9PT1EIhHOdHZw7PgxHLp+MQLkNOCtMW+XQycajWGX++sc0zRxuD2U247RvStBEA9qQATtrM7lbCwShAA+WqKnye/5DS6vH7fbjdiCabo5ceIk9sVtQVYTkY6L2YHTLadxm246OjsJBoPEEwmU04V551Re3/U2Ifxo6COYEwTxc4JjuG6eRzwWJW9ZGC4X7R3t+PwB9u/fTy6bvRie3a4Bx8fuxLB//x+wLAuXy0WxWERH0Jwu7HSC8qcbOLDrKC4MKvAPfHwECeDFw9GuoxSmN5M/+jq620QKOUqlEi6XCxGho7OTvngcfYxmJCK7NaXUPqDzwubjIBqNsnPXLrLpNNXV1XSf6SA8+VKsfJ5EtoBhF+m7Fk5d08TBXUc5PDDf3PU2x25qJjbewNPdSqpQwqyMEL56CdlEnJpIhN6+OLlcji1bt2Ga5lh1+oomIr0isueCAdcw2Lt3L93d3egOJ1ohi/+KBXhfP0S4J4lWsnCZHpxuD66TB8nMUzhXVCJLA1iLXBh/eBWHpuHy+dFKFubR42ibX6Ry5T2Qz6KpfiW99NJLFIvFsYDvBt4ezPkvXag/ms/n+e7jj9Pd3U2F6STd8GEm7zpIopgl23wVXr+feF8fEyZMIBpPUjtpMgU0dNNLqK6B7nSW6poa2jo68ASC9I5v6N/Zp5/AXnAbIbeTnp4edu/Zw86dO/H5fKOWNANjI9A7KMBzQMe7NZ02bdrMoUOHMZTCM/1qKl/7LTnS5KfPpHzsALphIgIOpwOx7X6+O5DhHbqObdv9tm4LTrcHSfTQW1PVr6Cf/AvBW78E0h+xnlz3r+RyORwOx7uYv2wcQuqVUt8C/m44eI/HQ2trKwsXLSbW1UVlTS32sRME8XDy0kvwx05Tdpnk8zl8Ph/d3d0EgwH6+uJ4TA9WsZ9Z+bxekqk09fV19Pb0UlFRQTGXIV0Sanv7s7lrzhzaDvyOIhqPrl3LV75y37ndiCG2LyILhpzQiMg6pdQaoGYQvNfrobPzDF/68pdpb+/A1MG8ajHF+ydR2P8q9omt2FXVZDIZMskEmqZRXR2hYVwDLpeLyqoqlFJkMxkymQydZ86ACKlkAk3v7xMpK40+/aOkxl2K2fxh5MgBXGLzyNq1BAIB7rjjL0ilUsMr0bVn0+I5bRWUUncCPxrUfHt7O1+67z62bN5Kpd9L7YrVxFNp2PECsd444doaus5EmTPnKhYtWsgVV1zBRy67DI/Hg2EYZ8OhiGBZFvl8nq5olH379rNp0ya279hBPp/HyuWI+D0kGy9j0vylnHzqUbBtvP4ADz30IPfc/UVSqfSgEBtE5PazoBOJxLlTTyQSmyzLkra2dmm+8koJV1aJx+WUmk+ukom3rRHT6ZDaunoB5Opr5sq/P/20RKNRERGxLEvS6bQkk0lJJpNDWiHJZFJSqZTkcjkpl8tiWZa8tnevrP78F8TpMqSyKiIOhUxacItMXP2ghEIhqa8fJ4bhlg0bNoqISDab7cpkMnWZgR3NZDKoc+kbgNPprG9tbX3ttts/M/7w4UNIsUjV0s+RzVuUtj+P0+OjVCrxrW89zOdWrSIYDJLJZC62DD7bTtd1nV27d/Pggw9y4sQprFQcY+Z1+KZ+jO5n1+Fym2SzWb73+Pfk5mXLludyuV8N4QtLbvrkeQnrxMmTcw6/+ebL9ZFKT2HWYuobG2n52RPkimXq6uv57nceY8WK5e8Z+PAx6PwPPvTX/PhHT1EV8BOadzMZTwWO3S/S0tYGSntI19Sjw+mmUvr5FM7pdOIzjRXhhSs3mhUhx5nnfkARRbiyku+vW8fixYtGiw7v+XzAMAxKpRJfu/9+fvrTZwi6XYTm/xlpzcVVdvc/z5g186vp81uMKJc7MEITqIwWDKHXNqwM97U9cyYaM3x+Pxs3/Jz5119POp3+QM7GBuur2z/zWbZu20ZdVSXt4n7ie489et9XV3161HM8RpqaplNqO/5cb1/fsilTp3b88oVfsGD+/A8E/GDCGywSf/6fP+Mzt99OIpP9Wzlz8r7hfjr2U0qni0wms23WrFnzrp0795URusTvuxCFQgGf19t175o1t6LU378vB926pv2xXC7fKCLfAHo/YCE2FkulZtu2n9O0C8PTxmqfIEXgMRFpFpH1A+86vJ9jm4jcKCK3AS0yRmb2Xt6VOA7cIyKzReSbwJsX2xg4Z3SJyJMiMh9YDGy52Af8KW+rvA18W0T+SSk1TURmKqXmi8g0pVRgoOttDHDKIpAHMiLSCvwW2A788WKaCiON/x8AhQkPKfx8EtYAAAAASUVORK5CYII=";
  let button = $('a[href="https://sonarr.tv"]');
      button.prop("href", "javascript: void(0)");
      button.removeAttr("target");
  if (exists) {
    button.find('img').prop("src", exists_icon);
    button.click(function() {
      GM.openInTab(sonarr_url + "/series/" + exists[0].titleSlug);
    });
  } else {
    button.click(function() {
      new_tvseries_lookup(tvdbid, sonarr_url, sonarr_apikey, exists_icon);
    });
  }
}

async function sonarrCheck_exists (tvdbid) {
  let seriesliststr = await GM.getValue("IMDb_Scout_Mod_Sonarr_series", "{}");
  let series_list = JSON.parse(seriesliststr);
  let filter = null;
  try {
    filter = series_list.filter(series => series.tvdbId == tvdbid);
  }
  catch (e) {
    if (e instanceof TypeError) {
      return false;
    } else {
      sonarrErrorNotificationHandler(e, false);
      return false;
    }
  }
  if (!filter.length) {
    return false;
  } else {
    return filter;
  }
}

function new_tvseries_lookup(tvdbid, sonarr_url, sonarr_apikey, exists_icon) {
  GM.xmlHttpRequest({
    method: "GET",
    url: sonarr_url + "/api/series/lookup?term=tvdb:" + tvdbid,
    headers: {
      "X-Api-Key": sonarr_apikey,
      "Accept": "text/json"
    },
    onload: function(response) {
      let responseJSON = null;
      if (!response.responseJSON) {
        if (!response.responseText) {
          GM.notification("No results found.", "IMDb Scout Mod (Sonarr)");
          return;
        }
        responseJSON = JSON.parse(response.responseText);
        add_tvseries(responseJSON[0], tvdbid, sonarr_url, sonarr_apikey, exists_icon);
      }
    }
  });
}

function add_tvseries(tvseries, tvdbid, sonarr_url, sonarr_apikey, exists_icon) {
  tvseries.rootFolderPath = GM_config.get("sonarr_rootfolderpath");
  tvseries.seasonFolder = GM_config.get("sonarr_seasonfolder");
  tvseries.seriesType = GM_config.get("sonarr_seriestype");
  tvseries.languageProfileId = GM_config.get("sonarr_languageprofileid");
  if (GM_config.get("sonarr_searchformissing")) {
    tvseries.addOptions = {searchForMissingEpisodes: true};
  }
  if (GM_config.get("sonarr_searchforcutoff")) {
    tvseries.addOptions = {searchForCutoffUnmetEpisodes: true};
  }
  if (GM_config.get("sonarr_ignoreEpisodesWithFiles")) {
    tvseries.addOptions = {ignoreEpisodesWithFiles: true};
  }
  if (GM_config.get("sonarr_ignoreEpisodesWithoutFiles")) {
    tvseries.addOptions = {ignoreEpisodesWithoutFiles: true};
  }
  const uSceneNr = GM_config.get("sonarr_usescenenumbering");
  if (uSceneNr == "Yes") {
    tvseries.useSceneNumbering = true;
  } else if (uSceneNr == "No") {
    tvseries.useSceneNumbering = false;
  }
  const qProID = GM_config.get("sonarr_profileid");
  if (qProID == "Any") {
    tvseries.ProfileId = 1;
  } else if (qProID == "HD - 720p/1080p") {
    tvseries.ProfileId = 6;
  } else if (qProID == "HD-1080p") {
    tvseries.ProfileId = 4;
  } else if (qProID == "HD-720p") {
    tvseries.ProfileId = 3;
  } else if (qProID == "SD") {
    tvseries.ProfileId = 2;
  } else if (qProID == "Ultra-HD") {
    tvseries.ProfileId = 5;
  } else if (qProID == "Custom") {
    tvseries.ProfileId = parseInt(GM_config.get("sonarr_customprofileid"));
  }
  const sonMon = GM_config.get("sonarr_monitored");
  if (sonMon == "All Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'all'};
  } else if (sonMon == "Future Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'future'};
  } else if (sonMon == "Missing Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'missing'};
  } else if (sonMon == "Existing Episodes") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'existing'};
  } else if (sonMon == "Pilot Episode") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'pilot'};
  } else if (sonMon == "Only First Season") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'firstSeason'};
  } else if (sonMon == "Only Latest Season") {
    tvseries.monitored  = true;
    tvseries.addOptions = {monitor: 'latestSeason'};
  } else if (sonMon == "None") {
    tvseries.monitored  = false;
    tvseries.addOptions = {monitor: 'none'};
  }
  GM.xmlHttpRequest({
    method: "POST",
    url: sonarr_url + "/api/series",
    headers: {
      "X-Api-Key": sonarr_apikey,
      "Accept": "text/json",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(tvseries),
    onload: function(response) {
      let responseJSON = null;
      if (!response.responseJSON) {
        responseJSON = JSON.parse(response.responseText);
        try {
          if (!responseJSON.title && responseJSON[Object.keys(responseJSON)[0]].errorMessage == "This series has already been added") {
            throw "exists";
          }
          let button = $('img[title="Sonarr"]');
              button.prop("src", exists_icon);
              button.parent().off("click");
          button.click(function() {
            GM.openInTab(sonarr_url + "/series/" + responseJSON.titleSlug);
          });
          GM.notification('"' + responseJSON.title + '"' + " \nSuccessfully sent to Sonarr.", "IMDb Scout Mod (Sonarr)");
        }
        catch (e) {
          if (e == "exists") {
            sonarrErrorNotificationHandler(e, true, "Series already exists in Sonarr.", "IMDb Scout Mod (Sonarr)");
          } else {
            sonarrErrorNotificationHandler(e, false);
          }
        }
      }
    }
  });
}

function sonarrErrorNotificationHandler(error, expected, errormsg) {
  let prestring = "IMDb Scout Mod (Sonarr): ";
  if (expected) {
    GM.notification("Error: " + errormsg, "IMDb Scout Mod (Sonarr)");
  } else {
    GM.notification("Unexpected Sonarr Error, please report it. \nActual Error: " + error, "IMDb Scout Mod (Sonarr)");
  }
}

//==============================================================================
//    Special button: Trakt-Watchlist
//==============================================================================

async function start_trakt(movie_id, movie_title) {
  const imdbid = "tt" + movie_id;
  const title = movie_title.trim();
  let button = $('a[href="https://trakt.tv/oauth/authorize?client_id=325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2&redirect_uri=https://www.imdb.com/title/tt0052077/reference&response_type=code"]');
  const access_token = await GM.getValue("IMDb_Scout_Mod_Trakt_access_token", "none");

  if (access_token == 'none') {
    button.click(function() {
      button.remove();
    });
    GM.notification("Trakt's access token not found. \nPress icon to authorize with Trakt. \nRefresh page after authorization is completed.", "IMDb Scout Mod (Trakt-Watchlist)");
    return;
  }
  const created_at = await GM.getValue("IMDb_Scout_Mod_Trakt_created_at", 9999999999);
  const current_time = Math.round(new Date().getTime() / 1000);
  if (current_time - created_at > 5184000) {
    trakt_refresh_token();
    return;
  }
  const exists_icon = "data:image/png;base64,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";
  const missing_icon = "data:image/png;base64,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";
  const error_icon = "data:image/png;base64,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";
  const synctime = await GM.getValue("IMDb_Scout_Mod_Trakt_watchlist_synctime", "none");
  button.prop("href", "javascript: void(0)");
  button.removeAttr("target");

  if (synctime !== 'none') {
    if (current_time - synctime < GM_config.get('trakt_synclimiter')) {
      GM.setValue("IMDb_Scout_Mod_Trakt_watchlist_synctime", current_time);
      const trakt_watchlist = await GM.getValue("IMDb_Scout_Mod_Trakt_watchlist", "none");

      if (Boolean(trakt_watchlist.match(imdbid))) {
        button.find('img').prop("src", exists_icon);
        button.click(function() {
          trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
        });
      } else {
        button.find('img').prop("src", missing_icon);
        button.click(function() {
          trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
        });
      }
    } else {
      get_trakt_watchlist(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
    }
  } else {
    get_trakt_watchlist(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
  }
}

function get_trakt_watchlist(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon) {
  GM.xmlHttpRequest({
    method: "GET",
    url: "https://api.trakt.tv/sync/watchlist",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
      "trakt-api-version": "2",
      'trakt-api-key': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2'
    },
    onload: function(response) {
      if (response.status == 200) {
        let responseJSON = JSON.parse(response.responseText);
        const set_synctime = Math.round(new Date().getTime() / 1000);
        const trakt_watchlist = JSON.stringify(responseJSON);

        GM.setValue("IMDb_Scout_Mod_Trakt_watchlist", trakt_watchlist);
        GM.setValue("IMDb_Scout_Mod_Trakt_watchlist_synctime", set_synctime);
        console.log("IMDb Scout Mod (Trakt-Watchlist): Sync watchlist complete!");

        if (Boolean(trakt_watchlist.match(imdbid))) {
          button.find('img').prop("src", exists_icon);
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
        } else {
          button.find('img').prop("src", missing_icon);
          button.click(function() {
            trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
        }
      } else if (response.status == 401) {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        location.reload();
      } else if (response.status > 499) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Server/CF Error or Overloaded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 399) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Sync Error " + response.status + ", please report it.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else {
        button.find('img').prop("src", error_icon);
        button.off("click");
        console.log("IMDb Scout Mod (Trakt Sync status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Sync response): " + response.responseText);
      }
    }
  });
}

function trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon) {
  const body = {'movies': [{'ids': {'imdb': imdbid}}], 'shows': [{'ids': {'imdb': imdbid}}], 'episodes': [{'ids': {'imdb': imdbid}}]};

  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/sync/watchlist",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
      "trakt-api-version": "2",
      'trakt-api-key': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2'
    },
    onload: function(response) {
      if (response.status == 201) {
        const responseJSON   = JSON.parse(response.responseText);
        const resultAdded    = JSON.stringify(responseJSON["added"]);
        const resultExisting = JSON.stringify(responseJSON["existing"]);
        const countAdded     = (resultAdded.match(/1/g) || []).length;
        const countExisting  = (resultExisting.match(/1/g) || []).length;

        if (countAdded == 0 && countExisting == 0) {
          button.find('img').prop("src", error_icon);
          button.off("click");
          GM.notification('"' + title + '"' + " \nNot Found on Trakt.", "IMDb Scout Mod (Trakt-Watchlist)");
        } else if (countAdded == 0 && countExisting !== 0) {
          button.find('img').prop("src", exists_icon);
          button.off("click");
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
          GM.notification('"' + title + '"' + " \nAlready exists in Trakt's watchlist!", "IMDb Scout Mod (Trakt-Watchlist)");
        } else if (countAdded > 1) {
          button.find('img').prop("src", exists_icon);
          button.off("click");
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
          GM.notification('"' + title + '"' + " \nAdded to Trakt's watchlist. \nDetected incorrect data on Trakt!", "IMDb Scout Mod (Trakt-Watchlist)");
        } else {
          button.find('img').prop("src", exists_icon);
          button.off("click");
          button.click(function() {
            trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
          });
          GM.notification('"' + title + '"' + " \nAdded to Trakt's watchlist.", "IMDb Scout Mod (Trakt-Watchlist)");
        }
      } else if (response.status == 401) {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        location.reload();
      } else if (response.status == 429) {
          button.find('img').prop("src", error_icon);
          button.off("click");
          GM.notification("API rate limit exceeded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 499) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Server/CF Error or Overloaded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 399) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Add Error " + response.status + ", please report it.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else {
        button.find('img').prop("src", error_icon);
        button.off("click");
        console.log("IMDb Scout Mod (Trakt Add status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Add response): " + response.responseText);
      }
    },
    onerror: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Add Request Error.");
    },
    onabort: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Add Request is aborted.");
    }
  });
}

function trakt_watchlist_remove(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon) {
  const body = {'movies': [{'ids': {'imdb': imdbid}}], 'shows': [{'ids': {'imdb': imdbid}}], 'episodes': [{'ids': {'imdb': imdbid}}]};
  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/sync/watchlist/remove",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + access_token,
      "trakt-api-version": "2",
      'trakt-api-key': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2'
    },
    onload: function(response) {
      if (response.status == 200) {
        button.find('img').prop("src", missing_icon);
        button.off("click");
        button.click(function() {
          trakt_watchlist_add(imdbid, title, access_token, button, error_icon, missing_icon, exists_icon);
        });
        GM.notification('"' + title + '"' + " \nRemoved from Trakt's watchlist.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status == 401) {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        location.reload();
      } else if (response.status == 429) {
          button.find('img').prop("src", error_icon);
          button.off("click");
          GM.notification("API rate limit exceeded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 499) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Server/CF Error or Overloaded.", "IMDb Scout Mod (Trakt-Watchlist)");
      } else if (response.status > 399) {
        button.find('img').prop("src", error_icon);
        button.off("click");
        GM.notification("Remove Error " + response.status + ", please report it.", "IMDb Scout Mod (Trakt-Watchlist)");

      } else {
        button.find('img').prop("src", error_icon);
        button.off("click");
        console.log("IMDb Scout Mod (Trakt Remove status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Remove response): " + response.responseText);
      }
    },
    onerror: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Remove Request Error.");
    },
    onabort: function() {
      button.find('img').prop("src", error_icon);
      button.off("click");
      console.log("IMDb Scout Mod (Trakt-Watchlist): Remove Request is aborted.");
    }
  });
}

function traktCatchToken() {
  const code = location.href.replace('https://www.imdb.com/title/tt0052077/reference?code=','');
  var body = {
    'code': code,
    'client_id': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2',
    'client_secret': 'ee4204782a908e201ae22da35fbd19f08362e99ba158b04f1931caf8eea55fe4',
    'redirect_uri': 'https://www.imdb.com/title/tt0052077/reference',
    'grant_type': 'authorization_code'
  };
  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/oauth/token",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    },
    onload: function(response) {
      if (response.status == 200) {
        let responseJSON = JSON.parse(response.responseText);
        const access_token  = responseJSON.access_token;
        const refresh_token = responseJSON.refresh_token;
        const created_at    = responseJSON.created_at;
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", access_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_refresh_token", refresh_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_created_at", created_at);
        window.close();
      } else {
        console.log("IMDb Scout Mod (Trakt Get Token status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Get Token response): " + response.responseText);
      }
    }
  });
}

async function trakt_refresh_token() {
  const refresh_token = await GM.getValue("IMDb_Scout_Mod_Trakt_refresh_token", "none");
  var body = {
    'refresh_token': refresh_token,
    'client_id': '325c09f8f8d6e3466c7ced12c11cc32d4af00e1af1f6310da4f6dfb702c7b8c2',
    'client_secret': 'ee4204782a908e201ae22da35fbd19f08362e99ba158b04f1931caf8eea55fe4',
    'redirect_uri': 'https://www.imdb.com/title/tt0052077/reference',
    'grant_type': 'refresh_token'
  };
  GM.xmlHttpRequest({
    method: "POST",
    url: "https://api.trakt.tv/oauth/token",
    data: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    },
    onload: function(response) {
      if (response.status == 200) {
        let responseJSON = JSON.parse(response.responseText);
        const access_token  = responseJSON.access_token;
        const refresh_token = responseJSON.refresh_token;
        const created_at    = responseJSON.created_at;
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", access_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_refresh_token", refresh_token);
        GM.setValue("IMDb_Scout_Mod_Trakt_created_at", created_at);
        GM.notification("Trakt's access token is refreshed. \nNext refresh after 2 months.", "IMDb Scout Mod (Trakt-Watchlist)");
        location.reload();
      } else {
        GM.setValue("IMDb_Scout_Mod_Trakt_access_token", "none");
        console.log("IMDb Scout Mod (Trakt Refresh Token status): " + response.status);
        console.log("IMDb Scout Mod (Trakt Refresh Token response): " + response.responseText);
      }
    }
  });
}

//==============================================================================
//    External ratings
//==============================================================================

function externalRatings(imdbid, title, title_orig) {
  const imdb_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAGFBMVEUAAADmuR4AAADovi7xwiA0Kge0kBh1Xg/if3xnAAAAAXRSTlMAQObYZgAAAb5JREFUaN7t2s2OgjAQB3CSfYJxq3ebQK9u9gmaIJwlImeJumcJ6usvneI28lGQmmxM5p84trT9pQmHkoDnfXw7ZOV53hc45LPaADhlpTbgtAUCCCCAAAIIIIAAAt4XYGEY2oE4Van/0p1kF906QKpzO7H7tKwLWHMViDlGSJbo1iHi92QM9LjfC/gGgDbAd3I04EvgDQA74wGIuoDtaICzTiCQo4FD3AWI6cC1wPHxQNkAynrleGDdAKJHIAylHdjObQCTP7e9tAKbmQ2IiqqcpQ1Y5l0Ar4EcK7MBQS9gsnUFAmkBRMF5MgCIXiDVQNoLZMkg4FdTLr0Am9mBrPrZAB/WQwDmOBnYaSD/P2DDsTObDiSOwBYB4QAULwECByB/CbB0AHDpxuE2zpFxALBTtgF/LBC3gdgROB+fAiJcagCMOdo4m08ERA1ciwEAVGXdgElgAZKq3QEsIX7o9QJMAbINlA9AaQEKzkUbEFKPi0JPfhLw/x7zgiipauNwXZxUAFTdwwKLuYKtUEI9zhaX9No43lmoAqCqBIbFXMGWihkP3+1pnQACCCCAAAIIIICApwDnV+fOL++dPx/4BflDKTOe3dGdAAAAAElFTkSuQmCC";
  const rott_rotten = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAqFBMVEUAAAB6lzaHqjYoRxyQsTe51liz0FURJgt6njaVtzh8lziKrTg9WDSJqzWCoTmfvTWdvz91ljupxzSQr0WpxlOmxkdGZiKtzE2CnDeCpDaLpjaiv09ZeDKXtUicuUyAn0SIp0WKpT5mhjrG5WV6mUSauS13kjS21kt5lS3A40yGpyy412WMsi+uz0K52DNafSFqjzhmiStzjiyIp1NwjkBuky2cumCQtyFQj3lNAAAAAXRSTlMAQObYZgAADFtJREFUeNrslO1OwjAUQJF7Xb06bKmuYJ3EMZtlQPmK6Pu/mWUDhTFMzLImJpzs4+c5vevauXDhwoV/RQhsD3T846yLPhopBXaXCnw3ODvOD+BrYGHHH0wN8mwud1grbf68AtbxBeuXdisPyNFXgfPn0hFZeYQVyk8BKLf+KBKHcs5FJLMb8LIVWbbXCrGzlw+TjX2MgG3c+vcLL9m9hSEfI4AHuQ3gJ5iRsXH7IwjVwEheozeGjH1rPwBW9lNyUfUT0bbhBVo/jmAiZ9yIqt2BxkWo1jcBGD4iLojTMYhkkGTsI0DsnRUMIh+3H0DGqd11gp75CsAzzDSSh0+AhLVoxET/HhAChI3/EnZbBPS+vT2te+52YIKk4Fy4k6s4ViEw1igC1oW2xNkPSRJSYX02bKLrPN0yHY2hSQIoJI2Tnq5hiF2o1z9Mp9clmcv4WABrUHBn9CtOkqq9q5MhXrE6fxzkg8egoGhI0/cGQ2D9CVbsTwX3w0QvagLYchrQ45ZgUEYEafr0hwIoCH+28hdnZsOcKAyE4QnbO2KISORkUIGIhxzt2VZpO/f//9ntJmDksNi5tx922mmeJ5tNSKfR0yYtB2gTFNAAY77+HhXb7Wq7JYdO4dvPD4DkK3TpJ2f+cFx/JJex/XO8LstwlDQNlT/mV9tDVMQFSaCGKQTm1+8M4EvX3/j7r1/PeOFbxS1AP6c4DdNRdLoeb0LIiofiIS/yPC8KcqBCUCV+/oD7BhK8R7p/Lg6YRZQnfn8pijkSRxIeyJHAW77Z7eI8zimFlaAqrB4VwF3+8oXwlBk9AKKuxySc1hsEcm7BgoJC7/6I/xqXmzIuY5POYWvy/EOCvFP/38RfGj5m/hDECXSdkemy4SkTLiwtExh3QBhuwhIzdMgLbId7XeB/f3R8On/jp2N86USp1ihwnVSDHNUwp97EWAcb67BYVdMCfon8gcA6OB5fe4YPijNRM5dbK5CFqeBOAbvBBptyFsVyUgAeX4b8IAi9JwbufD1VgrkInY33gGoECogUYxwGhSgSkBP89cvyx4D/8LTTR89BAM6pcLkpUIWNUGQnBDm4xQjiuMwnmwDoT8/VtYAXeCHfJddH5F4LnGLVCYx6UCa6aS7LZBycQnlHIHlBgajfAbQAnsfXfEfTHKxCwyo7/rgHIdOtQLAzuKpDeEfg9WU5FPDozOe7E1w3qnzHOVrAjQqA0A2rSeCiYNfCasSTAmcSWLkFMAKc8wqGR7UKRfNJE8okxG87AeeApcDtWd4VWFAFLH/uoYAmgUGhAavcCzDr5gJnotcMBcYKVIRETi7BKlpE+AywV8CNEVC80dk/JagUZyaN6Y9hAWpR38SbhRFSTjbhssDpXxUg5BjGT/7whqb6GYr67boLAN4INxYgtGpTJs4wKfB8+LE4WIGAtkBIAjiCTvyhQFr3Qze7PcjLPUJx3k13FKHqtH3LQE5cDWF1WC0O0WUL4hYgvmJcwUCgSrtBWdM0nGdJIhMpk7MOaX/cDtalabFeU00om+fD7LDo+Z5ZADrUuN47b0lN2A1atejYhDutmBZh2dbhTb6VTU21YPI28GsR4RqYBrAdYCvwwat9bw5Y6MtJp6qqFaJtUhw+rVus86cCdDhpSSswETgu89mfGe2ADfGF5SuGw1cZ2GQqbd2g2PN1KvC1YXUtMPYXujYQDs5EE74inwSm2nAWHWfz+TwI8AwiPNEVrZ/Q+j3Lsr2qNGv7gRtuqLWqBEFS1lq+qh0eQ25pwxRQASbjs+XCPIToCOBcYYyCPd3NkS7syMKGicsEWc9U9KG6KrhzoHwHSQW4Y+BFcVx6wZz4VH+az2dxGi5mzzBFk+5+XAvWmvpJCeDfvxTHRRA88LVnGtBWYES7LaDcG60OpXsM4TY5ZYACWIB7AfCi45NXEl9RmMIZfS2K0/TNK7LDMuSVWRy1z7IECE/8+zV43eVB2AnwWxVw8x3NvPPl2kBtJAYw9/nu1oNN2O1ApXrykG9RJhZqwFYqVKdEgpQ92dK/xneHzc7jH0xz4nM2CgGJ1VEJbz5xRo/vBOAKPvFfpkmFPdI5/8A2rsd4xj+NPpnZd9wp+nSkDxk99s1znAtMBxA9iZk3endfMjP/a7q7zPyXgv7brhkoqQkDYbglkkiJJxoM4wFKwSsDaNVq7fu/WXeJmALRWuu005n+ot44Dt+/m80GyS2h035qmAp3BrU+Q6n3eUR4P+jHLcBAfP00vFvvraFUo/60nUr5MkS9dJ94GJRMIP9P3VJkPFkD6+XnmqPcvbor+EQRKdzh8DZZy/2qGu4zxVIxvynrBw3m5Pl7iQQWZ3XoR+sTrbkrtoQ/3YDrKs4dKl0hn+2ARcK1RiMLnlrXDIzKwQF78DP5MhEmnlnuaynqi2/2O3ngqOZ2/zZxrV/RfOSIT1KiBRSXvzjeRMrtfr/fRhK1nQjhru9LwKiW68IzduZfI0m0+L2tV+6tRSwGA8cRqIU3Kl23vM7sy3IH8LIeDGLxcowk579ggslJ7K1xW6DUAkxyfcSNwp/W8OKMQXHyadfYYOQn/K1wyhLvSrxa7sh6teBwoayH1lUZ6S7Q0cR6tHbWztjzxl6c7LZqROQN/i7EXRG4Ju9m2b0+4PVLSyNAIx4lQI7jvL3BbvtskaR1Hq7y94uyPnMLY6F6DU/TamHcfTk/yoM8THM64YRfs0Die6q8E7H62wA/872LZjPfm+V5sAMHzMjfOaV7T5m7bd2Ku2Er+cFms8mzkzSvVkSU5dUq6xow51vBu4ErBUqUBoUtjTcJ5HotbhlQ5Ot0LTMa2RRkT4ssMuSA753Rx5vzDCeXia/B47E5bqQr2XlOqwAd9CqRDAevpebWQavYL/h1F34hx6HztgnyDaXeDKuNhoEW7cimNMslIVHHwNx9PVdcXXpI1ElfgxTywm3ePdTYocuIy2jp2wHGbZ+Db5PPorTKwl4KiDt6bYpNGWkNuIiFEAOntuH0am06rlJWi+xoBsWOYWrsha4tZKtuCkir2g3V5rxNncHa8QauodKqU00n+JJkQd7EbhuV2XZRcUK6NTCwzJMbeymUF9y8Cj1woNG60LKouRIHC2kG4Kv8ysaP82zZNfDVGVhGPDy8mRVxzuXX0HMMVU43dqQXOsb2tQP7lipIAVrW4pFXKrLbqvJvInbevIir65s0n4Ua3ojmhYSzaQfL7LNd0SK/ZSFLO4szH4xH/Unmxc54FkrCsWbgZZ579Ee0kl1EP4bDSJjNMju4xqaoLOmMAUtg7dZkFPJP0+lCX+QSPsv93vSGcCatcBipMug4FTXilaoTZ52tDvHmmKaYJ/XFFCfDwjfM7CxkrP2LNrM3WWWC637UXRDYwVv3mrn3mUrCpP5SZOcarg3Y7ZJiZJUVkGaqwW1hFP3tJs+wiFHZuooiPCz6EwyqcIUpaJVBkVe5Itsae34Gvo9n5h0DkkIn9y5FPqPBBpcN3kquKAwjC7G2rzgha1Vhn9Ea7+OjkewtSEzSCvm+D3if5tOi2uKX2gbgtCYHx3YKCFtBCjQ9gDNeVP9zR4i9sOfglNl5gPNsA+2lqNLuuh1BBgz8HFPQcUBO9iV0P2jISvgPBaJvAH3vfezVoMLOfMlYz2OSmQxkQbFkrLO5p1PepoPiOFyZL5AZk1+SGL7lDCWe8S4DONZFRbp1mFYNXZMBHdcra6yqyyBu/iWlDZiKkOZV9oGxznkS6tdgzRa1kuQwSjg0ogfEXloGmqZiB/BprwpI6AM7DmNgazhoufyYEvKYgfe1AewEusLVWxaBgbaDrR8uRMNOzuzlarVarjh/zADZZ72uFtC61mBBYN3BPJ5ELA4NGdmTWkeJu0ePiMuq1dbgaCa4rbuhHoTJQui4a/ouBQH/0XtphNoK35tjdNKbNgwcJMsE4Rj28ZimyI+A/2ACcBqAAQ3WUyymaf/+NG4zriaryRG5iK7FkU8eNbC1YXIFQaurxXVr4ZiBvgOZ/giXEvHw1cfvXodV6M883dTOU8w7MNNZGQGgjKSCI13vnj0mFlUhXcSLVm+xLBFLMGBubHhwdaB0ph5MwcEX0F5a03v+ckoZ6Gpv5ReR395LYESEotVaoMgPEWOEXTd91lM2UjiThziuyc30Xh44Q91MHNH7R7/tgKcfPjZ07C0RUfw/Jc6wsNOzIq7w/N0fFKvrSoKwqv5M+Oa6Ypr+V4Q31f/rv/7rn9d3QHyeAYuejVMAAAAASUVORK5CYII=";
  const rott_certified = "data:image/png;base64,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";
  const rott_fresh = "data:image/png;base64,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";
  const rott_user_up = "data:image/png;base64,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";
  const rott_user_down = "data:image/png;base64,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";
  const meta_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEUAAAAzMzP/zDT+/v5oX0elmG641eaPAAAAAXRSTlMAQObYZgAAA3ZJREFUaN69mVFym0AQBVO6ARL8WxQ5gGulAyzGBwDL979K4tjmie2dmVKo8nxZpKbV83YFBH65dej/lv3PYbPqf9tVTw/29yggwq9nPfL1uwi9Xfv6GUTcz4r7owrzD2tHP2KIB3j/qMVQCPtvU/NZ7bSAEA9wy81dCaEhfIHcFDVCwRP43bBeQ0LRj+qCIQ7oB8FXYD8JnsKB+bFGRwH9PuHJFBjQNE3T+ndrKpgBtG8ppeuqdSwUIDCX/emz1uOLC6BASgWhq89gJfiS1spFjk81gQEDqC7KEYBYQENIgQAuYbqvq61wMARO6qYCAVyCtwSF+4XABGdjAihoBn+CLqW6wkiAImQEVGiLGbSLsYiGwlIFNMzQUjhqBq4BM6RCWwOcLcC1oqAQBMgGIG9muW7WgRHwl/SsNO4UjgQMBiDrTykoBC+C9k75VCoQkBvU/Vlgq6AQBCguhB/yawRQ2ISAXaDQBIBCVwIG7GEBoLBNkRl2CQAqlIC5NoBCpMLyDdAiUEDLSIWxAJg/wlxX0DIIwGuBZqBCJ4BWEechKOhguwUMmKCqoGMCYBuk5Cno0BZwRgSGgo4QwEWkwnpAG0H7iBlSQZ8dgKugj+MGAEtLQZ8CwPX1zVLIDuA0fwEu64aAwqVxACl9AbSgUMh1wLff5aSzQAcFFQDrIv0Tn7GrcwRQft8TQCEGpAIAhQBwAgAKNmCWgABQ8AEnABwF/Rb0a3wBAAo+oEuqOVLg+QDXo1ABpzTeBEhBWBVOqhuFeaOgg6oWp3VPQcd0GBcWR4ECvDJlV4ECBIQKMzYiLu+uwtXYiNoIngIEeIMxNJ4CBLSKulF1FSDQCaAUHYVSoDkCMLsKOB8tAAyNo6BihrrTtBVYHQF94yk4ESiERxTGCmB4RKEXADNAIYhAgOwpcAICzoECJzD+8x4rdABoHajgTsAHGFSIJ5BCU1F4NnYRANb9asNa+Binp4IEGKENmKUQCvTmkzApxAJSYAq2gABU6LMU/CXow+eRbVWg7SWAGbAdKwKjBKDAXwT7OwhQYTBOxXikCgUSuAICsHrGwH5MAAUQECAFqEAC+32F/sb85M8BqND/LpZgwjsSS0ESGV8vAVdBFrfpo3l6f+g1T1z7X1TtJOx+WRdV1B9X1B+XG+A+wk+9NiaB+nGh/Wde3hMSN/8BSXUWJsXAq8kAAAAASUVORK5CYII=";
  const meta_badge = "data:image/png;base64,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";
  const lboxd_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAALVBMVEUAAAAgKDD/gABAvPQA4FT8/v1Dw/0E6ViwYRE5msej6OIFx09I54QLokj/zZqk8vmhAAAAAXRSTlMAQObYZgAAArJJREFUaN7tmT1r21AUhuN/oNctwaZ0sKBQSimYC4KOBYGhydaqg+liBBc8FlQ0FA/O1NUUCpn7sQcKHkK3tHugkMFz/keva8tH55hYco6KnJBnNLyPz8H3y/fu/T/AUGQJr1y6gQ145eIKBUqg+HoqQpHnBpnXGbAFyrxD0QA1IfO6ErAtnq4Ah1rg6TpwiAJ0JeBaqAWsA10PqEkA6qAugVeVANemIkGjRoG3IwIouCWCBhR4d4JqBKhVAC5o+Y7HIGY/0vTgHMRxYO3zyVWCI3/BOPtgmoaO9ABL2oE1xgS2KwSU54ZpEv6j92GZt2YBGfKCpk9gzoXLLw0jzAlMRjDJCah/ogPggcuvDCcA9mOzIhYCaoCamIY55k3EhggGUtDyGZ2sACph3+QJpKDpc1wBjBFiLugKgS/oJFzQu8cFZsgFLSl4Egq+G06QCRrUQZ5LUcFhXwq6THAkBdFXLngZxcIwYAKZfxa95oL30RchGG4UPIrecsGvNUGQF7TWBX0u+Ba92UpwKQS9KOobguaDtxA01wVRUqngUAoc3QLB2c0XJFpByZ9x8zggoisGkld+JL6SgoLJVDgXjHo2FqwHZ3I9MIJBwYoUcnrrP8LmRfVpKPgtBeAC2cM4EYK2XJWL9oULnn+HQHQgBJA700O+HpzT1kibIxPwEgBewghAwBd1KYDYnVkJKRz5vWkIIaDhTKec+0l+d3d8XhksuIAMlHf8yU4oLwBmsBMpIAPlHbM0deWnJ8j4ZK2xNp6AC4iPLj5Gjtnp6U/kaB8bdkhDJefE2s/Kd4IqBLX/8bzZgl25wdAIduQiag+1X8YpBfobTb1Af6vbqP1iWnG3rhGonwf0DxTKErSvPJ72maeKly5NE16Vr32EIq998SSDIl+6DeW78V4ZdHGSyPCu8hfYVeoYJ6xJswAAAABJRU5ErkJggg==";
  const lboxd_cust = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAS1BMVEUAAAAgKDBTU1NUVFT/gACgoKAA4FSpqamrq6ujo6P8/v3MzMwE6ViwYRGvr6+NjY3Nzc25ubn/zZqwsLAFx08LokiOjo5I54Sj6OIuaCjQAAAAAXRSTlMAQObYZgAABz1JREFUeNrtm9122kAMhItdJxSoTQqlff8nrW39fFqbeiFRLnpOlWAMyWFGI2lX6zVf/kHbFda0bds0TdvMhySIOizWNkpBGLSTZTPZbdkEPj9cBWEwn38eOGbQs+fCRagYs89Bx4L8giro9oMQ6egQIPyGKG/a+9MhH54qEGtKARpCoaxy4bGYea2ng0MLF0mHbHwImAacC7SZvZMIj8Ws85i7+0rCdUjDxzT+oMtrlV0iEzhkwWONewyiv2xsbECWLHwIYDARMua2mlLJwocA7kYiECAwcsgjQA5Q8cBzKr/olIGPqeNlBVAEcapqbZjMwocAv84gvqnPPCXi75BWS4CM8CKM8ZH3EwmUPQBZhwzIwriQgs9siM7Be4VsohpEKQWf2VD9NMXNVz2nCvxviQSoPS90fWJwDgOFv5eBz0iItqYzvJxO2yBUJgHmIgoieos2YkYiiwCfjfQWdD+DHlQT8MkBARYMSOjrVW0ozwQChIBpEDfjDERviD45+DsygG4EKHlJEnpx5hFQLPeeYUDhqATCIHFIIkCyl/0x5RgmyKBCFgFKgPUZMxMR8ARlgEjB31mS82gJArURWjWSI4kAZUY0VHQUoVQYIZIIkISOwlvAIQyp+nECozH9ewmWMw8Ok6YaEfATckB/Qxu4ZMZ/+h9SCIT2ww/L3tTeL7OzySIQh15kFyP2lCKrpQwCMeWJg/Fx+HWuZimAR+u5MJRBbNHI0QwCTC+e4CTcojQho/+VgL/Dn2UXYAccX61UcggQVBykJCwPiEKcqrcIfP9q9v3+P/y8Xl9Op75/7QaEV2/F3WHovk3WDTdjwUjERZsN9A0O19Pp9DLa6+t+P5GwrPM43LoJWmw60xpAGwjU4KEAvKALgfHnte87Pn5y3sGdQ0dX5of7BEAtLIiv8KaAUhhIwQ74wOHGdBTH4or7GO6/YPtJArFLZ2mA+yWDLqxUGInq+IQBfBTAes2EFTxxmMEpDQiAv2XgxxDo7/i4dLP/IK4phBBAoBZ/DPxCgb1rMGz4L1EoruZAAPwKA8HH5hwcTTLx9dKMGJsMBhYsJCEBqNnvlzUBJBhfvAn+BoOwiGmfFuDHYanAXoCNwuX4ViPQhcblaQEOBySIVeAqvJ2PVQlooCDwsACHw1qBOQry1J+PdQkGLmU9S+Aw2q97CkgqQqAigQ8FEHg0AsSgHAdUg7fj8XiuxsBm46cJ/LhPgDTojxOBh2LADsaTKXBY1IF7LxE4P5QEbCt9nICNwvvpcTmeUWDD6JXeQ+DXhgLHyeoEaFETCKj3cy5eRv8fUYAe/YMECIGNg+TAlrE6yEjC0XwyPD8Wgsn/9xNYTkaagPvHc2BgoZowDgi4yjArUB+I2M5JGAmtDGUyPo9JWB2KWc8+Pxndnwv2NiNfHkoBrlokzYbeEe374yMDIWu3p/sBEwBT3y0K42xUjUDYyXhHRwR0EQJrjC7neg2E3e3nm9JfKwJehzIv99UaCBexIPBoEL7TFS8mIxOiGepdMRuN71gX/DzdV0D9b5rtvvzbrVijOwGsgg8DcoC1ST81/boy3FgdcuMRBLBtfBgQAl+bXAYZ39BghR/39smB0rbwYcBc4P3YxbSFwTL+5QbmqgrIxMoVihcomPfj0jhcE70RhoDPkmxRhjUKwLsITsFakX3TUF53L5Hc2ExReJKwRgF4KFxPo01J2I/Wme9sG8tFom+dXaeKd9x5JUIAg8N3AQd9TeJ6teld3ZejYrTDbZj+Psjbav4PVMFHLH6knDsNNu29AVhcMkwhALhCuJ9cKebRsHuad61Y1FyA6rOftYsNhDQCfL5/NEGJmBBAphwCSGu+4yObiuwWQChrv0CLDxarPfRyU4FhIIfAaHwsEVYG/nfoEZsMAuK4Y7NnEcseeuEeuywC6Lq4GE49kKZlqJK2bvFPYJ0KqC5OTM42h4DAktmgu79UXxgm8wgYMgUX04BXCht3dFMImMfUGZHgzsJI0Ksk7R6SeGsALef6Rh7+KL85BMRDKh4+TPzkAkWSqAABp9Eg8EheNGRCAMu5iaV1TF4pKGdsVuQQYPy1B9FelcN8zCbA3jxJyDOYcoo0eXfT4TapoGAcjAf7dlkEfAYAhhxQW9xTJYe8WzqZc9CYAZr46w/L0hwClBvb1gpDcqC9v8i7q7ZB3VUDqD+OTMJk3tbLVE9zisW4MBIn3thsLgKjr8oWmQlh4x7/lJURhUgaxuGJAGQRoOoEFSp4zGvwsxgwuxB/HI8rMj1SATkMyPrYfxuR1QhII5LFwLCK4DPxERfnkvYtFwhQ87QF5QoBPuAnMYgd71++cAYR8PMoEPjlvYzgFjcsZDNoIj5DEC0Z1HA/kwLVVfQ9OA6Jz/m+H1q7EuBzBnw2B9YEDAJkgWUF8OkUNL8Igpz5M95/Ege+RmNodEKVgSeHA+0GLTBp8CXLauPA6suFFc8TiXiu02//t6fsD1bxl8/V56nJAAAAAElFTkSuQmCC";
  const douban_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEUAAAABdhD9/v16t4L0Izp4AAAAAXRSTlMAQObYZgAAARhJREFUWMPt2D0OgjAUB/A6eATv4xEcKE0YcOcI3qNHcABjnDhKL8HuYqK1EuA988orUQeI/S8Q8iNtXstHK4SQTITLmgM7BzYcSEgLtI0VD7akC6QTGx4kYSADiQCBvPLmHMHPgbLeXGc1HxYCPLW8A/CPRhnBp8CiND5gJKSIIAIEmrnO6j8Ae/tw19Cje4H3ZJfUATRUNXkVKwTcqfYCA8AAoLcpAqBh6M50gKfhcSjKyQMOr29xm2wCKCmAy0AxwC0XfpAOoOm6S0HFAqifO6kpgBFQDNA90BRArVMHDAVQ63wKkBRAATMKbJubq1R7HKav6UE1Eh3BO7AjMfP6l1s6+HrFGlwUh5fVggfBpX14cyC4vfAEQ6sYUOFLXfsAAAAASUVORK5CYII=";
  const allocine_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2BAMAAADviXoiAAAAGFBMVEUAAAAmJib/////ywBcUzPIoQmUehKRkZFw3PDCAAAAAXRSTlMAQObYZgAAA2BJREFUWMPdmU1P20AQQKv+AzeOe3WjSD1HG+fuptBz5JS7lY87qBJ/vxCyed6ZHS94b8wBiOTHzL7xLvbw5VPF18Vb1B8mF8OYQhIfqFZHPRUFTqNTYdA0nEaBk+hkOIoQ70Wf2+I1ymcBpyv+VxB/gqpTaX8WYTwlE8uk0dSJih8LHd/HqxaoBY+lXRbx+DWSGE1hlIc+FGanVWjnVtcfzcTGYu+dcxuxZIOVFZ/cSzSizUbJraz3Eq3/HC866njr3qIXru20xOzKrgojMaxq7fzKrmlyhCWtYpFFYp0WybDIQjWJYektrpBFj2Ep+VaYv/Tg2R2/j6KH7A9/K3XejfOxhv0Gq0u+e7mW5SIrUjTsdddQ48HdoiAES3OrDjl3jujlPob1JVfOx/n36fL94dxRyKBoUTIrJI7X/GtVNOz1xigFuvf2NvLArXWHOkegt0MWXQqW69USO+6vVi8YtmXXqa7OAlklLKqELARtDVmokrKo02lZsNzMsZIrPiBLsELWipIpAjbQzHXiPrTuLDQrWTevVKFEozm4ozeDDglZmkUWie57r6AxWY65Q7Dczh19Ja1o0rC9yOLaSm9hGuzZpT6T5S26Etu/lu0l1YYF6PPOYIvhpWJnJNmOEktIZJkssnbUj6xRFj+9Or52abaC3QbsOsGyyFaxzTiLLFgiwdJUfkLWOIsslCMrzVYWu06z5Y0tTwG7gY3tBWTxdEbE9gJ7EFksnmjVIavYGdeFt9YOVp85XB9l16PnFbJ6WCVLn7EE9YVsEz9jH6WsFayQxdlOg4kt9altaP89Amhi7EqyusEVsugvsmgvf7sJGgKLrAVsRPTBJ4ZFFpqlaM67po1vYf2sgiwM/T2fXhd5+YponpFMWTyf8fkoVBmy0BMsAlXmgjuqvN3iD/KJAXYZyvJxM78Xz8Bm0TO5dea9eDKzX1MqsWXtZ37dpZI7WAQdghVFd6gixDuOVfQB1ijZfqebGTU/wZrvklXMFe+S9jssspo+Nqio7XdnZG3aaNrafGdH1t6Yj1izAmQ1RyCRNjGjmDeiXmYU6dmIPQ6yZzJ2MJNJz4KM4VnODCpj9pUzc8ub9eXPGPNnm/kzVWA78mfI+bPr/Jl5/qwe2EKnwnXe/0Sm0Rn/A/pM8R8w2HBWwA4YRgAAAABJRU5ErkJggg==";

  let key;
  if (GM_config.get("ratings_cfg_omdb_apikey") == '') {
    const keys = ['8c967f70', 'dd37e5a4', '3fdb9c5a'];
    key = keys[Math.floor(Math.random() * keys.length)];
  } else {
    key = GM_config.get("ratings_cfg_omdb_apikey");
  }

  if (GM_config.get("ratings_cfg_imdb") || GM_config.get("ratings_cfg_letterboxd") || GM_config.get("ratings_cfg_rotten") || GM_config.get("ratings_cfg_metacritic") || GM_config.get("ratings_cfg_douban") || GM_config.get("ratings_cfg_allocine")) {
    addRatingsElements(imdbid, title, title_orig);
  }

  // Get IMDb ratings.
  if (GM_config.get("ratings_cfg_imdb")) {
    getIMDbRatings(imdbid, imdb_icon);
  }
  // Get Letterboxd ratings.
  if (GM_config.get("ratings_cfg_letterboxd")) {
    getLetterboxdRatings(imdbid, lboxd_icon, lboxd_cust);
  }
  // Get Metacritic's Metascore & RT's Tomatometer. Link for RT Audience score & "Certified" badge.
  // Running for Metascore without RT enabled is currently disabled, GM_config.get("ratings_cfg_metacritic")
  if (GM_config.get("ratings_cfg_rotten")) {
    getRTandMetaRatings_OMDb(key, imdbid, meta_icon, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down);
  }
  // Get Metacritic's Metascore & "Must-See" Badge. Link for Metacritic's User Score.
  if (GM_config.get("ratings_cfg_metacritic")) {
    getMetacriticRatings_IMDb(imdbid, meta_icon, meta_badge);
  }
  // Get Douban ratings.
  if (GM_config.get("ratings_cfg_douban")) {
    getDoubanRatings(imdbid, douban_icon);
  }
  // Get Allocine ratings.
  if (GM_config.get("ratings_cfg_allocine")) {
    getAllocineRatings(imdbid, allocine_icon);
  }
}

function addRatingsElements(imdbid, title, title_orig) {
  const img_px = GM_config.get("ratings_img_px");
  // Main ratings table element
  const table = $('<table>').attr('id', 'scout_rating_table').attr('style', 'display: flex; justify-content:center; align-items:center; text-align:center;').append(
                  $('<tbody>').append(
                    $('<tr>')
  ));
  const hr = $('<hr />').css({'margin-top':'3px', 'margin-bottom':'3px'});
  // reference
  if ($('.titlereference-header').length) {
    $('#main').children().first().prepend(table);
    $('#scout_rating_table').after(hr);
  // new layout
  } else if ($('.ipc-page-section').length) {
    $('.ipc-page-section:eq(0)').parent().prepend(table);
  } else {
    return;
  }

  // IMDb ratings
  if (GM_config.get("ratings_cfg_imdb")) {
    const img = "data:image/png;base64,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";
    const url = "https://www.imdb.com/title/tt" +imdbid+ "/ratings";
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('IMDbUserRatingUrl').attr({'href': url, 'title':'IMDb ratings', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('IMDbUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('IMDbCritRating scoutRatings').attr('title','Top 1000 users rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
          td.append($('<span>').addClass('IMDbUserRating scoutRatings').attr('title','All users rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    if (GM_config.get("ratings_imdb_fem")) {
          td.append($('<span>').addClass('IMDbFemRating scoutRatings').attr('title','Females rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    }
    $('#scout_rating_table').find('tr').append(td);
  }

  // Metacritic ratings
  if (GM_config.get("ratings_cfg_metacritic")) {
    const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEUAAABQUFDAwMDf399ubm6WlpaIZZrQAAAAAXRSTlMAQObYZgAAA3ZJREFUaN69mVFym0AQBVO6ARL8WxQ5gGulAyzGBwDL979K4tjmie2dmVKo8nxZpKbV83YFBH65dej/lv3PYbPqf9tVTw/29yggwq9nPfL1uwi9Xfv6GUTcz4r7owrzD2tHP2KIB3j/qMVQCPtvU/NZ7bSAEA9wy81dCaEhfIHcFDVCwRP43bBeQ0LRj+qCIQ7oB8FXYD8JnsKB+bFGRwH9PuHJFBjQNE3T+ndrKpgBtG8ppeuqdSwUIDCX/emz1uOLC6BASgWhq89gJfiS1spFjk81gQEDqC7KEYBYQENIgQAuYbqvq61wMARO6qYCAVyCtwSF+4XABGdjAihoBn+CLqW6wkiAImQEVGiLGbSLsYiGwlIFNMzQUjhqBq4BM6RCWwOcLcC1oqAQBMgGIG9muW7WgRHwl/SsNO4UjgQMBiDrTykoBC+C9k75VCoQkBvU/Vlgq6AQBCguhB/yawRQ2ISAXaDQBIBCVwIG7GEBoLBNkRl2CQAqlIC5NoBCpMLyDdAiUEDLSIWxAJg/wlxX0DIIwGuBZqBCJ4BWEechKOhguwUMmKCqoGMCYBuk5Cno0BZwRgSGgo4QwEWkwnpAG0H7iBlSQZ8dgKugj+MGAEtLQZ8CwPX1zVLIDuA0fwEu64aAwqVxACl9AbSgUMh1wLff5aSzQAcFFQDrIv0Tn7GrcwRQft8TQCEGpAIAhQBwAgAKNmCWgABQ8AEnABwF/Rb0a3wBAAo+oEuqOVLg+QDXo1ABpzTeBEhBWBVOqhuFeaOgg6oWp3VPQcd0GBcWR4ECvDJlV4ECBIQKMzYiLu+uwtXYiNoIngIEeIMxNJ4CBLSKulF1FSDQCaAUHYVSoDkCMLsKOB8tAAyNo6BihrrTtBVYHQF94yk4ESiERxTGCmB4RKEXADNAIYhAgOwpcAICzoECJzD+8x4rdABoHajgTsAHGFSIJ5BCU1F4NnYRANb9asNa+Binp4IEGKENmKUQCvTmkzApxAJSYAq2gABU6LMU/CXow+eRbVWg7SWAGbAdKwKjBKDAXwT7OwhQYTBOxXikCgUSuAICsHrGwH5MAAUQECAFqEAC+32F/sb85M8BqND/LpZgwjsSS0ESGV8vAVdBFrfpo3l6f+g1T1z7X1TtJOx+WRdV1B9X1B+XG+A+wk+9NiaB+nGh/Wde3hMSN/8BSXUWJsXAq8kAAAAASUVORK5CYII=";
    const url = "https://www.metacritic.com/search/all/" +title+ "/results?cats[movie]=1&cats[tv]=1&search_type=advanced&sort=relevancy";
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('MetaCritRatingUrl').attr({'href': url, 'title':'Metacritic', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('MetaCritRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('MetaCritRating scoutRatings').attr('title','Metascore').css('font-weight', 'bold').text("-"));
          td.append('<br>');
          td.append($('<span>').addClass('MetaUserRating scoutRatings').attr('title','Users score').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // Rotten Tomatoes ratings
  if (GM_config.get("ratings_cfg_rotten")) {
    const img = "data:image/png;base64,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";
    const url = "https://www.rottentomatoes.com/search/?search=" + title;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('RottCritRatingUrl').attr({'href': url, 'title':'Rotten Tomatoes', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('RottCritRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('RottCritRating scoutRatings').attr('title','Tomatometer').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);

    const img1 = "data:image/png;base64,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";
    const td3 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('RottCritRatingUrl').attr({'href': url, 'title':'Rotten Tomatoes', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('RottUserRatingImg').attr('src', img1).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td3);

    const td2 = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td2.append($('<span>').addClass('RottUserRating scoutRatings').attr('title','Audience score').css('font-weight', 'bold').text("-"));
          td2.append('<br>');
    $('#scout_rating_table').find('tr').append(td2);
  }

  // Letterboxd ratings
  if (GM_config.get("ratings_cfg_letterboxd")) {
    const img = "data:image/png;base64,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";
    const url = "https://letterboxd.com/imdb/" + imdbid;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('LetterboxdUserRatingUrl').attr({'href': url, 'title':'Letterboxd', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('LetterboxdUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('LetterboxdUserRating scoutRatings').attr('title','Users rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // Douban ratings
  if (GM_config.get("ratings_cfg_douban")) {
    const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAgMAAAC+UIlYAAAADFBMVEUAAABlZWX+/v6np6epfp6hAAAAAXRSTlMAQObYZgAAARhJREFUWMPt2D0OgjAUB/A6eATv4xEcKE0YcOcI3qNHcABjnDhKL8HuYqK1EuA988orUQeI/S8Q8iNtXstHK4SQTITLmgM7BzYcSEgLtI0VD7akC6QTGx4kYSADiQCBvPLmHMHPgbLeXGc1HxYCPLW8A/CPRhnBp8CiND5gJKSIIAIEmrnO6j8Ae/tw19Cje4H3ZJfUATRUNXkVKwTcqfYCA8AAoLcpAqBh6M50gKfhcSjKyQMOr29xm2wCKCmAy0AxwC0XfpAOoOm6S0HFAqifO6kpgBFQDNA90BRArVMHDAVQ63wKkBRAATMKbJubq1R7HKav6UE1Eh3BO7AjMfP6l1s6+HrFGlwUh5fVggfBpX14cyC4vfAEQ6sYUOFLXfsAAAAASUVORK5CYII=";
    const url = "https://search.douban.com/movie/subject_search?search_text=tt" +imdbid;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('DoubanUserRatingUrl').attr({'href': url, 'title':'Douban', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('DoubanUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('DoubanUserRating scoutRatings').attr('title','Users rating').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }

  // Allocine ratings
  if (GM_config.get("ratings_cfg_allocine")) {
    const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2BAMAAADviXoiAAAAGFBMVEUAAAAzMzPr6+vExMSdnZ1WVlaCgoJubm4HXAuhAAAAAXRSTlMAQObYZgAAA45JREFUWMPdmU1T2zAQhjv8A+OPXNNMoeeMnPgcPJCzG5q7G1LObtLp329JLL/Su5JVrBt7acrwoN13P5CWTx/KbhZXm7+bXJg2mWQ67C3bfCrKcBhleCrKcBhlOIhOhhfj9r/otkneLD8THPb4mMD25PX4sfeJbT9wcAh9TNieAY97vEmkZeNeE+qDx469S9z2beRgyGRbfmhtwfzHMjqr1bL/6D3YE+xeKVVRyB6WPT6rf1ZSmj0udxSqulij/Xc77dR4p67WktbOYxubTXt2OTiCg5nl1GY9WyHJDhbRChZiIWI6FiITC7Eg9ZxZ5Ja1UnAoE6xdUrnW9aTZ/qeiuJj9rEupXvWflLYV2FuwhsstSun6qRjYNdgCThtsX0rw8aAGS2DEIrmzGuI8K1jHfWyzG8vL1+/ny79PP2s4YigtXc4U2bEXYOVwGuyXS7SEPl6HpCVW8qBZylAfLtViDbGQJStcVAOXxM4SKxNsY3Qdt0BqiZWDhVQkFgQ6ecW60T1EYsHPoYXRS2BRzC6XC/wHYjnYg8PlHVqYWd0I+D64jMS13A6WzCzWMGcw7yC0yeIbtVVGhkgsyUIsHLTvtASlk9XVTGK111CP2pOGKnqQ+aucb43RkyTWr4vQmr2TM5lLdEntP0d6WazKCIDFumVWm1kZ1BlBttYu8ihoAizE0uML1oXZFLJmNAmCbIFTdha7CrAIshHsOsBCrEZMLxVkNZFItguzqY/d+FgWC+mCWGE2H9j8hcViVtxwagiT1yZMvYAeJLEQPImFHkTvk1gNWlKI9cAzB5b52JVnXrFYHVghlpyxMO0fsyXPWMx2a94tmUUgBVgk2GzhysW2Y7+PAJQudilZvofOIFZqsZX4HSrfJzohzJbioiOFPuiDwUKs3HVXoXlXdtaExhRjlsW62NPr+a0i/ryAxR2J72YQC7Y1hu2R7mYesSAPgmhIKnfANfVO3juAcMFy+2PaDD19pDuw1+mUW6fo6GYGltuhoJb13/lllnJUMBkyBJacrmnM0Btn9G11IpbfVsze+5+g/KYbfUsWrBW/JeUblsUq8ePoDSvfziTWGl+gt7PnzQ6xtp79SGhXkKryNyDaFQR2FBn85VVUeDfiXwcFdzJscicT3gXJ5VnMDipi9xWzc4vY9cXsGON3m/E71fhdbvwOGXD84jt+4R6/6AcahhmN+5vINDrib0Afyf4CrepxXp43oBkAAAAASUVORK5CYII=";
    const url = "https://www.allocine.fr/rechercher/?q=" +title_orig;
    const td1 = $('<td>').append(
                  $('<center>').append(
                    $('<a>').addClass('AllocineUserRatingUrl').attr({'href': url, 'title':'Allocine', 'target': '_blank'}).css('display','flex').append(
                      $('<img>').addClass('AllocineUserRatingImg').attr('src', img).css({'height':img_px, 'width':img_px})
    )));
    $('#scout_rating_table').find('tr').append(td1);

    const td = $('<td>').attr('style', 'width:30px; vertical-align:middle;');
          td.append($('<span>').addClass('AllocineCritRating scoutRatings').attr('title','Critics').css('font-weight', 'bold').text("-"));
          td.append('<br>');
          td.append($('<span>').addClass('AllocineUserRating scoutRatings').attr('title','Users').css('font-weight', 'bold').text("-"));
          td.append('<br>');
    $('#scout_rating_table').find('tr').append(td);
  }
}

function getIMDbRatings(imdbid, imdb_icon) {
  const url = "https://www.imdb.com/title/tt" +imdbid+ "/ratings";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let crit_rating, user_rating, fem_rating;
      if ($(result).find('.ratingTable.Selected .bigcell').length) {
        user_rating = $(result).find('.ratingTable.Selected .bigcell').text().trim().replace(',','.');
        if ($.isNumeric(user_rating)) {
          user_rating = user_rating *10;
        } else {
          user_rating = "-";
        }
        crit_rating = $(result).find('.ratingTable.noLeftBorder .bigcell').text().trim().replace(',','.');
        if ($.isNumeric(crit_rating)) {
          crit_rating = crit_rating *10;
        } else {
          crit_rating = "-";
        }
        if (GM_config.get("ratings_imdb_fem")) {
          fem_rating = $(result).find('.ratingTable:eq(10)').find('.bigcell').text().trim().replace(',','.');
          if ($.isNumeric(fem_rating)) {
            fem_rating = fem_rating *10;
          } else {
            fem_rating = "-";
          }
        } else {
          fem_rating = "-";
        }
      } else {
        return;
      }
      if (crit_rating > 0 || user_rating > 0) {
        $('.IMDbUserRatingImg').attr('src', imdb_icon)
      }
      $('.IMDbCritRating').text(crit_rating);
      $('.IMDbUserRating').text(user_rating);
      $('.IMDbFemRating').text(fem_rating);
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (IMDb Ratings): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (IMDb Ratings): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (IMDb Ratings): Request timed out.");
    }
  });
}

function getMetacriticRatings_IMDb(imdbid, meta_icon, meta_badge) {
  const url = "https://www.imdb.com/title/tt" +imdbid+ "/criticreviews";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      let meta_crit, meta_count, meta_url;
      if ($(result).find('.metascore').length) {
        const x = $(result).find('.metascore span').text().trim();
        if ($.isNumeric(x)) {
          meta_crit = x;
        } else {
          meta_crit = "-";
        }
        if ($(result).find('span[itemprop="ratingCount"]').length) {
          const y = $(result).find('span[itemprop="ratingCount"]').text().trim();
          if ($.isNumeric(y)) {
            meta_count = y;
          } else {
            meta_count = "-";
          }
        } else {
          meta_count = "-";
        }
        if ($(result).find('.see-more .offsite-link').length) {
          meta_url = $(result).find('.see-more .offsite-link').attr("href");
          getMetacritic_User(meta_url);
        }
      } else {
        return;
      }
      $('.MetaCritRatingImg').attr('src', meta_icon);
      if (meta_url.match("metacritic")) {
        $('.MetaCritRatingUrl').attr('href', meta_url);
      }
      $('.MetaCritRating').text(meta_crit);
      if (meta_crit > 80 && meta_count > 14) {
        $('.MetaCritRatingImg').attr('src', meta_badge);
      }
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Metascore from IMDb): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Metascore from IMDb): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Metascore from IMDb): Request timed out.");
    }
  });
}

function getMetacritic_User(url) {
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      let meta_user;
      if ($(result).find('a.metascore_anchor span.user').length) {
        const x = $(result).find('a.metascore_anchor span.user').text().trim();
        if ($.isNumeric(x)) {
          meta_user = x *10;
        } else {
          return;
        }
      } else {
        return;
      }
      $('.MetaUserRating').text(meta_user);
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Metacritic user): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Metacritic user): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Metacritic user): Request timed out.");
    }
  });
}

function getLetterboxdRatings(imdbid, lboxd_icon, lboxd_cust) {
  const url = "https://letterboxd.com/imdb/" + imdbid;
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let user_rating;
      if ($(result).find('meta[content="Average rating"]').length) {
        const x = $(result).find('meta[content="Average rating"]').next().attr('content');
        const y = x.split("out")[0].replace( /^\D+/g, '').trim() * 20;
        const z = Math.round(y);
        user_rating = z;
        $('.LetterboxdUserRatingImg').attr('src', lboxd_icon);
        $('.LetterboxdUserRating').text(user_rating);
        ratingsColor();
      // If there is no score then try to get raw average rating with another func.
      } else if ($(result).find('meta[property="og\:url"]').length && !String(response.responseText).match('No-one has added')) {
        const url = $(result).find('meta[property="og\:url"]').attr('content');
        getLetterboxdRatingsCustom(url, lboxd_cust);
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 1): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 1): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 1): Request timed out.");
    }
  });
}

function getLetterboxdRatingsCustom(url, lboxd_cust) {
  const newurl = url + "ratings";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    newurl,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let user_rating;
      if ($(result).find('[class*=rated-large-]').length) {
        let ratings_array = [];
        ratings_array.push($(result).find('.rated-large-1').parentsUntil('.section').find('li').length);
        ratings_array.push($(result).find('.rated-large-2').parentsUntil('.section').find('li').length *2);
        ratings_array.push($(result).find('.rated-large-3').parentsUntil('.section').find('li').length *3);
        ratings_array.push($(result).find('.rated-large-4').parentsUntil('.section').find('li').length *4);
        ratings_array.push($(result).find('.rated-large-5').parentsUntil('.section').find('li').length *5);
        ratings_array.push($(result).find('.rated-large-6').parentsUntil('.section').find('li').length *6);
        ratings_array.push($(result).find('.rated-large-7').parentsUntil('.section').find('li').length *7);
        ratings_array.push($(result).find('.rated-large-8').parentsUntil('.section').find('li').length *8);
        ratings_array.push($(result).find('.rated-large-9').parentsUntil('.section').find('li').length *9);
        ratings_array.push($(result).find('.rated-large-10').parentsUntil('.section').find('li').length *10);

        const voters = $(result).find('.film-rating-group').find('li').length;
        const average = (eval(ratings_array.join("+")) / voters) *10;
        user_rating = Math.round(average);
      } else {
        return;
      }
      $('.LetterboxdUserRatingImg').attr('src', lboxd_cust);
      $('.LetterboxdUserRating').attr('title', 'Custom raw average');
      $('.LetterboxdUserRating').text(user_rating);
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 2): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 2): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Letterboxd Ratings 2): Request timed out.");
    }
  });
}

function getRTandMetaRatings_OMDb(key, imdbid, meta_icon, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down) {
  const url = "http://www.omdbapi.com/?i=tt" +imdbid+ "&apikey=" +key+ "&plot=full&tomatoes=true";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      if (String(response.responseText).match("limit reached!")) {
        GM.notification("Limit reached! \nSet OMDb API key in settings. \nGet it at www.omdbapi.com .", "IMDb Scout Mod (RT/MC Ratings)");
        return;
      }
      let responseJSON, rott_crit, meta_crit;
      if (response.status == 200) {
        responseJSON = JSON.parse(response.responseText);
        GM.setValue("OMDb_last", JSON.stringify(responseJSON));
        if (responseJSON['Response'] == "False" || responseJSON['Ratings'].length < 1) {
          return;
        }
        const rott_url = responseJSON['tomatoURL'];
        if (rott_url.match("rottentomatoes")) {
          getRotten(rott_url, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down);
          $('.RottCritRatingUrl').attr('href', rott_url);
        }
        let x;
        if (responseJSON['Ratings'][0]['Source'] == 'Rotten Tomatoes') {
          x = parseInt(responseJSON['Ratings'][0]['Value'], 10);
        } else if (responseJSON['Ratings'].length > 1) {
            if (responseJSON['Ratings'][1]['Source'] == 'Rotten Tomatoes') {
              x = parseInt(responseJSON['Ratings'][1]['Value'], 10);
            } else if (responseJSON['Ratings'].length > 2) {
               if (responseJSON['Ratings'][2]['Source'] == 'Rotten Tomatoes') {
                 x = parseInt(responseJSON['Ratings'][2]['Value'], 10);
               }
            }
        }
        const y = parseInt(responseJSON['Metascore'], 10);
        if ($.isNumeric(x)) {
          rott_crit = x;
        } else {
          rott_crit = "-";
        }
        if ($.isNumeric(y)) {
          meta_crit = y;
        } else {
          meta_crit = "-";
        }
      } else {
        return;
      }
      if (rott_crit <= 59) {
        $('.RottCritRatingImg').attr('src', rott_rotten);
      } else if (rott_crit > 59) {
        $('.RottCritRatingImg').attr('src', rott_fresh);
      }
      if (rott_crit >= 0) {
        $('.RottCritRating').text(rott_crit);
      }
      if (meta_crit >= 0) {
        $('.MetaCritRatingImg').attr('src', meta_icon);
        $('.MetaCritRating').text(meta_crit);
      }
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (OMDb Ratings): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (OMDb Ratings): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (OMDb Ratings): Request timed out.");
    }
  });
}

function getRotten(url, rott_rotten, rott_certified, rott_fresh, rott_user_up, rott_user_down) {
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 14000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let rott_state, rott_user, rott_crit;
      if ($(result).find('#score-details-json').length) {
        const scoreTxt = $(result).find('#score-details-json').text();
        const scoreJsn = JSON.parse(scoreTxt);
        const x = scoreJsn.scoreboard.audienceScore;
        const y = scoreJsn.scoreboard.tomatometerScore;
        rott_state = scoreJsn.scoreboard.tomatometerState;
        if ($.isNumeric(x)) {
          rott_user = x;
        } else {
          rott_user = "-";
        }
        if ($.isNumeric(y)) {
          rott_crit = y;
        } else {
          rott_crit = "-";
        }
      } else {
        return;
      }

      if (rott_crit >= 0) {
        $('.RottCritRating').text(rott_crit);
      }
      if (rott_user >= 0) {
        $('.RottUserRating').text(rott_user);
      }
      if (rott_state.match("certified")) {
        $('.RottCritRatingImg').attr('src', rott_certified);
      } else if (rott_state.match("rotten")) {
        $('.RottCritRatingImg').attr('src', rott_rotten);
      } else if (rott_state.match("fresh")) {
        $('.RottCritRatingImg').attr('src', rott_fresh);
      }
      if (rott_user > 59) {
        $('.RottUserRatingImg').attr('src', rott_user_up);
      } else if (rott_user <= 59 && rott_user >= 0) {
        $('.RottUserRatingImg').attr('src', rott_user_down);
      }
      ratingsColor();
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Rotten Tomatoes): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Rotten Tomatoes): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Rotten Tomatoes): Request timed out.");
    }
  });
}

async function getDoubanRatings(imdbid, douban_icon) {
  let id = await getDoubanID0(imdbid);
  if (id == "00000000") {
    id = await getDoubanID1(imdbid);
  }
  if (id == "00000000") {
    id = await getDoubanID2(imdbid);
  }
  if (id == "00000000") {
    id = await getDoubanID3(imdbid);
  }
  if (id == "00000000") {
    return;
  }
  const url = "https://movie.douban.com/subject/" +id;
  $('.DoubanUserRatingUrl').attr('href', url);
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      let user_rating;
      if ($(result).find('.rating_num').length) {
        const x = $(result).find('.rating_num').text();
        if ($.isNumeric(x)) {
          user_rating = x *10;
          $('.DoubanUserRating').text(user_rating);
          $('.DoubanUserRatingImg').attr('src', douban_icon);
          ratingsColor();
        }
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Douban): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Douban): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Douban): Request timed out.");
    }
  });
}

//www.allocine.fr/film/fichefilm_gen_cfilm=118831.html
async function getAllocineRatings(imdbid, allocine_icon) {
  const id = await getAllocineID(imdbid);
  const is_film = await GM.getValue("AllocineID_last_is_film");
  let url;
  if (id == "00000000") {
    return;
  } else if (is_film) {
    url = "https://www.allocine.fr/film/fichefilm_gen_cfilm=" +id+ ".html";
  } else {
    url = "https://www.allocine.fr/series/ficheserie_gen_cserie=" +id+ ".html";
  }
  $('.AllocineUserRatingUrl').attr('href', url);
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");
      const resultStr = String(response.responseText);

      let rating1, rating2;
      if ($(result).find('.stareval-note').length) {
        const x = $(result).find('.stareval-note:eq(0)').text().replace(',','.') *20;
        const y = $(result).find('.stareval-note:eq(1)').text().replace(',','.') *20;
        if ($.isNumeric(x)) {
          rating1 = x;
        } else {
          rating1 = "-";
        }
        if ($.isNumeric(y)) {
          rating2 = y;
        } else {
          rating2 = "-";
        }
        if (rating1 > 0 || rating2 > 0) {
          $('.AllocineUserRatingImg').attr('src', allocine_icon);
        }
        if (resultStr.match('> Presse <')) {
          $('.AllocineCritRating').text(rating1);
          $('.AllocineUserRating').text(rating2);
        } else {
          $('.AllocineUserRating').text(rating1);
        }
        ratingsColor();
      }
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Allocine): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Allocine): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Allocine): Request timed out.");
    }
  });
}

function ratingsColor() {
  if (GM_config.get("ratings_cfg_color")) {
    const ref_high = parseInt(GM_config.get('ratings_cfg_color_scheme').split(',')[0], 10);
    const ref_low  = parseInt(GM_config.get('ratings_cfg_color_scheme').split(',')[1], 10);
    $( ".scoutRatings").each(function(index) {
      if ($(this).text() > ref_high) {
        $(this).css('color', '#00e600');
      } else if ($(this).text() <= ref_high && $(this).text() > ref_low) {
        $(this).css('color', '#f5c20a');
      } else if ($(this).text() <= ref_low && $(this).text() >= 0) {
        $(this).css('color', '#e60000');
      }
    });
  }
}

//==============================================================================
//    Dark styles for Reference View
//==============================================================================

function darkReferenceStyles() {
  if (!GM_config.get('dark_reference_view') || !onReferencePage) {
    return;
  }
  // www.w3schools.com/colors/colors_picker.asp
  // background color
  addGlobalStyles('#nav-search-form {background: #d9d9d9}');
  addGlobalStyles('#wrapper, #pagecontent, .recently-viewed {background-color: #000000}');
  addGlobalStyles('.aux-content-widget-2 {background: #191919}');
  addGlobalStyles('#imdbscout_header, #imdbscoutsecondbar_header, #imdbscoutthirdbar_header, .article, .cast_list tr, .titlereference-list tr {background-color: #191919 !important}');
  addGlobalStyles('.add-image-container {background-color: #262626}');
  // border color
  addGlobalStyles('.article, .aux-content-widget-2, .cast_list tr, .titlereference-list tr, .recently-viewed .item {border-color: #323232 !important}');
  addGlobalStyles('hr, .answers-widget__question, .answers-widget__see-more {border-color: #666666}');
  addGlobalStyles('.recently-viewed {border-color: #000000}');
  // font color
  addGlobalStyles('h3[itemprop="name"], .titlereference-title-year a {color: #f5c20a}');
  addGlobalStyles('.titlereference-original-title-label {color: #cc0000}');
  addGlobalStyles('.ipl-rating-star__rating {font-weight: bold; color: #00b300;}');
  addGlobalStyles('.article, .aux-content-widget-2, .cast_list tr td {color: #cccccc !important}');
  addGlobalStyles('.ipl-list-title, #sidebar h4, .ipl-list-title::after {color: #c49b08}');
  addGlobalStyles('.ipl-list-title::after {border-color: #7a6105}');
}

function addGlobalStyles(css) {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.className = 'IMDbScoutStyles';
  style.innerHTML = css;
  head.appendChild(style);
}

//==============================================================================
//    Compact mode for Reference View
//==============================================================================

function compactReferenceStyles() {
  if (!GM_config.get('compact_reference_view') || !onReferencePage) {
    return;
  }
  addGlobalStyles('#main {margin-left:25px !important}');
  addGlobalStyles('#sidebar {margin-right:25px !important}');
  addGlobalStyles('#content-2-wide {margin-top:5px !important}');
  addGlobalStyles('.aux-content-widget-2 {margin-top:0px; padding-top:0px !important}');

  addGlobalStyles('#imdbHeader {width:960px; display:flex; justify-content:center; align-items:center; margin:auto !important}');
  document.getElementById('styleguide-v2').id = 'styleguide-v2x';
  addGlobalStyles('body#styleguide-v2x {background-color: #000000 !important; margin-top:0px}');
}

function compactReferenceElemRemoval() {
  if (!GM_config.get('compact_reference_view') || !onReferencePage) {
    return;
  }
  $('.titlereference-section-credits').nextUntil('.titlereference-section-storyline').remove();
  $('.titlereference-section-credits').remove();
  if (Boolean($('.titlereference-section-storyline .ipl-zebra-list__item').first().text().match("Plot Summary"))) {
    $('.titlereference-section-storyline .ipl-zebra-list__item').first().nextUntil('section').remove();
  } else {
    $('.titlereference-section-storyline').remove();
  }
  $('.titlereference-section-did-you-know').remove();
  $('#contribute-main-section').remove();
  $('.recently-viewed').remove();

  // Inject Top Review
  if ($('.titlereference-overview-review-list').length) {
    if ($('.titlereference-overview-review-list').text().match('User')) {
      getIMDbTopReview();
    }
  }
}

function getIMDbTopReview() {
  const imdbid = document.URL.match(/\/tt([0-9]+)\//)[1].trim('tt');
  const url = "https://www.imdb.com/title/tt" +imdbid+ "/reviews?spoiler=hide&sort=helpfulnessScore";
  GM.xmlHttpRequest({
    method: "GET",
    timeout: 10000,
    url:    url,
    onload: function(response) {
      const parser = new DOMParser();
      const result = parser.parseFromString(response.responseText, "text/html");

      const xTitle = $(result).find('.imdb-user-review:eq(0)').find('.title').text().trim();
      const xRevLink = $(result).find('.imdb-user-review:eq(0)').find('.title').attr('href');
      const xReview = $(result).find('.imdb-user-review:eq(0)').find('.text').html();
      const xUser = $(result).find('.imdb-user-review:eq(0)').find('.display-name-link').text().trim();
      const xUsrLink = $(result).find('.imdb-user-review:eq(0)').find('.display-name-link a').attr('href');
      const xDate = $(result).find('.imdb-user-review:eq(0)').find('.review-date').text().trim();
      const xRating = $(result).find('.imdb-user-review:eq(0)').find('.ipl-star-icon').next().text().trim();

      let x = '' +
              '<section class="scout_review">' +
              '  <div><h4 class="ipl-list-title">Top Review</h4></div>' +
              '  <table class="titlereference-list ipl-zebra-list">' +
              '    <tbody>' +
              '      <tr class="ipl-zebra-list__item">' +
              '        <td>' +
              '          <a class="scout_review_rating">' +
              '            <span class="ipl-rating-star__star">' +
              '              <svg class="ipl-icon ipl-star-icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">' +
              '                <path d="M0 0h24v24H0z" fill="none"></path>' +
              '                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>' +
              '                <path d="M0 0h24v24H0z" fill="none"></path>' +
              '              </svg></span>' +
              '            <span class="point-scale"> xRating</span><span> |</span></a>' +
              '          <a class="scout_review_title" href="xRevLink"> xTitle</a>' +
              '          <div class="display-name-date" style="font-size:11px">' +
              '            <span class="display-name-link">' +
              '              <a href="xUsrLink">xUser</a></span>' +
              '            <span class="review-date"> xDate</span></div>' +
              '          <p>xReview</p></td></tr></tbody></table></section>' +
              '';
      x = x.replace('xTitle', xTitle);
      x = x.replace('xRevLink', xRevLink);
      x = x.replace('xReview', xReview);
      x = x.replace('xUser', xUser);
      x = x.replace('xUsrLink', xUsrLink);
      x = x.replace('xDate', xDate);
      x = x.replace('xRating', xRating);

      let y = jQuery.parseHTML(x);
      $('.titlereference-section-media').after(y);
    },
    onerror: function() {
      console.log("IMDb Scout Mod (Review): Request Error.");
    },
    onabort: function() {
      console.log("IMDb Scout Mod (Review): Request is aborted.");
    },
    ontimeout: function() {
      console.log("IMDb Scout Mod (Review): Request timed out.");
    }
  });
}

//==============================================================================
//    Remove ads from IMDb
//==============================================================================

function adsRemovalReference() {
  if (!GM_config.get('remove_ads')) {
    return;
  }
  if (Boolean($('.aux-content-widget-2').first().text().match("IMDb Answers"))) {
    $('.aux-content-widget-2').first().remove();
  }
  $('.cornerstone_slot').remove();
  $('.imdb-footer').remove();
  $('#social-share-widget').remove();
  $('.navbar__imdbpro').remove();
  $('[class^=Root__Separator]').remove();
  // To remove ad's background image
  $('#wrapper').attr('style', 'background: 000000 !important');
}

function adsRemoval() {
  if (!GM_config.get('remove_ads')) {
    return;
  }
  // removing 5th ".nas-slot" breaks dynamic reflow when window is resized.
  if ($('.nas-slot').length == 7) {
    $('.nas-slot')[0].remove();
    $('.nas-slot')[0].remove();
    $('.nas-slot')[0].remove();
    $('.nas-slot')[0].remove();
    $('.nas-slot')[1].remove();
    $('.nas-slot')[1].remove();
    $('#inline40_wrapper').remove();
  } else {
    $('.nas-slot').remove();
  }

  $('[class^=Banner]').remove();
  $('[id^=taboola]').remove();
  $('[class*=ProLink]').remove();
  $('[class^=IMDbPro]').remove();
  $('.imdb-editorial-single').remove();
  $('.imdb-footer').remove();
  $('.navbar__imdbpro').remove();
  $('[class^=Root__Separator]').remove();
}

//==============================================================================
//    Create the config name (GM_config)
//==============================================================================

function configName(site) {
  if ('configName' in site) {
    return 'show_' + site['configName'] + (site['TV'] ? '_TV' : '');
  } else {
    return 'show_' + site['name'] + (site['TV'] ? '_TV' : '');
  }
}

//==============================================================================
//    Count sites (GM_config)
//==============================================================================

function countSites(task) {
  if (task == 1) {
    const count_total = sites.concat(icon_sites).length;
    return count_total;
  }
  if (task == 2) {
    // Init GM_config to get amount of selected sites.
    // GM_config's fields needs to be mirrored to keep Settings intact.
    var config_fields = {
      'aftertitle': {'type': 'hidden'},
      'imdbtotalstats': {'type': 'hidden'},
      'imdbselectedstats': {'type': 'hidden'},
      'imdbscoutmod_header_text': {'type': 'text'},
      'imdbscoutsecondbar_header_text': {'type': 'text'},
      'imdbscoutthirdbar_header_text': {'type': 'text'},
      'mod_icons_size': {'type': 'text'},
      'iconsborder_size': {'type': 'select', 'options': ['2px', '3px', '4px', '5px', '6px']},
      'cfg_iconsize': {'type': 'text'},
      'timeout_ms': {'type': 'select', 'options': ['10000 ms', '20000 ms', '30000 ms', '45000 ms', '60000 ms']},
      'load_icons_in_settings': {'type': 'checkbox'},
      'remove_ads': {'type': 'checkbox'},
      'debug_sites': {'type': 'checkbox'},
      'loadmod_on_start_movie': {'type': 'checkbox'},
      'load_second_bar': {'type': 'checkbox'},
      'load_third_bar_movie': {'type': 'checkbox'},
      'switch_bars': {'type': 'checkbox'},
      'sortReqOnNewLine': {'type': 'checkbox'},
      'call_http_mod_movie': {'type': 'checkbox'},
      'hide_missing_movie': {'type': 'checkbox'},
      'use_mod_icons_movie': {'type': 'checkbox'},
      'one_line': {'type': 'checkbox'},
      'ignore_type_movie': {'type': 'checkbox'},
      'remove_openall': {'type': 'checkbox'},
      'force_reference_view': {'type': 'checkbox'},
      'dark_reference_view': {'type': 'checkbox'},
      'compact_reference_view': {'type': 'checkbox'},
      'greybackground_reference_view': {'type': 'checkbox'},
      'highlight_sites_movie': {'type': 'text'},
      'highlight_missing_movie': {'type': 'text'},
      'loadmod_on_start_search': {'type': 'checkbox'},
      'load_third_bar_search': {'type': 'checkbox'},
      'call_http_mod_search': {'type': 'checkbox'},
      'hide_missing_search': {'type': 'checkbox'},
      'use_mod_icons_search': {'type': 'checkbox'},
      'ignore_type_search': {'type': 'checkbox'},
      'highlight_sites_search': {'type': 'text'},
      'highlight_missing_search': {'type': 'text'},
      'ratings_img_px': {'type': 'select', 'options': ['32px', '48px', '64px']},
      'ratings_cfg_imdb': {'type': 'checkbox'},
      'ratings_cfg_metacritic': {'type': 'checkbox'},
      'ratings_cfg_rotten': {'type': 'checkbox'},
      'ratings_cfg_letterboxd': {'type': 'checkbox'},
      'ratings_cfg_douban': {'type': 'checkbox'},
      'ratings_cfg_allocine': {'type': 'checkbox'},
      'ratings_imdb_fem': {'type': 'checkbox'},
      'ratings_cfg_color': {'type': 'checkbox'},
      'ratings_cfg_color_scheme': {'type': 'text'},
      'ratings_cfg_omdb_apikey': {'type': 'text'},
      'radarr_searchformovie': {'type': 'checkbox'},
      'radarr_monitored': {'type': 'checkbox'},
      'radarr_url': {'type': 'text'},
      'radarr_apikey': {'type': 'text'},
      'radarr_rootfolderpath': {'type': 'text'},
      'radarr_profileid': {'type': 'select', 'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom']},
      'radarr_customprofileid': {'type': 'text'},
      'radarr_minimumavailability': {'type': 'select', 'options': ['announced', 'inCinemas', 'released']},
      'sonarr_searchformissing': {'type': 'checkbox'},
      'sonarr_searchforcutoff': {'type': 'checkbox'},
      'sonarr_ignoreEpisodesWithFiles': {'type': 'checkbox'},
      'sonarr_ignoreEpisodesWithoutFiles': {'type': 'checkbox'},
      'sonarr_seasonfolder': {'type': 'checkbox'},
      'sonarr_usescenenumbering': {'type': 'select', 'options': ['Auto', 'No', 'Yes']},
      'sonarr_monitored': {'type': 'select', 'options': ['All Episodes', 'Future Episodes', 'Missing Episodes', 'Existing Episodes', 'Pilot Episode', 'Only First Season', 'Only Latest Season', 'None']},
      'sonarr_url': {'type': 'text'},
      'sonarr_apikey': {'type': 'text'},
      'sonarr_rootfolderpath': {'type': 'text'},
      'sonarr_profileid': {'type': 'select', 'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom']},
      'sonarr_customprofileid': {'type': 'text'},
      'sonarr_languageprofileid': {'type': 'text'},
      'sonarr_seriestype': {'type': 'select', 'options': ['standard', 'daily', 'anime']},
      'trakt_synclimiter': {'type': 'select', 'options': ['15', '30', '60', '300']},
      'plex_server_url': {'type': 'text'},
      'plex_token': {'type': 'text'},
      'jellyfin_server_url': {'type': 'text'},
      'jellyfin_username': {'type': 'text'},
      'jellyfin_password': {'type': 'text'},
      'jellyfin_debug': {'type': 'checkbox'},
      'emby_server_url': {'type': 'text'},
      'emby_username': {'type': 'text'},
      'emby_password': {'type': 'text'},
      'emby_debug': {'type': 'checkbox'},
      'milkie_authToken': {'type': 'text'},
      'tnt_authToken': {'type': 'text'}
    };
    $.each(custom_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(public_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(private_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(chinese_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(french_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(german_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(usenet_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(subs_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(pre_databases, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(other_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(streaming_sites, function(index, site) {config_fields[configName(site)] = {'type': 'checkbox'};});
    $.each(icon_sites_main, function(index, icon_site) {config_fields['show_icon_' + icon_site['name']] = {'type': 'checkbox'};});
    $.each(special_buttons, function(index, icon_site) {config_fields['show_icon_' + icon_site['name']] = {'type': 'checkbox'};});

    GM_config.init({'id': 'imdb_scout', 'fields': config_fields});

    $.each(sites, function(index, site) {
      site['show'] = GM_config.get(configName(site));
    });
    $.each(icon_sites, function(index, icon_site) {
      icon_site['show'] = GM_config.get('show_icon_' + icon_site['name']);
    });

    const count_selected = sites.concat(icon_sites).reduce(function (n, site) {
      return n + (site['show'] == true); }, 0);

    return count_selected;
  }
}


//============================================================================//
//================================  MAIN  ====================================//
//============================================================================//


//==============================================================================
//    Polyfill for GM3 notifications
//==============================================================================

if (typeof GM.notification === "undefined") {
  this.GM_notification = function(options) {
    const opts = {};
    if (typeof options === "string") {
      opts.text = options;
      opts.title = arguments[1];
      opts.image = arguments[2];
      opts.onclick = arguments[3];
    } else {
      Object.keys(options).forEach(function(key) {
        opts[key] = options[key];
      });
    }

    checkPermission();

    function checkPermission() {
      if (Notification.permission === "granted") {
        fireNotice(opts);
      } else if (Notification.permission === "denied") {
        alert("User has denied notifications for this page/site!");
        // eslint-disable-next-line no-useless-return
        return;
      } else {
        Notification.requestPermission(function(permission) {
          console.log("New permission: ", permission);
          checkPermission();
        });
      }
    }

    function fireNotice(ntcOptions) {
      if (ntcOptions.text && !ntcOptions.body) {
        ntcOptions.body = ntcOptions.text;
      }
      var ntfctn = new Notification(ntcOptions.title, ntcOptions);

      if (ntcOptions.onclick) {
        ntfctn.onclick = ntcOptions.onclick;
      }
      if (ntcOptions.timeout) {
        setTimeout(function() {
          ntfctn.close();
        }, ntcOptions.timeout);
      }
    }
  };
  GM.notification = GM_notification;
}

//==============================================================================
//    Settings Menu (GM_config)
//==============================================================================

// To have consistent spacing in different browsers.
var set_cfg_iconsize_spacing = "&nbsp &nbsp";
var radarr_url_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var radarr_apikey_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var radarr_rootfolderpath_spacing = "&nbsp";
var sonarr_usescenenumbering_spacing = "&nbsp &nbsp";
var sonarr_monitored_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
var sonarr_languageprofileid_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp";
var sonarr_seriestype_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  set_cfg_iconsize_spacing = " &nbsp";
  radarr_url_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  radarr_apikey_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  radarr_rootfolderpath_spacing = "";
  sonarr_usescenenumbering_spacing = "&nbsp";
  sonarr_monitored_spacing = " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
  sonarr_languageprofileid_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp";
  sonarr_seriestype_spacing = "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp";
}

var config_fields = {
  'aftertitle': {
    'section': ' ',
    'label': ' &nbsp',
    'type': 'hidden'
  },
  'imdbtotalstats': {
    'label': 'Total sites:&nbsp'.bold().fontsize(3) + countSites(1).toString().bold().fontsize(3).fontcolor("Blue"),
    'type': 'hidden'
  },
  'imdbselectedstats': {
    'label': 'Selected sites:&nbsp'.bold().fontsize(3) + countSites(2).toString().bold().fontsize(3).fontcolor("Blue"),
    'type': 'hidden'
  },
  'imdbscoutmod_header_text': {
    'label': 'Header text for the 1st bar:&nbsp',
    'type': 'text',
    'default': ''
  },
  'imdbscoutsecondbar_header_text': {
    'label': 'Header text for the 2nd bar:',
    'type': 'text',
    'default': ''
  },
  'imdbscoutthirdbar_header_text': {
    'label': 'Header text for the 3rd bar:&nbsp',
    'type': 'text',
    'default': ''
  },
  'mod_icons_size': {
    'label': 'Size of the icons (pixels): &nbsp &nbsp',
    'type': 'text',
    'default': '32'
  },
  'iconsborder_size': {
    'label': 'Size of the icons border:&nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['2px', '3px', '4px', '5px', '6px'],
    'default': '3px'
  },
  'cfg_iconsize': {
    'label': 'Size of the settings icons:' + set_cfg_iconsize_spacing,
    'type': 'text',
    'default': '22'
  },
  'timeout_ms': {
    'label': 'Timeout requests after: &nbsp &nbsp &nbsp' + radarr_rootfolderpath_spacing,
    'type': 'select',
    'options': ['10000 ms', '20000 ms', '30000 ms', '45000 ms', '60000 ms'],
    'default': '30000 ms'
  },
  'load_icons_in_settings': {
    'type': 'checkbox',
    'label': 'Load icons in settings (most of them are external)?',
    'default': true
  },
  'remove_ads': {
    'type': 'checkbox',
    'label': 'Remove IMDb ads?',
    'default': true
  },
  'debug_sites': {
    'type': 'checkbox',
    'label': 'Debug (the searchable sites)?',
    'default': false
  },
  'loadmod_on_start_movie': {
    'section': 'Title Page:',
    'type': 'checkbox',
    'label': 'Load links to sites on start?',
    'default': true
  },
  'load_second_bar': {
    'type': 'checkbox',
    'label': 'Enable the 2nd search bar?',
    'default': false
  },
  'load_third_bar_movie': {
    'type': 'checkbox',
    'label': 'Enable the 3rd search bar?',
    'default': false
  },
  'switch_bars': {
    'type': 'checkbox',
    'label': 'Swap 2nd and 3rd bars?',
    'default': false
  },
  'sortReqOnNewLine': {
    'type': 'checkbox',
    'label': 'Split Req sites to a new line if the request is found?',
    'default': true
  },
  'call_http_mod_movie': {
    'type': 'checkbox',
    'label': 'Auto-search sites for results?',
    'default': true
  },
  'hide_missing_movie': {
    'type': 'checkbox',
    'label': "Hide link if search didn't found results?",
    'default': false
  },
  'use_mod_icons_movie': {
    'type': 'checkbox',
    'label': 'Use icons instead of text?',
    'default': true
  },
  'one_line': {
    'type': 'checkbox',
    'label': 'Show search results on one line?',
    'default': true
  },
  'ignore_type_movie': {
    'type': 'checkbox',
    'label': 'Search all sites, ignoring movie/tv distinction?',
    'default': false
  },
  'remove_openall': {
    'type': 'checkbox',
    'label': 'Remove "Open All" button?',
    'default': false
  },
  'force_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Force it (without login)?',
    'default': false
  },
  'dark_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Enable the dark style?',
    'default': true
  },
  'compact_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Enable the compact mode?',
    'default': true
  },
  'greybackground_reference_view': {
    'type': 'checkbox',
    'label': 'Reference View: Enable grey background for searchable sites?',
    'default': true
  },
  'highlight_sites_movie': {
    'label': 'Highlight sites: &nbsp &nbsp &nbsp',
    'type': 'text',
    'default': 'PTP,KG,BTN,BTN-Title,SC,CG,TVV,Tik'
  },
  'highlight_missing_movie': {
    'label': 'Mark when not on:',
    'type': 'text',
    'default': ''
  },
  'loadmod_on_start_search': {
    'section': 'Search/List/Watchlist Page:',
    'type': 'checkbox',
    'label': 'Load links to sites on start?',
    'default': false
  },
  'load_third_bar_search': {
    'type': 'checkbox',
    'label': 'Enable the 3rd search bar?',
    'default': false
  },
  'call_http_mod_search': {
    'type': 'checkbox',
    'label': 'Auto-search sites for results?',
    'default': true
  },
  'hide_missing_search': {
    'type': 'checkbox',
    'label': "Hide link if search didn't found results?",
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
  'highlight_sites_search': {
    'label': 'Highlight sites: &nbsp &nbsp &nbsp',
    'type': 'text',
    'default': ''
  },
  'highlight_missing_search': {
    'label': 'Mark when not on:',
    'type': 'text',
    'default': ''
  },
  'ratings_img_px': {
    'label': 'Size of the ratings icons: &nbsp',
    'section': 'External ratings:',
    'type': 'select',
    'options': ['32px', '48px', '64px'],
    'default': '48px'
  },
  'ratings_cfg_imdb': {
    'type': 'checkbox',
    'label': 'Enable IMDb ratings?',
    'default': true
  },
  'ratings_cfg_metacritic': {
    'type': 'checkbox',
    'label': 'Enable Metacritic ratings?',
    'default': true
  },
  'ratings_cfg_rotten': {
    'type': 'checkbox',
    'label': 'Enable Rotten Tomatoes ratings?',
    'default': true
  },
  'ratings_cfg_letterboxd': {
    'type': 'checkbox',
    'label': 'Enable Letterboxd ratings?',
    'default': true
  },
  'ratings_cfg_douban': {
    'type': 'checkbox',
    'label': 'Enable Douban ratings?',
    'default': false
  },
  'ratings_cfg_allocine': {
    'type': 'checkbox',
    'label': 'Enable Allocine ratings?',
    'default': false
  },
  'ratings_imdb_fem': {
    'type': 'checkbox',
    'label': 'Add additional females ratings for IMDb?',
    'default': false
  },
  'ratings_cfg_color': {
    'type': 'checkbox',
    'label': 'Enable color scheme for ratings?',
    'default': true
  },
  'ratings_cfg_color_scheme': {
    'label': 'Reference points for colors:&nbsp',
    'type': 'text',
    'default': '69,49'
  },
  'ratings_cfg_omdb_apikey': {
    'label': 'OMDb API key:&nbsp',
    'type': 'text',
    'default': ''
  },
  'radarr_searchformovie': {
    'section': 'Radarr settings:',
    'type': 'checkbox',
    'label': 'Search for movie on add?',
    'default': true
  },
  'radarr_monitored': {
    'type': 'checkbox',
    'label': 'Add monitored?',
    'default': true
  },
  'radarr_url': {
    'label': 'Radarr URL:' + radarr_url_spacing,
    'type': 'text',
    'default': 'http://localhost:7878'
  },
  'radarr_apikey': {
    'label': 'Radarr API Key:' + radarr_apikey_spacing,
    'type': 'text',
    'default': ''
  },
  'radarr_rootfolderpath': {
    'label': 'Radarr Root Folder Path:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': 'D:\\Movies'
  },
  'radarr_profileid': {
    'label': 'Radarr Quality Profile: &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom'],
    'default': 'Any'
  },
  'radarr_customprofileid': {
    'label': 'Custom Quality ProfileID:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': '1'
  },
  'radarr_minimumavailability': {
    'label': 'Minimum Availability: &nbsp &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['announced', 'inCinemas', 'released'],
    'default': 'inCinemas'
  },
  'sonarr_searchformissing': {
    'section': 'Sonarr settings:',
    'type': 'checkbox',
    'label': 'Start search for missing episodes?',
    'default': false
  },
  'sonarr_searchforcutoff': {
    'type': 'checkbox',
    'label': 'Start search for cutoff unmet episodes?',
    'default': false
  },
  'sonarr_ignoreEpisodesWithFiles': {
    'type': 'checkbox',
    'label': 'Set ignoreEpisodesWithFiles=true?',
    'default': false
  },
  'sonarr_ignoreEpisodesWithoutFiles': {
    'type': 'checkbox',
    'label': 'Set ignoreEpisodesWithoutFiles=true?',
    'default': false
  },
  'sonarr_seasonfolder': {
    'type': 'checkbox',
    'label': 'Season Folder?',
    'default': true
  },
  'sonarr_usescenenumbering': {
    'label': 'Use Scene Numbering?' + sonarr_usescenenumbering_spacing,
    'type': 'select',
    'options': ['Auto', 'No', 'Yes'],
    'default': 'Auto'
  },
  'sonarr_monitored': {
    'label': 'Monitored:' + sonarr_monitored_spacing,
    'type': 'select',
    'options': ['All Episodes', 'Future Episodes', 'Missing Episodes', 'Existing Episodes', 'Pilot Episode', 'Only First Season', 'Only Latest Season', 'None'],
    'default': 'All Episodes'
  },
  'sonarr_url': {
    'label': 'Sonarr URL:' + radarr_url_spacing,
    'type': 'text',
    'default': 'http://localhost:8989'
  },
  'sonarr_apikey': {
    'label': 'Sonarr API Key:' + radarr_apikey_spacing,
    'type': 'text',
    'default': ''
  },
  'sonarr_rootfolderpath': {
    'label': 'Sonarr Root Folder Path:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': 'D:\\TVSeries'
  },
  'sonarr_profileid': {
    'label': 'Sonarr Quality Profile: &nbsp &nbsp &nbsp',
    'type': 'select',
    'options': ['Any', 'HD - 720p/1080p', 'HD-1080p', 'HD-720p', 'SD', 'Ultra-HD', 'Custom'],
    'default': 'Any'
  },
  'sonarr_customprofileid': {
    'label': 'Custom Quality ProfileID:' + radarr_rootfolderpath_spacing,
    'type': 'text',
    'default': '1'
  },
  'sonarr_languageprofileid': {
    'label': 'Language ProfileID:' + sonarr_languageprofileid_spacing,
    'type': 'text',
    'default': '1'
  },
  'sonarr_seriestype': {
    'label': 'Series Type:' + sonarr_seriestype_spacing,
    'type': 'select',
    'options': ['standard', 'daily', 'anime'],
    'default': 'standard'
  },
  'trakt_synclimiter': {
    'label': "Sliding watchlist's sync timeout (seconds):",
    'section': 'Trakt-Watchlist settings:',
    'type': 'select',
    'options': ['15', '30', '60', '300'],
    'default': '15'
  },
  'plex_server_url': {
    'label': "Plex Server URL:",
    'section': 'Plex settings:',
    'type': 'text',
    'default': 'http://127.0.0.1:32400'
  },
  'plex_token': {
    'label': "Plex Token: &nbsp &nbsp &nbsp &nbsp &nbsp",
    'type': 'text',
    'default': ''
  },
  'jellyfin_server_url': {
    'label': "Jellyfin Server URL:",
    'section': 'Jellyfin settings:',
    'type': 'text',
    'default': 'http://localhost:8096'
  },
  'jellyfin_username': {
    'label': "Jellyfin Username: &nbsp",
    'type': 'text',
    'default': ''
  },
  'jellyfin_password': {
    'label': "Jellyfin Password:&nbsp &nbsp",
    'type': 'text',
    'default': ''
  },
  'jellyfin_debug': {
    'type': 'checkbox',
    'label': "Debug?",
    'default': false
  },
  'emby_server_url': {
    'label': "Emby Server URL:",
    'section': 'Emby settings:',
    'type': 'text',
    'default': 'http://localhost:8096'
  },
  'emby_username': {
    'label': "Emby Username: &nbsp",
    'type': 'text',
    'default': ''
  },
  'emby_password': {
    'label': "Emby Password:&nbsp &nbsp",
    'type': 'text',
    'default': ''
  },
  'emby_debug': {
    'type': 'checkbox',
    'label': "Debug?",
    'default': false
  },
  'milkie_authToken': {
    'label': 'Milkie:',
    'section': 'Authorization Tokens:',
    'type': 'text',
    'default': ''
  },
  'tnt_authToken': {
    'label': 'TNT:&nbsp &nbsp',
    'type': 'text',
    'default': ''
  }
};

//==============================================================================
//    Add sites to Settings (GM_config)
//==============================================================================

$.each(custom_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Custom sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(public_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Public download sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(private_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Private download sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(chinese_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Chinese sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(french_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['French sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(german_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['German sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(usenet_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Usenet sites:'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(subs_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Subtitles sites (in 2nd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(pre_databases, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Pre databases (in 2nd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(other_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Other sites/tools (in 2nd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(streaming_sites, function(index, site) {
  config_fields[configName(site)] = {
    'section': (index == 0) ? ['Streaming sites/tools (in 3rd bar):'] : '',
    'type': 'checkbox',
    'label': ' ' + site['name'] + (site['TV'] ? ' (TV)' : '')
  };
});

$.each(icon_sites_main, function(index, icon_site) {
  config_fields['show_icon_' + icon_site['name']] = {
    'section': (index == 0) ? ['Icon sites (no search):'] : '',
    'type': 'checkbox',
    'label': ' ' + icon_site['name'],
    'default': ('showByDefault' in icon_site) ? icon_site['showByDefault'] : true
  };
});

$.each(special_buttons, function(index, icon_site) {
  config_fields['show_icon_' + icon_site['name']] = {
    'section': (index == 0) ? ['Special icons/buttons:'] : '',
    'type': 'checkbox',
    'label': ' ' + icon_site['name'],
    'default': ('showByDefault' in icon_site) ? icon_site['showByDefault'] : true
  };
});

//==============================================================================
//    Initialize and register GM_config
//==============================================================================

GM_config.init({
  'id': 'imdb_scout',
  'title': 'IMDb Scout Mod Settings',
  'fields': config_fields,
  'css': `#imdb_scout_section_header_1, #imdb_scout_section_header_2, #imdb_scout_section_header_3, \
          #imdb_scout_section_header_4, #imdb_scout_section_header_5, #imdb_scout_section_header_6, \
          #imdb_scout_section_header_7, #imdb_scout_section_header_8, #imdb_scout_section_header_9, \
          #imdb_scout_section_header_10, #imdb_scout_section_header_11, #imdb_scout_section_header_12, \
          #imdb_scout_section_header_13, #imdb_scout_section_header_14, #imdb_scout_section_header_15, \
          #imdb_scout_section_header_16, #imdb_scout_section_header_17, #imdb_scout_section_header_18, \
          #imdb_scout_section_header_19, #imdb_scout_section_header_20, #imdb_scout_section_header_21, \
          #imdb_scout_section_header_22, #imdb_scout_section_header_23 { \
             background:   #00ab00 !important; \
             color:          black !important; \
             font-weight:     bold !important; \
             border:           0px !important; \
             padding-left:     0px !important; \
             text-align:    middle !important;}\
          .field_label { \
             display:         flex !important; \
             align-items:   center !important; \
             font-weight:   normal !important;}\
          .config_var { \
             margin-top:       2px !important; \
             margin-bottom:    2px !important; \
             display:         flex !important; \
             align-items:   center !important;}\
          #imdb_scout_aftertitle_var { \
             margin-top:       0px !important; \
             margin-bottom:    0px !important;}\
          input { \
             margin-top:       0px !important; \
             margin-bottom:    0px !important;}\
          .grey_link { \
             margin-left:      4px !important;}\
          #imdb_scout_section_header_0 { \
             font-weight:     bold !important; \
             border:           0px !important; \
             margin-top:       0px !important; \
             background:   #bfbfbf !important;}\
          #imdb_scout_header { \
             background:     black !important; \
             color:          white !important;}\
          #imdb_scout_section_0 { \
             margin-top:       0px !important;}`,
  'events':
  {
    'open': function() {
      // Iframe position.
      this.frame.style.top    = '50px';
      this.frame.style.left   = 'auto';
      this.frame.style.right  = '150px';
      this.frame.style.height = '90%';
      this.frame.style.width  = '450px';

      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_sites_movie').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_missing_movie').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_sites_search').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_highlight_missing_search').attr('size', '35');
      $('#imdb_scout').contents().find('input#imdb_scout_field_mod_icons_size').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_cfg_iconsize').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_radarr_customprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_sonarr_customprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_sonarr_languageprofileid').attr('size', '1');
      $('#imdb_scout').contents().find('input#imdb_scout_field_ratings_cfg_color_scheme').attr('size', '2');

      const modVersion = 'IMDb Scout Mod v' + GM.info.script.version;
      const modUrl = 'https://greasyfork.org/en/scripts/407284-imdb-scout-mod';
      $('#imdb_scout').contents().find('#imdb_scout_section_header_0').append($('<a href="'+modUrl+'" target ="_blank">'+modVersion+'</a>'));
      $('#imdb_scout').contents().find('#imdb_scout_section_header_0').find('a').css({
       'text-decoration': 'none',
       'color': '#cb0000'
      });

      const iconsInSettings = GM_config.get('load_icons_in_settings');

      $('#imdb_scout').contents().find('#imdb_scout_section_11').find('.field_label').each(function(index, label) {
        var url = new URL(custom_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(custom_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_12').find('.field_label').each(function(index, label) {
        var url = new URL(public_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(public_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_13').find('.field_label').each(function(index, label) {
        var url = new URL(private_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(private_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_14').find('.field_label').each(function(index, label) {
        var url = new URL(chinese_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(chinese_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_15').find('.field_label').each(function(index, label) {
        var url = new URL(french_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(french_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_16').find('.field_label').each(function(index, label) {
        var url = new URL(german_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(german_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_17').find('.field_label').each(function(index, label) {
        var url = new URL(usenet_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(usenet_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_18').find('.field_label').each(function(index, label) {
        var url = new URL(subs_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(subs_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_19').find('.field_label').each(function(index, label) {
        var url = new URL(pre_databases[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(pre_databases[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_20').find('.field_label').each(function(index, label) {
        var url = new URL(other_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(other_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_21').find('.field_label').each(function(index, label) {
        var url = new URL(streaming_sites[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(streaming_sites[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_22').find('.field_label').each(function(index, label) {
        var url = new URL(icon_sites_main[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(icon_sites_main[index], iconsInSettings));
      });
      $('#imdb_scout').contents().find('#imdb_scout_section_23').find('.field_label').each(function(index, label) {
        var url = new URL(special_buttons[index].searchUrl);
        $(label).append(' ' + '<a class="grey_link" target="_blank" rel="noreferrer" style="color: gray; text-decoration : none" href="' + url.origin + '">'
                        + (/www./.test(url.hostname) ? url.hostname.match(/www.(.*)/)[1] : url.hostname) + '</a>');
        $(label).prepend(getFavicon(special_buttons[index], iconsInSettings));
      });

      $('#imdb_scout').contents().find("img").css({"margin-right": "4px", "width": GM_config.get('cfg_iconsize'), "height": GM_config.get('cfg_iconsize')});
    },

    'close': function() {
      location.reload();
    }
  }
});

GM.registerMenuCommand('IMDb Scout Mod Settings', function() {GM_config.open();});

//==============================================================================
//    Remove tracking from IMDb's URL before start
//    Force the title pages to open in Reference View
//==============================================================================

if (Boolean(location.href.match('\\?ref_=')) || Boolean(location.href.match('\\?pf_'))) {
  let stripped_href = location.href.split('?ref_=')[0];
      stripped_href = stripped_href.split('?pf_')[0];
  if (GM_config.get('force_reference_view') && Boolean(location.href.match('/title/tt')) && !Boolean(location.href.match('reference'))) {
    stripped_href = stripped_href + "reference";
  }
  window.location.replace(stripped_href);
  return;
} else if (GM_config.get('force_reference_view') && Boolean(location.href.match('/title/tt')) && !Boolean(location.href.match('reference'))) {
  const reference_href = location.href + "reference";
  window.location.replace(reference_href);
  return;
}

//==============================================================================
//    Fetch per-site values from GM_config
//==============================================================================

$.each(sites, function(index, site) {
  site['show'] = GM_config.get(configName(site));
});

$.each(icon_sites, function(index, icon_site) {
  icon_site['show'] = GM_config.get('show_icon_' + icon_site['name']);
});

//==============================================================================
//    Global variables
//==============================================================================

// For internal use (order matters).
const valid_states = [
  'found',
  'missing',
  'logged_out',
  'error'
];

// Are we on a search/list page?
const onSearchPage = Boolean(location.href.match('/search/'))
                  || Boolean(location.href.match('/list/'))
                  || Boolean(location.href.match('watchlist'));

// Are we on a reference page?
const onReferencePage = Boolean(location.href.match('/reference'));

// Globals for the sorting launcher.
var showSitezFirstBar = 0;
var sortReqOnNewLineTemp = false;

// Trakt auth code?
const traktCodePage = Boolean(location.href.match(/tt0052077\/reference\?code=/));

//==============================================================================
//    Stuff for the new IMDb design (to start after reflow)
//==============================================================================

function startObserver() {
  // Double check if still on a redesigned page. Possible fix for a rare bug when the script runs before page transfers to a reference page if set on imdb's settings.
  if ($('html[xmlns\\:og="http://ogp.me/ns#"]').length) {
    return;
  }

  if ($('.ipc-page-section').length) {
    addDummyElem();
    const obscfg = { childList: true};
    const obs = new MutationObserver(checkDummyElem);
    obs.observe($('.ipc-page-section')[0], obscfg);
  } else {
    console.log("IMDb Scout Mod (Start Error): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Start Error)");
  }
}

function addDummyElem() {
  const temp = $('<temp />').attr('id','temp_scout').css({'display':'none'});
  $('.ipc-page-section:eq(0)').append(temp);
  setTimeout(function(){
    temp.remove();
  }, 2000);
}

function checkDummyElem(mutation, observer) {
  if (!$('#temp_scout').length) {
    observer.disconnect();
    adsRemoval();
    startIMDbScout();
  }
}

//==============================================================================
//    Stuff for the new IMDb design (alternative to startObserver)
//==============================================================================

function startRedesign() {
  // Double check if still on a redesigned page. Possible fix for a rare bug when the script runs before page transfers to a reference page if set on imdb's settings.
  if ($('html[xmlns\\:og="http://ogp.me/ns#"]').length) {
    return;
  }

  if ($('.ipc-page-section').length) {
    adsRemoval();
    startIMDbScout();
  } else {
    console.log("IMDb Scout Mod (Start Error): Element not found! Please report it.");
    GM.notification("Element not found! Please report it.", "IMDb Scout Mod (Start Error)");
  }
}

//==============================================================================
//    Start: Display 'Load' button or add links to sites
//==============================================================================

function startIMDbScout() {
  if (traktCodePage) {
    traktCatchToken();
    return;
  }
  if (!onSearchPage && GM_config.get('loadmod_on_start_movie')) {
    performPage();
  } else if (onSearchPage && GM_config.get('loadmod_on_start_search')) {
    performSearch();
  } else {
    displayButton();
  }
}

if ($('html[xmlns\\:og="http://ogp.me/ns#"]').length) {
  document.events.on('bodyloaded', () => {
    darkReferenceStyles();
    compactReferenceStyles();
  });
  document.addEventListener('DOMContentLoaded', compactReferenceElemRemoval);
  document.addEventListener('DOMContentLoaded', adsRemovalReference);
  document.addEventListener('DOMContentLoaded', startIMDbScout);
} else {
  // Redesigned pages stopped using jQuery(?). It's needed for POST links.
  document.events.on('headloaded', () => {
    const addJquery = document.createElement("script");
    addJquery.setAttribute("type","text/javascript");
    addJquery.setAttribute("src","https://code.jquery.com/jquery-3.5.1.min.js");
    document.getElementsByTagName("head")[0].appendChild(addJquery);
  });
  // Start for redesigned page
  // document.addEventListener('DOMContentLoaded', startObserver);  // replaced with startRedesign in v17.0, probably not needed anymore as elements were moved out of a reflow area
  document.addEventListener('DOMContentLoaded', startRedesign);
}


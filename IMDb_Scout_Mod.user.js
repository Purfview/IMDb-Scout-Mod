// ==UserScript==

// @name         IMDb Scout Mod
// @version      17.0.4
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

17.0.2  -   Added: Flick Metrix.

17.0.3  -   Version bump: GitHub glitched with 17.0.2 update.

17.0.4  -   Added: HBO Max Movie/Series Catalog [https://github.com/Purfview/IMDb-Scout-Mod/pull/110].

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
      'icon': 'data:image/png;base64,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',
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
      'icon': 'https://dontorrent.wtf/assets/DonFav.ico',
      'searchUrl': 'https://dontorrent.wtf/buscar/%search_string_orig%',
      'loggedOutRegex': /Cloudflare|Ray ID/,
      'matchRegex': /encontrado <b>0</,
      'spaceEncode': ' ',
      'both': true},
  {   'name': 'DW',
      'icon': 'data:image/png;base64,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',
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
      'searchUrl': 'https://ilcorsaronero.fun/argh.php?search=%search_string_orig%+%year%',
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
      'icon': 'https://nnmclub.to/manifest/favicon-32x24.png',
      'searchUrl': 'https://nnmclub.to/forum/tracker.php?f[]=731&f[]=733&f[]=730&f[]=732&f[]=230&f[]=659&f[]=231&f[]=660&f[]=661&f[]=890&f[]=270&f[]=218&f[]=219&f[]=954&f[]=888&f[]=217&f[]=1293&f[]=1298&f[]=320&f[]=677&f[]=1177&f[]=319&f[]=678&f[]=885&f[]=908&f[]=1310&f[]=909&f[]=910&f[]=911&f[]=912&f[]=221&f[]=222&f[]=882&f[]=889&f[]=225&f[]=226&f[]=227&f[]=1296&f[]=891&f[]=1299&f[]=682&f[]=694&f[]=884&f[]=1211&f[]=693&f[]=913&f[]=228&f[]=1150&f[]=1313&f[]=1312&f[]=321&f[]=255&f[]=906&f[]=623&f[]=622&f[]=621&f[]=632&f[]=627&f[]=626&f[]=625&f[]=644&f[]=635&f[]=634&f[]=638&f[]=646&f[]=1155&f[]=1156&f[]=1099&f[]=1098&f[]=892&f[]=668&f[]=669&nm=%search_string_orig%+%year%',
      'matchRegex': 'Не найдено'},
  {   'name': 'NNM',
      'icon': 'https://nnmclub.to/manifest/favicon-32x24.png',
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
      'icon': 'data:image/png;base64,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',
      'searchUrl': 'https://anthelion.me/torrents.php?searchstr=%tt%',
      'loggedOutRegex': /You appear to have cookies disabled./,
      'matchRegex': /Your search did not match anything/},
  {   'name': 'ANT-Req',
      'icon': 'data:image/png;base64,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',
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
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAIAAADYYG7QAAAAB3RJTUUH5QIcFyYrnFlURwAADA9JREFUWMPNWX1wFPUZfnfvK3e5kHDkO4QUSAIiJsAAAkUgoJSKohmpRmEYcIbWIopaHZFCUamWqUOro3acYlss06lfaIsQ5A8pXwHlw0AIIuaLJHe5S3KX3N3e3X7v9tk7CCFETICZ9jebzeb2d7vPPu/zvr/n3TC6rhMRwzD0vx4JJOYEmsQf1z1WrVqFK0QiEb/f39ra2tzcjOPetxnISMBgB4WGuWqwLHvXnXeqmiaKoiAIsVgsFApFo9HeXxk4Q5hsHhSUtMLCzKlTzZmZenJyTJZDzc3hI0ca6+vT09MVVQWU7vi4Eb6Z3qyuWbOG47iuri6v19vS0uLz+XqADxszZtLjj7smTNBTUmKKwoliUJa7FSXQ1RX96KPi6ur8ESO6gkGPx9PZ2dkH0KAicJGhjRs3yrJss9mwt1qtOEhOTrbb7TzPY1L+jBlzNm2yZWYCrhCJiJrGi2JUECKyLJhMdP/99R0dwrffKgyDh7lBOZoTaHAVi8WiaRoOgCkhBWgCZ4eOHl22aZM9PT3KcRqRpCjhjo5YUhKv61FVVffsoZoaTZLADMSIwN1grrH4AQLQADS4viRJCTQYiWfNnTbNmZsrC4LGMFBuzauvnli+3L19e4xhMJlGjqQZMyg1VVWUG0dzkSFcCoCwByWIEXIkGIRC5MQMzucDY+BGt9laKys7jh8f9dpr4aSkblHUQWFqKtntlJVFbjdduHDTAIEeIAAa1A+kSTgc7pnBeTwS6DGZgDri8ajAkZsrmc1SMEiiSLGYsYHLlJSbUh4NQAgE9qAHOKBKFDcjFpeGGAxKoqhB4JKkO50p8+ZxLMvxPGFOdzfiTYiUphHU/f31d3CAcPuEkBGpQCCA/RVXBIVQuqYhlM4FC2Rd7+R5BTh27aKDByktjRYsMPY3llxXiFqMj4R6oOXe9CSeUVJVUVV5ZLumoQIZuXf0KDU307JlBjdINJYlp/OmAZLjAziACTz1mWFNS1NMJgGSV1WURB6Cwzp1/DjNnk2ZmbRoEYVCVFVFHGd8YrX2DtZ11CQDEBQNXScSHpj6zChYuJBxOgEIJAGTBK2cPGkoJi/PkHN6Os2cSfv3G0pavJgmTLgJDKnxkQDUk+2JMWzSpPx77kExgIagHgXoceOaGiosRJ03Er61lU6dMgSExPR4MkMhM8veBEA9Od+H5OJly0xOJ6ozdG3UBoBAvNrbafRoIzpHj06rq3tp6VIsNYRU2Lp12d13zy4rG+w63xdQQj3I+d62ASMpPX1IURFcBaCouq7FM86oPdgyMujw4QqHY/9nnz2/fv3w8ePp1lspEDh05EhxcfGN1qFEaUbC94kXY7VqZjP4Az0AhLjgkWGgVHDT1lba1vbG++/bnE4QawIZ5eWMx/PN6dPWGzOfBkMJH4OVvM85FdKRZUM38UAiBBaWtZjNBkN797bW1Px81apz587pKAeq6iooyHnxRWtFxZkRI2wFBf0YOpZlTCbGbGZsNmNj2d4nr2AI9KBAq1ctjTKQNjU5S0sNZ0kEGiy6noQq4HIpJ050Ef17506vz/f8mjWx9HRXSorF5TKvWGG2WvkzZwK7dqnRKGO3w0yRzca6XEx+vtluT47FkgIB1euNnToVbm8PRyKJ+/ZgMn6lpKRcLefEGL16dc7DD/McJ2kaNmS+ZLHw588H167V4wuO1WRyZWUlPfdcWkkJxJi4KmOxEGKNioU1G4uSyQT95YZCY1pakpqbg15vp9cLK+f2eHqsd88wJQrj91UwfO6aM0e7VOIMclXVmp3NpqUJyHY8HTgrL89dtIgRhB7etUTexmsp6kVWIDC5oaG0rs7u9XZ3dra3t7vRCbjdfXLoMkPX8pQsO3bLlpSJE1EVAEuJbzjQrFapsVFubEzKzralpbGimFxcDMOgxzMRnl8FNyzrDIUKW1oKOjpYrJXw4BzX1tbW1NTkdrsTK7qRy1ZWUqBD/TJD124FgGnozJm6qjIJhuJ7VlWTcnIAFAuLZ8sWW1aWY9QoHdWKZXWTSbfaeFl1XGgZf3C/s60N1gApA/cNHHV1dQhW73SeWTI0GJEFSbss6muPcHW17Pdb0tJwPy3OGR4CN47W1PhPnIjV1g4pLU2bNStOm03kIuFWT+hIFdvwbbLC+105EFOPlUDXgHTuc/2F0zPcHUI3p1wGlOgr+vUx+Fz0+aJnz2bMnYtCDUCm+AnDXH/3HSsIw1euRBrCjXTUfCMc+MLWeH5cilJ+e15Zecnw3CEb3q3dsa/ezMiouigrKPh97jKhaMjS+Xk7qzrqPbErGLr2shw+fjynrExjWe0SGjjw7AceQD4jj3xfn47s/HS+o3v5vMIpTy50ZaawDgtJkIi84dHi+oamykPN/V52WKr1zTW3pDnNPK9eUYd+sJsMVVdrHGdyOJBi2iX0+BHCkebt/5jiOfnrhyfNvWs+agCJEikSRaKkKaRJ6S7LP393x5vbndsqG+pbL2e4xcxMHpv68qOFU8elNnhijT6+/0bx+5o31mqd8s47KUVFMrxsItHM5lCQc7/+x6dGCb959h7LEAfFRAOErhI8gXEAayuRKhAjklWNdoaO1Xa0+PiYpH78n3ZHkmn7+hLNaLn0z4/5l79aM1CGLtYVSRLa24eMHUvxeEHRkRAX/dMf3p2f8tDShSTJxEWMfLXpl2DJpAEQjgVSYsSLyRZ1zkQXqpbZxOSnJ63bWucNCDAqsCr7Tvr7rmUDeUvC1dUZZTduQlCsvbt3r5vIPLRiFsWiJPFkUnydgU/+9bUsIFg8qTEDhxolJaIpcH2iP4hOUmxp5+vcsUyXTdV0r1+MikpbQDxU0z04QInBd3bKcVckMUx3W3tB44lHyicYpkwRyazyscivXtlz5rzbjAD1QqNIfDgqd3NqMKqEInIoqoRjSmdQdNpNiorSRnuP+Zu8/PUAgraxvhjLGdyB15dr5oekWEg29BEOdK9Yu/PwKc8vl97KmCWSDSjYUIsBIsgpQQNKHE0U9UH74mRXQZYdMjp3IbL1s9Z+7MdAhsLzYsJWgyeLpaUtLEYjZFX2HTi/bF3l4rK8SWNcT/0WzjpCWhTERKJSNyd3cUo3MMVhARAvameauKO1wXt/nOnrkl5+r6GjW+qjjYECQq0VIW1YH0lS04eeU5zHTqO6yHaz8tqTExaX/+iNZ287VN3xxrZaZBn4CHCIFHAADYJlcBOJKRFB+XCfb8otqRlp1m173HXuaP+OcUCJputCvOvAGik47OroW/bsq71jZs70iUON9PZ3jchi335m3CMvnbZamAdmZ3MxFeqJCmpM0ARRlRT04uxXNUFR0maVunYc9FV+2dlvg8sOHBBsYRSbosB5Ucn49w60t9R5DQnzhlyCnXzZRNeW1WMRiFf+3uALiJKsAxYXUzhe5SU9EJKq68N3Tk7fWdX+t0pP79rXuxAOlCGFYWK6HpFltEuGhc3Lbssoenrzlx/+/nZZUiFekIEV+6e3ZyCfX9pWj/R5cG52YZ4jXlpRL/U9X/kjMfXjA94zDZFrNP8DqtQGk7fdxqxda9h79KlgCLA6OujPf3lhQfK6R8eizPASYqTsPtr5190ej9/otmGai4Y7Rmbbk+0mf0g+fKYbi/O13/ZddNfXAIQJ2UTziHbDeqMXmzePiorgKAgNriBQfSOz4+On7x72i8Wj6juEjdsaTpzuGuyL6UEAMl67Er1ONJWojehLos+Jjqemiui80LmiNUtKouYWqtw7LU8ewWleT6yaKHK9aAYEaDzR20QZaA/h5+GBiM4R7Sf6gqgB7T2aw2nTSBDpk09/Egm/EMf9CVEVkXeQUK5odvXvGYlJIGlzHMdJ0ENUG9/Pd7nWbdgwL/G6Y8oUWrKExo1LZ5j1cSLvJXJciWCA4we+gFMVFRVb3npraEbG8jig6jigVUQbNm/GBDQXOz74YPyYMZSdTStX0tSpDxLd4XDks+w2osmDx/QDs10uV0NDAw5qzp4dWVo6l+gU0VHcMju7we3umYbeanlFhYFp+nS0iweqqh574okcovyrIjUgQBftX3/nlixZ0vNnY1NTYUnJz4geI1r9zDN9JguCMHvOHHzl3vvuS0AsKS2lQQK6aFD/3/499V+tM0weyQNyUgAAAABJRU5ErkJggg==',
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
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAn4SURBVFjDhVdtjBxlHf/N287szr7czt3u3u69tJS7q224llZETJGirahfiAH9hAmgEA0xRE3UiHwCE6OYmDTxA99ISBqChphgTIyaqDEWCAhcaei19F72rrt3e7dvsy+zO7sz4++Zu8NaaNnkyTM788z/5ff7v40EQMJHf+JesHstdlWS5V+m0ulHpkZHkTQMRBQFMh94QYCh76Pe7WKj2fTrtdoffc/7Ph81r5Ed3EiHdAMDrv2Jl380MTn5qyfm5nCUf6LDIQauu2uZhJV+H+/QgIau441WCx+srJwNfP+bu+9KN5AZ3lc+wQBxcNRIJs8+ettt5mS9jsWrV2F5HrJcsuPA5vpXo4EqV4RGTUxMoDQYzHfb7b/y3eJ1KEjXI6B8IgKS9N075uYe+DwV/m1hAfV2G10q2h+JIM7H53i/Su+1TgdUihHel3I5FCsVkyj8/ho6r1ce7vINHuxZrGux2GN3jIygsrqKHIXnTRNt8n7ZtlElFRUeSnJPRaMY51I3N3GAMTKSTn+Vj/ZdF0sfWfINAmTvty9nWdPjvR6a9NIgxxFNg0kFNRpRoUER7jHuOpcmvCciIzQun8kk+f4X/gdk6NstXHNcs7v7AfVjOL8W/tNTqVRcbjZJlhIq11U1zACFAoVBFgMw4H2XmSALJdxVxsNkPo/3Ne2EPxi8sCvtp8lk8inLSquKooYGcdXUm9KvqrN5euvWaqHiGBdIQZP3SqoGm/+3UimYpCBJQ2IMSBABj3tWlqFHo0ecwWAPga/MzM7FT5w4AXfgosNs8TzPvKkBiqblTHrkUbgcj+OSZeGypKIlvORzI/DQJ2ZDWUXcjOCAGcf+lg2NBieoOGoYGce2BRU219WNcgmLixcxNb0PMo3v9XrezREAMi3yucEgfDuVxlDy8WnTwTGzh5zqQg98OJ6Mjb6G19s63nZ1XEykcJQUafQw8Dyh3BQG+L7/w1KptGQ3m987+cVIamxsLIz4mxrgu+7516vV09FsHneaQzw0VsNsvE3ufYavBMYfPCLs9YhWd4gYDWjGx3GOHA+2KgLmTYqp7Yrb4Hra8/1TQRDctadDvUkBgjccrjZZqx7MS3gsX4KVcqEmJKhRQFaCsJB6rgS/C9zqKkjrfaRRxqtSFi9VFbiu+ybF9P8/rsPUx80M2MuEESVqPnn/p3J4PL8FyyKnoxIi8SHkaEAOgxCBwFXhdSTMKxJqpoZOPcApt4LGZA5/6DonHbtRoKzSjVBWP0ZxZDdfvzFTGD/w0Hgb6YSLmMW0s4bQMhbk0SlIrKFBZxVBqwZPZ1oy6jWyuu1LaHd93O3V8X4hu++dtv0TpuZvKW+dq7unR/AvM1bU65TfFYlEnjNN8zM9H/q9+QhmoqzxCRmxxBCRXAby7Cl2h/kdCfYCUP4LFGULiq8RDSDRlpgRCsZaDm43k1hKjz4pDd3vkI4lx3F+Tv49oU1lFhi6ERqwp/zb6XT6zPz8fKzLqmc7Lo6aHdZiH0ZUQC9BHp8BsncAKfZEgb9KsAYrkNxtqIMA0W6AXlRURqKlSpjodTFdyIsqqesR7dCly5dfbLfbPZIH3gpR2wuIR7PZ7PPHjx+PbWxslIpra628NcJiwqAjt4ZGznW6bOgkiEs1dlaEK8r/MT6jYoVnYprEooXwPdPrI5M04bh99FlLjh87Jk9NTcaIAnRWUdOMhQh8nTn5/OFDh5TFxcVfr6+vvzyWzT2nK9JJA95OK2O0u0OPkBchtRYZyUYInN9ZhNdaZZwzLV1GAFNywGOBv5OiCuuExpLrdB1sNssh57fffowFjr1DZ+8gDWoikfjN4cOHtStLS69S+bOCWabfxWGAk+sdtsMtD2OEM0bhkfYyjMafGQsrjAFOQo2LcLeX4ZF3zyb8VR92JcBmTcJqy8OmSFEaMBgM/tFuteZZiKxxtuqZqWnoLOdx0T0PHjyY5Ri1tLa29sxuyWT+D97q+YG35EaU8U4bmb6C6IBU0D2teglKb5kYB9CGrIa+DJ9NdcBdZlVkPUJAYx3Xx3agwiXLTrezwCC8xCB8fLNSQWFqCoWJAhLsK3IyHu8tLS+LjvXmXj7y4JWO43QrchJt9henJWHIFbQUSDbzrz6EVOOy2dWaCgIurymjZ0scSiS0GGYtGtuJJuEMvSG9f4O89yIRDQx0+J6PWCyGZDIBtes4/U6nc+7a4kDI3qtvby+U90+fWGluwKy6jFgqoXeGw3yP0lsxS/k7pdhlIeo0JVTrINcByoR/y1fRTmbQ3K6vMgD/zgr4YGFiEqfvu080KVgjaaRGUlBj0aixf3r6Z5Xt7XtoJeNClVLJZJztN1Pp9nDemECs9gFhltDry8xzxoUuiogUJvBQwE2UbN7fYhxcbXq42h2gYu1Dw6Nhtm1kxsZ+PPS8CY5ouPDee4iSe4EA2zGke+6+u8qwtobs6UO2ULGzGGF5ZeVl3u/OHDz08C3tDek25ypycRlpFpko81xVdkrBgNHaYTNqOJyQOh5KVF5K5rA9ug+rq6v/bNbrjdnZ2fvdwaDHemBwGqEzTGs2s/LmZl3tUyk5QofFp8WdUw9F4T8MljOE7eFEMgXkC+iy9h6wyxi1XZgR0kAEAiap69EABlzD5XDKoNu2ptFIjXvlcvnt4urqI0T13u1q9V7DMLSlpSWMcIBh5iHJvVFvSGq1WlVz2WzoeRAXcy6McqlkEIVXCFO233MQMNpr6QKqmgmrU8Wo50Dv9ZmJPgYiyuUo2zCH1cQYHEVHqVhsrRWLnOKUVyjnsG3bkUKhEI5hfc6XHFhDZ5vN5p8kKrl05MiRWQ4MoDEiA0JuBA2CqxQtFZErBESMKFaKRSxdWmTH8sPZcMD3XEKWtMZgktetzQ3UOBGJakcDdioeHROei8LT4ujOuMPC+fMdGvBZlXX/qWKx+LuZmZnwa0coFQoJ2YcGWBzFRjgVieitcKxaW1936cmznOo5rQaqqqlPH9QNy2SpTu1CHIQ8y6Ec4YzwWDQg8XxlZUV4L1L/gkim95mGY7T0TnGABSM8KBSKl8WPEGJ5eRmvnTsXvPPuu2Wm1Q+o4AzD8A0+fo3XFynjKFG06LUcer6LIDtr+L6gWMgV6Fy5cuU8z35LtOe9D5HDPLgwNzenCGv7NEIIEPAJgwQ1ooJxPnSo7Amef+FjPjyPkONXOXpPZzIZjPIjVhggqBXpZ/CaRuLChQvC+6d4/hdCRvhpRqieITR3Co9Ffgq+KCg0QKy9vOU5jQZ9mUI7wvNrjHiAhp8ldZNCcZyci3fEu+Ja5XfDXpqLVs+l05GXRM0LB1O+/O/JyclbhQECPrFExArIxNeO+ADRKER4w9xWCOFbDNQv7dRCCMNepOKvsaW7AsEQliD48ItIyPF2P1wEHYw5hyP55/h47b8Vl9NojCflMAAAAABJRU5ErkJggg==',
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
      'icon': 'data:image/png;base64,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',
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
      'icon': 'https://generation-free.biz/favicon.ico',
      'searchUrl': 'https://generation-free.biz/torrents-search.php?search=%search_string_orig%+%year%&cat=0&genre=&incldead=1&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Les cookies doivent/,
      'matchRegex': /a été trouvé/},
  {   'name': 'G-Free',
      'icon': 'https://generation-free.biz/favicon.ico',
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
      'icon': 'https://tctg.pm/favicon.ico',
      'searchUrl': 'https://tctg.pm/torrents-search.php?search="%search_string_orig% %year%"&cat=0&incldead=0&freeleech=0&lang=0',
      'loggedOutRegex': /Cloudflare|Ray ID|Entrer le total/,
      'matchRegex': /Aucun torrent trouvé/,
      'spaceEncode': ' '},
  {   'name': 'TCTG',
      'icon': 'https://tctg.pm/favicon.ico',
      'searchUrl': 'https://tctg.pm/torrents-search.php?search="%search_string_orig%"&cat=0&incldead=0&freeleech=0&lang=0',
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
      'icon': 'data:image/png;base64,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',
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
  {   'name': 'HBO Max Movie Catalog (US)',
      'icon': 'https://cdn-1.webcatalog.io/catalog/hbo-max/hbo-max-icon-filled-128.webp',
      'searchUrl': 'https://www.themoviedb.org/movie/%tmdbid%/watch?translate=false&locale=US',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true},
  {   'name': 'HBO Max Movie Catalog (BR)',
      'icon': 'https://cdn-1.webcatalog.io/catalog/hbo-max/hbo-max-icon-filled-128.webp',
      'searchUrl': 'https://www.themoviedb.org/movie/%tmdbid%/watch?translate=false&locale=BR',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true},
  {   'name': 'HBO Max Series Catalog (US)',
      'icon': 'https://cdn-1.webcatalog.io/catalog/hbo-max/hbo-max-icon-filled-128.webp',
      'searchUrl': 'https://www.themoviedb.org/tv/%tmdbid%/watch?translate=false&locale=US',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'TV': true},
  {   'name': 'HBO Max Series Catalog (BR)',
      'icon': 'https://cdn-1.webcatalog.io/catalog/hbo-max/hbo-max-icon-filled-128.webp',
      'searchUrl': 'https://www.themoviedb.org/tv/%tmdbid%/watch?translate=false&locale=BR',
      'loggedOutRegex': /Oops! We can't find the page you're looking for|Não existe oferta para|There are no offers for/,
      'matchRegex': /HBO Max/,
      'positiveMatch': true,
      'inThirdSearchBar': true,
      'TV': true},
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
      'icon': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEUAAAD

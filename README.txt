RECRUITMENT LAB
===============

A free recruitment department for Football Manager. Export your player search
from FM, import it here, and the Lab scores every player in every role, finds
the gaps in your squad, suggests signings for each one and keeps your shortlist
moving from Watching to Signed.

It runs entirely in your browser. Nothing you import is uploaded anywhere, it
works offline once it's loaded, and it installs as an app on your computer or
phone.

    | Unofficial fan-made tool. Not affiliated with or endorsed by Sports
    | Interactive or SEGA. Football Manager is a trademark of Sports Interactive
    | and SEGA.

    | Made for Football Manager 2024 (FM24). Other versions are untested. FM26
    | reworked roles and tactics, so its exports and roles may not match.

WHAT IT DOES
------------

  * Home
      Your recruitment overview: best XI against the league, weakest slot, DoF
      picks for it, shortlist pipeline, contracts ending, saved searches and
      prospects. After a new import it lists what changed for players on your
      lists.

  * Explore
      Rank every player for any of the 115 FM roles, with filters for age,
      value, wage, contract, league level, height, foot and stat conditions.
      Profile search, Prospects (young players doing well in limited minutes)
      and Risers (biggest improvers on last season).

  * DoF picks
      Ten suggestions for one slot of your tactic: dream signing, upgrades,
      value buys, squad players and prospects, within your budget and wage cap.
      Filters for age, league level, confidence and contract.

  * Scatter
      Plot any two stats, role scores or your own indices, drag a box to
      shortlist or compare.

  * Compare
      Up to four players side by side with percentile lanes, pizza charts and
      role fit. Export as an image.

  * Shortlist and Shadow squad
      A first-team list and a prospects list per save, with statuses and notes.
      The Shadow squad places your shortlist into your tactic so you can see who
      would start where.

  * Leagues and Benchmarks
      League strength and data coverage, and how each role scores across every
      league.

  * Tactic & best XI
      Pick a formation and roles; the Lab picks your best XI and compares every
      slot with the median club in your league. Click a player on the pitch to
      choose who plays in that slot.

  * Club finder
      For when you want to move: every club ranked by how well its squad already
      fits your tactic and philosophy, with a preview of Home and DoF picks as
      that club.

  * Philosophy score
      Six principles (keep the ball, always available, move it to hurt, win it
      back, defend on the front foot, intensity) weighted for each role, plus a
      character test from personality. Nine play-style templates, from
      possession and positional play to low block, wing play, pressing and
      physical.

  * Player page and scouting report
      Assess any player in any role, see his progress across your imports, and
      download a one-page scouting report.

  * Progress tracking
      Import in January and again in May: earlier imports are kept, so every
      player page shows how his score moved, and your shortlist shows what each
      player scored when you added him.

  * Phones and backups
      Download a backup of a save, or a smaller phone file to load on your phone
      and compare players away from your computer.

SCREENSHOTS
-----------

Pictures of Home, DoF picks, a player page and the Shadow squad are in the
screenshots folder.

CAREER JOURNAL
--------------

The download also includes the Career Journal (journal.html): a season-by-season
notebook for your save, with your objectives, tactic builder, transfer plans and
ledger, depth charts, tactical notes, a season review, screenshots and a
one-page export of each season. It works on its own, with no export needed, on a
computer or a phone, and installs as its own app. Open it from the Lab's sidebar
or go straight to journal.html. The full guide is in JOURNAL.txt.

GET STARTED
-----------

  1. Open the Lab. Use the hosted link for this repository (see Hosting it
     yourself, below), or download the repository and open index.html in Chrome,
     Edge, Firefox or Safari.
  2. Add the view to FM. Copy views/My_Moneyball_View.fmf into Documents/Sports
     Interactive/Football Manager 20XX/views, then in Player Search open the
     view menu and choose Custom → Import View.
  3. Export. In Player Search, with the view selected and no filters, select
     every player (Ctrl+A / Cmd+A), press Ctrl+P / Cmd+P and save as a Web Page.
  4. Import. In the Lab choose Import season, pick the file and type the season
     as it appears in your save (written yyyy/yy, however far into the save you
     are).
  5. Set up. Pick your league and club, a starting tactic (create your own or
     pick one of eleven) and how you want to play. Home opens with your squad
     gaps and DoF picks.

The full walkthrough is in TUTORIAL.txt, and the Lab has its own Guide in the
sidebar.

THE VIEW AND FM DATA LAB
------------------------

The included player-search view is essentially the FM Data Lab view (around 99%
the same), with one or two columns added. FM Data Lab publish their views and
guides for free, and this project was inspired by their work: please visit them
and use their resources. Credit for the view's design belongs to them.

You can use your own view as long as it includes at least Name, Position, Club,
Division, Age and Mins. Missing columns just switch off the stats that need
them.

YOUR DATA
---------

  - Everything lives in your browser's storage on the device you use. Nothing is
    sent to a server, and there are no accounts or tracking.
  - Clearing your browser's site data, or using a private window, loses it.
    Download a backup from Settings now and then. Home reminds you after two
    weeks.
  - To use the Lab on another device, download a backup (or the smaller phone
    file) and load it there with Load a backup or phone file.
  - Your exports contain data from your FM save. Keep them for your own use.

INSTALL AS AN APP
-----------------

  - Chrome or Edge on a computer: click Install app in the sidebar, or the
    install icon in the address bar.
  - Android: browser menu → Install app or Add to Home screen.
  - iPhone or iPad: open the link in Safari → Share → Add to Home Screen.

Installed, it opens full-screen and works without a connection. Installing needs
the hosted (https) link; opening index.html from your disk works but can't be
installed or used offline.

HOSTING IT YOURSELF
-------------------

The Lab is a single page with no build step and no server code, so any static
host works. With GitHub Pages:

  1. Fork or upload this repository to GitHub.
  2. In the repository, open Settings → Pages, set Source to Deploy from a
     branch, pick main and / (root), and save.
  3. After a minute the Lab is live at
     https://<your-username>.github.io/<repository-name>/.

FILES
-----

  * index.html
      The whole app: markup, styles and script in one file.

  * manifest.json, sw.js, icons/
      What lets it install as an app and open offline. These are for the
      browser, not for reading. On Windows, don't double-click sw.js: Windows
      tries to run it as a script and shows an error. Right-click it and choose
      Open with → Notepad if you want to look inside.

  * views/My_Moneyball_View.fmf
      The FM player-search view (essentially FM Data Lab's).

  * journal.html, journal.json
      The Career Journal and its install file.

  * JOURNAL.txt
      The Career Journal guide.

  * README.txt
      This file.

  * TUTORIAL.txt
      A step-by-step tutorial.

  * screenshots/
      Pictures of the Lab.

  * LICENSE
      MIT licence.

GOOD TO KNOW
------------

  - Role names and the role list follow FM24's roles.
  - Exports of tens of thousands of players work, but take longer to import. A
    season of around 9,000 players takes about 5 MB of storage.
  - Role and philosophy scores describe what happened in the numbers, not why.
    Treat a high score as a reason to scout a player, not as a signing.

LICENCE
-------

MIT (see LICENSE). Use it, change it and share it, keeping the copyright notice.
The included view remains credited to FM Data Lab.

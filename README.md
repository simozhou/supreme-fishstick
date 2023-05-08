# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODO
- make popover disappear when out of viewport
- scrollable popover
- fix scaling and styling for programme and FAQ
- populate speakers (add popovers to all of them)
- populate programme
- populate faq
- populate sponsors
- make the register button redirect to the actual registration website
- add pronouns to speakers
- if you are on a small screen and switch between sponsors and FAQ, it currently looks weird, might be solved by adding something to the footer
- style the tracks section (maybe different font? I find it pretty hard to read currently. Alternatively the text could be shorter)

Cosmetic upgrades
- create a hover effect for the speakers to make the page feel more interactive (gradient circle swooping around the border could be cool)
- would be cool if we could indicate which speaker belongs to which track, e. g. by coloring the horizontal bar or something like that
- position popovers always at the bottom (seems like its not working on big screens)


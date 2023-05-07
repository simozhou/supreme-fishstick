# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODO
- make navbar collapse when a link is clicked. This can be done by adding `"data-bs-toggle="collapse" data-bs-target="#navbarNav"` to the `a` elements, but then it also collapses when clicked in the non-collapsed state. Probably requires some js magic
- improve the design for the programme section
- make programme hidden by default and fix the bug where it doesn't take up 100% of the screen after being collapsed
- for some speakers, the images require some work (outpainting?) to get it into a nice rectangular format (Laurent, Tung)
- add pop-ups (or something similar) when users click on a speaker to get more info
- populate speakers
- populate programme
- populate faq
- populate sponsors
- make the register button redirect to the actual registration website
- add pronouns to speakers
- if you are on a small screen and switch between sponsors and FAQ, it currently looks weird, might be solved by adding something to the footer
- style the tracks section (maybe different font? I find it pretty hard to read currently. Alternatively the text could be shorter)

Cosmetic upgrades
- check if the logo is still the correct one
- adjust the highlighted section in the navbar depending on where the user is
- create a hover effect for the speakers to make the page feel more interactive
- would be cool if we could indicate which speaker belongs to which track

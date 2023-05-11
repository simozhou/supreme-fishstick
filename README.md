# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODO
- Popover fix
    - make popover disappear when out of viewport
    - scrollable popover
    - optional: position popovers always at the bottom (seems like its not working on big screens)

- Scaling update
    - Fix section title on mobile (Programme is too big and every section title is bigger than the main!)
    - check how FAQ scales on mobile, may need to adjust font sizes
    - adjust --fs-track-header for mobile
    - check if the tracks still scale nicely for mobile
    - check if the navbar still adds too much padding when scrolling back up on mobile

- Styling update 1
    - add track information to speakers (e. g. by altering the hover color or including the track icon next to the name)

- Styling update 2
    - style programme

- Function update
    - make the register button redirect to the actual registration website

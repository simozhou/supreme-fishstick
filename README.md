# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODO
- Styling update 1
    - fix pixels in popup header corners (there seems to be one gray pixel which I find a bit annoying)
    - center register icon vertically (the font-awesome one has some space at the bottom)

- Scaling update
    - Fix section title on mobile (Programme is too big and every section title is bigger than the main!)
    - check how FAQ scales on mobile, may need to adjust font sizes
    - adjust --fs-track-header for mobile
    - check if the tracks still scale nicely for mobile
    - check if the navbar still adds too much padding when scrolling back up on mobile
    - check if speakers still scale well

- Function update
    - make the register button redirect to the actual registration website

- Styling update 2
    - make navbar scroll on click instead of teleport
    - style programme

# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODOs (among other things)
- make logo and navbar scale
- ensure that navbar doesn’t overlap with title
- fix scaling of buttons
- style the social media buttons, could be done with [font-awesome](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)

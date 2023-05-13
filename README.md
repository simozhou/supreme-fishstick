# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODO
- Scaling update
    - adjust icons to be centered with the header on phones and not with the entire track text
    - make programme scale

- Styling update
    - adjust speaker texts for Stehbens and Engel to make them more consistent with the rest
    - incorporate new icons in programme
    - change mail from participants to the general one

- Function update
    - make the register button redirect to the actual registration website
    - check scaling one last time
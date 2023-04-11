# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODOs
- [ ] Landing page (gradient, font, logo, navbar)
- [ ] Information about tracks (can probably just be static)
- [ ] Speakers section (speaker name, affiliation, more info on hover or click)
- [ ] Footer with contact information
- [ ] Programme section
- [ ] FAQ section
- [ ] Sponsor section

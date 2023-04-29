# PhD Symposium 2023

## Setup

If you just open the html file as a file in your browser, it will not work, because a page served over the `file://` protocol does not support cross origin requests (i. e. you can't load the content from a different html file). Hence you need to set up a local webserver to run the website.

**Important note:** if you want to develop this and the content on the website doesn't change, make sure to clear your browser's cache. On Safari, this can be done in the `Develop` menu.

- Install httpserver: `pip install httpserver`
-  Navigate to the correct folder
- Start the server: `python -m http.server`
- Visit localhost in your browser at: `localhost:8000`

## TODO
- make logo and navbar scale (ensure that navbar doesn’t overlap with title). This probably requires to do the navbar from scratch
- adjust the highlighted section in the navbar depending on where the user is
- make padding on the landing page scale (currently done with m4, probably needs to be adjusted)
- create a design for the programme section
- style the tracks section (maybe different font? I find it pretty hard to read currently)
- move the registration button, seems a bit off in the center as it is currently, especially on large screens
- make sure that the scaling of speakers works well on phones (maybe always have a minimum of two speakers per row, idk how though)
- style the social media buttons, could be done with [font-awesome](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)
- add correct links to social media buttons
- add pop-ups (or something similar) when users click on a speaker to get more info
- create a hover effect for the speakers to make the page feel more interactive
- would be cool if we could indicate which speaker belongs to which track (if we feel fancy we could for example cut out a speakers silhouette and put them in front of differently colored backgrounds, depending on the track. This would also allow for a sick hover effect where the silhouette grows and the background maybe gets blurry or something of the sort)
- populate speakers
- populate programme
- populate faq
- populate sponsors
- make the register button redirect to the actual registration website

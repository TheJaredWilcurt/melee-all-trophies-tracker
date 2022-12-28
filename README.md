# melee-all-trophies-tracker

Super Smash Bros. Melee - All Trophies Speedrun tracker

* https://TheJaredWilcurt.com/melee-all-trophies-tracker


* * *


## Big picture related projects

1. Website Tracker (this repo, in progress)
   * Display all trophies/bonuses with ID's so you can mark them as acquired as you go
   * Can share a session ID and secret code with others so they can help you keep track during a run in real time
1. [Backend API](https://github.com/TheJaredWilcurt/melee-all-trophies-backend) (documented, but not yet implemented)
   * Handles storing the session data and secret codes
   * Handles web socket to keep UI's up-to-date in realtime
1. Mini-Tracker (not started)
   * Would basically be a smaller representation of the tracker to put on screen in a stream (next to game play/webcam/chat/etc)
   * Summarize the Trohpy/Bonus tracker data in a visually pleasing manner
   * Animate some notifications as they occur, like trophies sliding into view
   * Potentially allow visual tweaks, like background/text colors to fit the aesthetic of a streamer's brand
1. Chatbot support (blocked until API finished)
   * Could just DM/whisper to people on Twitch or Discord that have specific roles (Mod, VIP, sub, etc) a link to the website with the session ID and secret
   * Could set values via API, but likely would only work with trophies that have a unique name
   * Would require this repo to support the "secret" param `site.com/50?secret=1234`, then set it locally and remove from URL
1. Image recognition (blocked until API finished)
   * Would work with any video capture/input (from console or emulator)
   * You would define a set of images for the tool to look for (these tools already exist, but I haven't looked into them)
   * If a match is found then it runs an action (network request to set the bonus/trophy
   * We'd want to diff against real data to prevent spamming the same network request 600 times to set the same bonus/trophy as acquired. Or at least keep track locally of what it has already set to acquired.
1. Memory Card reader (blocked by [decomp project](https://github.com/doldecomp/melee))
   * When stuff happens in game, it saves to a memory card. On an emulator, this is just a file on the computer
   * Detect when the file changes and read it's contents (easy)
   * Use some tool that converts the compressed save data to something human readable
     * Currently no tool exists for this. Will need to wait for the save contents to be documented first before a tool could be created.
   * Do a `GET` to the `/sessions/:id` endpoint to get the latest session data
   * Map the trophy/bonus data from the save to the ID's used by the tracker
   * Diff against the save data from the memory card
   * Make `PATCH` requests to automatically synchronize the game data with the server data so that the tracker/mini-tracker will be accurate

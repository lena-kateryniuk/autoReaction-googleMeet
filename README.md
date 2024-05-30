# reaction-googleMeet
Description:
This script automates clicks on reactions in Google Meet. It is executed in the browser console on a page with an open Google Meet session. The script includes two methods:
1. `startReacting(emoji, delay)` - Starts the process of automated clicks on the selected reaction button with a specified delay between clicks.
2. `stopReacting()` - Stops the process of automated clicks.

If the user manually closes the reaction panel during the script's operation, the `stopReacting()` method will automatically stop the clicks. In case of invalid arguments, the startReacting method will throw an error with an appropriate message.

Installation:
Open Google Meet in your browser.
Open the browser console.
Copy and paste the code from `script.js` file into the console and press Enter.

Example usage:
// for starts reaction 😮 every 2 seconds;
`autoReactions.startReacting('😮', 2000)`

// for stop reaction;
`autoReactions.stopReaction()`

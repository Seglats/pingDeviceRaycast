# Ping
A small extension to ping a device with the Find My Apple service for Apple devices. Works by running a shortcut that calls Siri and inputs "Ping my" followed by the user-specified device name (e.g., iPhone, Sophie's iPhone, Rasmus' iPhone).

This shortcut exists because neither Find My nor Siri has an external API. The Fn button cannot be sent via AppleScript or the Raycast API, which is why it's not supported as a keybind option.

Setup:
Select the keybind you want to use with Siri, then input it to Siri either normally or via 'cmd+r' to simulate the keybind (e.g., 'cmd+f13'). Select the delay to send the keystroke—default is 1 second but can be lowered on newer devices. May need to increase delay on Intel machines (untested).

Apple Intelligence appears to be required; otherwise, text input to Siri is unavailable.

Icons made by me.

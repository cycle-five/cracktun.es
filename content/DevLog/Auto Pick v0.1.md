# Obligatory Spam at start because this is free software and free money!!!
# Sign-up for faucets with my referral codes please!
### There are 8 in all, you'll remember this later when you're trying to figure out if you missed any.
https://bnbpick.io/?ref=lothrop
https://litepick.io/?ref=lothrop
https://dogepick.io/?ref=lothrop
https://polpick.io/?ref=lothrop
https://tonpick.game/?ref=lothrop
https://tronpick.io/?ref=lothrop
https://solpick.io/?ref=lothrop
https://suipick.io/?ref=lothrop
# Windows
0. Install Docker Desktop
	- https://docs.docker.com/desktop/setup/install/windows-install/
	- This can be done from either the windows store or a download.
	- N.B. Docker Desktop should be running when you try to use docker commands in the terminal or else they probably won't work.
1. Setup Authentication
	1. Create a file called `picks.env` (notice the non-standard extension, it matters).
	2. Populate this file with the snippet found at the end of this document and fill it in with your accounts.
2. Pick & Create Work Directory
	1. Pick a directory which will be your "work" directory for AutoPick, it can be anywhere you like, in this example I picked `AutoPick` in my home directory
	2. Open terminal
	3. Change directory to where your work directory will live, in my example that's my home so... (Remember `~` is an alias for home directory, this doesn't work is command prompt, but does in PowerShell and Windows Terminal) 
		- `cd ~`
3. Create directories for AutoPick to save data that we may need later in. These exist on your system, and are "mounted" into the docker container so AutoPick can write to them and we can examine them later if we wish.
	1. `mkdir AutoPick`
	2. `cd AutoPick`
	3. `mkdir screenshots`
	4. `mkdir picks_data`
4. Run the auto-pick:dev container as shown here, remember to replace the string REPLACE_ME_WITH_YOUR_USER_NAME, with your username. 
	1. `docker run -v ./screenshots:/app/screenshots -v ./picks_data:/app/picks_data --env-file=C:\\Users\REPLACE_ME_WITH_YOUR_USER_NAME\picks.env cyclefive/auto-pick:dev --headless --summarize`

## Philosophical Interlude

> ... truth is only in reality. That is in the present and past experiences of Consciousness,  but expected experiences and experiences attributed to others are true only as anticipations and hypothesis, in their contents there is no truth, there are no non-experienced truths.
-- L.E.J. Brouwer

# picks_env
Save this snippet as `picks.env`, to your home directory. and fill it out using Notepad or your favorite text editor (Vim).
```
TRONPICK_USERNAME=
TRONPICK_PASSWORD=

TONPICK_USERNAME=
TONPICK_PASSWORD=

POLPICK_USERNAME=
POLPICK_PASSWORD=

SOLPICK_USERNAME=
SOLPICK_PASSWORD=

DOGEPICK_USERNAME=
DOGEPICK_PASSWORD=

BNBPICK_USERNAME=
BNBPICK_PASSWORD=

SUIPICK_USERNAME=
SUIPICK_PASSWORD=

LITEPICK_USERNAME=
LITEPICK_PASSWORD=
```
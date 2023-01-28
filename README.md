# Purpose
* practice web development
* learn the position of letters in the alphabet

# How to play
Press start. The game will then show a letter and ask for the
number corresponding to it. 

```
Example: 
What number corresponds to:

The letter: "a" 
```

The player will then provide an answer in the input field
such as:

`1`

Then press enter or `f`.

## answer input
The player input is possible with the numbers on the keyboard
or with the simulated numberpad:
```
u, i, o
j, k, l
m, comma, period
space
```

# Configuration of the game
The .js file can be modified to determin the letter range that is asked from
the player. This is done throught the `randomLetterIndex()` function by editing
the `START_LETTER` and `END_LETTER` constants.

# Future development
Add configuration options on the web page.

Global variables are currently used to maintain the player score, the current
letter asked, the number of questions asked and the score.
Usage of either html elements insted or cookies are possible improvements.

An opposite game where a number between 1 and 26 is given and the player is
asked to provide the corresponding letter could also be added.

# Known issues
The start game button should allow to start a new game. This is currently not
working and the work arround is to refresh the page.

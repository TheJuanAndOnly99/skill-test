Technical Test

Apply TypeScript and testing to the technical test.

Work on the exercise incrementally and agilely. Use git and GitHub so that you can track the changes and new functionalities you add.

SCORE KEEPER
We need software to send the appropriate data to a basketball team's scoreboard. Unfortunately, the people using our software are not the brightest bulbs under the sun, so they need six buttons (each team can score 1, 2, or 3 points with a single shot).

⛹️‍♀️ Player

getName(): This function returns the name of the player.

🏀 Team

getPlayers(): This function returns the list of players that make up the team.

🧮 ScoreKeeper

scoreTeamA1(): This function scores 1 point for team A.

scoreTeamA2(): This function scores 2 points for team A.

scoreTeamA3(): This function scores 3 points for team A.

scoreTeamB1(): This function scores 1 point for team B.

scoreTeamB2(): This function scores 2 points for team B.

scoreTeamB3(): This function scores 3 points for team B.

getScore(): This function returns the current score in the format "000:000".

📐 Scoring Rules

It consists of seven characters.

The string format is "000:000", where the first three characters represent the score of team A and the last three characters represent the score of team B.

Each character in the string represents a decimal digit (0-9), and no spaces or special characters are used.

🏁 Game

getShot(): This function will be a promise where a random shot of x points will be made for one of the two teams. The shot will have a delay of 2 seconds.

play(): This function will start the game and call getShot 10 times. Once the game is finished, it will return the final score.
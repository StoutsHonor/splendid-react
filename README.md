## To Implement

General:
- Back End Server
- Multiplayer(socket.io)(Use async inside `checkPoints()` to call function for next player turn)

Optional Game Logic:
- Per Turn Countdown
- Let player choose noble when qualified for 2 or more(modal)

UX:
- Coin, card, and noble animations
- Chat(socket.io)
- Out-of-game components(see Additional Components)

UI:
- This we will focus LAST
- Basic color identification and some UI components so far
- Perhaps put all players' mini info on left/right hand side of page
- Card graphics
- Bootstrap clean-up

Additional Components:
- ScoreScreen(data visualization)
- Home(make it look nice)
- CreateGame(host)
- JoinGame(join)
- WaitingRoom
- Leaderboard
- Settings(adjust game settings)
- Login
- UserProfile(not set yet)

## Completed

- 12/04 exchange coins logic implemented
- 12/02 victory conditions and notification countdown fixed
- 12/01 notification modal implemented in place of alerts
- 11/29 player details modal implemented
- 11/28 singleplayer test run works, only player and action details modal left
- 11/25 noble logic completed(see blockers and bugs section)
- 11/25 all game logic done except: nobles, coin exchange, victory conditions
- 11/24 card and noble logic displays are done
- 11/23 coin logic display is done

## Blockers and Bugs

## Contribution Guidelines and Best Practices:

- PLEASE make sure the app renders/runs properly before pushing to master.  If you're hesitant or not sure, do a pull request instead.

- Put comments in code and update docs if you've written complicated logic

- We will style this web app mostly with `bootstrap`, `react-bootstrap` and `font-awesome`, if CSS is used, try to keep it organized and modular, and try to declare CSS elements inside the component you're trying to style.

- Let's make this s*** so we can play this game and bring back all the memories!!!

## Resources and Dependency Docs:

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

`bootstrap`:
(https://getbootstrap.com/docs/4.0/getting-started/introduction/).

`react-bootstrap`:
(https://react-bootstrap.github.io/).

`font-awesome`:
(http://fontawesome.io/).

`react-randomizer`:
(https://www.npmjs.com/package/react-randomizer).
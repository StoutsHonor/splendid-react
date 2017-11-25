## To Implement

Game Logic:
- Victory Conditions
- (Optional) let player choose noble when qualified for 2 or more(modal)
- (Optional) Coin Exchange, if player has close to 10 coins

UX:
- Modals to display player details, card details, and action details(right now it's an alert)
- Coin, card, and noble animations
- Chat
- Out-of-game components

UI:
- This we will focus LAST
- Basic color identification and some UI components so far
- Perhaps put all players' mini info on left/right hand side of page
- Card graphics
- Bootstrap clean-up

## Completed

- 11/25 noble logic completed(see blockers and bugs section)
- 11/25 all game logic done except: nobles, coin exchange, victory conditions
- 11/24 card and noble logic displays are done
- 11/23 coin logic display is done

## Blockers and Bugs

- points doesn't update simultaneously when card and noble points are involved on the same turn, currently, a setTimeout function is wrapped on the noble points call to fix this

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
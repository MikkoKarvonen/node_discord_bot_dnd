# node_discord_bot_dnd

A simple Discord bot for making events for our DnD group.

## Commands

`!event DATE ARGS`

**DATE** in _YYYY-MM-DDTHH:mm_ format

**ARGS** are placed after season and episode

`!event 2021-05-01T12 First blood!` returns

```
🎲 DnD S01E01: First blood! 🎲
🕒 1.5.2021 klo 12.00.00
```

`!setSeason ARG`

`!setEpisode ARG`

Sets season and episode. If **ARG** is not provided just bumps value up by one.

```
!setSeason
!setEpisode 4
!event 2021-05-01T12
```

returns

```
🎲 DnD S02E04 🎲
🕒 1.5.2021 klo 12.00.00
```

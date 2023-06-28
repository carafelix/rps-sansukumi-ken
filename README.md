# Sansukumi-ken
Simple rock paper scissors game

## General Plan; goals, input, expected result, rules, ideas.

The objective of this proyect is to allow the user to play a simple
Rock-Paper-Scissors game against the computer; first via text input-output form, and later with a GUI

Cpu choices must only be initialized after the user already selected a weapon of choice
so no cheating its allowed prior. Since the machine selects its own weapon on random, there is no problem on letting it select after
Draws should not count towards the scores but should be registered in the total rounds count.
Would do multiple iterations to get the flow of it

## Ideas 
- Make the user able to select if he wants to play a golden goal round, a best of 3 , a Fto5 or a Fto10.
- Implement random.org API using fetch() on cpuChoice, so it is truly random.
- Hestiation is defeat, maybe with a counter like when kids slap their fist into the other hand for count. setTimeout Function. 
- Maybe implement a Voice-Recognition Library to allow the user to shout like a kid to the computer hahaha.
- GUI visualitation of rounds/score record.

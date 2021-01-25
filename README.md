# poke-catcher

## objectives:

1) three new, unique pokemon appear on screen
1) for each pokemon seen, the _seen_ properties is incremented
1) when a pokemon is clicked, the _caught_ property is incremented and new pokemon are displayed
1) once ten pokemon are caught, the user is directed to a results page where they are shown how many of each type of pokemon are _seen_ and _caught_.

## plan
1) write a function to generate a random pokemon. 
1) write a function to render three unique pokemon to page
    - use while loop to check to make sure that they are unique
    - create three image elements and set _src_ to image property of pokemon object
    - append images to a div and return
1) write functions to get current stats, set current stats, increment seen and increment caught stats. 
1) increment turns each turn with global state variable 
1) create a results page that shows how many of each pokemon have been caught and seen  

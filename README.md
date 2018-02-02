## Backend
1. Duplicate `.env.example` to `.env` and fill it

1. Install packages 
>``composer install``

2. Generate key
>``php artisan key:generate ``

## Frontend

1. Install packages
>``yarn``

2. Compile it
>``yarn run prod``

### Structure
```
resources/assets
  |js
    |modules
      |Core
        |components
          ... <- reusable components
      |ModuleName
        |__tests__
          ... <- unit-tests
        |components
          ... <- module dumb-components
        ... <- actions, actionTypes, container, etc
      routes
      store
      app
      ...
    |utils
      ...
  |sass
    |components
      ... <- reusable mixins
    ... <- main sass
```

## The task

* List pokemons in a table view with their avatar, type and their attributes with customizable pagination
* Filter the pokemons with a search box
* A category tag that can filter out types of the pokemons

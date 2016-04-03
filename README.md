# Vue Pagination

Simple, generic and non-intrusive pagination component for Vue.js.
Presentation is based on bootstrap.

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)

# Dependencies

* Vue.js (>=1.0). Required.
* Bootstrap (CSS). Optional.

# Installation

## Option 1

Compile the code using `browserify` with the `stringify` transform

    npm install vue-pagination

Require the script:

    var VuePagination = require('vue-pagination');

## Option 2

Import the [compiled standalone file](https://raw.githubusercontent.com/matfish2/vue-pagination/master/dist/vue-pagination.min.js) into your HTML, which will expose a global `VueTables` variable.

# Usage

[LIVE DEMO](https://jsfiddle.net/matfish2/rnw8jjs3/)

## Register the component(s)

    Vue.use(VuePagination)

HTML:

    <pagination for="some-entity" :records="500"></pagination>

props:

* `for` `string` `required` unique identifier for the component instance.
* `records` `number` `required` number of records
* `per-page` `number` `optional` records per page. Default: 25
* `chunk` `number` `optional` max pages per chunk. Default: 10
* `count-text` `string` `optional` total records text. Default: '{count} records'

When a page is selected an event will be dispatched, using the unique id for the component.
Listen to it and respond accordingly:

      this.$on('vue-pagination::some-entity', function(page) {
          // display the relevant records using the page param
      });


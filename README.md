# Vue Pagination

Note: This package is for use with Vuejs 1.
For version 2 please use [vue-pagination-2](https://www.npmjs.com/package/vue-pagination-2) instead.

Simple, generic and non-intrusive pagination component for Vue.js.
Presentation is based on bootstrap.

- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Programmatic Manipulation](#programmatic-manipulation)
- [Computed Properties](#computed-properties)

# Dependencies

* Vue.js (>=1.0). Required.
* Bootstrap (CSS). Optional.

# Installation

## Option 1

Compile the code using `browserify` with the `stringify` transform

    npm install v-pagination

Require the script:

    var VuePagination = require('v-pagination');

## Option 2

Import the [compiled standalone file](https://raw.githubusercontent.com/matfish2/vue-pagination/master/dist/vue-pagination.min.js) into your HTML, which will expose a global `VuePagination` variable.

# Usage

[LIVE DEMO](https://jsfiddle.net/matfish2/rnw8jjs3/)

## Register the component

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

# Programmatic Manipulation

To programmatically set the page apply a `v-ref` identifier to the component and use one of the following methods:

* `setPage(page)`
* `next()`
* `prev()`
* `nextChunk()`
* `prevChunk()`

All methods return `true` if the page is legal and was thus set, or `false` otherwise.

# Computed Properties

* `totalPages`
* `totalChunks`
* `currentChunk`


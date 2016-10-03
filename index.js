exports.install = function(Vue) {

 Vue.component('pagination', {
  template: require('./src/template.html'),
  data: function() {
    return {
      page: 1
    }
  },
  props: {
    for: {
      type: String,
      required: true
    },
    records: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: false,
      default: 25
    },
    chunk: {
      type: Number,
      required: false,
      default: 10
    },
    countText: {
      type: String,
      required: false,
      default: '{count} records'
    }
  },
  computed: {
    pages: function() {

      if (!this.records)
        return [];

      return range(this.paginationStart, this.pagesInCurrentChunk);
    },
    totalPages: function() {
      return this.records?Math.ceil(this.records / this.perPage):1;
    },
    totalChunks: function() {
      return Math.ceil(this.totalPages / this.chunk);
    },
    currentChunk: function() {
      return Math.ceil(this.page / this.chunk);
    },
    paginationStart: function() {
     return ((this.currentChunk-1) * this.chunk) + 1;
   },
   count: function() {
    return this.countText.replace('{count}', this.records);
  },
  pagesInCurrentChunk: function() {
    return this.paginationStart + this.chunk <= this.totalPages?
                         this.chunk:
                         this.totalPages - this.paginationStart + 1;
  }
},
methods: {
  setPage: function(page) {
    if (this.allowedPage(page)) {
      this.page = page;
      this.$dispatch('vue-pagination::' + this.for, page);
      return true;
    }

    return false;
  },
  next: function() {
    return this.setPage(this.page + 1);
  },
  prev: function() {
    return this.setPage(this.page -1);
  },
  nextChunk: function() {
    return this.setChunk(1);
  },
  prevChunk: function() {
    return this.setChunk(-1);
  },
  setChunk: function(direction) {
    this.setPage((((this.currentChunk -1) + direction) * this.chunk) + 1);
  },
  allowedPage: function(page) {
    return page>=1 && page<=this.totalPages;
  },
  allowedChunk: function(direction) {
    return (direction==1 && this.currentChunk<this.totalChunks)
    ||  (direction==-1 && this.currentChunk>1);
  },
  isActive: function(page) {
    return this.page==page;
  }
}
});

}

function range(start, count) {
  return Array.apply(0, Array(count))
  .map(function (element, index) {
   return index + start;
 });
}


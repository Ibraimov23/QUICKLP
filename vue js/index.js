new Vue({
  el: '#app',
  data: {
        searchQuery: null,
        filterParam: 'all',
        searchParam: 'search',
        sortParam: 'desc',
        sss: [0,1,2],
        resources:[
            {title:"ABE Attendance",uri:"aaaa.com",category:"a",number: 1},
            {title:"Accounting Services",uri:"aaaa.com",category:"a",number: 5},
            {title:"Administration",uri:"aaaa.com",category:"a",number: 8},
            {title:"Advanced Student Lookup",uri:"bbbb.com",category:"b",number: 3},
            {title:"Art & Sciences",uri:"bbbb.com",category:"b",number: 6},
            {title:"Auxiliares Services",uri:"bbbb.com",category:"b",number: 2},
            {title:"Basic Skills",uri:"cccc.com",category:"c",number: 1},
            {title:"Board of Trustees",uri:"dddd.com",category:"b",number: 4}
        ],
        resourcesIntial: null,
        arr: null,
         sortby: 'number',
         sortDirection: 'ALL',
        sortBy: [],
        sortDesc: []
  },
  methods: {
    resortCafes( by ){
  if( by == this.sortby ){
    if(this.sortDirection == 'ALL'){
      this.sortDirection = 'ASC'
    }else if(this.sortDirection == 'ASC' ){
      this.sortDirection = 'DESC';
    }else{
      this.sortDirection = 'ALL';
    }
  }

  switch(this.sortby ){
    case 'number':
      this.sortCompaniesByCafes();
    break;
  }
},
    sortCompaniesByCafes(){
      this.arr = this.resources.slice();
    if(this.sortDirection == 'ALL') {
      return this.resources;
    }
    if(this.sortDirection == 'DESC') {
       this.arr.sort((a, b) => a.number - b.number);
       return this.arr
    }
    if(this.sortDirection == 'ASC') {
       this.arr.sort((a, b) => b.number - a.number);
       return this.arr
    }

  /*this.arr.sort( function( a, b ){
    if( this.sortDirection == 'ASC' ){
       parseInt( a.number ) < parseInt( b.number ) ? 1 : -1;
       this.resources = this.arr;
       return this.resources
    }

    if( this.sortDirection == 'DESC' ){
      parseInt( a.number ) > parseInt( b.number ) ? 1 : -1;
      this.resources = this.arr;
      return this.resources
    }
  }.bind(this));*/
},
  /* showCheckout() {
      if(this.sortParam == "asc") {
           this.sortParam = "all";
           return this.resources.sort((a, b) => a.number - b.number);
      }
      else if (this.sortParam == "desc") {
           this.sortParam = "asc";
           return this.resources.sort((a, b) => b.number - a.number);
      }
      else if(this.sortParam == "all") {
           this.sortParam = "desc";
           return this.resources;
      }
  }*/
   customSort(items, index, isDesc) {
      this.resources.sort((a, b) => {
        if (isDesc != "false") {
          return a.number - b.number
        } else {
          return b.number - a.number
        }
      })
      return this.resources
    }
},
  computed: {
    all() {
      if(this.sortDirection == 'ALL') {
      this.resourcesIntial = this.resources;
    }
    else {
      this.resourcesIntial = this.arr;
    }
      return this.resourcesIntial
    },
    filter_a() {
        this.resourcesIntial = this.resources.filter(s => s.category.toLowerCase() === "a");
        return this.resourcesIntial
   },
   filter_b() {
        this.resourcesIntial = this.resources.filter(s => s.category.toLowerCase() === "b");
        return this.resourcesIntial
   },
   resultQuery(){
      if(this.searchQuery){
       return this.resourcesIntial.filter((item)=>{
       return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }
      else {
        return this[this.filterParam]
      }
    }
  }
 })
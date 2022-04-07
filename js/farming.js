
new Vue({
  el: '.farming',
  data: {
        searchQuery: null,
        filterParam: 'all',
        resourcesIntial: null,
        arr: null,
        sortby: 'number',
        sortDirection: 'ALL',
        platformActive: 'platforms',
        vaultActive: 'vaults',
        array: null,
        resources:[
            {name:"PRIZM-USDC",type:"Raydium",tvl:"TVL: $96.86M / 1LP =$15.321",
            balance_coin:"0.000000000",balance_usd:"$0.00",deposit_coin:"0.000000000",deposit_usd:"$0.00",
            apy_day:"0.16%",apy_week:"1.12%",apy_year:"78.30%",date: new Date(),closed: false},
            {name:"PRIZM-USDC",type:"Raydium",tvl:"TVL: $96.86M / 1LP =$15.321",
            balance_coin:"0.000000000",balance_usd:"$0.00",deposit_coin:"0.000000000",deposit_usd:"$0.00",
            apy_day:"0.16%",apy_week:"1.12%",apy_year:"78.30%",date: new Date(),closed: false},
            {name:"PRIZM-USDC",type:"Raydium",tvl:"TVL: $96.86M / 1LP =$15.321",
            balance_coin:"0.000000000",balance_usd:"$0.00",deposit_coin:"0.000000000",deposit_usd:"$0.00",
            apy_day:"0.16%",apy_week:"1.12%",apy_year:"78.30%",date: new Date(),closed: false},
            {name:"PRIZM-USDC",type:"Raydium",tvl:"TVL: $96.86M / 1LP =$15.321",
            balance_coin:"0.000000000",balance_usd:"$0.00",deposit_coin:"0.000000000",deposit_usd:"$0.00",
            apy_day:"0.16%",apy_week:"1.12%",apy_year:"78.30%",date: new Date(),closed: false},
            {name:"Solana-USDC",type:"Solana",tvl:"TVL: $96.86M / 1LP =$15.321",
            balance_coin:"0.000000000",balance_usd:"$0.00",deposit_coin:"0.000000000",deposit_usd:"$0.00",
            apy_day:"0.16%",apy_week:"1.12%",apy_year:"78.30%",date: new Date(),closed: false}
        ]
  },
    methods: {
     filter_platform(param) {
        this.platformActive = param
        if(param == 'platforms') {
           this.array = this.resources;
           return this.array;
        }
        else {
        this.array = this.resources.filter(s => s.type.toLowerCase() === param);
        return this.array;
      }
   },
   filter_vault(param) {
        this.vaultActive = param
        if(param == 'vaults') {
           return this.array
        }
        else {
        const now = new Date();
        this.array = this.array.filter(s => s.date.toDateString() == now.toDateString());
        return this.array;
      }
   },
    sort( by ){
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
      this.set_filter();
    break;
  }
},
    set_filter(){
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
}
},
  computed: {
   result(){
      this.array = this.array == null ? this.resources : this.array
      if(this.searchQuery){
       return this.array.filter((item)=>{
       return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
      })
      }
      else {
        return this.array
      }
  },
  items() {
      let path = 'img/farming/';
     return path + 'para.svg'
  }
 }
})
export interface CryptoModel {
    id : number;
    name : String;
    symbol : String;
    slug : String;
    cmc_rank: number;
    num_market_pairs : number;
    circulating_supply : number;
    total_supply : number;
    max_supply : number;
    last_updated : Date;
    date_added : Date;
    tags : String[];
    quote : any;
}
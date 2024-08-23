class frankfurter{
    constructor(){
        this.api = "https://api.frankfurter.app"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async currencies_list(){
        let req=await fetch(`${this.api}/currencies`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async latest_exchange(){
        let req=await fetch(`${this.api}/latest`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {frankfurter};
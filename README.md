# frankfurter
JavaScript library for frankfurter.app
# main
```js
async function main(){
    const {frankfurter} = require('./frankfurter');
    const frank= new frankfurter();
    let req=await frank.latest_exchange()
    console.log(req)
}
main()
```

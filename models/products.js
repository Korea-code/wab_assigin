
const product = {

    fakeDB: [],

    init(){
        this.fakeDB.push({
            title: "Ipad Pro 3rd gen",
            price: "999.99",
            desc: "awfeuih iufewh fiewhiuefh weiuhfeiwuhfiwa ieawufhiuehifh afeiuhieuhh efiweiufh ewuhfie waefih.",
        });
        this.fakeDB.push({
            title: "Ipad Pro 2rd gen",
            price: "799.99",
            desc: "awfeuih iufewh fiewhiuefh weiuhfeiwuhfiwa ieawufhiuehifh afeiuhieuhh efiweiufh ewuhfie waefih.",
        });
        this.fakeDB.push({
            title: "Ipad Pro 1rd gen",
            price: "599.99",
            desc: "awfeuih iufewh fiewhiuefh weiuhfeiwuhfiwa ieawufhiuehifh afeiuhieuhh efiweiufh ewuhfie waefih.",
        });
        return this.fakeDB;
    },

   
}

module.exports=product; //product 를 export한다. 
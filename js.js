const initialMobilePriceNum = getNum("mobile-price");
const initialCasePriceNum = getNum("case-price");
var subtotalNum = getNum("subtotalId");
var totalNum = getNum("totalId");


console.log("subtotal num ", subtotalNum)
const mobileAdd = document.getElementById("mobile-plus-btn");
mobileAdd.addEventListener("click", function() {
    PlusOrMinus("mobile-quantity", 1);
    multiplyOrDiv("mobile-price", initialMobilePriceNum);

})
const mobileMinus = document.getElementById("mobile-minus-btn");
mobileMinus.addEventListener("click", function() {
    PlusOrMinus("mobile-quantity", -1);
    multiplyOrDiv("mobile-price", -1 * initialMobilePriceNum);
})
const caseAdd = document.getElementById("case-plus-btn");
caseAdd.addEventListener("click", function() {
    PlusOrMinus("case-quantity", 1);
    multiplyOrDiv("case-price", initialCasePriceNum);
})
const CaseMinus = document.getElementById("case-minus-btn");
CaseMinus.addEventListener("click", function() {
    PlusOrMinus("case-quantity", -1);
    multiplyOrDiv("case-price", -1 * initialCasePriceNum);
})

function PlusOrMinus(id, n) {
    var Quantity = document.getElementById(id).value;
    var QuantityNum = parseFloat(Quantity);
    var total = QuantityNum + n;
    console.log(QuantityNum, n)
    document.getElementById(id).value = total;
}

function multiplyOrDiv(id, n) {
    var Price = document.getElementById(id).innerText;
    var PriceNum = parseFloat(Price);
    var total = PriceNum + n;
    console.log(subtotalNum, n);
    subtotalNum = subtotalNum + n;
    document.getElementById("subtotalId").innerText = subtotalNum;
    document.getElementById("totalId").innerText = subtotalNum;
    document.getElementById(id).innerText = total;
}

function getNum(id) {

    var idName = document.getElementById(id).innerText;
    return parseFloat(idName);


}
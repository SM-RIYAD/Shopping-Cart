const initialMobilePriceNum = getNum("mobile-price");
const initialCasePriceNum = getNum("case-price");
var subtotalNum = getNum("subtotalId");
var totalNum = getNum("totalId");



const mobileAdd = document.getElementById("mobile-plus-btn");
mobileAdd.addEventListener("click", function() {
    mobileQuantityNum = getNumValue("mobile-quantity");

    mobilePriceNum = getNum("mobile-price");
    PlusOrMinus("mobile-quantity", mobileQuantityNum, 1);
    multiplyOrDiv("mobile-price", mobilePriceNum, initialMobilePriceNum);

})
const mobileMinus = document.getElementById("mobile-minus-btn");
mobileMinus.addEventListener("click", function() {

    mobileQuantityNum = getNumValue("mobile-quantity");
    mobilePriceNum = getNum("mobile-price");
    if (mobileQuantityNum > 0) {
        PlusOrMinus("mobile-quantity", mobileQuantityNum, -1);

        multiplyOrDiv("mobile-price", mobilePriceNum, -1 * initialMobilePriceNum);
    }



})
const caseAdd = document.getElementById("case-plus-btn");
caseAdd.addEventListener("click", function() {



    caseQuantityNum = getNumValue("case-quantity");
    casePriceNum = getNum("case-price");
    PlusOrMinus("case-quantity", caseQuantityNum, 1);
    multiplyOrDiv("case-price", casePriceNum, initialCasePriceNum);

})
const CaseMinus = document.getElementById("case-minus-btn");
CaseMinus.addEventListener("click", function() {

    caseQuantityNum = getNumValue("case-quantity");
    casePriceNum = getNum("case-price");
    if (caseQuantityNum > 0) {

        PlusOrMinus("case-quantity", caseQuantityNum, -1);

        multiplyOrDiv("case-price", casePriceNum, -1 * initialCasePriceNum);
    }

})

function PlusOrMinus(id, x, n) {



    var total = x + n;

    document.getElementById(id).value = total;


}

function multiplyOrDiv(id, y, n) {

    var PriceNum = y;

    var total = PriceNum + n;

    subtotalNum = subtotalNum + n;
    document.getElementById("subtotalId").innerText = subtotalNum;
    document.getElementById("totalId").innerText = subtotalNum;

    document.getElementById(id).innerText = total;



}

function getNum(id) {

    var idName = document.getElementById(id).innerText;
    return parseFloat(idName);


}

function getNumValue(id) {

    var idName = document.getElementById(id).value;
    return parseFloat(idName);


}
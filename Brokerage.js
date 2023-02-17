function calculateDeliveryBrokerage() {
    let buyPrice = document.getElementById("delivery_buyP").value;
    let sellPrice = document.getElementById("delivery_sellP").value;
    let quantity = document.getElementById("delivery_quantity").value;
    if (buyPrice == "" || sellPrice == "" || quantity == "") {
        document.getElementById("deliveryBrokerage").disabled = true;
    }
    else {
        let netInvestment = buyPrice * quantity;
        let netSellingPrice = sellPrice * quantity;
        let brokerage = 20;
        let stt = 0.0001 * netInvestment;
        let exchangeTxn = 0.00025 * netInvestment;
        let gst = 0.0025 * netInvestment;
        let stampDuty = 0.0025 * brokerage;
        let totalTax = brokerage + stt + exchangeTxn + gst + stampDuty;
        let netPL = netSellingPrice - (netInvestment + totalTax);
        //Dom Manipulation
        document.getElementById("netInvest").innerHTML = netInvestment;
        document.getElementById("brokerage").innerHTML = brokerage;
        document.getElementById("stt").innerHTML = stt;
        document.getElementById("exchangeTxn").innerHTML = exchangeTxn;
        document.getElementById("gst").innerHTML = gst;
        document.getElementById("stampDuty").innerHTML = stampDuty;
        document.getElementById("totalTax").innerHTML = totalTax;
        if (netPL < 0) {
            document.getElementById("netPL").innerHTML = netPL;
            document.getElementById("netPL").style.color = "red";
        }
        else {
            document.getElementById("netPL").style.color = "green";
            document.getElementById("netPL").innerHTML = netPL;
        }
    }
}

function enableButtonD() {
    document.getElementById("deliveryBrokerage").disabled = false;
}
function enableButtonI() {
    document.getElementById("intradayBrokerage").disabled = false;
}

function calculateIntradayBrokerage() {
    let buyPriceIntra = document.getElementById("intraday_buyP").value;
    let sellPriceIntra = document.getElementById("intraday_sellP").value;
    let quantityIntra = document.getElementById("intraday_quantity").value;
    if (buyPriceIntra == "" || sellPriceIntra == "" || quantityIntra == "") {
        document.getElementById("intradayBrokerage").disabled = true;
    }
    else {
        let netInvestmentIntra = buyPriceIntra * quantityIntra;
        let netSellingPriceIntra = sellPriceIntra * quantityIntra;
        let brokerageIntra = 40;
        let sttIntra = 0.0001 * netInvestmentIntra;
        let exchangeTxnIntra = 0.00025 * netInvestmentIntra;
        let gstIntra = 0.0025 * netInvestmentIntra;
        let stampDutyIntra = 0.0025 * brokerageIntra;
        let totalTaxIntra = brokerageIntra + sttIntra + exchangeTxnIntra + gstIntra + stampDutyIntra;
        let netPLIntra = netSellingPriceIntra - (netInvestmentIntra + totalTaxIntra);
        //Dom Manipulation
        document.getElementById("netInvestIntra").innerHTML = netInvestmentIntra;
        document.getElementById("brokerageIntra").innerHTML = brokerageIntra;
        document.getElementById("sttIntra").innerHTML = sttIntra;
        document.getElementById("exchangeTxnIntra").innerHTML = exchangeTxnIntra;
        document.getElementById("gstIntra").innerHTML = gstIntra;
        document.getElementById("stampDutyIntra").innerHTML = stampDutyIntra;
        document.getElementById("totalTaxIntra").innerHTML = totalTaxIntra;
        if (netPLIntra < 0) {
            document.getElementById("netPLIntra").innerHTML = netPLIntra;
            document.getElementById("netPLIntra").style.color = "red";
        }
        else {
            document.getElementById("netPLIntra").style.color = "green";
            document.getElementById("netPLIntra").innerHTML = netPLIntra;
        }
    }
}
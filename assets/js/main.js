$(function () {
    var ws = new WebSocket("wss://api2.bitfinex.com:3000/ws");
    ws.onopen = function () {
        ws.send(JSON.stringify({"event": "subscribe", "channel": "ticker", "pair": "BTCUSD"}))
    };
    ws.onmessage = function (msg) {
        var response = JSON.parse(msg.data);
        var hb = response[1];
        if (hb != "hb") {

            // todo need to get more details
            var price = "$" + response[7];
            var html = "<h1>Current BitCoin Price is " + price;

            $('.main-content').html(html);
        }
    };
});

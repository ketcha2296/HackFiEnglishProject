$(function () {
    $(".console").hide();

    let signal = '';
});


function connectDevice() {
    $(".btn-connect-device").hide();
    let div = $('#connecting-device');
    div.append("<p>Connecting to device...</p>");
    setTimeout(() => { div.append("<p>Connecting to device...</p>"); }, 2000);
    setTimeout(() => { div.append("<p>Connecting to device...</p>"); }, 4000);
    setTimeout(() => { div.append("<p>Device conected!</p>"); }, 6000);
    setTimeout(() => { window.location.href = "#About"; }, 8000);

    setTimeout(() => {
        div.empty();
        $(".btn-connect-device").show();
    }, 8001);
}


function cellphoneSignal() {
    signal = 'cellphone';
    $(".console").show();
    window.location.href = "#Portfolio";
    $(".btn-cellphone").prop('disabled', true);
    $(".btn-wifi").prop('disabled', true);
    $(".btn-both").prop('disabled', true);

    let div = $('.block-log');
    div.append("<p>Blocking cellphone signal...</p>");
    setTimeout(() => { div.append("<p>Blocking cellphone signal...</p>"); }, 2000);
    setTimeout(() => { div.append("<p>Blocking cellphone signal...</p>"); }, 4000);
    setTimeout(() => { div.append("<h5>Cellphone signal successfully blocked!</h5>"); }, 6000);
    setTimeout(() => { div.append("<p>For restoring the cellphone signal, click in the button \"Restore signal\"</p>"); }, 8000);

    setTimeout(() => { $('.btn-restore-signal').prop('disabled', false); }, 8001);
}

function wifiSignal() {
    signal = 'wifi';
    $(".console").show();
    window.location.href = "#Portfolio";
    $(".btn-wifi").prop('disabled', true);
    $(".btn-cellphone").prop('disabled', true);
    $(".btn-both").prop('disabled', true);

    let div = $('.block-log');
    div.append("<p>Blocking wifi signal...</p>");
    setTimeout(() => { div.append("<p>Blocking wifi signal...</p>"); }, 2000);
    setTimeout(() => { div.append("<p>Blocking wifi signal...</p>"); }, 4000);
    setTimeout(() => { div.append("<p>Blocking wifi signal...</p>"); }, 6000);
    setTimeout(() => { div.append("<h5>Wifi signal successfully blocked!</h5>"); }, 8000);
    setTimeout(() => { div.append("<p>For restoring the wifi signal, click in the button \"Restore signal\"</p>"); }, 10000);

    setTimeout(() => { $('.btn-restore-signal').prop('disabled', false); }, 10001);
}

function bothSignal() {
    signal = 'cellphone and wifi';
    $(".console").show();
    window.location.href = "#Portfolio";
    $(".btn-wifi").prop('disabled', true);
    $(".btn-cellphone").prop('disabled', true);
    $(".btn-both").prop('disabled', true);

    let div = $('.block-log');
    div.append("<p>Blocking cellphone and wifi signal...</p>");
    setTimeout(() => { div.append("<p>Blocking cellphone and wifi  signal...</p>"); }, 2000);
    setTimeout(() => { div.append("<p>Blocking cellphone and wifi signal...</p>"); }, 4000);
    setTimeout(() => { div.append("<p>Blocking cellphone and wifi signal...</p>"); }, 6000);
    setTimeout(() => { div.append("<p>Blocking cellphone and wifi signal...</p>"); }, 7000);
    setTimeout(() => { div.append("<p>Blocking cellphone and wifi signal...</p>"); }, 8000);
    setTimeout(() => { div.append("<h5>Cellphone and wifi signal successfully blocked!</h5>"); }, 10000);
    setTimeout(() => { div.append("<p>For restoring the cellphone and wifi signal, click in the button \"Restore signal\"</p>"); }, 12000);

    setTimeout(() => { $('.btn-restore-signal').prop('disabled', false); }, 12001);
}


function restoreSignal() {
    $(".block-log").empty();

    let div = $('.block-log');
    div.append("<p>Restoring " + signal + " signal...</p>");
    setTimeout(() => { div.append("<p>Restoring " + signal + "  signal...</p>"); }, 2000);
    setTimeout(() => { div.append("<p>Restoring " + signal + " signal...</p>"); }, 4000);

    setTimeout(() => { $('#staticBackdrop').modal('toggle'); }, 6000);
}

function dismissModal() {
    $(".block-log").empty();
    $(".btn-cellphone").prop('disabled', false);
    $(".btn-wifi").prop('disabled', false);
    $(".btn-both").prop('disabled', false);
    $(".console").hide();
    window.location.href = "#About";
}

let close = document.getElementById('close')

function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(doScan);

let scanBtn = document.getElementById('gallery')

scanBtn.addEventListener('click', toggleScan)
// close.addEventListener('click', goHome)

let isScan = true

function toggleScan() {
    let start = document.querySelector('span:nth-child(2)>button:nth-child(1)')
    let stop = document.querySelector('span:nth-child(2)>button:nth-child(2)')
    console.log('start:', start)
    console.log('stop:', stop)
    if (isScan) {
        stop.click()
        isScan = false
    } else {
        start.click()
        isScan = true
    }
    console.log('stopping')
    html5QrCode.stop()
}

function goHome() {
    window.location.href = '/index.html'
}

function formateQr(str) {
    let str1 = str.split('pn=')[1].split('&')[0].replaceAll('%20', ' ')
    let str2 = str.split('pa=')[1].split('&')[0].replaceAll('%20', ' ')
    return [str1, str2]
}

function doScan() {
    var qrScaner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 500 });
    let inputData = {}
    function onScanSuccess(decodedText, decodedResult) {
        let formateData = formateQr('\n' + decodedText)
        inputData.merch = formateData[0]
        inputData.name = formateData[1]
        localStorage.setItem('data', JSON.stringify(inputData))
        qrScaner.clear()
        window.location.href = '/index.html'
    }
    function onScanError(err) {
    }
    qrScaner.render(onScanSuccess, onScanError);
}

window.onload = ()=>{
    let camaccess = get('#qr-reader__camera_permission_button')
    
    if(camaccess){
        camaccess.click()
    }
}


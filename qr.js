
function docReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(doScan);
let closeBtn = document.getElementById('close')
let scanBtn = document.getElementById("gallery");
scanBtn.addEventListener("click", toggleScan);
closeBtn.addEventListener('click', closeqrr)


function toggleScan() {
    let start = document.querySelector("span:nth-child(2)>button:nth-child(1)");
    let stopqr = document.querySelector("span:nth-child(2)>button:nth-child(2)");
    stopqr.click();

    let select = document.getElementById('qr-reader__camera_selection')
    let cams = document.querySelectorAll('option')
    let cam2 = cams[1]

    if (cams.length === 3) {
        cam2 = cams[2]
    } else {
        cam2 = cams[1]
    }

    cam2.setAttribute('selected', '')
    select.value = cam2.value

    if (start) {
        start.click()
    }
}

function closeqrr() {
    let stopqr = document.querySelector("span:nth-child(2)>button:nth-child(2)");
    stopqr.click()
}

function formateQr(str) {
    let str1 = str.split("pn=")[1].split("&")[0].replaceAll("%20", " ");
    let str2 = str.split("pa=")[1].split("&")[0].replaceAll("%20", " ");
    return [str1, str2];
}

function doScan() {
    var qrScaner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 500 });
    let inputData = {};
    function onScanSuccess(decodedText, decodedResult) {
        let closeqr = document.querySelector("#close>a");
        let formateData = formateQr("\n" + decodedText);
        inputData.merch = formateData[0];
        inputData.name = formateData[1];
        inputData.scandata = decodedText
        localStorage.setItem("data", JSON.stringify(inputData));
        console.log('decodedText:', decodedText)
        qrScaner.clear();
        closeqr.click()
    }
    function onScanError(err) { }
    qrScaner.render(onScanSuccess, onScanError);
}

window.onload = () => {
    let camaccess = document.querySelector("#qr-reader__camera_permission_button");
    if (camaccess) {
        camaccess.click()
    }
    setTimeout(() => { scanBtn.style.opacity = '1' }, 2000)
    setTimeout(() => {
        let stopqr = document.querySelector("span:nth-child(2)>button:nth-child(2)");
        let startqr = document.querySelector("span:nth-child(2)>button:nth-child(1)");
        let select = document.getElementById('qr-reader__camera_selection')
        let cams = document.querySelectorAll('option')
        let cam2 = cams[1]
        if (cams.length === 3) {
            cam2 = cams[2]
        } else {
            cam2 = cams[1]
        }
        if (select && cam2) {
            select.value = cam2.value
            cam2.setAttribute('selected', '')
        }
        if (stopqr) {
            setTimeout(() => {
                stopqr.click()
            }, 1000)

            setTimeout(() => {
                if (startqr) {
                    startqr.click()
                }
            }, 1020)
        }
    }, 1000)

}



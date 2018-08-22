
// var user = 'office',
// domain = 'binarygeometry.co.uk',
// element = document.getElementById('email');
// element.innerHTML = user + '@' + domain;

function generateQRCode(){
	this.qrImage.style.display ='none';
	this.qrImage.src="https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=150x150&chl="
	+encodeURIComponent(QRCode.value.trim());
	this.qrImage.style.display ='inline';
}

function robot(iAm){
    this.position = [0,0,0];
    this.whatAmI = function(){
        alert('I am ' + this.iAm);
        alert('I am ' + th);
    };
    return {
    	whatAmI : this.whatAmI
    }
}


// var ami = new robot('ami');
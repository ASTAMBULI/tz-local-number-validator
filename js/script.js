var telNetworks=[
		{id:1,networkName:"Tigo",regEx:/255[7]{1}[1]{1}[2-9]{1}[0-9]{6}/ , img:'tigo.png'},
		{id:2,networkName:"Tigo",regEx:/255[6]{1}[57]{1}[2-9]{1}[0-9]{6}/,img:'tigo.png'},
		{id:3,networkName:"Vodacom",regEx:/255[7]{1}[5-6]{1}[2-9]{1}[0-9]{6}/,img:'vodacom.jpg'},
		{id:4,networkName:"TTCL Mobile",regEx:/255[7]{1}[3]{1}[2-9]{1}[0-9]{6}/,img:'ttcl.png'},
		{id:5,networkName:"Airtel",regEx:/255[6-7]{1}[8]{1}[2-9]{1}[0-9]{6}/,img:'airtel.png'},
		{id:6,networkName:"Zantel",regEx:/255[7]{1}[7]{1}[2-9]{1}[0-9]{6}/,img:'zantel.jpg'},
		{id:7,networkName:"Smart",regEx:/255[7]{1}[9]{1}[2-9]{1}[0-9]{6}/,img:'smart.png'},
		{id:8,networkName:"Smile",regEx:/255[6]{1}[6]{1}[2-9]{1}[0-9]{6}/,img:'smile.jpg'},
		{id:9,networkName:"Halotel",regEx:/255[6]{1}[2]{1}[2-9]{1}[0-9]{6}/,img:'halotel.png'},
		{id:10,networkName:"Sasatel",regEx:/255[6]{1}[1]{1}[2-9]{1}[0-9]{6}/,img:'sasatel.jpg'}
];

var imagePath="images/";

function mobileNumberCheck(phoneNo){
	phoneNo=phoneNo.replace(/ /g,'');
	phoneNo=phoneNo.replace(/^0+/, '255');
	if (phoneNo.length!=12) {
		return "invalid.png";
	}
	for (var i = 0; i < telNetworks.length; i++) {
		if(phoneNo.match(telNetworks[i].regEx)) {
    return telNetworks[i].img;
  }
	}

	return "invalid.png";
}

function test() {
	var num=document.getElementById('mob-number').value;
	var network=mobileNumberCheck(num);
	document.getElementById("net-img").setAttribute("class",".animate-image")
	document.getElementById("net-img").setAttribute("src",imagePath+network);
}


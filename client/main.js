Session.setDefault("currentPage", "frontPage");


var stupidResponse = function() {
	return "I beg your pardon?";
};

Template.body.onCreated(function() {
});

Template.body.onRendered(function() {
});

Template.body.helpers({
	checkCurrentPage: function(page) {
		return Session.equals("currentPage", page);
	}
})

Template.mainSection.helpers({
	getData: function() {
		return "Here's your data!";
	},
	stringCombine: function(str1, str2) {
		return str1+" "+str2;
	}, 
	multipler: function(num1, num2) {
		let product = parseInt(num1) * parseInt(num2);		//parseInt字串轉數字
		return product;
	},
});

Template.formSection.helpers({

});

Template.formSection.events({
	"click #submitMsg": function(event) {		//#代表id
		event.preventDefault();		//防止網頁再重新讀取
		let myMsgObj = document.getElementById("myMsg");
		let myMsg = myMsgObj.value;
		let conBoxObj = document.getElementById("conversationBox");
		let oldConversation = conBoxObj.value;
		let newConversation = oldConversation+"\n"+"You: "+myMsg;
		let ELIZAResponse = stupidResponse();
		newConversation = newConversation+"\n"+"ELIZA: "+ELIZAResponse;
		conBoxObj.value = newConversation;
		myMsgObj.value = "";
	},
	"click #resetMsg": function() {		//.代表class
		let conBoxObj = document.getElementById("conversationBox");
		conBoxObj.value = "ELIZA: How are you doing?";
	}	
});

Template.frontPage.events({
	"click #enterMain": function() {
		Session.set("currentPage", "home");
	}
});




/*


document.addEventListener("DOMContentLoaded", function() {
	var EyesObj = document.getElementById("Eyes");
	EyesObj.addEventListener("mouseover", function() {
		alert("Hi.");
	});
	var MouthObj = document.getElementById("Mouth");
	MouthObj.addEventListener("click", function() {
		alert("Don't touch me!");
	});
});



var alertTest = function() {  //要在call function前定義完
	alert("Alert!");
};

function anotherTest() {	//可以在call function前/後
	alert("Alert!!!!!!");
};





var str = "This is a string.";
str = str.replace("string", "message");





var numbers = [25, 98, 1, 17, 20, 39];
var hugeNums = [];

for (let index = 0; index < numbers.length; index++) {
	if(numbers[index] > 30) {
		hugeNums.push(numbers[index]);
	}
	else {
		console.log(numbers[index]);
	}
}




console.log(hugeNums);

var numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < 10; i++) {
	numbers.push(Math.random());
}

console.log(numbers);






var Mike = {
	age: 28,
	gender: "Male",
	height: 180,
	weight: 79
};


Mike["age"] = 10;
console.log(Mike["age"]);


    ELIZA Meteor Template Created by CHEN, Tsung-Ying
    for the NTHU course "Basic Web Linguistic Application Development"
    Last Updated on Oct 2, 2018
*/

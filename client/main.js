/*
    ELIZA Meteor Template Created by CHEN, Tsung-Ying
    for the NTHU course "Basic Web Linguistic Application Development"
    Last Updated on Oct 30, 2018
*/

var greetMsg = ["I’m fine. Thank you.", "I’m fine, and you?", "I’m fine. How are you?", "Good. How are you?", "Great! How are you?", "Not so good.", "I’ve been better.", "Good. Nice to meet you.", "Fine, and you?", "Fine. Thank you."];
var randomMsg = ["TL;DR.", "Pardon me?", "Excuse me?", "Come again?", "Sorry, I didn't catch you.", "Sorry, I didn't get what you said.", "I beg your pardon?", "Would you explain more for me?", "I see.", "Is that so?"];

var randomResponses = function() {
  let randomNum = Math.floor(Math.random()*10);
  if(myMsg.value === "How are you?") {
    return greetMsg[randomNum];
  }
  else {
    return randomMsg[randomNum];
  }
};

Template.formSection.events({
  "click #submitMsg": function(event) {
    event.preventDefault();
    let myMsgObj = document.getElementById("myMsg");
    let myMsg = myMsgObj.value;
    let conBoxObj = document.getElementById("conversationBox");
    let oldConversation = conBoxObj.value;
    let newConversation = oldConversation+"\n"+"You: "+myMsg;
    let ELIZAResponse = randomResponses();
    newConversation = newConversation+"\n"+"ELIZA: "+ELIZAResponse;
    conBoxObj.value = newConversation;
    myMsgObj.value = "";
  },
  "click #resetMsg": function() {
    let conBoxObj = document.getElementById("conversationBox");
    conBoxObj.value = "ELIZA: How are you doing?";
  }
});
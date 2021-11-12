exports.run = async(client,message,args) =>{
    function Go8Ball(){
        var rand = ['When was the last time you lied?',

'When was the last time you cried?',

'What is your biggest fear?',

'What is your biggest fantasy?',

'Do you have any fetishes?',

'What is something you are glad your mum does not know about you?',

'Have you ever cheated on someone?',

'What is the worst thing you have ever done?',

'What is a secret you have never told anyone?',

'Do you have a hidden talent?',

'Who was your first celebrity crush?',

'What are your thoughts on polyamory?',

'Have you ever cheated in an exam?',

'What is the most drunk you have ever been?',

'What is the strangest dream you have had?',

'Have you ever been caught doing something you should not have?',

'What is the worst date you have been on?',

'What is your biggest regret?',

'What is the biggest misconception about you?',

'Why did your last relationship break down?',

'Have you ever lied to get out of a bad date?',

'What is the most trouble you have been in?']
        return rand[Math.floor(Math.random() * rand.length)];
    }
    return message.reply(Go8Ball());
    }
exports.help = {
    name: "t"
}

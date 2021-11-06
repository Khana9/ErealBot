exports.run = async(client,message,args) =>{
    function GoCoin(){
        var rand = ['Heads', 'Tails', 'Coin lost', 'Coin stuck half way and did not fall']
        return rand[Math.floor(Math.random() * rand.length)];
    }
    return message.reply(GoCoin());
    }
exports.help = {
    name = "coin-toss"
}

function generator() {
    var generatorList = [
        '"Be yourself; everyone else is already taken."<br/><br>― Oscar Wilde',
        '"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."<br/><br>― Marilyn Monroe',
        '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."<br/><br>― Albert Einstein',
        '"So many books, so little time."<br/><br>― Frank Zappa',
        '"A room without books is like a body without a soul."<br/><br>― Marcus Tullius Cicero',
        '"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind."<br/><br>― Bernard M. Baruch ',
        '"You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth."<br/><br>― William W. Purkey ',
        '"You only live once, but if you do it right, once is enough.<br><br> ― Mae West"',
        '"Be the change that you wish to see in the world.<br><br>― Mahatma Gandhi"',
        '"In three words I can sum up everything I\'ve learned about life: it goes on.<br><br>― Robert Frost"'
    ]
    var qoute = generatorList[Math.floor(Math.random()*generatorList.length)]
    document.getElementById('qoutes').innerHTML=qoute ;
    generatorList.splice(Math.floor(Math.random()*generatorList.length),1)
    console.log(Math.floor(Math.random()*generatorList.length));
}

var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');  
var app = express();

var jsonParser = bodyParser.json();

var options = {
  host: 'api.line.me',
  port: 443,
  path: '/v2/bot/message/reply',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
   'Authorization': 'Bearer LwmfDw+2Ri2jrhlV2aAumFwoiDR6WT/PI+CddIkGQHdGcl9uau1Z8qpE+MQceN4mYT9ymIaydyx5qarCa+8ZoPp9jdIRpodOml4419pHqukz5kE7rS4LV4dEQP9P9j6p9U5FocSyxFODI3UNCrqTpAdB04t89/1O/w1cDnyilFU='
  }
}
app.set('port', (process.env.PORT || 5000));

// views is directory for all template files

app.get('/', function(req, res) {
//  res.send(parseInput(req.query.input));
  res.send('Hello');
});

app.post('/', jsonParser, function(req, res) {
  let event = req.body.events[0];
  let type = event.type;
  let msgType = event.message.type;
  let msg = event.message.text;
  let rplyToken = event.replyToken;

  let rplyVal = null;
  //console.log(msg);
  if (type == 'message' && msgType == 'text') {
    try {
      rplyVal = parseInput(rplyToken, msg); 
    } 
    catch(e) {
      console.log('catch error');
    }
  }

  if (rplyVal) {
    replyMsgToLine(rplyToken, rplyVal); 
  } else {
  //  console.log('Do not trigger'); 
  }

  res.send('ok');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function replyMsgToLine(rplyToken, rplyVal) {
	let rplyObj = {
    replyToken: rplyToken,
    messages: [
      {
        type: "text",
        text: rplyVal
      }
    ]
  }

  let rplyJson = JSON.stringify(rplyObj); 
  
  var request = https.request(options, function(response) {
    console.log('Status: ' + response.statusCode);
    console.log('Headers: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(body) {
    //  console.log(body); 
    });
  });
  request.on('error', function(e) {
    console.log('Request error: ' + e.message);
  })
  request.end(rplyJson);
}

////////////////////////////////////////
//////////////// 分析開始
////////////////////////////////////////
function parseInput(rplyToken, inputStr) {
          
	//	console.log('InputStr: ' + inputStr);
		_isNaN = function(obj) {
			return isNaN(parseInt(obj));
        }                   
        let msgSplitor = (/\S+/ig);	
		let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
		let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階
                       
        //額外指令開始於此
        if (trigger.match(/!垃圾話/) != null) return randomReply() ;
	if (trigger.match(/!冷知識/) != null) return randomKnowldge() ;

}


////////////////////////////////////////
//////////////// 骰組開始
////////////////////////////////////////      


               
////////////////////////////////////////
//////////////// COC6
////////////////////////////////////////      
    

function coc6(chack,text){
          let temp = Dice(100);
          if (text == null ) {
            if (temp == 100) return 'ccb<=' + chack  + ' ' + temp + ' → 啊！大失敗！';
            if (temp <= chack) return 'ccb<=' + chack + ' '  + temp + ' → 成功';
            else return 'ccb<=' + chack  + ' ' + temp + ' → 失敗' ;
          }
          else
    {
            if (temp == 100) return 'ccb<=' + chack + ' ' + temp + ' → 啊！大失敗！；' + text;
            if (temp <= chack) return 'ccb<=' + chack +  ' ' + temp + ' → 成功；' + text;
            else return 'ccb<=' + chack  + ' ' +  temp + ' → 失敗；' + text;
    }
}        

////////////////////////////////////////
//////////////// COC7
////////////////////////////////////////      

        
function coc7(chack,text){
  let temp = Dice(100);  
  if (text == null ) {
    if (temp == 1) return temp + ' → 恭喜！大成功！';
    if (temp == 100) return temp + ' → 啊！大失敗！';
    if (temp <= chack/5) return temp + ' → 極限成功';
    if (temp <= chack/2) return temp + ' → 困難成功';
    if (temp <= chack) return temp + ' → 通常成功';
    else return temp + ' → 失敗' ;
  }
  else
  {
  if (temp == 1) return temp + ' → 恭喜！大成功！；' + text;
  if (temp == 100) return temp + ' → 啊！大失敗！；' + text;
  if (temp <= chack/5) return temp + ' → 極限成功；' + text;
  if (temp <= chack/2) return temp + ' → 困難成功；' + text;
  if (temp <= chack) return temp + ' → 通常成功；' + text;
  else return temp + ' → 失敗；' + text;
  }
}
        
function coc7chack(temp,chack,text){
  if (text == null ) {
    if (temp == 1) return temp + ' → 恭喜！大成功！';
    if (temp == 100) return temp + ' → 啊！大失敗！';
    if (temp <= chack/5) return temp + ' → 極限成功';
    if (temp <= chack/2) return temp + ' → 困難成功';
    if (temp <= chack) return temp + ' → 通常成功';
    else return temp + ' → 失敗' ;
  }
else
  {
    if (temp == 1) return temp + ' → 恭喜！大成功！；' + text;
    if (temp == 100) return temp + ' → 啊！大失敗！；' + text;
    if (temp <= chack/5) return temp + ' → 極限成功；' + text;
    if (temp <= chack/2) return temp + ' → 困難成功；' + text;
    if (temp <= chack) return temp + ' → 通常成功；' + text;
    else return temp + ' → 失敗；' + text;
  }
}


function coc7bp (chack,bpdiceNum,text){
  let temp0 = Dice(10) - 1;
  let countStr = '';
  
  if (bpdiceNum > 0){
  for (let i = 0; i <= bpdiceNum; i++ ){
    let temp = Dice(10);
    let temp2 = temp.toString() + temp0.toString();
    if (temp2 > 100) temp2 = parseInt(temp2) - 100;  
    countStr = countStr + temp2 + '、';
  }
  countStr = countStr.substring(0, countStr.length - 1) 
    let countArr = countStr.split('、'); 
    
  countStr = countStr + ' → ' + coc7chack(Math.min(...countArr),chack,text);
  return countStr;
  }
  
  if (bpdiceNum < 0){
    bpdiceNum = Math.abs(bpdiceNum);
    for (let i = 0; i <= bpdiceNum; i++ ){
      let temp = Dice(10);
      let temp2 = temp.toString() + temp0.toString();
      if (temp2 > 100) temp2 = parseInt(temp2) - 100;  
      countStr = countStr + temp2 + '、';
    }
    countStr = countStr.substring(0, countStr.length - 1) 
    let countArr = countStr.split('、'); 

    countStr = countStr + ' → ' + coc7chack(Math.max(...countArr),chack,text);
    return countStr;
  }
  
}
        
function ArrMax (Arr){
  var max = this[0];
  this.forEach (function(ele,index,arr){
    if(ele > max) {
      max = ele;
    }
  })
  return max;
}
////////////////////////////////////////
//////////////// COC7傳統創角
////////////////////////////////////////      


  
function build7char(text01){
	let old ="";
	let ReStr = '調查員年齡設為：';
    //讀取年齡
	if (text01 == undefined) {
	old = 18;
    ReStr = ReStr + old + '(沒有填寫使用預設值)\n';
	}
	else 
	{
	old = text01;
    ReStr = ReStr + old + '\n';
	}
    //設定 因年齡減少的點數 和 EDU加骰次數
    let Debuff = 0;
    let AppDebuff = 0;
    let EDUinc = 0;


    let oldArr = [15,20,40,50,60,70,80]
    let DebuffArr = [5,0,5,10,20,40,80]
    let AppDebuffArr = [0,0,5,10,15,20,25]
    let EDUincArr = [0,1,2,3,4,4,4]

    if (old < 15) return ReStr + '等等，核心規則不允許小於15歲的人物哦。';    
    if (old >= 90) return ReStr + '等等，核心規則不允許90歲以上的人物哦。'; 

    for ( i=0 ; old >= oldArr[i] ; i ++){
      Debuff = DebuffArr[i];
      AppDebuff = AppDebuffArr[i];
      EDUinc = EDUincArr[i];
    }

    ReStr = ReStr + '==\n';
    if (old < 20) ReStr = ReStr + '年齡調整：從STR、SIZ擇一減去' + Debuff + '點\n（請自行手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
    else
      if (old >= 40)  ReStr = ReStr + '年齡調整：從STR、CON或DEX中「總共」減去' + Debuff + '點\n（請自行手動選擇計算）。\n將APP減去' + AppDebuff +'點。可做' + EDUinc + '次EDU的成長擲骰。' ;

    else ReStr = ReStr + '年齡調整：可做' + EDUinc + '次EDU的成長擲骰。' ;
    ReStr = ReStr + '\n==';
    if (old>=40) ReStr = ReStr + '\n（以下箭號三項，自選共減' + Debuff + '點。）' ;
    if (old<20) ReStr = ReStr + '\n（以下箭號兩項，擇一減去' + Debuff + '點。）' ;
    ReStr = ReStr + '\nＳＴＲ：' + BuildDiceCal('3d6*5');
    if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
    if (old<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
    ReStr = ReStr + '\nＣＯＮ：' + BuildDiceCal('3d6*5');
    if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff;
    ReStr = ReStr + '\nＤＥＸ：' + BuildDiceCal('3d6*5');
    if (old>=40) ReStr = ReStr + ' ← 共減' + Debuff ;
    if (old>=40) ReStr = ReStr + '\nＡＰＰ：' + BuildDiceCal('3d6*5-' + AppDebuff);
    else ReStr = ReStr + '\nＡＰＰ：' + BuildDiceCal('3d6*5');
    ReStr = ReStr + '\nＰＯＷ：' + BuildDiceCal('3d6*5');
    ReStr = ReStr + '\nＳＩＺ：' + BuildDiceCal('(2d6+6)*5');
    if (old<20) ReStr = ReStr + ' ←擇一減' + Debuff ;
    ReStr = ReStr + '\nＩＮＴ：' + BuildDiceCal('(2d6+6)*5');         
    if (old<20) ReStr = ReStr + '\nＥＤＵ：' + BuildDiceCal('3d6*5-5');
    else {
      let firstEDU = '(' + BuildRollDice('2d6') + '+6)*5';
      ReStr = ReStr + '\n==';
      ReStr = ReStr + '\nＥＤＵ初始值：' + firstEDU + ' = ' + eval(firstEDU);
      
      let tempEDU = eval(firstEDU);

      for (i = 1 ; i <= EDUinc ; i++){
        let EDURoll = Dice(100);
        ReStr = ReStr + '\n第' + i + '次EDU成長 → ' + EDURoll;


        if (EDURoll>tempEDU) {
          let EDUplus = Dice(10);
          ReStr = ReStr + ' → 成長' + EDUplus +'點';
          tempEDU = tempEDU + EDUplus;
        }
        else{
          ReStr = ReStr + ' → 沒有成長';       
        }
      }
      ReStr = ReStr + '\n';
      ReStr = ReStr + '\nＥＤＵ最終值：' +tempEDU;
    }
    ReStr = ReStr + '\n==';

    ReStr = ReStr + '\nＬＵＫ：' + BuildDiceCal('3d6*5');    
    if (old<20) ReStr = ReStr + '\nＬＵＫ加骰：' + BuildDiceCal('3D6*5');


    return ReStr;
  } 

////////////////////////////////////////
//////////////// COC7傳統創角
////////////////////////////////////////      


  
function build6char(){

/*    //讀取年齡
	if (text01 == undefined) text01 = 18;
    let old = text01;
    let ReStr = '調查員年齡設為：' + old + '\n';
    //設定 因年齡減少的點數 和 EDU加骰次數
    let Debuff = 0;
    let AppDebuff = 0;
    let EDUinc = 0;


    let oldArr = [15,20,40,50,60,70,80]
    let DebuffArr = [5,0,5,10,20,40,80]
    let AppDebuffArr = [0,0,5,10,15,20,25]
    let EDUincArr = [0,1,2,3,4,4,4]

    if (old < 15) return ReStr + '等等，核心規則不允許小於15歲的人物哦。';    
    if (old >= 90) return ReStr + '等等，核心規則不允許90歲以上的人物哦。'; 

    for ( i=0 ; old >= oldArr[i] ; i ++){
      Debuff = DebuffArr[i];
      AppDebuff = AppDebuffArr[i];
      EDUinc = EDUincArr[i];
    }

    ReStr = ReStr + '==\n';
    if (old < 20) ReStr = ReStr + '年齡調整：從STR、SIZ擇一減去' + Debuff + '點\n（請自行手動選擇計算）。\n將EDU減去5點。LUK可擲兩次取高。' ;
    else
      if (old >= 40)  ReStr = ReStr + '年齡調整：從STR、CON或DEX中「總共」減去' + Debuff + '點\n（請自行手動選擇計算）。\n將APP減去' + AppDebuff +'點。可做' + EDUinc + '次EDU的成長擲骰。' ;

    else ReStr = ReStr + '年齡調整：可做' + EDUinc + '次EDU的成長擲骰。' ;
    ReStr = ReStr + '\n=='; 
 if (old>=40) ReStr = ReStr + '\n（以下箭號三項，自選共減' + Debuff + '點。）' ;
    if (old<20) ReStr = ReStr + '\n（以下箭號兩項，擇一減去' + Debuff + '點。）' ;
 */
	let ReStr = '六版核心創角：';
	ReStr = ReStr + '\nＳＴＲ：' + BuildDiceCal('3d6');
    ReStr = ReStr + '\nＤＥＸ：' + BuildDiceCal('3d6');
    ReStr = ReStr + '\nＣＯＮ：' + BuildDiceCal('3d6');
	ReStr = ReStr + '\nＰＯＷ：' + BuildDiceCal('3d6');
    ReStr = ReStr + '\nＡＰＰ：' + BuildDiceCal('3d6');
    ReStr = ReStr + '\nＩＮＴ：' + BuildDiceCal('(2d6+6)');
    ReStr = ReStr + '\nＳＩＺ：' + BuildDiceCal('(2d6+6)');         
    ReStr = ReStr + '\nＥＤＵ：' + BuildDiceCal('(3d6+3)');         
	ReStr = ReStr + '\n年收入：' + BuildDiceCal('(1d10)'); 	  
	ReStr = ReStr + '\n調查員的最小起始年齡等於EDU+6，每比起始年齡年老十年，\n調查員增加一點EDU並且加20點職業技能點數。\n當超過40歲後，每老十年，\n從STR,CON,DEX,APP中選擇一個減少一點。';
    return ReStr;
  } 
        
////////////////////////////////////////
//////////////// 普通ROLL
////////////////////////////////////////
 function nomalDiceRoller(inputStr,text0,text1,text2){
  
  //首先判斷是否是誤啟動（檢查是否有符合骰子格式）
 // if (inputStr.toLowerCase().match(/\d+d\d+/) == null) return undefined;
  
  //再來先把第一個分段拆出來，待會判斷是否是複數擲骰
  let mutiOrNot = text0.toLowerCase();
  
  //排除小數點
  if (mutiOrNot.toString().match(/\./)!=null)return undefined;

  //先定義要輸出的Str
  let finalStr = '' ;  
  
  
  //是複數擲骰喔
  if(mutiOrNot.toString().match(/\D/)==null ) {
	  if(text2 != null){
	  finalStr= text0 + '次擲骰：\n' + text1 +' ' + text2 + '\n';
    	  }
		  else{
		  finalStr= text0 + '次擲骰：\n' + text1 +'\n';
    		  }
    if(mutiOrNot>30) return '不支援30次以上的複數擲骰。';
    
    for (i=1 ; i<=mutiOrNot ;i++){
    let DiceToRoll = text1.toLowerCase();
    if (DiceToRoll.match('d') == null) return undefined;

    //寫出算式
    let equation = DiceToRoll;
    while(equation.match(/\d+d\d+/)!=null) {
      let tempMatch = equation.match(/\d+d\d+/);
      equation = equation.replace(/\d+d\d+/, RollDice(tempMatch));
    }

    //計算算式
    let aaa = equation;
	aaa = aaa.replace(/\d+[[]/ig, '(' );
	aaa = aaa.replace(/]/ig, ')' );
	//aaa = aaa.replace(/[[]\d+|]/ig, "");
	let answer = eval(aaa.toString());
	
    finalStr = finalStr + i + '# ' + equation + ' = ' + answer + '\n';
    }
        
  }
  
  else
  {
  //一般單次擲骰
  let DiceToRoll = mutiOrNot.toString().toLowerCase();
  DiceToRoll = DiceToRoll.toLowerCase();
  if (DiceToRoll.match('d') == null) return undefined;
  
  //寫出算式
  let equation = DiceToRoll;
  while(equation.match(/\d+d\d+/)!=null) {
	let totally = 0;
    let tempMatch = equation.match(/\d+d\d+/);    
    if (tempMatch.toString().split('d')[0]>300) return undefined;
    if (tempMatch.toString().split('d')[1]==1 || tempMatch.toString().split('d')[1]>1000000) return undefined;
    equation = equation.replace(/\d+d\d+/, RollDice(tempMatch));
	
  }
  
  //計算算式
	let aaa = equation;
	aaa = aaa.replace(/\d+[[]/ig, '(' );
	aaa = aaa.replace(/]/ig, ')' );
	let answer = eval(aaa.toString());
      
  if(text1 != null){
	  finalStr= text0 + '：' + text1 + '\n' + equation + ' = ' + answer;
    	  }
		  else{
		  finalStr= text0 + '：\n' + equation + ' = ' + answer;
    		  }

  }
  
  return finalStr;


}        


////////////////////////////////////////
//////////////// 擲骰子運算
////////////////////////////////////////

function sortNumber(a,b)
{
return a - b
}


        function Dice(diceSided){          
          return Math.floor((Math.random() * diceSided) + 1)
        }              
		
	function RollDice(inputStr){
  //先把inputStr變成字串（不知道為什麼非這樣不可）
  let comStr=inputStr.toString();
  let finalStr = '[';
  let temp = 0;
  var totally = 0;
  for (let i = 1; i <= comStr.split('d')[0]; i++) {
	temp = Dice(comStr.split('d')[1]);
	totally +=temp;
    finalStr = finalStr + temp + '+';
     }

  finalStr = finalStr.substring(0, finalStr.length - 1) + ']';
  finalStr = finalStr.replace('[', totally +'[');
  return finalStr;
}

function FunnyDice(diceSided) {
	return Math.floor((Math.random() * diceSided)) //猜拳，從0開始
}

function BuildDiceCal(inputStr){
  
  //首先判斷是否是誤啟動（檢查是否有符合骰子格式）
  if (inputStr.toLowerCase().match(/\d+d\d+/) == null) return undefined;
    
  //排除小數點
  if (inputStr.toString().match(/\./)!=null)return undefined;

  //先定義要輸出的Str
  let finalStr = '' ;  
  
  //一般單次擲骰
  let DiceToRoll = inputStr.toString().toLowerCase();  
  if (DiceToRoll.match('d') == null) return undefined;
  
  //寫出算式
  let equation = DiceToRoll;
  while(equation.match(/\d+d\d+/)!=null) {
    let tempMatch = equation.match(/\d+d\d+/);    
    if (tempMatch.toString().split('d')[0]>200) return '欸欸，不支援200D以上擲骰；哪個時候會骰到兩百次以上？想被淨灘嗎？';
    if (tempMatch.toString().split('d')[1]==1 || tempMatch.toString().split('d')[1]>500) return '不支援D1和超過D500的擲骰；想被淨灘嗎？';
    equation = equation.replace(/\d+d\d+/, BuildRollDice(tempMatch));
  }
  
  //計算算式
  let answer = eval(equation.toString());
    finalStr= equation + ' = ' + answer;
  
  return finalStr;

}        

function BuildRollDice(inputStr){
  //先把inputStr變成字串（不知道為什麼非這樣不可）
  let comStr=inputStr.toString().toLowerCase();
  let finalStr = '(';

  for (let i = 1; i <= comStr.split('d')[0]; i++) {
    finalStr = finalStr + Dice(comStr.split('d')[1]) + '+';
     }

  finalStr = finalStr.substring(0, finalStr.length - 1) + ')';
  return finalStr;
}
            

////////////////////////////////////////
//////////////// nechronica (NC)
////////////////////////////////////////
function nechronica(triggermsg ,text) {
	let returnStr = '';
	var ncarray = [];
	var dicemax = 0, dicemin = 0, dicenew = 0;

	var match = /^(\d+)(NC|NA)((\+|-)(\d+)|)$/i.exec(triggermsg);	//判斷式

	for (var i = 0; i < Number(match[1]); i++)	
	{
		dicenew = Dice(10) + Number(match[3]);
		ncarray.push(dicenew);
	}

	dicemax = Math.max(...ncarray);	//判斷最大最小值
	dicemin = Math.min(...ncarray);

	if (Number(match[1]) == 1)
		returnStr += dicemax + '[' + ncarray.pop() + ']'; 
	else
	{
		returnStr += dicemax + '[';
		for (i = 0; i < Number(match[1]); i++)
		{
			if (i != Number(match[1]) - 1)
				returnStr += ncarray.pop() + ',';
			else
				returnStr += ncarray.pop();
		}
		returnStr += ']';
	}

	if (dicemax > 5)
		if (dicemax > 10)
			returnStr += ' → 大成功';
		else
			returnStr += ' → 成功';
	else
		if (dicemin <= 1)
			returnStr += ' → 大失敗';
		else
			returnStr += ' → 失敗';

	if (text != null)
		returnStr += ' ; ' + text;

	return returnStr;
}

////////////////////////////////////////
//////////////// nechronica (NM依戀)
////////////////////////////////////////

function nechronica_mirenn(text) {
	let returnStr = '';
	var dicenew = 0;
	dicenew = Dice(10)-1;

	// 產生格式
	if (text != null)
		returnStr = text + ': \n' + '依戀 (' + (dicenew+1) + '[' + (dicenew+1) + ']) → ' + nechronica_mirenn_table(dicenew);
	else
		returnStr = '依戀 (' + (dicenew+1) + '[' + (dicenew+1) + ']) → ' + nechronica_mirenn_table(dicenew);

	return returnStr;
}

/* 這邊預留 mode 以便未來可以加入其他依戀 */
function nechronica_mirenn_table(mode) {
	if (mode == 0) returnStr = '【嫌惡】\n[發狂：敵對認識] 戰鬥中，沒有命中敵方的攻擊，全部都會擊中嫌惡的對象。(如果有在射程內的話)';
	if (mode == 1) returnStr = '【獨占】\n[發狂：獨占衝動] 戰鬥開始與戰鬥結束，各別選擇損傷1個對象的部件。';
	if (mode == 2) returnStr = '【依存】\n[發狂：幼兒退行] 妳的最大行動值減少2。';
	if (mode == 3) returnStr = '【執著】\n[發狂：跟蹤監視] 戰鬥開始與戰鬥結束時，對象對妳的依戀精神壓力點數各增加1點。(如果已經處在精神崩壞狀態，可以不用作此處理)';
	if (mode == 4) returnStr = '【戀心】\n[發狂：自傷行為] 戰鬥開始與戰鬥結束時，各別選擇損傷1個自己的部件。';
	if (mode == 5) returnStr = '【對抗】\n[發狂：過度競爭] 戰鬥開始與戰鬥結束時，各別選擇任意依戀，增加1點精神壓力點數。(如果已經處在精神崩壞狀態，可以不用作此處理)';
	if (mode == 6) returnStr = '【友情】\n[發狂：共鳴依存] 單元結束時，對象的損傷部件比妳還要多的時候，妳的部件損傷數，要增加到與對方相同。';
	if (mode == 7) returnStr = '【保護】\n[發狂：過度保護] 戰鬥當中，妳跟「依戀的對象」處於不同區域的時候，無法宣告「移動以外的戰鬥宣言」，此外妳沒有辦法把「自身」與「依戀對象」以外的單位當成移動對象。';
	if (mode == 8) returnStr = '【憧憬】\n[發狂：贗作妄想] 戰鬥當中，妳跟「依戀的對象」處於同樣區域的時候，無法宣告「移動以外的戰鬥宣言」，此外妳沒有辦法把「自身」與「依戀對象」以外的單位當成移動對象。';
	if (mode == 9) returnStr = '【信賴】\n[發狂：疑心暗鬼] 除了妳以外的所有姊妹，最大行動值減少1。';
	return returnStr;
}



////////////////////////////////////////
//////////////// D66
////////////////////////////////////////

function d66(text) {

	let returnStr = '';
	if(text != null){
	returnStr =   'D66：' + text + ' → ' + Dice(6) + Dice(6);
	}
	else{
	returnStr = 'D66 → ' + Dice(6) + Dice(6);
	}
	return returnStr;
	
}

////////////////////////////////////////
//////////////// D66s
////////////////////////////////////////

function d66s(text) {

	let temp0 = Dice(6);
	let temp1 = Dice(6);
	let returnStr = '';
	if (temp0>= temp1){
		let temp2 = temp0;
		temp0 = temp1;
		temp1 = temp2;
	}
	if(text != null){
	
	returnStr =   'D66s：' + text + ' → ' + temp0 + temp1;
	}
	else{
	returnStr = 'D66s → ' +  temp0 + temp1;
	}
	return returnStr;
	
}

////////////////////////////////////////
//////////////// xBy
////////////////////////////////////////
function xBy(triggermsg ,text01, text02) {

let returnStr = '(' + triggermsg +')';
let match = /^(\d+)(B)(\d+)$/i.exec(triggermsg);  //判斷式  [0]3B8,[1]3,[2]B,[3]8
let varcou =  new Array();
let varsu = 0;
for (var i = 0; i < Number(match[1]); i++)	
	{
             varcou[i] =  Dice(match[3]);
	}
varcou.sort(sortNumber);
//(5B7>6) → 7,5,6,4,4 → 成功数1

if(isNaN(text01) ==false &&Number(text01) <= Number(match[3]))
{
for (let i = 0; i < Number(match[1]); i++)	
	{
             if(Number(varcou[i])>=Number(text01)) varsu++;        
	}
	if (text02 ==undefined) text02 ='';

    returnStr+= ' → ' + varcou + ' → 成功數'+varsu + ' ' +text02 ;
	
}
else{
	if (text01 ==undefined) text01 ='';
	returnStr+=  ' → ' + varcou + ' ' +text01 ;

	}
	

return returnStr;
}

////////////////////////////////////////
//////////////// xUy
////////////////  (5U10[8]) → 17[10,7],4,5,7,4 → 17/37(最大/合計)
////////////////  (5U10[8]>8) → 1,30[9,8,8,5],1,3,4 → 成功数1
////////////////////////////////////////

function xUy(triggermsg ,text01, text02, text03) {
	var match = /^(\d+)(u)(\d+)/i.exec(triggermsg);   //判斷式  5u19,5,u,19, 
	var returnStr = '('+triggermsg+'['+text01+']';
	if(Number(text02) <= Number(match[3]) && text02 != undefined) 
	{
		returnStr+= '>'+text02+ ') → ';
		if(text03!=undefined) returnStr += text03 +' → ';
	}
	else{
	returnStr+= ') → ';
		if(text02!=undefined) returnStr += text02 +' → ';	
	}	
	let varcou =  new Array();
	let varcouloop =  new Array();
	let varcoufanl =  new Array();
	let varcounew =  new Array();
	var varsu = 0;
	if (text01<=2) { return  '加骰最少比2高'; }

for (var i = 0; i < Number(match[1]); i++)	
	{
			varcou[i] =  Dice(match[3]);
			varcounew[i] = varcou[i];
			varcouloop[i] = varcounew[i];
			for(;varcounew[i]>=text01;)
			{
				varcounew[i] =Dice(match[3]);
				varcouloop[i] += ', ' +varcounew[i];
				varcou[i] += varcounew[i];
			}

	}

    for(var i = 0; i < varcouloop.length; i++)	
  {
	if(varcouloop[i]==varcou[i])   {returnStr += varcou[i]+', ';}
    else     returnStr += varcou[i]+'['+varcouloop[i]+ '], '; 
    
  }
		returnStr = returnStr.replace(/, $/ig,'');
 
 
 
 if(Number(text02) <= Number(match[3]) ){
let suc =0;

////////////////  (5U10[8]>8) → 1,30[9,8,8,5],1,3,4 → 成功数1
for(var i=0;i<varcou.length;i++)
{
if(Number(varcou[i])>=Number(text02)) suc++;
}

returnStr  += ' → 成功数' +suc;

 }
 else
  ////////////////  (5U10[8]) → 17[10,7],4,5,7,4 → 17/37(最大/合計)

	 {
 returnStr  +=' → ' + Math.max.apply(null, varcou)
returnStr  += '/' + varcou.reduce(function(previousValue,currentValue){
        return previousValue + currentValue;} ) +'(最大/合計)';

	}
	return returnStr;
	
	}


////////////////////////////////////////
//////////////// WOD黑暗世界
////////////////////////////////////////

function wod(triggermsg ,text) {
	var returnStr = triggermsg+' [';
	var varcou = 0;
	var varsu = 0;
	var match = /^(\d+)(wd|wod)(\d|)((\+|-)(\d+)|)$/i.exec(triggermsg);   //判斷式  [0]3wd8+10,[1]3,[2]wd,[3]8,[4]+10,[5]+,[6]10  
	if (match[3]=="") { match[3] =10 }
	if (match[3]<=2) { return '加骰最少比2高'; }
			
for (var i = 0; i < Number(match[1]); i++)	
	{
             varcou =  Math.floor(Math.random() * 10) + 1;
             returnStr += varcou +', ';
             
		
             if (varcou >=match[3]) { i--}
             if (varcou >=8) 
	     {
		     varsu++;
	     }

	}

	    if(match[5]=='+'){
    
    for (var i = 0; i < Number(match[6]); i++)	{
	    varsu++;
    }
    }
    if(match[5]=='-'){
    
    for (var i = 0; i < Number(match[6]); i++)	{
	    varsu--;
    }
    }
	
    returnStr = returnStr.replace(/[,][ ]$/,'] → '+varsu+'成功');
	if (text != null){
	returnStr += ' ; ' + text;
	}
	return returnStr;
}
////////////////////////////////////////
//////////////// 占卜&其他
////////////////////////////////////////


function BStyleFlagSCRIPTS() {
          let rplyArr = ['\
「打完這仗我就回老家結婚（この戦いが終わったら、故郷に帰って結婚するんだ）」', '\
「打完這一仗後我請你喝酒」', '\
「你、你要錢嗎！要什麼我都能給你！/我可以給你更多的錢！」', '\
「做完這次任務，我就要結婚了。」', '\
「幹完這一票我就金盆洗手了。」', '\
「好想再XXX啊……」', '\
「已經沒什麼好害怕的了（もう何も恐くない）」', '\
「我一定會回來的（必ず帰る！）」', '\
「差不多該走了」', '\
「我只是希望你永遠不要忘記我。」', '\
「我只是希望能永遠和你在一起。」', '\
「啊啊…為什麼會在這種時候、想起了那些無聊的事呢？」', '\
「能遇見你真是太好了。」', '\
「我終於…為你們報仇了！」', '\
「等到一切結束後，我有些話想跟妳說！」', '\
「這段時間我過的很開心啊。」', '\
把自己的寶物借給其他人，然後說「待一切結束後記得還給我。」', '\
「真希望這份幸福可以永遠持續下去。」', '\
「我們三個人要永永遠遠在一起！」', '\
「這是我女兒的照片，很可愛吧？」', '\
「請告訴他/她，我永遠愛他/她」', '\
「聽好，在我回來之前絕不要亂走動哦（いいか、俺が帰ってくるまでここを動くんじゃないぞ）」', '\
「要像一個乖孩子一樣等著我回來」', '\
「我去去就來（先に行って、すぐ戻るから）」', '\
「快逃！(逃げろう！/早く逃げろう！)」', '\
「對方只有一個人，大家一起上啊」', '\
「我就不信，這麼多人還殺不了他一個！」', '\
「幹，幹掉了嗎？（やったのか？）」', '\
「身體好輕」', '\
「可惡！你給我看著！（逃跑）」', '\
「躲在這裡就應該不會被發現了吧。」', '\
「我不會讓任何人死的。」', '\
「可惡！原來是這麼回事！」', '\
「跑這麼遠應該就行了。」', '\
「我已經甚麼都不怕了（もう何も恐くない）」', '\
「這XXX是什麼，怎麼之前沒見過（なんだこのXXX、見たことないな）」', '\
「什麽聲音……？就去看一下吧（:「何の音だ？ちょっと見てくる」', '\
「是我的錯覺嗎？/果然是錯覺/錯覺吧/可能是我（看/聽）錯了」', '\
「二十年後又是一條好漢！」', '\
「大人/將軍武運昌隆」', '\
「這次工作的報酬是以前無法比較的（:「今度の仕事でまとまったカネが入るんだ」', '\）」', '\
「我才不要和罪犯呆在一起，我回自己的房間去了！（この中に殺人者がいるかもしれないのに、一緒に居られるか!俺は自分の部屋に戻るぞ!）」', '\
「其實我知道事情的真相…（各種廢話）…犯人就是……」', '\
「我已經天下無敵了~~」', '\
「大人！這邊就交給小的吧，請快離開這邊吧」', '\
「XX，這就是我們流派的最終奧義。這一招我只會演示一次，你看好了！」', '\
「誰敢殺我？」', '\
「從來沒有人能越過我的劍圍。」', '\
「就算殺死也沒問題吧？」', '\
「看我塔下強殺！」', '\
「騙人的吧，我們不是朋友嗎？」', '\
「我老爸是....你有種就....」', '\
「我可以好好利用這件事」'];
          return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
	
        function randomReply() {
	//前贅詞
          let rplyHead = ['\
垃圾話小王子，參上!','\
哼，我就特地開口說話吧。','\
哎呀，又是說垃圾話的時間了嗎?','\
那麼，老朽就不客氣的說句垃圾話了...','\
是擅長聽垃圾話的朋友呢～','\
垃圾話始終來自於人性阿','\
只要你還有勇氣說出垃圾話，我的生命將永不止息!','\
一句垃圾話，千軍萬馬來相見!','\
我的垃圾話都快沒了，看來我該讓賢了','\
哼...才、才不是為了你講的呢!(吐舌頭)','\
剛好一句垃圾話，你浪費了幾秒呢?','\
孩子，人生很美好的，垃圾話偶爾用用就好。','\
遠離毒品，迎向垃圾話!','\
冒險者，沒想到你能來到這呢!\n不過都結束了，接下來就由我的垃圾話做你的對手!','\
就讓你看看我的斬魄刀...臣服於語言之下! 垃圾話!','\
我本來不想說這句的...卍解! 言魔垃圾百句話!','\
你們不是第一匹讓我講垃圾話的孩子們，也不會是最後一批，垃圾話的大門，將永遠開起著。','\
登高一呼! 奪回我們自由說垃圾話的權力!','\
今天的垃圾話好喧囂阿...','\
人類果然最有趣了!','\
貧弱貧弱! 以為這樣我就會黔驢技窮了嗎!?','\
無駄無駄無駄無駄! 看我的垃圾話!','\
這就是我的stand(スタンド/替身)，『THE Trash-Talk!』(垃圾話)','\
從來沒有人能越過我的垃圾話!'];
	//垃圾話開始
          let rplyArr = ['\
「今不慮前事之失，複循覆車之軌。 (不去想之前為失敗的原因，必定會重蹈覆轍。)」','\
「屋漏偏逢連夜雨，船遲又遇打頭風。」','\
「山無陵，江水為竭， 冬雷震震，夏雨(ㄩˋ)雪， 天地合，乃敢 與君絕！」','\
「積陰德者，必有陽報。」','\
「敗軍之將不可言勇；負國之臣不可言忠。」','\
「運籌帷幄之中，決勝千里之外。」','\
「善泳者溺，善騎者墜。」','\
「圍師必闕，窮寇莫追。」','\
「若郭奉孝在，不使孤至此。」','\
「法孝直若在，則能制主上，令不東行。就复東行，必不傾危。」','\
「言者無意，聽者有心。」','\
「當斷不斷，必受其亂。」','\
「欲破曹公，宜用火攻，萬事俱備，只欠東風。」','\
「出身貧寒，不是恥辱；能屈能伸，方為丈夫！」','\
「預知前世因，今生受的是，預知來世果，今生做的是。」','\
「吾本來茲土，傳法救迷情，一花開五葉，結果自然成。」','\
「以銅為鏡，可以正衣冠；以史為鏡，可以知興替；以人為鏡，可以知得失。」','\
「知道的人多，行道的人少；說理的人多，悟理的人少。」','\
「真正不尋常的一日，就是沒有任何不尋常事發生的一日。」','\
「無能者的錯誤標度源自於對自我的錯誤認知，  而極有才能者的錯誤標度源自於對他人的錯誤認知。」','\
「enlightenment leads to benightedness,science entails nescience.」 \n(啟蒙導致愚昧，知識帶來無知)','\
「遊戲也許是一種本能，為了日後在困窘時生存下來而訓練我們身體的行為。」','\
「遊戲，即自願地去達成完全不必要的難題。」','\
「遊戲，請安心玩，因為你我都有權去追求更高層次的滿足感。」','\
「『接觸』乃是一種感受部分電子所造成的排斥力的行為。」','\
「寧為聰明的愚夫，不作愚蠢的才子。」','\
「智者千慮，總有一失。愚者千慮，總有一得。 」','\
「All the 『splendor』 in the world is not worth a good friend.」 \n(世間一切的璀璨寶石，不如一個好基有。)','\
「腳步不能到達的地方，眼光可以到達；眼光不能到達的地方，精神可以到達。」','\
「忍者道，隱一己之心而成人所求也。」','\
「殷其雷，天陰霾，雨零耶，盼君留。殷其雷，縱不零，卿若留，吾將從。(隱約雷鳴，陰霾天空，但盼風雨來，能留你在此。隱約雷鳴，陰霾天空，即使天無雨，我亦留此地。)」','\
「恐怖才是自由，君臨才是解放，矛盾才是真理。」','\
「向前走便是未來，回首便是回憶，取段落則為物語。」','\
「受人之恩不可恥，無法回報此恩才可恥。」','\
「性格不過是自己築起的高牆，在牆內很輕鬆，但不一定快樂。」','\
「與其受之以魚使其獲利；不如受之以漁使其自立。」','\
「不忘信念，不畏羞恥，不留遺憾。」','\
「熱至秋分冷至春分。」','\
「One thousand之行始於One step。」','\
「杜鵑不啼，就隨他去吧。(不抱過高的期望 接受相應的現實 並試圖去享受它，很好的體現出當下年輕人的心理特性)」','\
「打贏了也要綁緊頭盔的帶子，打輸了就要鬆開腰間皮帶。」','\
「人間萬事有如塞翁失馬，禍福有如糾纏在一起的繩子，有樂即有苦。」','\
「Nothing is ture,everything is permitted. 無物為真，諸行皆可。」 \n(萬物永遠都在變化，所以不應因某些常規而束縛自己。)','\
「人生就像憤怒鳥，失敗總有豬在笑。」','\
「風是往哪裡吹的?是明天!」','\
「只有做好被射殺覺悟的人，才有資格開槍。」','\
「戰爭跟下棋一樣，待在弱勢的一方總是比較有趣。」','\
「沒有可以完全治癒的傷，時間總能沖淡一切，卻沖不走東西。」','\
「With all this modern convenience at our fingertips.  Nothing can replace a little face time.」 \n(盡管指尖下的現代科技各種便利，面對面的交流扔然是無可替代的。)','\
「失去幻覺比找到真理，更能增長智慧。 (放下驕傲，便能自得)」','\
「問為一時之恥，不問為一世之恥。教為一時之優越感，不教為一世之優越感。」','\
「千策具備，能有其一為之所用，就已足以。」','\
「當你覺得沮喪時，用手拖著下巴就行了。這樣你的手會很高興能派上用場。」','\
「當思考漫畫中要一直出現更強的敵人時，就向思考宇宙盡頭般無止盡。而綜觀整個世界才發現，真正厲害的人是不會去做壞事的。會去做壞事的人具體來說就是擁有心靈弱點的人。而真正可怕的就是讓這些將心靈弱點化為攻擊的人。」','\
「當大家陷在泥淖的時候，總要有人仰望天空的星辰吧。」','\
「祭典的時光總是眨眼及逝，但只要連等待的日子都能樂於其中，祭典便會一直與我們同在。」','\
「採取不易理解的行為，對方就會擅自解讀且不會輕舉妄動。」','\
「真正重要的東西肉眼是看不到的。」','\
「黎明前的夜晚，總是最黑暗的。」','\
「三者三用。 (每個人都有不同的做事方式和思考方式。)」','\
「用兩隻手無法拿穩三個以上的杯子。」','\
「Gathering a large group of people to work together will create a great source of strength.」 \n(人多力量大，眾人拾柴火燄高。)」','\
「去擁有只屬於你的武器；用只適用於你的規則活下去；然後讓現實認可你的規則；這樣未來便會是你們的囊中之物。」','\
「找到自己想做的事情後，就算沒有任意門，你也早就可以到任何你想去的地方了。」','\
「有時候不認真打一場，是沒有辦法讓對方了解自己是有多認真看待這件事的。」','\
「所謂的學習，就是獲取使人生不走上歧途的知識。」','\
「With great power also comes great responsibility.」 \n(力量越大，責任越大。)','\
「跟氦氣一樣輕浮；但又如鋇餐一樣密不透光。」','\
「不把問題當問題，那問題就不是問題。」','\
「無法計算而剩下的答案，就是人類的感情。」','\
「如果只是在別無選擇的前提下選了一條路，那就不能算是自己的選擇吧。」','\
「回想過去會讓人後悔不已，展望未來又會抑鬱不安。因此我們要活在當下才能稱的上幸福。」','\
「諂媚時捨棄尊嚴全力諂媚，這就是我的尊嚴。」','\
「要讓一群人團結起來，需要的不是英明的領導，而是共同的敵人。」','\
「人心及森羅萬象都沒有明確的存在理由。」','\
「風雨同路不離棄 汝為鮮紅吾為黃。(選擇同路不相離棄，你中有我我中有你你我相依)」','\
「你不是一無所有，你還有病。」','\
「當你覺得自己醜、窮、一無是處時，別絕望，至少你的判斷無誤。」','\
「上帝的公平的，給了你一張醜臉，一定還會給你一個沒錢的家。」','\
「醜小鴨變天鵝不是因為努力，而是他爸媽本來就是天鵝。」','\
「你今天過的不錯吧?夢想又更遙遠了，對吧!」','\
「告訴別人天上有一百萬顆星星，他會相信。告訴別人這張椅子油漆未乾，他就非得親自摸摸看不可。」','\
「人生就像一場牌局，最重要的不是抓到一手好牌，而是如何打好一手爛牌。」','\
「人類最古老而強烈的情緒，便是恐懼；而最古老的最強烈的恐懼，便是對未知的恐懼。」','\
「人生七十古來稀。PV=nRT；MC^2=E」','\
「問世間情為何物；兩岸猿聲啼不住。」','\
「沒規劃的人生是拼圖；有規劃的人生是藍圖。」','\
「你可以笑的迎接挑戰，而不只是難過地放棄。」','\
「努力不一定會成功；但不努力一定很輕鬆。」','\
「人之命局，其實是心性反映；心性不變，命運則無從改起。」','\
「宇宙生而不公平是自然的，但人類創造的不公平是刻意的。」','\
「科學不會找到答案，只會給你答案，人們用科學來忘記一切是如此深不可測。」','\
「you wouldn’t like it, when you make me angry.」','\
「That you must stay who you are, Not a perfect soldier, but a good man.」 \n(永遠不要忘了初衷，寧為善人，不為完人。)','\
「If you are good at something, never do it for free.」 \n(假如你擅長某件事情，千萬不要免費幫人做','\
「戴手錶不是為了記得時間，是為了能偶爾能忘記時間。」','\
「Not a bad seed, just a bad influence.」 \n(本性不壞，但近墨者黑。)','\
「A house built on shifting sand will fall.」 \n(流沙之上；大廈必倒。)','\
「forgiveness takes more strength than anger.」 \n(原諒比憤怒更需要勇氣。)','\
「Nomatter what type of animal you are, change starts with you.」 \n(不管你的天性如何，改變都由你自己開始。)','\
「evil preys on the weak because it fears the strong.」 \n(邪惡侵襲弱者，因為它懼怕強者。)','\
「I have experience and patients, A man can do anything if he has those.」 \n(擁有經驗與耐心之人必將成功)','\
「Not everything dose, not everything has to.」 \n(凡事不一定合理，也沒必要合理。)','\
「A knight in shining armor, is a man who has truly never had his metal tested.」 \n(一個身披閃亮盔甲的騎士，代表著這個人從未經歷過真正的磨鍊。)','\
「The hammer shatters glass but hardens steel.」 \n(錘能碎玻璃；亦能鍛造鋼。)','\
「If you wish to see the truth, then hold no opinions.」 \n(想看見真理，就不要心存偏見。)','\
「The frog in the well never understands the sea.」 \n(井底之蛙 無法以蠡測海)','\
「不要逃避、失落、哭泣，只將肩上灰塵拍落，繼續往前走。」','\
「當我們打開電腦，就等於關上我們的門。我們只分享自己最好的一面，卻不帶真實的情感。」','\
「我總是已經重新開始，走在改變的路上。」','\
「若生命終歸殞落，吾欲其如煙火般燦爛。」','\
「跟人打架沒有那個本事，就不要做那個姿勢。」','\
「顧慮太多不會讓奇怪的事情變的合理安定，而是讓合理安定的事情變得更奇怪。」','\
「人類是一種面對未知黑暗和明令禁止下擁有無限勇氣和探索欲的生物。」','\
「有些人說:『憑著貧瘠的知識怎樣生活下去?』。我不明白他們想表達的意思，我一直都是憑著貧瘠的知識生活下去。這是很容易的事情，你是如何知道才是我想知道的。」','\
「現在教育只會生產考試機器，不會教你做人處事。」','\
「老子英雄兒好漢；老子足控兒癡漢。」','\
「一口餃子一口蒜；方便麵裡打個蛋。(形容很很班配的人事物)」','\
「常使英雄淚滿襟，騙盡豪傑賣人命。」','\
「當你把人生的選擇交給別人的瞬間，你就已經不是你人生中的主角了。」','\
「荒唐無謀任君笑，義氣撐起喧嘩道；阻礙之物拳擊碎，無路親手創道路；心中熔岩滾沸騰，超絕合謀闖片天。」','\
「挖山鑿洞就要挖穿天地，自掘墳墓就要一掘到底。(做事要全力以赴)」','\
「對賣奸狡的鼠輩仁慈就是對愚蠢的自己殘忍。」','\
「靠山山倒，靠人人老，靠腰吃不飽，靠自己最好。」','\
「打仗靠的是腦子，打架才是靠蠻力。」','\
「狼若回頭，必有緣由；不是報恩，就是報仇。」','\
「事不三思終有悔；人能百忍自無憂。」','\
「有錢能使鬼推磨；沒錢反被鬼折磨。」','\
「煙火之所以美麗是因為它的曇花一現，生命之所以可貴是因為它的短暫與終點。」','\
「屋漏偏逢連夜雨，排遺更遇沒廁紙。」','\
「哪一個老師機沒有經歷過新手上路？哪一個老變態沒有嘗試偷看內褲？哪一個老淫棍沒有感受過深根柢固？」','\
「我今天所說的每一句話都無法教會我任何事情，如果我想學點東西的話，我一定得聆聽。」','\
「乳不巨何以聚人心；腿不直何以值千金。」','\
「知道一點半點就認為自己懂了的人更讓人討厭，就跟給千葉縣民送其他地方的落花生一樣。」','\
「If you’re nothing without this suit,you shouldn’t have it.」\n(假如沒了它就會讓你一無事處，那你更不該擁有它。)','\
「不能解決問題時，只好解決發現問題的人。」','\
「不越級向前，就永遠都打不到怪。」','\
「紅茶的溫度，和女人的心，總是令人難以捉摸」','\
「男人到死前都是少年阿！」','\
「這群組，沒錯。一個自由開團任憑選擇的群組，就在每個人的眼前無限延伸。如果我們的揪團能夠引導你的方向的話，就去+1吧！在名為揪團文的文章之下！」','\
「人生不是不斷的選擇題，而是一題變數太多的申論題。」','\
「被人從後面指指點點又怎樣，這樣不就代表你走在人前嗎？」','\
「I like animals, because they are tasty」\n(我喜歡動物，因為他們很好吃)','\
「我們伸長了雙臂… 撥開雲層，直衝天際… 雖然搆到了月亮跟火星… 卻依然觸不到真相。」','\
「不要害怕遭到欺騙，因為這世界就建築在欺騙之上。」','\
「哀兵必勝，豬吃飽了等人家過年，是等不來獨立平等的。」','\
「不要讓一個人的外表影響你的判斷力，這是最重要的。感情會影響理智的。」','\
「When you have eliminated the impossibles，whatever remains，however improbable，it must be the truth.」 \n(當排除了所有其他的可能性，還剩一個時，不管有多麼的不可能，那都是真相。)','\
「在一個偉大的人看來，沒有微不足道的事。」','\
「如果一個女士迫切需要幫助，一個紳士不應過多考慮個人安危。」','\
「笨蛋雖笨，但還有更笨的人為他們鼓掌。」','\
「在這個世界上，你到底做了些什麼，這倒不關緊要。要緊的是，你如何能夠使人相信你做了些什麼。」','\
「一個人如果要想說明大自然，那麼，他的想像領域就必須像大自然一樣的廣闊。」','\
「真相啊真相，越接近事實的真相，越難以取信於人。」','\
「心在哪，財寶就在哪。」','\
「豔陽高照、練兵完畢。」','\
「即便眼前道路細若羊腸，對心存希望之人而言，也一定能化為一條康莊大道吧！」','\
「所謂的覺悟，不是抱定犧牲的決心，而是在黑暗的荒野中，劈出前進的道路！」','\
「失去的，永遠不會比你手上現在握住的多。」'];
          return rplyHead[Math.floor((Math.random() * (rplyHead.length)) + 0)] + '\n\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
		
       function randomLuck(TEXT) {
           let rplyArr = ['超吉','超級上吉','大吉','吉','中吉','小吉','吉','小吉','吉','吉','中吉','吉','中吉','吉','中吉','小吉','末吉','吉','中吉','小吉','末吉','中吉','小吉','小吉','吉','小吉','末吉','中吉','小吉','凶','小凶','沒凶','大凶','很凶'];
           return TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
       function randomKnowldge() {
	  let rplyHead = ['冷知識時間!','要講冷知識了嗎?','馬上來!'];
	  let rplyArr = ['\
【碳足跡】:\n\
	碳足跡或譯碳足印。指每個人、家庭或每家公司日常釋放的溫室氣體數量（以二氧化碳即CO2的影響為單位），\
 	用以衡量人類活動對環境的影響。單位通常為噸/ppm','\
【蘭徹斯特方程】:\n\
	全稱為蘭徹斯特戰鬥動態方程，也常稱為蘭徹斯特作戰模型。是二戰後形成的軍事運籌學、數理戰術學的重要作戰模擬理論。\
 	二戰初期，採用「蘭徹斯特方程」式作戰的同盟軍，被採用「閃電戰」理論的德軍奪走戰爭的主動權。最著名的應用就是硫磺島戰役。\
	當今美國陸軍使用的數字化模擬系統，仍以蘭徹斯特方程為主要理論對戰鬥力進行量化和計算。\n\
	《應用》:令A(S)為A國戰鬥人數、B(S)為B國戰鬥人數、且各單位戰鬥力一樣。\n\
	狀態一.狹路相逢：那就是蘭徹斯特線性法則，將雙方兵力對減A(S)-B(S)。\n\
	狀態二.開闊空間：那就是蘭徹斯特曲線法則，將雙方兵力平方後對減再開根號(√[A(S)2-B(S)2])\n\
	第二法則:近代集體戰鬥可以視為(武器性能)*(敵人數)^2。','\
【日內瓦公約】:\n\
	包括1949年8月12日在日內瓦(瑞士第二大城市)重新締結的四部基本的國際人道法，為國際法中的人道主義定下了標準。\
	它們主要有關戰爭受難者、戰俘和戰時平民的待遇。它們並不影響在1899年和1907年的《海牙公約》\
	覆蓋的武器的使用及1925年在《日內瓦協議》中在對氣體和生物武器的使用。\n\
	現在，《日內瓦公約及其附加議定書》指《1949年8月12日日內瓦四公約》及後來產生的它們的共同附加議定書','\
【上午茶】(elevenses):\n\
	或稱為forenoon tea，是早上工作了一會後喝茶、吃小食的時間，於11時左右進食。\
	上午茶和早午餐的分別在於前者是非正式的，而進食早午餐的人在之前尚未進食早餐。','\
【世界語】:\n\
	又稱『希望語』，因為Esperanto在該語言中的意思即『希望』，舊譯萬國新語、愛斯不難讀，是最為廣泛使用的人工語言。','\
【電磁裝甲】:\n\
	21世紀後出現的主力戰車領域防禦概念，目前處於研發階段，尚未有實際應用，可分為被動式電磁裝甲與主動式電磁裝甲兩種概念，\
	主要是透過電磁力增加裝甲的防護力削減敵方砲彈造成的殺傷。','\
【理髮師走馬燈】:\n\
	以「藍白紅」三色為主的走馬燈。二戰期間，法國一名愛國理髮師引導德軍去錯誤的方向，使得法軍能夠順利脫逃，\
	但他最後不幸被德軍殺死，自此法國人就用國旗顏色「藍紅白」的走馬燈，掛在他的店門口表示最高致意和紀念。','\
【來一場昆特牌吧】:\n\
	巫師3的梗。遊戲中有個小遊戲叫做昆特牌，設定上面任何時候都可以跟NPC玩昆特牌，因此導致在某些狀況下會變得很搞笑。\
	例如城堡失火人家在問你怎麼辦你回「不來場昆特牌嗎?」這樣，而且NPC性情馬上會180度大轉變說「村里沒人贏的了我!」。','\
【喬戈里峰】:\n\
	為塔吉克語「高大雄偉」之意，而K2是國際上最常見的名稱。為巴基斯坦的最高峰（印度方面則認為K2峰為其最高峰），\
	也是中國和世界的第二高峰，海拔8611公尺，僅次於聖母峰。1856年西方探險隊首次考察此地區時，\
	標出了喀喇崑崙山脈自西向東的5座主要山峰(k1-k5)，而喬戈里峰就是K2。登山活動的最佳時機應安排在5月至6月初進山，\
	其時河水雖漲，但不太嚴重；7月至9月，山頂氣溫稍高，好天氣持續時間較長，是登頂的好時間。死亡率約為20%。\n\
	<補充小知識> \n\
        K1-瑪夏布洛姆峰\n\
        K2-喬戈里峰\n\
        K3-布洛阿特峰(K2擴充) Broad peak\n\
        K4-加舒爾布魯木II峰\n\
        K5-加舒爾布魯木I峰\n\
        喀喇崑崙山脈:突厥語意為「黑色岩山」','\
【馬約卡島】(Mallorca):\n\
	是西班牙的巴利亞利群島的最大島嶼，位於西地中海，是著名的旅遊點和觀鳥去處。\
	世紀以瓷器著名（義大利花飾瓷器），多古羅馬、腓尼基和迦太基遺址。\
	貫通全島北部的Tramuntana山脈地區由於獨特的地形地貌被聯合國教科文組織於2011年評選為世界自然遺產。','\
【卡爾卡松】(Carcassonne):\n\
	是法國朗格多克-魯西永大區奧德省的一個鎮。卡爾卡松分為新舊兩個城區，分別坐落於奧德河東西兩側。\
	西部的新城區地勢較低且佔地較廣，而東部的老城區則有城牆圍繞。卡爾卡松的防禦工事最早可回溯到羅馬時代。\
	1659年，庇里牛斯條約將邊境的魯西永大省割讓給法國，卡爾卡松在戰略上的重要性才逐漸消失，羊毛紡織業成為主要的經濟活動。\
	早在羅馬時期，老城區於1853年由建築師Eugène Viollet-le-Duc開始修復，並於1997年納入聯合國教科文組織的世界文化遺產。\
	今日的卡爾卡松最主要的經濟來源為觀光業，除了老城區，米迪運河也吸引許多觀光客。\
	在觀光業之外，卡爾卡松的經濟活動還包括釀酒、紡織、製鞋等行業。','\
【列支敦斯登公國】:\n\
	歐洲中部的內陸小國（聯合國區域集團定義為西歐國家），夾在瑞士與奧地利兩國間，為世界上僅有的兩個雙重內陸國之一（另一個為烏茲別克）。\
	同時該國也是唯一一個官方語言是德語但與德國沒有交界的國家。\
	這個君主立憲制的山區小國，雖然土地狹小兼人口稀少，但卻擁有異常高的國民所得水準，其人均國內生產總值高達60,000歐元，\
	是一個以阿爾卑斯山美麗風光、避稅天堂與高生活水準而著稱的富裕小國。','\
【全能悖論】(omnipotence paradox):\n\
	該悖論的內容是：如果任一個體是「全能」的話，那麼他就一定能夠制訂出一個他不能履行的工作，如此他就不會是全能的；\
	反之，若一個「全能」的個體不能夠制訂出一個他不能履行的工作，如此他也不會是全能的。\
	因此，無論他能否制訂這項工作，他也不會是全能的。但偶發全能可以避開此悖論。但是偶發全能是否能算全能就又是另一則辯思了。','\
【墨菲定律】(Murphy’s law):\n\
	科學方面具體內容是「凡是可能出錯的事必定會出錯」，指的是任何一個事件，只要具有大於零的機率，就不能夠假設它不會發生。\
	在文化方面，它代表一種近似反諷的幽默，當作對日常生活中不滿的排解。','\
【傑羅尼莫】(Geronimo):\n\
	是印第安人中的一名傳奇戰士及阿帕契族的酋長，出生於亞利桑那州的希拉河，曾帶領原住民反抗美國及墨西哥，被印地安人視為民族英雄，\
	後來於1886年歸順美國。後來引伸為一種精神喊話(類似德瑪西亞)。','\
【游敘弗倫困境】:\n\
	又稱尤希弗羅困境，源自柏拉圖的《游敘弗倫篇》。中蘇格拉底與尤西弗羅的對話，可簡述如下：\n\
	1.好的事物之所以好是由於上帝指定它們為好。(上帝說好所以好)\n\
	2.上帝規定某些事物為好的是由於那些事物本身就是好的。(因為好所以上帝說好)\n\
	如果取1，那麼好的行為也可以是壞的，只要上帝如此指定即可。但這就出現矛盾了。\n\
	如果取2，那麼上帝並未創造好。因而，上帝的存在沒有意義。','\
【約翰。彌爾】:\n\
	捍衛言論自由的英國人。認為言論自由主要目的是為了更正確的得到知識。\
	大家有講話的自由正確的說法就會被傳播，錯誤的說法會有更高機會被修正，最後大家都會得到正確的知識，就跟wiki一樣。','\
【反應裝甲】:\n\
	是一種主要通過爆炸來破壞射中炮彈以降低其攻擊力的裝備。','\
【波多黎各】(puerto rico):\n\
	是美國在加勒比海地區的一個自由邦（境外領土），首府為聖胡安。\
	在西班牙語裡波多黎各的意思是「富裕之港」。波多黎各是大安的列斯群島四個大島中最小的一個島。','\
【羅蕾萊】(Loreley或Lorelei):\n\
	是一座萊茵河中游東岸高132米的礁石，坐落在德國萊茵蘭-普法爾茨州境內。\
	羅蕾萊礁石處的萊茵河深25米，卻只有113米寬，是萊茵河最深和最窄的河段，險峻的山岩和湍急的河流曾使得很多船隻在這裡發生事故遇難，\
	如今仍有信號燈指引過往船隻注意安全。傳說在羅蕾萊山頂上有位美若天仙的女妖羅蕾萊，用動人的美妙歌聲誘惑著行經的船隻使之遇難。\n\
	#PS:與賽蓮是不同傳說','\
【馬格努斯效應】:\n\
	是一個流體力學當中的現像，是一個在流體中轉動的物體(例如圓柱體)受到的力。應用非常多，尤其在球類運動方面。','\
【創傷後心理壓力緊張症候群】(PTSD):\n\
	post-traumatic stress disorder，又譯重大打擊後遺症..等。指人在遭遇或對抗重大壓力後，\
	其心理狀態產生失調之後遺症。這些經驗包括生命遭到威脅、嚴重物理性傷害、身體或心靈上的脅迫。\
	有時候被稱之為創傷後壓力反應（post-traumatic stress reaction）以強調這個現象乃經驗創傷後所產生之合理結果，\
	而非病患心理狀態原本就有問題。','\
【諸神的黃昏】(Ragnarök):\n\
	是北歐神話預言中的一連串巨大劫難，包括造成許多重要神祇死亡的大戰（奧丁、索爾、弗雷、海姆達爾、火巨人、霜巨人、洛基等），\
	無數的自然浩劫，之後整個世界沉沒在水底。然而最終世界復甦了，存活的神與兩名人類重新建立了新世界。\
	這是北歐神話極重要的一部份，也是許多學術研討與理論的主題。','\
【馬上】:\n\
	在古代“馬”才是最快的交通工具。在“馬上”就代表做好了準備，所以才有了馬上這詞的由來。','\
【富不過三代】:\n\
	來源是宋朝，「富」指的是當官的富貴而非真實財富。在宋朝老爸如果\
	是一品官兒子不通過考試可以直上四品官(降三品)，孫子可以從七品官。當時最低為九品\
	官，故官位如果子孫都不靠考試上去的話的確是富不過三代。','\
【聯誼】:\n\
	1.)就是很多男女集合起來，朝著同一個目標互相幫助，偶爾在碰撞中互相提升的充滿青春的活動。\n\
	2.)就是為了讓互相不認識內心騷動的男女碰面而把它們聚集起來，互相加深好感的低俗活動。','\
【彭巴效應】:\n\
	指在同等質量和同等冷卻環境下，溫度略高的液體比溫度略低的液體先結冰的現象，但該現象目前還未有任何定論。','\
【花衣魔笛手】(Rattenfänger):\n\
	又稱「哈梅爾的吹笛人」，德國的民間故事。研究者相信故事源於一件真實的歷史事件，但究竟是那一件，則眾說紛紜。\
	一說那些孩子代表了當時到東歐殖民的年輕人；一說那些孩童代表了1212年的兒童十字軍。','\
【熱寂】(Heat Death):\n\
	是猜想宇宙終極命運的一種假說。根據熱力學第二定律，作為一個「孤立」的系統，宇宙的熵會隨著時間的流易而增加，\
	由有序向無序，當宇宙的熵達到最大值時，宇宙中的其他有效能量已經全數轉化為熱能，所有物質溫度達到熱平衡。\
	這種狀態稱為熱寂。這樣的宇宙中再也沒有任何可以維持運動或是生命的能量存在。','\
【溫度的極限】:\n\
	低溫為0K，高溫熱力學上無極限(因為你可以一直給某物體能量)。\
	但因為溫度越高波長會越短，當溫度達1.41*10^32K時波長將小於物理極限的普朗克長度(1.61*10^-23nm)導致物理學開始不適用，\
	故1.41*10^32K便是「溫度」這個概念的極限。','\
【德雷珀點】(Draper point):\n\
	大約800K(798K、525度)，在此溫度下，幾乎所有物體都會開始放出暗紅色光。','\
【巨球會】(BIG GLOBE):\n\
	一個架空組織，目的在騙世人地球是圓的。\n\
	1.重力問題:地球其實是整體向上以9.81m/s^2在移動故會感到重力。\n\
	2.日蝕、星象、太陽問題:指要重新定義各自的距離以即移動方式就可以了。\n\
	3.宇宙觀察:可造假，而且也可以說是"太慢"導致(儀器接近光速下地球的確會是平的)。','\
【達克效應】(D-K effect):\n\
	全稱為鄧寧-克魯格效應（英語：Dunning–Kruger effect），是一種認知偏差現象，未經訓練的個體會感到一種虛幻的自我優越感，\
	錯誤地認為自己比大多數人都優秀。','\
【海軍咖哩】:\n\
	是一種起源於大日本帝國海軍的咖喱及咖喱飯。其特徴是在咖喱內加上炒過的麵粉製成餬來使用。\
	當時，有很多因病而死的大日本帝國海軍軍人都是患上腳氣病，其原因是在軍中的糧食多以白米為主食而導致營養不衡。\
	海軍咖喱與印度風味的咖哩完全不同。除了加上小麥粉製成糊以外亦加入其他配料，而糊狀的咖喱就算在搖動的船上也不須擔心會濺出食具。\
	現在的海上自衛隊所有部署人員習慣於毎週五吃咖喱飯。長時間在海上執勤會令人失去對天數的感覺，定期吃咖喱飯便可讓士兵有規律性地悉知週數。','\
【米蘭達警告】:\n\
	在訊問刑事案件嫌疑人之前，必須對其明白無誤的告知其有權援引憲法第五修正案，即刑事案件嫌疑犯有「不被強迫自証其罪的特權」，\
	而行使沉默權和要求得到律師協助的權利。內文如下:\n\
		你有權保持沉默，否則你所說的一切，都能夠、而且將會在法庭上作為指控你的不利證據；\
		審問之前，你有權與律師談話，得到律師的幫助和建議；你受審問時你有權讓律師在場；\
		如果你想聘請律師但卻負擔不起，法庭將為你指定一位律師。','\
【學者症候群】:\n\
	是指在某種藝術或學術上超乎常人的能力。具有這種能力的人，其天賦有多種不同形式，有演奏樂器、繪畫、記憶、計算及日曆運算能力。\
	10%的自閉症兒童會表現出學者症候群的特徵。','\
【高德納箭號表示法】:\n\
	是種用來表示很大的整數的方法，由高德納於1976年設計。它的概念來自冪是重複的乘法，乘法是重複的加法。','\
【葛立恆數】:\n\
	由葛立恆提出，曾經被視為在正式數學證明中出現過最大的數，後來則被TREE(3)取代。它大得連高德納箭號表示法也難以簡單表示。','\
【驢橋定理】:\n\
	也稱為等腰三角形定理。指等腰三角形二腰對應的二底角相等。有關其名稱驢橋定理的由來有二種：一種是幾何原本中的示意圖即為一座橋，\
	另外一種比較廣為大家接受，是指幾何原本中第一個對於讀者智力的測試，並且做為往後續更困難命題的橋樑。現在也多用做於隱喻。\n\
	(十四世紀作家理察·昂格維爾在《書之愛》中將驢橋定理比擬為沒有梯子輔助的陡峭山坡，感歎多少可能成為幾何學家的人因此而回頭)','\
【驢橋】(Eselsbrücke):\n\
	德文的「der Esel」是「驢子」的意思；而，德語的「die Brücke」是「橋樑」的意思。\
	一般我們對於der Esel(驢子)的印象，都是覺得牠很呆很笨。我們都認為，驢子是一種不怎麼聰明的動物。\
	如果我們的記憶，就好像驢子一樣笨拙，記事情怎麼也記不起來的話，那我們就要把幫我們像驢子一樣的記憶力，與想要記起來的事情間搭一條橋。\
	這就是「die Eselsbrücke」這個詞的由來。','\
【拉布列康】(Leprechaun):\n\
	矮精靈或矮妖，共通特徵就是紅色鬍子和整齊的綠衣綠帽。矮精靈非常喜歡收集黃金，並把黃金埋藏在彩虹的盡頭。\
	通常認為酢漿草和穿綠色衣物可以吸引矮精靈。如果被人抓到，矮妖會用自己的魔法實現人的三個願望來換取自由。','\
【逆火效應】:\n\
	當你的信念被對立的證據挑戰時，你的信念反而變得更強。','\
【石川五右衛門】:\n\
	戰國時代的義賊，由於其忍術高明，出入守備森嚴的大名官邸如入無人之境，因此聲名大噪。\
	因為偷走豐臣秀吉收藏的一件名貴茶器「千鳥香爐」時失手被前田玄以拘捕，在三條河原被豐臣秀吉處以非常殘忍的釜煎之刑。','\
【老鞋】(Savate):\n\
	一種源自於法國的踢腿術。法國踢腿術是唯一一種准許鬥士穿鞋的踢擊武術。','\
【卡利】:Kali，一種菲律賓的武術，主要是用棍。','\
【卡波耶拉】(Capoeira):\n\
	或稱卡波衛勒，香港亦有譯作巴西戰舞，是一種16世紀時由巴西的非裔移民所發展出，介於藝術與武術之間的獨特舞蹈。\
	雖然其伴隨音樂節奏以通常為兩人一組的方式而起舞與一般舞蹈雷同，但是舞蹈動作中結合了大量側空翻、迴旋踢、倒立等武術動作，\
	卻被認為有極濃厚的戰鬥用途。雖然已經存在數百年，但一直到1930年代以後卡波耶拉舞才正式地被允許在民間習授流傳，\
	由於這種舞蹈起源於非洲卻又融入了相當程度巴西本土原住民的文化特性，因此被認為是巴西最重要的本土文化象徵與國技之一。','\
【瑞利散射】:\n\
	在大氣中，太陽光的瑞利散射會導致瀰漫天空輻射，這也是天空之所以為藍色和太陽之所以偏黃色的原因。當太陽光經過大氣層時，\
	與空氣分子（其半徑遠小於可見光的波長）發生瑞利散射，因為藍光比紅光波長短，瑞利散射發生得比較激烈，\
	被散射的藍光布滿了整個天空而使天空呈現藍色，但是太陽本身及其附近呈現白色或黃色，是因為此時你看到更多的是直射光而不是散射光，\
	所以日光的顏色（白色）基本未改變。如果是在月球上，因為沒有大氣層，天空即使在白天也是黑的。','\
【撞球】:\n\
	起源地不確定，但起源時間大致公認為十四、十五世紀之間。\n\
	  1.14.1à要先決定袋&球，失誤則換手。積分制。\n\
	  2.8號球à大於8者叫”大花”，小於者稱”小花”。第一桿進球決定要大小花(對手只能打另外一種)，最後把8號打入袋者贏。\n\
	  3.9號球à用1-9球來打(9擺中間，菱形)母球要先碰到最小球，打進9號者勝。','\
【馬拉喀什】:\n\
	柏柏爾語，意思是「上帝的故鄉」。位於摩洛哥(在非洲西北部)西南部，有「南方的珍珠」之稱。有摩洛哥最大的柏柏爾人市場（露天市場）。\
	馬拉喀什的皮革業很有名。','\
【五街道】:\n\
	是日本江戶時代以江戶（今 東京都）為起點的五條陸上交通要道，亦是當時代表全日本的總稱。這五街道分別如下：\n\
	為東海道(1624年完成)\n\
	日光街道(1636年完成)\n\
	奧州街道(1646年完成)\n\
	中山道(1694年完成)\n\
	甲州街道(1772年完成)','\
【東海道】(1624完工):\n\
	地理位置約在日本東南方，雖為”海”道，但此道路其實海景並不多。以日本橋為起點，曾經是重要的貿易路線。現被規劃為國道一號。\
	會叫海道是因為沿著江戶時代五街道鋪設而來的(當中有區地叫”東海”)。','\
【源平合戰】(1180-1185):\n\
	源氏和平氏兩大武士家族為了爭奪權力而展開的一系列戰爭的總稱。\
	關東興兵(源義經與兄長相會)→平清盛病故→一之谷之戰→屋島之戰(平家滅亡)','\
【魯米諾】(Luminol):\n\
  	或稱發光氨、光敏靈，是通用的發光化學試劑，與適當的氧化劑混合時會發出引人注目的藍色光。\
	它是白色至淡黃色的晶體，可溶於水和大多數有機極性溶劑。\
	法醫學上使用魯米諾來檢驗犯罪現場含有的痕量血跡，生物學上則使用魯米諾來檢測細胞中的銅、鐵及氰化物的存在。\
	3-氨基鄰苯二甲醯肼，即是魯米諾。','\
【刻耳柏洛斯】(Kerberos):\n\
  	字面意思為「黑暗中的惡魔」希臘神話中看守冥界入口的惡犬。\
	赫西俄德在《神譜》中說此犬有50個頭，而後來的一些藝術作品則大多表現它有3個頭（可能是為了便於雕刻所致）；\
	因此在漢語語境裡（尤其是通俗文化中）也常稱這怪物為地獄三頭犬。','\
【枯山水】:\n\
  	是日本式園林的一種，但也是日本畫的一種形式。一般是指由細沙碎石鋪地，再加上一些疊放有致的石組所構成的縮微式園林景觀，\
	偶爾也包含苔蘚、草坪或其他自然元素。枯山水並沒有水景，其中的「水」通常由砂石表現，而「山」通常用石塊表現。\
	有時也會在沙子的表面畫上紋路來表現水的流動。枯山水字面上的意思為「乾枯的景觀」或「乾枯的山與水」，\
	通常出現在室町時代、桃山時代以及江戶時代的庭園中。枯山水常被認為是日本僧侶用於冥想的輔助工具，所以幾乎不使用開花植物，\
	這些靜止不變的元素被認為具有使人寧靜的效果。\n\
	#PS:枯山水的雙璧：大德寺和龍安寺。','\
【路德維希二世 (巴伐利亞的國王)】:\n\
	在德國巴伐利亞的歷史中一直被認為是最狂熱的城堡修建者，特別由於他對新天鵝堡的修建，在民間被稱為「童話國王」。','\
【動物賣淫】:\n\
	是指動物為求換取食物或者巢穴材料等原因而向同類異性出賣肉體的行為。目前，生物學家已知阿德利企鵝、黑猩猩屬和食蟹獼猴也有賣淫。','\
【九連環】:\n\
	是一種源於中國的傳統智力遊戲，韓國稱為留客珠、留客環，這種古老玩具以往在民間極為普及。\
	它包含著九個相同的圓環及一把「劍」，目的是把九個圓環全套上或卸下。不少人還認為能解此環可訓練腦筋，甚至代表聰明的象徵。','\
【瑪麗·賽勒斯特號】:\n\
	是一艘前桅橫帆雙桅船。它曾經於1872年在大西洋被人發現全速朝向直布羅陀海峽航行，不過在船上並沒有發現任何人。\
	這些船員的下落衍生出許多猜測，包括酒精中毒與海底地震等推測。瑪麗·賽勒斯特號經常被認為是鬼船的原型。\
	它建造於1861年的加拿大新斯科細亞坎伯蘭（Cumberland）地區，也是這個地區所建造的首艘船隻。\
	當時它被命名為亞馬遜號。亞馬遜號的第一任船長在處女航開始不久之後就去世了，而且它也曾經在英吉利海峽中與其他船隻相互碰撞過。\
	儘管如此，在這次糟糕的處女航之後，在新斯科細亞船主擁有之下，亞馬遜號也度過了平靜的幾年。\
	不過後來它在1867年因為遇到風暴而擱淺在格萊斯貝（Glace Bay），隨後它在1869年被賣給美國人，\
	他們對亞馬遜號進行重大的修改之後，被重新命名為瑪麗·賽勒斯特號。','\
【大象岩】:\n\
	位於冰島南部區韋斯特曼納群島赫馬島上的懸崖，有個跟大象形狀的海蝕洞。海賊王中的"佐烏"便是由此發想而來。','\
【七彩之城-拉波卡】:\n\
	雙人探戈的發源地。位於阿根廷的布宜諾斯艾利斯(布宜艾利=空氣新鮮)東南邊的一個區域，\
	該區都是貨櫃屋且被上滿許多顏色的油漆故被稱作七彩之城，曾經被西班牙統治過。','\
【彩色島-布拉諾島】:\n\
	位於義大利的威尼斯潟湖中面積第10大的島嶼，以紡織為聞名。亦被稱作「漁夫島」、「蕾絲島」。\
	該處的房子每棟顏色都不一樣且遵循特定系統(要跟政府申請)。\n\
	<起始由來>:\n\
	中古世紀時，這裡曾經流行著鼠疫，被傳染的居民們會利用熟石灰抹在房子內外來消毒，而熟石灰的顏色是白色，所以如果某家的房子是白色，\
	表示住在裡面的人得了鼠疫，沒有得病的人為了不讓自己被誤會，便在房子外頭漆上鮮豔的顏色表明自己的清白。\n\
	<不同顏色的理由>(但此說並未有根據):\n\
	在很久很久以前當地居民以捕魚為生，漁夫們為自己的房子漆上特定的顏色，這樣當他們去捕魚時，就可以一眼辨認出自己離家多遠，\
	也可以在黑夜中迅速認出自己的房子。','\
【花牌】:\n\
	紙牌遊戲是在安土桃山時代(又稱織豐時代，1500-1600年左右)，由當時葡萄牙的48張遊戲牌流傳到日本。\
	葡萄牙語紙牌稱為「carta」，被日本寫為「かるた」（亦寫做歌留多、骨牌）。\
	當時每次頒布政令禁止紙牌遊戲，民間就會變更牌面設計以避禁令。在不斷重覆過程下，產生了各式各樣的牌面設計，花札也在變化的當中誕生。\
	因為賭博的閉鎖性與當時物品流通的實況，在各地產生了各式各樣的地區規則，這些紙牌又稱為「地方札」。\
	傳說花札的誕生是因為田沼意次的禁令。自此之後12張×4組的牌因隱藏數字還有組別而改為4張×12個月份。\
	從江戶時代進入明治時代(1868年)後，雖然花札解禁，但明治政府以「骨牌稅」寓禁於徵，於是地方札消失。\n\
	<花牌月份與意義與其他知識>:\n\
	12個月分別為松梅櫻藤菖牡荻芒菊楓柳桐。\n\
	青短為6、9、10月，因為颱風比較多青色被日本視為不吉祥的象徵。\n\
	#PS:任天堂公司在跨入電子遊戲產業之前就是靠製造花札起家。','\
【粉紅之城-齋浦爾】:\n\
	是印度拉賈斯坦邦(位於印度西北方)的首府，1727年始建，市街按棋盤方格式設計，高大、古老粉紅色的建築表現出印度建築藝術的優美，\
	有「粉紅色城市」之稱。都是粉紅色的原因是當時的公主薩瓦爾．羅摩．辛格為了歡迎威爾士王子愛德華七世而下令將所有房子面相街道的一面都漆成粉紅色。','\
【伊斯坦堡】:\n\
	是土耳其最大城市，亦是該國的經濟、文化和歷史中心。坐落於土耳其西北部的博斯普魯斯海峽之上，位於馬爾馬拉海和黑海之間，橫跨歐亞大陸。\n\
	B.C660，該市建立於薩拉基里奧角，名拜占庭，並在此後逐漸發展為歷史上最為重要的城市之一。A.C330該市重建為君士坦丁堡或新羅馬。\
	並在此後的近十六個世紀內先後成為羅馬帝國和拜占庭帝國（330年–1204年及1261年–1453年）、拉丁帝國（1204年–1261年）\
	和鄂圖曼帝國（1453年–1922年）的帝國首都。在羅馬和拜占庭時代，它對基督教的發展起到了重要的作用，而在1453年鄂圖曼帝國征服該城之後，\
	它成為了伊斯蘭教的中心和鄂圖曼帝國哈里發的駐地。伊斯坦堡位於絲綢之路之上，歐洲和中東的鐵路網絡之間，\
	亦是黑海和地中海間海路的必經之地，戰略地位重要。','\
【聖彼得堡】:\n\
	是俄羅斯的聯邦直轄市，也是列寧格勒州的首府，位於俄羅斯西北部，波羅的海沿岸。\
	在沙俄時期曾為俄羅斯首都，1914年－1924年間更名為彼得格勒（Петрогра́д），1924年－1991年間更名為列寧格勒（Ленингра́д），\
	現今為俄羅斯第二大城市，僅次於莫斯科，也是第四大俄羅斯聯邦主體。聖彼得堡是歐洲主要文化中心之一，也是俄羅斯在波羅的海的重要港口。\
	聖彼得堡經常被稱為俄羅斯最西方化的城市，也是世界上人口超過百萬的城市中位置最北的一個。\
	聖彼得堡也是冬宮的所在地，它是世界最大的藝術博物館之一。','\
【卡納克巨石林】:\n\
	又名卡奈克巨石林 或 卡爾納克巨石林，位於法國西北部布列塔尼卡奈克村周邊的非常緊密的石器時代遺址的總稱，\
	當地有3000多塊史前布列塔尼凱爾特人居民樹立的石頭，這些石頭均產於本地，是世界上最大的史前石陣。\
	當地的傳說說這些排列筆直的石陣是被梅林石化了的羅馬軍團，是亞瑟王傳說的一個當地版本之一。\
	一些石陣在過去的世紀中被破壞，對現存的石陣的管理在當地依然是一個爭議內容。','\
【底比斯】(埃及):\n\
	上埃及(尼羅河上游(南方))古城，瀕臨尼羅河，位於今埃及中部。作為皇室居地和宗教膜拜的宗教中心，它從公元前22世紀中期到公元前18世紀曾繁榮一時。\
	它的建築遺跡包括許多輝煌的廟宇和帝王谷附近的法老陵墓。在古王國時期，底比斯只是一個寂寂無名的小型商道中心。\
	法老孟蘇好代布決定把首都定在底比斯，並在底比斯為「阿蒙神」大興土木，興建很多神廟，底比斯從此成為古埃及的聖地。\n\
	<中王國時期後期>\n\
	埃及遭到了喜克索斯人的入侵，底比斯王朝呈現偏安，這是底比斯的首次衰落。\n\
	<新王國時期>\n\
	底比斯再次作為埃及首都和的宗教中心。在東底比斯，法老為阿蒙神和他們自己建立很多壯觀的神廟和宮殿。\
	與此同時，法老亦在西底比斯建設了一系列華麗的陵墓，當中最為著名的是拉美西斯二世墓和圖坦卡蒙墓。\n\
	<第二十一王朝以後(後期王朝前)>\n\
	埃及統治階及內部衝突不斷力劇，而且受到來自地中海的「海上民族」- 腓尼基的不斷入侵，新王國開始衰落，底比斯亦隨之衰落。\
	大約在公元前663年，亞述軍隊入侵埃及，並火燒及洗劫了底比斯.公元前1世紀80年代，以底比斯為中心掀起了持續三年的埃及人民起義，\
	起義遭到殘酷鎮壓，底比斯幾乎和義軍一起被毀滅。\n\
	最後於公元前27年，底比斯被一場大地震徹底摧毀。','\
【安慰劑效應】(placebo effect):\n\
	又名偽藥效應、假藥效應、代設劑效應；指病人雖然獲得無效的治療，但卻「預料」或「相信」治療有效，而讓病患症狀得到舒緩的現象。\
	於1955年由畢闕博士（Henry K. Beecher）提出，亦理解為「非特定效應」（non-specific effects）或受試者期望效應（subject-expectancy effect）。\
	一個性質完全相反的效應亦同時存在——反安慰劑效應（Nocebo effect）。為了避免安慰劑效應(或反安慰劑)，有時候需要用單盲、雙盲來降低。','\
【齊訥卡片】(Zener card):\n\
	是用來進行超感官知覺實驗的卡片，通常是透視。1920發明。\
	是由超心理學家約瑟夫·邦克斯·萊因發明來做為簡易統計測量且無歧義的科學方法以測試超感官知覺。萊因是以其同僚－知覺心理學家卡爾·齊訥的名字來為此命名。\
	齊訥選了五種圖案做為卡片的樣式。當齊訥卡片在1920年代剛發明的時候，它是用手來洗牌的，但之後改以機器來洗牌。\
	一組卡片有25張牌，每個圖案各五張。這五種圖案分別有圓圈、四端等長之希臘十字、五芒的星形、正方形和三條垂直的波浪線。','\
【風茄】:\n\
	又名毒參茄，亦音譯作曼德拉草。在《哈利波特-消失的密室》中亦被稱為魔蘋果。\
	是一種屬於茄科茄參屬的植物（含致命的茄屬植物和天仙子）。由於其奇特的分歧使其外型類似男人和女人。\
	其根部長期用於巫術儀式，包括今天的威卡教。(盛行於英、美國)','\
【威卡教】:\n\
	一種在英國和美國盛行的、新興的、多神論的、以巫術為基礎的宗教。\
	威卡教的信徒也自稱自己的宗教為「老宗教」或者「老路」來表示威卡教的根源在於歐洲的魔術和原始宗教。\
	也有些人將威卡教的儀式與巫覡宗敎的儀式等同起來，將威卡教看作是巫覡宗敎的一種。從1994年開始美國承認威卡教為一種宗教並允許進行靈氣治療。','\
【社交恐懼症】(sociophobia):\n\
	又名社交焦慮症（social anxiety），是一種對任何社交或公開場合感到強烈恐懼或憂慮的精神疾病。','\
【第34條法則】(rule 34):\n\
	在互聯網時代，一切你能想像的事物，都可以用圖來使之色情化。','\
【長尾理論】(Zipf’s Law):\n\
	形容第一個產品第一個效益是1第二個只有1/2第三個只有1/3(1/n 數列)。\
	80%的業績來自20%的產品，後面80%產品則稱為"長尾"，但1/n的數列不收斂顧還是有其效益在。\n\
	但長尾定論卻認為網際網路的崛起已打破這項鐵律，廣泛的銷售層面讓98%的產品都有機會銷售，\
	而不再只依賴20%的主力產品，最明顯的例子便是"客製化"。\n\
	#PS:網路價值大約正比於N log(N)','\
【沉默的螺旋】:\n\
	是一個政治學和大眾傳播理論，由伊莉莎白·諾爾-紐曼於1974年在發表於《傳播學刊》上的《沉默的螺旋：一種大眾觀點理論》一文中最早提出。\n\
	主要概念是：\n\
	如果人們覺得自己的觀點是公眾中的少數派，他們將不願意傳播自己的看法；而如果他們覺得自己的看法與多數人一致，他們會勇敢的說出來。\
	而且媒體通常會關注多數派的觀點，輕視少數派的觀點。於是少數派的聲音越來越小，多數派的聲音越來越大，形成一種螺旋式上升的模式。\n\
	整體流程大概如下:\n\
	社群會去孤立意見不一致者-->對孤立的恐懼導致個人追隨風向-->群眾的行為進而受到風向的影響-->\
	個人培養出猜測風向的假能力-->引發盲目群眾現象。\n\
	#PS:但堅持立場者有時可以逆轉風向。','\
【火場迷失】:\n\
	禁忌:\n\
	1.不要躲浴室\n\
	2.不要往上跑\n\
	3.不用濕毛巾\n\
	正確做法:小火快逃，濃煙關門。','\
【否決先生】:\n\
	在聯合國成立早期，蘇聯外交人民委員及後來的外交部長維亞切斯拉夫·米哈伊洛維奇·莫洛托夫曾多次投反對票，故被稱為「否決先生」。\
	事實上，歷史上近半數的否決權的是由蘇聯行使的。在首10年就行使了79次。','\
【烏尤尼鹽沼】:\n\
	位於玻利維亞(南美洲)西南部的烏尤尼小鎮附近，是世界最大的鹽沼。烏尤尼鹽沼是在安地斯山脈隆起過程中所形成的。\
	安地斯山脈是屬於較新形成的山脈，在經歷一些劇烈的地理活動而從海底隆起後，其間形成了許多裝滿海水的湖泊。\
	約在4萬年前，烏尤尼鹽沼所處的區域為一個名為明清湖（Lake Minchin）的史前巨湖，之後逐漸乾涸，\
	形成兩個大鹹水湖：普波湖（Poopó Lake）與烏魯烏魯湖（Uru Uru Lake），以及兩個大鹽沼：烏尤尼鹽沼與科伊帕薩鹽沼（Salar de Coipasa）。','\
【阿卡貝拉】(a cappella):\n\
	又稱「無伴奏合唱」，義大利語原意為"按教堂風格"直譯為英語是in chapel(在聖堂)。\
	即純人聲合唱，常見於15和16世紀的教堂音樂，亦有組合利用這種形式來重新編排流行音樂。\n\
	#PS無伴奏合唱"並非真的無伴奏，它只是"無樂器"或"無背景音樂"。','\
【皮特肯群島(皮特凱恩群島)】:\n\
	是一個由4座島嶼 組成的南太平洋群島，其中只有第二大島嶼皮特肯島有人定居。該群島也是英國在太平洋地區所剩下的最後一塊海外領地。\
	小島之所以出名，是因為島上居民都是英國皇家海軍邦蒂號（HMS Bounty）上的叛變船員和大溪地人的後裔，這段具有傳奇性的歷史已經被寫成小說，\
	並被拍成多部電影。此外該島也可能是世界上居住人口最少的地區，大約只有48人（2015更新為56人）還居住在此。並在2015年合法同性戀婚姻。','\
【第四面牆】:\n\
	是一面在傳統三壁鏡框式舞台中虛構的「牆」，在觀眾跟舞台之間的牆，因此演員不能跟台下觀眾互動(或不應該互動)。\
	透過鏡頭，以及在影片、戲劇或電視節目中對觀眾直接說話或致意，這被稱為「打破第四面牆」。','\
【尼克。福瑞】:\n\
	漫威電影中神盾局的局長，由山繆·傑克森所演。之所以找山繆·傑克森原因是在終極漫威世界中的尼克福瑞本身就是以山繆·傑克森為雛形。','\
【雪的顏色】:\n\
	雪花如同冰塊皆為透明，但落在地上的雪卻呈現白色。這是因為雪(以及冰塊)不是完全透明，光線打到雪上雖然會穿透但不一定直線跑出，\
	會幾經反射離開物體，因為所有光線都不吸收，故到眼睛就會呈現白色(所有顏色)。這也是為甚麼一堆冰塊再一起會呈現白色而非透明。','\
【查帕拉爾鳥】:\n\
	一種鳥類，美國華納公司推出的『Looney Tunes』系列動畫片裡「BB鳥」的雛形。','\
【遊戲的定義】:\n\
	互動遊玩(Interactive Play)的狀況下，根據有無規則、目標可分為:\n\
		一.無:玩具(Toy) 或 二.有:挑戰(Challenge)\n\
	而在挑戰(Challenge)的狀況下根據有無其他玩家或代理人可分為:\n\
		一.無:謎題(Puzzle) 或 二.有:衝突(Conflict)\n\
	而在衝突(Conflict)的狀況下根據有無可以干擾別人的因素可分為:\n\
		一.無:競賽(Competition) 或 二.有:遊戲(Game)\n\
	#PS:這只是一種分法，並非絕對。','\
【自轉】:\n\
	如果全世界的人一起趴在地上，理論上來說會讓旋轉週期變快並令一日變短。其原因是因為類似溜冰選手會令自己所有質量接近重心導致轉速提升一樣。\
	比較明顯的例子是地震，地震如果導致地球質量接近地心的話，會有一樣的效果。','\
【斯德哥爾摩 & 斯德哥爾摩症候群】:\n\
	斯德哥爾摩症候群又稱為人質情結、人質症候群，是一種心理學現象，是指犯罪的被害者對於加害者產生情感、同情加害者,認同加害者的某些觀點和想法，\
	甚至反過來幫助加害者的一種情結。根據弗洛伊德的理論 ，斯德哥爾摩症候群是一種自我防衛機制，當受害者相信加害者的想法時，\
	他們會覺得自己不再受到威脅。斯德哥爾摩症候群並非正式精神疾病名詞。\n\
	斯德哥爾摩乃瑞典首都，1973年8月23日，兩名有前科的罪犯簡-艾瑞克·歐爾森與克拉克·歐洛夫森，\
	搶劫瑞典斯德哥爾摩內位於諾瑪姆斯托格廣場最大的一家信貸銀行，並挾持了四位銀行職員，事件之後人質卻對警察表現出敵對狀態，該症候群因而得名。','\
'];
	       
	   return rplyHead[Math.floor((Math.random() * (rplyHead.length)) + 0)] + '\n' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
////////////////////////////////////////
//////////////// Funny
////////////////////////////////////////
/* 猜拳功能 */
	function RockPaperScissors(HandToCal, text) {
	let returnStr = '';
	if (HandToCal.match(/石頭|布|剪刀|1|2|3/) != null) {
		let aHand = ['石頭','布','剪刀'];
           HandToCal = aHand[Math.floor((Math.random() * (aHand.length)) + 0)];
	}
	var hand = FunnyDice(3); // 0:石頭 1:布 2:剪刀

	switch (hand) {
		case 0: //石頭
			returnStr = '我出石頭！\n';

			if (HandToCal.match(/剪刀|1/) != null) returnStr += '哼哼你輸惹';
			else if (HandToCal.match(/石頭|2/) != null) returnStr += '看來我們不相上下阿';
			else if (HandToCal.match(/布|3/) != null) returnStr += '你好像有點強！';
			else returnStr += '欸不對喔你亂出！';

			break;

		case 1: //布
			returnStr = '我出布！\n';

			if (HandToCal.match(/剪刀|1/) != null) returnStr += '讓你一次而已啦！';
			else if (HandToCal.match(/布|2/) != null) returnStr += '原來平手...沒什麼嘛！';
			else if (HandToCal.match(/石頭|3/) != null) returnStr += '哈哈你看看你！';
			else returnStr += '別亂出阿會壞掉的';

			break;

		case 2: //剪刀
			returnStr = '我出剪刀！\n';

			if (HandToCal.match(/剪刀|1/) != null) returnStr += '平手 (  艸)';
			else if (HandToCal.match(/布|2/) != null) returnStr += '贏了 (｀・ω・´)b';
			else if (HandToCal.match(/石頭|3/) != null) returnStr += '輸惹 ゜。。゜(ノД‵)ノ・゜';
			else returnStr += '亂出打你喔 (｀・ω・´)凸';

			break;

		default:
			returnStr = '我出的是...欸不對你沒出喔！\n';
			break;
	}

	return returnStr;
}



////////////////////////////////////////
//////////////// Tarot塔羅牌
////////////////////////////////////////
function MultiDrawTarot(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
		cards[0] = FunnyDice(79); //先抽第0張
		revs[0] = FunnyDice(2);

		for (i = 1; i < 3; i++) {
			for (;;) {
				tmpcard = FunnyDice(79);
				if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
				{
					cards.push(tmpcard);
					revs[i] = FunnyDice(2);
					break;
				}
			}
		}

		if (text != null)
			returnStr += text + ': \n';

		for (i = 0; i < 3; i++) {
			if (i == 0) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 1) returnStr += '現在: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 2) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);
		}

	} else if (type == 2) //塞爾特大十字
	{
		cards[0] = FunnyDice(79); //先抽第0張
		revs[0] = FunnyDice(2);

		for (i = 1; i < 10; i++) {
			for (;;) {
				tmpcard = FunnyDice(79);
				if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
				{
					cards.push(tmpcard);
					revs[i] = FunnyDice(2);
					break;
				}
			}
		}

		if (text != null)
			returnStr += text + ': \n';

		for (i = 0; i < 10; i++) {
			if (i == 0) returnStr += '現況: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 1) {
				if (revs[i] == 0) //正位
					returnStr += '助力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
				else
					returnStr += '阻力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			}
			if (i == 2) returnStr += '目標: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 3) returnStr += '基礎: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 4) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 5) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 6) returnStr += '自我: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 7) returnStr += '環境: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 8) {
				if (revs[i] == 0) //正位
					returnStr += '希望: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
				else
					returnStr += '恐懼: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			}
			if (i == 9) returnStr += '結論: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

		}

	} else {

		if (text == null)
			returnStr = tarotCardReply(FunnyDice(79)) + ' ' + tarotRevReply(FunnyDice(2));
		else
			returnStr = tarotCardReply(FunnyDice(79)) + ' ' + tarotRevReply(FunnyDice(2)) + ' ; ' + text;
	}


	return returnStr;
}

function NomalDrawTarot(CardToCal, text) {
	let returnStr = '';

	if (text == null)
		returnStr = tarotCardReply(FunnyDice(22)) + ' ' + tarotRevReply(FunnyDice(2));
	else
		returnStr = tarotCardReply(FunnyDice(22)) + ' ' + tarotRevReply(FunnyDice(2)) + ' ; ' + text;
	return returnStr;
}


 function SortIt(input,mainMsg) {   
 
 	let a = input.replace(mainMsg[0], '').match(/\S+/ig);
     for (var i = a.length-1; i >=0; i--) {
 
         var randomIndex = Math.floor(Math.random()*(i+1));
         var itemAtIndex = a[randomIndex];
         a[randomIndex] = a[i];
         a[i] = itemAtIndex;
     }
     	return mainMsg[0] + ' → ['+ a + ']' ;
 }

function tarotRevReply(count) {
	let returnStr = '';

	if (count == 0) returnStr = '＋';
	if (count == 1) returnStr = '－';

	return returnStr;
}

function choice(input,str) {
	let a = input.replace(str[0], '').match(/\S+/ig);
	return str[0] + '['+ a + '] → ' + a[Dice(a.length)-1];
}

function tarotCardReply(count) {
	let returnStr = '';
	// returnStr = count + '愚者';
	if (count == 0) returnStr = '愚者';
	if (count == 1) returnStr = '魔術師';
	if (count == 2) returnStr = '女祭司';
	if (count == 3) returnStr = '女皇';
	if (count == 4) returnStr = '皇帝';
	if (count == 5) returnStr = '教皇';
	if (count == 6) returnStr = '戀人';
	if (count == 7) returnStr = '戰車';
	if (count == 8) returnStr = '力量';
	if (count == 9) returnStr = '隱者';
	if (count == 10) returnStr = '命運之輪';
	if (count == 11) returnStr = '正義';
	if (count == 12) returnStr = '吊人';
	if (count == 13) returnStr = '死神';
	if (count == 14) returnStr = '節制';
	if (count == 15) returnStr = '惡魔';
	if (count == 16) returnStr = '高塔';
	if (count == 17) returnStr = '星星';
	if (count == 18) returnStr = '月亮';
	if (count == 19) returnStr = '太陽';
	if (count == 20) returnStr = '審判';
	if (count == 21) returnStr = '世界';
	if (count == 22) returnStr = '權杖一';
	if (count == 23) returnStr = '權杖二';
	if (count == 24) returnStr = '權杖三';
	if (count == 25) returnStr = '權杖四';
	if (count == 26) returnStr = '權杖五';
	if (count == 27) returnStr = '權杖六';
	if (count == 28) returnStr = '權杖七';
	if (count == 29) returnStr = '權杖八';
	if (count == 30) returnStr = '權杖九';
	if (count == 31) returnStr = '權杖十';
	if (count == 32) returnStr = '權杖侍者';
	if (count == 33) returnStr = '權杖騎士';
	if (count == 34) returnStr = '權杖皇后';
	if (count == 35) returnStr = '權杖國王';
	if (count == 36) returnStr = '聖杯一';
	if (count == 37) returnStr = '聖杯二';
	if (count == 38) returnStr = '聖杯三';
	if (count == 39) returnStr = '聖杯四';
	if (count == 40) returnStr = '聖杯五';
	if (count == 41) returnStr = '聖杯六';
	if (count == 42) returnStr = '聖杯七';
	if (count == 43) returnStr = '聖杯八';
	if (count == 44) returnStr = '聖杯九';
	if (count == 45) returnStr = '聖杯十';
	if (count == 46) returnStr = '聖杯侍者';
	if (count == 47) returnStr = '聖杯騎士';
	if (count == 48) returnStr = '聖杯皇后';
	if (count == 49) returnStr = '聖杯國王';
	if (count == 50) returnStr = '寶劍一';
	if (count == 51) returnStr = '寶劍二';
	if (count == 52) returnStr = '寶劍三';
	if (count == 53) returnStr = '寶劍四';
	if (count == 54) returnStr = '寶劍五';
	if (count == 55) returnStr = '寶劍六';
	if (count == 56) returnStr = '寶劍七';
	if (count == 57) returnStr = '寶劍八';
	if (count == 58) returnStr = '寶劍九';
	if (count == 59) returnStr = '寶劍十';
	if (count == 60) returnStr = '寶劍侍者';
	if (count == 61) returnStr = '寶劍騎士';
	if (count == 62) returnStr = '寶劍皇后';
	if (count == 63) returnStr = '寶劍國王';
	if (count == 64) returnStr = '錢幣一';
	if (count == 65) returnStr = '錢幣二';
	if (count == 66) returnStr = '錢幣三';
	if (count == 67) returnStr = '錢幣四';
	if (count == 68) returnStr = '錢幣五';
	if (count == 69) returnStr = '錢幣六';
	if (count == 70) returnStr = '錢幣七';
	if (count == 71) returnStr = '錢幣八';
	if (count == 72) returnStr = '錢幣九';
	if (count == 73) returnStr = '錢幣十';
	if (count == 74) returnStr = '錢幣侍者';
	if (count == 75) returnStr = '錢幣騎士';
	if (count == 76) returnStr = '錢幣皇后';
	if (count == 77) returnStr = '錢幣國王';
	if (count == 78) returnStr = '空白牌';

	return returnStr;

}
  //隨機產生角色背景
  function PcBG(){
    let PersonalDescriptionArr = ['結實的', '英俊的', '粗鄙的', '機靈的', '迷人的', '娃娃臉的', '聰明的', '蓬頭垢面的', '愚鈍的', '骯髒的', '耀眼的', '有書卷氣的','青春洋溢的','感覺疲憊的','豐滿的','粗壯的','毛髮茂盛的','苗條的','優雅的','邋遢的','敦實的','蒼白的','陰沉的','平庸的','臉色紅潤的','皮膚黝黑色','滿臉皺紋的','古板的','有狐臭的','狡猾的','健壯的','嬌俏的','筋肉發達的','魁梧的','遲鈍的', '虛弱的'];
    let IdeologyBeliefsArr = ['虔誠信仰著某個神祈','覺得人類不需要依靠宗教也可以好好生活','覺得科學可以解釋所有事，並對某種科學領域有獨特的興趣','相信因果循環與命運','是一個政黨、社群或秘密結社的成員','覺得這個社會已經病了，而其中某些病灶需要被剷除','是神秘學的信徒','是積極參與政治的人，有特定的政治立場','覺得金錢至上，且為了金錢不擇手段','是一個激進主義分子，活躍於社會運動'];
    let SignificantPeopleArr = ['他的父母', '他的祖父母', '他的兄弟姐妹', '他的孩子', '他的另一半', '那位曾經教導調查員最擅長的技能（點數最高的職業技能）的人','他的兒時好友', '他心目中的偶像或是英雄', '在遊戲中的另一位調查員', '一個由KP指定的NPC'];
    let SignificantPeopleWhyArr = ['調查員在某種程度上受了他的幫助，欠了人情','調查員從他那裡學到了些什麼重要的東西','他給了調查員生活的意義','調查員曾經傷害過他，尋求他的原諒','和他曾有過無可磨滅的經驗與回憶','調查員想要對他證明自己','調查員崇拜著他','調查員對他有著某些使調查員後悔的過往','調查員試圖證明自己和他不同，比他更出色','他讓調查員的人生變得亂七八糟，因此調查員試圖復仇'];
    let MeaningfulLocationsArr = ['過去就讀的學校','他的故鄉','與他的初戀之人相遇之處','某個可以安靜沉思的地方','某個類似酒吧或是熟人的家那樣的社交場所','與他的信念息息相關的地方','埋葬著某個對調查員別具意義的人的墓地','他從小長大的那個家','他生命中最快樂時的所在','他的工作場所'];
    let TreasuredPossessionsArr = ['一個與他最擅長的技能（點數最高的職業技能）相關的物品','一件他的在工作上需要用到的必需品','一個從他童年時就保存至今的寶物','一樣由調查員最重要的人給予他的物品','一件調查員珍視的蒐藏品','一件調查員無意間發現，但不知道到底是什麼的東西，調查員正努力尋找答案','某種體育用品','一把特別的武器','他的寵物'];
    let TraitsArr = ['慷慨大方的人','對動物很友善的人','善於夢想的人','享樂主義者','甘冒風險的賭徒或冒險者', '善於料理的人', '萬人迷','忠心耿耿的人','有好名聲的人','充滿野心的人'];
    
    return '背景描述生成器（僅供娛樂用，不具實際參考價值）\n==\n調查員是一個' + PersonalDescriptionArr[Math.floor((Math.random() * (PersonalDescriptionArr.length)) + 0)] + '人。\n【信念】：說到這個人，他' + IdeologyBeliefsArr[Math.floor((Math.random() * (IdeologyBeliefsArr.length)) + 0)] + '。\n【重要之人】：對他來說，最重要的人是' + SignificantPeopleArr[Math.floor((Math.random() * (SignificantPeopleArr.length)) + 0)] + '，這個人對他來說之所以重要，是因為' + SignificantPeopleWhyArr[Math.floor((Math.random() * (SignificantPeopleWhyArr.length)) + 0)] + '。\n【意義非凡之地】：對他而言，最重要的地點是' + MeaningfulLocationsArr[Math.floor((Math.random() * (MeaningfulLocationsArr.length)) + 0)] + '。\n【寶貴之物】：他最寶貴的東西就是'+ TreasuredPossessionsArr[Math.floor((Math.random() * (TreasuredPossessionsArr.length)) + 0)] + '。\n【特徵】：總括來說，調查員是一個' + TraitsArr[Math.floor((Math.random() * (TraitsArr.length)) + 0)] + '。';
    
  }


		function Help() {
			return randomReply() + '\n' + '\
【擲骰BOT】v1.26 \
\n 例如輸入2d6+1　攻撃！\
\n 會輸出）2d6+1：攻撃  9[6+3]+1 = 10\
\n 如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。\
\n 以下還有其他例子\
\n 5 3D6 	：分別骰出5次3d6\
\n D66 D66s ：骰出D66 s小者固定在前\
\n 5B10：不加總的擲骰 會進行小至大排序 \
\n 5B10 9：如上,另外計算其中有多少粒大過9 \
\n 5U10 8：進行5D10 每骰出一粒8會有一粒獎勵骰 \
\n 5U10 8 9：如上,另外計算其中有多少粒大過9 \
\n Choice：啓動語choice/隨機/選項/選1\
\n (問題)(啓動語)(問題)  (選項1) (選項2) \
\n 例子 隨機收到聖誕禮物數 1 2 3 >4  \
\n  \
\n 隨機排序：啓動語　排序\
\n (問題)(啓動語)(問題)  (選項1) (選項2)(選項3) \
\n 例子 交換禮物排序 A君 C君 F君 G君\
\n \
\n ・COC六版判定　CCb （目標値）：做出成功或失敗的判定\
\n例）CCb 30　CCb 80\
\n ・COC七版判定　CCx（目標値）\
\n　x：獎勵骰/懲罰骰 (2～n2)。沒有的話可以省略。\
\n  \
\n ・cc六版創角\
\n ・cc七版創角 （年齡）\
\n  \
\n・NC 永遠的後日談擲骰\
\n (骰數)NC/NA (問題)\
\n  例子 1NC 2Na+4 3na-2\
\n 	依戀  NM (問題) \
\n  例子 NM NM 我的依戀\
\n  \
\n・WOD 黑暗世界擲骰\
\n (骰數)WOD/Wd(加骰)(+成功數) (問題)\
\n  例子 2wod 3wd8 15wd9+2\
\n  \
\n・占卜運氣功能 字句中包括運氣即可\
\n・塔羅牌占卜 塔羅/大十字塔羅/每日塔羅牌\
\n  時間tarot 等關键字可啓動\
\n  死亡FLAG：啓動語 立Flag/死亡flag\
\n  coc7角色背景：啓動語 coc7角色背景\
';		
		}

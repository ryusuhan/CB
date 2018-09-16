const express = require('express');
const router = express.Router();
const db = require('../../modules/pool.js');

router.get('/', async(req,res) => {

	var keyboardselect = 'select key_name from keyboards';
	var selectresult = await db.queryParam_None(keyboardselect);

	// key 배열 안에 select된 결과들 집어넣기
	var key = [];
	for(var i = 0; i<selectresult.length; i++){
		key.push(selectresult[i].key_name);
	}

	// 전송하기
	//if(req == "처음으로"){
		res.status(200).send({
			message : {
				text : "서비스 선택!!\n\n"
			},
			keyboard : {
				type: "buttons",
				buttons: key
			}
	//	});
	//}else if(req == "keyboard"){
	//	res.status(200).send({
	//		type : "buttons",
	//		buttons : key
	//	});
	}
});

module.exports = router;
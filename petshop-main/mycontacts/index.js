const express = require('express') //express모듈을 가지고 옴
const app = express() //app라는 서버를 만들겠다
const router=express.Router();

app.get('/', function (req, res) {
  res.send('Hello World')
})
router.route("/contacts").get((req, res)=>{
  res.send('내용')
}).post((req, res)=>{
  console.log(req.body);
  const {name, email} = req.body;
  if(!name || !email){
    return res.send('필수 입력값이 입력되지 않았습니다.')
  }
  res.send('내용수정')
})

router.route('/contacts').get( (req, res)=>{
  res.send('내용')
}).post((req, res)=>{
  console.log(req.body)
  res.send("생성된 페이지 입니다")
})

router.route('/contacts/:id')
.get( (req, res)=>{
  res.send(`파라미터 내용 하나 가져오기 ${req.params.id}`)
}).put((req, res)=>{
  res.send(`파라미터 내용 하나 가져와서 수정하기 ${req.params.id}`)
}).delete((req, res)=>{
  res.send(`파라미터 내용 하나 삭제하기 ${req.params.id}`)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(3000, ()=>{
  console.log('서버 실행중')
})
app.use(router);



const express = require("express");
const MongoClient = require("mongodb").MongoClient;
//데이터베이스의 데이터 입력,출력을 위한 함수명령어 불러들이는 작업
const app = express();
const port = 7001

//ejs 태그를 사용하기 위한 세팅
app.set("view engine","ejs");
//사용자가 입력한 데이터값을 주소로 통해서 전달되는 것을 변환(parsing)
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
//css/img/js(정적인 파일)사용하려면 이코드를 작성!
app.use(express.static('public'));

//데이터 베이스 연결작업
let db; //데이터베이스 연결을 위한 변수세팅(변수의 이름은 자유롭게 지어도 됨)

MongoClient.connect("mongodb+srv://saunogq:dudwndi7@cluster0.xaury3g.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    //에러가 발생했을경우 메세지 출력(선택사항)
    if(err) { return console.log(err); }

    //위에서 만든 db변수에 최종연결 ()안에는 mongodb atlas 사이트에서 생성한 데이터베이스 이름
    db = result.db("buyeo");

    //db연결이 제대로 됬다면 서버실행
    app.listen(port,function(){
        console.log("서버연결 성공");
    });

});



app.get("/",function(req,res){
    let slideData = [
        {
          subTitle : "1夜.",
          title : "야경",
          titleTextTop : "사비톡톡",
          titleTextBot : "사비만의 소박한 빛",
          Image:"/img/space.png",
          menus: ["사비소망 등불거리","사비 밤달밤달", "빛으로 깨어난 정림사지","부여희망 등불거리", "정림이랑 휴식시간", "한지등 전시회"]
        },
        {
          subTitle:"2夜.",
          title:"야로",
          titleTextTop:"사비톡톡",
          titleTextBot:"사비로운 단아한 길",
          Image:"/img/space2.png",
          menus: ["사비톡톡!","백제 예인 퍼포먼스","스트릿 스탬프 투어", "거리에서 만나는 AR 백제위인전", "백투더 사비","사비톡톡!"]
        },
        {
          subTitle:"3夜.",
          title:"야사",
          titleTextTop:"사비만담",
          titleTextBot:"못다한 사비백제 이야기"
          ,
          Image:"/img/space3.png",
          menus: ["삼충신이 들려주는 충절이야기","만담꾼이 들려주는 사비백제 이야기","소원을 들어주는 탑돌이","백제의 놀이문화"]
        },
        {
          subTitle:"4夜.",
          title:"야설",
          titleTextTop:"사비풍류",
          titleTextBot:"사비로운 예술공연"
          ,
          Image:"/img/space4.png",
          menus: ["사비예술단","사비의 달빛멜로디","달빛 뮤지엄 콘서트","사비로운 사비술사"]
        },
        {
          subTitle:"5夜.",
          title:"야식",
          titleTextTop:"사비달콤",
          titleTextBot:"사비와 미식거리"
          ,
          Image:"/img/space5.png",
          menus: ["사비소망 등불거리","사비 밤달밤달", "빛으로 깨어난 정림사지","부여희망 등불거리", "정림이랑 휴식시간", "한지등 전시회"]
        },
        {
          subTitle:"6夜.",
          title:"야시",
          titleTextTop:"사비마당",
          titleTextBot:"시끌벅적 사비장터",
          Image:"/img/space6.png",
          menus: ["사비장터 먹거리 ZONE", "이웃나라 먹거리 ZONE"]
        },
        {
          subTitle:"7夜.",
          title:"야화",
          titleTextTop:"사비미미",
          titleTextBot:"사비로운 예술작품",
          Image:"/img/space7.png",
          menus: ["사비장인과 함께하는 특별체험 [2부스]","굿뜨래 농산물 마켓","사비예술장터 [10부스]","사비마켓 [30부스]", "DIY 사비체험존 [10부스]", "시민참여부스 [2부스]"]
        },
        {
          subTitle:"8夜.",
          title:"야숙",
          titleTextTop:"사비하루",
          titleTextBot:"사비에서의 하룻밤",
          Image:"/img/space8.png",
          menus: ["석탑 사진전","거리의 그림술사","김영학 조각전시전","유홍준 기증유물 전시전","전통염색천 전시전"]
        },
        {
          subTitle:"9夜.",
          title:"야주",
          titleTextTop:"사비톡톡",
          titleTextBot:"집에서도 사비로와",
          Image:"/img/space8.png",
          menus: ["오감으로 추억하는 사비여행"]
        },
    ]
    res.render("index.ejs",{slideData});
});

app.get("/allprogram",function(req,res){
  res.render("allprogram.ejs")
})


app.get("/subHeader",function(req,res){
  res.render("subHeader.ejs")
})



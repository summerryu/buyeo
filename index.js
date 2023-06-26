const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const port = 7001


const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret :'secret', resave : false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session()); 


app.set("view engine","ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json()) 
app.use(express.static('public'));

let db; 

MongoClient.connect("mongodb+srv://saunogq:dudwndi7@cluster0.xaury3g.mongodb.net/?retryWrites=true&w=majority",function(err,result){
    if(err) { return console.log(err); }
    db = result.db("buyeo");
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
    res.render("index.ejs",{slideData, login:req.user});
});

app.get("/allprogram",function(req,res){
  res.render("allprogram.ejs",{login:req.user})
})

app.get("/allprogram/detail/:num",function(req,res){
  
  const Num = Number(req.params.num);
  const menuList = [
    "1夜. 야경(夜景)",
    "2夜. 야로(夜路)",
    "3夜. 야사(夜史)",
    "4夜. 야설(夜說)",
    "5夜. 야식(夜食)",
    "6夜. 야시(夜市)",
    "7夜. 야화(夜畵)",
    "8夜. 야숙(夜宿)",
    "9夜. 야주(夜晝)",
  ]

  res.render("allprogram_detail.ejs", { Num: Num , menuList:menuList, login:req.user});
}) 

app.get("/sub1",function(req,res){
  const menuList = [
    "1夜. 야경(夜景)",
    "2夜. 야로(夜路)",
    "3夜. 야사(夜史)",
    "4夜. 야설(夜說)",
    "5夜. 야식(夜食)",
    "6夜. 야시(夜市)",
    "7夜. 야화(夜畵)",
    "8夜. 야숙(夜宿)",
    "9夜. 야주(夜晝)",
  ]
  const listData = [
    {
      subtitle:"사비풍류",
      subtitle2:"사비만의 소박한빛"
    },
    {
      subtitle:"사비단길",
      subtitle2:"사비로운 단아한 길"
    },
    {
      subtitle:"사비만담",
      subtitle2:"못다한 사비백제 이야기"
    },
    {
      subtitle:"사비풍류",
      subtitle2:"사비로운 예술공연"
    },
    {
      subtitle:"사비달콤",
      subtitle2:"사비와 미식거리"
    },
    {
      subtitle:"사비마당",
      subtitle2:"시끌벅적 사비장터"
    },
    {
      subtitle:"사비미미",
      subtitle2:"사비로운 예술작품"
    },
    {
      subtitle:"사비하루",
      subtitle2:"사비에서의 하룻밤"
    },
    {
      subtitle:"사비톡톡",
      subtitle2:"집에서도 사비로와"
    },
  ]
  res.render("subCont1.ejs", {menuList:menuList, listData:listData,login:req.user});
})

app.get("/sub2",function(req,res){
  res.render("subCont1_2.ejs",{login:req.user});
})

app.get("/sub3",function(req,res){
  res.render("subCont1_3.ejs",{login:req.user});
})


// 문화재
app.get("/sub3_1", function(req,res){
   const sub3Data = [
    {
        image:"/img/subCont3/img1.jpg",
        title:"부여 정림사지 오층석탑",
        subTitle:"국보 제9호(지정일 1962.12.30)"
    },
    {
      image:"/img/subCont3/img2.jpg",
      title:"백제 금동대향로",
      subTitle:"국보 제287호(지정일 1996.5.30)"
  },
  {
    image:"/img/subCont3/img3.jpg",
    title:"부여 정림사지 석불여래좌상",
    subTitle:"보물 제108호(지정일 1963.01.21)"
  },
  {
    image:"/img/subCont3/img4.jpg",
    title:"부여 관북리 유적",
    subTitle:"사적 제428호 (지정일2001.02.01)"
  },
  {
    image:"/img/subCont3/img5.jpg",
    title:"부여 정림사지",
    subTitle:"사적 제301호 (지정일1983.03.26)"
  },
  {
    image:"/img/subCont3/img6.jpg",
    title:"부여 부소산성",
    subTitle:"사적 제5호(지정일 1963.01.21)"
  },
  {
    image:"/img/subCont3/img7.jpg",
    title:"부여 구드래 일원",
    subTitle:"명승 제6호"
  },
  {
    image:"/img/subCont3/img8.jpg",
    title:"부여동헌",
    subTitle:"시도유형문화재 제96호 (1982.03.03)"
  },
  {
    image:"/img/subCont3/img9.jpg",
    title:"부여향교",
    subTitle:"시도기념물 제125호 (지정일1997.12.23)"
  },
  ]
  const Num = Number(req.params.num);
  res.render("subCont3.ejs", {sub3Data:sub3Data, Num:Num, login:req.user});
})

app.get("/sub3_1/detail/:num", function(req,res){
  const Num = Number(req.params.num);
  res.render("subCont3_detail.ejs",{Num:Num,login:req.user})
})


// 문화시설
app.get("/sub3_1_2", function(req,res){
  const sub3Data = [
  {
    image:"/img/subCont3/num1/img1.jpg",
    title:"국립부여박물관",
    subTitle:"1월1일, 매주 월요일"
  },
  {
    image:"/img/subCont3/num1/img2.png",
    title:"정림사지박물관",
    subTitle:"매주 월요일"
  },
  {
    image:"/img/subCont3/num1/img3.jpg",
    title:"사비도성 가상체험관",
    subTitle:"매주 월요일,1월 1일,설날,추석"
  },
  {
    image:"/img/subCont3/num1/img4.jpg",
    title:"신동엽문학관.생가",
    subTitle:"매주 월요일,음력8월15일"
  },
  {
    image:"/img/subCont3/num1/img5.jpg",
    title:"부여문화원",
    subTitle:""
  },
  {
    image:"/img/subCont3/img9.jpg",
    title:"부소갤러리",
    subTitle:""
  },
 ]
 const Num = Number(req.params.num);
 res.render("subCont3_2.ejs", {sub3Data:sub3Data, Num:Num, login:req.user});
})

app.get("/sub3_1_2/detail/:num", function(req,res){
 const Num = Number(req.params.num);
 res.render("subCont3_2_detail.ejs",{Num:Num,login:req.user})
})


// 공지사항
app.get("/sub4",(req,res)=>{
  db.collection("board_2").find().toArray((err,result)=>{
    res.render("subCont4.ejs",{data:result,login:req.user})
  })
})

app.get("/sub4_detail/:num",(req,res)=>{
  db.collection("board_2").findOne(
    {num:Number(req.params.num)},
    (err,result)=>{
    res.render("subCont4_detail.ejs",{data:result,login:req.user})
  })
})

app.get("/sub4_2", (req, res) => {
  db.collection("board").find().toArray((err, result) => {
    let totalData = result.length;
    let perPage = 10;
    let totalPaging = Math.ceil(totalData / perPage);
    let pageNumber = (req.query.page == null) ? 1 : Number(req.query.page)
    let blockCount = 5;
    let blockNum = Math.ceil(pageNumber / blockCount);
    let blockStart = ((blockNum-1) * blockCount) + 1;
    let blockEnd = blockStart + blockCount -1;

    if(blockEnd > totalPaging){
      blockEnd = totalPaging;
    }
    let totalBlock = Math.ceil(totalPaging / blockCount)
    let startFrom = (pageNumber - 1) * perPage

    db.collection("board").find().sort({num:-1}).skip(startFrom).limit(perPage).toArray((err,result)=>{
            
      if(req.query.page === "" || req.query.page > totalPaging){
          res.send("잘못된 페이지 접근입니다.")
      }
      else{
        res.render("subCont4_2.ejs", {
          totalData: totalData,
          data: result,
          totalPaging: totalPaging,
          blockStart: blockStart,
          blockEnd: blockEnd,
          blockNum: blockNum,
          totalBlock: totalBlock,
          pageNumber: pageNumber,
          login:req.user
        });
      }
    })
  })
});

// 질답페이지 게시글 클릭했을때 나오는 디테일 페이지
app.get("/subCont4_2_detail/:num",(req,res)=>{
  db.collection("board").findOne(
    {num:Number(req.params.num)},
    (err,result)=>{
    res.render("subCont4_2_detail.ejs",{data:result,login:req.user})
  })
})

// 질답 검색
app.get("/search", (req, res) => {
  let check = [
    {
        $search:{
            //db사이트에서 검색엔진 설정한 이름값
            index:"searchTest",
            text:
                //검색어 입력단어값
                {query:req.query.inputText,
                //어떤항목을 검색할것인지 -> 여러개 설정할 때는 배열로 [] 설정가능 
                path:req.query.search,
                }
        }
    },
    {$sort:{num:-1}},
    // {$limit:2}
]
  db.collection("board").aggregate(check).toArray((err, result) => {
    let totalData = result.length;
    let perPage = 10;
    let totalPaging = Math.ceil(totalData / perPage);
    let pageNumber = (req.query.page == null) ? 1 : Number(req.query.page)
    let blockCount = 5;
    let blockNum = Math.ceil(pageNumber / blockCount);
    let blockStart = ((blockNum-1) * blockCount) + 1;
    let blockEnd = blockStart + blockCount -1;

    if(blockEnd > totalPaging){
      blockEnd = totalPaging;
    }
    let totalBlock = Math.ceil(totalPaging / blockCount)

    if(req.query.page === "" || req.query.page > totalPaging){
      res.send("잘못된 페이지 접근입니다.")
    }
    else{
      res.render("subCont4_2.ejs", {
        totalData: totalData,
        data: result,
        totalPaging: totalPaging,
        blockStart: blockStart,
        blockEnd: blockEnd,
        blockNum: blockNum,
        totalBlock: totalBlock,
        pageNumber: pageNumber,
        login:req.user
      });
    }
  });
});


// 질답페이지 게시글 작성
app.get("/subCont4_2_insert",(req,res)=>{
  res.render("subCont4_2_insert.ejs",{login:req.user})
})
app.post("/dbinsert",(req,res)=>{
  db.collection("count").findOne({name:"게시물"},(err,countresult)=>{
      db.collection("board").insertOne({
        num:countresult.brdCount,
        title:req.body.title,
        author:req.body.author,
        content:req.body.content
      },(err,result)=>{
        db.collection("count").updateOne({name:"게시물"},{$inc:{brdCount:1}},(err,result)=>{
          res.redirect("/subCont4_2_detail/"+countresult.brdCount)
        })
      })
   })
})


// 자주하는질문 faq 페이지
app.get("/sub4_3",(req,res)=>{
  res.render("subCont4_3.ejs",{login:req.user})
})

// 로그인 페이지
app.get("/login", (req,res)=>{
  res.render("login.ejs",{login:req.user})
})
// 회원가입 페이지
app.get("/join", (req,res)=>{
  res.render("join.ejs",{login:req.user})
})

// 회원가입 데이터 db 저장 
app.post("/joindb", (req,res)=>{
  db.collection("user").findOne({userid:req.body.userid},(err,user)=>{
    if(user){
      res.send("<script> alert('이미 가입된 아이디입니다'); location.href='/join'; </script>")
    }
    else{
      db.collection("userCount").findOne({name:"회원"},(err,result)=>{
        db.collection("user").insertOne({
          userNum:result.Num,
          userid:req.body.userid,
          userpassword:req.body.userpassword
        },(err)=>{
          db.collection("userCount").updateOne({name:"회원"},{$inc:{Num:1}},(err)=>{
            res.send("<script>alert('회원가입 완료'); location.href='/login' </script>")
          })
        })
      })
    }
  })
})

// 로그아웃
app.get("/logout",(req,res)=>{
  req.logout(()=>{
      res.redirect("/")
  })
})


passport.use(new LocalStrategy({
  usernameField : "userid",
  passwordField : "userpassword",
  session: true,
},function(userid,userpassword, done){
  db.collection("user").findOne({userid:userid},function(err,user){
    if(err) { return done(err) }
    if(!user){
      return done(null, false, { message: "등록되지 않은 사용자입니다." });
    }
    if(userpassword === user.userpassword){
      return done (null, user);
    }
    else{
      return done(null,false, { message: "비밀번호가 일치하지 않습니다." });
    }
  });
}));

app.post("/logincheck",passport.authenticate('local', {failureRedirect : '/loginfailure'}),(req,res)=>{
  res.redirect("/") 
})

app.get("/loginfailure",(req,res)=>{
   res.send("<script> alert('아이디 및 비밀번호를 확인 후 로그인 하세요'); location.href='/login'; </script>")

})


passport.serializeUser(function (user, done){
  done(null, user.userid)
});

passport.deserializeUser(function(userid, done){
  db.collection("user").findOne({userid:userid}, function(err,result){
    done(null, result);
  })
})
kaboom({
  background: [26,15,171]
})

loadBean()
loadSprite("ufo","UFO Flappy.gif")

let score = 0


scene("menu", () => {
  
  add([
    text("START"),
    "startButton",
    pos(250,200),
    color(0,255,50),
    area()
  ])
  
  add([
    text("Don't Touch Red",{
      size: 50
    }),
    pos(130,300),
  color(255,0,0),
    
  ])
  
  onClick("startButton",() => {
    go("game")
  })
  
})

go("menu")

scene("game",() => {
  
  let hp = 4
  
  const player = add([
  sprite("ufo", {
    width: 70,
    height: 70,
  }),
    pos(50,50),//pos(50,50) (og) or pos(10,170) or pos(10,400)
    body(),
    area({
      scale: 0.25
    }),
    origin("center"),
      ])
  
  //player.onUpdate(() => [
  //camPos(player.pos)
     
    //])
  
  const hpLabel = add([
  text("hp: "+hp,{
    size: 25
  }),
  pos(550,10), //was (420,0) for chromebook format
  color(0,255,50),
  z(1)
])
  
  let scoreLabel = add([
  text("Score: 0",{
    size:25
  }),
  pos(400,10)
])
     
  
  onKeyDown("d", () => {
  player.move(350,0)
})

onKeyDown("a", () => {
  player.move(-350,0)
})
  
  onKeyPress("w", () => {
  player.jump(500)
    
   
  })
  
   player.onCollide("enemy",() => {
    hp--
    hpLabel.text = "hp :"+hp
    if(hp == 0)
    {
      go("lose")
    }
    shake()
    addKaboom(player.pos)
  })
  
  
  player.onCollide("coin", (c) => {
  destroy(c)
  score += 10
  scoreLabel.text = "Score: "+score
})
  
  player.onCollide ("end",() => {
                  go("game2")  
                    })
  
  add([
    "platform1",
    rect(200,10),
    pos(0,90),
    area(),
    solid(),
  ])
  
  add([
    "platform2",
    rect(800,10),
    pos(0,0),
    area(),
    solid(),
  ])
  
  add([
    "platform3",
    rect(300,10),
    pos(100,200),
    area(),
    solid(),
  ])
  
  add([
    "platform4",
    rect(10,900),
    pos(-5,0),
    area(),
    solid(),
  ])
  
  add([
    "platform5",
    rect(300,10),
    pos(300,90),
    area(),
    solid(),
  ])
  
  add([
    "platform6",
    rect(10,900),
    pos(700,5),
    area(),
    solid(),
  ])
  
  add([
    "platform7",
    rect(400,10),
    pos(450,200),
    area(),
    solid(),
  ])
  
  add([
    "platform8",
    rect(30,10),
    pos(0,200),
    area(),
    solid(),
  ])
  
  add([
    "platform9",
    rect(60,10),
    pos(0,280),
    area(),
    solid(),
  ])
  
  add([
    "platform10",
    rect(60,10),
    pos(130,280),
    area(),
    solid(),
  ])
  
  add([
    "platform11",
    rect(60,10),
    pos(80,230),
    area(),
    solid(),
  ])
  
  add([
    "platform12",
    rect(60,10),
    pos(260,280),
    area(),
    solid(),
  ])
  
  add([
    "platform13",
    rect(60,10),
    pos(400,280),
    area(),
    solid(),
  ])
  
  add([
    "platform14",
    rect(100,10),
    pos(600,300),
    area(),
    solid(),
  ])
  
  add([
    "platform15",
    rect(10,160),
    pos(600,310),
    area(),
    solid(),
  ])
  
  add([
    "platform16",
    rect(60,10),
    pos(550,420),
    area(),
    solid(),
  ])
  
  add([
    "end",
    rect(100,10),
    pos(0,460),
    area(),
    solid(),
    color(0,255,0),
  ])
  
  add([
    "enemy",
    rect(30,10),
    pos(100,80),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,40),
    pos(300,90),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(60,10),
    pos(250,190),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,50),
    pos(200,90),
    area(),
    solid(),
    color(255,0,0),
  ])
  
   add([
    "enemy",
    rect(10,40),
    pos(400,60),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(470,80),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,40),
    pos(570,60),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,60),
    pos(700,90),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(50,10),
    pos(650,140),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(50,10),
    pos(600,190),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,40),
    pos(530,170),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,40),
    pos(480,100),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,40),
    pos(100,160),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,20),
    pos(150,180),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(50,10),
    pos(50,160),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(20,10),
    pos(5,100),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(500,10),
    pos(0,310),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(50,10),
    pos(400,190),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,30),
    pos(130,280),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,60),
    pos(230,260),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,40),
    pos(310,210),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,60),
    pos(370,260),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,60),
    pos(500,260),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(60,10),
    pos(500,260),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(60,10),
    pos(550,260),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(20,10),
    pos(550,250),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(500,10),
    pos(100,460),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(500,400),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(390,310),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(280,400),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(190,310),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(100,400),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(110,40),
  area(),
  color(200,200,0)
  ])
  
  
  
  add([
    "coin",
  rect(10,10),
  pos(230,70),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(260,120),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(620,120),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(350,70),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(430,60),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(530,60),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(560,160),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(500,160),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(130,150),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(190,180),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(70,120),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(10,180),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(350,170),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(340,260),
  area(),
  color(200,200,0)
  ])
  
   add([
    "coin",
  rect(10,10),
  pos(270,260),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(40,250),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(150,250),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(420,260),
  area(),
  color(200,200,0)
  ])
  
  
  
   add([
    "coin",
  rect(10,10),
  pos(555,220),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(660,260),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(570,400),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(430,400),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(330,400),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(230,400),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(140,400),
  area(),
  color(200,200,0)
  ])
  
  
  
  scene("lose", () => {
  
   
      add([
    text("YOU LOSE!"),
    pos(200,200),
    color(0,255,50),
    area(),
        score = 0,
        ])
     
     add([
    text("RETRY"),
     "restartButton",
    pos(250,300),
    color(255,0,0),
    area(),
        score = 0,
        ])
        
     

    
    
       onClick("restartButton",() => {
    go("game")
  })
        
      })
  

 
    

  
  })

scene("game2", () => {
  
  let hp = 4
  
  const hpLabel = add([
  text("hp: "+hp,{
    size: 25
  }),
  pos(550,10), //was (420,0) for chromebook format
  color(0,255,50),
  z(1)
])
  
  let scoreLabel = add([
  text("Score: 0",{
    size:25
  }),
  pos(400,10)
])
  
   const player = add([
  sprite("ufo", {
    width: 70,
    height: 70,
  }),
    pos(50,50),//pos(50,50) (og) or pos(10,170)
    body(),
    area({
      scale: 0.25
    }),
    origin("center"),
      ])
  
  onKeyDown("d", () => {
  player.move(350,0)
})

onKeyDown("a", () => {
  player.move(-350,0)
})
  
  onKeyPress("w", () => {
  player.jump(500)
    
   
  })
  
   player.onCollide("enemy",() => {
    hp--
    hpLabel.text = "hp :"+hp
    if(hp == 0)
    {
      go("lose2")
    }
    shake()
    addKaboom(player.pos)
  })
  
  
  player.onCollide("coin", (c) => {
  destroy(c)
  score += 10
  scoreLabel.text = "Score: "+score
})
  
  player.onCollide ("end",() => {
                  go("win") 
     

})
  
  
  
  add([
    "platform1",
    rect(200,10),
    pos(0,90),
    area(),
    solid(),
  ])
  
  add([
    "platform2",
    rect(800,10),
    pos(0,-5),
    area(),
    solid(),
  ])
  
  add([
    "platform3",
    rect(10,900),
    pos(-5,0),
    area(),
    solid(),
  ])
  
  add([
    "platform4",
    rect(10,900),
    pos(700,0),
    area(),
    solid(),
  ])
  
  add([
    "platform5",
    rect(30,10),
    pos(240,150),
    area(),
    solid(),
  ])
  
  add([
    "platform5",
    rect(30,10),
    pos(330,160),
    area(),
    solid(),
  ])
  
  add([
    "platform6",
    rect(30,10),
    pos(430,160),
    area(),
    solid(),
  ])
  
  add([
    "platform8",
    rect(30,10),
    pos(530,100),
    area(),
    solid(),
  ])
  
  add([
    "platform9",
    rect(20,10),
    pos(660,160),
    area(),
    solid(),
  ])
  
  add([
    "platform9",
    rect(20,10),
    pos(610,220),
    area(),
    solid(),
  ])
  
  add([
    "platform10",
    rect(20,10),
    pos(670,290),
    area(),
    solid(),
  ])
  
  add([
    "platform11",
    rect(30,10),
    pos(620,260),
    area(),
    solid(),
  ])
  
  add([
    "platform12",
    rect(50,10),
    pos(550,320),
    area(),
    solid(),
  ])
  
  add([
    "platform13",
    rect(50,10),
    pos(460,320),
    area(),
    solid(),
  ])
  
  add([
    "platform14",
    rect(50,10),
    pos(300,280),
    area(),
    solid(),
  ])
  
  add([
    "platform15",
    rect(30,10),
    pos(270,300),
    area(),
    solid(),
  ])
  
  add([
    "platform16",
    rect(30,10),
    pos(210,330),
    area(),
    solid(),
  ])
  
  add([
    "platform18",
    rect(40,10),
    pos(200,400),
    area(),
    solid(),
  ])
  
  add([
    "platform19",
    rect(60,10),
    pos(200,410),
    area(),
    solid(),
  ])
  
  add([
    "platform20",
    rect(200,10),
    pos(200,420),
    area(),
    solid(),
  ])
  
  add([
    "platform21",
    rect(60,10),
    pos(390,430),
    area(),
    solid(),
  ])
  
  
  
  add([
    "enemy",
    rect(700,10),
    pos(0,600),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(50,10),
    pos(90,80),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,100),
    pos(200,90),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(300,10),
    pos(200,190),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(290,120),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,60),
    pos(290,0),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,80),
    pos(380,110),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,50),
    pos(380,0),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  
add([
    "enemy",
    rect(10,70),
    pos(490,120),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(90,10),
    pos(500,120),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,130),
    pos(590,120),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,70),
    pos(700,120),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  
  add([
    "enemy",
    rect(10,30),
    pos(700,70),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(50,10),
    pos(650,180),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(600,240),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(60,10),
    pos(650,300),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,30),
    pos(700,250),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,10),
    pos(550,310),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,10),
    pos(500,310),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(600,10),
    pos(400,330),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,50),
    pos(400,280),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(60,10),
    pos(350,280),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,200),
    pos(200,200),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,30),
    pos(300,200),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,20),
    pos(350,200),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,100),
    pos(300,290),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,50),
    pos(350,370),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(10,10),
    pos(400,420),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(0,200),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(0,400),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(0,300),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(170,300),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(170,200),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(40,10),
    pos(170,400),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(20,10),
    pos(85,400),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(20,10),
    pos(85,300),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  add([
    "enemy",
    rect(20,10),
    pos(120,200),
    area(),
    solid(),
    color(255,0,0),
  ])
  
  
  
  
  
  
  add([
    "coin",
  rect(10,10),
  pos(160,40),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(250,120),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(340,130),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(440,130),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(540,80),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(665,140),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(615,200),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(575,300),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(475,300),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(275,260),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(275,400),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(450,410),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(130,260),
  area(),
  color(200,200,0)
  ])
  
  add([
    "coin",
  rect(10,10),
  pos(130,400),
  area(),
  color(200,200,0)
  ])
  
  add([
    "end",
    rect(50,10),
    pos(80,120),
    area(),
    solid(),
    color(0,255,0)
  ])
  
  
  
})

scene("lose2", () => {
  
  add([
    text("RESTART"),
    "startButton",
    pos(250,200),
    color(0,255,50),
    area()
  ])
  
  onClick("startButton",() => {
    go("game2")
  })
}) 
  scene("win", () => { 
    
    add([
    text("RESTART"),
    "startButton",
    pos(225,200),
    color(0,255,50),
    area()
      ])
    
    add([
    text("YOU BEAT THE GAME",{
      size: 45
    }),
    pos(100,350),
    color(0,255,50),
    area()
      ])
    
    onClick("startButton",() => {
    go("game")
  })
  
})
  






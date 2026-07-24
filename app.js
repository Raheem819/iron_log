/* =========================================================================
   IRONLOG v2 — app logic
   ========================================================================= */

/* ---------------------- Exercise library (built-in) ---------------------- */
/* cue = short line shown by default. detail = longer form guidance shown
   when "Read full instructions" is expanded. video = YouTube search query. */
const LIBRARY = {
  goblet_squat:{name:"Goblet Squat", equip:"dumbbell",
    cue:"Hold the dumbbell at your chest. Squat until thighs are parallel, then drive up through your heels.",
    detail:"Stand with feet shoulder-width apart, toes turned out slightly. Hold one dumbbell vertically against your chest, both hands cupping the top plate. Keep your chest tall as you push your hips back and bend your knees, lowering until your thighs are roughly parallel to the floor. Drive through your heels to stand, squeezing your glutes at the top. Knees should track over your toes, not cave inward.",
    video:"goblet squat proper form"},
  db_bench_press:{name:"Dumbbell Bench Press", equip:"dumbbell",
    cue:"Elbows at 45° to your body. Lower to chest level, press up without locking elbows.",
    detail:"Lie on the flat bench with a dumbbell in each hand at chest level, palms facing your feet. Feet flat on the floor for stability. Lower the dumbbells slowly until you feel a stretch across your chest, elbows at roughly 45 degrees from your torso — not flared to 90. Press back up, stopping just short of locking your elbows out. Keep your shoulder blades pulled together into the bench throughout.",
    video:"dumbbell bench press form"},
  bent_row:{name:"Bent-over Barbell Row", equip:"barbell",
    cue:"Hinge at hips, back flat. Pull the bar to your lower stomach, squeeze, lower slow.",
    detail:"Stand with feet hip-width apart, hinge forward from the hips to about 45 degrees with a flat back and slight knee bend. Let the bar hang at arm's length. Pull it up towards your lower stomach/belly button, driving your elbows back and squeezing your shoulder blades together at the top. Lower under control. Avoid jerking the weight up with your lower back.",
    video:"barbell bent over row form"},
  incline_pushup:{name:"Incline Push-up", equip:"bodyweight",
    cue:"Hands on the bench edge, body straight. Lower chest to the bench, push back up.",
    detail:"Place both hands on the bench edge slightly wider than shoulder width, walk your feet back so your body forms a straight line from head to heels. Lower your chest towards the bench by bending your elbows, keeping your core tight so your hips don't sag. Push back up to the start. The higher the incline, the easier the move — you can lower the bench angle over time as you get stronger.",
    video:"incline push up correct form"},
  plank:{name:"Plank", equip:"bodyweight",
    cue:"Forearms down, straight line head to heels. Squeeze your core, don't let hips sag or pike.",
    detail:"Rest on your forearms with elbows under your shoulders, legs extended back with toes on the floor. Keep your body in one straight line — squeeze your glutes and brace your abs as if about to be punched, to stop your hips sagging or lifting too high. Breathe normally, don't hold your breath.",
    video:"plank correct form"},
  rdl:{name:"Romanian Deadlift", equip:"barbell",
    cue:"Soft knees, push hips back, bar stays close to your legs. Feel it in your hamstrings, not your back.",
    detail:"Hold the bar at hip level with an overhand grip, feet hip-width apart, knees softly bent. Push your hips straight back while keeping the bar sliding down close to your thighs and shins, chest staying up. Lower until you feel a strong stretch in your hamstrings — usually mid-shin height, not necessarily the floor. Drive your hips forward to return to standing. Your back should stay flat throughout, never rounding.",
    video:"romanian deadlift form"},
  seated_shoulder_press:{name:"Seated DB Shoulder Press", equip:"dumbbell",
    cue:"Bench upright, back supported. Press dumbbells overhead without arching your lower back.",
    detail:"Sit on the bench with the backrest upright, a dumbbell in each hand at shoulder height, palms facing forward. Press both dumbbells straight overhead until your arms are extended but not locked, then lower back to shoulder height under control. Keep your ribcage down and avoid arching your lower back to get the weight up — if you have to arch hard, the weight is too heavy.",
    video:"seated dumbbell shoulder press form"},
  stepup:{name:"Dumbbell Step-up", equip:"dumbbell",
    cue:"Step fully onto the bench, drive through the front heel, control the way down.",
    detail:"Stand facing the bench holding a dumbbell in each hand. Place one foot fully flat on the bench and drive through that heel to stand up on top of it, letting the trailing leg follow naturally without pushing off the floor. Step back down with control. Complete all reps on one leg before switching, or alternate — either works.",
    video:"dumbbell step up form"},
  glute_bridge:{name:"Glute Bridge", equip:"bodyweight",
    cue:"Feet flat, drive hips up by squeezing glutes, hold briefly at the top.",
    detail:"Lie on your back, knees bent, feet flat on the floor hip-width apart, close enough to just graze your fingertips. Push through your heels and squeeze your glutes to lift your hips until your body forms a straight line from shoulders to knees. Hold for a second at the top, then lower under control. Keep your core braced so your lower back doesn't overarch.",
    video:"glute bridge form"},
  ez_curl:{name:"EZ Bar Curl", equip:"barbell",
    cue:"Elbows pinned to your sides. Curl up without swinging, lower slow.",
    detail:"Stand holding the EZ bar with an underhand grip on the angled part of the bar, elbows tucked close to your sides. Curl the bar up by bending your elbows only — no swinging your torso or hips to help. Squeeze at the top, then lower slowly over 2-3 seconds. If you need momentum to move the weight, it's too heavy.",
    video:"ez bar curl form"},
  single_arm_row:{name:"Single-arm Dumbbell Row", equip:"dumbbell",
    cue:"One knee and hand on the bench, back flat. Pull the dumbbell to your hip.",
    detail:"Place one knee and the same-side hand on the bench for support, back flat and roughly parallel to the floor. Hold the dumbbell in the other hand, arm fully extended. Pull it up towards your hip, leading with your elbow and squeezing your shoulder blade back. Lower under control until your arm is fully extended again.",
    video:"single arm dumbbell row form"},
  overhead_triceps:{name:"Overhead DB Triceps Extension", equip:"dumbbell",
    cue:"One dumbbell overhead with both hands. Lower behind your head, only the forearm moves.",
    detail:"Hold one dumbbell with both hands, arms extended straight overhead. Keeping your upper arms close to your ears and still, bend only at the elbows to lower the dumbbell behind your head. Extend back up by squeezing your triceps. Avoid flaring your elbows out to the sides.",
    video:"overhead dumbbell triceps extension form"},
  incline_press:{name:"DB Incline Press", equip:"dumbbell",
    cue:"Bench at 30-45°. Press up and slightly back, targets upper chest.",
    detail:"Set the bench to a 30-45 degree incline. Lie back with a dumbbell in each hand at the top of your chest, palms facing forward. Press the dumbbells up and very slightly back until arms are extended but not locked, then lower under control. A steeper incline shifts more work to your shoulders, so stay in that 30-45 degree range for upper chest focus.",
    video:"incline dumbbell press form"},
  db_pullover:{name:"Dumbbell Pullover", equip:"dumbbell",
    cue:"Lie flat, dumbbell over your chest. Lower it back behind your head, keep a slight elbow bend.",
    detail:"Lie flat on the bench (or across it) holding one dumbbell with both hands above your chest, arms with a slight bend in the elbows that stays fixed throughout. Lower the dumbbell back and down behind your head until you feel a stretch through your chest and lats, then pull it back over your chest. Keep your core braced — don't let your lower back arch off the bench.",
    video:"dumbbell pullover form"},
  lateral_raise:{name:"DB Lateral Raise", equip:"dumbbell",
    cue:"Light weight, slight elbow bend. Raise to shoulder height, no higher, no swinging.",
    detail:"Stand holding a light dumbbell in each hand at your sides, a slight bend in your elbows. Raise both arms out to the sides until they reach shoulder height, leading with your elbows rather than your hands. Lower slowly. This is a small, controlled movement — using momentum or swinging the torso means the weight is too heavy.",
    video:"dumbbell lateral raise form"},
  rear_delt_fly:{name:"Bent-over Rear Delt Fly", equip:"dumbbell",
    cue:"Hinge forward, light dumbbells. Squeeze shoulder blades together as arms lift out to the sides.",
    detail:"Hinge forward from the hips to about 45 degrees, dumbbells hanging below your chest, slight bend in the elbows. Raise both arms out to the sides, focusing on squeezing your shoulder blades together rather than lifting with your arms. Lower slowly. Keep the weight light — this targets a small muscle group.",
    video:"bent over rear delt fly form"},
  preacher_curl:{name:"Preacher Curl", equip:"barbell",
    cue:"Upper arms flat on the pad. Curl up, then lower all the way for a full stretch.",
    detail:"Rest your upper arms flat against the preacher pad on the bench attachment, holding the EZ bar with an underhand grip. Curl the bar up towards your shoulders, then lower it all the way down for a full stretch at the bottom before curling again. The pad prevents swinging, so every rep is strict.",
    video:"preacher curl form"},
  bench_dip:{name:"Bench Dip", equip:"bodyweight",
    cue:"Hands on bench behind you, lower by bending elbows, push back up.",
    detail:"Sit on the edge of the bench, place your hands beside your hips gripping the edge, fingers pointing forward. Walk your feet out and slide your hips off the bench. Lower your body by bending your elbows to about 90 degrees, then push back up through your palms. Keep your elbows pointing backward, not flaring out to the sides.",
    video:"bench dips triceps form"},
  lunges:{name:"Dumbbell Lunges", equip:"dumbbell",
    cue:"Step forward, both knees to 90°, front knee stays over the ankle. Push back to start.",
    detail:"Hold a dumbbell in each hand at your sides. Step forward with one leg, lowering your hips until both knees are bent around 90 degrees, back knee hovering just above the floor. Your front knee should stay roughly over your front ankle, not pushing far past your toes. Push back through your front heel to return to standing, then repeat or alternate legs.",
    video:"dumbbell walking lunge form"},
  deadlift:{name:"Barbell Deadlift", equip:"barbell",
    cue:"Bar over mid-foot, flat back, push the floor away. Hips and shoulders rise together.",
    detail:"Stand with the bar over your mid-foot, feet hip-width apart. Bend down and grip the bar just outside your legs, keeping your back completely flat and chest up. Take a big breath, brace your core, and stand up by pushing the floor away with your legs while keeping the bar close to your shins. Your hips and shoulders should rise at the same rate — if your hips shoot up first, you're back-rounding. Lower with control by pushing your hips back first.",
    video:"barbell deadlift proper form"},
  hip_thrust:{name:"Barbell Hip Thrust", equip:"barbell",
    cue:"Shoulders on the bench, bar over your hips. Drive up by squeezing glutes, chin tucked.",
    detail:"Sit on the floor with your upper back against the bench edge, the barbell rolled over your hips (use a towel or pad for comfort). Feet flat on the floor, knees bent. Drive through your heels and squeeze your glutes to lift your hips until your body forms a straight line from shoulders to knees at the top. Keep your chin tucked, not looking up. Lower under control.",
    video:"barbell hip thrust form"},
  bulgarian_split_squat:{name:"Bulgarian Split Squat", equip:"dumbbell",
    cue:"Back foot up on the bench behind you. Lower straight down, front knee over the ankle.",
    detail:"Stand a couple of feet in front of the bench, holding a dumbbell in each hand. Place the top of one foot on the bench behind you. Lower straight down by bending your front knee until it's around 90 degrees, keeping your torso mostly upright. Push through your front heel to stand back up. This is a tough balance move — go light while you learn it.",
    video:"bulgarian split squat form"},
  calf_raise:{name:"Standing Calf Raise", equip:"dumbbell",
    cue:"Rise onto your toes as high as possible, pause, lower all the way down.",
    detail:"Stand holding a dumbbell in each hand at your sides (or bodyweight only if that's already challenging). Rise up onto your toes as high as you can, pause briefly at the top, then lower all the way down until you feel a stretch in your calves. Doing this near a wall or the bench for light balance support is fine.",
    video:"standing calf raise form"},
  leg_raise:{name:"Lying Leg Raise", equip:"bodyweight",
    cue:"Lower back stays flat on the floor. Raise legs to vertical, lower without arching.",
    detail:"Lie flat on your back, hands by your sides or under your lower back for support. Keeping your legs mostly straight, raise them up until they're vertical, then lower them back down slowly, stopping before your lower back arches off the floor. If it's too hard with straight legs, bend your knees slightly.",
    video:"lying leg raise form"},
  hammer_curl:{name:"Hammer Curl", equip:"dumbbell",
    cue:"Palms facing each other throughout. Curl up, elbows pinned to your sides.",
    detail:"Stand holding a dumbbell in each hand with palms facing your body (neutral grip), elbows tucked to your sides. Curl both dumbbells up towards your shoulders without rotating your wrists, then lower slowly. This grip targets the forearm and outer bicep differently from a regular curl.",
    video:"hammer curl form"},
  skull_crusher:{name:"Skull Crusher", equip:"barbell",
    cue:"Lying down, bar starts overhead. Lower to your forehead by bending elbows only.",
    detail:"Lie on the bench holding the EZ bar with arms extended straight above your chest. Keeping your upper arms still and vertical, bend your elbows to lower the bar towards your forehead, then extend back up by squeezing your triceps. Go slow and controlled — this exercise is unforgiving of sloppy form.",
    video:"skull crusher ez bar form"},
  shrug:{name:"Barbell Shrug", equip:"barbell",
    cue:"Hold the bar at arm's length, shrug your shoulders straight up towards your ears.",
    detail:"Stand holding the barbell in front of your thighs with an overhand grip, arms straight. Shrug your shoulders straight up towards your ears as high as you can, pause briefly, then lower under control. Don't roll your shoulders in circles — straight up and down is enough and safer.",
    video:"barbell shrug form"},
  russian_twist:{name:"Russian Twist", equip:"bodyweight",
    cue:"Lean back slightly, feet up or down. Rotate your torso side to side under control.",
    detail:"Sit on the floor with knees bent, lean your torso back slightly to about 45 degrees while keeping your back flat, not rounded. Lift your feet slightly off the floor for more difficulty, or keep them down if you're starting out. Rotate your torso from side to side, letting your hands (or a light weight) tap the floor beside each hip.",
    video:"russian twist form"}
  ,
  bodyweight_squat:{name:"Bodyweight Squat", equip:"bodyweight",
    cue:"Feet shoulder-width, sit back and down like sitting in a chair, stand back up.",
    detail:"Stand with feet shoulder-width apart, toes slightly out. Push your hips back and bend your knees to lower down as if sitting into a chair, keeping your chest up and weight in your heels. Go as low as comfortable — ideally thighs parallel to the floor — then drive back up through your heels. Keep knees tracking over your toes.",
    video:"bodyweight squat form"},
  pushup:{name:"Push-up", equip:"bodyweight",
    cue:"Hands under shoulders, body in a straight line. Lower chest to the floor, push back up.",
    detail:"Start in a plank position, hands slightly wider than shoulder-width, body forming a straight line from head to heels. Lower your whole body by bending your elbows until your chest nearly touches the floor, keeping elbows at roughly 45 degrees from your body. Push back up to full arm extension. Keep your core braced so your hips don't sag. If full push-ups are too hard, drop to your knees.",
    video:"push up correct form"},
  superman:{name:"Superman", equip:"bodyweight",
    cue:"Lie face down, lift chest and legs together, squeeze your lower back, lower slowly.",
    detail:"Lie face down on the floor with arms extended in front of you. Simultaneously lift your chest, arms, and legs a few inches off the floor, squeezing your lower back and glutes. Hold briefly at the top, then lower with control. Keep the movement small and controlled — this isn't about how high you lift, it's about the squeeze.",
    video:"superman exercise form"},
  mountain_climber:{name:"Mountain Climbers", equip:"bodyweight",
    cue:"Plank position, drive knees to chest alternating quickly, keep hips level.",
    detail:"Start in a high plank with hands under shoulders. Drive one knee towards your chest, then quickly switch legs, as if running in place horizontally. Keep your core tight and hips level throughout — don't let them pike up. Control the pace; speed doesn't matter as much as keeping form clean.",
    video:"mountain climbers form"},
  wall_sit:{name:"Wall Sit", equip:"bodyweight",
    cue:"Back flat against a wall, thighs parallel to the floor, hold.",
    detail:"Stand with your back against a wall, then slide down until your knees are bent at roughly 90 degrees, thighs parallel to the floor, as if sitting in an invisible chair. Keep your back flat against the wall and knees over your ankles. Hold the position for time rather than counting reps.",
    video:"wall sit exercise form"},
  bodyweight_lunge:{name:"Bodyweight Lunge", equip:"bodyweight",
    cue:"Step forward, both knees to 90°, push back to standing.",
    detail:"Stand tall, step forward with one leg and lower your hips until both knees are bent around 90 degrees, back knee hovering just above the floor. Keep your front knee roughly over your front ankle. Push back through your front heel to return to standing, then repeat on the other side.",
    video:"bodyweight lunge form"},
  pike_pushup:{name:"Pike Push-up", equip:"bodyweight",
    cue:"Hips high in an inverted-V, lower head towards the floor, push back up — targets shoulders.",
    detail:"Start in a downward-dog-like position: hands and feet on the floor, hips pushed high so your body forms an inverted V. Bend your elbows to lower the top of your head towards the floor between your hands, then press back up. The higher your hips, the more the exercise shifts onto your shoulders.",
    video:"pike push up form"},
  bicycle_crunch:{name:"Bicycle Crunch", equip:"bodyweight",
    cue:"Lying down, bring opposite elbow to opposite knee in a pedaling motion.",
    detail:"Lie on your back, hands lightly behind your head, knees bent and lifted. Bring one knee towards your chest while rotating to touch it with the opposite elbow, then switch sides in a smooth pedaling motion. Keep the movement controlled — don't yank your neck with your hands.",
    video:"bicycle crunch form"},
  db_rdl:{name:"Dumbbell Romanian Deadlift", equip:"dumbbell",
    cue:"Soft knees, push hips back, dumbbells stay close to your legs — feel it in your hamstrings.",
    detail:"Hold a dumbbell in each hand in front of your thighs, feet hip-width apart, knees softly bent. Push your hips straight back while keeping the dumbbells sliding down close to your legs, chest staying up. Lower until you feel a strong stretch in your hamstrings, then drive your hips forward to return to standing. Back stays flat throughout.",
    video:"dumbbell romanian deadlift form"}
};

function getExercise(key){
  return (state.customExercises && state.customExercises[key]) || LIBRARY[key] || {name:"Unknown exercise", equip:"bodyweight", cue:"", detail:"", video:key};
}

/* ---------------------- Program templates ---------------------- */
function ex(key, sets, repMin, repMax, weight, increment, note){
  return {key, sets, repMin, repMax, weight: (weight===undefined?null:weight), increment: increment===undefined?null:increment, note: note||""};
}
function targetLabel(exo, setCount){
  const n = setCount!==undefined ? setCount : exo.sets;
  const range = exo.repMin===exo.repMax ? (exo.repMin+(exo.repMin>30?"s":" reps")) : (exo.repMin+"-"+exo.repMax+" reps");
  return `${n}x${range}`;
}

const TEMPLATES = {
  ironlog_original:{
    id:"ironlog_original", name:"IRONLOG Original",
    description:"Moon's beginner program: 2-week Foundation phase, then a 5-day Upper/Lower split built around a home bench, barbell, EZ bar and dumbbells.",
    tags:["Home gym", "Beginner", "5 days/wk"],
    hasFoundation:true,
    foundation:{
      order:["fA","fB","fA","fB","fA","fB"],
      days:{
        fA:{label:"Foundation A", list:[
          ex("goblet_squat",2,8,10,6,2),
          ex("db_bench_press",2,8,10,6,2),
          ex("bent_row",2,8,10,7,4,"barbell only to start"),
          ex("incline_pushup",2,6,8,null,null),
          ex("plank",2,20,20,null,null,"seconds, not reps")
        ]},
        fB:{label:"Foundation B", list:[
          ex("rdl",2,8,10,7,4,"barbell only to start"),
          ex("seated_shoulder_press",2,8,10,6,2),
          ex("stepup",2,8,8,4,2),
          ex("glute_bridge",2,12,12,null,null),
          ex("ez_curl",2,10,12,5,4,"bar only to start"),
          ex("plank",2,20,20,null,null,"seconds, not reps")
        ]}
      }
    },
    main:{
      order:["upperA","lowerA","upperB","lowerB","arms"],
      days:{
        upperA:{label:"Upper A", list:[
          ex("db_bench_press",3,8,12,8,2),
          ex("bent_row",3,8,12,11,4),
          ex("seated_shoulder_press",3,8,12,6,2),
          ex("single_arm_row",2,10,12,8,2,"per side"),
          ex("ez_curl",2,10,12,9,4),
          ex("overhead_triceps",2,10,12,6,2)
        ]},
        lowerA:{label:"Lower A", list:[
          ex("goblet_squat",3,8,12,12,2),
          ex("rdl",3,8,12,17,4),
          ex("stepup",3,10,10,8,2,"per leg — replaces leg extension, attachment is broken"),
          ex("calf_raise",3,15,20,8,2),
          ex("plank",3,30,45,null,null,"seconds, not reps")
        ]},
        upperB:{label:"Upper B", list:[
          ex("bent_row",3,8,12,13,4),
          ex("incline_press",3,8,12,8,2),
          ex("db_pullover",2,12,12,8,2),
          ex("lateral_raise",3,12,15,3,1),
          ex("rear_delt_fly",2,12,15,3,1),
          ex("preacher_curl",2,10,12,9,4),
          ex("bench_dip",2,12,15,null,null,"as many reps as possible up to 15")
        ]},
        lowerB:{label:"Lower B", list:[
          ex("lunges",3,10,10,8,2,"per leg"),
          ex("deadlift",3,8,10,21,4),
          ex("hip_thrust",3,12,15,17,4,"replaces leg curl — attachment is broken"),
          ex("bulgarian_split_squat",2,10,10,6,2,"per leg"),
          ex("calf_raise",3,15,20,8,2),
          ex("leg_raise",3,12,15,null,null)
        ]},
        arms:{label:"Arms + Core", list:[
          ex("ez_curl",3,10,12,9,4),
          ex("hammer_curl",2,12,12,6,2),
          ex("skull_crusher",3,10,12,7,4),
          ex("bench_dip",2,12,15,null,null),
          ex("shrug",3,12,15,15,4),
          ex("leg_raise",3,15,15,null,null),
          ex("russian_twist",2,20,20,null,null)
        ]}
      }
    },
    deload:{enabled:true, every:4}
  },

  bodyweight_beginner:{
    id:"bodyweight_beginner", name:"Bodyweight Beginner",
    description:"No equipment needed at all. Three full-body sessions rotating, built entirely from bodyweight moves.",
    tags:["No equipment", "Beginner", "3 days/wk"],
    hasFoundation:false, foundation:null,
    main:{
      order:["bwA","bwB","bwC"],
      days:{
        bwA:{label:"Full Body A", list:[
          ex("bodyweight_squat",3,10,15,null,null),
          ex("pushup",3,8,12,null,null,"knee push-ups if needed"),
          ex("glute_bridge",3,12,15,null,null),
          ex("plank",3,20,40,null,null,"seconds"),
          ex("mountain_climber",2,20,20,null,null,"total reps")
        ]},
        bwB:{label:"Full Body B", list:[
          ex("bodyweight_lunge",3,8,8,null,null,"per leg"),
          ex("pike_pushup",3,6,10,null,null),
          ex("superman",3,12,15,null,null),
          ex("bicycle_crunch",3,15,15,null,null,"each side"),
          ex("wall_sit",2,20,40,null,null,"seconds")
        ]},
        bwC:{label:"Full Body C", list:[
          ex("bodyweight_squat",3,15,20,null,null,"higher reps"),
          ex("bench_dip",3,8,12,null,null,"use a sturdy chair or edge"),
          ex("glute_bridge",3,15,15,null,null),
          ex("russian_twist",3,20,20,null,null),
          ex("plank",3,30,45,null,null,"seconds")
        ]}
      }
    },
    deload:{enabled:true, every:4}
  },

  dumbbells_only:{
    id:"dumbbells_only", name:"Dumbbells Only",
    description:"A 5-day Upper/Lower split built entirely around a pair of dumbbells — no barbell, no bench required (a chair works for most moves).",
    tags:["Dumbbells only", "5 days/wk"],
    hasFoundation:false, foundation:null,
    main:{
      order:["dbUpperA","dbLowerA","dbUpperB","dbLowerB","dbArms"],
      days:{
        dbUpperA:{label:"Upper A", list:[
          ex("db_bench_press",3,8,12,8,2),
          ex("single_arm_row",3,10,12,8,2,"per side"),
          ex("seated_shoulder_press",3,8,12,6,2),
          ex("hammer_curl",2,10,12,6,2),
          ex("overhead_triceps",2,10,12,6,2)
        ]},
        dbLowerA:{label:"Lower A", list:[
          ex("goblet_squat",3,8,12,10,2),
          ex("db_rdl",3,8,12,14,2),
          ex("lunges",3,10,10,6,2,"per leg"),
          ex("calf_raise",3,15,20,8,2),
          ex("plank",3,30,45,null,null,"seconds")
        ]},
        dbUpperB:{label:"Upper B", list:[
          ex("incline_press",3,8,12,8,2),
          ex("single_arm_row",3,10,12,10,2,"per side"),
          ex("lateral_raise",3,12,15,3,1),
          ex("rear_delt_fly",2,12,15,3,1),
          ex("hammer_curl",2,10,12,6,2)
        ]},
        dbLowerB:{label:"Lower B", list:[
          ex("bulgarian_split_squat",3,10,10,6,2,"per leg"),
          ex("stepup",3,10,10,8,2,"per leg"),
          ex("db_rdl",3,8,12,14,2),
          ex("calf_raise",3,15,20,8,2),
          ex("leg_raise",3,12,15,null,null)
        ]},
        dbArms:{label:"Arms + Core", list:[
          ex("hammer_curl",3,10,12,6,2),
          ex("overhead_triceps",3,10,12,6,2),
          ex("lateral_raise",2,12,15,3,1),
          ex("leg_raise",3,15,15,null,null),
          ex("russian_twist",2,20,20,null,null)
        ]}
      }
    },
    deload:{enabled:true, every:4}
  },

  blank:{
    id:"blank", name:"Start from Scratch",
    description:"An empty program — build your own days and pick your own exercises from the library, or add entirely custom ones.",
    tags:["Fully custom"],
    hasFoundation:false, foundation:null,
    main:{order:[], days:{}},
    deload:{enabled:false, every:4}
  }
};

function cloneTemplate(id){
  return JSON.parse(JSON.stringify(TEMPLATES[id]));
}

/* ---------------------- State ---------------------- */
const STORAGE_KEY = "ironlog_state_v1"; // kept for backward compatibility with v1 installs
const SCHEMA_VERSION = 2;

function defaultState(){
  return {
    schemaVersion: SCHEMA_VERSION,
    onboarded:false,
    name:"",
    theme:"dark",
    programId:"ironlog_original",
    program: cloneTemplate("ironlog_original"),
    customExercises:{},
    phase:"foundation",
    sessionIndex:0,
    completedCount:{foundation:0, main:0},
    weights:{},
    sessions:[],
    bodyLogs:[],
    notifPermission:"default",
    google:{connected:false, email:null, sheetId:null, token:null, tokenExpiresAt:null, needsReauth:false}
  };
}

function migrate(raw){
  if(!raw) return null;
  if(raw.schemaVersion >= SCHEMA_VERSION) return raw;
  // v1 -> v2: wrap the old flat schema into the new program-based one,
  // preserving history, weights, and the existing Google Sheet connection.
  const migrated = defaultState();
  migrated.onboarded = true; // they already have real history — skip onboarding
  migrated.name = raw.name || "";
  migrated.theme = raw.theme || "dark";
  migrated.phase = raw.phase || "foundation";
  migrated.sessionIndex = raw.sessionIndex || 0;
  migrated.completedCount = raw.completedCount || {foundation:0, main:0};
  migrated.weights = raw.weights || {};
  migrated.sessions = raw.sessions || [];
  migrated.bodyLogs = raw.bodyLogs || [];
  if(raw.google) migrated.google = Object.assign(migrated.google, raw.google);
  return migrated;
}

let state = loadState();

function loadState(){
  try{
    const rawText = localStorage.getItem(STORAGE_KEY);
    if(!rawText) return defaultState();
    const parsed = migrate(JSON.parse(rawText));
    if(!parsed) return defaultState();
    return Object.assign(defaultState(), parsed);
  }catch(e){
    return defaultState();
  }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e){ console.warn("Local save failed", e); }
}

/* ---------------------- Rotation / program helpers ---------------------- */
function activeProgram(){ return state.program; }

function currentDayKey(){
  const prog = activeProgram();
  if(state.phase === "foundation" && prog.hasFoundation){
    const order = prog.foundation.order;
    if(!order.length) return null;
    return order[state.sessionIndex % order.length];
  }
  const order = prog.main.order;
  if(!order.length) return null;
  return order[state.sessionIndex % order.length];
}
function currentDay(){
  const key = currentDayKey();
  if(!key) return null;
  const prog = activeProgram();
  const bucket = (state.phase === "foundation" && prog.hasFoundation) ? prog.foundation.days : prog.main.days;
  return Object.assign({key}, bucket[key]);
}
function currentWeekNumber(){
  return Math.floor(state.completedCount.main / Math.max(1, activeProgram().main.order.length)) + 1;
}
function isDeloadWeek(){
  const prog = activeProgram();
  if(state.phase !== "main" || !prog.deload || !prog.deload.enabled) return false;
  return currentWeekNumber() % prog.deload.every === 0;
}
function exerciseWeight(exObj){
  if(exObj.weight === null) return null;
  if(state.weights[exObj.key] !== undefined) return state.weights[exObj.key];
  return exObj.weight;
}
function restSeconds(exObj){
  const move = getExercise(exObj.key);
  return (move.equip === "bodyweight") ? 60 : (exObj.repMax <= 12 && exObj.sets >=3 ? 90 : 60);
}
function programIsEmpty(){
  const prog = activeProgram();
  const hasMain = prog.main.order.length > 0;
  const hasFoundation = prog.hasFoundation && prog.foundation.order.length > 0;
  return !hasMain && !hasFoundation;
}

/* ---------------------- Router ---------------------- */
function currentRoute(){
  const h = (location.hash || "#home").slice(1);
  const parts = h.split("/").filter(Boolean);
  return {screen: parts[0] || "home", sub: parts[1] || null, arg: parts[2] || null};
}
function navigate(path){ location.hash = path; }
window.addEventListener("hashchange", render);

/* ---------------------- Rendering ---------------------- */
const root = document.getElementById("screen-root");
let workoutDraft = null;
let openExerciseKey = null;
let builder = {pickerForDay:null, pickerTab:"library", pickerSearch:"", customForm:false};

function toast(msg){
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>t.classList.remove("show"), 2200);
}
function vibrate(pattern){ if(navigator.vibrate){ try{ navigator.vibrate(pattern); }catch(e){} } }

function updateNavHighlight(){
  const {screen} = currentRoute();
  document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active", b.dataset.screen===screen));
}

function render(){
  if(!state.onboarded){ renderOnboarding(); return; }
  updateNavHighlight();
  const {screen, sub} = currentRoute();
  if(screen==="home") return renderHome();
  if(screen==="train") return renderTrain();
  if(screen==="progress") return renderProgress();
  if(screen==="history") return renderHistory();
  if(screen==="settings"){
    if(sub==="program") return renderProgramEditor();
    if(sub==="templates") return renderTemplatePicker();
    if(sub==="guide") return renderGuide();
    return renderSettings();
  }
  return renderHome();
}

/* ---- Onboarding ---- */
function renderOnboarding(){
  const cards = Object.values(TEMPLATES).map(t=>`
    <div class="template-card" data-tpl="${t.id}">
      <h3>${t.name}</h3>
      <div class="desc">${t.description}</div>
      <div class="meta-row">${t.tags.map(tag=>`<span class="tpl-pill">${tag}</span>`).join("")}</div>
    </div>`).join("");

  root.innerHTML = `
    <div class="onboard">
      <div class="onboard-hero">
        <div class="brand-mark"></div>
        <h1>Welcome to IRONLOG</h1>
        <p>Pick a starting program — you can fully customize it later, or build your own from scratch.</p>
      </div>
      <div class="field"><label>Your name (optional)</label><input type="text" id="ob-name" placeholder="What should the app call you?"></div>
      ${cards}
    </div>
  `;
  root.querySelectorAll("[data-tpl]").forEach(el=>{
    el.onclick = ()=>{
      const id = el.dataset.tpl;
      state.name = document.getElementById("ob-name").value.trim();
      state.programId = id;
      state.program = cloneTemplate(id);
      state.phase = state.program.hasFoundation ? "foundation" : "main";
      state.sessionIndex = 0;
      state.completedCount = {foundation:0, main:0};
      state.onboarded = true;
      saveState();
      navigate("#home");
      render();
    };
  });
}

/* ---- Home ---- */
function renderHome(){
  if(programIsEmpty()){
    root.innerHTML = `
      <div class="card" style="margin-top:14px;">
        <div class="eyebrow">Your program is empty</div>
        <h1 style="font-size:22px; margin-bottom:10px;">Add your first day</h1>
        <p style="color:var(--text-dim); font-size:13.5px; margin-bottom:14px;">Go to Settings → My Program to add a day and start picking exercises.</p>
        <button class="btn btn-primary" id="btn-goto-builder">Open My Program</button>
      </div>`;
    document.getElementById("btn-goto-builder").onclick = ()=>navigate("#settings/program");
    return;
  }
  const day = currentDay();
  const inFoundation = state.phase==="foundation" && activeProgram().hasFoundation;
  const doneThisWeek = state.phase==="main" ? (state.completedCount.main % activeProgram().main.order.length) : state.completedCount.foundation;
  const totalThisWeek = state.phase==="main" ? activeProgram().main.order.length : activeProgram().foundation.order.length;
  const pct = totalThisWeek ? Math.min(1, doneThisWeek/totalThisWeek) : 0;
  const circumference = 2*Math.PI*56;
  const offset = circumference*(1-pct);

  root.innerHTML = `
    <div class="card hero">
      <div class="eyebrow">${inFoundation ? "Foundation Phase" : "Week " + currentWeekNumber()} · ${activeProgram().name}</div>
      <h1>${day.label}</h1>
      <div class="hero-meta">${inFoundation ? "Building movement patterns before real load" : (isDeloadWeek()? "Deload week — sets are halved, same weight" : "In progress")}</div>
      <div style="margin-top:18px;" class="plate-ring">
        <svg width="132" height="132" viewBox="0 0 132 132">
          <circle class="ring-bg" cx="66" cy="66" r="56"/>
          <circle class="ring-fg" cx="66" cy="66" r="56" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"/>
        </svg>
        <div class="plate-ring-label">
          <div class="big mono">${doneThisWeek}/${totalThisWeek}</div>
          <div class="small">${inFoundation ? "foundation" : "this week"}</div>
        </div>
      </div>
      <div class="stat-grid">
        <div class="stat"><div class="num mono">${state.sessions.length}</div><div class="lab">Sessions</div></div>
        <div class="stat"><div class="num mono">${streakCount()}</div><div class="lab">Day streak</div></div>
        <div class="stat"><div class="num mono">${inFoundation?"1-2":"3+"}</div><div class="lab">Week</div></div>
      </div>
      <div style="margin-top:18px;">
        <button class="btn btn-primary" id="btn-start-workout">Start ${day.label}</button>
      </div>
    </div>
    ${isDeloadWeek() ? `<div class="deload-banner">Deload week: do half the usual sets on each exercise, same weight as last week. This lets your body catch up.</div>` : ""}
    <div class="card-flat" style="margin-bottom:14px;">
      <div class="eyebrow" style="margin-bottom:8px;">Quick rules</div>
      <div style="font-size:12.5px; color:var(--text-dim); line-height:1.7;">
        Training alone — never take barbell bench press to failure.<br>
        5 min warm-up before every session.<br>
        Rest 60-90s between sets. Sharp pain means stop.
      </div>
    </div>
  `;
  document.getElementById("btn-start-workout").onclick = ()=>navigate("#train");
}

function streakCount(){
  if(state.sessions.length===0) return 0;
  const days = [...new Set(state.sessions.map(s=>s.date))].sort().reverse();
  let streak = 1;
  for(let i=0;i<days.length-1;i++){
    const a = new Date(days[i]); const b = new Date(days[i+1]);
    const diff = Math.round((a-b)/86400000);
    if(diff<=2) streak++; else break;
  }
  return streak;
}

/* ---- Draft persistence (fixes the v1 bug where mid-workout progress was lost
   on navigation/refresh — the draft now saves to localStorage on every input) ---- */
const DRAFT_KEY = "ironlog_draft_v1";
function saveDraft(){
  try{ localStorage.setItem(DRAFT_KEY, JSON.stringify(workoutDraft)); }catch(e){}
}
function loadDraft(dayKey){
  try{
    const raw = localStorage.getItem(DRAFT_KEY);
    if(!raw) return null;
    const parsed = JSON.parse(raw);
    if(parsed && parsed.dayKey === dayKey && parsed.phase === state.phase && parsed.programId === state.programId) return parsed;
  }catch(e){}
  return null;
}
function clearDraft(){ try{ localStorage.removeItem(DRAFT_KEY); }catch(e){} }

/* ---- Train ---- */
function renderTrain(){
  if(programIsEmpty()){ navigate("#home"); return; }
  const day = currentDay();
  if(!day){ navigate("#home"); return; }

  if(!workoutDraft || workoutDraft.dayKey !== day.key){
    const existing = loadDraft(day.key);
    if(existing){
      workoutDraft = existing;
    } else {
      workoutDraft = {dayKey: day.key, phase: state.phase, programId: state.programId, entries:{}};
      day.list.forEach(exo=>{
        const sets = isDeloadWeek() ? Math.max(1, Math.ceil(exo.sets/2)) : exo.sets;
        workoutDraft.entries[exo.key+"_"+day.key] = {reps:new Array(sets).fill(""), weight: exerciseWeight(exo)};
      });
      saveDraft();
    }
  }

  const cards = day.list.map((exo, i)=>{
    const move = getExercise(exo.key);
    const draftKey = exo.key+"_"+day.key;
    const draft = workoutDraft.entries[draftKey];
    const sets = draft.reps.length;
    const isOpen = openExerciseKey === draftKey;
    const weightLine = exo.weight===null ? "Bodyweight" : `${draft.weight}kg${move.equip==="dumbbell"?" / hand":""}`;

    const setRows = draft.reps.map((val,i2)=>`
      <div class="set-row">
        <div class="set-num mono">${i2+1}</div>
        <div class="mono" style="font-size:12px;color:var(--text-dim);align-self:center;">${targetLabel(exo,1).split("x")[1]} target</div>
        <input type="number" inputmode="numeric" placeholder="reps" data-draft="${draftKey}" data-set="${i2}" value="${val}">
      </div>`).join("");

    return `
    <div class="exercise ${isOpen?"open":""}" data-key="${draftKey}">
      <div class="exercise-head" data-toggle="${draftKey}">
        <div class="exercise-idx mono">${String(i+1).padStart(2,"0")}</div>
        <div class="exercise-name">${move.name}</div>
        <div class="exercise-target mono">${targetLabel(exo, sets)}</div>
        <svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="exercise-body">
        <div class="exercise-body-inner">
          <div class="cue">${move.cue}</div>
          ${move.detail ? `<button class="detail-toggle" data-detail="${draftKey}">Read full instructions</button>
          <p class="detail-text" id="detail-${draftKey}">${move.detail}</p>` : ""}
          ${exo.note?`<div class="cue" style="opacity:.75;">${exo.note}</div>`:""}
          ${exo.weight!==null ? `
          <div class="weight-editor">
            <button class="stepper" data-wminus="${draftKey}">–</button>
            <input class="mono" type="number" inputmode="decimal" data-weight="${draftKey}" value="${draft.weight}" style="max-width:90px;">
            <span class="mono" style="font-size:12px;color:var(--text-dim);">kg${move.equip==="dumbbell"?"/hand":""}</span>
            <button class="stepper" data-wplus="${draftKey}">+</button>
          </div>` : `<div class="cue mono" style="margin-bottom:12px;">${weightLine}</div>`}
          ${setRows}
          <div class="exercise-actions" style="margin-top:10px;">
            <button class="video-btn" data-video="${move.video}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>Watch form video</button>
            <button class="btn btn-ghost btn-sm" data-rest="${exo.key}">Start rest timer</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join("");

  root.innerHTML = `
    <div style="padding:14px 0 6px;">
      <div class="eyebrow">${state.phase==="foundation"&&activeProgram().hasFoundation?"Foundation":activeProgram().name}</div>
      <h1 style="font-size:26px;">${day.label}</h1>
    </div>
    ${cards}
    <button class="btn btn-primary" id="btn-finish" style="margin-top:6px;">Finish Workout</button>
  `;

  root.querySelectorAll("[data-toggle]").forEach(el=>{
    el.onclick = ()=>{
      const k = el.dataset.toggle;
      openExerciseKey = (openExerciseKey===k) ? null : k;
      renderTrain();
    };
  });
  root.querySelectorAll("[data-detail]").forEach(el=>{
    el.onclick = (e)=>{
      e.stopPropagation();
      const k = el.dataset.detail;
      document.getElementById("detail-"+k).classList.toggle("show");
    };
  });
  root.querySelectorAll("[data-set]").forEach(el=>{
    el.oninput = ()=>{
      const k = el.dataset.draft, i = +el.dataset.set;
      workoutDraft.entries[k].reps[i] = el.value;
      saveDraft();
    };
  });
  root.querySelectorAll("[data-weight]").forEach(el=>{
    el.oninput = ()=>{
      const k = el.dataset.weight;
      workoutDraft.entries[k].weight = parseFloat(el.value)||0;
      saveDraft();
    };
  });
  root.querySelectorAll("[data-wminus]").forEach(el=>{
    el.onclick = (e)=>{e.stopPropagation(); adjustDraftWeight(el.dataset.wminus, day, -1);};
  });
  root.querySelectorAll("[data-wplus]").forEach(el=>{
    el.onclick = (e)=>{e.stopPropagation(); adjustDraftWeight(el.dataset.wplus, day, 1);};
  });
  root.querySelectorAll("[data-video]").forEach(el=>{
    el.onclick = (e)=>{
      e.stopPropagation();
      const q = encodeURIComponent(el.dataset.video);
      window.open(`https://www.youtube.com/results?search_query=${q}`, "_blank");
    };
  });
  root.querySelectorAll("[data-rest]").forEach(el=>{
    el.onclick = (e)=>{
      e.stopPropagation();
      const exo = day.list.find(x=>x.key===el.dataset.rest);
      startTimer(restSeconds(exo));
    };
  });
  document.getElementById("btn-finish").onclick = ()=>finishWorkout(day);
}

function adjustDraftWeight(draftKey, day, dir){
  const exo = day.list.find(x => (x.key+"_"+day.key)===draftKey);
  const inc = exo.increment || 1;
  const d = workoutDraft.entries[draftKey];
  d.weight = Math.max(0, Math.round((d.weight + dir*inc)*10)/10);
  saveDraft();
  renderTrain();
}

function finishWorkout(day){
  const date = new Date().toISOString().slice(0,10);
  const suggestions = [];
  const setRows = [];

  day.list.forEach(exo=>{
    const draftKey = exo.key+"_"+day.key;
    const draft = workoutDraft.entries[draftKey];
    const move = getExercise(exo.key);
    const reps = draft.reps.map(r=>parseInt(r)||0);
    setRows.push({exercise:move.name, target:targetLabel(exo, draft.reps.length), weight:draft.weight, reps, repMax:exo.repMax, weighted: exo.weight!==null});

    if(exo.weight!==null && reps.length>0){
      const allTop = reps.every(r=>r>=exo.repMax) && reps.every(r=>r>0);
      if(allTop){
        const newWeight = Math.round((draft.weight + (exo.increment||1))*10)/10;
        state.weights[exo.key] = newWeight;
        suggestions.push(`${move.name}: hit top of range — moved up to ${newWeight}kg for next time.`);
      } else {
        state.weights[exo.key] = draft.weight;
      }
    }
  });

  const session = {date, dayKey:day.key, dayLabel:day.label, phase:state.phase, programName:activeProgram().name, sets:setRows};
  state.sessions.unshift(session);

  state.sessionIndex++;
  state.completedCount[state.phase]++;
  if(state.phase==="foundation" && activeProgram().hasFoundation && state.completedCount.foundation >= activeProgram().foundation.order.length){
    state.phase="main"; state.sessionIndex=0;
  }
  saveState();
  clearDraft();
  workoutDraft = null; openExerciseKey = null;
  vibrate(suggestions.length ? [40,60,40,60,80] : [40]);

  syncSessionToSheet(session).catch(()=>{ if(state.google.connected) toast("Saved locally — Sheets sync failed, check Settings"); });

  toast(suggestions.length ? "Nice work — weight increased on " + suggestions.length + " move(s)" : "Workout saved");
  if(suggestions.length){
    openModal(`
      <h2 style="margin-bottom:14px;">Session complete</h2>
      <p style="font-size:13.5px; color:var(--text-dim); line-height:1.7;">${suggestions.join("<br><br>")}</p>
      <button class="btn btn-primary" style="margin-top:16px;" data-close>Done</button>
    `);
  }
  navigate("#home");
}

/* ---- Timer ---- */
let timerInterval=null, timerRemaining=0;
function startTimer(seconds){
  clearInterval(timerInterval);
  timerRemaining = seconds;
  const bar = document.getElementById("timer-bar");
  bar.classList.add("show");
  updateTimerDisplay();
  timerInterval = setInterval(()=>{
    timerRemaining--;
    if(timerRemaining<=0){
      clearInterval(timerInterval); bar.classList.remove("show");
      vibrate([60,40,60]);
      toast("Rest done");
      if(document.hidden && state.notifPermission==="granted"){
        fireNotification("Rest done", "Back to it.");
      }
      return;
    }
    updateTimerDisplay();
  },1000);
}
function updateTimerDisplay(){
  const m = Math.floor(timerRemaining/60), s = timerRemaining%60;
  document.getElementById("timer-num").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}

/* ---- Progress ---- */
function renderProgress(){
  const logs = [...state.bodyLogs].sort((a,b)=>a.date.localeCompare(b.date));
  const spark = logs.length>1 ? buildSpark(logs.map(l=>l.weight)) : "";

  root.innerHTML = `
    <div class="card">
      <div class="eyebrow">Body log</div>
      <h1 style="font-size:24px; margin-bottom:6px;">Track every 2 weeks</h1>
      ${logs.length>1 ? `<svg class="spark" viewBox="0 0 300 70" preserveAspectRatio="none">${spark}</svg>` : `<div style="font-size:12.5px;color:var(--text-dim);margin:10px 0;">Log at least two entries to see a trend line.</div>`}
      <form id="body-form" style="margin-top:10px;">
        <div class="row">
          <div class="field"><label>Weight (kg)</label><input type="number" step="0.1" id="bf-weight" required></div>
          <div class="field"><label>Chest (in)</label><input type="number" step="0.1" id="bf-chest"></div>
        </div>
        <div class="row">
          <div class="field"><label>Waist (in)</label><input type="number" step="0.1" id="bf-waist"></div>
          <div class="field"><label>Arms (in)</label><input type="number" step="0.1" id="bf-arms"></div>
        </div>
        <div class="field"><label>Notes</label><input type="text" id="bf-notes" placeholder="optional"></div>
        <button class="btn btn-primary" type="submit">Save entry</button>
      </form>
    </div>
    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Entries</div>
      ${logs.length===0 ? `<div class="empty">No entries yet</div>` : [...logs].reverse().map(l=>`
        <div class="hist-item">
          <div><div class="hist-day">${l.weight}kg</div><div class="hist-date">${l.date}${l.chest?` · chest ${l.chest}in`:""}${l.waist?` · waist ${l.waist}in`:""}</div></div>
        </div>`).join("")}
    </div>
  `;
  document.getElementById("body-form").onsubmit = (e)=>{
    e.preventDefault();
    const entry = {
      date:new Date().toISOString().slice(0,10),
      weight:parseFloat(document.getElementById("bf-weight").value)||0,
      chest:document.getElementById("bf-chest").value,
      waist:document.getElementById("bf-waist").value,
      arms:document.getElementById("bf-arms").value,
      notes:document.getElementById("bf-notes").value
    };
    state.bodyLogs.push(entry);
    saveState();
    syncBodyLogToSheet(entry).catch(()=>{ if(state.google.connected) toast("Saved locally — Sheets sync failed, check Settings"); });
    toast("Entry saved");
    renderProgress();
  };
}
function buildSpark(values){
  const w=300,h=70,pad=8;
  const min=Math.min(...values), max=Math.max(...values);
  const range = (max-min)||1;
  const pts = values.map((v,i)=>{
    const x = pad + (i/(values.length-1))*(w-2*pad);
    const y = h-pad - ((v-min)/range)*(h-2*pad);
    return [x,y];
  });
  const d = pts.map((p,i)=> (i===0?"M":"L")+p[0].toFixed(1)+","+p[1].toFixed(1)).join(" ");
  const dots = pts.map(p=>`<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3"/>`).join("");
  return `<path d="${d}"/>${dots}`;
}

/* ---- History ---- */
function renderHistory(){
  root.innerHTML = `
    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Session history</div>
      ${state.sessions.length===0 ? `<div class="empty">No workouts logged yet</div>` :
        state.sessions.map(s=>`
        <div class="hist-item">
          <div><div class="hist-day">${s.dayLabel}</div><div class="hist-date">${s.date} · ${s.sets.length} exercises${s.programName?` · ${s.programName}`:""}</div></div>
          <span class="pill done">Done</span>
        </div>`).join("")}
    </div>
    <button class="btn btn-ghost" id="btn-export">Export .xlsx</button>
  `;
  document.getElementById("btn-export").onclick = exportXlsx;
}

/* ---- Settings (main) ---- */
function renderSettings(){
  root.innerHTML = `
    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Profile</div>
      <div class="field"><label>Your name</label><input type="text" id="s-name" value="${state.name}" placeholder="Optional"></div>
    </div>

    <div class="card">
      <div class="settings-row" style="border-bottom:none; padding-top:0;">
        <div><div class="lab">My Program</div><div class="sub">${activeProgram().name} · ${activeProgram().main.order.length + (activeProgram().hasFoundation?1:0)>0 ? countDays()+" day(s)" : "empty"}</div></div>
        <button class="btn btn-primary btn-sm" id="btn-open-builder">Edit</button>
      </div>
    </div>

    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Notifications</div>
      ${renderNotifRow()}
    </div>

    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Google Sheets sync</div>
      ${CONFIG.GOOGLE_CLIENT_ID.startsWith("PASTE_") ? `
        <div class="warn-box">Google sign-in isn't configured yet. Open the setup guide below.</div>
      ` : `
        ${state.google.connected && state.google.needsReauth ? `<div class="warn-box">Your Google session expired. Tap Reconnect — takes one tap, nothing is lost.</div>` : ""}
        <div class="settings-row">
          <div><span class="status-dot ${state.google.connected && !state.google.needsReauth?'connected':''}"></span>${state.google.connected ? (state.google.needsReauth ? "Needs reconnect" : (state.google.email||"Connected")) : "Not connected"}</div>
          <button class="btn ${state.google.connected && !state.google.needsReauth?'btn-ghost':'btn-primary'} btn-sm" id="btn-google">${state.google.connected && !state.google.needsReauth ? "Disconnect" : (state.google.needsReauth ? "Reconnect" : "Connect")}</button>
        </div>
        ${state.google.connected && state.google.sheetId ? `<div style="font-size:12px;margin-top:8px;"><a href="https://docs.google.com/spreadsheets/d/${state.google.sheetId}" target="_blank">Open your log sheet →</a></div>` : ""}
      `}
      <button class="btn btn-ghost btn-sm" id="btn-open-guide" style="margin-top:12px;">Setup Guide</button>
    </div>

    <div class="card">
      <div class="eyebrow" style="margin-bottom:4px;">Exercise weights</div>
      <div style="font-size:11.5px;color:var(--text-dim);margin-bottom:6px;">Edit any starting or current weight directly.</div>
      ${allWeightedExerciseRows()}
    </div>

    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Data</div>
      <div class="settings-row"><div><div class="lab">Export .xlsx</div><div class="sub">Workout log, body progress, current weights</div></div><button class="btn btn-ghost btn-sm" id="btn-export2">Export</button></div>
      <div class="settings-row"><div><div class="lab">Backup (.json)</div><div class="sub">Full backup incl. your custom program</div></div><button class="btn btn-ghost btn-sm" id="btn-export-json">Export</button></div>
      <div class="settings-row"><div><div class="lab">Restore backup</div><div class="sub">Load a previously exported .json file</div></div>
        <label class="btn btn-ghost btn-sm file-input-label">Choose file<input type="file" id="btn-import-json" accept="application/json" style="display:none;"></label>
      </div>
      <div class="settings-row"><div><div class="lab">Reset all data</div><div class="sub">Clears everything stored on this device</div></div><button class="btn btn-ember btn-sm" id="btn-reset">Reset</button></div>
    </div>
  `;

  document.getElementById("s-name").onchange = (e)=>{ state.name = e.target.value; saveState(); };
  document.getElementById("btn-open-builder").onclick = ()=>navigate("#settings/program");
  document.getElementById("btn-open-guide").onclick = ()=>navigate("#settings/guide");
  root.querySelectorAll("[data-exw]").forEach(el=>{
    el.onchange = ()=>{ state.weights[el.dataset.exw] = parseFloat(el.value)||0; saveState(); toast("Weight updated"); };
  });
  document.getElementById("btn-export2").onclick = exportXlsx;
  document.getElementById("btn-export-json").onclick = exportJson;
  document.getElementById("btn-import-json").onchange = importJson;
  document.getElementById("btn-reset").onclick = ()=>{
    openModal(`
      <h2 style="margin-bottom:10px;">Reset everything?</h2>
      <p style="font-size:13.5px;color:var(--text-dim);">This clears all sessions, body logs, your program, and weight history on this device. This can't be undone.</p>
      <div class="row" style="margin-top:16px;">
        <button class="btn btn-ghost" data-close>Cancel</button>
        <button class="btn btn-ember" id="btn-reset-confirm">Reset</button>
      </div>
    `);
    document.getElementById("btn-reset-confirm").onclick = ()=>{
      state = defaultState(); saveState(); clearDraft(); closeModal(); navigate("#home"); location.reload();
    };
  };
  const gbtn = document.getElementById("btn-google");
  if(gbtn) gbtn.onclick = ()=> (state.google.connected && !state.google.needsReauth) ? disconnectGoogle() : connectGoogle();
  wireNotifButton();
}
function countDays(){
  const p = activeProgram();
  return (p.hasFoundation?Object.keys(p.foundation.days).length:0) + Object.keys(p.main.days).length;
}
function allWeightedExerciseRows(){
  const seen = {};
  const prog = activeProgram();
  const buckets = prog.hasFoundation ? [prog.foundation.days, prog.main.days] : [prog.main.days];
  buckets.forEach(days=>{
    Object.values(days).forEach(d=>{
      d.list.forEach(exo=>{ if(exo.weight!==null && !seen[exo.key]) seen[exo.key]=true; });
    });
  });
  const keys = Object.keys(seen);
  if(!keys.length) return `<div class="empty">No weighted exercises in your program yet</div>`;
  return keys.map(key=>{
    const move = getExercise(key);
    const w = state.weights[key]!==undefined ? state.weights[key] : findDefaultWeight(key);
    return `<div class="exercise-weight-row"><div class="name">${move.name}</div><input class="mono" type="number" step="0.5" data-exw="${key}" value="${w}"></div>`;
  }).join("");
}
function findDefaultWeight(key){
  const prog = activeProgram();
  const buckets = prog.hasFoundation ? [prog.foundation.days, prog.main.days] : [prog.main.days];
  for(const days of buckets){
    for(const d of Object.values(days)){
      const found = d.list.find(x=>x.key===key);
      if(found && found.weight!==null) return found.weight;
    }
  }
  return 0;
}

/* ---- Notifications ---- */
function renderNotifRow(){
  if(!("Notification" in window)){
    return `<div class="sub" style="font-size:12.5px;color:var(--text-dim);">Not supported in this browser.</div>`;
  }
  const perm = Notification.permission;
  if(perm==="granted"){
    return `<div class="settings-row" style="border-bottom:none; padding-top:0;"><div><span class="status-dot connected"></span>Enabled</div><div class="sub" style="font-size:11.5px;">Fires when your rest timer ends while the app is in the background. Won't fire once the app is fully closed.</div></div>`;
  }
  if(perm==="denied"){
    return `<div class="sub" style="font-size:12.5px;color:var(--text-dim);">Blocked — re-enable from your browser's site settings if you want rest-timer alerts.</div>`;
  }
  return `<div class="notif-banner"><p>Get an alert when your rest timer ends, even if you've switched apps briefly.</p><button class="btn btn-primary btn-sm" id="btn-notif">Enable</button></div>`;
}
function wireNotifButton(){
  const b = document.getElementById("btn-notif");
  if(!b) return;
  b.onclick = async ()=>{
    try{
      const res = await Notification.requestPermission();
      state.notifPermission = res;
      saveState();
      renderSettings();
    }catch(e){ toast("Couldn't request permission"); }
  };
}
function fireNotification(title, body){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.getRegistration().then(reg=>{
      if(reg && reg.showNotification){ reg.showNotification(title, {body, tag:"ironlog-rest", icon:"icons/icon-192.png"}); }
      else { try{ new Notification(title, {body, tag:"ironlog-rest"}); }catch(e){} }
    }).catch(()=>{ try{ new Notification(title, {body, tag:"ironlog-rest"}); }catch(e){} });
  } else {
    try{ new Notification(title, {body, tag:"ironlog-rest"}); }catch(e){}
  }
}

/* ---- Program editor ---- */
function renderProgramEditor(){
  const prog = activeProgram();
  const dayBucket = prog.main; // foundation isn't editable — it's a built-in intro sequence for IRONLOG Original only

  const deloadRow = `
    <div class="card">
      <div class="eyebrow" style="margin-bottom:10px;">Deload weeks</div>
      <div class="settings-row" style="border-bottom:none; padding-top:0;">
        <div><div class="lab">Enable deload</div><div class="sub">Halves sets automatically on a schedule</div></div>
        <div class="toggle ${prog.deload.enabled?'on':''}" id="toggle-deload"></div>
      </div>
      ${prog.deload.enabled ? `<div class="field" style="margin-top:10px;"><label>Every N weeks</label><input type="number" id="deload-every" value="${prog.deload.every}" min="2" max="12"></div>` : ""}
    </div>`;

  const daysHtml = dayBucket.order.map((dayKey, idx)=>{
    const d = dayBucket.days[dayKey];
    const exRows = d.list.map((exo, exIdx)=>{
      const move = getExercise(exo.key);
      return `
      <div class="pe-row">
        <div class="reorder-btns">
          <button data-ex-up="${dayKey}:${exIdx}" ${exIdx===0?'disabled':''}>▲</button>
          <button data-ex-down="${dayKey}:${exIdx}" ${exIdx===d.list.length-1?'disabled':''}>▼</button>
        </div>
        <div style="flex:1;">
          <div class="pe-name">${move.name}</div>
          <div class="pe-meta">${targetLabel(exo)}${exo.weight!==null?` · ${exerciseWeight(exo)}kg`:''}</div>
        </div>
        <button class="icon-x" data-ex-remove="${dayKey}:${exIdx}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
      </div>`;
    }).join("");

    return `
    <div class="day-editor" data-day="${dayKey}">
      <div class="day-editor-head">
        <div class="reorder-btns">
          <button data-day-up="${dayKey}" ${idx===0?'disabled':''}>▲</button>
          <button data-day-down="${dayKey}" ${idx===dayBucket.order.length-1?'disabled':''}>▼</button>
        </div>
        <input type="text" data-day-rename="${dayKey}" value="${d.label}">
        <button class="icon-x" data-day-remove="${dayKey}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
      </div>
      ${exRows || `<div class="empty" style="padding:14px 0;">No exercises yet</div>`}
      <button class="add-exercise-btn" data-add-exercise="${dayKey}">+ Add Exercise</button>
    </div>`;
  }).join("");

  root.innerHTML = `
    <div style="padding:14px 0 6px; display:flex; align-items:center; gap:10px;">
      <button class="icon-btn" id="btn-back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
      <h1 style="font-size:22px;">My Program</h1>
    </div>
    <div class="card">
      <div class="settings-row" style="border-bottom:none; padding-top:0;">
        <div><div class="lab">${prog.name}</div><div class="sub">Switch to a different starting point</div></div>
        <button class="btn btn-ghost btn-sm" id="btn-switch-template">Templates</button>
      </div>
    </div>
    ${prog.hasFoundation ? `<div class="warn-box">This program has a built-in 2-week Foundation phase (not editable here) before the rotation below starts.</div>` : ""}
    ${daysHtml}
    <button class="add-day-btn" id="btn-add-day">+ Add Day</button>
    ${deloadRow}
  `;

  document.getElementById("btn-back").onclick = ()=>navigate("#settings");
  document.getElementById("btn-switch-template").onclick = ()=>navigate("#settings/templates");
  document.getElementById("btn-add-day").onclick = ()=>{
    const name = prompt("Name this day (e.g. Push Day):");
    if(!name) return;
    const key = "day_" + Math.random().toString(36).slice(2,8);
    dayBucket.days[key] = {label:name.trim(), list:[]};
    dayBucket.order.push(key);
    saveState(); renderProgramEditor();
  };
  const toggle = document.getElementById("toggle-deload");
  if(toggle) toggle.onclick = ()=>{ prog.deload.enabled = !prog.deload.enabled; saveState(); renderProgramEditor(); };
  const deloadEvery = document.getElementById("deload-every");
  if(deloadEvery) deloadEvery.onchange = ()=>{ prog.deload.every = Math.max(2, parseInt(deloadEvery.value)||4); saveState(); };

  root.querySelectorAll("[data-day-rename]").forEach(el=>{
    el.onchange = ()=>{ dayBucket.days[el.dataset.dayRename].label = el.value.trim() || "Untitled"; saveState(); };
  });
  root.querySelectorAll("[data-day-remove]").forEach(el=>{
    el.onclick = ()=>{
      const key = el.dataset.dayRemove;
      if(!confirm("Remove this day and its exercises?")) return;
      delete dayBucket.days[key];
      dayBucket.order = dayBucket.order.filter(k=>k!==key);
      saveState(); renderProgramEditor();
    };
  });
  root.querySelectorAll("[data-day-up]").forEach(el=>{
    el.onclick = ()=>{ swapOrder(dayBucket.order, el.dataset.dayUp, -1); saveState(); renderProgramEditor(); };
  });
  root.querySelectorAll("[data-day-down]").forEach(el=>{
    el.onclick = ()=>{ swapOrder(dayBucket.order, el.dataset.dayDown, 1); saveState(); renderProgramEditor(); };
  });
  root.querySelectorAll("[data-add-exercise]").forEach(el=>{
    el.onclick = ()=>{ builder.pickerForDay = el.dataset.addExercise; builder.pickerTab="library"; builder.pickerSearch=""; openExercisePicker(); };
  });
  root.querySelectorAll("[data-ex-remove]").forEach(el=>{
    el.onclick = ()=>{
      const [dayKey, idx] = el.dataset.exRemove.split(":");
      dayBucket.days[dayKey].list.splice(+idx,1);
      saveState(); renderProgramEditor();
    };
  });
  root.querySelectorAll("[data-ex-up]").forEach(el=>{
    el.onclick = ()=>{
      const [dayKey, idx] = el.dataset.exUp.split(":");
      swapIndex(dayBucket.days[dayKey].list, +idx, -1);
      saveState(); renderProgramEditor();
    };
  });
  root.querySelectorAll("[data-ex-down]").forEach(el=>{
    el.onclick = ()=>{
      const [dayKey, idx] = el.dataset.exDown.split(":");
      swapIndex(dayBucket.days[dayKey].list, +idx, 1);
      saveState(); renderProgramEditor();
    };
  });
}
function swapOrder(arr, key, dir){
  const i = arr.indexOf(key);
  const j = i+dir;
  if(j<0 || j>=arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function swapIndex(arr, i, dir){
  const j = i+dir;
  if(j<0 || j>=arr.length) return;
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/* ---- Exercise picker modal ---- */
function defaultWeightFor(equip){
  if(equip==="bodyweight") return {weight:null, increment:null};
  if(equip==="dumbbell") return {weight:6, increment:2};
  if(equip==="barbell") return {weight:10, increment:4};
  return {weight:5, increment:2};
}
function openExercisePicker(){
  renderExercisePicker();
  const backdrop = document.getElementById("modal-backdrop");
  backdrop.classList.add("show");
}
function renderExercisePicker(){
  const q = builder.pickerSearch.toLowerCase();
  let pool;
  if(builder.pickerTab==="library"){
    pool = Object.entries(LIBRARY).map(([key,m])=>({key,...m}));
  } else {
    pool = Object.entries(state.customExercises).map(([key,m])=>({key,...m}));
  }
  if(q) pool = pool.filter(m=>m.name.toLowerCase().includes(q));

  const list = pool.map(m=>`
    <div class="picker-item">
      <div><div class="name">${m.name}</div><div class="tag mono">${m.equip}</div></div>
      <button data-pick="${m.key}">Add</button>
    </div>`).join("") || `<div class="empty">No matches</div>`;

  document.getElementById("modal-sheet").innerHTML = `
    <div class="modal-handle"></div>
    <h2 style="margin-bottom:14px;">Add Exercise</h2>
    <div class="picker-tabs">
      <button class="picker-tab ${builder.pickerTab==='library'?'active':''}" data-tab="library">Library</button>
      <button class="picker-tab ${builder.pickerTab==='custom'?'active':''}" data-tab="custom">My Custom</button>
    </div>
    <input type="text" class="picker-search" placeholder="Search exercises..." id="picker-search" value="${builder.pickerSearch}">
    <div class="picker-list">${list}</div>
    <button class="add-exercise-btn" id="btn-new-custom" style="margin-top:14px;">+ Create Custom Exercise</button>
  `;
  document.getElementById("picker-search").oninput = (e)=>{ builder.pickerSearch = e.target.value; renderExercisePicker(); };
  document.querySelectorAll(".picker-tab").forEach(el=>{
    el.onclick = ()=>{ builder.pickerTab = el.dataset.tab; renderExercisePicker(); };
  });
  document.querySelectorAll("[data-pick]").forEach(el=>{
    el.onclick = ()=>{ addExerciseToDay(el.dataset.pick); };
  });
  document.getElementById("btn-new-custom").onclick = renderCustomExerciseForm;
}
function addExerciseToDay(key){
  const move = getExercise(key);
  const {weight, increment} = defaultWeightFor(move.equip);
  const dayKey = builder.pickerForDay;
  const prog = activeProgram();
  prog.main.days[dayKey].list.push(ex(key, 3, 8, 12, weight, increment));
  saveState();
  closeModal();
  renderProgramEditor();
  toast(`${move.name} added`);
}
function renderCustomExerciseForm(){
  document.getElementById("modal-sheet").innerHTML = `
    <div class="modal-handle"></div>
    <h2 style="margin-bottom:14px;">Create Custom Exercise</h2>
    <div class="field"><label>Name</label><input type="text" id="ce-name" placeholder="e.g. Resistance Band Row"></div>
    <div class="field"><label>Equipment</label>
      <select id="ce-equip">
        <option value="bodyweight">Bodyweight</option>
        <option value="dumbbell">Dumbbell</option>
        <option value="barbell">Barbell</option>
        <option value="other">Other / Machine</option>
      </select>
    </div>
    <div class="field"><label>Notes / form cue (optional)</label><textarea id="ce-notes" rows="3" placeholder="Any tips for yourself"></textarea></div>
    <button class="btn btn-primary" id="btn-save-custom">Add to Program</button>
  `;
  document.getElementById("btn-save-custom").onclick = ()=>{
    const name = document.getElementById("ce-name").value.trim();
    if(!name){ toast("Name it first"); return; }
    const equip = document.getElementById("ce-equip").value;
    const notes = document.getElementById("ce-notes").value.trim();
    const key = "custom_" + Math.random().toString(36).slice(2,8);
    state.customExercises[key] = {name, equip, cue:notes, detail:"", video: name.toLowerCase()+" exercise form"};
    saveState();
    addExerciseToDay(key);
  };
}

/* ---- Template picker ---- */
function renderTemplatePicker(){
  const cards = Object.values(TEMPLATES).map(t=>`
    <div class="template-card ${t.id===state.programId?'selected':''}" data-tpl="${t.id}">
      <h3>${t.name}</h3>
      <div class="desc">${t.description}</div>
      <div class="meta-row">${t.tags.map(tag=>`<span class="tpl-pill">${tag}</span>`).join("")}</div>
    </div>`).join("");
  root.innerHTML = `
    <div style="padding:14px 0 6px; display:flex; align-items:center; gap:10px;">
      <button class="icon-btn" id="btn-back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
      <h1 style="font-size:22px;">Templates</h1>
    </div>
    <p style="color:var(--text-dim); font-size:13px; margin-bottom:16px;">Switching keeps your workout history and any matching exercise weights, but resets your current rotation and applies the new program's structure.</p>
    ${cards}
  `;
  document.getElementById("btn-back").onclick = ()=>navigate("#settings/program");
  root.querySelectorAll("[data-tpl]").forEach(el=>{
    el.onclick = ()=>{
      const id = el.dataset.tpl;
      if(id===state.programId){ navigate("#settings/program"); return; }
      openModal(`
        <h2 style="margin-bottom:10px;">Switch to ${TEMPLATES[id].name}?</h2>
        <p style="font-size:13.5px;color:var(--text-dim);">Your workout history stays. Your rotation position resets to the start of this program.</p>
        <div class="row" style="margin-top:16px;">
          <button class="btn btn-ghost" data-close>Cancel</button>
          <button class="btn btn-primary" id="btn-switch-confirm">Switch</button>
        </div>
      `);
      document.getElementById("btn-switch-confirm").onclick = ()=>{
        state.programId = id;
        state.program = cloneTemplate(id);
        state.phase = state.program.hasFoundation ? "foundation" : "main";
        state.sessionIndex = 0;
        state.completedCount = {foundation:0, main:0};
        saveState(); clearDraft(); closeModal();
        navigate("#settings/program");
        toast(`Switched to ${TEMPLATES[id].name}`);
      };
    };
  });
}

/* ---- In-app setup guide ---- */
function renderGuide(){
  root.innerHTML = `
    <div style="padding:14px 0 6px; display:flex; align-items:center; gap:10px;">
      <button class="icon-btn" id="btn-back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
      <h1 style="font-size:22px;">Setup Guide</h1>
    </div>
    <p style="color:var(--text-dim); font-size:13px; margin-bottom:16px;">Only needed once, to enable Google Sheets sync. Everything else in the app already works without this.</p>

    <details class="guide-step" open>
      <summary><span><span class="num mono">01</span>Create your Google Cloud project</span></summary>
      <div class="gbody">
        Go to <span class="gbox">console.cloud.google.com/projectcreate</span> and sign in. Name the project, click Create, then check the project switcher at the top to make sure it's selected.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">02</span>Set up the consent screen</span></summary>
      <div class="gbody">
        Go to <span class="gbox">console.cloud.google.com/auth/branding</span> → <code>Get started</code>. Fill in App name and your email, choose <strong>External</strong> for Audience, finish the wizard.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">03</span>Add the Drive scope</span></summary>
      <div class="gbody">
        On the <code>Data access</code> tab → <code>Add or remove scopes</code> → paste in the manual box:
        <div class="gbox">https://www.googleapis.com/auth/drive.file</div>
        Click Add to table, then Update, then Save. If it's not in the checklist above, it's because Drive API isn't enabled yet — enable it from the API Library first.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">04</span>Create the Web Client</span></summary>
      <div class="gbody">
        <code>Clients</code> tab → <code>Create Client</code> → Application type <strong>Web application</strong>. Under <strong>Authorized JavaScript origins</strong>, add your GitHub Pages URL with no path and no trailing slash, e.g. <span class="gbox">https://yourusername.github.io</span>. Leave redirect URIs empty. Click Create and copy the Client ID.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">05</span>Publish to Production</span></summary>
      <div class="gbody">
        Since <code>drive.file</code> is a non-sensitive scope, you can publish immediately — no Google review needed. On the <code>Audience</code> tab, click <strong>Publish App</strong>. This removes the 100-test-user limit and the "unverified app" warning for everyone you share the link with.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">06</span>Paste the Client ID into the code</span></summary>
      <div class="gbody">
        In <code>app.js</code>, find <span class="gbox">PASTE_YOUR_GOOGLE_CLIENT_ID_HERE</span> near the top and replace it with the Client ID you copied. Re-upload the file to your GitHub repo.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">07</span>Host it on GitHub Pages</span></summary>
      <div class="gbody">
        Create a public repo → Add file → Upload files → drag in <em>all</em> the app files together (index.html, styles.css, app.js, manifest.json, sw.js, icons folder). Settings → Pages → Source: Deploy from a branch → Branch: main, folder: /(root) → Save. Your link appears at the top of that page after about a minute.
      </div>
    </details>
    <details class="guide-step">
      <summary><span><span class="num mono">08</span>Connect</span></summary>
      <div class="gbody">
        Open your link → Settings → Connect Google Sheets. A spreadsheet called "IRONLOG — Workout Data" appears in your Drive automatically, and every workout and body log syncs to it from then on.
      </div>
    </details>
  `;
  document.getElementById("btn-back").onclick = ()=>navigate("#settings");
}

/* ---------------------- Modal ---------------------- */
function openModal(html){
  const backdrop = document.getElementById("modal-backdrop");
  document.getElementById("modal-sheet").innerHTML = `<div class="modal-handle"></div>${html}`;
  backdrop.classList.add("show");
  backdrop.querySelectorAll("[data-close]").forEach(b=>b.onclick=closeModal);
}
function closeModal(){ document.getElementById("modal-backdrop").classList.remove("show"); }

/* ---------------------- Theme ---------------------- */
function applyTheme(){ document.documentElement.setAttribute("data-theme", state.theme); }
function toggleTheme(){ state.theme = state.theme==="dark" ? "light" : "dark"; applyTheme(); saveState(); }

/* ---------------------- Google Sign-In + Sheets sync ---------------------- */
let tokenClient = null;
let tokenWaiters = [];

function initGoogle(){
  if(CONFIG.GOOGLE_CLIENT_ID.startsWith("PASTE_")) return;
  if(!window.google || !google.accounts) { setTimeout(initGoogle, 400); return; }
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CONFIG.GOOGLE_CLIENT_ID,
    scope: CONFIG.SHEETS_SCOPE,
    callback: async (resp)=>{
      if(resp.error){
        toast("Google sign-in failed");
        tokenWaiters.forEach(w=>w.reject(new Error(resp.error)));
        tokenWaiters = [];
        return;
      }
      state.google.token = resp.access_token;
      state.google.tokenExpiresAt = Date.now() + ((resp.expires_in || 3300) * 1000);
      state.google.connected = true;
      state.google.needsReauth = false;
      saveState();
      tokenWaiters.forEach(w=>w.resolve(resp.access_token));
      tokenWaiters = [];
      if(!state.google.sheetId){ await createLogSheet(); }
      toast("Google Sheets connected");
      if(currentRoute().screen==="settings") renderSettings();
    }
  });
}
function connectGoogle(){
  if(!tokenClient){ toast("Google sign-in still loading, try again in a moment"); return; }
  tokenClient.requestAccessToken({prompt:"consent"});
}
function disconnectGoogle(){
  state.google.connected=false; state.google.token=null; state.google.tokenExpiresAt=null; state.google.needsReauth=false;
  saveState(); renderSettings(); toast("Disconnected");
}
function ensureFreshToken(){
  return new Promise((resolve,reject)=>{
    if(state.google.token && state.google.tokenExpiresAt && Date.now() < state.google.tokenExpiresAt - 60000){
      resolve(state.google.token); return;
    }
    if(!tokenClient || !state.google.connected){ reject(new Error("Not connected")); return; }
    let settled = false;
    tokenWaiters.push({
      resolve:(t)=>{ if(!settled){ settled=true; resolve(t); } },
      reject:(e)=>{ if(!settled){ settled=true; reject(e); } }
    });
    tokenClient.requestAccessToken({prompt:""});
    setTimeout(()=>{ if(!settled){ settled=true; reject(new Error("Silent refresh timed out")); } }, 8000);
  });
}
async function gfetch(url, options={}){
  let token;
  try{ token = await ensureFreshToken(); }
  catch(e){ state.google.needsReauth = true; saveState(); throw e; }
  options.headers = Object.assign({}, options.headers, {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json"
  });
  const res = await fetch(url, options);
  if(res.status===401){ state.google.needsReauth = true; saveState(); throw new Error("Google session expired"); }
  if(!res.ok) throw new Error("Google API error " + res.status);
  return res.json();
}
async function createLogSheet(){
  try{
    const title = state.name ? `IRONLOG — ${state.name}'s Workout Data` : "IRONLOG — Workout Data";
    const created = await gfetch("https://sheets.googleapis.com/v4/spreadsheets", {
      method:"POST",
      body: JSON.stringify({
        properties:{title},
        sheets:[
          {properties:{title:"Workout Log"}},
          {properties:{title:"Body Progress"}},
          {properties:{title:"Current Weights"}}
        ]
      })
    });
    state.google.sheetId = created.spreadsheetId;
    saveState();
    await gfetch(`https://sheets.googleapis.com/v4/spreadsheets/${created.spreadsheetId}/values/Workout Log!A1:J1?valueInputOption=RAW`, {
      method:"PUT", body: JSON.stringify({values:[["Date","Workout","Exercise","Target","Weight (kg)","Set 1 Reps","Set 2 Reps","Set 3 Reps","Weight Increased?","Notes"]]})
    });
    await gfetch(`https://sheets.googleapis.com/v4/spreadsheets/${created.spreadsheetId}/values/Body Progress!A1:G1?valueInputOption=RAW`, {
      method:"PUT", body: JSON.stringify({values:[["Date","Weight (kg)","Chest (in)","Waist (in)","Arms (in)","Photo Taken","Notes"]]})
    });
    await gfetch(`https://sheets.googleapis.com/v4/spreadsheets/${created.spreadsheetId}/values/Current Weights!A1:D1?valueInputOption=RAW`, {
      method:"PUT", body: JSON.stringify({values:[["Exercise","Current Weight (kg)","Next Target (kg)","Last Updated"]]})
    });
  }catch(e){ console.warn("Sheet creation failed", e); toast("Could not create Google Sheet"); }
}
async function syncSessionToSheet(session){
  if(!state.google.connected || !state.google.sheetId) return;
  const rows = session.sets.map(s=>[
    session.date, session.dayLabel, s.exercise, s.target, s.weighted ? s.weight : "bodyweight",
    s.reps[0]||"", s.reps[1]||"", s.reps[2]||"",
    (s.weighted && s.reps.length && s.reps.every(r=>r>=s.repMax) && s.reps.every(r=>r>0)) ? "Y":"N", ""
  ]);
  await gfetch(`https://sheets.googleapis.com/v4/spreadsheets/${state.google.sheetId}/values/Workout Log!A2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
    method:"POST", body: JSON.stringify({values: rows})
  });
}
async function syncBodyLogToSheet(entry){
  if(!state.google.connected || !state.google.sheetId) return;
  await gfetch(`https://sheets.googleapis.com/v4/spreadsheets/${state.google.sheetId}/values/Body Progress!A2:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
    method:"POST", body: JSON.stringify({values:[[entry.date, entry.weight, entry.chest, entry.waist, entry.arms, entry.notes?"":"", entry.notes]]})
  });
}

/* ---------------------- xlsx export ---------------------- */
function exportXlsx(){
  if(typeof XLSX==="undefined"){ toast("Export library still loading, try again"); return; }
  const wb = XLSX.utils.book_new();

  const logRows = [["Date","Workout","Exercise","Target","Weight (kg)","Set 1 Reps","Set 2 Reps","Set 3 Reps","Notes"]];
  state.sessions.forEach(s=>{
    s.sets.forEach(row=>{
      logRows.push([s.date, s.dayLabel, row.exercise, row.target, row.weighted ? row.weight : "bodyweight", row.reps[0]||"", row.reps[1]||"", row.reps[2]||"", ""]);
    });
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(logRows), "Workout Log");

  const bodyRows = [["Date","Weight (kg)","Chest (in)","Waist (in)","Arms (in)","Notes"]];
  state.bodyLogs.forEach(l=> bodyRows.push([l.date,l.weight,l.chest,l.waist,l.arms,l.notes]));
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(bodyRows), "Body Progress");

  const wRows = [["Exercise","Current Weight (kg)"]];
  const seen = new Set();
  const prog = activeProgram();
  const buckets = prog.hasFoundation ? [prog.foundation.days, prog.main.days] : [prog.main.days];
  buckets.forEach(days=>{
    Object.values(days).forEach(d=>{
      d.list.forEach(exo=>{
        if(exo.weight!==null && !seen.has(exo.key)){
          seen.add(exo.key);
          wRows.push([getExercise(exo.key).name, state.weights[exo.key]!==undefined?state.weights[exo.key]:exo.weight]);
        }
      });
    });
  });
  XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(wRows), "Current Weights");

  XLSX.writeFile(wb, "ironlog-export.xlsx");
  toast("Downloaded ironlog-export.xlsx");
}

/* ---------------------- JSON backup / restore ---------------------- */
function exportJson(){
  const blob = new Blob([JSON.stringify(state, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "ironlog-backup.json";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast("Backup downloaded");
}
function importJson(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    try{
      const parsed = JSON.parse(reader.result);
      if(!parsed || typeof parsed !== "object") throw new Error("bad file");
      state = Object.assign(defaultState(), migrate(parsed) || parsed);
      saveState();
      toast("Backup restored");
      navigate("#home");
      location.reload();
    }catch(err){ toast("Couldn't read that file"); }
  };
  reader.readAsText(file);
}

/* ---------------------- Service worker ---------------------- */
function registerSW(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js").catch(()=>{});
  }
}

/* ---------------------- Init ---------------------- */
function init(){
  applyTheme();
  document.getElementById("btn-theme").onclick = toggleTheme;
  document.getElementById("btn-guide").onclick = ()=> state.onboarded ? navigate("#settings/guide") : null;
  document.querySelectorAll(".nav-btn").forEach(b=> b.onclick = ()=>navigate("#"+b.dataset.screen));
  document.getElementById("timer-add").onclick = ()=>{ timerRemaining+=15; updateTimerDisplay(); };
  document.getElementById("timer-skip").onclick = ()=>{ clearInterval(timerInterval); document.getElementById("timer-bar").classList.remove("show"); };
  document.getElementById("modal-backdrop").addEventListener("click",(e)=>{ if(e.target.id==="modal-backdrop") closeModal(); });
  if("Notification" in window) state.notifPermission = Notification.permission;
  if(!location.hash) location.hash = "#home";
  render();
  initGoogle();
  registerSW();
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", init);
else init();

export const MUSCLE_GROUPS = [
  'Chest',
  'Back',
  'Shoulders',
  'Arms',
  'Legs',
  'Abs',
];
export const MUSCLE = [
  'Quadriceps',
  'Gluts',
  'Hamstrings',
  'Lower_back',
  'Chest',
  'Triceps',
  'Shoulders',
  'Biceps',
  'Calves',
  'Abs',
  'Upper_back',
  'Forearms',
  'Hips',
  'Thighs',
  'Back',
  'Arms',
  'Legs',
];
/*
- Wrist curls with barbells
- Wrist curls with dumbbells
- Reverse wrist curls with dumbbells 
- Reverse wrist curls  barbells
- Farmer's walks (carrying heavy weights)
- Hammer curls with dumbbells
- Plate pinches (holding a weight plate between your fingers and thumb)
- Towel pullups (hanging from a towel while gripping it with your hands).

 */
export const GROUPED_MUSCLE = [
  ['Triceps', 'Biceps', 'Forearms'],
  ['Quadriceps', 'Gluts', 'Hamstrings', 'Calves'],
  ['Chest','Shoulders','Back'],
];

export const redImages = {
  Chest: require('../assets/red/Chest_red.png'),
  Shoulders: require('../assets/red/Shoulders_red.png'),
  Back: require('../assets/red/Back_red.png'),
  Legs: require('../assets/red/Legs_red.png'),

  Abs: require('../assets/red/Abs_red.png'),

  Arms: require('../assets/red/Arms_red.png'),
  Triceps: require('../assets/red/Triceps_red.png'),
  Biceps: require('../assets/red/Biceps_red.png'),
  Forearms: require('../assets/red/Forearms_red.png'),

  Upper_back: require('../assets/red/Upper_back_red.png'),
  Lower_back: require('../assets/red/Lower_back_red.png'),

  Gluts: require('../assets/red/Gluts_red.png'),
  Calves: require('../assets/red/Calves_red.png'),
  Quadriceps: require('../assets/red/Quadriceps_red.png'),
  Hamstrings: require('../assets/red/Hamstrings_red.png'),
  Hips: require('../assets/red/Hips_red.png'),
  Thighs: require('../assets/red/Thighs_red.png'),
};
export const greenImages = {
  Quadriceps: require('../assets/green/Quadriceps_green.png'),
  Gluts: require('../assets/green/Gluts_green.png'),
  Hamstrings: require('../assets/green/Hamstrings_green.png'),
  Lower_back: require('../assets/green/Lower_back_green.png'),
  Chest: require('../assets/green/Chest_green.png'),
  Triceps: require('../assets/green/Triceps_green.png'),
  Shoulders: require('../assets/green/Shoulders_green.png'),
  Biceps: require('../assets/green/Biceps_green.png'),
  Calves: require('../assets/green/Calves_green.png'),
  Abs: require('../assets/green/Abs_green.png'),
  Upper_back: require('../assets/green/Upper_back_green.png'),
  Forearms: require('../assets/green/Forearms_green.png'),
  Hips: require('../assets/green/Hips_green.png'),
  Thighs: require('../assets/green/Thighs_green.png'),
  Back: require('../assets/green/Back_green.png'),
  Arms: require('../assets/green/Arms_green.png'),
  Legs: require('../assets/green/Legs_green.png'),
};

export const EXERCISES_PER_MUSCLE = {
  Chest: [
    'Barbell Bench Press',
    'Dumbbell Bench Press',
    'Incline Dumbbell Press',
    'Decline Barbell Bench Press',
    'Incline Barbell Bench Press',
    'Chest Flyes',
    'Push-Ups',
    'Dips',
    'Chest Press Machine',
    'Cable Crossover',
    'Barbell Pullover',
    'Dumbbell Pullover',
    'Pec Deck Machine',
    'Seated Chest Press Machine',
    'Chest Dips',
    'Plank to Push-Up',
    'Decline Push-Up',
    'Incline Push-Up',
    'Dumbbell Flyes',
    'Mountain Climbers',
  ],
  Shoulders: [
    'Barbell Shoulder Press',
    'Dumbbell Shoulder Press',
    'Arnold Press',
    'Lateral Raise',
    'Front Raise',
    'Rear Delt Flyes',
    'Bent Over Lateral Raise',
    'Upright Row',
    'Shrugs',
    'Facepulls',
    'Cable Lateral Raise',
    'Cable Front Raise',
    'Cable Rear Delt Flyes',
    'Dumbbell Lateral Raise',
    'Dumbbell Front Raise',
    'Dumbbell Rear Delt Flyes',
    'Push Press',
    'Overhead Press',
    'Landmine Press',
    'Barbell Shrugs',
  ],
  Back: [
    'Barbell Deadlift',
    'Dumbbell Deadlift',
    'Barbell Row',
    'Dumbbell Row',
    'T-Bar Row',
    'Seated Cable Row',
    'Lat Pulldown',
    'Pull-Ups',
    'Chin-Ups',
    'Inverted Row',
    'Face Pulls',
    'Reverse Flyes',
    'Bent Over Barbell Row',
    'Bent Over Dumbbell Row',
    'One Arm Dumbbell Row',
    'Superman',
    'Good Mornings',
    'Stiff Leg Deadlift',
    'Hyperextensions',
    'Cable Pull-Through',
  ],
  Arms: [
    'Barbell Curl',
    'Dumbbell Curl',
    'Hammer Curl',
    'Preacher Curl',
    'Concentration Curl',
    'Chin-Up',
    'Close Grip Bench Press',
    'Skull Crushers',
    'Tricep Pushdown',
    'Overhead Tricep Extension',
    'Tricep Dips',
    'Cable Curl',
    'Cable Tricep Extension',
    'Dumbbell Kickback',
    'Push-Up',
    'Plank',
    'Dumbbell Hammer Curl',
    'Barbell Wrist Curl',
    'Dumbbell Wrist Curl',
    'Forearm Plank',
  ],
  Legs: [
    'Barbell Squat',
    'Dumbbell Squat',
    'Lunges',
    'Step-Ups',
    'Leg Press',
    'Calf Raise',
    'Seated Calf Raise',
    'Deadlift',
    'Barbell Lunges',
    'Dumbbell Lunges',
    'Barbell Step-Ups',
    'Dumbbell Step-Ups',
    'Hip Thrust',
    'Glute Bridge',
    'Lateral Lunges',
    'Curtsy Lunges',
    'Reverse Lunges',
    'Box Jump',
    'Burpee',
    'Plyometric Lunges',
  ],
  Abs: [
    'Crunches',
    'Sit-Ups',
    'Russian Twist',
    'Plank',
    'Side Plank',
    'Bicycle Crunches',
    'Leg Raise',
    'Mountain Climbers',
    'Hollow Hold',
    'Reverse Crunch',
    'Flutter Kicks',
    'Heel Touches',
    'Scissor Kicks',
    'Vertical Leg Crunch',
    'Horizontal Leg Crunch',
    'Butterfly Sit-Up',
    'Toe Touches',
    'Reverse Crunch on Exercise Ball',
    'Oblique V-Up',
    'Russian Twist on Exercise Ball',
  ],
  
};


export const EXERCISES_PER_MUSCLE_ALL = {
  Chest: [
    'Barbell Bench Press',
    'Dumbbell Bench Press',
    'Incline Dumbbell Press',
    'Decline Barbell Bench Press',
    'Incline Barbell Bench Press',
    'Chest Flyes',
    'Push-Ups',
    'Dips',
    'Chest Press Machine',
    'Cable Crossover',
    'Barbell Pullover',
    'Dumbbell Pullover',
    'Pec Deck Machine',
    'Seated Chest Press Machine',
    'Chest Dips',
    'Plank to Push-Up',
    'Decline Push-Up',
    'Incline Push-Up',
    'Dumbbell Flyes',
    'Mountain Climbers',
  ],
  Back: [
    'Barbell Deadlift',
    'Dumbbell Deadlift',
    'Barbell Row',
    'Dumbbell Row',
    'T-Bar Row',
    'Seated Cable Row',
    'Lat Pulldown',
    'Pull-Ups',
    'Chin-Ups',
    'Inverted Row',
    'Face Pulls',
    'Reverse Flyes',
    'Bent Over Barbell Row',
    'Bent Over Dumbbell Row',
    'One Arm Dumbbell Row',
    'Superman',
    'Good Mornings',
    'Stiff Leg Deadlift',
    'Hyperextensions',
    'Cable Pull-Through',
  ],
  Shoulders: [
    'Barbell Shoulder Press',
    'Dumbbell Shoulder Press',
    'Arnold Press',
    'Lateral Raise',
    'Front Raise',
    'Rear Delt Flyes',
    'Bent Over Lateral Raise',
    'Upright Row',
    'Shrugs',
    'Facepulls',
    'Cable Lateral Raise',
    'Cable Front Raise',
    'Cable Rear Delt Flyes',
    'Dumbbell Lateral Raise',
    'Dumbbell Front Raise',
    'Dumbbell Rear Delt Flyes',
    'Push Press',
    'Overhead Press',
    'Landmine Press',
    'Barbell Shrugs',
  ],
  Arms: [
    'Barbell Curl',
    'Dumbbell Curl',
    'Hammer Curl',
    'Preacher Curl',
    'Concentration Curl',
    'Chin-Up',
    'Close Grip Bench Press',
    'Skull Crushers',
    'Tricep Pushdown',
    'Overhead Tricep Extension',
    'Tricep Dips',
    'Cable Curl',
    'Cable Tricep Extension',
    'Dumbbell Kickback',
    'Push-Up',
    'Plank',
    'Dumbbell Hammer Curl',
    'Barbell Wrist Curl',
    'Dumbbell Wrist Curl',
    'Forearm Plank',
  ],
  Legs: [
    'Barbell Squat',
    'Dumbbell Squat',
    'Lunges',
    'Step-Ups',
    'Leg Press',
    'Calf Raise',
    'Seated Calf Raise',
    'Deadlift',
    'Barbell Lunges',
    'Dumbbell Lunges',
    'Barbell Step-Ups',
    'Dumbbell Step-Ups',
    'Hip Thrust',
    'Glute Bridge',
    'Lateral Lunges',
    'Curtsy Lunges',
    'Reverse Lunges',
    'Box Jump',
    'Burpee',
    'Plyometric Lunges',
  ],
  Abs: [
    'Crunches',
    'Sit-Ups',
    'Russian Twist',
    'Plank',
    'Side Plank',
    'Bicycle Crunches',
    'Leg Raise',
    'Mountain Climbers',
    'Hollow Hold',
    'Reverse Crunch',
    'Flutter Kicks',
    'Heel Touches',
    'Scissor Kicks',
    'Vertical Leg Crunch',
    'Horizontal Leg Crunch',
    'Butterfly Sit-Up',
    'Toe Touches',
    'Reverse Crunch on Exercise Ball',
    'Oblique V-Up',
    'Russian Twist on Exercise Ball',
  ],
  Forearms: [
    'Barbell Wrist Curl',
    'Dumbbell Wrist Curl',
    'Reverse Wrist Curl',
    'Forearm Plank',
    'Reverse Forearm Curl',
    'Farmers Walk',
    'Grip Pull-Down',
    'Grip Push-Up',
    'Grip Plate Curl',
    'Grip Reverse Plate Curl',
    'Grip Plate Pinch',
  ],
  Traps: [
    'Barbell Shrugs',
    'Dumbbell Shrugs',
    'Barbell Upright Row',
    'Dumbbell Upright Row',
    'Trap Bar Deadlift',
    'Power Clean',
    'Hang Clean',
    'Clean and Press',
    'Barbell High Pull',
    'Dumbbell High Pull',
    'Barbell Clean and Jerk',
  ],
  Calves: [
    'Calf Raise',
    'Seated Calf Raise',
    'Donkey Calf Raise',
    'Standing Calf Raise',
    'Leg Press Calf Raise',
    'Smith Machine Calf Raise',
    'Reverse Calf Raise',
    'Single Leg Calf Raise',
    'Calf Raise on Leg Press Machine',
    'Calf Stretch',
    'Calf Roll',
  ],
  Gluts: [
    'Barbell Hip Thrust',
    'Dumbbell Hip Thrust',
    'Glute Bridge',
    'Lunges',
    'Step-Ups',
    'Deadlift',
    'Barbell Lunges',
    'Dumbbell Lunges',
    'Barbell Step-Ups',
    'Dumbbell Step-Ups',
    'Hip Extension',
    'Cable Kickback',
  ],
  Quads: [
    'Barbell Squat',
    'Dumbbell Squat',
    'Leg Press',
    'Lunges',
    'Step-Ups',
    'Barbell Lunges',
    'Dumbbell Lunges',
    'Barbell Step-Ups',
    'Dumbbell Step-Ups',
    'Leg Extension',
    'Leg Curl',
    'Plyometric Lunges',
  ],
  Hamstrings: [
    'Barbell Deadlift',
    'Dumbbell Deadlift',
    'Barbell Romanian Deadlift',
    'Dumbbell Romanian Deadlift',
    'Barbell Good Morning',
    'Dumbbell Good Morning',
    'Leg Curl',
    'Stiff Leg Deadlift',
    'Cable Pull-Through',
    'Hyperextensions',
    'Single Leg Deadlift',
    'Lunges',
  ],
};

export const workoutLog = [
  {
    date: "2022-01-03",
    muscles: [
      {
        name: "shoulders",
        exercises: [
          {
            name: "Shoulder Press",
            sets: [
              { reps: 8, weight: 30 },
              { reps: 8, weight: 35 },
              { reps: 8, weight: 40 },
            ],
          },
          {
            name: "dumbbell upright rows",
            sets: [
              { reps: 8, weight: 20 },
              { reps: 8, weight: 25 },
            ],
          },
          {
            name: "lateral raises",
            sets: [
              { reps: 12, weight: 10 },
              { reps: 12, weight: 12 },
            ],
          },
        ],
      },
      {
        name: "biceps",
        exercises: [
          {
            name: "barbell curl",
            sets: [
              { reps: 8, weight: 30 },
              { reps: 8, weight: 35 },
              { reps: 8, weight: 40 },
            ],
          },
          {
            name: "hammer curl",
            sets: [
              { reps: 12, weight: 15 },
              { reps: 12, weight: 17 },
            ],
          },
        ],
      },
      {
        name: "legs",
        exercises: [
          {
            name: "squat",
            sets: [
              { reps: 8, weight: 50 },
              { reps: 8, weight: 55 },
              { reps: 8, weight: 60 },
            ],
          },
          {
            name: "leg press",
            sets: [
              { reps: 12, weight: 70 },
              { reps: 12, weight: 75 },
            ],
          },
          {
            name: "leg extension",
            sets: [
              { reps: 12, weight: 20 },
              { reps: 12, weight: 25 },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2022-01-04",
    muscles: [
      {
        name: "chest",
        exercises: [
          {
            name: "bench press",
            sets: [
              { reps: 8, weight: 80 },
              { reps: 8, weight: 85 },
              { reps: 8, weight: 90 },
            ],
          },
          {
            name: "dumbbell fly",
            sets: [
              { reps: 12, weight: 20 },
              { reps: 12, weight: 22 },
            ],
          },
        ],
      },
      {
        name: "back",
        exercises: [
          {
            name: "deadlift",
            sets: [
              { reps: 8, weight: 100 },
              { reps: 8, weight: 110 },
              { reps: 8, weight: 120 },
            ],
          },
          {
            name: "pull-ups",
            sets: [{ reps: 12 }, { reps: 12 }, { reps: 12 }],
          },
        ],
      },
      {
        name: "legs",
        exercises: [
          {
            name: "leg curl",
            sets: [
              { reps: 8, weight: 50 },
              { reps: 8, weight: 55 },
              { reps: 8, weight: 60 },
            ],
          },
          {
            name: "calf raises",
            sets: [
              { reps: 12, weight: 30 },
              { reps: 12, weight: 35 },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2022-01-05",
    muscles: [
      {
        name: "triceps",
        exercises: [
          {
            name: "dips",
            sets: [{ reps: 8 }, { reps: 8 }, { reps: 8 }],
          },
          {
            name: "tricep pushdown",
            sets: [
              { reps: 12, weight: 20 },
              { reps: 12, weight: 22 },
            ],
          },
        ],
      },
      {
        name: "forearms",
        exercises: [
          {
            name: "wrist curl",
            sets: [
              { reps: 8, weight: 15 },
              { reps: 8, weight: 17 },
              { reps: 8, weight: 20 },
            ],
          },
          {
            name: "reverse wrist curl",
            sets: [
              { reps: 12, weight: 15 },
              { reps: 12, weight: 17 },
            ],
          },
        ],
      },
    ],
  },
  {
    date: "2022-01-06",
    muscles: [
      {
        name: "legs",
        exercises: [
          {
            name: "squats",
            sets: [
              { reps: 8, weight: 50 }, { reps: 8, weight: 55 }, { reps: 8, weight: 60 } ],
          },
          {
            name: "leg press",
            sets: [
              { reps: 12, weight: 70 }, { reps: 12, weight: 75 } ],
          },
        ],
      },
      {
        name: "abs",
        exercises: [
          {
            name: "crunches",
            sets: [
              { reps: 15 }, { reps: 15 }, { reps: 15 } ],
          },
          {
            name: "planks",
            sets: [
              { time: 30 }, { time: 30 }, { time: 30 } ],
          },
        ],
      },
    ],
  },

  {
    date: "2022-01-07",
    muscles: [
      {
        name: "back",
        exercises: [
          {
            name: "pull-ups",
            sets: [
              { reps: 8 }, { reps: 8 }, { reps: 8 } ],
          },
          {
            name: "deadlifts",
            sets: [
              { reps: 8, weight: 100 }, { reps: 8, weight: 110 }, { reps: 8, weight: 120 } ],
          },
        ],
      },
      {
        name: "cardio",
        exercises: [
          {
            name: "treadmill",
            sets: [
              { time: 20, distance: 1 }, { time: 20, distance: 1 }, { time: 20, distance: 1 } ],
          },
          {
            name: "bicycle",
            sets: [
              { time: 20, distance: 10 }, { time: 20, distance: 10 }, { time: 20, distance: 10 } ],
          },
        ],
      },
    ],
  },
  {
    date: "2022-01-08",
    muscles: [
      {
        name: "chest",
        exercises: [
          {
            name: "bench press",
            sets: [
              { reps: 8, weight: 60 }, { reps: 8, weight: 65 }, { reps: 8, weight: 70 } ],
          },
          {
            name: "dumbbell flyes",
            sets: [
              { reps: 12, weight: 20 }, { reps: 12, weight: 25 }, { reps: 12, weight: 30 } ],
          },
        ],
      },
      {
        name: "calves",
        exercises: [
          {
            name: "standing calf raises",
            sets: [
              { reps: 12, weight: 30 }, { reps: 12, weight: 35 }, { reps: 12, weight: 40 } ],
          },
          {
            name: "seated calf raises",
            sets: [
              { reps: 12, weight: 30 }, { reps: 12, weight: 35 }, { reps: 12, weight: 40 } ],
          },
        ],
      },
    ],
  },
  {
    date: "2022-01-09",
    muscles: [
      {
        name: "legs",
        exercises: [
          {
            name: "squats",
            sets: [
              { reps: 8, weight: 50 }, { reps: 8, weight: 55 }, { reps: 8, weight: 60 } ],
          },
          {
            name: "leg press",
            sets: [
              { reps: 12, weight: 80 }, { reps: 12, weight: 90 }, { reps: 12, weight: 100 } ],
          },
        ],
      },
      {
        name: "abs",
        exercises: [
          {
            name: "crunches",
            sets: [
              { reps: 20 }, { reps: 20 }, { reps: 20 } ],
          },
          {
            name: "leg raises",
            sets: [
              { reps: 20 }, { reps: 20 }, { reps: 20 } ],
          },
        ],
      },
    ],
  },
];


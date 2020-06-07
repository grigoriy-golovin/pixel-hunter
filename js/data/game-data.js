
export const INIT_STATE = {
  life: 3,
  level: 0,
}


// export let userResponses = [
//   {isCorrect: true, timeSec: 15},
//   {isCorrect: false, timeSec: 15},
//   {isCorrect: true, timeSec: 8},
//   {isCorrect: true, timeSec: 23},
//   {isCorrect: true, timeSec: 8},
//   {isCorrect: true, timeSec: 23},
// ];

// export const ResetState = () => {
//   currentState = Object.assign({}, INIT_STATE);
//   userResponses = [];
// }

//  const stat = userResponses.map((item) => {
// if (!item.isCorrect) {
//   return 'wrong';
// };
// if (item.timeSec < 10) {
//   return 'fast';
// };
// if (item.timeSec > 20) {
//   return 'slow';
// };
// return 'correct';
// }).concat(new Array(10 - userResponses.length).fill('unknown'));




// const dataGame = [
// {
//   stat,
//   showScreen: game1,
//   image: [
//     {url: 'https://i.imgur.com/1KegWPz.jpg', type: 'photo'},
//     {url: 'https://k42.kn3.net/CF42609C8.jpg', type: 'painting'},
//   ],
//   nextGame: 1,
// },
// {
//   stat,
//   image: [
//     {url: 'https://i.imgur.com/1KegWPz.jpg', type: 'photo'},
//   ],
//   nextGame: 2,
//   showScreen: game2,
// },
// {
//   stat,
//   showScreen: game3,
//   task: 'Найдите рисунок среди изображений',
//   image: [
//     {url: 'https://i.imgur.com/1KegWPz.jpg', type: 'photo'},
//     {url: 'https://k42.kn3.net/CF42609C8.jpg', type: 'painting'},
//     {url: 'https://k42.kn3.net/CF42609C8.jpg', type: 'painting'},
//   ],
//   nextGame: 0,
// },
// ];



// export const life = new Array(3 - currentState.life).fill({
//   src: "img/heart__empty.svg",
//   alt: "Missed Life",
// }).concat( new Array(currentState.life).fill({
//   src: "img/heart__full.svg",
//   alt: "Life",
// }));


export const dataQuestion = [
  {
    "type": "two-of-two",
    "question": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "tinder-like",
    "question": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 705,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "one-of-three",
    "question": "Найдите рисунок среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "one-of-three",
    "question": "Найдите фото среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "two-of-two",
    "question": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "tinder-like",
    "question": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 705,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "one-of-three",
    "question": "Найдите рисунок среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "one-of-three",
    "question": "Найдите фото среди изображений",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "painting"
      },
      {
        "image": {
          "url": "http://placehold.it/304x455",
          "width": 304,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
  {
    "type": "two-of-two",
    "question": "Угадайте для каждого изображения фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "photo"
      },
      {
        "image": {
          "url": "http://placehold.it/468x458",
          "width": 468,
          "height": 458
        },
        "type": "painting"
      }
    ]
  },
  {
    "type": "tinder-like",
    "question": "Угадай, фото или рисунок?",
    "answers": [
      {
        "image": {
          "url": "http://placehold.it/705x455",
          "width": 705,
          "height": 455
        },
        "type": "photo"
      }
    ]
  },
]

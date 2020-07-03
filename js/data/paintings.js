const imageObject = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,
    `https://k38.kn3.net/AD92BA712.jpg`,
    `https://k35.kn3.net/9ACD0AC56.jpg`,
    `https://k32.kn3.net/42C83EF0A.jpg`,
    `https://k39.kn3.net/B27A12A74.jpg`,
    `https://k37.kn3.net/47F2604E3.jpg`,
    `https://k38.kn3.net/20B8A2B58.jpg`,
    `https://k42.kn3.net/F588C1419.jpg`,
    `https://k43.kn3.net/956572A45.jpg`,
    `https://k43.kn3.net/27AC45B8B.jpg`,
    `https://k39.kn3.net/E07A38605.jpg`,
    `https://k36.kn3.net/1619797DF.jpg`,
    `https://k37.kn3.net/695A61B3C.jpg`,
    `https://k37.kn3.net/0F4598844.jpg`,
    `https://k35.kn3.net/2B925F44D.jpg`,
    `https://k36.kn3.net/E9B401148.jpg`,
    `https://k34.kn3.net/4244FE50B.jpg`,
    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,
    `https://k41.kn3.net/CF684A85A.jpg`,
    `https://k37.kn3.net/51254FE87.jpg`,
    `https://k43.kn3.net/1C4F7F5D5.jpg`,
    `https://k41.kn3.net/FF5009BF0.jpg`,
    // Nature
    `https://k40.kn3.net/6A7A24F7C.jpg`,
    `https://k31.kn3.net/4BF6BBF0E.jpg`,
    `https://k42.kn3.net/D660F0768.jpg`,
    `https://k32.kn3.net/5C7060EC5.jpg`,
  ],
  photos: [
    // People
    `http://i.imgur.com/ncXRs5Y.jpg`,
    `http://i.imgur.com/gUeK0qE.jpg`,
    `http://i.imgur.com/dWTKNtv.jpg`,
    `https://i.imgur.com/NXlVX48.png`,
    `http://i.imgur.com/rY9u55S.jpg`,
    `http://i.imgur.com/1KegWPz.jpg`,
    `http://i.imgur.com/Gvq3jc2.jpg`,
    `http://i.imgur.com/Jvzh3pk.jpg`,
    `https://i.redd.it/apoalsgb702y.jpg`,
    `http://imgur.com/18zh0az.jpg`,
    `https://i.redd.it/l08jq66vul2y.jpg`,
    `http://i.imgur.com/UIHVp0P.jpg`,
    `https://i.redd.it/n1vqglrr0o2y.jpg`,
    // Animals
    `http://i.imgur.com/eSlWjE7.jpg`,
    `http://i.imgur.com/GbcYNPw.jpg`,
    `http://i.imgur.com/jP4C1IS.jpg`,
    `https://i.redd.it/bj70zjl196kx.jpg`,
    `https://i.imgur.com/DiHM5Zb.jpg`,
    `http://i.imgur.com/jBLSxQ9.png`,
    // Nature
    `http://i.imgur.com/q7rBB8Y.jpg`,
    `http://i.imgur.com/167pXyY.jpg`,
    `https://i.redd.it/cfw21jscl03y.jpg`,
    `http://i.imgur.com/W5DNOVJ.jpg`,
    `https://i.redd.it/0uvt7jy0hy2y.jpg`,
    `http://i.imgur.com/zHRZW1C.jpg`,
    `http://i.imgur.com/mz0MSsy.jpg`,
    `http://i.imgur.com/DKR1HtB.jpg`,
  ],
};

const preloadImage = function (url) {
  return new Promise((resolve, reject) => {
    const image = document.createElement(`img`);
    image.onload = resolve(image.width);
    image.onerror = reject;
    image.src = url;

  });
};

const getImage = () => {
  Promise.all(imageObject.paintings.map((item) => preloadImage(item)))
// .then((it) => it())
.then(console.log);
};

// const getImage = () => {
//   imageObject.photos.forEach((element) => {
//     const img = document.createElement(`img`);
//     img.src = element;
//     img.onload = () =>
//       console.log({
//         width: img.width,
//         height: img.height,
//         url: img.src,
//       });
//   });
// };

export default getImage;

// (resolve) => {
//   return resolve.map((img) => {
//     return {
//       img,
//       image: {
//         url: img.src,
//         width: img.namespaceURI,
//         height: img.naturalHeight
//       },
//       type: `paintings`,

//     };
//   });
// }

const paintingsFull = [
  {
    type: `paintings`,
    image: {width: 600, height: 831, url: "https://k42.kn3.net/CF42609C8.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 600, height: 765, url: "https://k38.kn3.net/AD92BA712.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 618, height: 600, url: "https://k32.kn3.net/42C83EF0A.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 600, height: 833, url: "https://k35.kn3.net/9ACD0AC56.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 485, height: 592, url: "https://k39.kn3.net/B27A12A74.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 435, height: 600, url: "https://k38.kn3.net/20B8A2B58.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 435, height: 556, url: "https://k37.kn3.net/47F2604E3.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 346, height: 500, url: "https://k43.kn3.net/27AC45B8B.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 386, height: 500, url: "https://k43.kn3.net/956572A45.jpg"},
  },
  {
    type: `paintings`,
    image: {
      width: 1136,
      height: 1600,
      url: "https://k42.kn3.net/F588C1419.jpg",
    },
  },
  {
    type: `paintings`,
    image: {width: 382, height: 500, url: "https://k39.kn3.net/E07A38605.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 550, height: 793, url: "https://k36.kn3.net/1619797DF.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 566, height: 535, url: "https://k37.kn3.net/695A61B3C.jpg"},
  },
  {
    type: `paintings`,
    image: {
      width: 1600,
      height: 1055,
      url: "https://k37.kn3.net/0F4598844.jpg",
    },
  },
  {
    type: `paintings`,
    image: {width: 600, height: 760, url: "https://k35.kn3.net/2B925F44D.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 600, height: 903, url: "https://k36.kn3.net/E9B401148.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 574, height: 864, url: "https://k34.kn3.net/4244FE50B.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 468, height: 354, url: "https://k42.kn3.net/D2F0370D6.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 700, height: 539, url: "https://k37.kn3.net/51254FE87.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 753, height: 532, url: "https://k41.kn3.net/CF684A85A.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 618, height: 392, url: "https://k41.kn3.net/FF5009BF0.jpg"},
  },
  {
    type: `paintings`,
    image: {width: 1129, height: 885, url: "https://k31.kn3.net/4BF6BBF0E.jpg"},
  },
  {
    type: `paintings`,
    image: {
      width: 1500,
      height: 1027,
      url: "https://k40.kn3.net/6A7A24F7C.jpg",
    },
  },
  {
    type: `paintings`,
    image: {width: 750, height: 468, url: "https://k42.kn3.net/D660F0768.jpg"},
  },
  {
    type: `paintings`,
    image: {
      width: 1415,
      height: 1800,
      url: "https://k43.kn3.net/1C4F7F5D5.jpg",
    },
  },
  {
    type: `paintings`,
    image: {width: 1200, height: 900, url: "https://k32.kn3.net/5C7060EC5.jpg"},
  },
];

const photo = [
  {
    type: `photo`,
    image: {width: 707, height: 960, url: "https://i.redd.it/bj70zjl196kx.jpg"},
  },
  {
    type: `photo`,
    image: {width: 950, height: 534, url: "https://i.imgur.com/NXlVX48.png"},
  },
  {
    type: `photo`,
    image: {width: 130, height: 60, url: "https://i.redd.it/n1vqglrr0o2y.jpg"},
  },
  {
    type: `photo`,
    image: {width: 130, height: 60, url: "https://i.redd.it/apoalsgb702y.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1264, height: 1864, url: "https://i.imgur.com/DiHM5Zb.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1024, height: 576, url: "http://i.imgur.com/ncXRs5Y.jpg"},
  },
  {
    type: `photo`,
    image: {width: 640, height: 482, url: "http://i.imgur.com/gUeK0qE.jpg"},
  },
  {
    type: `photo`,
    image: {width: 700, height: 687, url: "http://i.imgur.com/rY9u55S.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1536, height: 2048, url: "http://i.imgur.com/dWTKNtv.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1080, height: 720, url: "http://i.imgur.com/1KegWPz.jpg"},
  },
  {
    type: `photo`,
    image: {width: 2048, height: 1365, url: "http://i.imgur.com/Gvq3jc2.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1912, height: 2867, url: "http://imgur.com/18zh0az.jpg"},
  },
  {
    type: `photo`,
    image: {width: 463, height: 656, url: "http://i.imgur.com/UIHVp0P.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1600, height: 1067, url: "http://i.imgur.com/Jvzh3pk.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1024, height: 624, url: "http://i.imgur.com/GbcYNPw.jpg"},
  },
  {
    type: `photo`,
    image: {width: 360, height: 640, url: "http://i.imgur.com/jP4C1IS.jpg"},
  },
  {
    type: `photo`,
    image: {width: 419, height: 559, url: "http://i.imgur.com/jBLSxQ9.png"},
  },
  {
    type: `photo`,
    image: {width: 1200, height: 800, url: "http://i.imgur.com/eSlWjE7.jpg"},
  },
  {
    type: `photo`,
    image: {width: 750, height: 872, url: "http://i.imgur.com/q7rBB8Y.jpg"},
  },
  {
    type: `photo`,
    image: {width: 564, height: 423, url: "http://i.imgur.com/167pXyY.jpg"},
  },
  {
    type: `photo`,
    image: {width: 600, height: 866, url: "http://i.imgur.com/zHRZW1C.jpg"},
  },
  {
    type: `photo`,
    image: {
      width: 5616,
      height: 3744,
      url: "https://i.redd.it/l08jq66vul2y.jpg",
    },
  },
  {
    type: `photo`,
    image: {
      width: 1080,
      height: 1080,
      url: "https://i.redd.it/0uvt7jy0hy2y.jpg",
    },
  },
  {
    type: `photo`,
    image: {
      width: 681,
      height: 1024,
      url: "https://i.redd.it/cfw21jscl03y.jpg",
    },
  },
  {
    type: `photo`,
    image: {width: 1120, height: 2965, url: "http://i.imgur.com/DKR1HtB.jpg"},
  },
  {
    type: `photo`,
    image: {width: 1024, height: 768, url: "http://i.imgur.com/W5DNOVJ.jpg"},
  },
  {
    type: `photo`,
    image: {width: 640, height: 960, url: "http://i.imgur.com/mz0MSsy.jpg"},
  },
];

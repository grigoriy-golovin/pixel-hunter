export const resize = (frame, given) => {
  let mainCoeff;
  const heightCoeff = given.height / frame.height;
  const widthCorff = given.width / frame.width;

  if (widthCorff > heightCoeff) {
    mainCoeff = widthCorff;
  } else {
    mainCoeff = heightCoeff;
  }

  return {
    width: given.width / mainCoeff,
    height: given.height / mainCoeff,
  };
};

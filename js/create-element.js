const getElementFromTemplate = (string) => {
  const div = document.createElement(`div`);
  div.innerHTML = string;
  return div;
};

export default getElementFromTemplate;

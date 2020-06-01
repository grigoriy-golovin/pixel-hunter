export default (data) => {
  const stat = `<ul class="stats">
      <li class="stats__result stats__result--${data.stat[0]}"></li>
      <li class="stats__result stats__result--${data.stat[1]}"></li>
      <li class="stats__result stats__result--${data.stat[2]}"></li>
      <li class="stats__result stats__result--${data.stat[3]}"></li>
      <li class="stats__result stats__result--${data.stat[4]}"></li>
      <li class="stats__result stats__result--${data.stat[5]}"></li>
      <li class="stats__result stats__result--${data.stat[6]}"></li>
      <li class="stats__result stats__result--${data.stat[7]}"></li>
      <li class="stats__result stats__result--${data.stat[8]}"></li>
      <li class="stats__result stats__result--${data.stat[9]}"></li>
    </ul>`;
  return stat;
};

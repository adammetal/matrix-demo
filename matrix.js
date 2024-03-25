(() => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.style.position = "absolute";
  canvas.style.top = "0px";
  canvas.style.left = "0px";
  canvas.style.zIndex = 1000;
  canvas.style.opacity = "0.7";

  document.body.append(canvas);

  let w;
  let h;
  let cols;
  let ypos;
  let int;

  function start() {
    w = canvas.width = document.body.offsetWidth;
    h = canvas.height = document.body.offsetHeight;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    cols = Math.floor(w / 20) + 1;
    ypos = Array(cols).fill(0);

    clearInterval(int);
    int = setInterval(matrix, 50);
  }

  function matrix() {
    ctx.fillStyle = "#0001";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#0f0";
    ctx.font = "15pt monospace";

    ypos.forEach((y, ind) => {
      const text = String.fromCharCode(Math.random() * 128);

      const x = ind * 20;
      ctx.fillText(text, x, y);

      if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
      else ypos[ind] = y + 20;
    });
  }

  start();
})();

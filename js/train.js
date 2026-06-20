(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  /* ── CSS injection ─────────────────────────────────────────────────────── */
  var _s = document.createElement('style');
  _s.textContent =
    '#train-canvas{position:fixed!important;top:0!important;left:0!important;' +
    'width:100vw!important;height:100vh!important;' +
    'pointer-events:none!important;z-index:1!important;}' +
    '@media(max-width:1300px){#train-canvas{display:none!important}}';
  document.head.appendChild(_s);

  /* ── Config ──────────────────────────────────────────────────────────────*/
  var PERIOD     = 16000;
  var PAD        = 46;     // wrapper → track gap
  var R          = 30;     // corner radius
  var RAIL_HALF  = 6;
  var TW         = 104;
  var TH         = 26;
  var PLANT_LIFE = 2200;
  var PLANT_STEP = 0.010;

  /* ── State ───────────────────────────────────────────────────────────────*/
  var canvas, ctx, raf;
  var plants   = [];
  var lastBkt  = -1;
  var startTs  = null;
  var cityL    = [];   // left margin buildings
  var cityR    = [];   // right margin buildings
  var cityDone = false;

  /* ── Canvas ──────────────────────────────────────────────────────────────*/
  function init() {
    canvas = document.createElement('canvas');
    canvas.id = 'train-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);
    ctx = canvas.getContext('2d');
    resize();
  }
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    cityDone = false;   // rebuild cityscape on resize
  }

  /* ── Wrapper rect, CLAMPED so track is always inside canvas ──────────────*/
  function getVR() {
    var el = document.getElementById('wrapper') || document.querySelector('.wrapper');
    if (!el) return null;
    var r = el.getBoundingClientRect();
    if (r.width < 200) return null;
    var vw = window.innerWidth, vh = window.innerHeight;
    return {
      left:   Math.max(r.left,  0),
      right:  Math.min(r.right, vw),
      top:    Math.max(r.top,   0),
      bottom: Math.min(r.bottom, vh),
    };
  }

  /* ── Track ───────────────────────────────────────────────────────────────*/
  function makeTrack(vr) {
    var vw = window.innerWidth, vh = window.innerHeight;
    // Clamp so track stays fully inside canvas
    var x0 = Math.max(vr.left  - PAD, 4);
    var y0 = Math.max(vr.top   - PAD, 4);
    var x1 = Math.min(vr.right + PAD, vw - 4);
    var y1 = Math.min(vr.bottom + PAD, vh - 4);
    var r  = R;
    var tl = Math.max((x1-x0) - 2*r, 0);
    var rl = Math.max((y1-y0) - 2*r, 0);
    var al = Math.PI/2 * r;
    var perim = tl + al + rl + al + tl + al + rl + al;
    return { x0,y0,x1,y1,r, tl,rl, al, perim };
  }

  function pose(t, tk) {
    var d = ((t % 1) + 1) % 1 * tk.perim;
    var { x0,y0,x1,y1,r, tl,rl,al } = tk;
    var segs = [
      { len:tl, T:'L', ox:x0+r, oy:y0,   dx: 1, dy: 0, base:  0 },
      { len:al, T:'A', cx:x1-r, cy:y0+r, sa:-Math.PI/2 },
      { len:rl, T:'L', ox:x1,   oy:y0+r, dx: 0, dy: 1, base: 90 },
      { len:al, T:'A', cx:x1-r, cy:y1-r, sa: 0          },
      { len:tl, T:'L', ox:x1-r, oy:y1,   dx:-1, dy: 0, base:180 },
      { len:al, T:'A', cx:x0+r, cy:y1-r, sa: Math.PI/2  },
      { len:rl, T:'L', ox:x0,   oy:y1-r, dx: 0, dy:-1, base:270 },
      { len:al, T:'A', cx:x0+r, cy:y0+r, sa: Math.PI    },
    ];
    var acc = 0;
    for (var i = 0; i < segs.length; i++) {
      var s = segs[i];
      if (d <= acc + s.len + 0.001) {
        var f = Math.min((d - acc) / Math.max(s.len, 0.001), 1);
        if (s.T === 'L') return { x: s.ox + s.dx*(d-acc), y: s.oy + s.dy*(d-acc), angle: s.base };
        var a = s.sa + f * Math.PI/2;
        return { x: s.cx + r*Math.cos(a), y: s.cy + r*Math.sin(a), angle: (a + Math.PI/2)*180/Math.PI };
      }
      acc += s.len;
    }
    return { x: x0+r, y: y0, angle: 0 };
  }

  /* ── Draw helpers ────────────────────────────────────────────────────────*/
  function rrPath(x0,y0,x1,y1,r) {
    if (r < 2) r = 2;
    ctx.beginPath();
    ctx.moveTo(x0+r,y0); ctx.lineTo(x1-r,y0);
    ctx.quadraticCurveTo(x1,y0,x1,y0+r); ctx.lineTo(x1,y1-r);
    ctx.quadraticCurveTo(x1,y1,x1-r,y1); ctx.lineTo(x0+r,y1);
    ctx.quadraticCurveTo(x0,y1,x0,y1-r); ctx.lineTo(x0,y0+r);
    ctx.quadraticCurveTo(x0,y0,x0+r,y0); ctx.closePath();
  }

  /* ── Track ───────────────────────────────────────────────────────────────*/
  function drawTrack(tk) {
    var g = RAIL_HALF, { x0,y0,x1,y1,r } = tk;
    // Sleepers
    ctx.save();
    ctx.strokeStyle = 'rgba(148,170,190,0.55)'; ctx.lineWidth = 7;
    ctx.setLineDash([5, 20]);
    rrPath(x0,y0,x1,y1,r); ctx.stroke();
    ctx.restore();
    // Outer rail
    ctx.save();
    ctx.strokeStyle = '#90afc5'; ctx.lineWidth = 2.5; ctx.setLineDash([]);
    rrPath(x0-g,y0-g,x1+g,y1+g,Math.max(r+g,4)); ctx.stroke();
    ctx.restore();
    // Inner rail
    ctx.save();
    ctx.strokeStyle = '#90afc5'; ctx.lineWidth = 2.5; ctx.setLineDash([]);
    rrPath(x0+g,y0+g,x1-g,y1-g,Math.max(r-g,4)); ctx.stroke();
    ctx.restore();
  }

  /* ── Futuristic train ────────────────────────────────────────────────────*/
  function drawTrain(x, y, angleDeg) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angleDeg * Math.PI/180);

    var hw = TW/2, hh = TH/2;

    // Speed lines
    ctx.save();
    ctx.setLineDash([6,9]);
    [hh*0.6, 0, -hh*0.6].forEach(function(ly, i) {
      var len = 32 - i*5;
      ctx.beginPath();
      ctx.moveTo(-hw-8, ly);
      ctx.lineTo(-hw-8-len, ly);
      ctx.strokeStyle = 'rgba(0,220,255,'+(0.38-i*0.09)+')';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.restore();

    // Body
    ctx.shadowColor = '#00cfff'; ctx.shadowBlur = 16;
    ctx.beginPath();
    ctx.moveTo(-hw+12, -hh);
    ctx.lineTo(hw-10,  -hh+3);
    ctx.lineTo(hw+20,  0);
    ctx.lineTo(hw-10,  hh-3);
    ctx.lineTo(-hw+12, hh);
    ctx.bezierCurveTo(-hw-4,hh*0.5, -hw-4,-hh*0.5, -hw+12,-hh);
    ctx.closePath();
    var bg = ctx.createLinearGradient(0,-hh,0,hh);
    bg.addColorStop(0,'#0c1d33');
    bg.addColorStop(0.4,'#0e2643');
    bg.addColorStop(1,'#060e1a');
    ctx.fillStyle = bg; ctx.fill();

    // Cyan top edge
    ctx.shadowColor = '#00e5ff'; ctx.shadowBlur = 9;
    ctx.beginPath();
    ctx.moveTo(-hw+12,-hh+1.5);
    ctx.lineTo(hw-10,-hh+4.5);
    ctx.lineTo(hw+16,0);
    ctx.strokeStyle = '#00e5ff'; ctx.lineWidth = 2; ctx.stroke();

    // Cockpit
    ctx.shadowBlur = 7;
    ctx.beginPath();
    ctx.ellipse(hw-24,0,15,hh*0.6,0,0,Math.PI*2);
    var cg = ctx.createRadialGradient(hw-22,-2,0,hw-24,0,16);
    cg.addColorStop(0,'#cdf4ff');
    cg.addColorStop(0.45,'#29b6f6');
    cg.addColorStop(1,'#01579b');
    ctx.fillStyle = cg; ctx.fill();
    ctx.strokeStyle = '#00e5ff'; ctx.lineWidth = 1; ctx.stroke();

    // Passenger windows
    ctx.shadowBlur = 0;
    [-hw+14,-hw+32,-hw+50].forEach(function(wx) {
      ctx.beginPath();
      ctx.roundRect(wx,-hh+4,12,TH*0.36,2);
      ctx.fillStyle = '#182f4a'; ctx.fill();
      ctx.beginPath();
      ctx.moveTo(wx+2,-hh+5); ctx.lineTo(wx+2,-hh+5+TH*0.2);
      ctx.strokeStyle = 'rgba(255,255,255,0.28)'; ctx.lineWidth = 0.8; ctx.stroke();
    });

    // Bottom LED strip
    ctx.shadowColor = '#00e5ff'; ctx.shadowBlur = 11;
    ctx.beginPath();
    ctx.moveTo(-hw+14,hh-2); ctx.lineTo(hw-12,hh-2);
    ctx.strokeStyle = '#00e5ff'; ctx.lineWidth = 2.2; ctx.stroke();

    // Maglev glow
    ctx.shadowBlur = 14;
    ctx.beginPath();
    ctx.roundRect(-hw+22,hh+1,TW-44,5,2.5);
    var mg = ctx.createLinearGradient(-hw+22,0,hw-22,0);
    mg.addColorStop(0,'rgba(0,229,255,0)');
    mg.addColorStop(0.3,'rgba(0,229,255,0.7)');
    mg.addColorStop(0.7,'rgba(0,229,255,0.7)');
    mg.addColorStop(1,'rgba(0,229,255,0)');
    ctx.fillStyle = mg; ctx.fill();

    // Top glint
    ctx.shadowBlur = 0;
    ctx.beginPath(); ctx.roundRect(-hw+14,-hh+2,TW*0.5,2.5,1.2);
    ctx.fillStyle = 'rgba(255,255,255,0.16)'; ctx.fill();

    ctx.restore();
  }

  /* ── Flag ────────────────────────────────────────────────────────────────*/
  function drawFlag(x, y, angleDeg, elapsed) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angleDeg * Math.PI/180);

    var hw   = TW/2;
    var pLen = 58;
    var fW   = 90, fH = 44;
    var wt   = elapsed / 420;
    var m1   = Math.sin(wt)      * 5;
    var m2   = Math.sin(wt+1.15) * 5;

    // Pole
    ctx.strokeStyle = '#546e7a'; ctx.lineWidth = 2.2; ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(-hw-2, 0);
    ctx.lineTo(-hw-2-pLen, 0);
    ctx.stroke();

    // Flag shape path (hoist = px, fly = fx, further "behind" train)
    var px = -hw - 2 - pLen;
    var fx = px - fW;

    function flagPath() {
      ctx.beginPath();
      ctx.moveTo(px,        -fH/2);
      ctx.bezierCurveTo(px-fW*0.33, -fH/2+m1,  px-fW*0.66, -fH/2+m2, fx, -fH/2);
      ctx.lineTo(fx, fH/2);
      ctx.bezierCurveTo(px-fW*0.66,  fH/2+m2,  px-fW*0.33,  fH/2+m1, px,  fH/2);
      ctx.closePath();
    }

    // Body fill
    flagPath();
    var fg = ctx.createLinearGradient(fx,0,px,0);
    fg.addColorStop(0,'#1a237e'); fg.addColorStop(1,'#283593');
    ctx.fillStyle = fg; ctx.fill();

    // Stripe (clipped to flag) — white horizontal band
    ctx.save();
    flagPath(); ctx.clip();
    var sy = m1 * 0.28;
    ctx.beginPath();
    ctx.moveTo(px, sy-4);
    ctx.bezierCurveTo(px-fW*0.33,sy-4+m1, px-fW*0.66,sy-4+m2, fx,sy-4);
    ctx.lineTo(fx, sy+4);
    ctx.bezierCurveTo(px-fW*0.66,sy+4+m2, px-fW*0.33,sy+4+m1, px,sy+4);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.fill();
    ctx.restore();

    // ── Text — NO clipping, just shadow for legibility ─────────────────
    var cx = px - fW*0.5;   // horizontal centre of flag
    var ty = m1*0.28 - 10;  // above the stripe

    ctx.font = 'bold 12px "Open Sans",Arial,sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Dark halo (draw 4 offsets)
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(o) {
      ctx.fillText('VIN-SSUM', cx+o[0], ty+o[1]);
    });
    // White text on top
    ctx.fillStyle = '#ffffff';
    ctx.fillText('VIN-SSUM', cx, ty);

    // Small green eco dot on flag
    ctx.beginPath();
    ctx.arc(cx, ty+12, 3, 0, Math.PI*2);
    ctx.fillStyle = '#69f0ae'; ctx.fill();

    ctx.restore();
  }

  /* ── Cityscape buildings ─────────────────────────────────────────────────*/
  // Deterministic LCG so buildings are always the same
  function lcg(s) { return ((s * 1664525 + 1013904223) >>> 0) / 4294967296; }

  function buildCity(buildings, xMin, xMax, vh) {
    buildings.length = 0;
    var seed = 7;
    var x = xMin + 4;
    var usableW = xMax - xMin - 8;
    if (usableW < 20) return;

    var count = Math.floor(usableW / 14);
    var slotW = usableW / count;

    for (var i = 0; i < count; i++) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var r1 = lcg(seed);
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var r2 = lcg(seed);
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var r3 = lcg(seed);
      seed = (seed * 1664525 + 1013904223) >>> 0;
      var r4 = lcg(seed);

      var bw   = Math.max(slotW * (0.55 + r1 * 0.35), 8);
      var bh   = 40 + r2 * 110;
      var bx   = xMin + 4 + i * slotW + (slotW - bw) / 2;
      var wins = Math.floor(bh / 18);   // rows of windows
      var hasAntenna = r3 > 0.5;
      var towerW = bw * (0.25 + r4 * 0.2);

      buildings.push({ bx, bw, bh, wins, hasAntenna, towerW, vh });
    }
  }

  function drawBuilding(b) {
    var base = b.vh - 1;
    var top  = base - b.bh;
    var bx   = b.bx, bw = b.bw;

    // Main body
    var g = ctx.createLinearGradient(bx, top, bx, base);
    g.addColorStop(0,   'rgba(22,55,92,0.30)');
    g.addColorStop(0.6, 'rgba(14,38,66,0.22)');
    g.addColorStop(1,   'rgba(8,22,42,0.18)');
    ctx.fillStyle = g;
    ctx.fillRect(bx, top, bw, b.bh);

    // Subtle edge highlight (left)
    ctx.fillStyle = 'rgba(100,160,220,0.10)';
    ctx.fillRect(bx, top, 1.5, b.bh);

    // Windows (small dots of warm-white)
    var cols = Math.max(1, Math.floor(bw / 9));
    var rows = b.wins;
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        // ~40% chance a window is lit
        var seed2 = (row * 97 + col * 31 + Math.floor(bx)) & 0xfff;
        if (lcg(seed2) > 0.40) continue;
        var wx = bx + (col + 0.5) * (bw / cols);
        var wy = top + 10 + row * 16;
        ctx.fillStyle = 'rgba(220,235,255,0.22)';
        ctx.fillRect(wx - 1.5, wy, 3, 5);
      }
    }

    // Antenna
    if (b.hasAntenna) {
      var ax = bx + bw/2;
      ctx.strokeStyle = 'rgba(80,140,200,0.28)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ax, top);
      ctx.lineTo(ax, top - 18 - b.bh * 0.06);
      ctx.stroke();
      // Blinking dot (semi-random phase)
      ctx.beginPath();
      ctx.arc(ax, top - 20 - b.bh * 0.06, 2, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,80,80,0.28)';
      ctx.fill();
    }

    // Tower top (setback)
    if (b.bw > 20) {
      var tw = b.towerW;
      var tx = bx + (bw - tw) / 2;
      var theight = 18 + b.bh * 0.08;
      var tg = ctx.createLinearGradient(tx, top-theight, tx, top);
      tg.addColorStop(0, 'rgba(20,52,88,0.22)');
      tg.addColorStop(1, 'rgba(18,45,75,0.18)');
      ctx.fillStyle = tg;
      ctx.fillRect(tx, top-theight, tw, theight);
    }
  }

  function drawCityscape() {
    cityL.forEach(drawBuilding);
    cityR.forEach(drawBuilding);
  }

  /* ── Plants ──────────────────────────────────────────────────────────────*/
  function spawnPlant(vx, vy, now) {
    var types = ['leaf','leaf','flower','cherry'];
    var type  = types[Math.floor(Math.random() * types.length)];
    plants.push({
      vx:   vx + (Math.random()-0.5) * 22,
      vy:   vy + (Math.random()-0.5) * 14 + 14,
      type: type,
      born: now,
      life: PLANT_LIFE * (0.85 + Math.random()*0.3),
      size: 9 + Math.random() * 7,
      rot:  (Math.random()-0.5) * 1.1,
      hue:  112 + Math.floor(Math.random()*28),
    });
  }

  function plantAlpha(age, life) {
    var p = age / life;
    if (p < 0.20) return p / 0.20;
    if (p < 0.68) return 1;
    return 1 - (p - 0.68) / 0.32;
  }

  function drawLeaf(s, hue, p) {
    var sc = s * Math.min(1, p/0.20);
    ctx.beginPath();
    ctx.ellipse(0,-sc*0.5,sc*0.32,sc*0.58,0,0,Math.PI*2);
    var g = ctx.createRadialGradient(0,-sc*0.35,0,0,-sc*0.35,sc*0.7);
    g.addColorStop(0,'hsl('+hue+',78%,56%)');
    g.addColorStop(1,'hsl('+(hue-16)+',68%,36%)');
    ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-sc);
    ctx.strokeStyle='hsl('+(hue-20)+',55%,28%)'; ctx.lineWidth=0.8; ctx.stroke();
  }

  function drawFlower(s, hue, p) {
    var sc = s * Math.min(1, p/0.20);
    var pc = 'hsl('+(hue+148)+',70%,78%)';
    for (var i=0;i<5;i++) {
      ctx.save(); ctx.rotate(i*Math.PI*2/5);
      ctx.beginPath(); ctx.ellipse(0,-sc*0.48,sc*0.22,sc*0.42,0,0,Math.PI*2);
      ctx.fillStyle=pc; ctx.fill(); ctx.restore();
    }
    ctx.beginPath(); ctx.arc(0,0,sc*0.24,0,Math.PI*2);
    ctx.fillStyle='#fff176'; ctx.fill();
  }

  function drawCherry(s, hue, p) {
    var sc = s * Math.min(1, p/0.20);
    for (var i=0;i<5;i++) {
      ctx.save(); ctx.rotate(i*Math.PI*2/5);
      ctx.beginPath(); ctx.ellipse(0,-sc*0.44,sc*0.20,sc*0.38,0,0,Math.PI*2);
      ctx.fillStyle='rgba(255,182,200,0.90)'; ctx.fill(); ctx.restore();
    }
    ctx.beginPath(); ctx.arc(0,0,sc*0.18,0,Math.PI*2);
    ctx.fillStyle='#f8bbd0'; ctx.fill();
    for (var j=0;j<5;j++) {
      ctx.save(); ctx.rotate(j*Math.PI*2/5);
      ctx.beginPath(); ctx.moveTo(0,0); ctx.lineTo(0,-sc*0.3);
      ctx.strokeStyle='rgba(200,80,100,0.65)'; ctx.lineWidth=0.7; ctx.stroke();
      ctx.beginPath(); ctx.arc(0,-sc*0.3,sc*0.05,0,Math.PI*2);
      ctx.fillStyle='#e91e63'; ctx.fill();
      ctx.restore();
    }
  }

  function drawPlants(now) {
    plants = plants.filter(function(p){ return (now-p.born) < p.life; });
    plants.forEach(function(p) {
      var alpha = plantAlpha(now-p.born, p.life);
      var prog  = (now-p.born)/p.life;
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(p.vx, p.vy);
      ctx.rotate(p.rot);
      if (p.type==='leaf')   drawLeaf(p.size,   p.hue, prog);
      if (p.type==='flower') drawFlower(p.size, p.hue, prog);
      if (p.type==='cherry') drawCherry(p.size, p.hue, prog);
      ctx.restore();
    });
  }

  /* ── Animate ─────────────────────────────────────────────────────────────*/
  function animate(ts) {
    if (!startTs) startTs = ts;
    var elapsed = ts - startTs;
    var t = (elapsed % PERIOD) / PERIOD;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (window.innerWidth < 1300) { raf = requestAnimationFrame(animate); return; }

    var vr = getVR();
    if (!vr) { raf = requestAnimationFrame(animate); return; }

    var tk = makeTrack(vr);

    // Build cityscape once per layout
    if (!cityDone) {
      var vh = window.innerHeight;
      buildCity(cityL, 0,       tk.x0 - 6, vh);
      buildCity(cityR, tk.x1 + 6, window.innerWidth, vh);
      cityDone = true;
    }

    drawCityscape();
    drawTrack(tk);

    var p = pose(t, tk);

    var bkt = Math.floor(t / PLANT_STEP);
    if (bkt !== lastBkt) { spawnPlant(p.x, p.y, ts); lastBkt = bkt; }

    drawPlants(ts);
    drawFlag(p.x, p.y, p.angle, elapsed);
    drawTrain(p.x, p.y, p.angle);

    raf = requestAnimationFrame(animate);
  }

  /* ── Boot ────────────────────────────────────────────────────────────────*/
  var _rt;
  window.addEventListener('resize', function() {
    clearTimeout(_rt); _rt = setTimeout(resize, 200);
  }, { passive: true });

  function boot() { init(); raf = requestAnimationFrame(animate); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();

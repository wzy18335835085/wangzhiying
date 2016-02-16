function shape(copy,canvas,cobj){
    this.copy=copy;
    this.canvas=canvas;
    this.cobj=cobj;
    this.lineWidth=1;
    this.type='stroke';
    this.shapes="line";
    this.fillColor="#000";
    this.borderColor="#000";
    this.width=canvas.width;
    this.height=canvas.height;
    //保存背景颜色
    this.bgColor="#000";
    //边框颜色
    this.borderColor="#000";
    //线条宽度
    this.lineWidth=1;
    this.history=[];

}
shape.prototype= {
    init: function () {
        //初始化
        this.cobj.fillStyle = this.bgColor;
        this.cobj.strokeStyle = this.borderColor;
        this.cobj.lineWidth = this.lineWidth;
    },
    line: function (x, y, x1, y1) {
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(x, y);
        this.cobj.lineTo(x1, y1);
        this.cobj.closePath();
        this.cobj.stroke();
    },
    rect: function (x, y, x1, y1) {
        this.init();
        this.cobj.beginPath();
        this.cobj.rect(x, y, x1 - x, y1 - y);
        this.cobj.closePath();
        this.cobj.stroke();
        this.cobj[this.type]();
    },
    circle: function (x, y, x1, y1) {
        this.init();
        var r = Math.sqrt((x1 - x) * (x1 - x) + (y1 - y) * (y1 - y));
        this.cobj.beginPath();
        this.cobj.arc(x, y, r, 0, Math.PI * 2);
        this.cobj.closePath();
        this.cobj.stroke();
        this.cobj[this.type]();
    },
    draw: function () {
        var that = this;
        that.copy.onmousedown = function (e) {
            var startx = e.offsetX;
            var starty = e.offsetY;
            that.copy.onmousemove = function (e) {
                that.cobj.clearRect(0, 0, that.width, that.height);
                var endx = e.offsetX;
                var endy = e.offsetY;
                if(that.history.length!==0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0);
                }
                that.init();
                that[that.shapes](startx, starty, endx, endy)
            }
            that.copy.onmouseup = function () {
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
            }
        }
    },
    five: function (x, y, x1, y1) {
        var r = Math.sqrt(x1 - x) * (x1 - x) + (y1 - y) * (y1 - y);
        var r1 = r / 2;
        this.cobj.beginPath();
        this.cobj.moveTo(x + r, y);
        for (var i = 1; i < 10; i++) {
            if (i % 2 == 0) {
                this.cobj.lineTo(x + Math.cos(i * 36 * Math.PI / 180) * r, y + Math.sin(i * 36 * Math.PI / 180) * r);
            } else {
                this.cobj.lineTo(x + Math.cos(i * 36 * Math.PI / 180) * r1, y + Math.sin(i * 36 * Math.PI / 180) * r1);
            }
        }
        this.cobj.stroke();
        this.cobj.closePath();
        this.cobj[this.type]();
    },
    pen: function () {
        var that = this;
        that.init();
        that.copy.onmousedown = function (e) {
            that.init();
            var startx = e.offsetX;
            var starty = e.offsetY;
            that.init();
            that.cobj.beginPath();
            that.cobj.moveTo(startx, starty);
            that.copy.onmousemove = function (e) {
                var endx = e.offsetX;
                var endy = e.offsetY;
                if(that.history.length!==0){
                    that.cobj.putImageData(that.history[that.history.length-1],0,0)
                }
                that.cobj.lineTo(endx, endy);
                that.cobj.stroke();
            };
            that.copy.onmouseup = function (e) {
                that.cobj.closePath();
                that.history.push(that.cobj.getImageData(0,0,that.width,that.height));
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
            }
        }
    },
    xp: function (xpobj, w, h) {
        var that = this;
        that.init();
        that.copy.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            xpobj.css({display: "block", width: w, height: h});
            var ox = e.offsetX;
            var oy = e.offsetY;
            var lefts = ox - w / 2;
            var tops = oy - h / 2;
            if (lefts < 0) {
                lefts = 0;
            }
            if (lefts > that.width - w) {
                lefts = that.width - w
            }
            if (tops < 0) {
                tops = 0;
            }
            if (tops > that.height - h) {
                tops = that.height - h;
            }
            xpobj.css({left: lefts, top: tops})
        }
        that.copy.onmousedown = function () {
            that.init();
            that.copy.onmousemove = function (e) {
                var ox = e.offsetX;
                var oy = e.offsetY;
                var lefts = ox - w / 2;
                var tops = oy - h / 2;
                if (lefts < 0) {
                    lefts = 0;
                }
                if (lefts > that.width - w) {
                    lefts = that.width - w;
                }
                if (tops < 0) {
                    tops = 0;
                }
                if (tops > that.height - h) {
                    tops = that.height - h
                }
                xpobj.css({
                    left: lefts,
                    top: tops,
                    display: "block"
                })
                that.cobj.clearRect(lefts,tops,w,h);
            }
            that.copy.onmouseup = function () {
                xpobj.css("display", "none");
                that.history.push(that.cobj.getImageData(0,0,that.width, that.height));
                that.copy.onmousemove = null;
                that.copy.onmouseup = null;
                that.xp(xpobj, w, h)
            }
        }
    },
    select: function (selectareaobj) {
        var that = this;
        that.init();
        that.copy.onmousedown = function (e) {
            var startx = e.offsetX;
            var starty = e.offsetY, minx, miny, w, h;
            that.init();
            that.copy.onmousemove = function (e) {
                that.init();
                var endx = e.offsetX;
                var endy = e.offsetY;
                minx = startx > endx ? endx : startx;
                miny = starty > endy ? endy : starty;
                w = Math.abs(startx - endx);
                h = Math.abs(starty - endy);
                selectareaobj.css({
                    display: "block",
                    left: minx,
                    top: miny,
                    width: w,
                    height: h
                })
            }

            that.copy.onmouseup = function () {
                that.copy.onmouseup = null;
                that.copy.onmousemove = null;
                that.temp = that.cobj.getImageData(minx, miny, w, h);
                that.cobj.clearRect(minx, miny, w, h);
                that.history.push(that.cobj.getImageData(0, 0, that.width, that.height));
                that.cobj.putImageDate(that.temp, minx, miny);
                that.drag(ximx, miny, w, y, selectareaobj);
            }
        }
    },
    drag: function (x,y,w,h,selectareaobj) {
        var that = this;
        that.copy.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            if (ox > x && ox < x + w && oy > y && oy < y + h) {
                that.copy.style.cursor = "move";
            } else {
                that.copy.style.cursor = "default";
            }
        }
        that.copy.onmousedown = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            var cx = ox - x;
            var cy = oy - y;
            if (ox > x && ox < x + w && oy > y & oy < y + h) {
                that.copy.style.cursor = "move";
            } else {
                that.copy.style.cursor = "default";
                return;
            }
            that.copy.onmousemove = function (e) {
                that.cobj.clearRect(0, 0, that.width, that.height);
                if (that.history.length !== 0) {
                    that.cobj.putImageData(that.history[that.history.length - 1], 0, 0);
                }
                var endx = e.offsetX;
                var endy = e.offsetY;
                var lefts = endx - cx;
                var tops = endy - cy;
                if (lefts < 0) {
                    lefts = 0;
                }
                if (lefts > that.width - w) {
                    lefts = that.width - w;
                }
                if (tops < 0) {
                    tops = 0;
                }
                if (tops > that.height - h) {
                    tops = that.height - h
                }
                selectareaobj.css({
                    left: lefts,
                    top: tops
                });
                x = lefts;
                y = tops;
                that.cobj.putImageData(that.temp, lefts, tops);

            }
            that.copy.onmouseup = function () {
                that.copy.onmouseup = null;
                that.copy.onmousemove = null;
                that.drag(x, y, w, h, selectareaobj)
            }
        }
    }
}

/*wan*/

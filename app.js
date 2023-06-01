
window.addEventListener('scroll', function() {
    var scrollIndicator = document.getElementById('scrollIndicator');
    var frame = document.getElementById('myframe');

    if (window.pageYOffset > 0) {
        frame.style.opacity ="1";
    } else {
      
      frame.style.opacity ="0";
    }
  });


/*cursor animation----------------------------------*/

  var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },    
     setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        document.querySelectorAll('svg').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        document.querySelectorAll('button').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        document.querySelectorAll('input').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        document.querySelectorAll('textarea').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        document.querySelectorAll('#work a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });

        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 0.5;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 0.5;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();


//navbar animations on scroll

var podtext = document.getElementById("podtext");
var nstart = document.getElementById("nstart");
var nwork = document.getElementById("nwork");
var nabout = document.getElementById("nabout");
var ncontact = document.getElementById("ncontact");

var observer1 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] >0.5) {
		//start
        podtext.style.marginLeft="18px";
        podtext.style.width="50px";
        nstart.style.color="white";
        nwork.style.color="grey";
        nabout.style.color="grey";
        ncontact.style.color="grey";
	}
	
},{ threshold: [0.5]});



var observer2 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] > 0.5) {
		podtext.style.marginLeft="103px";
        podtext.style.width="50px";
        nstart.style.color="grey";
        nwork.style.color="white";
        nabout.style.color="grey";
        ncontact.style.color="grey";
		//work

	}
	
},{ threshold: [0.5]});

var observer25 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] > 0.3) {
		podtext.style.marginLeft="103px";
        podtext.style.width="50px";
        nstart.style.color="grey";
        nwork.style.color="white";
        nabout.style.color="grey";
        ncontact.style.color="grey";
		//work secondhalf

	}
	
},{ threshold: [0.3]});


var observer3 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] > 0.7) {
		podtext.style.marginLeft="190px";
        podtext.style.width="57px";
        nstart.style.color="grey";
        nwork.style.color="grey";
        nabout.style.color="white";
        ncontact.style.color="grey";
		//about
	}
	
},{ threshold: [0.7]});

var observer4 = new IntersectionObserver(function(entries) { console.log(entries);
	if(entries[0]['isIntersecting'] > 0.5) {
		podtext.style.marginLeft="287px";
        podtext.style.width="70px";
        nstart.style.color="grey";
        nwork.style.color="grey";
        nabout.style.color="grey";
        ncontact.style.color="white";
		//about
	}
	
},{ threshold: [0.5]});

observer1.observe(document.querySelector("#start"));
observer2.observe(document.querySelector("#firsthalf"));
observer25.observe(document.querySelector("#secondhalf"));
observer3.observe(document.querySelector("#about"));
observer4.observe(document.querySelector("#contact"));

function scrollwork() {
    var startheight = document.querySelector("#start");
    scrollTo(0,startheight.offsetHeight-50);
}
function scrollabout() {
    var startheight = document.querySelector("#start");
    var workheight = document.querySelector("#work");
    scrollTo(0,startheight.offsetHeight+workheight.offsetHeight-150);
}
function scrollcontact() {
    var startheight = document.querySelector("#start");
    var workheight = document.querySelector("#work");
    var contactheight = document.querySelector("#about");
    scrollTo(0,startheight.offsetHeight+workheight.offsetHeight+contactheight.offsetHeight-150);
}


//apear animations





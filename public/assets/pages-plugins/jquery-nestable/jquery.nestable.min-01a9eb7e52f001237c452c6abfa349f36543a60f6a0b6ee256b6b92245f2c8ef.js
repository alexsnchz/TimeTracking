!function(l,e,t,n){function i(t,n){this.w=l(e),this.el=l(t),this.options=l.extend({},u,n),this.init()}var o="ontouchstart"in e,a=function(){var l=t.createElement("div"),n=t.documentElement;if(!("pointerEvents"in l.style))return!1;l.style.pointerEvents="auto",l.style.pointerEvents="x",n.appendChild(l);var i=e.getComputedStyle&&"auto"===e.getComputedStyle(l,"").pointerEvents;return n.removeChild(l),!!i}(),s=o?"touchstart":"mousedown",r=o?"touchmove":"mousemove",c=o?"touchend":"mouseup";eCancel=o?"touchcancel":"mouseup";var u={listNodeName:"ol",itemNodeName:"li",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",emptyClass:"dd-empty",expandBtnHTML:'<button data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20};i.prototype={init:function(){var t=this;t.reset(),t.el.data("nestable-group",this.options.group),t.placeEl=l('<div class="'+t.options.placeClass+'"/>'),l.each(this.el.find(t.options.itemNodeName),function(e,n){t.setParent(l(n))}),t.el.on("click","button",function(e){if(!t.dragEl&&(o||0===e.button)){var n=l(e.currentTarget),i=n.data("action"),a=n.parent(t.options.itemNodeName);"collapse"===i&&t.collapseItem(a),"expand"===i&&t.expandItem(a)}});var n=function(e){var n=l(e.target);if(!n.hasClass(t.options.handleClass)){if(n.closest("."+t.options.noDragClass).length)return;n=n.closest("."+t.options.handleClass)}!n.length||t.dragEl||!o&&0!==e.button||o&&1!==e.touches.length||(e.preventDefault(),t.dragStart(o?e.touches[0]:e))},i=function(l){t.dragEl&&(l.preventDefault(),t.dragMove(o?l.touches[0]:l))},a=function(l){t.dragEl&&(l.preventDefault(),t.dragStop(o?l.touches[0]:l))};o?(t.el[0].addEventListener(s,n,!1),e.addEventListener(r,i,!1),e.addEventListener(c,a,!1),e.addEventListener(eCancel,a,!1)):(t.el.on(s,n),t.w.on(r,i),t.w.on(c,a))},serialize:function(){var e,t=0,n=this;return step=function(e,t){var i=[],o=e.children(n.options.itemNodeName);return o.each(function(){var e=l(this),o=l.extend({},e.data()),a=e.children(n.options.listNodeName);a.length&&(o.children=step(a,t+1)),i.push(o)}),i},e=step(n.el.find(n.options.listNodeName).first(),t)},serialise:function(){return this.serialize()},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(l){l.removeClass(this.options.collapsedClass),l.children('[data-action="expand"]').hide(),l.children('[data-action="collapse"]').show(),l.children(this.options.listNodeName).show()},collapseItem:function(l){var e=l.children(this.options.listNodeName);e.length&&(l.addClass(this.options.collapsedClass),l.children('[data-action="collapse"]').hide(),l.children('[data-action="expand"]').show(),l.children(this.options.listNodeName).hide())},expandAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.expandItem(l(this))})},collapseAll:function(){var e=this;e.el.find(e.options.itemNodeName).each(function(){e.collapseItem(l(this))})},setParent:function(e){e.children(this.options.listNodeName).length&&(e.prepend(l(this.options.expandBtnHTML)),e.prepend(l(this.options.collapseBtnHTML))),e.children('[data-action="expand"]').hide()},unsetParent:function(l){l.removeClass(this.options.collapsedClass),l.children("[data-action]").remove(),l.children(this.options.listNodeName).remove()},dragStart:function(e){var i=this.mouse,o=l(e.target),a=o.closest(this.options.itemNodeName);this.placeEl.css("height",a.height()),i.offsetX=e.offsetX!==n?e.offsetX:e.pageX-o.offset().left,i.offsetY=e.offsetY!==n?e.offsetY:e.pageY-o.offset().top,i.startX=i.lastX=e.pageX,i.startY=i.lastY=e.pageY,this.dragRootEl=this.el,this.dragEl=l(t.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",a.width()),a.after(this.placeEl),a[0].parentNode.removeChild(a[0]),a.appendTo(this.dragEl),l(t.body).append(this.dragEl),this.dragEl.css({left:e.pageX-i.offsetX,top:e.pageY-i.offsetY});var s,r,c=this.dragEl.find(this.options.itemNodeName);for(s=0;s<c.length;s++)r=l(c[s]).parents(this.options.listNodeName).length,r>this.dragDepth&&(this.dragDepth=r)},dragStop:function(){var l=this.dragEl.children(this.options.itemNodeName).first();l[0].parentNode.removeChild(l[0]),this.placeEl.replaceWith(l),this.dragEl.remove(),this.el.trigger("change"),this.hasNewRoot&&this.dragRootEl.trigger("change"),this.reset()},dragMove:function(n){var i,o,s,r,c,u=this.options,d=this.mouse;this.dragEl.css({left:n.pageX-d.offsetX,top:n.pageY-d.offsetY}),d.lastX=d.nowX,d.lastY=d.nowY,d.nowX=n.pageX,d.nowY=n.pageY,d.distX=d.nowX-d.lastX,d.distY=d.nowY-d.lastY,d.lastDirX=d.dirX,d.lastDirY=d.dirY,d.dirX=0===d.distX?0:d.distX>0?1:-1,d.dirY=0===d.distY?0:d.distY>0?1:-1;var h=Math.abs(d.distX)>Math.abs(d.distY)?1:0;if(!d.moving)return d.dirAx=h,d.moving=!0,void 0;d.dirAx!==h?(d.distAxX=0,d.distAxY=0):(d.distAxX+=Math.abs(d.distX),0!==d.dirX&&d.dirX!==d.lastDirX&&(d.distAxX=0),d.distAxY+=Math.abs(d.distY),0!==d.dirY&&d.dirY!==d.lastDirY&&(d.distAxY=0)),d.dirAx=h,d.dirAx&&d.distAxX>=u.threshold&&(d.distAxX=0,s=this.placeEl.prev(u.itemNodeName),d.distX>0&&s.length&&!s.hasClass(u.collapsedClass)&&(i=s.find(u.listNodeName).last(),c=this.placeEl.parents(u.listNodeName).length,c+this.dragDepth<=u.maxDepth&&(i.length?(i=s.children(u.listNodeName).last(),i.append(this.placeEl)):(i=l("<"+u.listNodeName+"/>").addClass(u.listClass),i.append(this.placeEl),s.append(i),this.setParent(s)))),d.distX<0&&(r=this.placeEl.next(u.itemNodeName),r.length||(o=this.placeEl.parent(),this.placeEl.closest(u.itemNodeName).after(this.placeEl),o.children().length||this.unsetParent(o.parent()))));var f=!1;if(a||(this.dragEl[0].style.visibility="hidden"),this.pointEl=l(t.elementFromPoint(n.pageX-t.body.scrollLeft,n.pageY-(e.pageYOffset||t.documentElement.scrollTop))),a||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(u.handleClass)&&(this.pointEl=this.pointEl.parent(u.itemNodeName)),this.pointEl.hasClass(u.emptyClass))f=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(u.itemClass))return;var p=this.pointEl.closest("."+u.rootClass),m=this.dragRootEl.data("nestable-id")!==p.data("nestable-id");if(!d.dirAx||m||f){if(m&&u.group!==p.data("nestable-group"))return;if(c=this.dragDepth-1+this.pointEl.parents(u.listNodeName).length,c>u.maxDepth)return;var g=n.pageY<this.pointEl.offset().top+this.pointEl.height()/2;o=this.placeEl.parent(),f?(i=l(t.createElement(u.listNodeName)).addClass(u.listClass),i.append(this.placeEl),this.pointEl.replaceWith(i)):g?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),o.children().length||this.unsetParent(o.parent()),this.dragRootEl.find(u.itemNodeName).length||this.dragRootEl.append('<div class="'+u.emptyClass+'"/>'),m&&(this.dragRootEl=p,this.hasNewRoot=this.el[0]!==this.dragRootEl[0])}}},l.fn.nestable=function(e){var t=this,n=this;return t.each(function(){var t=l(this).data("nestable");t?"string"==typeof e&&"function"==typeof t[e]&&(n=t[e]()):(l(this).data("nestable",new i(this,e)),l(this).data("nestable-id",(new Date).getTime()))}),n||t}}(window.jQuery||window.Zepto,window,document);

var ArticleSummaryHover=function(){function e(){var e,r;if(Helpers.getViewportWidth()>=l.onlyRunAbove&&0==Helpers.isIE()&&(e=document.querySelectorAll(l.selectors.articleSummary)))for(var i=0;i<e.length;i++)r=e[i],r.addEventListener("mousemove",t),r.addEventListener("mouseenter",n),r.addEventListener("mouseleave",o)}function t(e){var t,n,o,a,l,c;n=e.pageX,o=e.pageY,t=this,a=this.getBoundingClientRect(),l=r(a,n),c=i(a,o),s(t,a,l,c)}function n(){var e;e=this,e.classList.add(l.mouseOverToggleClass)}function o(){var e;e=this,e.style.transform="",e.querySelector(l.selectors.featuredImage).style.transform="",e.classList.remove(l.mouseOverToggleClass)}function r(e,t){var n,o,r;return n=e.left,o=t-n,r=o/e.width,r=r.toFixed(2),r-=.5,r*=l.transformModX}function i(e,t){var n,o,r,i;return n=document.documentElement.scrollTop,o=n+e.top,r=t-o,i=r/e.height,i=i.toFixed(2),i-=.5,i*=l.transformModY,i*=-1}function s(e,t,n,o){var r,i,s;n>-.5*l.transformModX-1&&n<.5*l.transformModX+1&&o>-.5*l.transformModY-1&&o<.5*l.transformModY+1&&(r="perspective("+t.width/2+"px) ",r+="scale("+l.transformScale+") ",r+="rotateY("+n+"deg) ",r+="rotateX("+o+"deg)",e.style.transform=r),(i=e.querySelector(l.selectors.featuredImage))&&(s="scale(1.025) ",s+="translateX("+8*n*-1+"px) ",s+="translateY("+6*o+"px) ",i.style.transform=s)}function a(){e()}var l={onlyRunAbove:992,transformModX:1,transformModY:1.5,transformPerspective:"600px",transformScale:1.01,mouseOverToggleClass:"-is-being-hovered",selectors:{articleSummary:".article-summary",featuredImage:".article-summary__featured-image"}};return{init:a}}(),HandleContactForm=function(){function e(){var e;null!==(e=document.querySelector(".form__contact"))&&e.length>0&&e.addEventListener("submit",t)}function t(e){e.preventDefault();var t,o,i,s,a,l,c=!1;t=r.sendingClass,o=r.sentClass,i=r.doneClass,s=r.thanksClass,a=r.sendingDelay;var u=this,d=u.action,f=document.querySelector(".form__field--name"),m=document.querySelector(".form__field--email"),v=document.querySelector(".form__field--message"),g=document.querySelector(".form__field--phone"),h=f.value,y=m.value,p=v.value;g.value;if(l=document.querySelector(".form__error"),c=n(p),console.log(c),c){l.innerHTML="",u.classList.add(t);var L="?form-name=contact";L+="&name="+h,L+="&email="+y,L+="&message="+p;var S=d+L;S=encodeURI(S);var b=new XMLHttpRequest;b.open("POST",S,!0),b.onload=function(){b.status>=200&&b.status<400&&(setTimeout(function(){u.classList.add(o)},a),setTimeout(function(){u.classList.add(i)},2*a),setTimeout(function(){u.classList.add(s),f.value="",m.value="",v.value="",m.classList.remove("-has-text"),u.reset()},3*a))},b.onerror=function(){},b.send()}else l&&(l.innerHTML="Sorry but your message was deemed to be spam.")}function n(e){var t,n,o=!0,i=r.antiSpamKeywords;n=e.toLowerCase();for(var s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0&&(o=!1,console.log("Anti-span keyword "+t+" was found in the message."));return o}function o(){e()}var r={sendingClass:"-is-sending",sentClass:"-is-sent",doneClass:"-is-done",thanksClass:"-is-thankful",sendingDelay:1e3,antiSpamKeywords:["loan","income","cash","alexa","seo","bit.ly","lender","payday","viagra"]};return{init:o}}(),ExpandableCodeBlocks=function(){function e(){var e,t,n,o,r,i;if(e="-is-expandable",t=document.querySelectorAll(".highlight"))for(var s=0;s<t.length;s++)n=t[s],o=n.offsetWidth,r=n.querySelector("code"),r&&(i=r.offsetWidth),o&&i&&i>o&&n.classList.add(e)}function t(){e()}return{init:t}}(),HandleForms=function(){function e(){var e=document.querySelectorAll("input, select, textarea"),t=document.querySelectorAll(".form");if(e.length>0&&t.length>0)for(var n=0;n<e.length;n++)e[n].addEventListener("invalid",function(e){this.classList.add("-has-error"),this.parentElement.classList.add("-field-has-error")}),e[n].addEventListener("blur",function(e){this.checkValidity()})}function t(){var e=document.querySelectorAll('input[type="email"]');if(e.length>0)for(var t=0;t<e.length;t++)e[t].addEventListener("input",function(e){this.value.length>0?this.classList.add("-has-text"):this.classList.remove("-has-text")})}function n(){var e,t=document.querySelectorAll("select");if(t.length>0)for(var n=0;n<t.length;n++)t[n].addEventListener("focus",function(t){e=this.parentElement,e.classList.add("-has-focus")}),t[n].addEventListener("blur",function(t){e=this.parentElement,e.classList.remove("-has-focus")})}function o(){e(),t(),n()}return{init:o}}(),Helpers=function(){function e(){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)}function t(){var e=!1;return/MSIE 10/i.test(navigator.userAgent)&&(e=10),(/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent))&&(e=11),/Edge\/\d./i.test(navigator.userAgent)&&(e="edge"),e}return{getViewportWidth:e,isIE:t}}(),HandleLinks=function(){function e(){for(var e,t,n=document.links,o=n.length,r=window.location.hostname,i=0;i<o;i++)e=n[i],t=e.href,e.hostname!=r&&"javascript:void(0)"!==t&&"javascript:void(0);"!==t&&(e.target="_blank")}function t(){e()}return{init:t}}(),LqipImages=function(){function e(){var e,t,n,o,r,i;window.onload=function(){e=document.querySelectorAll(".img-shortcode__img-lqip");for(var s=0;s<e.length;s++)t=e[s],n=t.parentElement,o=n.parentElement,o.classList.add("-image-is-loading"),r=o.dataset.full,i=null,i=new Image,i.onload=function(){n=this.parentElement,o=n.parentElement,o.classList.add("-image-has-loaded")},i.src=r,i.classList.add("img-shortcode__img-full"),n.insertBefore(i,t)}}function t(){e()}return{init:t}}(),ToggleMobileMenu=function(){function e(){function e(){for(var e=!1,t=document.querySelector("body"),n=t.classList,o=0;o<n.length;o++)if("site-nav-is-open"==n[o]){e=!0;break}e?t.classList.remove("site-nav-is-open"):t.className+=" site-nav-is-open"}var t=document.querySelector(".site-nav__nav-toggle");t&&t.addEventListener("click",e,!1)}function t(){e()}return{init:t}}(),ObjectFitPolyfill=function(){function e(){t()&&n()}function t(){return"objectFit"in document.documentElement.style==!1}function n(){var e,t,n,o;if(e=document.querySelectorAll(".-is-object-fit-parent"))for(var r=0;r<e.length;r++)t=e[r],o=t.querySelector(".-uses-object-fit"),n=void 0!==o.dataset?o.dataset.source:o.getAttribute("data-source"),o.style.display="none",t.style.backgroundImage="url("+n+")"}function o(){e()}return{init:o}}(),TableOfContents=function(){function e(){var e=document.querySelector(".table-of-contents"),t=document.querySelector(".table-of-contents__toggle");t&&t.addEventListener("click",function(t){e.classList.contains("-is-expanded")?e.classList.remove("-is-expanded"):e.classList.add("-is-expanded")})}function t(){e()}return{init:t}}();!function(){ToggleMobileMenu.init(),HandleLinks.init(),HandleForms.init(),HandleContactForm.init(),TableOfContents.init(),ArticleSummaryHover.init(),ObjectFitPolyfill.init(),ExpandableCodeBlocks.init(),LqipImages.init()}();
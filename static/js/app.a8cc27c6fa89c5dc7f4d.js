webpackJsonp([1],{136:function(e,t,n){"use strict";var o=n(7),a=n(180),s=n(177),i=n.n(s);o.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Three",component:i.a}]})},138:function(e,t){},139:function(e,t,n){function o(e){n(171)}var a=n(133)(n(143),n(178),o,null,null);e.exports=a.exports},140:function(e,t,n){"use strict";function o(e,t){function n(){return 2*Math.PI/60/60*V.autoRotateSpeed}function o(){return Math.pow(.95,V.zoomSpeed)}function a(e){U.theta-=e}function s(e){U.phi-=e}function i(e){V.object instanceof c.PerspectiveCamera?_/=e:V.object instanceof c.OrthographicCamera?(V.object.zoom=Math.max(V.minZoom,Math.min(V.maxZoom,V.object.zoom*e)),V.object.updateProjectionMatrix(),I=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),V.enableZoom=!1)}function r(e){V.object instanceof c.PerspectiveCamera?_*=e:V.object instanceof c.OrthographicCamera?(V.object.zoom=Math.max(V.minZoom,Math.min(V.maxZoom,V.object.zoom/e)),V.object.updateProjectionMatrix(),I=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),V.enableZoom=!1)}function u(e){q.set(e.clientX,e.clientY)}function d(e){$.set(e.clientX,e.clientY)}function p(e){K.set(e.clientX,e.clientY)}function m(e){B.set(e.clientX,e.clientY),W.subVectors(B,q);var t=V.domElement===document?V.domElement.body:V.domElement;a(2*Math.PI*W.x/t.clientWidth*V.rotateSpeed),s(2*Math.PI*W.y/t.clientHeight*V.rotateSpeed),q.copy(B),V.update()}function l(e){J.set(e.clientX,e.clientY),ee.subVectors(J,$),ee.y>0?i(o()):ee.y<0&&r(o()),$.copy(J),V.update()}function h(e){Q.set(e.clientX,e.clientY),G.subVectors(Q,K),oe(G.x,G.y),K.copy(Q),V.update()}function b(e){}function f(e){e.deltaY<0?r(o()):e.deltaY>0&&i(o()),V.update()}function v(e){switch(e.keyCode){case V.keys.UP:oe(0,V.keyPanSpeed),V.update();break;case V.keys.BOTTOM:oe(0,-V.keyPanSpeed),V.update();break;case V.keys.LEFT:oe(V.keyPanSpeed,0),V.update();break;case V.keys.RIGHT:oe(-V.keyPanSpeed,0),V.update()}}function g(e){q.set(e.touches[0].pageX,e.touches[0].pageY)}function j(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);$.set(0,o)}function y(e){K.set(e.touches[0].pageX,e.touches[0].pageY)}function E(e){B.set(e.touches[0].pageX,e.touches[0].pageY),W.subVectors(B,q);var t=V.domElement===document?V.domElement.body:V.domElement;a(2*Math.PI*W.x/t.clientWidth*V.rotateSpeed),s(2*Math.PI*W.y/t.clientHeight*V.rotateSpeed),q.copy(B),V.update()}function w(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);J.set(0,a),ee.subVectors(J,$),ee.y>0?r(o()):ee.y<0&&i(o()),$.copy(J),V.update()}function O(e){Q.set(e.touches[0].pageX,e.touches[0].pageY),G.subVectors(Q,K),oe(G.x,G.y),K.copy(Q),V.update()}function k(e){}function P(e){if(!1!==V.enabled){switch(e.preventDefault(),e.button){case V.mouseButtons.ORBIT:if(!1===V.enableRotate)return;u(e),H=Y.ROTATE;break;case V.mouseButtons.ZOOM:if(!1===V.enableZoom)return;d(e),H=Y.DOLLY;break;case V.mouseButtons.PAN:if(!1===V.enablePan)return;p(e),H=Y.PAN}H!==Y.NONE&&(document.addEventListener("mousemove",T,!1),document.addEventListener("mouseup",L,!1),V.dispatchEvent(x))}}function T(e){if(!1!==V.enabled)switch(e.preventDefault(),H){case Y.ROTATE:if(!1===V.enableRotate)return;m(e);break;case Y.DOLLY:if(!1===V.enableZoom)return;l(e);break;case Y.PAN:if(!1===V.enablePan)return;h(e)}}function L(e){!1!==V.enabled&&(b(e),document.removeEventListener("mousemove",T,!1),document.removeEventListener("mouseup",L,!1),V.dispatchEvent(S),H=Y.NONE)}function M(e){!1===V.enabled||!1===V.enableZoom||H!==Y.NONE&&H!==Y.ROTATE||(e.preventDefault(),e.stopPropagation(),f(e),V.dispatchEvent(x),V.dispatchEvent(S))}function A(e){!1!==V.enabled&&!1!==V.enableKeys&&!1!==V.enablePan&&v(e)}function R(e){if(!1!==V.enabled){switch(e.touches.length){case 1:if(!1===V.enableRotate)return;g(e),H=Y.TOUCH_ROTATE;break;case 2:if(!1===V.enableZoom)return;j(e),H=Y.TOUCH_DOLLY;break;case 3:if(!1===V.enablePan)return;y(e),H=Y.TOUCH_PAN;break;default:H=Y.NONE}H!==Y.NONE&&V.dispatchEvent(x)}}function N(e){if(!1!==V.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===V.enableRotate)return;if(H!==Y.TOUCH_ROTATE)return;E(e);break;case 2:if(!1===V.enableZoom)return;if(H!==Y.TOUCH_DOLLY)return;w(e);break;case 3:if(!1===V.enablePan)return;if(H!==Y.TOUCH_PAN)return;O(e);break;default:H=Y.NONE}}function z(e){!1!==V.enabled&&(k(e),V.dispatchEvent(S),H=Y.NONE)}function C(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new c.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:c.MOUSE.LEFT,ZOOM:c.MOUSE.MIDDLE,PAN:c.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return X.phi},this.getAzimuthalAngle=function(){return X.theta},this.saveState=function(){V.target0.copy(V.target),V.position0.copy(V.object.position),V.zoom0=V.object.zoom},this.reset=function(){V.target.copy(V.target0),V.object.position.copy(V.position0),V.object.zoom=V.zoom0,V.object.updateProjectionMatrix(),V.dispatchEvent(D),V.update(),H=Y.NONE},this.update=function(){var t=new c.Vector3,o=(new c.Quaternion).setFromUnitVectors(e.up,new c.Vector3(0,1,0)),s=o.clone().inverse(),i=new c.Vector3,r=new c.Quaternion;return function(){var e=V.object.position;return t.copy(e).sub(V.target),t.applyQuaternion(o),X.setFromVector3(t),V.autoRotate&&H===Y.NONE&&a(n()),X.theta+=U.theta,X.phi+=U.phi,X.theta=Math.max(V.minAzimuthAngle,Math.min(V.maxAzimuthAngle,X.theta)),X.phi=Math.max(V.minPolarAngle,Math.min(V.maxPolarAngle,X.phi)),X.makeSafe(),X.radius*=_,X.radius=Math.max(V.minDistance,Math.min(V.maxDistance,X.radius)),V.target.add(F),t.setFromSpherical(X),t.applyQuaternion(s),e.copy(V.target).add(t),V.object.lookAt(V.target),!0===V.enableDamping?(U.theta*=1-V.dampingFactor,U.phi*=1-V.dampingFactor):U.set(0,0,0),_=1,F.set(0,0,0),!!(I||i.distanceToSquared(V.object.position)>Z||8*(1-r.dot(V.object.quaternion))>Z)&&(V.dispatchEvent(D),i.copy(V.object.position),r.copy(V.object.quaternion),I=!1,!0)}}(),this.dispose=function(){V.domElement.removeEventListener("contextmenu",C,!1),V.domElement.removeEventListener("mousedown",P,!1),V.domElement.removeEventListener("wheel",M,!1),V.domElement.removeEventListener("touchstart",R,!1),V.domElement.removeEventListener("touchend",z,!1),V.domElement.removeEventListener("touchmove",N,!1),document.removeEventListener("mousemove",T,!1),document.removeEventListener("mouseup",L,!1),window.removeEventListener("keydown",A,!1)};var V=this,D={type:"change"},x={type:"start"},S={type:"end"},Y={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},H=Y.NONE,Z=1e-6,X=new c.Spherical,U=new c.Spherical,_=1,F=new c.Vector3,I=!1,q=new c.Vector2,B=new c.Vector2,W=new c.Vector2,K=new c.Vector2,Q=new c.Vector2,G=new c.Vector2,$=new c.Vector2,J=new c.Vector2,ee=new c.Vector2,te=function(){var e=new c.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),F.add(e)}}(),ne=function(){var e=new c.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),F.add(e)}}(),oe=function(){var e=new c.Vector3;return function(t,n){var o=V.domElement===document?V.domElement.body:V.domElement;if(V.object instanceof c.PerspectiveCamera){var a=V.object.position;e.copy(a).sub(V.target);var s=e.length();s*=Math.tan(V.object.fov/2*Math.PI/180),te(2*t*s/o.clientHeight,V.object.matrix),ne(2*n*s/o.clientHeight,V.object.matrix)}else V.object instanceof c.OrthographicCamera?(te(t*(V.object.right-V.object.left)/V.object.zoom/o.clientWidth,V.object.matrix),ne(n*(V.object.top-V.object.bottom)/V.object.zoom/o.clientHeight,V.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),V.enablePan=!1)}}();V.domElement.addEventListener("contextmenu",C,!1),V.domElement.addEventListener("mousedown",P,!1),V.domElement.addEventListener("wheel",M,!1),V.domElement.addEventListener("touchstart",R,!1),V.domElement.addEventListener("touchend",z,!1),V.domElement.addEventListener("touchmove",N,!1),window.addEventListener("keydown",A,!1),this.update()}var a=n(146),s=n.n(a),i=n(8),r=n.n(i),c=window.THREE||n(6);o.prototype=r()(c.EventDispatcher.prototype),o.prototype.constructor=c.OrbitControls,s()(o.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}})},141:function(e,t,n){"use strict";var o=n(8),a=n.n(o),s=window.THREE||n(6),i=function(e,t){function n(e){!1!==l.enabled&&(window.removeEventListener("keydown",n),v=f,f===h.NONE&&(e.keyCode!==l.keys[h.ROTATE]||l.noRotate?e.keyCode!==l.keys[h.ZOOM]||l.noZoom?e.keyCode!==l.keys[h.PAN]||l.noPan||(f=h.PAN):f=h.ZOOM:f=h.ROTATE))}function o(e){!1!==l.enabled&&(f=v,window.addEventListener("keydown",n,!1))}function a(e){!1!==l.enabled&&(e.preventDefault(),e.stopPropagation(),f===h.NONE&&(f=e.button),f!==h.ROTATE||l.noRotate?f!==h.ZOOM||l.noZoom?f!==h.PAN||l.noPan||(L.copy(z(e.pageX,e.pageY)),M.copy(L)):(O.copy(z(e.pageX,e.pageY)),k.copy(O)):(y.copy(C(e.pageX,e.pageY)),j.copy(y)),document.addEventListener("mousemove",i,!1),document.addEventListener("mouseup",r,!1),l.dispatchEvent(R))}function i(e){!1!==l.enabled&&(e.preventDefault(),e.stopPropagation(),f!==h.ROTATE||l.noRotate?f!==h.ZOOM||l.noZoom?f!==h.PAN||l.noPan||M.copy(z(e.pageX,e.pageY)):k.copy(z(e.pageX,e.pageY)):(j.copy(y),y.copy(C(e.pageX,e.pageY))))}function r(e){!1!==l.enabled&&(e.preventDefault(),e.stopPropagation(),f=h.NONE,document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",r),l.dispatchEvent(N))}function c(e){if(!1!==l.enabled){switch(e.preventDefault(),e.stopPropagation(),e.deltaMode){case 2:O.y-=.025*e.deltaY;break;case 1:O.y-=.01*e.deltaY;break;default:O.y-=25e-5*e.deltaY}l.dispatchEvent(R),l.dispatchEvent(N)}}function u(e){if(!1!==l.enabled){switch(e.touches.length){case 1:f=h.TOUCH_ROTATE,y.copy(C(e.touches[0].pageX,e.touches[0].pageY)),j.copy(y);break;default:f=h.TOUCH_ZOOM_PAN;var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;T=P=Math.sqrt(t*t+n*n);var o=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;L.copy(z(o,a)),M.copy(L)}l.dispatchEvent(R)}}function d(e){if(!1!==l.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:j.copy(y),y.copy(C(e.touches[0].pageX,e.touches[0].pageY));break;default:var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY;T=Math.sqrt(t*t+n*n);var o=(e.touches[0].pageX+e.touches[1].pageX)/2,a=(e.touches[0].pageY+e.touches[1].pageY)/2;M.copy(z(o,a))}}function p(e){if(!1!==l.enabled){switch(e.touches.length){case 0:f=h.NONE;break;case 1:f=h.TOUCH_ROTATE,y.copy(C(e.touches[0].pageX,e.touches[0].pageY)),j.copy(y)}l.dispatchEvent(N)}}function m(e){e.preventDefault()}var l=this,h={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new s.Vector3;var b=new s.Vector3,f=h.NONE,v=h.NONE,g=new s.Vector3,j=new s.Vector2,y=new s.Vector2,E=new s.Vector3,w=0,O=new s.Vector2,k=new s.Vector2,P=0,T=0,L=new s.Vector2,M=new s.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var A={type:"change"},R={type:"start"},N={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}},this.handleEvent=function(e){"function"==typeof this[e.type]&&this[e.type](e)};var z=function(){var e=new s.Vector2;return function(t,n){return e.set((t-l.screen.left)/l.screen.width,(n-l.screen.top)/l.screen.height),e}}(),C=function(){var e=new s.Vector2;return function(t,n){return e.set((t-.5*l.screen.width-l.screen.left)/(.5*l.screen.width),(l.screen.height+2*(l.screen.top-n))/l.screen.width),e}}();this.rotateCamera=function(){var e,t=new s.Vector3,n=new s.Quaternion,o=new s.Vector3,a=new s.Vector3,i=new s.Vector3,r=new s.Vector3;return function(){r.set(y.x-j.x,y.y-j.y,0),e=r.length(),e?(g.copy(l.object.position).sub(l.target),o.copy(g).normalize(),a.copy(l.object.up).normalize(),i.crossVectors(a,o).normalize(),a.setLength(y.y-j.y),i.setLength(y.x-j.x),r.copy(a.add(i)),t.crossVectors(r,g).normalize(),e*=l.rotateSpeed,n.setFromAxisAngle(t,e),g.applyQuaternion(n),l.object.up.applyQuaternion(n),E.copy(t),w=e):!l.staticMoving&&w&&(w*=Math.sqrt(1-l.dynamicDampingFactor),g.copy(l.object.position).sub(l.target),n.setFromAxisAngle(E,w),g.applyQuaternion(n),l.object.up.applyQuaternion(n)),j.copy(y)}}(),this.zoomCamera=function(){var e;f===h.TOUCH_ZOOM_PAN?(e=P/T,P=T,g.multiplyScalar(e)):(e=1+(k.y-O.y)*l.zoomSpeed,1!==e&&e>0&&g.multiplyScalar(e),l.staticMoving?O.copy(k):O.y+=(k.y-O.y)*this.dynamicDampingFactor)},this.panCamera=function(){var e=new s.Vector2,t=new s.Vector3,n=new s.Vector3;return function(){e.copy(M).sub(L),e.lengthSq()&&(e.multiplyScalar(g.length()*l.panSpeed),n.copy(g).cross(l.object.up).setLength(e.x),n.add(t.copy(l.object.up).setLength(e.y)),l.object.position.add(n),l.target.add(n),l.staticMoving?L.copy(M):L.add(e.subVectors(M,L).multiplyScalar(l.dynamicDampingFactor)))}}(),this.checkDistances=function(){l.noZoom&&l.noPan||(g.lengthSq()>l.maxDistance*l.maxDistance&&(l.object.position.addVectors(l.target,g.setLength(l.maxDistance)),O.copy(k)),g.lengthSq()<l.minDistance*l.minDistance&&(l.object.position.addVectors(l.target,g.setLength(l.minDistance)),O.copy(k)))},this.update=function(){g.subVectors(l.object.position,l.target),l.noRotate||l.rotateCamera(),l.noZoom||l.zoomCamera(),l.noPan||l.panCamera(),l.object.position.addVectors(l.target,g),l.checkDistances(),l.object.lookAt(l.target),b.distanceToSquared(l.object.position)>1e-6&&(l.dispatchEvent(A),b.copy(l.object.position))},this.reset=function(){f=h.NONE,v=h.NONE,l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.up.copy(l.up0),g.subVectors(l.object.position,l.target),l.object.lookAt(l.target),l.dispatchEvent(A),b.copy(l.object.position)},this.dispose=function(){this.domElement.removeEventListener("contextmenu",m,!1),this.domElement.removeEventListener("mousedown",a,!1),this.domElement.removeEventListener("wheel",c,!1),this.domElement.removeEventListener("touchstart",u,!1),this.domElement.removeEventListener("touchend",p,!1),this.domElement.removeEventListener("touchmove",d,!1),document.removeEventListener("mousemove",i,!1),document.removeEventListener("mouseup",r,!1),window.removeEventListener("keydown",n,!1),window.removeEventListener("keyup",o,!1)},this.domElement.addEventListener("contextmenu",m,!1),this.domElement.addEventListener("mousedown",a,!1),this.domElement.addEventListener("wheel",c,!1),this.domElement.addEventListener("touchstart",u,!1),this.domElement.addEventListener("touchend",p,!1),this.domElement.addEventListener("touchmove",d,!1),window.addEventListener("keydown",n,!1),window.addEventListener("keyup",o,!1),this.handleResize(),this.update()};i.prototype=a()(s.EventDispatcher.prototype),i.prototype.constructor=s.TrackballControls},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),a=n(137),s=n.n(a),i=n(138),r=(n.n(i),n(139)),c=n.n(r),u=n(136);o.a.use(s.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:u.a,template:"<App/>",components:{App:c.a}})},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},144:function(e,t,n){"use strict";function o(){P=new f.WebGLRenderer({alpha:!0,antialias:!0}),P.shadowMap.soft=!0,P.shadowMap.enabled=!0,P.setSize(L,M),T.appendChild(P.domElement)}function a(){O=new f.PerspectiveCamera(50,L/M,1,1e4),O.position.copy(l(D,x,.2)),O.lookAt(V)}function s(){var e=new f.JSONLoader;C=new f.Object3D,e.load("staticmodels/wpt.json",function(e){console.log("object");var t=new f.LineBasicMaterial({color:1752220,linewidth:2}),n=new f.MeshBasicMaterial({color:1752220,side:f.DoubleSide,transparent:!0,opacity:.25,wireframe:!0}),o=new f.MeshBasicMaterial({color:1752220,side:f.DoubleSide,transparent:!0,opacity:.2}),a=new f.EdgesGeometry(e),s=new f.LineSegments(a,t),i=new f.Mesh(e,n),r=new f.Mesh(e,o);[s,i,r].forEach(function(e){e.scale.set(5,5,5),e.position.set(10,0,10)}),C.add(s),C.add(i),C.add(r),w.add(C)})}function i(){P.setSize(0,0),L=T.offsetWidth,M=T.offsetHeight,N=L/2,z=M/2,O.aspect=L/M,O.updateProjectionMatrix(),P.setSize(L,M),p()}function r(e){A=(e.clientX-N)/10,R=(e.clientY-z)/10,S=l(D,x,e.clientX/L)}function c(e){switch(e.keyCode){case 83:d();break;case 65:u()}}function u(){var e=JSON.parse(localStorage.getItem("savedCamera"));e&&(O.position.copy(e.cameraPosition),O.lookAt(e.targetPosition),O.lookAt(V),k.target.copy(e.targetPosition))}function d(){localStorage.savedCamera=b()({cameraPosition:O.position,targetPosition:k.target})}function p(){P.render(w,O)}function m(){window.addEventListener("resize",i,!1),document.addEventListener("mousemove",n.i(E.throttle)(r,50),!1),document.body.addEventListener("keydown",c)}function l(e,t,n){var o=t.clone().sub(e),a=o.length();return o=o.normalize().multiplyScalar(a*n),e.clone().add(o)}Object.defineProperty(t,"__esModule",{value:!0});var h=n(145),b=n.n(h),f=n(6),v=n(176),g=(n.n(v),n(0)),j=n.n(g),y=n(175),E=(n.n(y),n(173)),w=(n.n(E),n(141),n(140),void 0),O=void 0,k=void 0,P=void 0,T=void 0,L=void 0,M=void 0,A=0,R=0,N=void 0,z=void 0,C=void 0,V=new f.Vector3(5,0,-5),D=new f.Vector3(-20,5,30),x=new f.Vector3(2.80944512961746,14.220028358545097,28.24894378535977),S=void 0;t.default={name:"scene",props:["position","isAnimationActive"],data:function(){return{time:void 0}},computed:{hour:function(){var e=new Date(6e5*Math.round(this.time/6e5));return j()(e).format("HH:mm:ss")},date:function(){return j()(this.time).format("DD/MM/YYYY")}},mounted:function(){null===this.$refs.scene.querySelector("canvas")&&(T=this.$refs.scene,L=T.offsetWidth,M=T.offsetHeight,N=L/2,z=M/2,this.init())},methods:{animate:function(){if(requestAnimationFrame(this.animate),S){var e=(new f.Vector3).subVectors(S,O.position);O.position.x+=.05*e.x,O.position.y+=.05*e.y,O.position.z+=.05*e.z,O.lookAt(V)}p()},init:function(){w=new f.Scene,this.time=(new Date).valueOf(),s(),a(),o(),m(),p(),this.animate()}}}},171:function(e,t){},172:function(e,t){},174:function(e,t,n){function o(e){return n(a(e))}function a(e){var t=s[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var s={"./af":18,"./af.js":18,"./ar":25,"./ar-dz":19,"./ar-dz.js":19,"./ar-kw":20,"./ar-kw.js":20,"./ar-ly":21,"./ar-ly.js":21,"./ar-ma":22,"./ar-ma.js":22,"./ar-sa":23,"./ar-sa.js":23,"./ar-tn":24,"./ar-tn.js":24,"./ar.js":25,"./az":26,"./az.js":26,"./be":27,"./be.js":27,"./bg":28,"./bg.js":28,"./bn":29,"./bn.js":29,"./bo":30,"./bo.js":30,"./br":31,"./br.js":31,"./bs":32,"./bs.js":32,"./ca":33,"./ca.js":33,"./cs":34,"./cs.js":34,"./cv":35,"./cv.js":35,"./cy":36,"./cy.js":36,"./da":37,"./da.js":37,"./de":40,"./de-at":38,"./de-at.js":38,"./de-ch":39,"./de-ch.js":39,"./de.js":40,"./dv":41,"./dv.js":41,"./el":42,"./el.js":42,"./en-au":43,"./en-au.js":43,"./en-ca":44,"./en-ca.js":44,"./en-gb":45,"./en-gb.js":45,"./en-ie":46,"./en-ie.js":46,"./en-nz":47,"./en-nz.js":47,"./eo":48,"./eo.js":48,"./es":50,"./es-do":49,"./es-do.js":49,"./es.js":50,"./et":51,"./et.js":51,"./eu":52,"./eu.js":52,"./fa":53,"./fa.js":53,"./fi":54,"./fi.js":54,"./fo":55,"./fo.js":55,"./fr":58,"./fr-ca":56,"./fr-ca.js":56,"./fr-ch":57,"./fr-ch.js":57,"./fr.js":58,"./fy":59,"./fy.js":59,"./gd":60,"./gd.js":60,"./gl":61,"./gl.js":61,"./gom-latn":62,"./gom-latn.js":62,"./he":63,"./he.js":63,"./hi":64,"./hi.js":64,"./hr":65,"./hr.js":65,"./hu":66,"./hu.js":66,"./hy-am":67,"./hy-am.js":67,"./id":68,"./id.js":68,"./is":69,"./is.js":69,"./it":70,"./it.js":70,"./ja":71,"./ja.js":71,"./jv":72,"./jv.js":72,"./ka":73,"./ka.js":73,"./kk":74,"./kk.js":74,"./km":75,"./km.js":75,"./kn":76,"./kn.js":76,"./ko":77,"./ko.js":77,"./ky":78,"./ky.js":78,"./lb":79,"./lb.js":79,"./lo":80,"./lo.js":80,"./lt":81,"./lt.js":81,"./lv":82,"./lv.js":82,"./me":83,"./me.js":83,"./mi":84,"./mi.js":84,"./mk":85,"./mk.js":85,"./ml":86,"./ml.js":86,"./mr":87,"./mr.js":87,"./ms":89,"./ms-my":88,"./ms-my.js":88,"./ms.js":89,"./my":90,"./my.js":90,"./nb":91,"./nb.js":91,"./ne":92,"./ne.js":92,"./nl":94,"./nl-be":93,"./nl-be.js":93,"./nl.js":94,"./nn":95,"./nn.js":95,"./pa-in":96,"./pa-in.js":96,"./pl":97,"./pl.js":97,"./pt":99,"./pt-br":98,"./pt-br.js":98,"./pt.js":99,"./ro":100,"./ro.js":100,"./ru":101,"./ru.js":101,"./sd":102,"./sd.js":102,"./se":103,"./se.js":103,"./si":104,"./si.js":104,"./sk":105,"./sk.js":105,"./sl":106,"./sl.js":106,"./sq":107,"./sq.js":107,"./sr":109,"./sr-cyrl":108,"./sr-cyrl.js":108,"./sr.js":109,"./ss":110,"./ss.js":110,"./sv":111,"./sv.js":111,"./sw":112,"./sw.js":112,"./ta":113,"./ta.js":113,"./te":114,"./te.js":114,"./tet":115,"./tet.js":115,"./th":116,"./th.js":116,"./tl-ph":117,"./tl-ph.js":117,"./tlh":118,"./tlh.js":118,"./tr":119,"./tr.js":119,"./tzl":120,"./tzl.js":120,"./tzm":122,"./tzm-latn":121,"./tzm-latn.js":121,"./tzm.js":122,"./uk":123,"./uk.js":123,"./ur":124,"./ur.js":124,"./uz":126,"./uz-latn":125,"./uz-latn.js":125,"./uz.js":126,"./vi":127,"./vi.js":127,"./x-pseudo":128,"./x-pseudo.js":128,"./yo":129,"./yo.js":129,"./zh-cn":130,"./zh-cn.js":130,"./zh-hk":131,"./zh-hk.js":131,"./zh-tw":132,"./zh-tw.js":132};o.keys=function(){return Object.keys(s)},o.resolve=a,e.exports=o,o.id=174},177:function(e,t,n){function o(e){n(172)}var a=n(133)(n(144),n(179),o,"data-v-ba65df48",null);e.exports=a.exports},178:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},179:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"scene",staticClass:"Scene"})},staticRenderFns:[]}}},[142]);
//# sourceMappingURL=app.a8cc27c6fa89c5dc7f4d.js.map
/* esm.sh - esbuild bundle(@material/material-color-utilities@0.4.0) es2022 production */
function G(r){return r<0?-1:r===0?0:1}function ct(r,t,e){return(1-e)*r+e*t}function ce(r,t,e){return e<r?r:e>t?t:e}function U(r,t,e){return e<r?r:e>t?t:e}function ht(r){return r=r%360,r<0&&(r=r+360),r}function _(r){return r=r%360,r<0&&(r=r+360),r}function ue(r,t){return _(t-r)<=180?1:-1}function wt(r,t){return 180-Math.abs(Math.abs(r-t)-180)}function yt(r,t){let e=r[0]*t[0][0]+r[1]*t[0][1]+r[2]*t[0][2],n=r[0]*t[1][0]+r[1]*t[1][1]+r[2]*t[1][2],a=r[0]*t[2][0]+r[1]*t[2][1]+r[2]*t[2][2];return[e,n,a]}var le=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Ie=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Kt=[95.047,100,108.883];function Ct(r,t,e){return(255<<24|(r&255)<<16|(t&255)<<8|e&255)>>>0}function Xt(r){let t=ut(r[0]),e=ut(r[1]),n=ut(r[2]);return Ct(t,e,n)}function qt(r){return r>>24&255}function mt(r){return r>>16&255}function ft(r){return r>>8&255}function pt(r){return r&255}function Xe(r){return qt(r)>=255}function $t(r,t,e){let n=Ie,a=n[0][0]*r+n[0][1]*t+n[0][2]*e,o=n[1][0]*r+n[1][1]*t+n[1][2]*e,i=n[2][0]*r+n[2][1]*t+n[2][2]*e,c=ut(a),h=ut(o),d=ut(i);return Ct(c,h,d)}function Me(r){let t=rt(mt(r)),e=rt(ft(r)),n=rt(pt(r));return yt([t,e,n],le)}function he(r,t,e){let n=Kt,a=(r+16)/116,o=t/500+a,i=a-e/200,c=vt(o),h=vt(a),d=vt(i),l=c*n[0],y=h*n[1],P=d*n[2];return $t(l,y,P)}function Et(r){let t=rt(mt(r)),e=rt(ft(r)),n=rt(pt(r)),a=le,o=a[0][0]*t+a[0][1]*e+a[0][2]*n,i=a[1][0]*t+a[1][1]*e+a[1][2]*n,c=a[2][0]*t+a[2][1]*e+a[2][2]*n,h=Kt,d=o/h[0],l=i/h[1],y=c/h[2],P=Pt(d),g=Pt(l),p=Pt(y),m=116*g-16,C=500*(P-g),v=200*(g-p);return[m,C,v]}function me(r){let t=J(r),e=ut(t);return Ct(e,e,e)}function St(r){let t=Me(r)[1];return 116*Pt(t/100)-16}function J(r){return 100*vt((r+16)/116)}function xt(r){return Pt(r/100)*116-16}function rt(r){let t=r/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function ut(r){let t=r/100,e=0;return t<=.0031308?e=t*12.92:e=1.055*Math.pow(t,1/2.4)-.055,ce(0,255,Math.round(e*255))}function fe(){return Kt}function Pt(r){let t=.008856451679035631,e=24389/27;return r>t?Math.pow(r,1/3):(e*r+16)/116}function vt(r){let t=.008856451679035631,e=24389/27,n=r*r*r;return n>t?n:(116*r-16)/e}var $=class r{static make(t=fe(),e=200/Math.PI*J(50)/100,n=50,a=2,o=!1){let i=t,c=i[0]*.401288+i[1]*.650173+i[2]*-.051461,h=i[0]*-.250268+i[1]*1.204414+i[2]*.045854,d=i[0]*-.002079+i[1]*.048952+i[2]*.953127,l=.8+a/10,y=l>=.9?ct(.59,.69,(l-.9)*10):ct(.525,.59,(l-.8)*10),P=o?1:l*(1-1/3.6*Math.exp((-e-42)/92));P=P>1?1:P<0?0:P;let g=l,p=[P*(100/c)+1-P,P*(100/h)+1-P,P*(100/d)+1-P],m=1/(5*e+1),C=m*m*m*m,v=1-C,x=C*e+.1*v*v*Math.cbrt(5*e),k=J(n)/t[1],I=1.48+Math.sqrt(k),L=.725/Math.pow(k,.2),O=L,A=[Math.pow(x*p[0]*c/100,.42),Math.pow(x*p[1]*h/100,.42),Math.pow(x*p[2]*d/100,.42)],E=[400*A[0]/(A[0]+27.13),400*A[1]/(A[1]+27.13),400*A[2]/(A[2]+27.13)],V=(2*E[0]+E[1]+.05*E[2])*L;return new r(k,V,L,O,y,g,p,x,Math.pow(x,.25),I)}constructor(t,e,n,a,o,i,c,h,d,l){this.n=t,this.aw=e,this.nbb=n,this.ncb=a,this.c=o,this.nc=i,this.rgbD=c,this.fl=h,this.fLRoot=d,this.z=l}};$.DEFAULT=$.make();var K=class r{constructor(t,e,n,a,o,i,c,h,d){this.hue=t,this.chroma=e,this.j=n,this.q=a,this.m=o,this.s=i,this.jstar=c,this.astar=h,this.bstar=d}distance(t){let e=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,o=Math.sqrt(e*e+n*n+a*a);return 1.41*Math.pow(o,.63)}static fromInt(t){return r.fromIntInViewingConditions(t,$.DEFAULT)}static fromIntInViewingConditions(t,e){let n=(t&16711680)>>16,a=(t&65280)>>8,o=t&255,i=rt(n),c=rt(a),h=rt(o),d=.41233895*i+.35762064*c+.18051042*h,l=.2126*i+.7152*c+.0722*h,y=.01932141*i+.11916382*c+.95034478*h,P=.401288*d+.650173*l-.051461*y,g=-.250268*d+1.204414*l+.045854*y,p=-.002079*d+.048952*l+.953127*y,m=e.rgbD[0]*P,C=e.rgbD[1]*g,v=e.rgbD[2]*p,x=Math.pow(e.fl*Math.abs(m)/100,.42),k=Math.pow(e.fl*Math.abs(C)/100,.42),I=Math.pow(e.fl*Math.abs(v)/100,.42),L=G(m)*400*x/(x+27.13),O=G(C)*400*k/(k+27.13),A=G(v)*400*I/(I+27.13),E=(11*L+-12*O+A)/11,V=(L+O-2*A)/9,R=(20*L+20*O+21*A)/20,Y=(40*L+20*O+A)/20,et=Math.atan2(V,E)*180/Math.PI,z=_(et),st=z*Math.PI/180,kt=Y*e.nbb,ot=100*Math.pow(kt/e.aw,e.c*e.z),bt=4/e.c*Math.sqrt(ot/100)*(e.aw+4)*e.fLRoot,_t=z<20.14?z+360:z,zt=.25*(Math.cos(_t*Math.PI/180+2)+3.8),Yt=5e4/13*zt*e.nc*e.ncb*Math.sqrt(E*E+V*V)/(R+.305),Ft=Math.pow(Yt,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),oe=Ft*Math.sqrt(ot/100),ie=oe*e.fLRoot,Fe=50*Math.sqrt(Ft*e.c/(e.aw+4)),we=(1+100*.007)*ot/(1+.007*ot),se=1/.0228*Math.log(1+.0228*ie),ve=se*Math.cos(st),Ee=se*Math.sin(st);return new r(z,oe,ot,bt,ie,Fe,we,ve,Ee)}static fromJch(t,e,n){return r.fromJchInViewingConditions(t,e,n,$.DEFAULT)}static fromJchInViewingConditions(t,e,n,a){let o=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,i=e*a.fLRoot,c=e/Math.sqrt(t/100),h=50*Math.sqrt(c*a.c/(a.aw+4)),d=n*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),y=1/.0228*Math.log(1+.0228*i),P=y*Math.cos(d),g=y*Math.sin(d);return new r(n,e,t,o,i,h,l,P,g)}static fromUcs(t,e,n){return r.fromUcsInViewingConditions(t,e,n,$.DEFAULT)}static fromUcsInViewingConditions(t,e,n,a){let o=e,i=n,c=Math.sqrt(o*o+i*i),d=(Math.exp(c*.0228)-1)/.0228/a.fLRoot,l=Math.atan2(i,o)*(180/Math.PI);l<0&&(l+=360);let y=t/(1-(t-100)*.007);return r.fromJchInViewingConditions(y,d,l,a)}toInt(){return this.viewed($.DEFAULT)}viewed(t){let e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=o*(5e4/13)*t.nc*t.ncb,h=i/t.nbb,d=Math.sin(a),l=Math.cos(a),y=23*(h+.305)*n/(23*c+11*n*l+108*n*d),P=y*l,g=y*d,p=(460*h+451*P+288*g)/1403,m=(460*h-891*P-261*g)/1403,C=(460*h-220*P-6300*g)/1403,v=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),x=G(p)*(100/t.fl)*Math.pow(v,1/.42),k=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),I=G(m)*(100/t.fl)*Math.pow(k,1/.42),L=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),O=G(C)*(100/t.fl)*Math.pow(L,1/.42),A=x/t.rgbD[0],E=I/t.rgbD[1],V=O/t.rgbD[2],R=1.86206786*A-1.01125463*E+.14918677*V,Y=.38752654*A+.62144744*E-.00897398*V,j=-.0158415*A-.03412294*E+1.04996444*V;return $t(R,Y,j)}static fromXyzInViewingConditions(t,e,n,a){let o=.401288*t+.650173*e-.051461*n,i=-.250268*t+1.204414*e+.045854*n,c=-.002079*t+.048952*e+.953127*n,h=a.rgbD[0]*o,d=a.rgbD[1]*i,l=a.rgbD[2]*c,y=Math.pow(a.fl*Math.abs(h)/100,.42),P=Math.pow(a.fl*Math.abs(d)/100,.42),g=Math.pow(a.fl*Math.abs(l)/100,.42),p=G(h)*400*y/(y+27.13),m=G(d)*400*P/(P+27.13),C=G(l)*400*g/(g+27.13),v=(11*p+-12*m+C)/11,x=(p+m-2*C)/9,k=(20*p+20*m+21*C)/20,I=(40*p+20*m+C)/20,O=Math.atan2(x,v)*180/Math.PI,A=O<0?O+360:O>=360?O-360:O,E=A*Math.PI/180,V=I*a.nbb,R=100*Math.pow(V/a.aw,a.c*a.z),Y=4/a.c*Math.sqrt(R/100)*(a.aw+4)*a.fLRoot,j=A<20.14?A+360:A,et=1/4*(Math.cos(j*Math.PI/180+2)+3.8),st=5e4/13*et*a.nc*a.ncb*Math.sqrt(v*v+x*x)/(k+.305),kt=Math.pow(st,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),ot=kt*Math.sqrt(R/100),bt=ot*a.fLRoot,_t=50*Math.sqrt(kt*a.c/(a.aw+4)),zt=(1+100*.007)*R/(1+.007*R),Gt=Math.log(1+.0228*bt)/.0228,Yt=Gt*Math.cos(E),Ft=Gt*Math.sin(E);return new r(A,ot,R,Y,bt,_t,zt,Yt,Ft)}xyzInViewingConditions(t){let e=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(e/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=o*(5e4/13)*t.nc*t.ncb,h=i/t.nbb,d=Math.sin(a),l=Math.cos(a),y=23*(h+.305)*n/(23*c+11*n*l+108*n*d),P=y*l,g=y*d,p=(460*h+451*P+288*g)/1403,m=(460*h-891*P-261*g)/1403,C=(460*h-220*P-6300*g)/1403,v=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),x=G(p)*(100/t.fl)*Math.pow(v,1/.42),k=Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),I=G(m)*(100/t.fl)*Math.pow(k,1/.42),L=Math.max(0,27.13*Math.abs(C)/(400-Math.abs(C))),O=G(C)*(100/t.fl)*Math.pow(L,1/.42),A=x/t.rgbD[0],E=I/t.rgbD[1],V=O/t.rgbD[2],R=1.86206786*A-1.01125463*E+.14918677*V,Y=.38752654*A+.62144744*E-.00897398*V,j=-.0158415*A-.03412294*E+1.04996444*V;return[R,Y,j]}};var Q=class r{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){let e=t/100,n=0;return e<=.0031308?n=e*12.92:n=1.055*Math.pow(e,1/2.4)-.055,n*255}static chromaticAdaptation(t){let e=Math.pow(Math.abs(t),.42);return G(t)*400*e/(e+27.13)}static hueOf(t){let e=yt(t,r.SCALED_DISCOUNT_FROM_LINRGB),n=r.chromaticAdaptation(e[0]),a=r.chromaticAdaptation(e[1]),o=r.chromaticAdaptation(e[2]),i=(11*n+-12*a+o)/11,c=(n+a-2*o)/9;return Math.atan2(c,i)}static areInCyclicOrder(t,e,n){let a=r.sanitizeRadians(e-t),o=r.sanitizeRadians(n-t);return a<o}static intercept(t,e,n){return(e-t)/(n-t)}static lerpPoint(t,e,n){return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}static setCoordinate(t,e,n,a){let o=r.intercept(t[a],e,n[a]);return r.lerpPoint(t,o,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,e){let n=r.Y_FROM_LINRGB[0],a=r.Y_FROM_LINRGB[1],o=r.Y_FROM_LINRGB[2],i=e%4<=1?0:100,c=e%2===0?0:100;if(e<4){let h=i,d=c,l=(t-h*a-d*o)/n;return r.isBounded(l)?[l,h,d]:[-1,-1,-1]}else if(e<8){let h=i,d=c,l=(t-d*n-h*o)/a;return r.isBounded(l)?[d,l,h]:[-1,-1,-1]}else{let h=i,d=c,l=(t-h*n-d*a)/o;return r.isBounded(l)?[h,d,l]:[-1,-1,-1]}}static bisectToSegment(t,e){let n=[-1,-1,-1],a=n,o=0,i=0,c=!1,h=!0;for(let d=0;d<12;d++){let l=r.nthVertex(t,d);if(l[0]<0)continue;let y=r.hueOf(l);if(!c){n=l,a=l,o=y,i=y,c=!0;continue}(h||r.areInCyclicOrder(o,y,i))&&(h=!1,r.areInCyclicOrder(o,e,y)?(a=l,i=y):(n=l,o=y))}return[n,a]}static midpoint(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2,(t[2]+e[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,e){let n=r.bisectToSegment(t,e),a=n[0],o=r.hueOf(a),i=n[1];for(let c=0;c<3;c++)if(a[c]!==i[c]){let h=-1,d=255;a[c]<i[c]?(h=r.criticalPlaneBelow(r.trueDelinearized(a[c])),d=r.criticalPlaneAbove(r.trueDelinearized(i[c]))):(h=r.criticalPlaneAbove(r.trueDelinearized(a[c])),d=r.criticalPlaneBelow(r.trueDelinearized(i[c])));for(let l=0;l<8&&!(Math.abs(d-h)<=1);l++){let y=Math.floor((h+d)/2),P=r.CRITICAL_PLANES[y],g=r.setCoordinate(a,P,i,c),p=r.hueOf(g);r.areInCyclicOrder(o,e,p)?(i=g,d=y):(a=g,o=p,h=y)}}return r.midpoint(a,i)}static inverseChromaticAdaptation(t){let e=Math.abs(t),n=Math.max(0,27.13*e/(400-e));return G(t)*Math.pow(n,1/.42)}static findResultByJ(t,e,n){let a=Math.sqrt(n)*11,o=$.DEFAULT,i=1/Math.pow(1.64-Math.pow(.29,o.n),.73),h=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,d=Math.sin(t),l=Math.cos(t);for(let y=0;y<5;y++){let P=a/100,g=e===0||a===0?0:e/Math.sqrt(P),p=Math.pow(g*i,1/.9),C=o.aw*Math.pow(P,1/o.c/o.z)/o.nbb,v=23*(C+.305)*p/(23*h+11*p*l+108*p*d),x=v*l,k=v*d,I=(460*C+451*x+288*k)/1403,L=(460*C-891*x-261*k)/1403,O=(460*C-220*x-6300*k)/1403,A=r.inverseChromaticAdaptation(I),E=r.inverseChromaticAdaptation(L),V=r.inverseChromaticAdaptation(O),R=yt([A,E,V],r.LINRGB_FROM_SCALED_DISCOUNT);if(R[0]<0||R[1]<0||R[2]<0)return 0;let Y=r.Y_FROM_LINRGB[0],j=r.Y_FROM_LINRGB[1],et=r.Y_FROM_LINRGB[2],z=Y*R[0]+j*R[1]+et*R[2];if(z<=0)return 0;if(y===4||Math.abs(z-n)<.002)return R[0]>100.01||R[1]>100.01||R[2]>100.01?0:Xt(R);a=a-(z-n)*a/(2*z)}return 0}static solveToInt(t,e,n){if(e<1e-4||n<1e-4||n>99.9999)return me(n);t=_(t);let a=t/180*Math.PI,o=J(n),i=r.findResultByJ(a,e,o);if(i!==0)return i;let c=r.bisectToLimit(o,a);return Xt(c)}static solveToCam(t,e,n){return K.fromInt(r.solveToInt(t,e,n))}};Q.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];Q.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];Q.Y_FROM_LINRGB=[.2126,.7152,.0722];Q.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];var T=class r{static from(t,e,n){return new r(Q.solveToInt(t,e,n))}static fromInt(t){return new r(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(Q.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(Q.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(Q.solveToInt(this.internalHue,this.internalChroma,t))}setValue(t,e){this[t]=e}toString(){return`HCT(${this.hue.toFixed(0)}, ${this.chroma.toFixed(0)}, ${this.tone.toFixed(0)})`}static isBlue(t){return t>=250&&t<270}static isYellow(t){return t>=105&&t<125}static isCyan(t){return t>=170&&t<207}constructor(t){this.argb=t;let e=K.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=St(t),this.argb=t}setInternalState(t){let e=K.fromInt(t);this.internalHue=e.hue,this.internalChroma=e.chroma,this.internalTone=St(t),this.argb=t}inViewingConditions(t){let n=K.fromInt(this.toInt()).xyzInViewingConditions(t),a=K.fromXyzInViewingConditions(n[0],n[1],n[2],$.make());return r.from(a.hue,a.chroma,xt(n[1]))}};var It=class r{static harmonize(t,e){let n=T.fromInt(t),a=T.fromInt(e),o=wt(n.hue,a.hue),i=Math.min(o*.5,15),c=_(n.hue+i*ue(n.hue,a.hue));return T.from(c,n.chroma,n.tone).toInt()}static hctHue(t,e,n){let a=r.cam16Ucs(t,e,n),o=K.fromInt(a),i=K.fromInt(t);return T.from(o.hue,i.chroma,St(t)).toInt()}static cam16Ucs(t,e,n){let a=K.fromInt(t),o=K.fromInt(e),i=a.jstar,c=a.astar,h=a.bstar,d=o.jstar,l=o.astar,y=o.bstar,P=i+(d-i)*n,g=c+(l-c)*n,p=h+(y-h)*n;return K.fromUcs(P,g,p).toInt()}};var H=class r{static ratioOfTones(t,e){return t=U(0,100,t),e=U(0,100,e),r.ratioOfYs(J(t),J(e))}static ratioOfYs(t,e){let n=t>e?t:e,a=n===e?t:e;return(n+5)/(a+5)}static lighter(t,e){if(t<0||t>100)return-1;let n=J(t),a=e*(n+5)-5,o=r.ratioOfYs(a,n),i=Math.abs(o-e);if(o<e&&i>.04)return-1;let c=xt(a)+.4;return c<0||c>100?-1:c}static darker(t,e){if(t<0||t>100)return-1;let n=J(t),a=(n+5)/e-5,o=r.ratioOfYs(n,a),i=Math.abs(o-e);if(o<e&&i>.04)return-1;let c=xt(a)-.4;return c<0||c>100?-1:c}static lighterUnsafe(t,e){let n=r.lighter(t,e);return n<0?100:n}static darkerUnsafe(t,e){let n=r.darker(t,e);return n<0?0:n}};var lt=class r{static isDisliked(t){let e=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return e&&n&&a}static fixIfDisliked(t){return r.isDisliked(t)?T.from(t.hue,t.chroma,70):t}};function Be(r,t,e){if(r.name!==e.name)throw new Error(`Attempting to extend color ${r.name} with color ${e.name} of different name for spec version ${t}.`);if(r.isBackground!==e.isBackground)throw new Error(`Attempting to extend color ${r.name} as a ${r.isBackground?"background":"foreground"} with color ${e.name} as a ${e.isBackground?"background":"foreground"} for spec version ${t}.`)}function w(r,t,e){return Be(r,t,e),u.fromPalette({name:r.name,palette:n=>n.specVersion===t?e.palette(n):r.palette(n),tone:n=>n.specVersion===t?e.tone(n):r.tone(n),isBackground:r.isBackground,chromaMultiplier:n=>{let a=n.specVersion===t?e.chromaMultiplier:r.chromaMultiplier;return a!==void 0?a(n):1},background:n=>{let a=n.specVersion===t?e.background:r.background;return a!==void 0?a(n):void 0},secondBackground:n=>{let a=n.specVersion===t?e.secondBackground:r.secondBackground;return a!==void 0?a(n):void 0},contrastCurve:n=>{let a=n.specVersion===t?e.contrastCurve:r.contrastCurve;return a!==void 0?a(n):void 0},toneDeltaPair:n=>{let a=n.specVersion===t?e.toneDeltaPair:r.toneDeltaPair;return a!==void 0?a(n):void 0}})}var u=class r{static fromPalette(t){return new r(t.name??"",t.palette,t.tone??r.getInitialToneFromBackground(t.background),t.isBackground??!1,t.chromaMultiplier,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}static getInitialToneFromBackground(t){return t===void 0?e=>50:e=>t(e)?t(e).getTone(e):50}constructor(t,e,n,a,o,i,c,h,d){if(this.name=t,this.palette=e,this.tone=n,this.isBackground=a,this.chromaMultiplier=o,this.background=i,this.secondBackground=c,this.contrastCurve=h,this.toneDeltaPair=d,this.hctCache=new Map,!i&&c)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!i&&h)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(i&&!h)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}clone(){return r.fromPalette({name:this.name,palette:this.palette,tone:this.tone,isBackground:this.isBackground,chromaMultiplier:this.chromaMultiplier,background:this.background,secondBackground:this.secondBackground,contrastCurve:this.contrastCurve,toneDeltaPair:this.toneDeltaPair})}clearCache(){this.hctCache.clear()}getArgb(t){return this.getHct(t).toInt()}getHct(t){let e=this.hctCache.get(t);if(e!=null)return e;let n=pe(t.specVersion).getHct(t,this);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,n),n}getTone(t){return pe(t.specVersion).getTone(t,this)}static foregroundTone(t,e){let n=H.lighterUnsafe(t,e),a=H.darkerUnsafe(t,e),o=H.ratioOfTones(n,t),i=H.ratioOfTones(a,t);if(r.tonePrefersLightForeground(t)){let h=Math.abs(o-i)<.1&&o<e&&i<e;return o>=e||o>=i||h?n:a}else return i>=e||i>=o?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return r.tonePrefersLightForeground(t)&&!r.toneAllowsLightForeground(t)?49:t}},jt=class{getHct(t,e){let n=e.getTone(t);return e.palette(t).getHct(n)}getTone(t,e){let n=t.contrastLevel<0,a=e.toneDeltaPair?e.toneDeltaPair(t):void 0;if(a){let o=a.roleA,i=a.roleB,c=a.delta,h=a.polarity,d=a.stayTogether,l=h==="nearer"||h==="lighter"&&!t.isDark||h==="darker"&&t.isDark,y=l?o:i,P=l?i:o,g=e.name===y.name,p=t.isDark?1:-1,m=y.tone(t),C=P.tone(t);if(e.background&&y.contrastCurve&&P.contrastCurve){let v=e.background(t),x=y.contrastCurve(t),k=P.contrastCurve(t);if(v&&x&&k){let I=v.getTone(t),L=x.get(t.contrastLevel),O=k.get(t.contrastLevel);H.ratioOfTones(I,m)<L&&(m=u.foregroundTone(I,L)),H.ratioOfTones(I,C)<O&&(C=u.foregroundTone(I,O)),n&&(m=u.foregroundTone(I,L),C=u.foregroundTone(I,O))}}return(C-m)*p<c&&(C=U(0,100,m+c*p),(C-m)*p>=c||(m=U(0,100,C-c*p))),50<=m&&m<60?p>0?(m=60,C=Math.max(C,m+c*p)):(m=49,C=Math.min(C,m+c*p)):50<=C&&C<60&&(d?p>0?(m=60,C=Math.max(C,m+c*p)):(m=49,C=Math.min(C,m+c*p)):p>0?C=60:C=49),g?m:C}else{let o=e.tone(t);if(e.background==null||e.background(t)===void 0||e.contrastCurve==null||e.contrastCurve(t)===void 0)return o;let i=e.background(t).getTone(t),c=e.contrastCurve(t).get(t.contrastLevel);if(H.ratioOfTones(i,o)>=c||(o=u.foregroundTone(i,c)),n&&(o=u.foregroundTone(i,c)),e.isBackground&&50<=o&&o<60&&(H.ratioOfTones(49,i)>=c?o=49:o=60),e.secondBackground==null||e.secondBackground(t)===void 0)return o;let[h,d]=[e.background,e.secondBackground],[l,y]=[h(t).getTone(t),d(t).getTone(t)],[P,g]=[Math.max(l,y),Math.min(l,y)];if(H.ratioOfTones(P,o)>=c&&H.ratioOfTones(g,o)>=c)return o;let p=H.lighter(P,c),m=H.darker(g,c),C=[];return p!==-1&&C.push(p),m!==-1&&C.push(m),u.tonePrefersLightForeground(l)||u.tonePrefersLightForeground(y)?p<0?100:p:C.length===1?C[0]:m<0?0:m}}},Wt=class{getHct(t,e){let n=e.palette(t),a=e.getTone(t),o=n.hue,i=n.chroma*(e.chromaMultiplier?e.chromaMultiplier(t):1);return T.from(o,i,a)}getTone(t,e){let n=e.toneDeltaPair?e.toneDeltaPair(t):void 0;if(n){let a=n.roleA,o=n.roleB,i=n.polarity,c=n.constraint,h=i==="darker"||i==="relative_lighter"&&t.isDark||i==="relative_darker"&&!t.isDark?-n.delta:n.delta,d=e.name===a.name,l=d?a:o,y=d?o:a,P=l.tone(t),g=y.getTone(t),p=h*(d?1:-1);if(c==="exact"?P=U(0,100,g+p):c==="nearer"?p>0?P=U(0,100,U(g,g+p,P)):P=U(0,100,U(g+p,g,P)):c==="farther"&&(p>0?P=U(g+p,100,P):P=U(0,g+p,P)),e.background&&e.contrastCurve){let m=e.background(t),C=e.contrastCurve(t);if(m&&C){let v=m.getTone(t),x=C.get(t.contrastLevel);P=H.ratioOfTones(v,P)>=x&&t.contrastLevel>=0?P:u.foregroundTone(v,x)}}return e.isBackground&&!e.name.endsWith("_fixed_dim")&&(P>=57?P=U(65,100,P):P=U(0,49,P)),P}else{let a=e.tone(t);if(e.background==null||e.background(t)===void 0||e.contrastCurve==null||e.contrastCurve(t)===void 0)return a;let o=e.background(t).getTone(t),i=e.contrastCurve(t).get(t.contrastLevel);if(a=H.ratioOfTones(o,a)>=i&&t.contrastLevel>=0?a:u.foregroundTone(o,i),e.isBackground&&!e.name.endsWith("_fixed_dim")&&(a>=57?a=U(65,100,a):a=U(0,49,a)),e.secondBackground==null||e.secondBackground(t)===void 0)return a;let[c,h]=[e.background,e.secondBackground],[d,l]=[c(t).getTone(t),h(t).getTone(t)],[y,P]=[Math.max(d,l),Math.min(d,l)];if(H.ratioOfTones(y,a)>=i&&H.ratioOfTones(P,a)>=i)return a;let g=H.lighter(y,i),p=H.darker(P,i),m=[];return g!==-1&&m.push(g),p!==-1&&m.push(p),u.tonePrefersLightForeground(d)||u.tonePrefersLightForeground(l)?g<0?100:g:m.length===1?m[0]:p<0?0:p}}},Re=new jt,Le=new Wt;function pe(r){return r==="2025"?Le:Re}var S=class r{static fromInt(t){let e=T.fromInt(t);return r.fromHct(e)}static fromHct(t){return new r(t.hue,t.chroma,t)}static fromHueAndChroma(t,e){let n=new Jt(t,e).create();return new r(t,e,n)}constructor(t,e,n){this.hue=t,this.chroma=e,this.keyColor=n,this.cache=new Map}tone(t){let e=this.cache.get(t);return e===void 0&&(t==99&&T.isYellow(this.hue)?e=this.averageArgb(this.tone(98),this.tone(100)):e=T.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,e)),e}getHct(t){return T.fromInt(this.tone(t))}averageArgb(t,e){let n=t>>>16&255,a=t>>>8&255,o=t&255,i=e>>>16&255,c=e>>>8&255,h=e&255,d=Math.round((n+i)/2),l=Math.round((a+c)/2),y=Math.round((o+h)/2);return(255<<24|(d&255)<<16|(l&255)<<8|y&255)>>>0}},Jt=class{constructor(t,e){this.hue=t,this.requestedChroma=e,this.chromaCache=new Map,this.maxChromaValue=200}create(){let a=0,o=100;for(;a<o;){let i=Math.floor((a+o)/2),c=this.maxChroma(i)<this.maxChroma(i+1);if(this.maxChroma(i)>=this.requestedChroma-.01)if(Math.abs(a-50)<Math.abs(o-50))o=i;else{if(a===i)return T.from(this.hue,this.requestedChroma,a);a=i}else c?a=i+1:o=i}return T.from(this.hue,this.requestedChroma,a)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);let e=T.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,e),e}};var At=class r{constructor(t){this.input=t,this.hctsByTempCache=[],this.hctsByHueCache=[],this.tempsByHctCache=new Map,this.inputRelativeTemperatureCache=-1,this.complementCache=null}get hctsByTemp(){if(this.hctsByTempCache.length>0)return this.hctsByTempCache;let t=this.hctsByHue.concat([this.input]),e=this.tempsByHct;return t.sort((n,a)=>e.get(n)-e.get(a)),this.hctsByTempCache=t,t}get warmest(){return this.hctsByTemp[this.hctsByTemp.length-1]}get coldest(){return this.hctsByTemp[0]}analogous(t=5,e=12){let n=Math.round(this.input.hue),a=this.hctsByHue[n],o=this.relativeTemperature(a),i=[a],c=0;for(let p=0;p<360;p++){let m=ht(n+p),C=this.hctsByHue[m],v=this.relativeTemperature(C),x=Math.abs(v-o);o=v,c+=x}let h=1,d=c/e,l=0;for(o=this.relativeTemperature(a);i.length<e;){let p=ht(n+h),m=this.hctsByHue[p],C=this.relativeTemperature(m),v=Math.abs(C-o);l+=v;let x=i.length*d,k=l>=x,I=1;for(;k&&i.length<e;){i.push(m);let L=(i.length+I)*d;k=l>=L,I++}if(o=C,h++,h>360){for(;i.length<e;)i.push(m);break}}let y=[this.input],P=Math.floor((t-1)/2);for(let p=1;p<P+1;p++){let m=0-p;for(;m<0;)m=i.length+m;m>=i.length&&(m=m%i.length),y.splice(0,0,i[m])}let g=t-P-1;for(let p=1;p<g+1;p++){let m=p;for(;m<0;)m=i.length+m;m>=i.length&&(m=m%i.length),y.push(i[m])}return y}get complement(){if(this.complementCache!=null)return this.complementCache;let t=this.coldest.hue,e=this.tempsByHct.get(this.coldest),n=this.warmest.hue,o=this.tempsByHct.get(this.warmest)-e,i=r.isBetween(this.input.hue,t,n),c=i?n:t,h=i?t:n,d=1,l=1e3,y=this.hctsByHue[Math.round(this.input.hue)],P=1-this.inputRelativeTemperature;for(let g=0;g<=360;g+=1){let p=_(c+d*g);if(!r.isBetween(p,c,h))continue;let m=this.hctsByHue[Math.round(p)],C=(this.tempsByHct.get(m)-e)/o,v=Math.abs(P-C);v<l&&(l=v,y=m)}return this.complementCache=y,this.complementCache}relativeTemperature(t){let e=this.tempsByHct.get(this.warmest)-this.tempsByHct.get(this.coldest),n=this.tempsByHct.get(t)-this.tempsByHct.get(this.coldest);return e===0?.5:n/e}get inputRelativeTemperature(){return this.inputRelativeTemperatureCache>=0?this.inputRelativeTemperatureCache:(this.inputRelativeTemperatureCache=this.relativeTemperature(this.input),this.inputRelativeTemperatureCache)}get tempsByHct(){if(this.tempsByHctCache.size>0)return this.tempsByHctCache;let t=this.hctsByHue.concat([this.input]),e=new Map;for(let n of t)e.set(n,r.rawTemperature(n));return this.tempsByHctCache=e,e}get hctsByHue(){if(this.hctsByHueCache.length>0)return this.hctsByHueCache;let t=[];for(let e=0;e<=360;e+=1){let n=T.from(e,this.input.chroma,this.input.tone);t.push(n)}return this.hctsByHueCache=t,this.hctsByHueCache}static isBetween(t,e,n){return e<n?e<=t&&t<=n:e<=t||t<=n}static rawTemperature(t){let e=Et(t.toInt()),n=_(Math.atan2(e[2],e[1])*180/Math.PI),a=Math.sqrt(e[1]*e[1]+e[2]*e[2]);return-.5+.02*Math.pow(a,1.07)*Math.cos(_(n-50)*Math.PI/180)}};var D=class{constructor(t,e,n,a){this.low=t,this.normal=e,this.medium=n,this.high=a}get(t){return t<=-1?this.low:t<0?ct(this.low,this.normal,(t- -1)/1):t<.5?ct(this.normal,this.medium,(t-0)/.5):t<1?ct(this.medium,this.high,(t-.5)/.5):this.high}};var B=class{constructor(t,e,n,a,o,i){this.roleA=t,this.roleB=e,this.delta=n,this.polarity=a,this.stayTogether=o,this.constraint=i,this.constraint=i??"exact"}};var s;(function(r){r[r.MONOCHROME=0]="MONOCHROME",r[r.NEUTRAL=1]="NEUTRAL",r[r.TONAL_SPOT=2]="TONAL_SPOT",r[r.VIBRANT=3]="VIBRANT",r[r.EXPRESSIVE=4]="EXPRESSIVE",r[r.FIDELITY=5]="FIDELITY",r[r.CONTENT=6]="CONTENT",r[r.RAINBOW=7]="RAINBOW",r[r.FRUIT_SALAD=8]="FRUIT_SALAD"})(s||(s={}));function dt(r){return r.variant===s.FIDELITY||r.variant===s.CONTENT}function N(r){return r.variant===s.MONOCHROME}function Oe(r,t,e,n){let a=e,o=T.from(r,t,e);if(o.chroma<t){let i=o.chroma;for(;o.chroma<t;){a+=n?-1:1;let c=T.from(r,t,a);if(i>c.chroma||Math.abs(c.chroma-t)<.4)break;let h=Math.abs(c.chroma-t),d=Math.abs(o.chroma-t);h<d&&(o=c),i=Math.max(i,c.chroma)}}return a}var Mt=class{primaryPaletteKeyColor(){return u.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone})}secondaryPaletteKeyColor(){return u.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone})}tertiaryPaletteKeyColor(){return u.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone})}neutralPaletteKeyColor(){return u.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone})}neutralVariantPaletteKeyColor(){return u.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone})}errorPaletteKeyColor(){return u.fromPalette({name:"error_palette_key_color",palette:t=>t.errorPalette,tone:t=>t.errorPalette.keyColor.tone})}background(){return u.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0})}onBackground(){return u.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>this.background(),contrastCurve:t=>new D(3,3,4.5,7)})}surface(){return u.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0})}surfaceDim(){return u.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:new D(87,87,80,75).get(t.contrastLevel),isBackground:!0})}surfaceBright(){return u.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?new D(24,24,29,34).get(t.contrastLevel):98,isBackground:!0})}surfaceContainerLowest(){return u.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?new D(4,4,2,0).get(t.contrastLevel):100,isBackground:!0})}surfaceContainerLow(){return u.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?new D(10,10,11,12).get(t.contrastLevel):new D(96,96,96,95).get(t.contrastLevel),isBackground:!0})}surfaceContainer(){return u.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?new D(12,12,16,20).get(t.contrastLevel):new D(94,94,92,90).get(t.contrastLevel),isBackground:!0})}surfaceContainerHigh(){return u.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?new D(17,17,21,25).get(t.contrastLevel):new D(92,92,88,85).get(t.contrastLevel),isBackground:!0})}surfaceContainerHighest(){return u.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?new D(22,22,26,30).get(t.contrastLevel):new D(90,90,84,80).get(t.contrastLevel),isBackground:!0})}onSurface(){return u.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>this.highestSurface(t),contrastCurve:t=>new D(4.5,7,11,21)})}surfaceVariant(){return u.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0})}onSurfaceVariant(){return u.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>this.highestSurface(t),contrastCurve:t=>new D(3,4.5,7,11)})}inverseSurface(){return u.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20,isBackground:!0})}inverseOnSurface(){return u.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>this.inverseSurface(),contrastCurve:t=>new D(4.5,7,11,21)})}outline(){return u.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1.5,3,4.5,7)})}outlineVariant(){return u.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5)})}shadow(){return u.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0})}scrim(){return u.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0})}surfaceTint(){return u.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0})}primary(){return u.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>N(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(3,4.5,7,7),toneDeltaPair:t=>new B(this.primaryContainer(),this.primary(),10,"nearer",!1)})}primaryDim(){}onPrimary(){return u.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>N(t)?t.isDark?10:90:t.isDark?20:100,background:t=>this.primary(),contrastCurve:t=>new D(4.5,7,11,21)})}primaryContainer(){return u.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>dt(t)?t.sourceColorHct.tone:N(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.primaryContainer(),this.primary(),10,"nearer",!1)})}onPrimaryContainer(){return u.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>dt(t)?u.foregroundTone(this.primaryContainer().tone(t),4.5):N(t)?t.isDark?0:100:t.isDark?90:30,background:t=>this.primaryContainer(),contrastCurve:t=>new D(3,4.5,7,11)})}inversePrimary(){return u.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>this.inverseSurface(),contrastCurve:t=>new D(3,4.5,7,7)})}secondary(){return u.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(3,4.5,7,7),toneDeltaPair:t=>new B(this.secondaryContainer(),this.secondary(),10,"nearer",!1)})}secondaryDim(){}onSecondary(){return u.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>N(t)?t.isDark?10:100:t.isDark?20:100,background:t=>this.secondary(),contrastCurve:t=>new D(4.5,7,11,21)})}secondaryContainer(){return u.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{let e=t.isDark?30:90;return N(t)?t.isDark?30:85:dt(t)?Oe(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark):e},isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.secondaryContainer(),this.secondary(),10,"nearer",!1)})}onSecondaryContainer(){return u.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>N(t)?t.isDark?90:10:dt(t)?u.foregroundTone(this.secondaryContainer().tone(t),4.5):t.isDark?90:30,background:t=>this.secondaryContainer(),contrastCurve:t=>new D(3,4.5,7,11)})}tertiary(){return u.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>N(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(3,4.5,7,7),toneDeltaPair:t=>new B(this.tertiaryContainer(),this.tertiary(),10,"nearer",!1)})}tertiaryDim(){}onTertiary(){return u.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>N(t)?t.isDark?10:90:t.isDark?20:100,background:t=>this.tertiary(),contrastCurve:t=>new D(4.5,7,11,21)})}tertiaryContainer(){return u.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(N(t))return t.isDark?60:49;if(!dt(t))return t.isDark?30:90;let e=t.tertiaryPalette.getHct(t.sourceColorHct.tone);return lt.fixIfDisliked(e).tone},isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.tertiaryContainer(),this.tertiary(),10,"nearer",!1)})}onTertiaryContainer(){return u.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>N(t)?t.isDark?0:100:dt(t)?u.foregroundTone(this.tertiaryContainer().tone(t),4.5):t.isDark?90:30,background:t=>this.tertiaryContainer(),contrastCurve:t=>new D(3,4.5,7,11)})}error(){return u.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(3,4.5,7,7),toneDeltaPair:t=>new B(this.errorContainer(),this.error(),10,"nearer",!1)})}errorDim(){}onError(){return u.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>this.error(),contrastCurve:t=>new D(4.5,7,11,21)})}errorContainer(){return u.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.errorContainer(),this.error(),10,"nearer",!1)})}onErrorContainer(){return u.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>N(t)?t.isDark?90:10:t.isDark?90:30,background:t=>this.errorContainer(),contrastCurve:t=>new D(3,4.5,7,11)})}primaryFixed(){return u.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>N(t)?40:90,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.primaryFixed(),this.primaryFixedDim(),10,"lighter",!0)})}primaryFixedDim(){return u.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>N(t)?30:80,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.primaryFixed(),this.primaryFixedDim(),10,"lighter",!0)})}onPrimaryFixed(){return u.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>N(t)?100:10,background:t=>this.primaryFixedDim(),secondBackground:t=>this.primaryFixed(),contrastCurve:t=>new D(4.5,7,11,21)})}onPrimaryFixedVariant(){return u.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>N(t)?90:30,background:t=>this.primaryFixedDim(),secondBackground:t=>this.primaryFixed(),contrastCurve:t=>new D(3,4.5,7,11)})}secondaryFixed(){return u.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>N(t)?80:90,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.secondaryFixed(),this.secondaryFixedDim(),10,"lighter",!0)})}secondaryFixedDim(){return u.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>N(t)?70:80,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.secondaryFixed(),this.secondaryFixedDim(),10,"lighter",!0)})}onSecondaryFixed(){return u.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>this.secondaryFixedDim(),secondBackground:t=>this.secondaryFixed(),contrastCurve:t=>new D(4.5,7,11,21)})}onSecondaryFixedVariant(){return u.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>N(t)?25:30,background:t=>this.secondaryFixedDim(),secondBackground:t=>this.secondaryFixed(),contrastCurve:t=>new D(3,4.5,7,11)})}tertiaryFixed(){return u.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>N(t)?40:90,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.tertiaryFixed(),this.tertiaryFixedDim(),10,"lighter",!0)})}tertiaryFixedDim(){return u.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>N(t)?30:80,isBackground:!0,background:t=>this.highestSurface(t),contrastCurve:t=>new D(1,1,3,4.5),toneDeltaPair:t=>new B(this.tertiaryFixed(),this.tertiaryFixedDim(),10,"lighter",!0)})}onTertiaryFixed(){return u.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>N(t)?100:10,background:t=>this.tertiaryFixedDim(),secondBackground:t=>this.tertiaryFixed(),contrastCurve:t=>new D(4.5,7,11,21)})}onTertiaryFixedVariant(){return u.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>N(t)?90:30,background:t=>this.tertiaryFixedDim(),secondBackground:t=>this.tertiaryFixed(),contrastCurve:t=>new D(3,4.5,7,11)})}highestSurface(t){return t.isDark?this.surfaceBright():this.surfaceDim()}};function M(r,t=0,e=100,n=1){let a=de(r.hue,r.chroma*n,100,!0);return U(t,e,a)}function it(r,t=0,e=100){let n=de(r.hue,r.chroma,0,!1);return U(t,e,n)}function de(r,t,e,n){let a=e,o=T.from(r,t,a);for(;o.chroma<t&&!(e<0||e>100);){e+=n?-1:1;let i=T.from(r,t,e);o.chroma<i.chroma&&(o=i,a=e)}return a}function b(r){return r===1.5?new D(1.5,1.5,3,5.5):r===3?new D(3,3,4.5,7):r===4.5?new D(4.5,4.5,7,11):r===6?new D(6,6,7,11):r===7?new D(7,7,11,21):r===9?new D(9,9,11,21):r===11?new D(11,11,21,21):r===21?new D(21,21,21,21):new D(r,r,7,21)}var Bt=class extends Mt{surface(){let t=u.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>(super.surface().tone(e),e.platform==="phone"?e.isDark?4:T.isYellow(e.neutralPalette.hue)?99:e.variant===s.VIBRANT?97:98:0),isBackground:!0});return w(super.surface(),"2025",t)}surfaceDim(){let t=u.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:T.isYellow(e.neutralPalette.hue)?90:e.variant===s.VIBRANT?85:87,isBackground:!0,chromaMultiplier:e=>{if(!e.isDark){if(e.variant===s.NEUTRAL)return 2.5;if(e.variant===s.TONAL_SPOT)return 1.7;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===s.VIBRANT)return 1.36}return 1}});return w(super.surfaceDim(),"2025",t)}surfaceBright(){let t=u.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?18:T.isYellow(e.neutralPalette.hue)?99:e.variant===s.VIBRANT?97:98,isBackground:!0,chromaMultiplier:e=>{if(e.isDark){if(e.variant===s.NEUTRAL)return 2.5;if(e.variant===s.TONAL_SPOT)return 1.7;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?2.7:1.75;if(e.variant===s.VIBRANT)return 1.36}return 1}});return w(super.surfaceBright(),"2025",t)}surfaceContainerLowest(){let t=u.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?0:100,isBackground:!0});return w(super.surfaceContainerLowest(),"2025",t)}surfaceContainerLow(){let t=u.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?6:T.isYellow(e.neutralPalette.hue)?98:e.variant===s.VIBRANT?95:96:15,isBackground:!0,chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 1.3;if(e.variant===s.TONAL_SPOT)return 1.25;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?1.3:1.15;if(e.variant===s.VIBRANT)return 1.08}return 1}});return w(super.surfaceContainerLow(),"2025",t)}surfaceContainer(){let t=u.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?9:T.isYellow(e.neutralPalette.hue)?96:e.variant===s.VIBRANT?92:94:20,isBackground:!0,chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 1.6;if(e.variant===s.TONAL_SPOT)return 1.4;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?1.6:1.3;if(e.variant===s.VIBRANT)return 1.15}return 1}});return w(super.surfaceContainer(),"2025",t)}surfaceContainerHigh(){let t=u.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.platform==="phone"?e.isDark?12:T.isYellow(e.neutralPalette.hue)?94:e.variant===s.VIBRANT?90:92:25,isBackground:!0,chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 1.9;if(e.variant===s.TONAL_SPOT)return 1.5;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?1.95:1.45;if(e.variant===s.VIBRANT)return 1.22}return 1}});return w(super.surfaceContainerHigh(),"2025",t)}surfaceContainerHighest(){let t=u.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?15:T.isYellow(e.neutralPalette.hue)?92:e.variant===s.VIBRANT?88:90,isBackground:!0,chromaMultiplier:e=>e.variant===s.NEUTRAL?2.2:e.variant===s.TONAL_SPOT?1.7:e.variant===s.EXPRESSIVE?T.isYellow(e.neutralPalette.hue)?2.3:1.6:e.variant===s.VIBRANT?1.29:1});return w(super.surfaceContainerHighest(),"2025",t)}onSurface(){let t=u.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.variant===s.VIBRANT?M(e.neutralPalette,0,100,1.1):u.getInitialToneFromBackground(n=>n.platform==="phone"?this.highestSurface(n):this.surfaceContainerHigh())(e),chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 2.2;if(e.variant===s.TONAL_SPOT)return 1.7;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.isDark&&e.platform==="phone"?b(11):b(9)});return w(super.onSurface(),"2025",t)}onSurfaceVariant(){let t=u.fromPalette({name:"on_surface_variant",palette:e=>e.neutralPalette,chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 2.2;if(e.variant===s.TONAL_SPOT)return 1.7;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?e.isDark?b(6):b(4.5):b(7)});return w(super.onSurfaceVariant(),"2025",t)}outline(){let t=u.fromPalette({name:"outline",palette:e=>e.neutralPalette,chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 2.2;if(e.variant===s.TONAL_SPOT)return 1.7;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?b(3):b(4.5)});return w(super.outline(),"2025",t)}outlineVariant(){let t=u.fromPalette({name:"outline_variant",palette:e=>e.neutralPalette,chromaMultiplier:e=>{if(e.platform==="phone"){if(e.variant===s.NEUTRAL)return 2.2;if(e.variant===s.TONAL_SPOT)return 1.7;if(e.variant===s.EXPRESSIVE)return T.isYellow(e.neutralPalette.hue)?e.isDark?3:2.3:1.6}return 1},background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?b(1.5):b(3)});return w(super.outlineVariant(),"2025",t)}inverseSurface(){let t=u.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?98:4,isBackground:!0});return w(super.inverseSurface(),"2025",t)}inverseOnSurface(){let t=u.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,background:e=>this.inverseSurface(),contrastCurve:e=>b(7)});return w(super.inverseOnSurface(),"2025",t)}primary(){let t=u.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>e.variant===s.NEUTRAL?e.platform==="phone"?e.isDark?80:40:90:e.variant===s.TONAL_SPOT?e.platform==="phone"?e.isDark?80:M(e.primaryPalette):M(e.primaryPalette,0,90):e.variant===s.EXPRESSIVE?e.platform==="phone"?M(e.primaryPalette,0,T.isYellow(e.primaryPalette.hue)?25:T.isCyan(e.primaryPalette.hue)?88:98):M(e.primaryPalette):e.platform==="phone"?M(e.primaryPalette,0,T.isCyan(e.primaryPalette.hue)?88:98):M(e.primaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?b(4.5):b(7),toneDeltaPair:e=>e.platform==="phone"?new B(this.primaryContainer(),this.primary(),5,"relative_lighter",!0,"farther"):void 0});return w(super.primary(),"2025",t)}primaryDim(){return u.fromPalette({name:"primary_dim",palette:t=>t.primaryPalette,tone:t=>t.variant===s.NEUTRAL?85:t.variant===s.TONAL_SPOT?M(t.primaryPalette,0,90):M(t.primaryPalette),isBackground:!0,background:t=>this.surfaceContainerHigh(),contrastCurve:t=>b(4.5),toneDeltaPair:t=>new B(this.primaryDim(),this.primary(),5,"darker",!0,"farther")})}onPrimary(){let t=u.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,background:e=>e.platform==="phone"?this.primary():this.primaryDim(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onPrimary(),"2025",t)}primaryContainer(){let t=u.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>e.platform==="watch"?30:e.variant===s.NEUTRAL?e.isDark?30:90:e.variant===s.TONAL_SPOT?e.isDark?it(e.primaryPalette,35,93):M(e.primaryPalette,0,90):e.variant===s.EXPRESSIVE?e.isDark?M(e.primaryPalette,30,93):M(e.primaryPalette,78,T.isCyan(e.primaryPalette.hue)?88:90):e.isDark?it(e.primaryPalette,66,93):M(e.primaryPalette,66,T.isCyan(e.primaryPalette.hue)?88:93),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="phone"?void 0:new B(this.primaryContainer(),this.primaryDim(),10,"darker",!0,"farther"),contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.primaryContainer(),"2025",t)}onPrimaryContainer(){let t=u.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,background:e=>this.primaryContainer(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onPrimaryContainer(),"2025",t)}primaryFixed(){let t=u.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>{let n=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.primaryContainer().getTone(n)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.primaryFixed(),"2025",t)}primaryFixedDim(){let t=u.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>this.primaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new B(this.primaryFixedDim(),this.primaryFixed(),5,"darker",!0,"exact")});return w(super.primaryFixedDim(),"2025",t)}onPrimaryFixed(){let t=u.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>b(7)});return w(super.onPrimaryFixed(),"2025",t)}onPrimaryFixedVariant(){let t=u.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,background:e=>this.primaryFixedDim(),contrastCurve:e=>b(4.5)});return w(super.onPrimaryFixedVariant(),"2025",t)}inversePrimary(){let t=u.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>M(e.primaryPalette),background:e=>this.inverseSurface(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.inversePrimary(),"2025",t)}secondary(){let t=u.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.platform==="watch"?e.variant===s.NEUTRAL?90:M(e.secondaryPalette,0,90):e.variant===s.NEUTRAL?e.isDark?it(e.secondaryPalette,0,98):M(e.secondaryPalette):e.variant===s.VIBRANT?M(e.secondaryPalette,0,e.isDark?90:98):e.isDark?80:M(e.secondaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?b(4.5):b(7),toneDeltaPair:e=>e.platform==="phone"?new B(this.secondaryContainer(),this.secondary(),5,"relative_lighter",!0,"farther"):void 0});return w(super.secondary(),"2025",t)}secondaryDim(){return u.fromPalette({name:"secondary_dim",palette:t=>t.secondaryPalette,tone:t=>t.variant===s.NEUTRAL?85:M(t.secondaryPalette,0,90),isBackground:!0,background:t=>this.surfaceContainerHigh(),contrastCurve:t=>b(4.5),toneDeltaPair:t=>new B(this.secondaryDim(),this.secondary(),5,"darker",!0,"farther")})}onSecondary(){let t=u.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,background:e=>e.platform==="phone"?this.secondary():this.secondaryDim(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onSecondary(),"2025",t)}secondaryContainer(){let t=u.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>e.platform==="watch"?30:e.variant===s.VIBRANT?e.isDark?it(e.secondaryPalette,30,40):M(e.secondaryPalette,84,90):e.variant===s.EXPRESSIVE?e.isDark?15:M(e.secondaryPalette,90,95):e.isDark?25:90,isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new B(this.secondaryContainer(),this.secondaryDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.secondaryContainer(),"2025",t)}onSecondaryContainer(){let t=u.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,background:e=>this.secondaryContainer(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onSecondaryContainer(),"2025",t)}secondaryFixed(){let t=u.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>{let n=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.secondaryContainer().getTone(n)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.secondaryFixed(),"2025",t)}secondaryFixedDim(){let t=u.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>this.secondaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new B(this.secondaryFixedDim(),this.secondaryFixed(),5,"darker",!0,"exact")});return w(super.secondaryFixedDim(),"2025",t)}onSecondaryFixed(){let t=u.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>b(7)});return w(super.onSecondaryFixed(),"2025",t)}onSecondaryFixedVariant(){let t=u.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,background:e=>this.secondaryFixedDim(),contrastCurve:e=>b(4.5)});return w(super.onSecondaryFixedVariant(),"2025",t)}tertiary(){let t=u.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>e.platform==="watch"?e.variant===s.TONAL_SPOT?M(e.tertiaryPalette,0,90):M(e.tertiaryPalette):e.variant===s.EXPRESSIVE||e.variant===s.VIBRANT?M(e.tertiaryPalette,0,T.isCyan(e.tertiaryPalette.hue)?88:e.isDark?98:100):e.isDark?M(e.tertiaryPalette,0,98):M(e.tertiaryPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?b(4.5):b(7),toneDeltaPair:e=>e.platform==="phone"?new B(this.tertiaryContainer(),this.tertiary(),5,"relative_lighter",!0,"farther"):void 0});return w(super.tertiary(),"2025",t)}tertiaryDim(){return u.fromPalette({name:"tertiary_dim",palette:t=>t.tertiaryPalette,tone:t=>t.variant===s.TONAL_SPOT?M(t.tertiaryPalette,0,90):M(t.tertiaryPalette),isBackground:!0,background:t=>this.surfaceContainerHigh(),contrastCurve:t=>b(4.5),toneDeltaPair:t=>new B(this.tertiaryDim(),this.tertiary(),5,"darker",!0,"farther")})}onTertiary(){let t=u.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,background:e=>e.platform==="phone"?this.tertiary():this.tertiaryDim(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onTertiary(),"2025",t)}tertiaryContainer(){let t=u.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>e.platform==="watch"?e.variant===s.TONAL_SPOT?M(e.tertiaryPalette,0,90):M(e.tertiaryPalette):e.variant===s.NEUTRAL?e.isDark?M(e.tertiaryPalette,0,93):M(e.tertiaryPalette,0,96):e.variant===s.TONAL_SPOT?M(e.tertiaryPalette,0,e.isDark?93:100):e.variant===s.EXPRESSIVE?M(e.tertiaryPalette,75,T.isCyan(e.tertiaryPalette.hue)?88:e.isDark?93:100):e.isDark?M(e.tertiaryPalette,0,93):M(e.tertiaryPalette,72,100),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new B(this.tertiaryContainer(),this.tertiaryDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.tertiaryContainer(),"2025",t)}onTertiaryContainer(){let t=u.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryContainer(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onTertiaryContainer(),"2025",t)}tertiaryFixed(){let t=u.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>{let n=Object.assign({},e,{isDark:!1,contrastLevel:0});return this.tertiaryContainer().getTone(n)},isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.tertiaryFixed(),"2025",t)}tertiaryFixedDim(){let t=u.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>this.tertiaryFixed().getTone(e),isBackground:!0,toneDeltaPair:e=>new B(this.tertiaryFixedDim(),this.tertiaryFixed(),5,"darker",!0,"exact")});return w(super.tertiaryFixedDim(),"2025",t)}onTertiaryFixed(){let t=u.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>b(7)});return w(super.onTertiaryFixed(),"2025",t)}onTertiaryFixedVariant(){let t=u.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,background:e=>this.tertiaryFixedDim(),contrastCurve:e=>b(4.5)});return w(super.onTertiaryFixedVariant(),"2025",t)}error(){let t=u.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.platform==="phone"?e.isDark?it(e.errorPalette,0,98):M(e.errorPalette):it(e.errorPalette),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):this.surfaceContainerHigh(),contrastCurve:e=>e.platform==="phone"?b(4.5):b(7),toneDeltaPair:e=>e.platform==="phone"?new B(this.errorContainer(),this.error(),5,"relative_lighter",!0,"farther"):void 0});return w(super.error(),"2025",t)}errorDim(){return u.fromPalette({name:"error_dim",palette:t=>t.errorPalette,tone:t=>it(t.errorPalette),isBackground:!0,background:t=>this.surfaceContainerHigh(),contrastCurve:t=>b(4.5),toneDeltaPair:t=>new B(this.errorDim(),this.error(),5,"darker",!0,"farther")})}onError(){let t=u.fromPalette({name:"on_error",palette:e=>e.errorPalette,background:e=>e.platform==="phone"?this.error():this.errorDim(),contrastCurve:e=>e.platform==="phone"?b(6):b(7)});return w(super.onError(),"2025",t)}errorContainer(){let t=u.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.platform==="watch"?30:e.isDark?it(e.errorPalette,30,93):M(e.errorPalette,0,90),isBackground:!0,background:e=>e.platform==="phone"?this.highestSurface(e):void 0,toneDeltaPair:e=>e.platform==="watch"?new B(this.errorContainer(),this.errorDim(),10,"darker",!0,"farther"):void 0,contrastCurve:e=>e.platform==="phone"&&e.contrastLevel>0?b(1.5):void 0});return w(super.errorContainer(),"2025",t)}onErrorContainer(){let t=u.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,background:e=>this.errorContainer(),contrastCurve:e=>e.platform==="phone"?b(4.5):b(7)});return w(super.onErrorContainer(),"2025",t)}surfaceVariant(){let t=Object.assign(this.surfaceContainerHighest().clone(),{name:"surface_variant"});return w(super.surfaceVariant(),"2025",t)}surfaceTint(){let t=Object.assign(this.primary().clone(),{name:"surface_tint"});return w(super.surfaceTint(),"2025",t)}background(){let t=Object.assign(this.surface().clone(),{name:"background"});return w(super.background(),"2025",t)}onBackground(){let t=Object.assign(this.onSurface().clone(),{name:"on_background",tone:e=>e.platform==="watch"?100:this.onSurface().getTone(e)});return w(super.onBackground(),"2025",t)}};var f=class r{constructor(){this.allColors=[this.background(),this.onBackground(),this.surface(),this.surfaceDim(),this.surfaceBright(),this.surfaceContainerLowest(),this.surfaceContainerLow(),this.surfaceContainer(),this.surfaceContainerHigh(),this.surfaceContainerHighest(),this.onSurface(),this.onSurfaceVariant(),this.outline(),this.outlineVariant(),this.inverseSurface(),this.inverseOnSurface(),this.primary(),this.primaryDim(),this.onPrimary(),this.primaryContainer(),this.onPrimaryContainer(),this.primaryFixed(),this.primaryFixedDim(),this.onPrimaryFixed(),this.onPrimaryFixedVariant(),this.inversePrimary(),this.secondary(),this.secondaryDim(),this.onSecondary(),this.secondaryContainer(),this.onSecondaryContainer(),this.secondaryFixed(),this.secondaryFixedDim(),this.onSecondaryFixed(),this.onSecondaryFixedVariant(),this.tertiary(),this.tertiaryDim(),this.onTertiary(),this.tertiaryContainer(),this.onTertiaryContainer(),this.tertiaryFixed(),this.tertiaryFixedDim(),this.onTertiaryFixed(),this.onTertiaryFixedVariant(),this.error(),this.errorDim(),this.onError(),this.errorContainer(),this.onErrorContainer()].filter(t=>t!==void 0)}highestSurface(t){return r.colorSpec.highestSurface(t)}primaryPaletteKeyColor(){return r.colorSpec.primaryPaletteKeyColor()}secondaryPaletteKeyColor(){return r.colorSpec.secondaryPaletteKeyColor()}tertiaryPaletteKeyColor(){return r.colorSpec.tertiaryPaletteKeyColor()}neutralPaletteKeyColor(){return r.colorSpec.neutralPaletteKeyColor()}neutralVariantPaletteKeyColor(){return r.colorSpec.neutralVariantPaletteKeyColor()}errorPaletteKeyColor(){return r.colorSpec.errorPaletteKeyColor()}background(){return r.colorSpec.background()}onBackground(){return r.colorSpec.onBackground()}surface(){return r.colorSpec.surface()}surfaceDim(){return r.colorSpec.surfaceDim()}surfaceBright(){return r.colorSpec.surfaceBright()}surfaceContainerLowest(){return r.colorSpec.surfaceContainerLowest()}surfaceContainerLow(){return r.colorSpec.surfaceContainerLow()}surfaceContainer(){return r.colorSpec.surfaceContainer()}surfaceContainerHigh(){return r.colorSpec.surfaceContainerHigh()}surfaceContainerHighest(){return r.colorSpec.surfaceContainerHighest()}onSurface(){return r.colorSpec.onSurface()}surfaceVariant(){return r.colorSpec.surfaceVariant()}onSurfaceVariant(){return r.colorSpec.onSurfaceVariant()}outline(){return r.colorSpec.outline()}outlineVariant(){return r.colorSpec.outlineVariant()}inverseSurface(){return r.colorSpec.inverseSurface()}inverseOnSurface(){return r.colorSpec.inverseOnSurface()}shadow(){return r.colorSpec.shadow()}scrim(){return r.colorSpec.scrim()}surfaceTint(){return r.colorSpec.surfaceTint()}primary(){return r.colorSpec.primary()}primaryDim(){return r.colorSpec.primaryDim()}onPrimary(){return r.colorSpec.onPrimary()}primaryContainer(){return r.colorSpec.primaryContainer()}onPrimaryContainer(){return r.colorSpec.onPrimaryContainer()}inversePrimary(){return r.colorSpec.inversePrimary()}primaryFixed(){return r.colorSpec.primaryFixed()}primaryFixedDim(){return r.colorSpec.primaryFixedDim()}onPrimaryFixed(){return r.colorSpec.onPrimaryFixed()}onPrimaryFixedVariant(){return r.colorSpec.onPrimaryFixedVariant()}secondary(){return r.colorSpec.secondary()}secondaryDim(){return r.colorSpec.secondaryDim()}onSecondary(){return r.colorSpec.onSecondary()}secondaryContainer(){return r.colorSpec.secondaryContainer()}onSecondaryContainer(){return r.colorSpec.onSecondaryContainer()}secondaryFixed(){return r.colorSpec.secondaryFixed()}secondaryFixedDim(){return r.colorSpec.secondaryFixedDim()}onSecondaryFixed(){return r.colorSpec.onSecondaryFixed()}onSecondaryFixedVariant(){return r.colorSpec.onSecondaryFixedVariant()}tertiary(){return r.colorSpec.tertiary()}tertiaryDim(){return r.colorSpec.tertiaryDim()}onTertiary(){return r.colorSpec.onTertiary()}tertiaryContainer(){return r.colorSpec.tertiaryContainer()}onTertiaryContainer(){return r.colorSpec.onTertiaryContainer()}tertiaryFixed(){return r.colorSpec.tertiaryFixed()}tertiaryFixedDim(){return r.colorSpec.tertiaryFixedDim()}onTertiaryFixed(){return r.colorSpec.onTertiaryFixed()}onTertiaryFixedVariant(){return r.colorSpec.onTertiaryFixedVariant()}error(){return r.colorSpec.error()}errorDim(){return r.colorSpec.errorDim()}onError(){return r.colorSpec.onError()}errorContainer(){return r.colorSpec.errorContainer()}onErrorContainer(){return r.colorSpec.onErrorContainer()}static highestSurface(t){return r.colorSpec.highestSurface(t)}};f.contentAccentToneDelta=15;f.colorSpec=new Bt;f.primaryPaletteKeyColor=f.colorSpec.primaryPaletteKeyColor();f.secondaryPaletteKeyColor=f.colorSpec.secondaryPaletteKeyColor();f.tertiaryPaletteKeyColor=f.colorSpec.tertiaryPaletteKeyColor();f.neutralPaletteKeyColor=f.colorSpec.neutralPaletteKeyColor();f.neutralVariantPaletteKeyColor=f.colorSpec.neutralVariantPaletteKeyColor();f.background=f.colorSpec.background();f.onBackground=f.colorSpec.onBackground();f.surface=f.colorSpec.surface();f.surfaceDim=f.colorSpec.surfaceDim();f.surfaceBright=f.colorSpec.surfaceBright();f.surfaceContainerLowest=f.colorSpec.surfaceContainerLowest();f.surfaceContainerLow=f.colorSpec.surfaceContainerLow();f.surfaceContainer=f.colorSpec.surfaceContainer();f.surfaceContainerHigh=f.colorSpec.surfaceContainerHigh();f.surfaceContainerHighest=f.colorSpec.surfaceContainerHighest();f.onSurface=f.colorSpec.onSurface();f.surfaceVariant=f.colorSpec.surfaceVariant();f.onSurfaceVariant=f.colorSpec.onSurfaceVariant();f.inverseSurface=f.colorSpec.inverseSurface();f.inverseOnSurface=f.colorSpec.inverseOnSurface();f.outline=f.colorSpec.outline();f.outlineVariant=f.colorSpec.outlineVariant();f.shadow=f.colorSpec.shadow();f.scrim=f.colorSpec.scrim();f.surfaceTint=f.colorSpec.surfaceTint();f.primary=f.colorSpec.primary();f.onPrimary=f.colorSpec.onPrimary();f.primaryContainer=f.colorSpec.primaryContainer();f.onPrimaryContainer=f.colorSpec.onPrimaryContainer();f.inversePrimary=f.colorSpec.inversePrimary();f.secondary=f.colorSpec.secondary();f.onSecondary=f.colorSpec.onSecondary();f.secondaryContainer=f.colorSpec.secondaryContainer();f.onSecondaryContainer=f.colorSpec.onSecondaryContainer();f.tertiary=f.colorSpec.tertiary();f.onTertiary=f.colorSpec.onTertiary();f.tertiaryContainer=f.colorSpec.tertiaryContainer();f.onTertiaryContainer=f.colorSpec.onTertiaryContainer();f.error=f.colorSpec.error();f.onError=f.colorSpec.onError();f.errorContainer=f.colorSpec.errorContainer();f.onErrorContainer=f.colorSpec.onErrorContainer();f.primaryFixed=f.colorSpec.primaryFixed();f.primaryFixedDim=f.colorSpec.primaryFixedDim();f.onPrimaryFixed=f.colorSpec.onPrimaryFixed();f.onPrimaryFixedVariant=f.colorSpec.onPrimaryFixedVariant();f.secondaryFixed=f.colorSpec.secondaryFixed();f.secondaryFixedDim=f.colorSpec.secondaryFixedDim();f.onSecondaryFixed=f.colorSpec.onSecondaryFixed();f.onSecondaryFixedVariant=f.colorSpec.onSecondaryFixedVariant();f.tertiaryFixed=f.colorSpec.tertiaryFixed();f.tertiaryFixedDim=f.colorSpec.tertiaryFixedDim();f.onTertiaryFixed=f.colorSpec.onTertiaryFixed();f.onTertiaryFixedVariant=f.colorSpec.onTertiaryFixedVariant();var F=class r{static maybeFallbackSpecVersion(t,e){switch(e){case s.EXPRESSIVE:case s.VIBRANT:case s.TONAL_SPOT:case s.NEUTRAL:return t;default:return"2021"}}constructor(t){this.sourceColorArgb=t.sourceColorHct.toInt(),this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.platform=t.platform??"phone",this.specVersion=r.maybeFallbackSpecVersion(t.specVersion??"2021",this.variant),this.sourceColorHct=t.sourceColorHct,this.primaryPalette=t.primaryPalette??gt(this.specVersion).getPrimaryPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.secondaryPalette=t.secondaryPalette??gt(this.specVersion).getSecondaryPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.tertiaryPalette=t.tertiaryPalette??gt(this.specVersion).getTertiaryPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.neutralPalette=t.neutralPalette??gt(this.specVersion).getNeutralPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.neutralVariantPalette=t.neutralVariantPalette??gt(this.specVersion).getNeutralVariantPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel),this.errorPalette=t.errorPalette??gt(this.specVersion).getErrorPalette(this.variant,t.sourceColorHct,this.isDark,this.platform,this.contrastLevel)??S.fromHueAndChroma(25,84),this.colors=new f}toString(){return`Scheme: variant=${s[this.variant]}, mode=${this.isDark?"dark":"light"}, platform=${this.platform}, contrastLevel=${this.contrastLevel.toFixed(1)}, seed=${this.sourceColorHct.toString()}, specVersion=${this.specVersion}`}static getPiecewiseHue(t,e,n){let a=Math.min(e.length-1,n.length),o=t.hue;for(let i=0;i<a;i++)if(o>=e[i]&&o<e[i+1])return _(n[i]);return o}static getRotatedHue(t,e,n){let a=r.getPiecewiseHue(t,e,n);return Math.min(e.length-1,n.length)<=0&&(a=0),_(t.hue+a)}getArgb(t){return t.getArgb(this)}getHct(t){return t.getHct(this)}get primaryPaletteKeyColor(){return this.getArgb(this.colors.primaryPaletteKeyColor())}get secondaryPaletteKeyColor(){return this.getArgb(this.colors.secondaryPaletteKeyColor())}get tertiaryPaletteKeyColor(){return this.getArgb(this.colors.tertiaryPaletteKeyColor())}get neutralPaletteKeyColor(){return this.getArgb(this.colors.neutralPaletteKeyColor())}get neutralVariantPaletteKeyColor(){return this.getArgb(this.colors.neutralVariantPaletteKeyColor())}get errorPaletteKeyColor(){return this.getArgb(this.colors.errorPaletteKeyColor())}get background(){return this.getArgb(this.colors.background())}get onBackground(){return this.getArgb(this.colors.onBackground())}get surface(){return this.getArgb(this.colors.surface())}get surfaceDim(){return this.getArgb(this.colors.surfaceDim())}get surfaceBright(){return this.getArgb(this.colors.surfaceBright())}get surfaceContainerLowest(){return this.getArgb(this.colors.surfaceContainerLowest())}get surfaceContainerLow(){return this.getArgb(this.colors.surfaceContainerLow())}get surfaceContainer(){return this.getArgb(this.colors.surfaceContainer())}get surfaceContainerHigh(){return this.getArgb(this.colors.surfaceContainerHigh())}get surfaceContainerHighest(){return this.getArgb(this.colors.surfaceContainerHighest())}get onSurface(){return this.getArgb(this.colors.onSurface())}get surfaceVariant(){return this.getArgb(this.colors.surfaceVariant())}get onSurfaceVariant(){return this.getArgb(this.colors.onSurfaceVariant())}get inverseSurface(){return this.getArgb(this.colors.inverseSurface())}get inverseOnSurface(){return this.getArgb(this.colors.inverseOnSurface())}get outline(){return this.getArgb(this.colors.outline())}get outlineVariant(){return this.getArgb(this.colors.outlineVariant())}get shadow(){return this.getArgb(this.colors.shadow())}get scrim(){return this.getArgb(this.colors.scrim())}get surfaceTint(){return this.getArgb(this.colors.surfaceTint())}get primary(){return this.getArgb(this.colors.primary())}get primaryDim(){let t=this.colors.primaryDim();if(t===void 0)throw new Error("`primaryDim` color is undefined prior to 2025 spec.");return this.getArgb(t)}get onPrimary(){return this.getArgb(this.colors.onPrimary())}get primaryContainer(){return this.getArgb(this.colors.primaryContainer())}get onPrimaryContainer(){return this.getArgb(this.colors.onPrimaryContainer())}get primaryFixed(){return this.getArgb(this.colors.primaryFixed())}get primaryFixedDim(){return this.getArgb(this.colors.primaryFixedDim())}get onPrimaryFixed(){return this.getArgb(this.colors.onPrimaryFixed())}get onPrimaryFixedVariant(){return this.getArgb(this.colors.onPrimaryFixedVariant())}get inversePrimary(){return this.getArgb(this.colors.inversePrimary())}get secondary(){return this.getArgb(this.colors.secondary())}get secondaryDim(){let t=this.colors.secondaryDim();if(t===void 0)throw new Error("`secondaryDim` color is undefined prior to 2025 spec.");return this.getArgb(t)}get onSecondary(){return this.getArgb(this.colors.onSecondary())}get secondaryContainer(){return this.getArgb(this.colors.secondaryContainer())}get onSecondaryContainer(){return this.getArgb(this.colors.onSecondaryContainer())}get secondaryFixed(){return this.getArgb(this.colors.secondaryFixed())}get secondaryFixedDim(){return this.getArgb(this.colors.secondaryFixedDim())}get onSecondaryFixed(){return this.getArgb(this.colors.onSecondaryFixed())}get onSecondaryFixedVariant(){return this.getArgb(this.colors.onSecondaryFixedVariant())}get tertiary(){return this.getArgb(this.colors.tertiary())}get tertiaryDim(){let t=this.colors.tertiaryDim();if(t===void 0)throw new Error("`tertiaryDim` color is undefined prior to 2025 spec.");return this.getArgb(t)}get onTertiary(){return this.getArgb(this.colors.onTertiary())}get tertiaryContainer(){return this.getArgb(this.colors.tertiaryContainer())}get onTertiaryContainer(){return this.getArgb(this.colors.onTertiaryContainer())}get tertiaryFixed(){return this.getArgb(this.colors.tertiaryFixed())}get tertiaryFixedDim(){return this.getArgb(this.colors.tertiaryFixedDim())}get onTertiaryFixed(){return this.getArgb(this.colors.onTertiaryFixed())}get onTertiaryFixedVariant(){return this.getArgb(this.colors.onTertiaryFixedVariant())}get error(){return this.getArgb(this.colors.error())}get errorDim(){let t=this.colors.errorDim();if(t===void 0)throw new Error("`errorDim` color is undefined prior to 2025 spec.");return this.getArgb(t)}get onError(){return this.getArgb(this.colors.onError())}get errorContainer(){return this.getArgb(this.colors.errorContainer())}get onErrorContainer(){return this.getArgb(this.colors.onErrorContainer())}};F.DEFAULT_SPEC_VERSION="2021";F.DEFAULT_PLATFORM="phone";var Rt=class{getPrimaryPalette(t,e,n,a,o){switch(t){case s.CONTENT:case s.FIDELITY:return S.fromHueAndChroma(e.hue,e.chroma);case s.FRUIT_SALAD:return S.fromHueAndChroma(_(e.hue-50),48);case s.MONOCHROME:return S.fromHueAndChroma(e.hue,0);case s.NEUTRAL:return S.fromHueAndChroma(e.hue,12);case s.RAINBOW:return S.fromHueAndChroma(e.hue,48);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,36);case s.EXPRESSIVE:return S.fromHueAndChroma(_(e.hue+240),40);case s.VIBRANT:return S.fromHueAndChroma(e.hue,200);default:throw new Error(`Unsupported variant: ${t}`)}}getSecondaryPalette(t,e,n,a,o){switch(t){case s.CONTENT:case s.FIDELITY:return S.fromHueAndChroma(e.hue,Math.max(e.chroma-32,e.chroma*.5));case s.FRUIT_SALAD:return S.fromHueAndChroma(_(e.hue-50),36);case s.MONOCHROME:return S.fromHueAndChroma(e.hue,0);case s.NEUTRAL:return S.fromHueAndChroma(e.hue,8);case s.RAINBOW:return S.fromHueAndChroma(e.hue,16);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,16);case s.EXPRESSIVE:return S.fromHueAndChroma(F.getRotatedHue(e,[0,21,51,121,151,191,271,321,360],[45,95,45,20,45,90,45,45,45]),24);case s.VIBRANT:return S.fromHueAndChroma(F.getRotatedHue(e,[0,41,61,101,131,181,251,301,360],[18,15,10,12,15,18,15,12,12]),24);default:throw new Error(`Unsupported variant: ${t}`)}}getTertiaryPalette(t,e,n,a,o){switch(t){case s.CONTENT:return S.fromHct(lt.fixIfDisliked(new At(e).analogous(3,6)[2]));case s.FIDELITY:return S.fromHct(lt.fixIfDisliked(new At(e).complement));case s.FRUIT_SALAD:return S.fromHueAndChroma(e.hue,36);case s.MONOCHROME:return S.fromHueAndChroma(e.hue,0);case s.NEUTRAL:return S.fromHueAndChroma(e.hue,16);case s.RAINBOW:case s.TONAL_SPOT:return S.fromHueAndChroma(_(e.hue+60),24);case s.EXPRESSIVE:return S.fromHueAndChroma(F.getRotatedHue(e,[0,21,51,121,151,191,271,321,360],[120,120,20,45,20,15,20,120,120]),32);case s.VIBRANT:return S.fromHueAndChroma(F.getRotatedHue(e,[0,41,61,101,131,181,251,301,360],[35,30,20,25,30,35,30,25,25]),32);default:throw new Error(`Unsupported variant: ${t}`)}}getNeutralPalette(t,e,n,a,o){switch(t){case s.CONTENT:case s.FIDELITY:return S.fromHueAndChroma(e.hue,e.chroma/8);case s.FRUIT_SALAD:return S.fromHueAndChroma(e.hue,10);case s.MONOCHROME:return S.fromHueAndChroma(e.hue,0);case s.NEUTRAL:return S.fromHueAndChroma(e.hue,2);case s.RAINBOW:return S.fromHueAndChroma(e.hue,0);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,6);case s.EXPRESSIVE:return S.fromHueAndChroma(_(e.hue+15),8);case s.VIBRANT:return S.fromHueAndChroma(e.hue,10);default:throw new Error(`Unsupported variant: ${t}`)}}getNeutralVariantPalette(t,e,n,a,o){switch(t){case s.CONTENT:return S.fromHueAndChroma(e.hue,e.chroma/8+4);case s.FIDELITY:return S.fromHueAndChroma(e.hue,e.chroma/8+4);case s.FRUIT_SALAD:return S.fromHueAndChroma(e.hue,16);case s.MONOCHROME:return S.fromHueAndChroma(e.hue,0);case s.NEUTRAL:return S.fromHueAndChroma(e.hue,2);case s.RAINBOW:return S.fromHueAndChroma(e.hue,0);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,8);case s.EXPRESSIVE:return S.fromHueAndChroma(_(e.hue+15),12);case s.VIBRANT:return S.fromHueAndChroma(e.hue,12);default:throw new Error(`Unsupported variant: ${t}`)}}getErrorPalette(t,e,n,a,o){}},Zt=class r extends Rt{getPrimaryPalette(t,e,n,a,o){switch(t){case s.NEUTRAL:return S.fromHueAndChroma(e.hue,a==="phone"?T.isBlue(e.hue)?12:8:T.isBlue(e.hue)?16:12);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,a==="phone"&&n?26:32);case s.EXPRESSIVE:return S.fromHueAndChroma(e.hue,a==="phone"?n?36:48:40);case s.VIBRANT:return S.fromHueAndChroma(e.hue,a==="phone"?74:56);default:return super.getPrimaryPalette(t,e,n,a,o)}}getSecondaryPalette(t,e,n,a,o){switch(t){case s.NEUTRAL:return S.fromHueAndChroma(e.hue,a==="phone"?T.isBlue(e.hue)?6:4:T.isBlue(e.hue)?10:6);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,16);case s.EXPRESSIVE:return S.fromHueAndChroma(F.getRotatedHue(e,[0,105,140,204,253,278,300,333,360],[-160,155,-100,96,-96,-156,-165,-160]),a==="phone"&&n?16:24);case s.VIBRANT:return S.fromHueAndChroma(F.getRotatedHue(e,[0,38,105,140,333,360],[-14,10,-14,10,-14]),a==="phone"?56:36);default:return super.getSecondaryPalette(t,e,n,a,o)}}getTertiaryPalette(t,e,n,a,o){switch(t){case s.NEUTRAL:return S.fromHueAndChroma(F.getRotatedHue(e,[0,38,105,161,204,278,333,360],[-32,26,10,-39,24,-15,-32]),a==="phone"?20:36);case s.TONAL_SPOT:return S.fromHueAndChroma(F.getRotatedHue(e,[0,20,71,161,333,360],[-40,48,-32,40,-32]),a==="phone"?28:32);case s.EXPRESSIVE:return S.fromHueAndChroma(F.getRotatedHue(e,[0,105,140,204,253,278,300,333,360],[-165,160,-105,101,-101,-160,-170,-165]),48);case s.VIBRANT:return S.fromHueAndChroma(F.getRotatedHue(e,[0,38,71,105,140,161,253,333,360],[-72,35,24,-24,62,50,62,-72]),56);default:return super.getTertiaryPalette(t,e,n,a,o)}}static getExpressiveNeutralHue(t){return F.getRotatedHue(t,[0,71,124,253,278,300,360],[10,0,10,0,10,0])}static getExpressiveNeutralChroma(t,e,n){let a=r.getExpressiveNeutralHue(t);return n==="phone"?e?T.isYellow(a)?6:14:18:12}static getVibrantNeutralHue(t){return F.getRotatedHue(t,[0,38,105,140,333,360],[-14,10,-14,10,-14])}static getVibrantNeutralChroma(t,e){let n=r.getVibrantNeutralHue(t);return e==="phone"||T.isBlue(n)?28:20}getNeutralPalette(t,e,n,a,o){switch(t){case s.NEUTRAL:return S.fromHueAndChroma(e.hue,a==="phone"?1.4:6);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,a==="phone"?5:10);case s.EXPRESSIVE:return S.fromHueAndChroma(r.getExpressiveNeutralHue(e),r.getExpressiveNeutralChroma(e,n,a));case s.VIBRANT:return S.fromHueAndChroma(r.getVibrantNeutralHue(e),r.getVibrantNeutralChroma(e,a));default:return super.getNeutralPalette(t,e,n,a,o)}}getNeutralVariantPalette(t,e,n,a,o){switch(t){case s.NEUTRAL:return S.fromHueAndChroma(e.hue,(a==="phone"?1.4:6)*2.2);case s.TONAL_SPOT:return S.fromHueAndChroma(e.hue,(a==="phone"?5:10)*1.7);case s.EXPRESSIVE:let i=r.getExpressiveNeutralHue(e),c=r.getExpressiveNeutralChroma(e,n,a);return S.fromHueAndChroma(i,c*(i>=105&&i<125?1.6:2.3));case s.VIBRANT:let h=r.getVibrantNeutralHue(e),d=r.getVibrantNeutralChroma(e,a);return S.fromHueAndChroma(h,d*1.29);default:return super.getNeutralVariantPalette(t,e,n,a,o)}}getErrorPalette(t,e,n,a,o){let i=F.getPiecewiseHue(e,[0,3,13,23,33,43,153,273,360],[12,22,32,12,22,32,22,12]);switch(t){case s.NEUTRAL:return S.fromHueAndChroma(i,a==="phone"?50:40);case s.TONAL_SPOT:return S.fromHueAndChroma(i,a==="phone"?60:48);case s.EXPRESSIVE:return S.fromHueAndChroma(i,a==="phone"?64:48);case s.VIBRANT:return S.fromHueAndChroma(i,a==="phone"?80:60);default:return super.getErrorPalette(t,e,n,a,o)}}},Ve=new Rt,Ne=new Zt;function gt(r){return r==="2025"?Ne:Ve}var X=class r{static of(t){return new r(t,!1)}static contentOf(t){return new r(t,!0)}static fromColors(t){return r.createPaletteFromColors(!1,t)}static contentFromColors(t){return r.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,e){let n=new r(e.primary,t);if(e.secondary){let a=new r(e.secondary,t);n.a2=a.a1}if(e.tertiary){let a=new r(e.tertiary,t);n.a3=a.a1}if(e.error){let a=new r(e.error,t);n.error=a.a1}if(e.neutral){let a=new r(e.neutral,t);n.n1=a.n1}if(e.neutralVariant){let a=new r(e.neutralVariant,t);n.n2=a.n2}return n}constructor(t,e){let n=T.fromInt(t),a=n.hue,o=n.chroma;e?(this.a1=S.fromHueAndChroma(a,o),this.a2=S.fromHueAndChroma(a,o/3),this.a3=S.fromHueAndChroma(a+60,o/2),this.n1=S.fromHueAndChroma(a,Math.min(o/12,4)),this.n2=S.fromHueAndChroma(a,Math.min(o/6,8))):(this.a1=S.fromHueAndChroma(a,Math.max(48,o)),this.a2=S.fromHueAndChroma(a,16),this.a3=S.fromHueAndChroma(a+60,24),this.n1=S.fromHueAndChroma(a,4),this.n2=S.fromHueAndChroma(a,8)),this.error=S.fromHueAndChroma(25,84)}};var Lt=class{fromInt(t){return Et(t)}toInt(t){return he(t[0],t[1],t[2])}distance(t,e){let n=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2];return n*n+a*a+o*o}};var He=10,Ue=3,Ot=class{static quantize(t,e,n){let a=new Map,o=new Array,i=new Array,c=new Lt,h=0;for(let x=0;x<t.length;x++){let k=t[x],I=a.get(k);I===void 0?(h++,o.push(c.fromInt(k)),i.push(k),a.set(k,1)):a.set(k,I+1)}let d=new Array;for(let x=0;x<h;x++){let k=i[x],I=a.get(k);I!==void 0&&(d[x]=I)}let l=Math.min(n,h);e.length>0&&(l=Math.min(l,e.length));let y=new Array;for(let x=0;x<e.length;x++)y.push(c.fromInt(e[x]));let P=l-y.length;if(e.length===0&&P>0)for(let x=0;x<P;x++){let k=Math.random()*100,I=Math.random()*201+-100,L=Math.random()*201+-100;y.push(new Array(k,I,L))}let g=new Array;for(let x=0;x<h;x++)g.push(Math.floor(Math.random()*l));let p=new Array;for(let x=0;x<l;x++){p.push(new Array);for(let k=0;k<l;k++)p[x].push(0)}let m=new Array;for(let x=0;x<l;x++){m.push(new Array);for(let k=0;k<l;k++)m[x].push(new Qt)}let C=new Array;for(let x=0;x<l;x++)C.push(0);for(let x=0;x<He;x++){for(let A=0;A<l;A++){for(let E=A+1;E<l;E++){let V=c.distance(y[A],y[E]);m[E][A].distance=V,m[E][A].index=A,m[A][E].distance=V,m[A][E].index=E}m[A].sort();for(let E=0;E<l;E++)p[A][E]=m[A][E].index}let k=0;for(let A=0;A<h;A++){let E=o[A],V=g[A],R=y[V],Y=c.distance(E,R),j=Y,et=-1;for(let z=0;z<l;z++){if(m[V][z].distance>=4*Y)continue;let st=c.distance(E,y[z]);st<j&&(j=st,et=z)}et!==-1&&Math.abs(Math.sqrt(j)-Math.sqrt(Y))>Ue&&(k++,g[A]=et)}if(k===0&&x!==0)break;let I=new Array(l).fill(0),L=new Array(l).fill(0),O=new Array(l).fill(0);for(let A=0;A<l;A++)C[A]=0;for(let A=0;A<h;A++){let E=g[A],V=o[A],R=d[A];C[E]+=R,I[E]+=V[0]*R,L[E]+=V[1]*R,O[E]+=V[2]*R}for(let A=0;A<l;A++){let E=C[A];if(E===0){y[A]=[0,0,0];continue}let V=I[A]/E,R=L[A]/E,Y=O[A]/E;y[A]=[V,R,Y]}}let v=new Map;for(let x=0;x<l;x++){let k=C[x];if(k===0)continue;let I=c.toInt(y[x]);v.has(I)||v.set(I,k)}return v}},Qt=class{constructor(){this.distance=-1,this.index=-1}};var Vt=class{static quantize(t){let e=new Map;for(let n=0;n<t.length;n++){let a=t[n];qt(a)<255||e.set(a,(e.get(a)??0)+1)}return e}};var Nt=5,tt=33,Tt=35937,q={RED:"red",GREEN:"green",BLUE:"blue"},Ht=class{constructor(t=[],e=[],n=[],a=[],o=[],i=[]){this.weights=t,this.momentsR=e,this.momentsG=n,this.momentsB=a,this.moments=o,this.cubes=i}quantize(t,e){this.constructHistogram(t),this.computeMoments();let n=this.createBoxes(e);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:Tt}).fill(0),this.momentsR=Array.from({length:Tt}).fill(0),this.momentsG=Array.from({length:Tt}).fill(0),this.momentsB=Array.from({length:Tt}).fill(0),this.moments=Array.from({length:Tt}).fill(0);let e=Vt.quantize(t);for(let[n,a]of e.entries()){let o=mt(n),i=ft(n),c=pt(n),h=8-Nt,d=(o>>h)+1,l=(i>>h)+1,y=(c>>h)+1,P=this.getIndex(d,l,y);this.weights[P]=(this.weights[P]??0)+a,this.momentsR[P]+=a*o,this.momentsG[P]+=a*i,this.momentsB[P]+=a*c,this.moments[P]+=a*(o*o+i*i+c*c)}}computeMoments(){for(let t=1;t<tt;t++){let e=Array.from({length:tt}).fill(0),n=Array.from({length:tt}).fill(0),a=Array.from({length:tt}).fill(0),o=Array.from({length:tt}).fill(0),i=Array.from({length:tt}).fill(0);for(let c=1;c<tt;c++){let h=0,d=0,l=0,y=0,P=0;for(let g=1;g<tt;g++){let p=this.getIndex(t,c,g);h+=this.weights[p],d+=this.momentsR[p],l+=this.momentsG[p],y+=this.momentsB[p],P+=this.moments[p],e[g]+=h,n[g]+=d,a[g]+=l,o[g]+=y,i[g]+=P;let m=this.getIndex(t-1,c,g);this.weights[p]=this.weights[m]+e[g],this.momentsR[p]=this.momentsR[m]+n[g],this.momentsG[p]=this.momentsG[m]+a[g],this.momentsB[p]=this.momentsB[m]+o[g],this.moments[p]=this.moments[m]+i[g]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new te);let e=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=tt-1,this.cubes[0].g1=tt-1,this.cubes[0].b1=tt-1;let n=t,a=0;for(let o=1;o<t;o++){this.cut(this.cubes[a],this.cubes[o])?(e[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,e[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0):(e[a]=0,o--),a=0;let i=e[0];for(let c=1;c<=o;c++)e[c]>i&&(i=e[c],a=c);if(i<=0){n=o+1;break}}return new ee(t,n)}createResult(t){let e=[];for(let n=0;n<t;++n){let a=this.cubes[n],o=this.volume(a,this.weights);if(o>0){let i=Math.round(this.volume(a,this.momentsR)/o),c=Math.round(this.volume(a,this.momentsG)/o),h=Math.round(this.volume(a,this.momentsB)/o),d=255<<24|(i&255)<<16|(c&255)<<8|h&255;e.push(d)}}return e}variance(t){let e=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),o=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],i=e*e+n*n+a*a,c=this.volume(t,this.weights);return o-i/c}cut(t,e){let n=this.volume(t,this.momentsR),a=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),i=this.volume(t,this.weights),c=this.maximize(t,q.RED,t.r0+1,t.r1,n,a,o,i),h=this.maximize(t,q.GREEN,t.g0+1,t.g1,n,a,o,i),d=this.maximize(t,q.BLUE,t.b0+1,t.b1,n,a,o,i),l,y=c.maximum,P=h.maximum,g=d.maximum;if(y>=P&&y>=g){if(c.cutLocation<0)return!1;l=q.RED}else P>=y&&P>=g?l=q.GREEN:l=q.BLUE;switch(e.r1=t.r1,e.g1=t.g1,e.b1=t.b1,l){case q.RED:t.r1=c.cutLocation,e.r0=t.r1,e.g0=t.g0,e.b0=t.b0;break;case q.GREEN:t.g1=h.cutLocation,e.r0=t.r0,e.g0=t.g1,e.b0=t.b0;break;case q.BLUE:t.b1=d.cutLocation,e.r0=t.r0,e.g0=t.g0,e.b0=t.b1;break;default:throw new Error("unexpected direction "+l)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),e.vol=(e.r1-e.r0)*(e.g1-e.g0)*(e.b1-e.b0),!0}maximize(t,e,n,a,o,i,c,h){let d=this.bottom(t,e,this.momentsR),l=this.bottom(t,e,this.momentsG),y=this.bottom(t,e,this.momentsB),P=this.bottom(t,e,this.weights),g=0,p=-1,m=0,C=0,v=0,x=0;for(let k=n;k<a;k++){if(m=d+this.top(t,e,k,this.momentsR),C=l+this.top(t,e,k,this.momentsG),v=y+this.top(t,e,k,this.momentsB),x=P+this.top(t,e,k,this.weights),x===0)continue;let I=(m*m+C*C+v*v)*1,L=x*1,O=I/L;m=o-m,C=i-C,v=c-v,x=h-x,x!==0&&(I=(m*m+C*C+v*v)*1,L=x*1,O+=I/L,O>g&&(g=O,p=k))}return new re(p,g)}volume(t,e){return e[this.getIndex(t.r1,t.g1,t.b1)]-e[this.getIndex(t.r1,t.g1,t.b0)]-e[this.getIndex(t.r1,t.g0,t.b1)]+e[this.getIndex(t.r1,t.g0,t.b0)]-e[this.getIndex(t.r0,t.g1,t.b1)]+e[this.getIndex(t.r0,t.g1,t.b0)]+e[this.getIndex(t.r0,t.g0,t.b1)]-e[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,e,n){switch(e){case q.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case q.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case q.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,e,n,a){switch(e){case q.RED:return a[this.getIndex(n,t.g1,t.b1)]-a[this.getIndex(n,t.g1,t.b0)]-a[this.getIndex(n,t.g0,t.b1)]+a[this.getIndex(n,t.g0,t.b0)];case q.GREEN:return a[this.getIndex(t.r1,n,t.b1)]-a[this.getIndex(t.r1,n,t.b0)]-a[this.getIndex(t.r0,n,t.b1)]+a[this.getIndex(t.r0,n,t.b0)];case q.BLUE:return a[this.getIndex(t.r1,t.g1,n)]-a[this.getIndex(t.r1,t.g0,n)]-a[this.getIndex(t.r0,t.g1,n)]+a[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,e,n){return(t<<Nt*2)+(t<<Nt+1)+t+(e<<Nt)+e+n}},te=class{constructor(t=0,e=0,n=0,a=0,o=0,i=0,c=0){this.r0=t,this.r1=e,this.g0=n,this.g1=a,this.b0=o,this.b1=i,this.vol=c}},ee=class{constructor(t,e){this.requestedCount=t,this.resultCount=e}},re=class{constructor(t,e){this.cutLocation=t,this.maximum=e}};var Ut=class{static quantize(t,e){let a=new Ht().quantize(t,e);return Ot.quantize(t,a,e)}};var Dt=class r{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return r.lightFromCorePalette(X.of(t))}static dark(t){return r.darkFromCorePalette(X.of(t))}static lightContent(t){return r.lightFromCorePalette(X.contentOf(t))}static darkContent(t){return r.darkFromCorePalette(X.contentOf(t))}static lightFromCorePalette(t){return new r({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new r({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}};var ge=class r{get colorAccentPrimary(){return this.props.colorAccentPrimary}get colorAccentPrimaryVariant(){return this.props.colorAccentPrimaryVariant}get colorAccentSecondary(){return this.props.colorAccentSecondary}get colorAccentSecondaryVariant(){return this.props.colorAccentSecondaryVariant}get colorAccentTertiary(){return this.props.colorAccentTertiary}get colorAccentTertiaryVariant(){return this.props.colorAccentTertiaryVariant}get textColorPrimary(){return this.props.textColorPrimary}get textColorSecondary(){return this.props.textColorSecondary}get textColorTertiary(){return this.props.textColorTertiary}get textColorPrimaryInverse(){return this.props.textColorPrimaryInverse}get textColorSecondaryInverse(){return this.props.textColorSecondaryInverse}get textColorTertiaryInverse(){return this.props.textColorTertiaryInverse}get colorBackground(){return this.props.colorBackground}get colorBackgroundFloating(){return this.props.colorBackgroundFloating}get colorSurface(){return this.props.colorSurface}get colorSurfaceVariant(){return this.props.colorSurfaceVariant}get colorSurfaceHighlight(){return this.props.colorSurfaceHighlight}get surfaceHeader(){return this.props.surfaceHeader}get underSurface(){return this.props.underSurface}get offState(){return this.props.offState}get accentSurface(){return this.props.accentSurface}get textPrimaryOnAccent(){return this.props.textPrimaryOnAccent}get textSecondaryOnAccent(){return this.props.textSecondaryOnAccent}get volumeBackground(){return this.props.volumeBackground}get scrim(){return this.props.scrim}static light(t){let e=X.of(t);return r.lightFromCorePalette(e)}static dark(t){let e=X.of(t);return r.darkFromCorePalette(e)}static lightContent(t){let e=X.contentOf(t);return r.lightFromCorePalette(e)}static darkContent(t){let e=X.contentOf(t);return r.darkFromCorePalette(e)}static lightFromCorePalette(t){return new r({colorAccentPrimary:t.a1.tone(90),colorAccentPrimaryVariant:t.a1.tone(40),colorAccentSecondary:t.a2.tone(90),colorAccentSecondaryVariant:t.a2.tone(40),colorAccentTertiary:t.a3.tone(90),colorAccentTertiaryVariant:t.a3.tone(40),textColorPrimary:t.n1.tone(10),textColorSecondary:t.n2.tone(30),textColorTertiary:t.n2.tone(50),textColorPrimaryInverse:t.n1.tone(95),textColorSecondaryInverse:t.n1.tone(80),textColorTertiaryInverse:t.n1.tone(60),colorBackground:t.n1.tone(95),colorBackgroundFloating:t.n1.tone(98),colorSurface:t.n1.tone(98),colorSurfaceVariant:t.n1.tone(90),colorSurfaceHighlight:t.n1.tone(100),surfaceHeader:t.n1.tone(90),underSurface:t.n1.tone(0),offState:t.n1.tone(20),accentSurface:t.a2.tone(95),textPrimaryOnAccent:t.n1.tone(10),textSecondaryOnAccent:t.n2.tone(30),volumeBackground:t.n1.tone(25),scrim:t.n1.tone(80)})}static darkFromCorePalette(t){return new r({colorAccentPrimary:t.a1.tone(90),colorAccentPrimaryVariant:t.a1.tone(70),colorAccentSecondary:t.a2.tone(90),colorAccentSecondaryVariant:t.a2.tone(70),colorAccentTertiary:t.a3.tone(90),colorAccentTertiaryVariant:t.a3.tone(70),textColorPrimary:t.n1.tone(95),textColorSecondary:t.n2.tone(80),textColorTertiary:t.n2.tone(60),textColorPrimaryInverse:t.n1.tone(10),textColorSecondaryInverse:t.n1.tone(30),textColorTertiaryInverse:t.n1.tone(50),colorBackground:t.n1.tone(10),colorBackgroundFloating:t.n1.tone(10),colorSurface:t.n1.tone(20),colorSurfaceVariant:t.n1.tone(30),colorSurfaceHighlight:t.n1.tone(35),surfaceHeader:t.n1.tone(30),underSurface:t.n1.tone(0),offState:t.n1.tone(20),accentSurface:t.a2.tone(95),textPrimaryOnAccent:t.n1.tone(10),textSecondaryOnAccent:t.n2.tone(30),volumeBackground:t.n1.tone(25),scrim:t.n1.tone(80)})}constructor(t){this.props=t}toJSON(){return{...this.props}}};var ye=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.CONTENT,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var Pe=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.EXPRESSIVE,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var Ce=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.FIDELITY,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var Se=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.FRUIT_SALAD,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var xe=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.MONOCHROME,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var Ae=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.NEUTRAL,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var Te=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.RAINBOW,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var De=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.TONAL_SPOT,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var ke=class extends F{constructor(t,e,n,a=F.DEFAULT_SPEC_VERSION,o=F.DEFAULT_PLATFORM){super({sourceColorHct:t,variant:s.VIBRANT,contrastLevel:n,isDark:e,platform:o,specVersion:a})}};var _e={desired:4,fallbackColorARGB:4282549748,filter:!0};function ze(r,t){return r.score>t.score?-1:r.score<t.score?1:0}var nt=class r{constructor(){}static score(t,e){let{desired:n,fallbackColorARGB:a,filter:o}={..._e,...e},i=[],c=new Array(360).fill(0),h=0;for(let[g,p]of t.entries()){let m=T.fromInt(g);i.push(m);let C=Math.floor(m.hue);c[C]+=p,h+=p}let d=new Array(360).fill(0);for(let g=0;g<360;g++){let p=c[g]/h;for(let m=g-14;m<g+16;m++){let C=ht(m);d[C]+=p}}let l=new Array;for(let g of i){let p=ht(Math.round(g.hue)),m=d[p];if(o&&(g.chroma<r.CUTOFF_CHROMA||m<=r.CUTOFF_EXCITED_PROPORTION))continue;let C=m*100*r.WEIGHT_PROPORTION,v=g.chroma<r.TARGET_CHROMA?r.WEIGHT_CHROMA_BELOW:r.WEIGHT_CHROMA_ABOVE,x=(g.chroma-r.TARGET_CHROMA)*v,k=C+x;l.push({hct:g,score:k})}l.sort(ze);let y=[];for(let g=90;g>=15;g--){y.length=0;for(let{hct:p}of l)if(y.find(C=>wt(p.hue,C.hue)<g)||y.push(p),y.length>=n)break;if(y.length>=n)break}let P=[];y.length===0&&P.push(a);for(let g of y)P.push(g.toInt());return P}};nt.TARGET_CHROMA=48;nt.WEIGHT_PROPORTION=.7;nt.WEIGHT_CHROMA_ABOVE=.3;nt.WEIGHT_CHROMA_BELOW=.1;nt.CUTOFF_CHROMA=5;nt.CUTOFF_EXCITED_PROPORTION=.01;function ne(r){let t=mt(r),e=ft(r),n=pt(r),a=[t.toString(16),e.toString(16),n.toString(16)];for(let[o,i]of a.entries())i.length===1&&(a[o]="0"+i);return"#"+a.join("")}function Rn(r){r=r.replace("#","");let t=r.length===3,e=r.length===6,n=r.length===8;if(!t&&!e&&!n)throw new Error("unexpected hex "+r);let a=0,o=0,i=0;return t?(a=at(r.slice(0,1).repeat(2)),o=at(r.slice(1,2).repeat(2)),i=at(r.slice(2,3).repeat(2))):e?(a=at(r.slice(0,2)),o=at(r.slice(2,4)),i=at(r.slice(4,6))):n&&(a=at(r.slice(2,4)),o=at(r.slice(4,6)),i=at(r.slice(6,8))),(255<<24|(a&255)<<16|(o&255)<<8|i&255)>>>0}function at(r){return parseInt(r,16)}async function be(r){let t=await new Promise((e,n)=>{let a=document.createElement("canvas"),o=a.getContext("2d");if(!o){n(new Error("Could not get canvas context"));return}let i=()=>{a.width=r.width,a.height=r.height,o.drawImage(r,0,0);let h=[0,0,r.width,r.height],d=r.dataset.area;d&&/^\d+(\s*,\s*\d+){3}$/.test(d)&&(h=d.split(/\s*,\s*/).map(p=>parseInt(p,10)));let[l,y,P,g]=h;e(o.getImageData(l,y,P,g).data)},c=()=>{n(new Error("Image load failed"))};r.complete?i():(r.onload=i,r.onerror=c)});return Ge(t)}function Ge(r){let t=[];for(let o=0;o<r.length;o+=4){let i=r[o],c=r[o+1],h=r[o+2];if(r[o+3]<255)continue;let l=Ct(i,c,h);t.push(l)}let e=Ut.quantize(t,128);return nt.score(e)[0]}function Ye(r,t=[]){let e=X.of(r);return{source:r,schemes:{light:Dt.light(r),dark:Dt.dark(r)},palettes:{primary:e.a1,secondary:e.a2,tertiary:e.a3,neutral:e.n1,neutralVariant:e.n2,error:e.error},customColors:t.map(n=>Ke(r,n))}}async function Kn(r,t=[]){let e=await be(r);return Ye(e,t)}function Ke(r,t){let e=t.value,n=e,a=r;t.blend&&(e=It.harmonize(n,a));let i=X.of(e).a1;return{color:t,value:e,light:{color:i.tone(40),onColor:i.tone(100),colorContainer:i.tone(90),onColorContainer:i.tone(10)},dark:{color:i.tone(80),onColor:i.tone(20),colorContainer:i.tone(30),onColorContainer:i.tone(90)}}}function Xn(r,t){let e=t?.target||document.body,a=t?.dark??!1?r.schemes.dark:r.schemes.light;if(ae(e,a),t?.brightnessSuffix&&(ae(e,r.schemes.dark,"-dark"),ae(e,r.schemes.light,"-light")),t?.paletteTones){let o=t?.paletteTones??[];for(let[i,c]of Object.entries(r.palettes)){let h=i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();for(let d of o){let l=`--md-ref-palette-${h}-${h}${d}`,y=ne(c.tone(d));e.style.setProperty(l,y)}}}}function ae(r,t,e=""){for(let[n,a]of Object.entries(t.toJSON())){let o=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=ne(a);r.style.setProperty(`--md-sys-color-${o}${e}`,i)}}export{It as Blend,K as Cam16,H as Contrast,X as CorePalette,lt as DislikeAnalyzer,u as DynamicColor,F as DynamicScheme,T as Hct,f as MaterialDynamicColors,Ut as QuantizerCelebi,Vt as QuantizerMap,Ot as QuantizerWsmeans,Ht as QuantizerWu,Dt as Scheme,ge as SchemeAndroid,ye as SchemeContent,Pe as SchemeExpressive,Ce as SchemeFidelity,Se as SchemeFruitSalad,xe as SchemeMonochrome,Ae as SchemeNeutral,Te as SchemeRainbow,De as SchemeTonalSpot,ke as SchemeVibrant,nt as Score,At as TemperatureCache,S as TonalPalette,s as Variant,$ as ViewingConditions,qt as alphaFromArgb,Xn as applyTheme,Rn as argbFromHex,he as argbFromLab,Xt as argbFromLinrgb,me as argbFromLstar,Ct as argbFromRgb,$t as argbFromXyz,pt as blueFromArgb,U as clampDouble,ce as clampInt,Ke as customColor,ut as delinearized,wt as differenceDegrees,w as extendSpecVersion,ft as greenFromArgb,ne as hexFromArgb,Xe as isOpaque,Et as labFromArgb,ct as lerp,rt as linearized,St as lstarFromArgb,xt as lstarFromY,yt as matrixMultiply,mt as redFromArgb,ue as rotationDirection,_ as sanitizeDegreesDouble,ht as sanitizeDegreesInt,G as signum,be as sourceColorFromImage,Ge as sourceColorFromImageBytes,Kn as themeFromImage,Ye as themeFromSourceColor,fe as whitePointD65,Me as xyzFromArgb,J as yFromLstar};
/*! Bundled license information:

@material/material-color-utilities/utils/math_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/color_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/viewing_conditions.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/cam16.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct_solver.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/blend/blend.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_color.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/tonal_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/temperature/temperature_cache.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/contrast_curve.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/variant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/color_spec_2021.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/color_spec_2025.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_scheme.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/core_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/lab_point_provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wsmeans.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wu.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_celebi.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_android.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_expressive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fruit_salad.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_monochrome.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_neutral.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_rainbow.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_tonal_spot.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/score/score.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/string_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/image_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/theme_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=material-color-utilities.bundle.mjs.map
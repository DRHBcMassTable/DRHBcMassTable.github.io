
datatable = JSON.parse(raw);

var noy= new Array("NEUTRON","HYDROGENE","HELIUM","LITHIUM","BERYLLIUM","BORE","CARBONE","AZOTE","OXYGENE","FLUOR","NEON","SODIUM","MAGNESIUM","ALUMINIUM","SILICIUM","PHOSPHORE","SOUFRE","CHLORE","ARGON","POTASSIUM","CALCIUM","SCANDIUM","TITANE","VANADIUM","CHROME","MANGANESE","FER","COBALT","NICKEL","CUIVRE","ZINC","GALLIUM","GERMANIUM","ARSENIC","SELENIUM","BROME","KRYPTON","RUBIDIUM","STRONTIUM","YTRIUM","ZIRCONIUM","NIOBIUM","MOLYBDENE","TECHNETIUM","RUTHENIUM","RHODIUM","PALLADIUM","ARGENT","CADMIUM","INDIUM","ETAIN","ANTIMOINE","TELLURE","IODE","XENON","CESIUM","BARIUM","LANTHANE","CERIUM","PRASEODYME","NEODYME","PROMETHEUM","SAMARIUM","EUROPIUM","GADOLINIUM","TERBIUM","DYSPROSIUM","HOLMIUM","ERBIUM","THULIUM","YTERBIUM","LUTETIUM","HAFNIUM","TANTALE","TUNGSTENE","RHENIUM","OSMIUM","IRIDIUM","PLATINE","OR","MERCURE","THALLIUM","PLOMB","BISMUTH","POLONIUM","ASTATINE","RADON","FRANCIUM","RADIUM","ACTINIUM","THORIUM","PROTACTINIUM","URANIUM","NEPTUNIUM","PLUTONIUM","AMERICIUM","CURIUM","BERKELIUM","CALIFORNIUM","EINSTEINIUM","FERMIUM","MENDELEVIUM","NOBELIUM","LAWRENCIUM","RUTHERFORDIUM","DUBNIUM","SEABORGIUM","BOHRIUM","HASSIUM","MEITNERIUM","DARMSTADTIUM","ROENTGENIUM","UNUNBIUM","UNUNTRIUM","UNUNQUADIUM","UNUNPENTIUM","UNUNHEXIUM","UNUNSEPTIUM","UNUNOCTIUM","UNUNENNIUM","UNBINILIUM","UNBIUNIUM","UNBIBIUM","UNBITRIUM","UNBIQUADIUM","UNBIPENTIUM","UNBIHEXIUM","UNBISEPTIUM","UNBIOCTIUM","UNBIENNIUM","UNTRINILIUM");
var sym= new Array("N","H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og","Uue","Ubn","Ubu","Ubb","Ubt","Ubq","Ubp","Ubh","Ubs","Ubo","Ube","Utn");

var subfilename = 'potential';
var graph_name = '_potential_n';
var graph_format = '.png';
var graph_title = 'Neutron mean-field potential of: ';


function changeGraph(Z, N, subfilename, graph_name, graph_format){
   if (Z<100) {var Z_dir="Z0"+Z;}
   else {var Z_dir="Z"+Z;}
   if (N<100) {var N_dir="N0"+N;}
   else {var N_dir="N"+N;}
   document.getElementById('detail').src = "./nuclear_data/"+Z_dir+"/"+subfilename+"/"+Z_dir+N_dir+graph_name+graph_format;
}


function subfile(a,b){
   var Z1 = b.lastIndexOf("Z");
   var N1 = b.lastIndexOf("N");
   var D = b.lastIndexOf(".");
   var Z = parseFloat(b.slice(Z1+1,N1));
   var N = parseFloat(b.slice(N1+1,D));

   if (a==1||a==2){
      document.getElementById('graphs_caption_pot').style.display='inline';
      document.getElementById('graphs_caption_den').style.display='none';
   }
   else if (a==3||a==4||a==5||a==6){
      document.getElementById('graphs_caption_pot').style.display='none';
      document.getElementById('graphs_caption_den').style.display='inline';
   }
   else {
      document.getElementById('graphs_caption_pot').style.display='none';
      document.getElementById('graphs_caption_den').style.display='none';
   }

   if (a==1){
      subfilename = 'potential';
      graph_name = '_potential_n';
      graph_title = 'Neutron mean-field potential of: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   if (a==2){
      subfilename = 'potential';
      graph_name = '_potential_p';
      graph_title = 'Proton mean-field potential of: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   if (a==3){
      subfilename = 'density';
      graph_name = '_density_n_line';
      graph_title = 'Neutron density distribution: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   if (a==4){
      subfilename = 'density';
      graph_name = '_density_n_log';
      graph_title = 'Neutron density distribution: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   if (a==5){
      subfilename = 'density';
      graph_name = '_density_p_line';
      graph_title = 'Proton density distribution: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   if (a==6){
      subfilename = 'density';
      graph_name = '_density_p_log';
      graph_title = 'Proton density distribution: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   if (a==7){
      subfilename = 'pec';
      graph_name = '_pec';
      graph_title = 'Potential energy curve of: ';
      document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
   }
   changeGraph(Z, N, subfilename, graph_name, graph_format);
}


function changeSym(Z,N){
   document.getElementById('title_detail_information').innerHTML = 'Ground-state properties of: '+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)];
   document.getElementById('title_detail_information1').innerHTML = graph_title+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)]+' (Z='+Z+', '+'N='+N+')';
}


function ZN2DataTable(Z,N){
   var a = new Array(18);
   for(i=0; i<datatable.length; i++){
      if(Z==datatable[i].Z && N==datatable[i].N){
         a[0] = datatable[i].Z;
         a[1] = datatable[i].A;
         a[2] = datatable[i].N;
         a[3] = datatable[i].Eb_cal;
         a[4] = datatable[i].Ebrot_cal;
         a[5] = datatable[i].Eb_exp;
         a[6] = datatable[i].S2n;
         a[7] = datatable[i].S2p;
         a[8] = datatable[i].Rn;
         a[9] = datatable[i].Rp;
         a[10] = datatable[i].Rm;
         a[11] = datatable[i].Rch_cal;
         a[12] = datatable[i].Rch_exp;
         a[13] = datatable[i].beta_n;
         a[14] = datatable[i].beta_p;
         a[15] = datatable[i].beta_t;
         a[16] = datatable[i].lam_n;
         a[17] = datatable[i].lam_p;
      }
   }
   document.getElementById('datatable').rows[1].cells[0].innerHTML = a[0];
   document.getElementById('datatable').rows[1].cells[1].innerHTML = a[2];
   document.getElementById('datatable').rows[1].cells[2].innerHTML = a[1];
   document.getElementById('datatable').rows[1].cells[3].innerHTML = a[3];
   document.getElementById('datatable').rows[1].cells[4].innerHTML = a[4];
   document.getElementById('datatable').rows[1].cells[5].innerHTML = a[5];
   document.getElementById('datatable').rows[1].cells[6].innerHTML = a[6];
   document.getElementById('datatable').rows[1].cells[7].innerHTML = a[7];
   document.getElementById('datatable').rows[1].cells[8].innerHTML = a[8];
   document.getElementById('datatable').rows[3].cells[0].innerHTML = a[9];
   document.getElementById('datatable').rows[3].cells[1].innerHTML = a[10];
   document.getElementById('datatable').rows[3].cells[2].innerHTML = a[11];
   document.getElementById('datatable').rows[3].cells[3].innerHTML = a[12];
   document.getElementById('datatable').rows[3].cells[4].innerHTML = a[13];
   document.getElementById('datatable').rows[3].cells[5].innerHTML = a[14];
   document.getElementById('datatable').rows[3].cells[6].innerHTML = a[15];
   document.getElementById('datatable').rows[3].cells[7].innerHTML = a[16];
   document.getElementById('datatable').rows[3].cells[8].innerHTML = a[17];
}


function transform(CC,t){
    for (var i=0;i<CC.length;i++)
       if (isNaN(CC.charAt(i))) {
         CC="k";
         if (t==1) {
            alert("Enter an integer number of protons !");
                   }
         if (t==2) {
            alert("Enter an integer number of neutrons !");
                   }
                                }
       return CC;
}


function getScrollCursor(e){
   e = e || window.event;
   var curScrollX = (e.pageX)? e.pageX : e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
   var curScrollY = (e.pageY)? e.pageY : e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
   return {'x': curScrollX, 'y': curScrollY};
}


function findPos(el) {
   var x = y = 0;
   if(el.offsetParent) {
         x = el.offsetLeft;
         y = el.offsetTop;
         while(el = el.offsetParent) {
       x += el.offsetLeft;
       y += el.offsetTop;
         }
   }
   return {'x':x, 'y':y};
}

function clientProperty(){
   document.onmousemove = function(e){
     scrollCursor = getScrollCursor(e);
     imagePos = findPos(document.getElementById('image'));
     var lim=new Array(120);
     for (var i=1;i<121;i++) {
        lim[i]=new Array(4);
     }
     for (var i=1;i<121;i++) {
        lim[i][1]="-1000";
        lim[i][2]="-1000";
        lim[i][3]="-1000";
        lim[i][4]="-1000";
     }
     lim[8][1]="6";lim[8][2]="20";
     lim[10][1]="8";lim[10][2]="28";
     lim[12][1]="8";lim[12][2]="34";
     lim[14][1]="10";lim[14][2]="38";
     lim[16][1]="10";lim[16][2]="40";
     lim[18][1]="14";lim[18][2]="52";
     lim[20][1]="14";lim[20][2]="60";
     lim[22][1]="18";lim[22][2]="62";
     lim[24][1]="20";lim[24][2]="66";
     lim[26][1]="22";lim[26][2]="70";
     lim[28][1]="22";lim[28][2]="70";
     lim[30][1]="26";lim[30][2]="80";
     lim[32][1]="30";lim[32][2]="84";
     lim[34][1]="32";lim[34][2]="90";
     lim[36][1]="34";lim[36][2]="96";
     lim[38][1]="36";lim[38][2]="104";
     lim[40][1]="38";lim[40][2]="112";
     lim[42][1]="40";lim[42][2]="112";
     lim[44][1]="42";lim[44][2]="112";
     lim[46][1]="44";lim[46][2]="118";
     lim[48][1]="46";lim[48][2]="124";
     lim[50][1]="48";lim[50][2]="126";
     lim[52][1]="54";lim[52][2]="126";
     lim[54][1]="58";lim[54][2]="126";
     lim[56][1]="58";lim[56][2]="126";lim[56][3]="136";lim[56][4]="140";
     lim[58][1]="60";lim[58][2]="128";lim[58][3]="134";lim[58][4]="150";
     lim[60][1]="62";lim[60][2]="154";
     lim[62][1]="68";lim[62][2]="162";lim[62][3]="170";lim[62][4]="170";
     lim[64][1]="70";lim[64][2]="168";lim[64][3]="174";lim[64][4]="176";
     lim[66][1]="74";lim[66][2]="180";lim[66][3]="184";lim[66][4]="184";
     lim[68][1]="76";lim[68][2]="184";
     lim[70][1]="78";lim[70][2]="184";
     lim[72][1]="82";lim[72][2]="184";
     lim[74][1]="84";lim[74][2]="184";
     lim[76][1]="88";lim[76][2]="184";
     lim[78][1]="92";lim[78][2]="184";
     lim[80][1]="92";lim[80][2]="184";
     lim[82][1]="94";lim[82][2]="184";
     lim[84][1]="104";lim[84][2]="184";lim[84][3]="192";lim[84][4]="224";
     lim[86][1]="108";lim[86][2]="232";
     lim[88][1]="112";lim[88][2]="238";lim[88][3]="250";lim[88][4]="258";
     lim[90][1]="116";lim[90][2]="258";
     lim[92][1]="120";lim[92][2]="258";
     lim[94][1]="126";lim[94][2]="258";
     lim[96][1]="130";lim[96][2]="258";
     lim[98][1]="132";lim[98][2]="258";
     lim[100][1]="134";lim[100][2]="258";
     lim[102][1]="138";lim[102][2]="258";
     lim[104][1]="142";lim[104][2]="258";
     lim[106][1]="146";lim[106][2]="258";
     lim[108][1]="152";lim[108][2]="258";lim[108][3]="266";lim[108][4]="296";
     lim[110][1]="154";lim[110][2]="258";lim[110][3]="270";lim[110][4]="290";
     lim[112][1]="160";lim[112][2]="258";lim[112][3]="160";lim[112][4]="258";
     lim[114][1]="162";lim[114][2]="302";
     lim[116][1]="168";lim[116][2]="304";
     lim[118][1]="172";lim[118][2]="306";
     lim[120][1]="170";lim[120][2]="318";
     xReturn = scrollCursor.x-imagePos.x;
     yReturn = scrollCursor.y-imagePos.y;
     ynoy=2*parseInt((417-yReturn)/6.875)+8;
     xnoy=2*parseInt((xReturn-125)/6.875)+6;
     anoy=ynoy+xnoy;
     d1=xnoy-lim[ynoy][1]+2;
     d2=xnoy-lim[ynoy][2]-2;
     d3=xnoy-lim[ynoy][3]+2;
     d4=xnoy-lim[ynoy][4]-2;
     d12=d1*d2;d34=d3*d4;
     if (d12>=0) d12=1;
     if (d12<0) d12=-1;
     if (d34>=0) d34=1;
     if (d34<0) d34=-1;
     test1=d12*d34;
     document.getElementById('nuclear-number').style.display = 'none';
     if ((xReturn>0) && (yReturn>0) && (test1<0)) {
     //document.getElementById('nuclear-number').firstChild.nodeValue = noy[ynoy]+' '+anoy+' (Z='+ynoy+', N='+xnoy+')';
     document.getElementById('nuclear-number').firstChild.nodeValue = sym[ynoy]+' '+anoy+' (Z='+ynoy+', N='+xnoy+')';
     document.getElementById('nuclear-number').style.display = 'inline';
     document.getElementById('nuclear-number').style.left = scrollCursor.x+15+"px";
     document.getElementById('nuclear-number').style.top = scrollCursor.y+25+"px";
     }
     
   }
}


function noyau(){
   //window.location.href=LIENmap(ynoy,xnoy,test1);
   LIENmap(ynoy,xnoy,test1);
}

function LIENmap(Z,N,test1){

   var m="./index.html";
   if ((!(isNaN(N))) && (!(isNaN(Z)))) { 
     var Z=parseFloat(Z);
     var N=parseFloat(N);
     if (test1==-1) { 
        var m="./index.html#detail";
        changeGraph(Z, N, subfilename, graph_name, graph_format);
        changeSym(Z,N);
        ZN2DataTable(Z,N);
      }
   }
   return m;
}


function LIEN(cZ,cN){
   var m="./index.html";
   var lim=new Array(120);
   for (var i=1;i<121;i++) {
      lim[i]=new Array(4);
   }
   for (var i=1;i<121;i++) {
      lim[i][1]="-1000";
      lim[i][2]="-1000";
      lim[i][3]="-1000";
      lim[i][4]="-1000";
   }
   lim[8][1]="6";lim[8][2]="20";
   lim[10][1]="8";lim[10][2]="28";
   lim[12][1]="8";lim[12][2]="34";
   lim[14][1]="10";lim[14][2]="38";
   lim[16][1]="10";lim[16][2]="40";
   lim[18][1]="14";lim[18][2]="52";
   lim[20][1]="14";lim[20][2]="60";
   lim[22][1]="18";lim[22][2]="62";
   lim[24][1]="20";lim[24][2]="66";
   lim[26][1]="22";lim[26][2]="70";
   lim[28][1]="22";lim[28][2]="70";
   lim[30][1]="26";lim[30][2]="80";
   lim[32][1]="30";lim[32][2]="84";
   lim[34][1]="32";lim[34][2]="90";
   lim[36][1]="34";lim[36][2]="96";
   lim[38][1]="36";lim[38][2]="104";
   lim[40][1]="38";lim[40][2]="112";
   lim[42][1]="40";lim[42][2]="112";
   lim[44][1]="42";lim[44][2]="112";
   lim[46][1]="44";lim[46][2]="118";
   lim[48][1]="46";lim[48][2]="124";
   lim[50][1]="48";lim[50][2]="126";
   lim[52][1]="54";lim[52][2]="126";
   lim[54][1]="58";lim[54][2]="126";
   lim[56][1]="58";lim[56][2]="126";lim[56][3]="136";lim[56][4]="140";
   lim[58][1]="60";lim[58][2]="128";lim[58][3]="134";lim[58][4]="150";
   lim[60][1]="62";lim[60][2]="154";
   lim[62][1]="68";lim[62][2]="162";lim[62][3]="170";lim[62][4]="170";
   lim[64][1]="70";lim[64][2]="168";lim[64][3]="174";lim[64][4]="176";
   lim[66][1]="74";lim[66][2]="180";lim[66][3]="184";lim[66][4]="184";
   lim[68][1]="76";lim[68][2]="184";
   lim[70][1]="78";lim[70][2]="184";
   lim[72][1]="82";lim[72][2]="184";
   lim[74][1]="84";lim[74][2]="184";
   lim[76][1]="88";lim[76][2]="184";
   lim[78][1]="92";lim[78][2]="184";
   lim[80][1]="92";lim[80][2]="184";
   lim[82][1]="94";lim[82][2]="184";
   lim[84][1]="104";lim[84][2]="184";lim[84][3]="192";lim[84][4]="224";
   lim[86][1]="108";lim[86][2]="232";
   lim[88][1]="112";lim[88][2]="238";lim[88][3]="250";lim[88][4]="258";
   lim[90][1]="116";lim[90][2]="258";
   lim[92][1]="120";lim[92][2]="258";
   lim[94][1]="126";lim[94][2]="258";
   lim[96][1]="130";lim[96][2]="258";
   lim[98][1]="132";lim[98][2]="258";
   lim[100][1]="134";lim[100][2]="258";
   lim[102][1]="138";lim[102][2]="258";
   lim[104][1]="142";lim[104][2]="258";
   lim[106][1]="146";lim[106][2]="258";
   lim[108][1]="152";lim[108][2]="258";lim[108][3]="266";lim[108][4]="296";
   lim[110][1]="154";lim[110][2]="258";lim[110][3]="270";lim[110][4]="290";
   lim[112][1]="160";lim[112][2]="258";lim[112][3]="160";lim[112][4]="258";
   lim[114][1]="162";lim[114][2]="302";
   lim[116][1]="168";lim[116][2]="304";
   lim[118][1]="172";lim[118][2]="306";
   lim[120][1]="170";lim[120][2]="318";
   newZ=transform(cZ,1);
   newN=transform(cN,2);
   cZ=newZ;cN=newN;
   var ynoy=parseFloat(cZ);
   var xnoy=parseFloat(cN);
   var iy=parseInt(cZ);
   var ix=parseInt(cN);
   anoy=ynoy+xnoy;
   d1=xnoy-lim[ynoy][1]+2;
   d2=xnoy-lim[ynoy][2]-2;
   d3=xnoy-lim[ynoy][3]+2;
   d4=xnoy-lim[ynoy][4]-2;
   d12=d1*d2;d34=d3*d4;
   if (d12>=0) d12=1;
   if (d12<0) d12=-1;
   if (d34>=0) d34=1;
   if (d34<0) d34=-1;
   test1=d12*d34;
   if (test1==1){
     var izz=parseFloat(cZ);
     var inn=parseFloat(cN);
     if ((izz+inn!=0)) {
       if ((izz==0)||(izz=='')) {
         var ndir="nn"+inn;
         if (inn<10) var ndir="nn0"+inn;
         if (inn>99) var ndir="n"+inn;
         var m="./choix/isotones/"+ndir+".html";
       }
       if ((inn==0)||(inn=='')) {
         var zdir="zz"+izz;
         if (izz<10) var zdir="zz0"+izz;
         if (izz>99) var zdir="z"+izz;
         var m="./choix/isotopes/"+zdir+".html";
       }
       if (izz*inn!=0) {
         alert("None!");
         var m="./index.html";

       }
      }
     if (izz+inn==0){
       alert("None!");
       var m="./index.html";
      }
   }
   if (test1==-1) {
      var Z=parseFloat(cZ);
      var N=parseFloat(cN);
      var m="./index.html#detail";
      changeGraph(Z, N, subfilename, graph_name, graph_format);
      changeSym(Z,N);
      ZN2DataTable(Z,N);
   }
   return m;
}


function changeNuclearchart(a){
   if (a==2) {document.getElementById('image').src = "./pictures/MTGS_lscape_BErotdev_drip.png";}
   else if (a==3) {document.getElementById('image').src = "./pictures/MTGS_lscape_S2n.png";}
   else if (a==4) {document.getElementById('image').src = "./pictures/MTGS_lscape_S2p.png";}
   else if (a==5) {document.getElementById('image').src = "./pictures/MTGS_lscape_d2n.png";}
   else if (a==6) {document.getElementById('image').src = "./pictures/MTGS_lscape_d2p.png";}
   else if (a==7) {document.getElementById('image').src = "./pictures/MTGS_lscape_diffRch.png";}
   else if (a==8) {document.getElementById('image').src = "./pictures/MTGS_lscape_Epairn.png";}
   else if (a==9) {document.getElementById('image').src = "./pictures/MTGS_lscape_Epairp.png";}
   else if (a==10) {document.getElementById('image').src = "./pictures/MTGS_lscape_diffQaErot.png";}
   else if (a==11) {document.getElementById('image').src = "./pictures/MTGS_lscape.png";}
   else {document.getElementById('image').src = "./pictures/MTGS_lscape_defor.png";}
}

function changeZN(a,b) {
   var Z1 = a.lastIndexOf("Z");
   var N1 = a.lastIndexOf("N");
   var D = a.lastIndexOf(".");
   var Z = a.slice(Z1+1,N1);
   var N = a.slice(N1+1,D);
   var Z=parseFloat(Z);
   var N=parseFloat(N);
   if (b==1) {
      Z=Z+2;
      changeGraph(Z, N, subfilename, graph_name, graph_format);
      changeSym(Z,N);
      ZN2DataTable(Z,N);
   }
   else if (b==2) {
      N=N-2;
      changeGraph(Z, N, subfilename, graph_name, graph_format);
      changeSym(Z,N);
      ZN2DataTable(Z,N);
   }
   else if (b==3) {
      N=N+2;
      changeGraph(Z, N, subfilename, graph_name, graph_format);
      changeSym(Z,N);
      ZN2DataTable(Z,N);
   }
   else {
      Z=Z-2;
      changeGraph(Z, N, subfilename, graph_name, graph_format);
      changeSym(Z,N);
      ZN2DataTable(Z,N);
   }

}

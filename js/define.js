

function changeImg(a){
    if (a==2) {document.getElementById('image').src = "./pictures/MTGS_lscape_BErotdev_drip.png";}
    else if (a==3) {document.getElementById('image').src = "./pictures/MTGS_lscape_diffQaErot.png";}
    else if (a==4) {document.getElementById('image').src = "./pictures/MTGS_lscape_diffRch.png";}
    else if (a==5) {document.getElementById('image').src = "./pictures/MTGS_lscape_S2n.png";}
    else if (a==6) {document.getElementById('image').src = "./pictures/MTGS_lscape_S2p.png";}
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
        var Z_dir="Z"+Z; var N_dir="N"+N;
        document.getElementById('detail').src="./nuclear_data/"+Z_dir+"/"+Z_dir+N_dir+".gif";
        var gsdata = ZNToData(Z,N);
        document.getElementById('datatable').rows[1].cells[0].innerHTML = gsdata[0];
        document.getElementById('datatable').rows[1].cells[1].innerHTML = gsdata[1];
        document.getElementById('title_detail_information').innerHTML = 'Information for nulcei:'+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)];
    }
    else if (b==2) {N=N-2;
        var Z_dir="Z"+Z;
        var N_dir="N"+N;
        document.getElementById('detail').src="./nuclear_data/"+Z_dir+"/"+Z_dir+N_dir+".gif";
        var gsdata = ZNToData(Z,N);
        document.getElementById('datatable').rows[1].cells[0].innerHTML = gsdata[0];
        document.getElementById('datatable').rows[1].cells[1].innerHTML = gsdata[1];
        document.getElementById('title_detail_information').innerHTML = 'Information for nulcei:'+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)];
    }
    else if (b==3) {
        N=N+2;
        var Z_dir="Z"+Z; var N_dir="N"+N;
        document.getElementById('detail').src="./nuclear_data/"+Z_dir+"/"+Z_dir+N_dir+".gif";
        var gsdata = ZNToData(Z,N);
        document.getElementById('datatable').rows[1].cells[0].innerHTML = gsdata[0];
        document.getElementById('datatable').rows[1].cells[1].innerHTML = gsdata[1];
        document.getElementById('title_detail_information').innerHTML = 'Information for nulcei:'+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)];
    }
    else {Z=Z-2;
        var Z_dir="Z"+Z;
        var N_dir="N"+N; document.getElementById('detail').src="./nuclear_data/"+Z_dir+"/"+Z_dir+N_dir+".gif";
        var gsdata = ZNToData(Z,N);
        document.getElementById('datatable').rows[1].cells[0].innerHTML = gsdata[0];
        document.getElementById('datatable').rows[1].cells[1].innerHTML = gsdata[1];
        document.getElementById('title_detail_information').innerHTML = 'Information for nulcei:'+'<sup>'+(Z+N)+'</sup>'+sym[parseInt(Z)];
    }
 
}


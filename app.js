
var hIDs = ["hLJ", "hHJ", "hCO", "hBTN", "hSB", "hBB"];
var oIDs = ["oLJ", "oHJ", "oCO", "oBTN", "oSB"];
var threeIDs = ["3LJ", "3HJ", "3CO", "3BTN", "3SB", "3BB"]
var fourIDs = ["4LJ", "4HJ", "4CO", "4BTN", "4SB", "4BB"]
var fiveIDs = ["5LJ", "5HJ", "5CO", "5BTN", "5SB", "5BB"]
var heroID="LJ"; var openID; var threeID; var fourID; var fiveID;
const lists = [fiveIDs, fourIDs, threeIDs, oIDs];

function heroSelect(hero){
    resetFrom(3);

    heroID = hero;
    id = "h"+hero;
    if (hero == "BB"){
        image = "/images/Open/"+hero+".png";
        boldButton("oLJ", oIDs);
    }
    else {
        image = "/images/Open/"+hero+".png";
    }   
    changeImage(image);
    boldButton(id, hIDs);

    disableOpenID = "o"+hero;
    disableButtonOpen(disableOpenID, oIDs);

}

function openSelect(open){
    resetFrom(2);

    openID = open;
    pos = open.substring(1);
    boldButton(open, oIDs);

    if (pos == heroID){
        image = "/images/Open/"+heroID+".png";
    }
    else {
        image = "/images/Open/"+openID+"/"+heroID+".png";
    }
    changeImage(image);

    document.getElementById("threeDiv").style.display = 'block';
    
    heroAdj = "3"+heroID;
    openAdj = "3"+pos;
    disableButtonThree(heroAdj, openAdj);
}

function threeSelect(three){
    resetFrom(1);

    threeID = three;
    pos = three.substring(1);
    boldButton(three, threeIDs);

    if (pos == heroID){
        image = "/images/Open/"+openID+"/"+heroID+".png";
    }
    else {
        image = "/images/Open/"+openID+"/"+three+"/"+heroID+".png";
    }  
    changeImage(image);

    document.getElementById("fourDiv").style.display = 'block';
    
    heroAdj = "4"+heroID;
    openAdj = "4"+openID.substring(1);
    threeAdj = "4"+pos;
    disableButtonFour(heroAdj, openAdj, threeAdj);
}

function fourSelect(four){
    resetFrom(0);

    fourID = four;
    pos = four.substring(1);
    boldButton(four, fourIDs);

    if (pos == heroID){
        image = "/images/Open/"+openID+"/"+threeID+"/"+heroID+".png";
    }
    else {
        image = "/images/Open/"+openID+"/"+threeID+"/"+four+"/"+heroID+".png";
    }
    changeImage(image);

    document.getElementById("fiveDiv").style.display = 'block';

    heroAdj = "5"+heroID;
    openAdj = "5"+openID.substring(1);
    threeAdj = "5"+threeID.substring(1);
    fourAdj = "5"+pos;
    disableButtonFive(heroAdj, openAdj, threeAdj, fourAdj);

}

function fiveSelect(five){
    fiveID = five;
    pos = five.substring(1);
    boldButton(five, fiveIDs);

    if (pos == heroID){
        image = "/images/Open/"+openID+"/"+threeID+"/"+fourID+"/"+heroID+".png"
    }
    else {
        image = "/images/Open/"+openID+"/"+threeID+"/"+fourID+"/"+fiveID+"/"+heroID+".png";
    }
    changeImage(image);
}

function changeImage(newSrc) {
    var image = document.getElementById('chart');
    image.src = newSrc;
  }

function boldButton(id, idList) {
    for (var i = 0, len = idList.length; i < len; i++){
        h = idList[i];
        if (h === id){
            document.getElementById(h).style.fontWeight = '900';
            document.getElementById(h).style.background = 'yellow';
        }
        else{
            document.getElementById(h).style.fontWeight = 'normal';
            document.getElementById(h).style.background = 'white';
        }

    }

}

function disableButtonOpen(id, idList) {
    var q = 0;
    for (var i = 0, len = idList.length; i < len; i++){
        h = idList[i];        
        if (q != 0){
            document.getElementById(h).disabled = true;
            document.getElementById(h).style.display = 'none';
        }
        else {
            document.getElementById(h).disabled = false;
            document.getElementById(h).style.display = '';
        }
        if (h === id){            
            q++;
        }
    }

}

function disableButtonThree(heroAdj, openAdj){
    var q = 0;
    var z = 0;
    for (var i = 0, len = threeIDs.length; i < len; i++){
        x = threeIDs[i];
        if (heroAdj != openAdj){
            if (z != 0){
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            else{
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
        }
        else if (q != 0){
            document.getElementById(x).disabled = false;
            document.getElementById(x).style.display = '';
        }
        else{
            document.getElementById(x).disabled = true;
            document.getElementById(x).style.display = 'none';
        }
        if (x == openAdj){
            z++
        }
        if (x == heroAdj){            
            q++;
            z--;
        }
        
    }
}

function disableButtonFour(heroAdj, openAdj, threeAdj){
    var p = 0;
    var q = 0;
    for (var i = 0, len = fourIDs.length; i < len; i++){
        x = fourIDs[i];
        if (heroAdj == openAdj || heroAdj == threeAdj){
            if (x == openAdj){
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            else if (p == 0){
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
            else {
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            if (x == threeAdj){
                p++;
            }
        }
        else if (q == 0){
            document.getElementById(x).disabled = true;
            document.getElementById(x).style.display = 'none';
        }
        else {
            document.getElementById(x).disabled = false;
            document.getElementById(x).style.display = '';
        }
        if (x == threeAdj){
            q++;
        }
        if (x == heroAdj){
            q--;
        }
    }
}

function disableButtonFive(heroAdj, openAdj, threeAdj, fourAdj){
    var p = 0;
    var q = 0;
    var r = 0;
    var s = 0;
    var j = 0;
    for (var i = 0, len = fiveIDs.length; i < len; i++){
        x = fiveIDs[i];
        if (heroAdj == openAdj){
            if (heroAdj == fourAdj){
                if (x == threeAdj){
                    document.getElementById(x).disabled = false;
                    document.getElementById(x).style.display = '';
                }
                else{
                    document.getElementById(x).disabled = true;
                    document.getElementById(x).style.display = 'none';
                }
            }
            else if (x == openAdj || x == threeAdj){
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            else if (p == 0){
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
            else {
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            if (x == fourAdj){
                p++;
            }
        }
        else if (heroAdj == threeAdj){
            if (openAdj == fourAdj){
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
            else if (x == openAdj){
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            else if (q == 0){
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
            else {
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            if (x == fourAdj){
                q++;
            }
        }
        else if (heroAdj == fourAdj){
            if (x == openAdj || x == threeAdj){
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            else if (r == 0){
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
            else {
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            if (x == fourAdj){
                r++;
            }
        }
        else{
            if (x == heroAdj){
                s--;
            }
            if (s == 0){
                document.getElementById(x).disabled = true;
                document.getElementById(x).style.display = 'none';
            }
            else{
                document.getElementById(x).disabled = false;
                document.getElementById(x).style.display = '';
            }
            if (x == fourAdj){
                s++;
            }
        }
        if (document.getElementById(x).disabled == false){
            j++;
        }       
    }
    if (j == 0){
        document.getElementById("fiveDiv").style.display = 'none';
    }
}

function resetFrom(listIndex){
    var q = 0;
    for (var i = 0, len = lists.length; i < len; i++){
        h = lists[i];        
        if (q == 0){
            boldButton("unBoldAll", h);
            if (i==1){
                document.getElementById("fiveDiv").style.display = 'none';
            }
            if (i==2){
                document.getElementById("fourDiv").style.display = 'none';
            }
            if (i==3){
                document.getElementById("threeDiv").style.display = 'none';
            }
        }       
        if (i == listIndex){            
            q++;
        }
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
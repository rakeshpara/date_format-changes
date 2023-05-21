function clock24hrs() {
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var fy=date.getFullYear()
    var day=date.getDay()
 if(mo==0){
     mo="JAN"
 }
 else if(mo==1){
     mo="FEB"
 }
 else if(mo==2){
     mo="MAR"
 }
 else if(mo==3){
     mo="APR"
 }
 else if(mo==4){
     mo="MAY"
 }
 else if(mo==5){
     mo="JUNE"
 }
 else if(mo==6){
     mo="JULY"
 }
 else if(mo==7){
     mo="AUG"
 }
 else if(mo==8){
     mo="SEP"
 }
 else if(mo==9){
     mo="OCT"
 }
 else if(mo==10){
     mo="NOV"
 }
 else {
     mo="DEC"
 }
 switch(day){
     case 0: day="SUNDAY FUNDAY";
     break;
     case 1: day="MONDAY";
     break;
     case 2: day="TUESDAY";
     break;
     case 3: day="WEDNESDAY";
     break;
     case 4: day="THURSDAY";
     break;
     case 5: day="FRIDAY";
     break;
     case 6: day="SATURDAY";
     break;
   }
 document.getElementById("time1").innerHTML=`${hh}:${mm}`
 document.getElementById("day1").innerHTML=`${day}`
 document.getElementById("date1").innerHTML=`${dd} ${mo} ${fy}`
 document.getElementById("sec1").innerHTML=`${ss}`
 var settime=setTimeout(clock24hrs,1000)
}
  //  clock12hrs
    function clock12hrs() {
        var date=new Date()
        var hh=date.getHours()
        var mm=date.getMinutes()
        var ss=date.getSeconds()
        var dd=date.getDate()
        var mo=date.getMonth()
        var fy=date.getFullYear()
        var day=date.getDay()
    
     if(mo==0){
         mo="JAN"
     }
     else if(mo==1){
         mo="FEB"
     }
     else if(mo==2){
         mo="MAR"
     }
     else if(mo==3){
         mo="APR"
     }
     else if(mo==4){
         mo="MAY"
     }
     else if(mo==5){
         mo="JUNE"
     }
     else if(mo==6){
         mo="JULY"
     }
     else if(mo==7){
         mo="AUG"
     }
     else if(mo==8){
         mo="SEP"
     }
     else if(mo==9){
         mo="OCT"
     }
     else if(mo==10){
         mo="NOV"
     }
     else {
         mo="DEC"
     }
     switch(day){
         case 0: day="SUNDAY FUNDAY";
         break;
         case 1: day="MONDAY";
         break;
         case 2: day="TUESDAY";
         break;
         case 3: day="WEDNESDAY";
         break;
         case 4: day="THURSDAY";
         break;
         case 5: day="FRIDAY";
         break;
         case 6: day="SATURDAY";
         break;
     }
     var am_pm="AM"
     if(hh>=12){
        am_pm="PM"
        if(hh>=13){
            hh-=12
        }
     }
     if(hh==0){
        hh=12;
     }
     document.getElementById("time2").innerHTML=`${hh}:${mm}`
     document.getElementById("ampm").innerText=`${am_pm}`
     document.getElementById("day2").innerHTML=`${day}`
     document.getElementById("date2").innerHTML=`${dd} ${mo} ${fy}`
     document.getElementById("sec2").innerHTML=`${ss}`
     var settime=setTimeout(clock12hrs,1000)
   }

function changeformat(status){
    if(status=='24hrs format'){
    document.getElementById("but").value="12hrs format"
    document.getElementById("c12hrs").style.display="flex"
    document.getElementById("c24hrs").style.display="none"
    clock12hrs()
    }
    else{
        document.getElementById("but").value="24hrs format"
        document.getElementById("c12hrs").style.display="none"
        document.getElementById("c24hrs").style.display="flex"
    clock24hrs()
    } 
}


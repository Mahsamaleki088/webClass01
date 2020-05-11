
/*let hotel = new Object();
hotel.name= 'Park';
hotel.rooms = 120;
hotel .booked = 77;
hotel .checkAvailability = function(){
return this.rooms - this.booked;
} ; 

document.getElementById('hotelName').innerHTML=hotel.name;
document.getElementById('rooms').innerHTML=hotel.checkAvailability();

let elName = document.getElementByid('hotelName');
elName.textContent = hotel.name;
let elRooms = document.getElementByid('rooms');
elRooms.textContent = hotel.checkAvailability();  
*/

function Hotel(name,rooms,booked){
    this.name=name;
    this.rooms=rooms;
    this.booked=booked;
    this.checkavailability=function(){
        return this.rooms-this.booked;
    };
}

let quayHotel=new Hotel('Quay', 40, 25);
let parkHotel=new Hotel( 'Park', 120, 77); 

let details1 = quayHotel.name + ' rooms : ';
details1 += quayHotel.checkavailability();
document.getElementById('hotelName').innerHTML=details1;

let details2 = parkHotel .name+ ' rooms: ';
details2 += parkHotel.checkavailability();
document.getElementById('rooms').innerHTML=details2;

let msg = '<h2>browser window</h2><p>width : ' + window.innerWidth + ' </p>' ;
msg += '<p>height: ' + window.innerHeight +'</p>'; 
msg += ' <h2>hi story</h2><p>items : ' + window.history.length+'</p>'
;
msg += ' <h2>screen</h2><p>width : ' +window.screen.width+ '</ p>' ;
document.getElementById('windowswidth').innerHTML=msg;



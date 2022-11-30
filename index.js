// Code your solution in this file!
function distanceFromHqInBlocks(start) {
  if (start<42){
  return (42 - start);
  }else{
    return (start-42);
  }
}


function distanceFromHqInFeet(start) {
  if (start<42){
    return ((42 - start)*264);
  }else{
    return ((start-42)*264);
  }
}



function distanceTravelledInFeet(start,destination) {
  if (start<destination){
    return ((destination-start)*264)
  }else{
    return ((start-destination)*264);
  }
}


function calculateFarePrice (start, destination){
  if (start<destination){
    if (((destination-start)*264)<400){
      return (0)
    }else if (((destination-start)*264)<=2000) {
      return ((((destination-start)*264)-400)*0.02);
    }else if (((destination-start)*264)>2000 && ((destination-start)*264)<=2500) {
      return (25);
    }else if (((destination-start)*264) >2500) {
      return ('cannot travel that far');
    }
} else if (start > destination) {
    if (((a-b)*264)<400) {
      return ('This one is on us!')
    } else if (((start-destination)*264)<2000){
      return ((((start-destination)*264)-400)*0.02)
    } else if (((start-destination)*264)>2000 && ((start-destination)*264)<2500){
      return (25)
    }else if (((start-destination)*264)>2500){
      return ('cannot travel that far')
    }
}
}

function getMiddle(s)
{
  //Code goes here!
  let length = s.length
  console.log(length, 'length')
  let mid = Math.floor(length/2)
  console.log(mid,'mid')
  if(length%2==0){
  return s.charAt(mid-1)+s.charAt(mid)
  }
  else{
  return s.charAt(mid )
  }
}
getMiddle('runit')

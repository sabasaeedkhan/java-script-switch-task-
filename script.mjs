

 let dayOfWeek = prompt("enter the day of week").toLowerCase()
//switch(dayOfWeek){
switch(true){
case dayOfWeek == 'monday' || dayOfWeek== 'mon':
console.log('chiken karahi')
case 'monday':
console.log('chiken karahi')
break
case dayOfWeek == 'tuesday' || dayOfWeek == 'tue':
console.log('bhindi gosht')
break
case dayOfWeek == 'wednesday' || dayOfWeek == 'wed':
console.log('biryani')
break
case dayOfWeek == 'thursday' || dayOfWeek == 'thu' :
console.log('aaloo gosht')
break
case dayOfWeek == 'friday' || dayOfWeek == 'fri':
console.log('dal chawal')
break
case dayOfWeek == 'saturday'|| dayOfWeek == 'sat':
console.log('chineese')
break
case dayOfWeek == 'sunday' || dayOfWeek == 'sun':
console.log('outing')
break
default :
console.log('Enter a valid day')

}
// here we are facing aproblem i-e all the cases are running solution = break the loop
// another problem = user type the case in upper case or lower case solution =.toLowerCase()
// if someone types the short form of the day ..... solutiion = only || or operator is not sol as it forms an epression and switch does not require an expression so we should use universal "true"
// 
// every value has a boolean
// = assignment operator , == comparison operator

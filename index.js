function scuberGreetingForFeet(someValue){
  let result
  if (someValue <= 400) {
    result = 'This one is on me!';
  } else if (someValue > 2500) {
      result = 'No can do.';
  } else if (someValue > 2000) {
    result = 'I will gladly take your thirty bucks.';
  } else if (someValue > 400){ 
    result = 'That will be twenty bucks.';
  } ;
  return result
}

function ternaryCheckCity(anotherValue){
if (anotherValue === 'NYC')
return 'Ok, sounds good.';

else (anotherValue !== 'NYC')
return 'No go.';
}

function switchOnCharmFromTip(differentValue){
  const tip = differentValue;
  let reply;

  switch (tip){
    case 'generous':
    reply = "Thank you so much.";
    break;
    case 'not as generous':
    reply = "Thank you."
    break;
    default:
      reply = "Bye."

  }

  return reply;

}
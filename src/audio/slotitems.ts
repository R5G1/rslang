import { randomNum } from './randomnum';

function setQuest(trueitem:number, items:number[], count:number):number[] {

  if (count > items.length) return [];
  if (!items.includes(trueitem)) return [];
  let value = trueitem;
  const quest = [trueitem];
  let arr = [...items].filter((v) => v !== value); 
// delete true from slot
  while (quest.length < count) {
    value = arr[randomNum(0, arr.length - 1)];    
    quest.push(value);
    arr = [...arr].filter((v) => v !== value);
  }
  console.log('setQuest:items, val, quest', items, value, quest )    
  return quest;
}
export default setQuest;

import { randomNum } from './randomnum';

function setQuest(trueitem:number, items:number[], count:number):number[] {
  if (count > items.length) return [];
  if (!items.includes(trueitem)) return [];
  let value = trueitem;
  const quest= [trueitem];
  const arr = [...items].filter((v) => v !== value); // delete true from slot
  while (quest.length < count) {
    value = arr[randomNum(0, arr.length - 1)];
    quest.push(value);
  }
  return quest;
}
export default setQuest;

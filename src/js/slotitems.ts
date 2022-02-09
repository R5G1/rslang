import { RandomNum } from './randomnum';

function SlotItems(trueitem:number, items:number[], count:number):number[] {
  if (count > items.length) return [];
  if (!items.includes(trueitem)) return [];
  let value = trueitem;
  const slot = [trueitem];
  const arr = [...items].filter((v) => v !== value); // delete true from slot
  while (slot.length < count) {
    value = arr[RandomNum(0, arr.length - 1)];
    slot.push(value);
  }
  return slot;
}
export default SlotItems;

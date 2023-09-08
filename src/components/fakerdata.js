let fakePriceArray = [];

for (let i = 0; i < 99; i++) {
  let fakePrice = Math.floor(Math.random() * 250);
  fakePriceArray.push(fakePrice);
  if (fakePrice.length === 99) {
    break;
  }
}

const filledArray = fakePriceArray;

export default filledArray;

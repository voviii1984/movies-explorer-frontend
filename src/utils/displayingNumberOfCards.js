function displayingNumberOfCards(width) {
    let numberOfCards;
    let numberOfCardsAdd;
  
    if (width > 768) {
      numberOfCards = 7;
      numberOfCardsAdd = 7;
    } else if (width >= 280) {
      numberOfCards = 5;
      numberOfCardsAdd = 5;
    } 
    return { numberOfCards, numberOfCardsAdd };
  }
  
  export default displayingNumberOfCards;
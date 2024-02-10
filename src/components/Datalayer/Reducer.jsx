/* eslint-disable no-case-declarations */
export const initialState = {
  total: 0,
  basket: [],
};

// It's our reducer, which requires two arguments: a state , which will be a state object, containing the same key-value pairs as our initialState , and an action , which will be an object containing a type of action and a payload . Don't forget to export default the reducer.

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

      case "REMOVE_FROM_BASKET":
        // eslint-disable-next-line no-case-declarations
        const index = state.basket.findIndex(
          (basketItem)=>basketItem.id === action.id
        )

        // eslint-disable-next-line no-unused-vars
        let newBasket = [...state.basket];

        // eslint-disable-next-line no-empty
        if(index>=0){
          newBasket.splice(index, 1);
        }else{
          console.warn(`cant remove`)
        }

        return{
          ...state,
          basket:newBasket
        }
  }

};

// const reducer = (state, action) =>{
//     // eslint-disable-next-line no-unused-vars
//     const {type, payload} = action
//     switch(type){
//         case "ADD_TO_BASKET":
//             return{
//                 ...state, basket: [...state.basket , action.item]
//             }
//     }
// }

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default reducer;

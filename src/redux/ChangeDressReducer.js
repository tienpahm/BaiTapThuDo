import Data from "../Data/Data.json";
import {THAY_DO} from "./types/ChangDressType";
const initialState = {
  modelClothes: {
    top: "./images/clothes/topcloth5.png",
    bottom: "./images/clothes/botcloth4.png",
    shoes: "./images/shoes/shoes2.png",
    handbag: "./images/handbags/handbag2.png",
    necklace: "./images/necklaces/necklace3.png",
    hairstyle: "./images/hairstyle/hairstyle3.png",
    background: "./images/background/background1.jpg",
  },
};

const ChangeDressReducer = (state = initialState, action) => {
  switch (action.type) {
    case THAY_DO: {
      let item = Data.tabPanes.find((item) => item.id === action.id);
      //   if (item.type === "topclothes") {
      //     state.modelClothes = {...state.modelClothes, top: item.imgSrc_png};
      //   } else if ()
      switch (item.type) {
        case "topclothes":
          state.modelClothes = {...state.modelClothes, top: item.imgSrc_png};
          break;
        case "botclothes":
          state.modelClothes = {...state.modelClothes, bottom: item.imgSrc_png};
          break;
        case "shoes":
          state.modelClothes = {...state.modelClothes, shoes: item.imgSrc_png};
          break;
        case "handbags":
          state.modelClothes = {
            ...state.modelClothes,
            handbag: item.imgSrc_png,
          };
          break;
        case "necklaces":
          state.modelClothes = {
            ...state.modelClothes,
            necklace: item.imgSrc_png,
          };
          break;
        case "hairstyle":
          state.modelClothes = {
            ...state.modelClothes,
            hairstyle: item.imgSrc_png,
          };
          break;
        case "background":
          state.modelClothes = {
            ...state.modelClothes,
            background: item.imgSrc_png,
          };
          break;

        default:
          break;
      }
      return {...state};
    }
    default:
      return state;
  }
};

export default ChangeDressReducer;

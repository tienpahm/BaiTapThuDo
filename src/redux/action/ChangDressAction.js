import {THAY_DO} from "../types/ChangDressType";

export const ChangDressAction = (item) => {
  return {
    type: THAY_DO,
    id: item.id,
  };
};

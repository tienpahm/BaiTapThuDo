import React from "react";
import {useDispatch} from "react-redux";
import {ChangDressAction} from "../redux/action/ChangDressAction";

export default function TabItem(props) {
  let {item} = props;
  const dispatch = useDispatch();
  return (
    <div class="card text-center">
      <img src={item.imgSrc_jpg} alt="" />
      <h4>
        <b>{item.name}</b>
      </h4>
      <button
        onClick={() => {
          dispatch(ChangDressAction(item));
        }}>
        Thử đồ
      </button>
    </div>
  );
}

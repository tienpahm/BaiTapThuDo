import React from "react";
import {useDispatch} from "react-redux";
import {ChangDressAction} from "../redux/action/ChangDressAction";
import {useSpring, animated} from "react-spring";

export default function TabItem(props) {
  let {item} = props;
  const dispatch = useDispatch();
  const [propsUseSpring, set, stop] = useSpring(() => {
    return {
      opacity: 0,
      color: "rgba(255 , 0 , 0 , 0.5)",
      position: "absolute",
      left: "350px",
      scale: 2,
      from: {
        opacity: 0,
        color: "blue",
        position: "absolute",
        left: "20px",
        scale: 1,
      },
      config: {duration: 1000},
      reset: true,
    };
  });
  console.log(propsUseSpring.color);

  return (
    <div class="card text-center">
      <img src={item.imgSrc_jpg} alt="" />
      <h4>
        <b>{item.name}</b>
      </h4>
      <button
        onClick={() => {
          set({
            opacity: 1,
          });
          dispatch(ChangDressAction(item));
        }}>
        Thử đồ
      </button>
      <animated.div
        style={{
          // backgroundColor: propsUseSpring.color,
          position: propsUseSpring.position,
          width: "76%",
          height: "64%",
          opacity: propsUseSpring.opacity,
          overflow: "hidden",
          right: "38px",
          left: propsUseSpring.left,
          transform: propsUseSpring.scale.interpolate(
            (scale) => `scale(${scale})`
          ),
        }}>
        <img
          src={item.imgSrc_png}
          alt=""
          style={{width: "100%", height: "177%"}}
        />
      </animated.div>
    </div>
  );
}

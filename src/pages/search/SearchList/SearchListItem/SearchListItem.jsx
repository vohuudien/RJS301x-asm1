import React from "react";
import "./SearchListItem.css";

const SearchListItem = (props) => {
  return (
    <div className="listItem">
    
      {/* -------Phần ảnh bên trái của Card------ */}
      <div className="listLeft">
        <img src={props.item.image_url} alt={props.item.name} />
      </div>

      {/* -------Phần thông tin chính giữa của Card------ */}
      <div className="listCenter">
        <h3>{props.item.name}</h3>
        <p className="distance">{props.item.distance} from center</p>
        <span className="tag">{props.item.tag}</span>
        <h5>{props.item.description}</h5>
        <p className="type">{props.item.type}</p>
        {props.item.free_cancel && (
          <div className="freeCancel">
            <p>Free cancellation</p>{" "}
            <span>You can cancel later, so look in this great price today</span>
          </div>
        )}
      </div>
      
      {/* -------Phần thông tin nhóm giá cả bên phải của Card------ */}
      <div className="listRight">
        {/* ----Phần Rate ở trên---- */}
        <div className="listRightTop">
          <p>{props.item.rate_text}</p>
          <span>{props.item.rate}</span>
        </div>
        {/* -------Phần giá và button ở dưới------ */}
        <div className="listRightBottom">
          <h5>${props.item.price}</h5>
          <p>includes taxes and fees</p>
          <button type="button">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;

import React from "react";
import { Carousel } from "react-bootstrap";

function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1025783092901843046/1050848457348354149/image.png"
          alt="First slide"
          style={{ height: "50vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>종족별 심시티</h3>
          <p>심시티가 어려우셨죠 ? 심시티의 장인이 되어보자 !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1025783092901843046/1038823794032263240/image.png"
          alt="Second slide"
          style={{ height: "50vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>더 큰 화면으로 !</h3>
          <p>카드 이미지를 클릭하면 더 큰화면으로 사진을 보실 수 있습니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1025783092901843046/1038822492103512064/image.png"
          alt="Third slide"
          style={{ height: "50vh", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>오픈채팅방 10CB</h3>
          <p>스타실력을 늘리고 싶으신분들 어서 들어오세요 !.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;

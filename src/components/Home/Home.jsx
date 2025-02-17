import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "./Hero";
import shortImg from "../../assets/Images/shortImg.webp";
import boxImg from "../../assets/Images/boxImg.jpg";
import { Link } from "react-router";
import BoxImg from "./BoxImg";
import bannerImg from "../../assets/Images/banner.jpg";

const Home = () => {
  const banner = [
    {
      heroSection: "hero-section",
      imgAlt: "heroSection",
      title: "My Pet Hooligan",
      author: "By AMGI",
      valueNum: "8,888 items - 0.269999 ETH",
      urlView: "/",
      shortImg: shortImg,
    },
    {
      heroSection: "hero-section",
      imgAlt: "heroSection",
      title: "My Pet Hooligan",
      author: "By AMGI",
      valueNum: "8,888 items - 0.269999 ETH",
      urlView: "/",
      shortImg: shortImg,
    },
  ];

  const data = [
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
    {
      boxImg: boxImg,
      value: "5000",
      title: "Worldwide Webb Land",
      auth: "BTCASH",
      price: "1000",
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>
      <section className="banner-wrapper">
        <Container fluid>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="hero-wrapper"
          >
            {banner.map((elem, index) => (
              <SwiperSlide key={index}>
                <Hero banner={elem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="liveBid-wrapper">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Live Bid</h3>
            <div>
              <Link to="">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              976: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((elem, index) => (
              <>
                <SwiperSlide key={index}>
                  <BoxImg data={elem} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="liveBid-wrapper pt-0">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Upcoming Bid</h3>
            <div>
              <Link to="">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              976: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((elem, index) => (
              <>
                <SwiperSlide key={index}>
                  <BoxImg data={elem} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="liveBid-wrapper pt-0">
        <Container fluid>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3>Completed Bid</h3>
            <div>
              <Link to="">
                <span>View All</span>
              </Link>
            </div>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              976: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 18,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((elem, index) => (
              <>
                <SwiperSlide key={index}>
                  <BoxImg data={elem} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </Container>
      </section>

      <section className="winners-list-wrapper mb-5">
        <Container fluid>
          <div className="winner-list-title mb-4">
            <h3>Hall of Champions: Winners List</h3>
          </div>
          <Row>
            <Col lg={4}>
              <div className="winner-box-wrapper" onClick={handleShow}>
                <div>
                  <h5 className="mb-0">Mem***XOS</h5>
                </div>
                <div className="winnerImg-wrapper">
                  <img src={boxImg} alt="" />
                </div>
                <div>
                  <span>Received 5465 BNB</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="winner-box-wrapper" onClick={handleShow}>
                <div>
                  <h5 className="mb-0">Mem***XOS</h5>
                </div>
                <div className="winnerImg-wrapper">
                  <img src={boxImg} alt="" />
                </div>
                <div>
                  <span>Received 5465 BNB</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="winner-box-wrapper" onClick={handleShow}>
                <div>
                  <h5 className="mb-0">Mem***XOS</h5>
                </div>
                <div className="winnerImg-wrapper">
                  <img src={boxImg} alt="" />
                </div>
                <div>
                  <span>Received 5465 BNB</span>
                </div>
              </div>
            </Col>
            {/* Modal */}
            <Modal
              show={show}
              onHide={handleClose}
              className="winnermodal"
              centered
            >
              <Modal.Body>
                <>
                  <Modal.Header closeButton className="border-0"></Modal.Header>
                  <div className="onHoverWinnerDetails">
                    <div className="winnerDetialsTop">
                      <img src={bannerImg} alt="" />
                    </div>
                    <div className="winnerUser">
                      <img src={shortImg} alt="" />
                      <h5>MemnexOS</h5>
                    </div>
                    <div className="winnerUserDetails p-3 pt-0">
                      <h4>1st Price Winner</h4>
                      <p>Contest: Solitaire by Terrell J…</p>
                      <div className="d-flex justify-content-between text-start">
                        <div>
                          <span>Prize</span>
                          <h6>500 USDT</h6>
                        </div>
                        <div>
                          <span>Winning Number</span>
                          <h6>#27627178</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              </Modal.Body>
            </Modal>
          </Row>
        </Container>
      </section>

    </main>
  );
};

export default Home;

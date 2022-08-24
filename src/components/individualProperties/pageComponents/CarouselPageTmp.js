import React, { Component } from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBContainer,
} from "mdbreact";


class CarouselPageWestgate extends Component {
    render() {
        return (
            <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
                <MDBContainer>
                    <MDBCarousel
                        activeItem={0}
                        length={this.props.length}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1"
                    >
                        <MDBCarouselInner>
                            {this.props.sliderImages.map((img, index) => (
                                <MDBCarouselItem itemId={index} key={index}>
                                    <MDBView>
                                        <img className="d-block w-100" src={img} alt="slide" />
                                    </MDBView>
                                </MDBCarouselItem>
                            ))}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>
            </div>
        );
    }
}

export default CarouselPageWestgate;

import Lightbox from 'react-images';
import PhotoGallery from 'react-photo-gallery';
import React from 'react';
import { Element } from 'react-scroll';

const PHOTOS = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
];

export default class Gallery extends React.PureComponent {
  state = {
    currentImage: 0,
    lightboxIsOpen: false,
  }

  openLightbox = (event, image) => {
    this.setState({
      currentImage: image.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious = () => {
    this.setState({ currentImage: this.state.currentImage - 1 });
  }

  gotoNext = () => {
    this.setState({ currentImage: this.state.currentImage + 1 });
  }

  render() {
    const { currentImage, lightboxIsOpen } = this.state;

    return (
      <Element name="gallery">
        <PhotoGallery
          onClick={this.openLightbox}
          photos={PHOTOS}
          margin={0}
        />

        <Lightbox
          images={PHOTOS}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          isOpen={lightboxIsOpen}
          currentImage={currentImage}
        />
      </Element>
    );
  }
}

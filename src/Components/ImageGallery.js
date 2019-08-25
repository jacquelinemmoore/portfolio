import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: 'images/gallery/nick.jpg', width: 2, height: 5 },
    { src: 'images/gallery/zach.jpg', width: 3, height: 4 },
    { src: 'images/gallery/hannah.jpg', width: 2, height: 5 },
    { src: 'images/gallery/alaska.jpg', width: 2, height: 4 },
    { src: 'images/gallery/alaska 2.jpg', width: 2, height: 4 },
    { src: 'images/gallery/alaska 3.jpg', width: 2, height: 4 },
    { src: 'images/gallery/marcus.jpg', width: 2, height: 5 },
    { src: 'images/gallery/david 1.jpg', width: 2, height: 5 },
    { src: 'images/gallery/lucia.jpg', width: 3, height: 4 }
];


export class ImageGallery extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <div id="image-gallery">
                <h1>See my photos</h1>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}

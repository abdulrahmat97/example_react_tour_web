import React, { Component } from 'react'
import Slider from 'react-slick'
import Image1 from 'asset/img/img1.jpg'
import Image2 from 'asset/img/img2.jpg'
import Image3 from 'asset/img/img3.jpg'
import Image4 from 'asset/img/img4.jpg'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  img: {
    width: '100%',
  },
  imgSelect: {
    width: '100%',
    transform: 'scale(4)',
    transition: '0.5s',
  },
  corouselContainer: {
    maxWidth: '500px',
    height: '300px',
    backgroundColor: 'rgba(185, 166, 150, 0.144)',
    margin: '0 auto',
  },
  corouselItemContainer: {
    maxWidth: '500px',
    height: '300px',
    backgroundColor: 'rgba(185, 166, 150, 0.144)',
    overflow: 'hidden',
  },
  imgFilter: {
    float: 'left',
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '1000',
    padding: '5px',
    color: '#FFFFFF',
    ntWeight: 'bold',
    backgroundColor: 'rgba(206, 178, 155, 0.4)',
    width: '100%',
    height: '100%',
  },
  costumDot: {
    width: '25rem',
    display: 'flex !important',
    listStyle: 'none',
    textAlign: 'center',
    '& li': {
      borderRadius: '50px',
      overflow: 'hidden',
      width: '100%',
      margin: '1rem',
      listStyle: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '0',
      opacity: '0.5',
      transition: '0.5s',
      '& a': {
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        zIndex: 10,
      },
      '&.slick-active': {
        opacity: '1',
      }
    }
  }
})

class Corousel extends Component {
  render () {
    const { classes } = this.props
    const settings = {
      customPaging: function(i) {
        return (
          <div>
            <img className={classes.imgSelect} src={require(`asset/img/img${i+1}.jpg`)} alt={`img${i+1}`} />
          </div>
        );
      },
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      useCSS: true,
      autoPlay: true,
      dotsClass: classes.costumDot
    };

    return (
      <div className={classes.corouselContainer}>
        <Slider {...settings}>
          <div className={classes.corouselItemContainer}>
            <div className={classes.imgFilter}></div>
            <img className={classes.img} alt="img-1" src={Image1} />
          </div>
          <div className={classes.corouselItemContainer}>
            <img className={classes.img} alt="img-2" src={Image2} />
          </div>
           <div className={classes.corouselItemContainer}>
            <img className={classes.img} alt="img-1" src={Image3} />
          </div>
        <div className={classes.corouselItemContainer}>
            <img className={classes.img} alt="img-2" src={Image4} />
          </div>
        </Slider>
      </div>
    )
  }
}

export default withStyles(styles)(Corousel)

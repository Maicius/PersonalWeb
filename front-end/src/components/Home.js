var React = require('react');
var Footer = require('../tpl/Footer');
var ImgArr = require('../tpl/ImgArr');
import { Carousel} from 'react-bootstrap';
import $ from 'jquery';
const Home = React.createClass({
  getInitialState() {
    return {
      CarouselData: [],
      EnergyFeatures: [],
      OurServices: [],
      parallax: [],
      imgdesc: [],
      bgovertext: {},
      imgarr: [],
      parallaxBg: {}
    };
  },
  componentDidMount: function() {
    $.get('./data/HomeData.json', function(result) {
        this.setState({
          CarouselData: result.CarouselData,
          EnergyFeatures: result.EnergyFeatures,
          OurServices: result.OurServices,
          parallax: result.parallax,
          imgdesc: result.imgdesc,
          imgarr: result.imgarr,
          parallaxBg: result.parallaxBg
        });
    }.bind(this));
  },
  render() {
    return (
      <div>
      <div className="margin-top-20">
         <Carousel>
          {
          this.state.CarouselData.map(function (item, index) {
                return (
                    <Carousel.Item key={index}>
                      <img width={900} height={500} alt="900x500" src={item.images}/>
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p className="text-desc">{item.desc}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    );
                    })
                }
          </Carousel>
          </div>


          <div id="fh5co-section">
            <div className="col-half col-half-color">
            {
          this.state.imgdesc.map(function (item, index) {
                return (
                     <div className="row-half" key={index} >
                        <div className="col-half-inner col-half-inner-bg">
                          <div className="desc text-desc">
                            <h3 className="text-desc">{item.title1}</h3>
                            <p className="text-desc">{item.desc}</p>
                            <p className="text-desc"><a href={item.linker} className="text-desc">{item.link_title}</a></p>
                            <p className="text-desc">{item.desc_name}</p>
                            <p className="text-desc">{item.desc2}</p>
                            {/*<p><a href="#" className="btn btn-primary btn-outline with-arrow">Read More <i className="icon-arrow-right22"></i></a></p>*/}
                          </div>
                        </div>
                        <div className="col-half-inner grid-item" style={{backgroundImage: 'url(' + item.bgimgurl + ')'}}>
                          <div className="desc2">
                            <h3>{item.title2}</h3>
                            <span className="text-desc">{item.desc3}</span>
                          </div>
                        </div>
                    </div>
                    );
                    })
                }
            </div>

            <div className="col-half col-half-2">
              <h2>你可以通过以下站点了解我</h2>
               {
              this.state.EnergyFeatures.map(function (item, index) {
                    return (
                        <div className="featured-inner" key={index}>
                        <i className={item.iconClass}/>
                        <div className="desc">
                          <h3 className="text-desc2">{item.title}</h3>
                          <p className="text-desc2">{item.desc}</p>
                          <a href={item.link}>戳这里</a>
                        </div>
                      </div>
                        );
                        })
                    }
            </div>
          </div>

        <div className="fh5co-parallax fh5co-parallax2" style={{backgroundImage: 'url(' + this.state.parallaxBg.bgimgurl + ')'}} data-stellar-background-ratio="0.5">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
                <div className="fh5co-intro animate-box">
                  <div className="row">
                   {
                this.state.parallax.map(function (item, index) {
                      return (
                          <div className="col-md-6 text-center" key={index}>
                            <div className="testimony">
                              <span className="quote"><i className="icon-quotes-right"></i></span>
                              <blockquote>
                                <p className="text-desc2">{item.desc}</p>
                                <span className="text-desc text-title">{item.title}</span>
                              </blockquote>
                            </div>
                          </div>
                          );
                          })
                      }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div id="fh5co-portfolio-section">
      <div className="portfolio-row-half">
        <div className="portfolio-grid-item-color">
          <div className="desc">
            <h2>影集</h2>
            <p className="text-desc">摄影于我而言，只是一种普通的交流方式,一种记录生活的形式</p>
            <p><a href="#" className="btn btn-primary btn-outline with-arrow">View All Photos <i className="icon-arrow-right22"></i></a></p>
          </div>
        </div>
         {
          this.state.imgarr.map(function (item, index) {
                return (
                      <ImgArr key={index} backgroundImage={item.bgimgurl} title={item.title1} span={item.title2}/>
                    );
                    })
                }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
});
module.exports = Home;

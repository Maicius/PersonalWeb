var React = require('react');
var Footer = require('../tpl/Footer');
var JumbotronTpl = require('../tpl/JumbotronTpl');
import $ from 'jquery';
const Blog = React.createClass({
   getInitialState() {
    return {
      Data: [],
      commondata: [],
      jumbotrontext: {}
    };
  },
  componentDidMount: function() {
    $.get('./data/blog.json', function(result) {
        this.setState({
          Data: result
        });
    }.bind(this));

    $.get('./data/CommonData.json', function(result) {
        this.setState({
          commondata: result.Blog[0],
          jumbotrontext: result.JumbotronTpl[2]
        });
    }.bind(this));

    // $.get('./data/BgOverText.json', function(result) {
    //     this.setState({
    //       bgovertext: result.Blog[0]
    //     });
    // }.bind(this));
  },
render() {
    return (
      <div className="lorem" >
       <JumbotronTpl backgroundImage={this.state.jumbotrontext.backgroundImage} locationpathname={this.props.location.pathname} title={this.state.jumbotrontext.title} desc={this.state.jumbotrontext.desc} />
      <div id="fh5co-blog-section">
      <div className="container">
          <p className="text-desc2">目前这些博客都是外链，是我之前在其它网站上写的东西，后面我会把它们都放回本网站</p>
        {/*<CommonCenter iconClass={this.state.commondata.iconClass} title={this.state.commondata.title} desc={this.state.commondata.desc} />*/}
        <div className="row">
          <div className="feature-full-2col" >
         {
          this.state.Data.map(function (item, index) {
                return (
                  <div className="blog-inner" key={index}>
                    <div className="image image-width" style={{backgroundImage: 'url(' + item.images + ')'}}>
                    </div>
                    <div className="desc desc2">
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                      <p><a href={item.url} className="btn btn-primary btn-luxe-primary">Learn More</a></p>
                    </div>
                    </div>
                    );
                    })
                }
               </div>
      </div>
    </div>
     </div>
       {/*<BgOverText backgroundImage={this.state.bgovertext.backgroundImage} title={this.state.bgovertext.title} desc={this.state.bgovertext.desc} />*/}
      <Footer />
      </div>
    );
  }
});
module.exports = Blog;

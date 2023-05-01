import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBox from './SearchBox';

class Repos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refVal: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit() {
    alert(this.myTextInput.value);
  }
  render() {
    return (
      <div>
        <SearchBox />
        <section className="wrapper">
          <div className="container-fostrap">
            <div>
              <img src="https://4.bp.blogspot.com/-7OHSFmygfYQ/VtLSb1xe8kI/AAAAAAAABjI/FxaRp5xW2JQ/s320/logo.png" className="fostrap-logo" />
              <h1 className="heading">
                Bootstrap Card Responsive
            </h1>
            </div>
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <div className="card">
                      <a className="img-card" href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                        <img src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                      </a>
                      <div className="card-content">
                        <h4 className="card-title">
                          <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"> Bootstrap 3 Carousel FadeIn Out Effect
                                  </a>
                        </h4>
                        <p className="">
                          Tutorial to make a carousel bootstrap by adding more wonderful effect fadein ...
                                </p>
                      </div>
                      <div className="card-read-more">
                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                          Read More
                                </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="card">
                      <a className="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                        <img src="https://3.bp.blogspot.com/-bAsTyYC8U80/VtLZRKN6OlI/AAAAAAAABjY/kAoljiMALkQ/s400/material%2Bnavbar.jpg" />
                      </a>
                      <div className="card-content">
                        <h4 className="card-title">
                          <a href="http://www.fostrap.com/2016/02/awesome-material-design-responsive-menu.html"> Material Design Responsive Menu
                                  </a>
                        </h4>
                        <p className="">
                          Material Design is a visual programming language made by Google. Language programming...
                                </p>
                      </div>
                      <div className="card-read-more">
                        <a href="https://codepen.io/wisnust10/full/ZWERZK/" className="btn btn-link btn-block">
                          Read More
                                </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <div className="card">
                      <a className="img-card" href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">
                        <img src="https://4.bp.blogspot.com/-TDIJ17DfCco/Vtneyc-0t4I/AAAAAAAABmk/aa4AjmCvRck/s1600/cover.jpg" />
                      </a>
                      <div className="card-content">
                        <h4 className="card-title">
                          <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html">5  Button Hover Animation Effects
                                  </a>
                        </h4>
                        <p className="">
                          tutorials button hover animation, although very much a hover button is very beauti...
                                </p>
                      </div>
                      <div className="card-read-more">
                        <a href="http://www.fostrap.com/2016/03/5-button-hover-animation-effects-css3.html" className="btn btn-link btn-block">
                          Read More
                                </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    );
  }
  // render() {
  //   return <div dangerouslySetInnerHTML={{ __html: this.getHTML() }} />;
  // }
}
export default Repos;
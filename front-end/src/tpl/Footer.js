'use strict';
var React = require('react');
import $ from 'jquery';
// footer
const Footer = React.createClass({
    handleClick: function () {
        let email = $("#email").val();
        if(this.isEmail(email)) {
            $.ajax({
                url: "http://116.62.41.211:80/personWeb-1.0/receiveEmail.action",
                type: "POST",
                data: {"email": email},
                success: function (data) {
                    if (data.toString() === "200") {
                        alert("谢谢您的关注");
                    }else if(data.toString() === "400"){
                        alert("该邮箱已经留过了");
                    }else if(data.toString() === "大哥你再闹我就要封IP了啊！"){
                        alert(data.toString());
                    }else if(data.toString() === "201"){
                        alert("谢谢您的关注");
                    }
                    else {
                        alert("对不起,发生未知错误，请联系maicius@outlook.com");
                    }
                }
            });
        }
        else{
            alert("请输入正确的邮箱");
        }
    },
    isEmail: function (str){
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(str)) {
            return true;
        } else {
            return false;
        }
    },
    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <h3>Subscribe</h3>
                            <p className="text-desc2">这个网站刚刚起步，如果您喜欢它，可以留下您的邮箱，有有趣的更新就会通知您</p>
                            <form action="" id="form-subscribe">
                                <div className="form-field">
                                    <input type="email" placeholder="Email Address" id="email"/>
                                    <input type="submit" id="submit" onClick={this.handleClick} value="Send"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});
module.exports = Footer;

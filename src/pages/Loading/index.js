import React, {Component} from 'react';
import './style.css';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surplus: 1563724800 - Math.round(new Date().getTime() / 1000)
        }
    }

    componentDidMount() {
        const _this = this;
        setInterval(function () {
            _this.setState({
                surplus: _this.state.surplus - 1
            })
        }, 1000)
    }

    render() {
        return (
            <div className="loading-box">
                <div className="text-wrapper">
                    <div className="text part1">
                        <div>
          <span className="letter">
            <div className="character">W</div>
            <span/>
          </span>
                            <span className="letter">
            <div className="character">a</div>
            <span/>
          </span>
                            <span className="letter">
            <div className="character">i</div>
            <span/>
          </span>
                            <span className="letter">
            <div className="character">t</div>
            <span/>
          </span>
                            <span className="letter">
            <div className="character">i</div>
            <span/>
          </span>
                            <span className="letter">
            <div className="character">n</div>
            <span/>
          </span>
                            <span className="letter">
            <div className="character">g</div>
            <span/>
          </span>
                        </div>
                    </div>
                    <div className="how-to">
                        <p>距离新版官网正式上线剩余</p>
                        <p>{this.state.surplus}秒</p>
                        <p>鲁ICP备17010228号</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;
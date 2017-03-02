import { Button } from 'antd';
import { Row, Col } from 'antd';
import './example.css'
class Example extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
    delayLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
  delayLoading = () => {
    this.setState({
      delayLoading: true,
    });

    setTimeout(() => this.setState({
      delayLoading: false,
    }), 150);
  }

  render() {

    return (
      <div className="gutter-example">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Example;

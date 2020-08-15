import React from "react";
import Tippy from "@tippyjs/react";

class KeyboardTrigger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showKey: false,
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {
    if (this.props.enable) {
      window.addEventListener("keydown", this.onKeyDown, false);
      window.addEventListener("keyup", this.onKeyUp, false);
      window.addEventListener("blur", this.onBlur, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", this.onBlur, false);
  }

  onKeyDown(event) {
    const { triggerKey, onClick } = this.props;

    if (event.keyCode === 18) {
      this.setState({
        showKey: true,
      });
    }

    if (event.altKey && event.key === triggerKey) {
      onClick();
    }
  }

  onKeyUp(event) {
    if (event.keyCode === 18) {
      this.setState({
        showKey: false,
      });
    }
  }

  onBlur() {
    this.setState({
      showKey: false,
    });
  }

  render() {
    const { triggerKey, onClick, children, tooltip, placement } = this.props;
    const { showKey } = this.state;

    return (
      <Tippy placement={placement} content={tooltip}>
        <Tippy placement={placement} content={triggerKey} visible={showKey}>
          {React.cloneElement(children, { onClick })}
        </Tippy>
      </Tippy>
    );
  }
}

KeyboardTrigger.defaultProps = {
  enable: true,
  placement: "bottom",
}

export default KeyboardTrigger;

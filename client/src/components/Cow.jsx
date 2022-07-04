import react from 'react';

class Cow extends React.Component {
  constructor(prop) {
    super(props);
    this.state = {
      expanded: false;
    }

    this.onNameClick = this.onNameClick.bind(this);
  }

  onNameClick(e) {

    this.prop.onClick(e.target.name, this.target.desc);
  }

  render() {
    return (
      <li>
        <span
          onClick={this.onNameClick}
        >{this.props.cow.name}</span>
        <span>{this.props.cow.desc}</span>
      </li>
    )
}

export default Cow;
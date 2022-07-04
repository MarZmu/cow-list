import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Cowlist extends React.Component {
  constuctor(props) {
    super(props);
    this.state = {
      keyDisplayed: null; //will be key of the cow to display (changes on click)
      cows: [];
    }

    this.changeCow = this.changeCow.beind(this);
    this.addCow = this.addCow.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateList = this.updateList.bind(this);

  }

  componentDidMount() {
    //GET REQUEST
    this.updateList();

  }

  updateList() {
    //GET REQUEST
    axios.({ url: '/cows', method: 'get' })
      .then((results) => { this.setState({ cows: results }) })
      .catch((err) => {
        console.log(err);
        alert('Unable to fetch cows');
      })
  }

  changeCow() {
    //Change which desc displayed, fed from sub comp
  }

  addCow(name, desc) {
    //POST REQ
    axios.({ url: `/cows?name=${name}&desc=${desc}`, method: 'post' })
      .then((result) => { console.log('posted (index)') })
      .catch((err) => {
        console.log(err);
        alert('unable to post cow');
      })
  }

  onChange(e) {
    if (e.target === '')
      this.setState({ name: e.target.value });
    else
      this.setState({ desc: e.target.value });
  }


  //should display a form to submit a cow description and name
  // will display list of cow names, when cow name is clicked, also the desc is displayed also
  //only one desc at a time
  render() {
    return (
      <div>
        <form>
          <label><input id='name' onChange={this.onChange}></input></label>
          <label><input id='desc' onChange={this.onChange}></input></label>
          <input type=submit onClick={this.addCow}></input>
        </form>
        <ul>
          {this.state.cows.map((cow, ind) => (<Cow key={ind} select={this.changeCow} />))}
        </ul>
      </div>
    )
  }
}


ReactDOM.render(<div>Hello World!</div>, document.getElementById('app'));
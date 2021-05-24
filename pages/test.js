import React, { SearchBox, Results, Fragment } from "react";
import { Alert , Badge } from 'reactstrap';
 
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    const axios = require("axios");

    axios({
      type: "GET",
      dataType: "json",
      url: "https://api.github.com/users/hacktivist123/repos",
      success: (data) => {
        this.setState({ searchResults: data });
      },
      error: (xhr, status, err) => {
        console.error(url, status, err.toString());
      },
    });

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <Alert color="primary">This is a primary alert—check it out!</Alert>;
  }
}

function Comment(props) {
  return <div className="Comment">
    <UserInfo userInfo={props.autthor} />
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {formatDate(props.currentDate)}
    </div>
  </div>
}
/** Avatar */
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.avatarUrl}/>
  );
}
/**UserInfo */
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.userInfo} />
      <div className="UserInfo-name">
        {props.userInfo.name}
      </div>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function handleClick(e) {
  e.preventDefault();
  console.log('click');
}
export default Test;
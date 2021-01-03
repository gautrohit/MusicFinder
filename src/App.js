import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";
// import Api from "./music.json";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  searchUser = async (e) => {
    this.setState({ loading: true });

    //const res = await axios.get(`./music.json`);
    const res = await axios.get(`https://api.github.com/search/users?q=${e}`);
    //console.log(res.data[0]);
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Search
            searchUser={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users users={this.state.users} loading={this.state.loading} />
        </div>
      </>
    );
  }
}

export default App;

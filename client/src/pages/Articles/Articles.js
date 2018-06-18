import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import CardSaved from "../../components/CardSaved";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid"; import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
 
// class = stateful, special function
class Articles extends Component {
  state = {
    articles: [],
    saved: [],
    title: "",
    date: "",
    url: "",
    topic:"",
    startYear: "",
    endYear: ""
  };

//once everything's rendered and the componens are ready...
//  componentDidMount() {
//    this.loadArticles();
//    this.setState({topic:"", startYear:"", endYear:""});
//    console.log(this.state.topic, this.state.startYear, this.state.endYear);
//  }

//  loadArticles = () => {
//    API.getArticles()
//      .then(res =>
//        this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
//      )
//      .catch(err => console.log(err));
//  };

 renderSavedArticles = () => {
   console.log("renderSavedArt");
  API.getArticles()
    .then(res =>
      this.setState({saved: res.data}))
    .catch(err => console.log(err));
 }

//  deleteArticles = id => {
//    API.deleteArticles(id)
//      .then(res => this.loadArticles())
//      .catch(err => console.log(err));
//  };

 //clicking the save article btn attached to an article
 saveArticles = id => {
  console.log(id);

  //search through artciles arr to find the one that matches the btn id
  const findArt = this.state.articles.find(el => el._id === id);
  console.log(findArt);
  console.log(this.state.articles);

  //save the found article's info in const to send to api
  const newSaved = {id: findArt._id, title: findArt.headline.main, url: findArt.web_url};
  console.log(newSaved);
  API.saveArticles(newSaved)
    .then(res => this.renderSavedArticles())
    .catch(err => console.log(err));
  console.log(this.state.saved);
};

 handleInputChange = event => {
   const { name, value } = event.target;
   this.setState({
     [name]: value
   });
 };

//what happens when the "search" btn is clicked
handleFormSubmit = (event) => {
  event.preventDefault();
  // console.log("Getting NYT Articles");

  //send request to utils/API and get the response back
  API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
    .then((res) => {
      this.setState({ articles: res.data.response.docs });
      console.log("this.state.articles: ", this.state.articles);
    });
};

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>New York Times Article Scrubber</h1>
          <h2>Search for and annotate articles of interest!</h2>
        </Jumbotron>
        <Row>
          <Col size="md-10">
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (required)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year (required)"
              />
              <FormBtn
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSubmit}
                >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>

        {/* results */}
       <Row>
         <Col size="md-10">
           <h1>Results</h1>
           {this.state.articles.slice(0,5).map(article => (
             <Card
              saveArticles={this.saveArticles}
              url={article.web_url}
              title={article.headline.main}
              id={article._id}
              key={article._id}
              />
           ))}
         </Col>
       </Row>

       {/* saved articles */}
       <Row>
         <Col size="md-10">
           <h1>Saved Articles</h1>
           {this.state.saved.map(save => (
             <CardSaved
              url={save.web_url}
              title={save.headline.main}
              id={save._id}
              key={save._id}
              />
           ))}
         </Col>
       </Row>
     </Container>
    );
  }
}

export default Articles;

//axios is like jquery, make requests from within app
import axios from "axios";

const api = {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the articles with the given id
  // getArticles: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },

  // Deletes the articles with the given id
  deleteArticles: function(id) {
    console.log("id: "+id); //getting id correctly
    return axios.delete("/api/articles/" + id);
  },

  // Saves articles to the database
  saveArticles: function(ArticlesData) {
    console.log("API: "+ArticlesData);
    console.log(ArticlesData.id, ArticlesData.title, ArticlesData.url);

    return axios.post("/api/articles", ArticlesData);
  },

  // searchNYT: function(data){
  searchNYT: function(topic, startYear, endYear) {
    //get apiKey and query from NYT dev site
    const api_key = "77cf41deb935419abec0e791065f44e6";
    const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    api_key + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
    return axios.get(queryURL);
  },
};

export default api;

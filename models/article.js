const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  // date: {
  //   type: String,
  //   default: Date,
  //   set: function(d){
  //     return new String()
  //   }
  // },
  date: {
    type: Date,
    default: new Date(),
    set: function(v) {
      console.log(v);
      return v.getDay();
      // var junk = now.getMonth();
      // return (v.getDat(), v.getMonth(), v.getDate(), v.getFullYear());
      // return v.toDateString();
      // return v.toLocaleDateString();
    }
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyDoq3zo7iLAeVX3tGVWP9EtRyIGeFqs7BQ';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = { videos: [] };

      YTSearch({key: API_KEY, term: 'ReactJS'}, (videos) => {
         this.setState({ videos });
         // Resolved from es6 as this.setState({ videos: videos })
      });
   }


   render() {
      return (
         <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
         </div>
      );
   }
}

ReactDOM.render(<App />, document.querySelector('.container'));
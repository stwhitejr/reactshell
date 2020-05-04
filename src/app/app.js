import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from '@root/components/button';
import {addArticle} from '@root/actions';
import {selectArticles} from '@root/reducers';
import '@root/app/app.scss';

// import Logo from '@root/media/images/logo_white.png';

const mapDispatchToProps = {
  addArticle,
};
const mapStateToProps = state => ({
  articles: selectArticles(state),
});

class App extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    addArticle: PropTypes.func.isRequired,
  };

  handleClick = () => this.props.addArticle(Math.random());

  render() {
    return (
      <div>
        <Button primary onClick={this.handleClick}>
          Click ME!
        </Button>
        <i class="fab fa-facebook-square" />
        {this.props.articles.map(article => (
          <p key={article}>{article}</p>
        ))}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

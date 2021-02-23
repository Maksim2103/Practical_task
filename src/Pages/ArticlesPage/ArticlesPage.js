import { useEffect } from 'react';

import { connect } from 'react-redux';

import {
  fetcArticles,
  deleteItem,
  addArticles,
  editArticles,
} from '../../Redux/articles/articles.actions';

import HeaderNavBar from '../../Components/HeaderNavBar/HeaderNavBar';
import CardListArticles from '../../Components/Articles/CardListArticles/CardListArticles';

const ArticlesPage = ({
  articles,
  fetcArticles,
  deleteItem,
  addArticles,
  editArticles,
}) => {
  useEffect(() => {
    fetcArticles();
  }, [fetcArticles]);

  return (
    <>
      <HeaderNavBar />
      <CardListArticles
        data={articles}
        deleteItem={deleteItem}
        addItem={addArticles}
        editItem={editArticles}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  articles: state.articles.articles,
});

const mapDispatchToProps = {
  fetcArticles,
  deleteItem,
  addArticles,
  editArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (dataStore) => dataStore;
const mapDispatchToProps = {};

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  currentPage: Number(router.match.params.page),
  pageCount: Math.ceil((dataStore.total || 20) / 20),
  navigateToPage: (page) => router.history.push(`/character/${page}`),
});

const PaginationConnector = (PageComponent) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );

export default PaginationConnector;

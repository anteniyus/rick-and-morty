import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setPageSize } from "./ActionCreators";

const mapStateToProps = (dataStore) => dataStore;
const mapDispatchToProps = { setPageSize };

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
  currentPage: Number(router.match.params.page),
  pageCount: Math.ceil(
    // eslint-disable-next-line no-bitwise
    (dataStore.total | dataStore.pageSize || 5) / (dataStore.pageSize || 5)
  ),
  navigateToPage: (page) => router.history.push(`/character/${page}`),
});

const PaginationConnector = (PageComponent) =>
  withRouter(
    connect(mapStateToProps, mapDispatchToProps, mergeProps)(PageComponent)
  );

export default PaginationConnector;

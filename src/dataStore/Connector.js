import { connect } from "react-redux";
import { getCharacters, getSingleLocation } from "./ActionCreators";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  getCharacters,
  getSingleLocation,
};

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
});

const Connector = (WrappedComponent) =>
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent);

export default Connector;

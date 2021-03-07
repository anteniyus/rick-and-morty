import { connect } from "react-redux";
import { getCharacters, setLoading } from "./ActionCreators";

const mapStateToProps = (dataStore) => ({
  ...dataStore,
});

const mapDispatchToProps = {
  getCharacters,
  setLoading,
};

const mergeProps = (dataStore, actionCreators, router) => ({
  ...dataStore,
  ...router,
  ...actionCreators,
});

const Connector = (WrappedComponent) =>
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(WrappedComponent);

export default Connector;

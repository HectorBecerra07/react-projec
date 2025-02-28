
import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => <h2>{greeting}</h2>;

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;
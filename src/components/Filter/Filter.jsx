import PropTypes from 'prop-types';
import './Filter.module.css';

export const Filter = ({ filter, getChangeFilter }) => {
    return (
        <label>
            Find contacts by name
            <input type="text"
                filter={filter}
                onChange={getChangeFilter}
            />
        </label>
    );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  getChangeFilter: PropTypes.func.isRequired,
};
import Link from './Link'
import store from '../store'
import { connect } from 'react-redux';

const setFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
        }
}

const mapStateToProps = (state, ownProps) => {
    return{
        active: ownProps.filter === state.visibilityFilter,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick : () => store.dispatch(setFilter(ownProps.filter))
    }
}


const FilterLink =  connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
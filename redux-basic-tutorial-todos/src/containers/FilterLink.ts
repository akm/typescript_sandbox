import { connect } from 'react-redux'
import { VisibilityFilter, setVisibilityFilter } from '../actions'
import { AppDispatch } from '../store'
import Link from '../components/Link'

type State = {
    visibilityFilter: VisibilityFilter
}

type Props = {
    filter: VisibilityFilter
}

const mapStateToProps = (state: State, ownProps: Props) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: AppDispatch, ownProps: Props) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

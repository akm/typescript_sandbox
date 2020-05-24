import { connect } from 'react-redux'
import { VisibilityFilter, setVisibilityFilter } from '../actions'
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

const mapDispatchToProps = (dispatch: State, ownProps: Props) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

import {ActionType} from '../action-types'
import {Action} from '../actions'

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

// Instead of writing pipes for each different action type we could get, we can write a type that contains all the different interfaces
// const reducer = (state:RepositoriesState, action: SearchingRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction): RepositoriesState => {


const reducer = (state:RepositoriesState = initialState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCHING_REPOSITORIES:
      // By using the switch statement, TS knows that the action is of type "SearchingRepositoriesAction" because that's the only interface where action.type = SEARCHING_REPOSITORIES
      return {loading: true, error: null, data: []}
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {loading: false, error: null, data: action.payload}
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {loading: false, error: action.payload, data: []}
    default:
      return state;
  }
}

export default reducer
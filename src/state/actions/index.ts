import {ActionType} from '../action-types/index'

interface SearchingRepositoriesAction {
  type: ActionType.SEARCHING_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchingRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction

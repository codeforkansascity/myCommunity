import { combineReducers } from 'redux';
import CommunityBoardReducer from './CommunityBoardReducer';
import CommunityLedgerReducer from './CommunityLedgerReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  board: CommunityBoardReducer,
  ledger: CommunityLedgerReducer,
  user: UserReducer
});

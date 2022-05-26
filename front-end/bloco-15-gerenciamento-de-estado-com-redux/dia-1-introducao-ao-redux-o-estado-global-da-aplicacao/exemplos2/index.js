import store from "./redux";
import { changeCount } from "./redux/count";
import { addFavoriteThing, removeFavoriteThing } from "./redux/favoriteThings";
import {
  setYouTubeTitle,
  incrementViewCount,
  upvoteVideo,
  downvoteVideo,
} from "./redux/youTubeVideo";

import { setUserDetails, removeUserDetails } from "./redux/user";

/**
 * Challenge:
 *
 * 1. Bring in all the action creators we've made so far and dispatch them, just to make sure things are working
 */

store.dispatch(changeCount(42));
store.dispatch(addFavoriteThing("Door bells"));
store.dispatch(addFavoriteThing("Sleigh bells"));
store.dispatch(removeFavoriteThing("door bells"));
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"));
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(downvoteVideo());

store.dispatch(setUserDetails({
  firstName: "Joe",
  lastName: "Schmoe",
  id: 1,
  email: "joe@schmoe.com"
}));

store.dispatch(removeUserDetails())
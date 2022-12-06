export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const GET_JOBS = "GET_JOBS";
export const SET_QUERY = "SET_QUERY";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToFavAction = (data) => {
  return {
    type: ADD_TO_FAV,
    payload: data,
  };
};
export const removeFromFavAction = (favorite) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: favorite,
  };
};

export const getJobsAction = (query) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search";

  return async (dispatch, getState) => {
    console.log("currently fetching jobs...");
    console.log(getState());
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
        console.log(getState());
      } else {
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true,
        });
        dispatch({
          type: GET_JOBS_LOADING,
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true,
      });
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
    }
  };
};

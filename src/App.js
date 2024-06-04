// import { useEffect } from "react";
// import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
// import { useReducer } from "./hooks/useReducer";

// function fetchReducer(state, action) {
//   switch(action.type) {
//     case 'fetchAPI/request':
//       return { ...state, isLoading: action.isLoading };
//     case 'fetchAPI/success':
//       return {
//         ...state, 
//         isLoading: action.isLoading, 
//         error: action.error, 
//         data: action.data 
//       };
//     case 'fetchAPI/error':
//       return {
//         ...state, 
//         isLoading: action.isLoading, 
//         error: action.error, 
//         data: action.data 
//       };
//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(fetchReducer, {
  //   data: [],
  //   isLoading: false,
  //   error: null
  // });

  // const { data: users, isLoading, error } = state;
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // use
  // const fetchUsers = async () => {
  //   //setIsLoading(true);
  //   dispatch({
  //     type: 'fetchAPI/request',
  //   });
  //   try {
  //     const res = await fetch('https://reqres.in/api/users');
  //     const { data } = await res.json();

  //     // setUsers(data);
  //     // setError(null);
  //     // setIsLoading(false);
  //     dispatch({
  //       type: 'fetchAPI/success',
  //       isLoading: false,
  //       error: null,
  //       data
  //     });
  //   } catch (err) {
  //     // setIsLoading(false);
  //     // setError(err);
  //     // setUsers([]);
  //     dispatch({
  //       type: 'fetchAPI/error',
  //       isLoading: false,
  //       error: null,
  //       data: []
  //     });
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const {
    data: users, isLoading, error
  } = useFetch('https://reqres.in/api/users');

  if (error) {
    return <p>Something went wrong!!!</p>;
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    users.map((user) => (
      <p>
        {user.first_name} {user.last_name}
      </p>
    ))
  );
}

export default App;

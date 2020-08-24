// import React from 'react';
// import useFetch from '../../context/useFetch';
// import { useEffect } from 'react';
// import { STATS_GET } from '../../services/api';
// import Loading from '../../Helpers/Loading';
// import Error from '../../Helpers/Error';
// import UserStatsGraph from './UserStatsGraphs';

// const UserStats = () => {
//   const { data, error, loading, request } = useFetch();
//   useEffect(() => {
//     async function getData() {
//       const { url, options } = STATS_GET();
//       await request(url, options);
//     }
//     getData();
//   }, [request]);

//   if (loading) return <Loading />;
//   if (error) return <Error error={error} />;
//   if (data)
//     return (
//       <div>
//         <UserStatsGraph data={data} />
//       </div>
//     );
//   else return null;
// };

// export default UserStats;

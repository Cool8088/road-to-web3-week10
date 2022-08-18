import { useQuery } from "@apollo/client";
import recommendedPQ from '../queries/recommendedProfilesQuery.js';
import Profile from '../components/Profile.js';

export default function Home() {
  const {loading, error, data} = useQuery(recommendedPQ);

  if (loading) return 'Loading..';
  if (error) return `Error! ${error.message}`;

  console.log("data is "+data.recommendedProfiles);
  return (
    <div>
      {data.recommendedProfiles && data.recommendedProfiles.map((profile, index) => {
        console.log(`Profile ${index}:`, profile);
        return <Profile key={profile.id} profile={profile} displayFullProfile={false} />;
      })}
    </div>
  )
}
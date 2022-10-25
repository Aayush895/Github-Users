import { useEffect, useState } from "react";
import Card from "./Card";

const Display = () => {
  const url = "https://api.github.com/users";
  const [gitData, setGitData] = useState([]);
  useEffect(() => {
    const getGitData = async () => {
      const rawData = await fetch(url);
      const responseData = await rawData.json();
      setGitData(responseData);
      console.log(gitData);
    };
    getGitData();
  }, []);
  
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          {gitData.map((users, index) => (
            <div className="col-lg-4" key={users.id}>
              <Card number={users.id} photoSource={users.avatar_url} name={users.login} articles={users.repos_url.length} followers={users.followers_url.length}
              following={users.following_url.length}/>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Display;

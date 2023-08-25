import Search from "../components/Search";
import { UserProps } from "../types/user";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const res = await axios
      .get(`https://api.github.com/users/${userName}`)
      .then((data) => {
        console.log(data.data);
      });
  };
  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
};
export default Home;

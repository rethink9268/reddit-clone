import { auth } from "@/src/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Directory from "./directory/Directory";
import RightContent from "./rightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      justify={{ md: "space-between" }}
      bg="white"
      height="44px"
      padding="6px 12px"
      align="center"
    >
      <Flex
        mr={{ base: 0, md: 2 }}
        align="center"
        width={{ base: "40px", md: "auto" }}
      >
        <Image src="/images/redditFace.svg" height="30px" alt="reddit" />
        <Image
          src="/images/redditText.svg"
          display={{ base: "none", md: "unset" }}
          height="46px"
          alt="reddit"
        />
      </Flex>
      {user && <Directory />}
      <SearchInput user={user} />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;

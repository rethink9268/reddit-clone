import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/src/firebase/clientApp";
import { User } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  const createUserDocument = async (user: User) => {
    const userDocumentRef = doc(firestore, "users", user.uid);
    await setDoc(userDocumentRef, JSON.parse(JSON.stringify(userCred?.user)));
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCred]);

  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        isLoading={loading}
        variant="oauth"
        mb={2}
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/googlelogo.png" alt="google" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth">Some other with Provides</Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;

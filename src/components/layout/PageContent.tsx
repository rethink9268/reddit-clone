import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

interface PageContentProps extends PropsWithChildren {}

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  console.log(children);
  return (
    <Flex justify="center" p="16px 0">
      <Flex width="95%" justify="center" maxWidth="860px">
        {/* LHS */}
        <Flex
          direction="column"
          mr={{ base: 0, md: 6 }}
          width={{ base: "100%", md: "65%" }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        {/* RHS */}
        <Flex
          direction="column"
          flexGrow={1}
          display={{ base: "none", md: "flex" }}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;

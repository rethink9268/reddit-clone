import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import CreateCommunityModal from "../../Modal/Auth/createCommunityModal/CreateCommunityModal";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CreateCommunityModal open={open} handleClose={() => setOpen(false)} />
      <MenuItem
        onClick={() => setOpen(true)}
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;

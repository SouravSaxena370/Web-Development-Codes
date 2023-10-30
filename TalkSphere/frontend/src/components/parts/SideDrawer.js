import { Box, Button, Tooltip, Text, Menu, MenuButton, MenuList, Avatar,MenuItem } from '@chakra-ui/react'
import { BellIcon,ChevronDownIcon} from '@chakra-ui/icons'
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider'

const SideDrawer = () => {
  const [search,setSearch]=useState("")
  const [searchResult,setSearchResult]=useState([])
  const [loading,setLoading]=useState(false)
  const [loadingChat,setLoadingChat]=useState()
  const {user}=ChatState()


  return (
    <>
      <Box display="flex" justifyContent={'space-between'} alignItems={'center'} bg={'white'} w="100%" p="5px 7px" borderWidth={'2px'}>
        <Tooltip label="Search Users" hasArrow placement='bottom-end'>
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text display={{base: "none", md: "flex"}} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize={'2xl'} fontFamily={"Work sans"}>
          TalkSphere
        </Text>  
        <div>
          <Menu>
            <MenuButton p={1}><BellIcon fontSize={"2xl"} m={1}/></MenuButton>
            <MenuList></MenuList>
          </Menu>
          <Menu>
            <MenuButton as="button" righticon={<ChevronDownIcon/>}>
              <Avatar size='sm' cursor={'pointer'} name={user.name} src={user.pic}/>
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  )
}

export default SideDrawer
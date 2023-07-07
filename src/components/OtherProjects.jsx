import { Card, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function OtherProjects({ logo , id  }) {
  return (
    <Link to={`/project/${id}`}>
    <Card bgColor={"neutrals.30"} my={20} mx={[2, 5]}>
    <Image boxSize={{base:"150px", lg:"xs"}} src={logo} />
  </Card>
    </Link>
  )
}


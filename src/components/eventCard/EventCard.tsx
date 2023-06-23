import { MdLocationPin } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

type EventCardProps = {
  id: number | string;
  type?: string;
  name: string;
  place: string;
  category?: string;
  participants: number;
  maxParticipants: number;
  startDate: any;
  sponsorLogo?: string;
};

export default function EventCard({
  id,
  name,
  type,
  place,
  category,
  participants,
  maxParticipants,
  startDate,
  sponsorLogo,
}: EventCardProps) {
  return (
    <Center py={6} height={"100%"}>
      <Link
        to={`/events/${type}/${id}`}
        style={{
          maxWidth: "445px",
          width: "100%",
        }}
      >
        <Box
          bg={useColorModeValue("green.100", "gray.900")}
          _hover={{
            boxShadow: "md",
          }}
          transition={"all 200ms ease-in-out"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Flex justifyContent="space-between">
            <Box>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {type} Event
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {name}
              </Heading>
            </Box>
            <Avatar src={sponsorLogo || ""} />
          </Flex>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
            <Flex gap="8px" wrap="wrap">
              <Tag
                size="md"
                borderRadius="full"
                paddingBlock={1}
                paddingInline={2}
                bg="green.300"
                color={"white"}
              >
                <MdLocationPin />
                <TagLabel textTransform="capitalize" pl={"1.5"}>
                  {place}
                </TagLabel>
              </Tag>
              <Tag
                size="md"
                borderRadius="full"
                paddingBlock={1}
                paddingInline={2}
                bg="green.300"
                color={"white"}
              >
                <IoIosPeople />
                <TagLabel textTransform="capitalize" pl={"1.5"}>
                  {`${participants} / ${maxParticipants}`}
                </TagLabel>
              </Tag>
              <Tag
                size="md"
                borderRadius="full"
                paddingBlock={1}
                paddingInline={2}
                bg="green.300"
                color={"white"}
              >
                <FaCalendarDays />
                <TagLabel textTransform="capitalize" pl={"1.5"}>
                  {format(new Date(startDate), "dd/MM/yyyy")}
                </TagLabel>
              </Tag>
              <Tag
                size="md"
                borderRadius="full"
                paddingBlock={1}
                paddingInline={2}
                bg="green.300"
                color={"white"}
              >
                <BiSolidCategoryAlt />
                <TagLabel textTransform="capitalize" pl={"1.5"}>
                  {category}
                </TagLabel>
              </Tag>
            </Flex>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}

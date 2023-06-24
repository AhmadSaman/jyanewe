import React, { useCallback, useEffect, useState } from "react";
import { supabase } from "../App";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Heading, Stack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router";
import { useAuth } from "../context/userContext";
import { Input } from "@chakra-ui/input";
import { category } from "./Gathering";

const Video = ({ id }: { id: string }) => {
  const { user } = useAuth();
  const [link, setLink] = useState("");
  const [eventData, setEventData] = useState<any>();
  const navigate = useNavigate();

  const getData = useCallback(async () => {
    const { data } = await supabase.from("event").select("*").eq("id", id);
    console.log(data);
    setEventData(data![0]);
  }, [id]);

  const addUserEvent: () => Promise<boolean> = async () => {
    const { data } = await supabase.from("video").select("*");
    console.log({ data }, id);
    const userIdsFromUserPerEvent = data
      ?.map((userPerEvent) => {
        console.log(userPerEvent);
        if (`${userPerEvent.event_id}` === id) return userPerEvent.user_id;
        else return null;
      })
      .filter((ele) => ele);
    console.log(userIdsFromUserPerEvent);
    if (userIdsFromUserPerEvent?.includes(user.id)) {
      return true;
    }
    await supabase
      .from("video")
      .insert({ user_id: user.id, event_id: id, link });
    return false;
  };

  const updateEventNumberOfAttendance = async () => {
    const { data } = await supabase
      .from("event")
      .select("number_of_attendance")
      .eq("id", id);
    await supabase
      .from("event")
      .update({ number_of_attendance: data![0].number_of_attendance + 1 })
      .eq("id", id);
  };

  const registerToEvent = async () => {
    if (!user) return navigate("/login");
    if (!link.length) return;
    const isRegisted = await addUserEvent();
    console.log({ isRegisted });
    if (!isRegisted) updateEventNumberOfAttendance();
  };

  useEffect(() => {
    getData();
  }, [getData]);

  if (!eventData) return null;
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      p={10}
    >
      <Stack flex={2}>
        <Heading whiteSpace={"nowrap"}>{eventData.name}</Heading>
        <Text py="2">{eventData.description}</Text>
      </Stack>

      <Stack flex={1}>
        <CardBody>
          <Heading size="md">Details</Heading>

          <Text py="2"></Text>
          <Text py="2">Location: {eventData.location}</Text>
          <Text py="2">
            #Registration: {eventData.number_of_attendance}/
            {eventData.limit_of_attendance}
          </Text>
          <Text py="2">
            Category: {category[eventData.category_id as keyof typeof category]}
          </Text>
        </CardBody>

        <CardFooter>
          <Input value={link} onChange={(e) => setLink(e.target.value)} />
          <Button onClick={registerToEvent} variant="solid">
            Register
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Video;

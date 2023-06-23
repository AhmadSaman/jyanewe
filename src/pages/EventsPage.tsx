import { supabase } from "../App";
import { useEffect, useState } from "react";
import EventCard from "../components/eventCard/EventCard";
import { Spinner, Flex, Center } from "@chakra-ui/react";

type EventsState = {
  data: null | any[];
  count: number | null;
};

const MAP_CATEGORY_ID_TO_LABEL = {
  1: "Build",
  2: "Repair",
  3: "Clean",
  4: "Plant",
};

const EventsPage = () => {
  const [events, setEvents] = useState<EventsState>();
  const [loading, setLoading] = useState<boolean>(true);
  console.log(events);
  useEffect(() => {
    const datafunc = async () => {
      try {
        setLoading(true);
        const { count, data, status, error } = await supabase
          .from("event")
          .select("*");
        if (status !== 200) throw error;

        setEvents({
          count,
          data,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    datafunc();
  }, []);

  if (loading) {
    return (
      <Center h="full" w="full">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
      {events?.data?.map(
        ({
          id,
          limit_of_attendance,
          number_of_attendance,
          name,
          location,
          event_start_date,
          category_id,
        }) => (
          <EventCard
            id={id}
            participants={number_of_attendance}
            maxParticipants={limit_of_attendance}
            place={location}
            name={name}
            startDate={event_start_date}
            category={
              MAP_CATEGORY_ID_TO_LABEL[
                category_id as keyof typeof MAP_CATEGORY_ID_TO_LABEL
              ]
            }
          />
        )
      )}
    </Flex>
  );
};

export default EventsPage;

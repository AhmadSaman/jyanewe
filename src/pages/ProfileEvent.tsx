import { useCallback, useEffect, useState } from "react";
import { supabase } from "../App";
import { useAuth } from "../context/userContext";
import { Stack } from "@chakra-ui/layout";

const ProfileEvent = () => {
  const [data, setData] = useState();
  const { user } = useAuth();

  const getUserEvents = useCallback(async () => {
    const { data } = await supabase.from("user_per_event").select(
      `
        event (*)
    `
    );
    console.log(data);
  }, []);

  useEffect(() => {
    getUserEvents();
  }, [getUserEvents]);

  return <Stack alignItems="center">asdf</Stack>;
};

export default ProfileEvent;

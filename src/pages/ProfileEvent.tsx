import { useCallback, useEffect } from "react";
import { supabase } from "../App";
import { Stack } from "@chakra-ui/layout";

const ProfileEvent = () => {
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

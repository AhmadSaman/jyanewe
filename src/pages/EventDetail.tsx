import { useParams } from "react-router";
import Gathering from "../components/Gathering";
import Video from "../components/Video";

const EventDetail = () => {
  const { type, id = "" } = useParams();
  if (type === "gathering") return <Gathering id={id} />;
  return <Video id={id} />;
};

export default EventDetail;

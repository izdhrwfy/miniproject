import { FaTheaterMasks } from "react-icons/fa";
import {
  MdOutlineFestival,
  MdStorefront,
  MdOutlineTheaterComedy,
} from "react-icons/md";
import { GiMusicalScore, GiMusicalNotes } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineSportsTennis } from "react-icons/md";

export const categories = [
  {
    label: "ALL",
    icon: MdStorefront,
  },
  {
    label: "CONCERT",
    icon: GiMusicalNotes,
  },
  {
    label: "FESTIVAL",
    icon: MdOutlineFestival,
  },
  {
    label: "MEET AND GREET",
    icon: FaPeopleRoof,
  },
  {
    label: "MUSICAL",
    icon: GiMusicalScore,
  },
  {
    label: "THEATER",
    icon: FaTheaterMasks,
  },
  {
    label: "COMEDY",
    icon: MdOutlineTheaterComedy,
  },
  {
    label: "EXHIBITIONS",
    icon: IoColorPaletteOutline,
  },
  {
    label: "SPORTS",
    icon: MdOutlineSportsTennis,
  },
];

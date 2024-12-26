import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
  } from "@mantine/core";
  import {
    IconSelector,
    IconChevronDown,
    IconChevronUp,
    IconSearch,
  } from "@tabler/icons-react";
import classes from "./InventoryTable.module.css"

const Inventory: React.FC = () => {
  return (
    <>
    </>
  )
}

export default Inventory

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // import Firestore methods
import { db } from "../../../firebase/firebase"; // Your Firebase config file
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
import classes from "./TableSort.module.css";

interface RowData {
  orderer: string;
  orderName: string;
  status: string;
  link: string;
}

interface ThProps {
  children: React.ReactNode;
  reversed: boolean;
  sorted: boolean;
  onSort(): void;
}

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <Table.Th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group justify="space-between">
          <Text fw={500} fz="sm">
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </Table.Th>
  );
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    Object.keys(item).some((key) =>
      (item[key as keyof RowData] as unknown as string)
        .toLowerCase()
        .includes(query)
    )
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  const sorted = [...data].sort((a, b) => {
    if (payload.reversed) {
      return b[sortBy].localeCompare(a[sortBy]);
    }
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return filterData(sorted, payload.search);
}

export function TableSort() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<RowData[]>([]);
  const [sortedData, setSortedData] = useState<RowData[]>([]);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState<string | null>(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersData = querySnapshot.docs.map(
          (doc) => doc.data() as RowData
        );
        setData(ordersData);
        setSortedData(ordersData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(data, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(data, { sortBy, reversed: reverseSortDirection, search: value })
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.orderer + row.orderName + row.status + row.link}>
      <Table.Td>{row.orderer}</Table.Td>
      <Table.Td>{row.orderName}</Table.Td>
      <Table.Td>{row.status}</Table.Td>
      <Table.Td>{row.link}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea className={classes["scroll-area"]}>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        horizontalSpacing="md"
        verticalSpacing="xs"
        miw={700}
        layout="fixed"
      >
        <Table.Tbody>
          <Table.Tr>
            <Th
              sorted={sortBy === "orderer"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("orderer")}
            >
              Orderer
            </Th>
            <Th
              sorted={sortBy === "orderName"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("orderName")}
            >
              Order Name
            </Th>
            <Th
              sorted={sortBy === "status"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("status")}
            >
              Status
            </Th>
            <Th
              sorted={sortBy === "link"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("link")}
            >
              Link
            </Th>
          </Table.Tr>
        </Table.Tbody>
        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={4}>
                <Text fw={500} ta="center">
                  Nothing found
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
}

import { useState } from 'react';
import { Button, Menu, Text, rem, useMantineTheme } from '@mantine/core';
import {
  IconSquareCheck,
  IconPackage,
  IconUsers,
  IconCalendar,
  IconChevronDown,
} from '@tabler/icons-react';
import CreateOrderModal from '../CreateOrderModal/CreateOrderModal'; 

export function ButtonMenu() {
  const theme = useMantineTheme();
  const [modalOpened, setModalOpened] = useState(false);

  const handleCreateOrderClick = () => {
    setModalOpened(true);
  };

  return (
    <>
      <Menu
        transitionProps={{ transition: 'pop-top-right' }}
        position="top-end"
        width={220}
        withinPortal
      >
        <Menu.Target>
          <Button
            rightSection={
              <IconChevronDown
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
            pr={12}
          >
            Create new
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item
            leftSection={
              <IconPackage
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + O
              </Text>
            }
            onClick={handleCreateOrderClick}
          >
            Create Order
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSquareCheck
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.pink[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + M
              </Text>
            }
          >
            Mark Order(s)
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconUsers
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.cyan[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + T
              </Text>
            }
          >
            Assign Team
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconCalendar
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.violet[6]}
                stroke={1.5}
              />
            }
            rightSection={
              <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                Ctrl + E
              </Text>
            }
          >
            Create Event
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <CreateOrderModal opened={modalOpened} onClose={() => setModalOpened(false)} />
    </>
  );
}

"use client";

import { AddIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { BsDiscord, BsGithub } from "react-icons/bs";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const colorModeManager = useColorMode();
  const pathname = usePathname();
  return (
    <>
      {renderBanner()}
      {renderNav()}
    </>
  );

  function renderBanner() {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingTop="4"
        paddingBottom="4"
        paddingInlineStart="3"
        paddingInlineEnd="3"
        bgGradient="linear(to-r, brand.500, brand.700)"
        color="var(--chakra-colors-white)"
        textAlign="center"
      >
        <Stack
          direction={["column", "column", "row"]}
          align="center"
          spacing={4}
        >
          <Stack
            direction={["column", "column", "row"]}
            align="center"
            spacing={4}
          >
            <Text fontWeight="bold">🏙 NEWS 🏙</Text>
            <Text>Mark of the Odd is now on Fari Community!</Text>
          </Stack>
          <Button
            size="sm"
            colorScheme="brand"
            as={Link}
            href="/creators/bastionland-press/projects/mark-of-the-odd"
          >
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  }
  function renderNav() {
    return (
      <Box
        background={colorModeManager.colorMode === "light" ? "white" : "black"}
        zIndex={1}
      >
        <Container background="" height="4rem" maxWidth="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={4}>
              <Box fontWeight="bold" mr="4">
                <Link href="/">Fari Community</Link>
              </Box>
              <Box>
                <Button
                  isActive={pathname === "/browse"}
                  variant="link"
                  as={Link}
                  cursor="pointer"
                  minW={0}
                  href="/browse"
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Browse
                </Button>
              </Box>
              <Box display={["none", "none", "none", "block"]}>
                <Menu>
                  <MenuButton
                    variant="link"
                    cursor="pointer"
                    minW={0}
                    as={Button}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    Fari Projects
                  </MenuButton>
                  <MenuList alignItems="center">
                    <MenuItem
                      as={Link}
                      href="/creators/fari-rpgs/projects/charge"
                    >
                      Charge
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      href="/creators/fari-rpgs/projects/breathless"
                    >
                      Breathless
                    </MenuItem>
                    <MenuItem
                      as={Link}
                      href="/creators/fari-rpgs/projects/firelights"
                    >
                      Firelights
                    </MenuItem>

                    <MenuItem
                      as={Link}
                      href="/creators/fari-rpgs/projects/hopes-and-dreams"
                    >
                      Hopes & Dreams
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Stack>

            <Flex alignItems="center">
              <Stack direction="row" spacing={4}>
                <Box display={["none", "none", "none", "block"]}>
                  <Button
                    as={Link}
                    href="/creators/fari-rpgs/projects/fari-community/adding-content"
                    leftIcon={<Icon as={AddIcon} />}
                  >
                    Add Your Own Content
                  </Button>
                </Box>
                <Box display={["none", "none", "none", "block"]}>
                  <Button
                    as={Link}
                    href="https://farirpgs.com/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    leftIcon={<Icon as={BsDiscord} />}
                  >
                    Join our Discord
                  </Button>
                </Box>
                <Button
                  as={Link}
                  href="https://github.com/fariapp/fari-community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </Button>
                <Button
                  aria-label="Toggle Dark Mode"
                  onClick={colorModeManager.toggleColorMode}
                >
                  {colorModeManager.colorMode === "light" ? (
                    <MoonIcon />
                  ) : (
                    <SunIcon />
                  )}
                </Button>
              </Stack>
            </Flex>
          </Flex>
        </Container>
        <Divider />
      </Box>
    );
  }
}

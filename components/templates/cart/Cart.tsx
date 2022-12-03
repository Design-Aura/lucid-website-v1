import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { LucidBtn } from "@components/ui/button/Button";
import gsap from "gsap";
import { useAppSelector } from "hooks/useRedux";
import React, { useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCheckoutStage, toggleCart } from "state/feature/cart/cartSlice";
import Checkout from "./Checkout";
import Empty from "./Empty";
import ProductContainer from "./ProductContainer";
import ShippingDetails from "./ShippingDetails";

const Cart = () => {
  const dispatch = useDispatch();
  const cartRef = React.useRef<HTMLDivElement>(null);
  const rootElement = React.useRef<HTMLDivElement>(null);
  const tl = useRef(null);

  const { items, checkoutStage, shoppingDetails, contactDetails } =
    useAppSelector((state) => state.cart);

  const toast = useToast();

  const buttonText = useMemo(() => {
    switch (checkoutStage) {
      case "cart":
        return "Shipping details  >";
      case "shipping":
        return "contact details";
      case "contact":
        return "checkout";
      default:
        return "Shipping details  >";
    }
  }, [checkoutStage]);

  const renderCartStage = useMemo(() => {
    switch (checkoutStage) {
      case "cart":
        return <ProductContainer />;
      case "shipping":
        return <ShippingDetails />;
      case "contact":
        return <Checkout />;
      default:
        return <ProductContainer />;
    }
  }, [checkoutStage]);

  function cartFunctions() {
    switch (checkoutStage) {
      case "cart":
        return getShippingDetails();
      case "shipping":
        return getContactDetails();
      case "contact":
        return getCheckout();
      default:
        return getShippingDetails();
    }
  }

  function getShippingDetails() {
    dispatch(setCheckoutStage("shipping"));
  }

  function getContactDetails() {
    if (shoppingDetails.fullAddress === "")
      return toast({
        title: "Please fill in your address",
        status: "error",
      });

    if (shoppingDetails.state === "")
      return toast({
        title: "Please fill in your state",
        status: "error",
      });

    if (shoppingDetails.country === "")
      return toast({
        title: "Please fill in your country",
        status: "error",
      });

    if (shoppingDetails.postCode === "")
      return toast({
        title: "Please fill in your postal code",
        status: "error",
      });

    if (shoppingDetails.fullName === "")
      return toast({
        title: "Please fill in your full name",
        status: "error",
      });

    dispatch(setCheckoutStage("contact"));
  }

  function getCheckout() {
    if (contactDetails.email === "")
      return toast({
        title: "Please fill in your email",
        status: "error",
      });

    if (contactDetails.phone === "")
      return toast({
        title: "Please fill in your phone number",
        status: "error",
      });

    console.log("checkout");
  }

  function goBack() {
    switch (checkoutStage) {
      case "shipping":
        return dispatch(setCheckoutStage("cart"));
      case "contact":
        return dispatch(setCheckoutStage("shipping"));
      default:
        return dispatch(toggleCart());
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.fromTo(
        cartRef.current,
        {
          x: 500,
        },
        {
          x: 0,
          ease: "back.out(1.7)",
          duration: 2,
        }
      );
    }, rootElement);

    return () => ctx.revert();
  }, []);

  return (
    <Box ref={rootElement}>
      <Box
        pos="fixed"
        right={["0", "3rem"]}
        w={["100%", "376px"]}
        h={["auto", "650px"]}
        top="10rem"
        bg="brand.white100"
        rounded="2rem"
        p="2rem"
        ref={cartRef}
      >
        <Flex alignItems="center" gap="1rem">
          <Center
            cursor="pointer"
            w="3.5rem"
            h="3.5rem"
            rounded="full"
            borderWidth="1px"
            borderColor="brand.green800"
            onClick={() => dispatch(toggleCart())}
          >
            <CloseIcon />
          </Center>

          <Heading color="brand.green600" fontSize="2.4rem">
            My Cart
          </Heading>
        </Flex>

        {items?.length > 0 ? renderCartStage : <Empty />}

        {checkoutStage === "shipping" || checkoutStage === "contact" ? (
          <Grid templateColumns="repeat(5, 1fr)" gap="2rem">
            <GridItem colSpan={2}>
              <LucidBtn px="1.5rem" isOutline onClick={goBack} text="Go Back" />
            </GridItem>
            <GridItem colSpan={3}>
              <LucidBtn
                onClick={cartFunctions}
                text={items.length ? buttonText : "BUY GAMES"}
              />
            </GridItem>
          </Grid>
        ) : (
          <LucidBtn
            onClick={cartFunctions}
            text={items.length ? buttonText : "BUY GAMES"}
          />
        )}
      </Box>
    </Box>
  );
};

export { Cart };

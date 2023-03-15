/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SquareDropdown(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      padding="15px 30px 15px 30px"
      backgroundColor="rgba(35,166,240,1)"
      {...getOverrideProps(overrides, "SquareDropdown")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="32px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dropdown"
        {...getOverrideProps(overrides, "h3")}
      ></Text>
      <View
        width="12px"
        height="21px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icn arrow-down .icn-sm")}
      >
        <Icon
          width="12px"
          height="21px"
          viewBox={{ minX: 0, minY: 0, width: 21, height: 12 }}
          paths={[
            {
              d: "M0 18L7.5 10.5L0 3L1.5 0L12 10.5L1.5 21L0 18Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </Flex>
  );
}

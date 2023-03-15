/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MoreButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="37px"
      padding="15px 30px 15px 30px"
      backgroundColor="rgba(35,166,240,1)"
      {...getOverrideProps(overrides, "MoreButton")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="28px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.05px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="More"
        {...getOverrideProps(overrides, "btn-text")}
      ></Text>
      <View
        width="9.14px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icn arrow-right .icn-xs")}
      >
        <Icon
          width="9.14px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 9.142852783203125, height: 16 }}
          paths={[
            {
              d: "M0 13.7143L5.71428 8L0 2.28571L1.14286 0L9.14286 8L1.14286 16L0 13.7143Z",
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

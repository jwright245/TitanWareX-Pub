/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="25px"
      direction="row"
      width="1205px"
      height="100px"
      justifyContent="flex-end"
      alignItems="center"
      position="relative"
      padding="0px 20px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        width="300px"
        height="unset"
        {...getOverrideProps(overrides, "SearchField")}
      ></Flex>
      <View
        width="42px"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Icon")}
      >
        <Icon
          width="28.03px"
          height="32.5px"
          viewBox={{ minX: 0, minY: 0, width: 28.0341796875, height: 32.5 }}
          paths={[
            {
              d: "M14.0171 32.5C15.9444 32.5 17.5214 31 17.5214 29.1667L10.5128 29.1667C10.5128 31 12.0897 32.5 14.0171 32.5ZM24.5299 22.5L24.5299 14.1667C24.5299 9.05 21.6739 4.76667 16.6453 3.63333L16.6453 2.5C16.6453 1.11667 15.4714 0 14.0171 0C12.5628 0 11.3889 1.11667 11.3889 2.5L11.3889 3.63333C6.37778 4.76667 3.50427 9.03333 3.50427 14.1667L3.50427 22.5L0 25.8333L0 27.5L28.0342 27.5L28.0342 25.8333L24.5299 22.5ZM21.0256 24.1667L7.00855 24.1667L7.00855 14.1667C7.00855 10.0333 9.65427 6.66667 14.0171 6.66667C18.3799 6.66667 21.0256 10.0333 21.0256 14.1667L21.0256 24.1667Z",
              fill: "rgba(2,124,254,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3px"
          left="7px"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Image
        width="40px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </Flex>
  );
}

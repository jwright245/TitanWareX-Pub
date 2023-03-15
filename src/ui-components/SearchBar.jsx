/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="38px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SearchBar")}
      {...rest}
    >
      <View
        width="200px"
        height="38px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(179,179,179,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <View
        width="16px"
        height="16px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="28.95%"
        bottom="28.95%"
        left="5.5%"
        right="86.5%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Icon
          width="15.45px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 15.447311401367188, height: 16 }}
          paths={[
            {
              d: "M15.2124 14.5735L11.4044 10.6129C12.3835 9.44901 12.92 7.98455 12.92 6.45999C12.92 2.89801 10.022 0 6.45999 0C2.89801 0 0 2.89801 0 6.45999C0 10.022 2.89801 12.92 6.45999 12.92C7.79721 12.92 9.07152 12.5167 10.161 11.751L13.998 15.7416C14.1583 15.9082 14.374 16 14.6052 16C14.824 16 15.0316 15.9166 15.1891 15.7649C15.5239 15.4428 15.5346 14.9085 15.2124 14.5735ZM6.45999 1.68522C9.09286 1.68522 11.2348 3.82713 11.2348 6.45999C11.2348 9.09286 9.09286 11.2348 6.45999 11.2348C3.82713 11.2348 1.68522 9.09286 1.68522 6.45999C1.68522 3.82713 3.82713 1.68522 6.45999 1.68522Z",
              fill: "rgba(0,0,0,1)",
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
          left="1.73%"
          right="1.73%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </View>
  );
}

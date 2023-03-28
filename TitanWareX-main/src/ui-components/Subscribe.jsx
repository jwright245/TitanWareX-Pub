/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuth,
  useDataStoreCreateAction,
} from "@aws-amplify/ui-react/internal";
import { Subscribe } from "../models";
import { schema } from "../models/schema";
import { Text, View } from "@aws-amplify/ui-react";
export default function Subscribe(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const btnOnClick = useDataStoreCreateAction({
    fields: { Email: authAttributes["email"] },
    model: Subscribe,
    schema: schema,
  });
  return (
    <View
      width="456px"
      height="95px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Subscribe")}
      {...rest}
    >
      <Text
        fontFamily="Montserrat"
        fontSize="18px"
        fontWeight="400"
        color="rgba(2,124,254,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="198px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="72px"
        left="129px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Join Our Community"
        {...getOverrideProps(overrides, "form-text")}
      ></Text>
      <View
        width="456px"
        height="58px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="37px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "input-group")}
      >
        <View
          width="456px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          bottom="0px"
          left="0px"
          right="0px"
          border="1px SOLID rgba(230,230,230,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(249,249,249,1)"
          {...getOverrideProps(overrides, "form-control input-style-1")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="400"
            color="rgba(115,115,115,1)"
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
            position="absolute"
            top="calc(50% - 14px - 0px)"
            left="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Your Email"
            {...getOverrideProps(overrides, "Your Email")}
          ></Text>
        </View>
        <View
          width="117px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          bottom="0px"
          right="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "input-group-append")}
        >
          <View
            width="117px"
            height="58px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0px"
            bottom="0px"
            left="0px"
            right="0px"
            border="1px SOLID rgba(230,230,230,1)"
            borderRadius="0px 5px 5px 0px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(2,124,254,1)"
            onClick={() => {
              btnOnClick();
            }}
            {...getOverrideProps(overrides, "btn")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="400"
              color="rgba(255,255,255,1)"
              lineHeight="28px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.05px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 36px - 0px)"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Subscribe"
              {...getOverrideProps(overrides, "input-group-text")}
            ></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

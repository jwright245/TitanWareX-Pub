/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function SupportCard(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="15px"
      direction="column"
      width="328px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="50px 40px 50px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SupportCard")}
      {...rest}
    >
      <View
        width="72px"
        height="59.29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "icn resize icn-lg")}
      >
        <Icon
          width="74px"
          height="56px"
          viewBox={{ minX: 0, minY: 0, width: 74, height: 56 }}
          paths={[
            {
              d: "M69.375 56C69.375 56 74 56 74 51.3333C74 46.6667 69.375 32.6667 50.875 32.6667C32.375 32.6667 27.75 46.6667 27.75 51.3333C27.75 56 32.375 56 32.375 56L69.375 56ZM32.4767 51.3333L69.2732 51.3333C69.2949 51.3308 69.3165 51.3277 69.338 51.324L69.375 51.3147C69.3658 50.0827 68.6026 46.508 65.86 43.288C63.307 40.2687 58.8208 37.3333 50.875 37.3333C42.9339 37.3333 38.4476 40.2733 35.89 43.288C33.1474 46.508 32.3796 50.0873 32.375 51.3147C32.4089 51.3213 32.4428 51.3275 32.4767 51.3333L32.4767 51.3333ZM50.875 23.3333C53.3283 23.3333 55.681 22.35 57.4157 20.5997C59.1504 18.8493 60.125 16.4754 60.125 14C60.125 11.5246 59.1504 9.15068 57.4157 7.40034C55.681 5.65 53.3283 4.66667 50.875 4.66667C48.4217 4.66667 46.069 5.65 44.3343 7.40034C42.5996 9.15068 41.625 11.5246 41.625 14C41.625 16.4754 42.5996 18.8493 44.3343 20.5997C46.069 22.35 48.4217 23.3333 50.875 23.3333ZM64.75 14C64.75 15.8385 64.3911 17.659 63.6938 19.3576C62.9965 21.0561 61.9745 22.5995 60.6861 23.8995C59.3977 25.1995 57.8681 26.2307 56.1847 26.9343C54.5013 27.6379 52.6971 28 50.875 28C49.0529 28 47.2487 27.6379 45.5653 26.9343C43.8819 26.2307 42.3523 25.1995 41.0639 23.8995C39.7755 22.5995 38.7535 21.0561 38.0562 19.3576C37.3589 17.659 37 15.8385 37 14C37 10.287 38.4618 6.72601 41.0639 4.10051C43.666 1.475 47.1951 4.14483e-15 50.875 0C54.5549 2.07242e-15 58.084 1.475 60.6861 4.10051C63.2882 6.72601 64.75 10.287 64.75 14L64.75 14ZM32.079 33.9733C30.2289 33.3855 28.3218 32.9991 26.3902 32.8207C25.3049 32.7165 24.2152 32.6651 23.125 32.6667C4.625 32.6667 0 46.6667 0 51.3333C0 54.446 1.54013 56 4.625 56L24.124 56C23.4384 54.5431 23.0964 52.9459 23.125 51.3333C23.125 46.62 24.8686 41.804 28.1663 37.7813C29.2901 36.4093 30.599 35.126 32.079 33.9733ZM22.755 37.3333C15.0405 37.4267 10.6606 40.32 8.14 43.288C5.37887 46.5267 4.625 50.1153 4.625 51.3333L18.5 51.3333C18.5 46.4567 19.9939 41.5987 22.755 37.3333ZM6.9375 16.3333C6.9375 12.6203 8.39933 9.05935 11.0014 6.43384C13.6035 3.80833 17.1326 2.33333 20.8125 2.33333C24.4924 2.33333 28.0215 3.80833 30.6236 6.43384C33.2257 9.05935 34.6875 12.6203 34.6875 16.3333C34.6875 20.0464 33.2257 23.6073 30.6236 26.2328C28.0215 28.8583 24.4924 30.3333 20.8125 30.3333C17.1326 30.3333 13.6035 28.8583 11.0014 26.2328C8.39933 23.6073 6.9375 20.0464 6.9375 16.3333L6.9375 16.3333ZM20.8125 7C18.3592 7 16.0065 7.98333 14.2718 9.73367C12.5371 11.484 11.5625 13.858 11.5625 16.3333C11.5625 18.8087 12.5371 21.1827 14.2718 22.933C16.0065 24.6833 18.3592 25.6667 20.8125 25.6667C23.2658 25.6667 25.6185 24.6833 27.3532 22.933C29.0879 21.1827 30.0625 18.8087 30.0625 16.3333C30.0625 13.858 29.0879 11.484 27.3532 9.73367C25.6185 7.98333 23.2658 7 20.8125 7Z",
              fill: "rgba(35,166,240,1)",
              fillRule: "evenodd",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="3.37%"
          bottom="2.18%"
          left="-0.69%"
          right="-2.08%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Flex
        padding="0px 0px 0px 0px"
        width="163px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "div")}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="600"
          color="rgba(37,43,66,1)"
          lineHeight="24px"
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
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="help@titanwarex.com"
          {...getOverrideProps(overrides, "h6151507")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Montserrat"
        fontSize="16px"
        fontWeight="700"
        color="rgba(37,43,66,1)"
        lineHeight="24px"
        textAlign="center"
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
        children="Get Support"
        {...getOverrideProps(overrides, "h5")}
      ></Text>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(35,166,240,1)"
        borderRadius="5px"
        padding="9px 19px 9px 19px"
        {...getOverrideProps(
          overrides,
          "button.primary-color.btn-outline.btn-sm"
        )}
      >
        <Text
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="600"
          color="rgba(35,166,240,1)"
          lineHeight="24px"
          textAlign="center"
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
          children="Submit Request"
          {...getOverrideProps(overrides, "h6151511")}
        ></Text>
      </Flex>
    </Flex>
  );
}
